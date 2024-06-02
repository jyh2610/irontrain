import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { PaginationContainer, PageButton, IconBox, PageCount } from "./styles";
import { sessionManage } from "../utills/sessionManage";

interface Props {
  totalCount: number | undefined;
  currentPage: number;
  onPageChange: (page: number) => void;
}
const range = 5;

export const PageNationBar = ({ totalCount, currentPage, onPageChange }: Props) => {
  if (!totalCount) return null;
  const { saveCurrentPageSessionStorage } = sessionManage();
  const totalPages = Math.ceil(totalCount / 12);

  let start = Math.max(1, Math.ceil(currentPage / range) * range - range + 1);
  let end = Math.min(totalPages, start + range - 1);

  const movePage = (page: number) => {
    if (totalPages < page || page < 1) return;
    onPageChange(page);
    saveCurrentPageSessionStorage(page);
  };

  const renderPageNumbers = () => {
    // 현재 페이지가 범위보다 큰 경우 다음 페이지로 넘어갈 때 시작 숫자를 조정합니다.
    if (currentPage > range) {
      start = Math.max(1, Math.ceil(currentPage / range) * range - range + 1);
      end = Math.min(totalPages, start + range - 1);
    }

    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  };

  return (
    <PaginationContainer>
      <IconBox onClick={() => movePage(1)}>
        <MdKeyboardDoubleArrowLeft size={20} />
      </IconBox>
      <IconBox onClick={() => movePage(currentPage - 1)}>
        <IoIosArrowBack size={20} />
      </IconBox>
      {renderPageNumbers().map((page) => (
        <PageButton key={page} onClick={() => movePage(page)} $isactive={currentPage === page ? "true" : "false"}>
          {page}
        </PageButton>
      ))}
      <IconBox onClick={() => movePage(currentPage + 1)}>
        <IoIosArrowForward size={20} />
      </IconBox>
      <IconBox onClick={() => movePage(totalPages)}>
        <MdKeyboardDoubleArrowRight size={20} />
      </IconBox>
      <PageCount>{`${start}-${end} of ${totalPages}`}</PageCount>
    </PaginationContainer>
  );
};

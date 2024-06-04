import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { PaginationContainer, PageButton, IconBox, PageCount } from "./styles";
import { storageManage } from "../utills/storageManage";

interface Props {
  totalCount: number | undefined;
  currentPage: number;
  onPageChange: (page: number) => void;
  saveSession: (page: number) => void;
}
const range = 5;

export const PageNationBar = ({ saveSession, totalCount, currentPage, onPageChange }: Props) => {
  if (!totalCount) return null;
  const totalPages = Math.ceil(totalCount / 12);

  let start = Math.max(1, Math.ceil(currentPage / range) * range - range + 1);
  let end = Math.min(totalPages, start + range - 1);

  const movePage = (page: number) => {
    if (totalPages < page || page < 1) return;
    onPageChange(page);
    saveSession(page);
  };

  const renderPageNumbers = () => {
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

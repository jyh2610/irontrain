import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { PaginationContainer, PageButton, IconBox } from "./styles";
import { sessionManage } from "../utills/sessionManage";

interface Props {
  totalCount: number | undefined;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const PageNationBar = ({ totalCount, currentPage, onPageChange }: Props) => {
  if (!totalCount) return null;
  const { saveCurrentPageSessionStorage } = sessionManage();
  const totalPages = Math.ceil(totalCount / 12);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const movePage = (page: number) => {
    onPageChange(page);
    saveCurrentPageSessionStorage(page);
  };

  return (
    <PaginationContainer>
      <IconBox>
        <IoIosArrowBack />
      </IconBox>
      {pageNumbers.map((page) => (
        <PageButton key={page} onClick={() => movePage(page)} $isactive={currentPage === page ? "true" : "false"}>
          {page}
        </PageButton>
      ))}
      <IconBox>
        <IoIosArrowForward />
      </IconBox>
    </PaginationContainer>
  );
};

import { useState } from "react";
import { SearchContainer, SearchInputContainer, BeforeGrayBorder, SearchInput, CancelButton, IconBox } from "./styles";
import { IoSearchSharp } from "react-icons/io5";

export const SearchBar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      {!isActive ? (
        <BeforeGrayBorder onClick={() => setIsActive(true)}>
          <IoSearchSharp size={20} />
        </BeforeGrayBorder>
      ) : (
        <SearchContainer>
          <SearchInputContainer>
            <SearchInput type="search" placeholder="리뷰를 검색하세요" />
            <IconBox onClick={() => setIsActive(false)}>
              <IoSearchSharp size={20} />
            </IconBox>
          </SearchInputContainer>
          <CancelButton onClick={() => setIsActive(false)}>취소</CancelButton>
        </SearchContainer>
      )}
    </div>
  );
};

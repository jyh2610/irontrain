import { useState } from "react";
import { SearchContainer, SearchInputContainer, BeforeGrayBorder, SearchInput, CancelButton, IconBox } from "./styles";
import { IoSearchSharp } from "react-icons/io5";
import { useBoardProvider } from "@src/entities/board/context/FilterProvider";

export const SearchBar = () => {
  const [isActive, setIsActive] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { setFilter } = useBoardProvider();

  const searchHandler = () => {
    setFilter((prev) => {
      return { ...prev, search: inputValue };
    });
    setIsActive(false);
  };

  const clearInputValue = () => {
    setInputValue("");
    setIsActive(false);
  };

  return (
    <div>
      {!isActive ? (
        <BeforeGrayBorder onClick={() => setIsActive(true)}>
          <IoSearchSharp size={20} />
        </BeforeGrayBorder>
      ) : (
        <SearchContainer>
          <SearchInputContainer>
            <SearchInput
              type="search"
              placeholder="리뷰를 검색하세요"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <IconBox onClick={searchHandler}>
              <IoSearchSharp size={20} />
            </IconBox>
          </SearchInputContainer>
          <CancelButton onClick={clearInputValue}>취소</CancelButton>
        </SearchContainer>
      )}
    </div>
  );
};

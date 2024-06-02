import { useState } from "react";
import { initialState } from "../board/constant";
import { useBoardProvider } from "../board/context/FilterProvider";
import { Dropdown } from "./Dropdown/Dropdown";
import { SearchBar } from "./searchBar/SearchBar";
import { category, starScore, reviewKind } from "@src/shared/index";
import { IoIosList, IoMdGrid } from "react-icons/io";
import { HeaderContainer, FilterContainer, RotatedResetIcon, ViewSelectContainer, ViewIconWrapper } from "./styles";

export const Header = () => {
  const { setFilter } = useBoardProvider();
  const [selectedView, setSelectedView] = useState<"list" | "grid">("grid");

  const handleViewChange = (view: "list" | "grid") => {
    setSelectedView(view);
  };

  return (
    <HeaderContainer>
      <FilterContainer>
        <SearchBar />
        <Dropdown title="리뷰종류" dropList={category} />
        <Dropdown vertical={true} title="별점" dropList={starScore} />
        <Dropdown title="카테고리" dropList={reviewKind} />
        <Dropdown vertical={true} title="유형순" dropList={["최신순", "추천순"]} />
        <RotatedResetIcon size={30} onClick={() => setFilter(initialState)} />
      </FilterContainer>
      <ViewSelectContainer>
        <ViewIconWrapper
          $isselected={selectedView === "list" ? "true" : "false"}
          onClick={() => handleViewChange("list")}
        >
          <IoIosList size={32} />
        </ViewIconWrapper>
        <ViewIconWrapper
          $isselected={selectedView === "grid" ? "true" : "false"}
          onClick={() => handleViewChange("grid")}
        >
          <IoMdGrid size={32} />
        </ViewIconWrapper>
      </ViewSelectContainer>
    </HeaderContainer>
  );
};

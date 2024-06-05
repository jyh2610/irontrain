import { Dispatch } from "react";
import { initialFilterState } from "../board/constant";
import { useBoardProvider } from "../board/context/FilterProvider";
import { Dropdown } from "./Dropdown/Dropdown";
import { SearchBar } from "./searchBar/SearchBar";
import { category, starScore, storageManage } from "@src/shared/index";
import { IoIosList, IoMdGrid } from "react-icons/io";
import { HeaderContainer, FilterContainer, RotatedResetIcon, ViewSelectContainer, ViewIconWrapper } from "./styles";

interface Props {
  selectedView: string;
  setSelectedView: Dispatch<React.SetStateAction<string>>;
}
export const Header = ({ selectedView, setSelectedView }: Props) => {
  const { setFilter } = useBoardProvider();
  const { saveCurrentViewTypeSessionStorage } = storageManage();

  const handleViewChange = (view: "list" | "grid") => {
    setSelectedView(view);
    saveCurrentViewTypeSessionStorage(view);
  };

  return (
    <HeaderContainer>
      <FilterContainer>
        <SearchBar />
        <Dropdown title="태그" dropList={category} />
        <Dropdown title="별점" dropList={starScore} />
        <RotatedResetIcon size={30} onClick={() => setFilter(initialFilterState)} />
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

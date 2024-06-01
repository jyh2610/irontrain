import { Dropdown } from "./Dropdown/Dropdown";
import { SearchBar } from "./searchBar/SearchBar";
import { HeaderContainer, RotatedResetIcon } from "./styles";
import { category, starScore, reviewKind } from "@src/shared/index";

export const Header = () => {
  return (
    <HeaderContainer>
      <SearchBar />
      <Dropdown title="리뷰 종류" dropList={category} />
      <Dropdown vertical={true} title="별점" dropList={starScore} />
      <Dropdown title="카테고리" dropList={reviewKind} />
      <Dropdown vertical={true} title="유형순" dropList={["유형순", "최신순", "추천순"]} />
      <RotatedResetIcon size={30} />
    </HeaderContainer>
  );
};

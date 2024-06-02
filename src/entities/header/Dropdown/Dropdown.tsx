import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { DropdownContainer, DropdownBox } from "./style";
import { DropdownList } from "./ui/DropdownList";
import { useBoardProvider } from "@src/entities";
import { useClickOutside } from "@src/shared";

interface Props {
  title: string;
  vertical?: boolean;
  dropList: string[];
}

export const Dropdown = ({ title, vertical, dropList }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { setFilter } = useBoardProvider();
  const dropdownRef = useClickOutside(() => setIsOpen(false));

  const handleSelection = (selectedItems: string[]) => {
    if (title === "리뷰종류") {
      setFilter((prev) => ({ ...prev, review: selectedItems }));
    }
    if (title === "별점") {
      setFilter((prev) => ({ ...prev, rating: selectedItems }));
    }
    if (title === "카테고리") {
      setFilter((prev) => ({ ...prev, category: selectedItems }));
    }
    if (title === "유형순") {
      setFilter((prev) => ({ ...prev, type: selectedItems }));
    }
  };
  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownBox onClick={() => setIsOpen((prev) => !prev)}>
        <p>{title}</p>
        <BiChevronDown size={24} />
      </DropdownBox>
      {isOpen && (
        <DropdownList onSelectionChange={handleSelection} vertical={vertical} setIsOpen={setIsOpen} list={dropList} />
      )}
    </DropdownContainer>
  );
};

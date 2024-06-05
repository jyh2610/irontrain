import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { DropdownContainer, DropdownBox } from "./style";
import { useClickOutside } from "@src/shared";
import VerticalDropdownList from "./ui/VerticalDropdownList";

interface Props {
  title: string;
  dropList: string[];
}

export const Dropdown = ({ title, dropList }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useClickOutside(() => setIsOpen(false));

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownBox onClick={() => setIsOpen((prev) => !prev)}>
        <p>{title}</p>
        <BiChevronDown size={24} />
      </DropdownBox>
      {isOpen && <VerticalDropdownList title={title} list={dropList} setIsOpen={setIsOpen} />}
    </DropdownContainer>
  );
};

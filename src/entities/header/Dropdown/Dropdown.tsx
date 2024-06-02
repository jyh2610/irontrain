import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { DropdownContainer, DropdownBox } from "./style";
import { useClickOutside } from "@src/shared";
import VerticalDropdownList from "./ui/VerticalDropdownList";
import HorizontalDropdownList from "./ui/HorizontalDropdownList";

interface Props {
  title: string;
  vertical?: boolean;
  dropList: string[];
}

export const Dropdown = ({ title, vertical, dropList }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useClickOutside(() => setIsOpen(false));

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownBox onClick={() => setIsOpen((prev) => !prev)}>
        <p>{title}</p>
        <BiChevronDown size={24} />
      </DropdownBox>
      {isOpen && (
        <>
          {vertical ? (
            <VerticalDropdownList title={title} list={dropList} setIsOpen={setIsOpen} />
          ) : (
            <HorizontalDropdownList title={title} list={dropList} setIsOpen={setIsOpen} />
          )}
        </>
      )}
    </DropdownContainer>
  );
};

import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { DropdownContainer, DropdownBox } from "./style";
import { DropdownList } from "./ui/DropdownList";

interface Props {
  title: string;
  vertical?: boolean;
  dropList: string[];
}

export const Dropdown = ({ title, vertical, dropList }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownContainer>
      <DropdownBox onClick={() => setIsOpen((prev) => !prev)}>
        <p>{title}</p>
        <BiChevronDown size={24} />
      </DropdownBox>
      {isOpen && <DropdownList vertical={vertical} setIsOpen={setIsOpen} list={dropList} />}
    </DropdownContainer>
  );
};

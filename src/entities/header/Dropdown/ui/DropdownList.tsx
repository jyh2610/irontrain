import { Dispatch } from "react";
import VerticalDropdownList from "./VerticalDropdownList";
import HorizontalDropdownList from "./HorizontalDropdownList";

interface Props {
  vertical?: boolean;
  list: string[];
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
  onSelectionChange: (selectedItems: string[]) => void;
}

export const DropdownList = ({ list, setIsOpen, vertical, onSelectionChange }: Props) => {
  return (
    <>
      {vertical ? (
        <VerticalDropdownList setIsOpen={setIsOpen} onSelectionChange={onSelectionChange} list={list} />
      ) : (
        <HorizontalDropdownList list={list} setIsOpen={setIsOpen} onSelectionChange={onSelectionChange} />
      )}
    </>
  );
};

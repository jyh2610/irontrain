import { Dispatch, useEffect, useState } from "react";
import { DropListContainer, DropListBox, ListBox, OptionSelectButton } from "./styles";

interface Props {
  list: string[];
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
  onSelectionChange: (selectedItems: string[]) => void;
}

const HorizontalDropdownList = ({ list, setIsOpen, onSelectionChange }: Props) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const selectItem = (item: string) => {
    if (selectedItems.includes(item)) {
      setSelectedItems((prev) => prev.filter((i) => i !== item));
    } else {
      setSelectedItems((prev) => [...prev, item]);
    }
  };

  useEffect(() => {
    onSelectionChange(selectedItems);
  }, [selectedItems]);

  return (
    <DropListContainer>
      <DropListBox>
        {list.map((item, index) => (
          <ListBox
            key={index}
            $isactive={selectedItems.includes(item) ? "true" : "false"}
            onClick={() => selectItem(item)}
          >
            {item}
          </ListBox>
        ))}
      </DropListBox>
      <OptionSelectButton onClick={() => setIsOpen(false)}>완료</OptionSelectButton>
    </DropListContainer>
  );
};

export default HorizontalDropdownList;

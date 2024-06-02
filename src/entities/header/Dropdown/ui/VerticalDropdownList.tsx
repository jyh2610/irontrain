import React, { Dispatch, useEffect, useState } from "react";
import { BasicDropListContainer, BasicDropListBox, BasicListBox } from "./styles";

interface Props {
  list: string[];
  onSelectionChange: (selectedItems: string[]) => void;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
}

const VerticalDropdownList = ({ list, onSelectionChange, setIsOpen }: Props) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  console.log(selectedItems);

  const selectItem = (item: string) => {
    if (selectedItems.includes(item)) {
      setSelectedItems((prev) => prev.filter((i) => i !== item));
    } else {
      setSelectedItems((prev) => [...prev, item]);
    }
    setIsOpen(false);
  };

  useEffect(() => {
    onSelectionChange(selectedItems);
  }, [selectedItems]);

  return (
    <BasicDropListContainer>
      <BasicDropListBox>
        {list.map((item, index) => (
          <BasicListBox key={index} onClick={() => selectItem(item)}>
            {item}
          </BasicListBox>
        ))}
      </BasicDropListBox>
    </BasicDropListContainer>
  );
};

export default VerticalDropdownList;

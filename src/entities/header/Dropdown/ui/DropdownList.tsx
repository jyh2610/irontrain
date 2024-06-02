import { Dispatch, useEffect, useState } from "react";
import {
  BasicDropListContainer,
  DropListContainer,
  DropListBox,
  ListBox,
  OptionSelectButton,
  BasicDropListBox,
  BasicListBox,
} from "./styles";

interface Props {
  vertical?: boolean;
  list: string[];
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
  onSelectionChange: (selectedItems: string[]) => void; // 추가된 콜백 함수
}

export const DropdownList = ({ list, setIsOpen, vertical, onSelectionChange }: Props) => {
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
    <>
      {vertical ? (
        <BasicDropListContainer>
          <BasicDropListBox>
            {list.map((item, index) => (
              <BasicListBox key={index} onClick={() => selectItem(item)}>
                {item}
              </BasicListBox>
            ))}
          </BasicDropListBox>
        </BasicDropListContainer>
      ) : (
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
      )}
    </>
  );
};

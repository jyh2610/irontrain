import { Dispatch, useState } from "react";
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
}

export const DropdownList = ({ list, setIsOpen, vertical }: Props) => {
  const [selectedItem, setSelectedItem] = useState<number[]>([]);

  const selectList = (index: number) => {
    if (findSelectedIndex(index)) {
      setSelectedItem((prev) => prev.filter((item) => item !== index));
    } else {
      setSelectedItem((prev) => [...prev, index]);
    }
  };

  const findSelectedIndex = (index: number): boolean => {
    return selectedItem.includes(index);
  };

  return (
    <>
      {vertical ? (
        <BasicDropListContainer>
          <BasicDropListBox>
            {list.map((item, index) => (
              <BasicListBox key={index} onClick={() => setIsOpen((prev) => !prev)}>
                {item}
              </BasicListBox>
            ))}
          </BasicDropListBox>
        </BasicDropListContainer>
      ) : (
        <DropListContainer>
          <DropListBox>
            {list.map((item, index) => (
              <ListBox key={index} isActive={findSelectedIndex(index)} onClick={() => selectList(index)}>
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

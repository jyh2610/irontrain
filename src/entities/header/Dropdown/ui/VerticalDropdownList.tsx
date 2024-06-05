import React, { Dispatch } from "react";
import { BasicDropListContainer, BasicDropListBox, BasicListBox } from "./styles";
import { useBoardProvider } from "@src/entities";
import { BoardState } from "@src/entities/board/type";
import { mappingTitle } from "../constant";

interface Props {
  title: string;
  list: string[];
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
}

const VerticalDropdownList = ({ title, list, setIsOpen }: Props) => {
  const { setFilter, setPage } = useBoardProvider();
  const mappingKey: keyof BoardState = mappingTitle[title];

  const selectItem = (item: string) => {
    setFilter((prev) => {
      return {
        ...prev,
        [mappingKey]: item,
      };
    });
    setPage(1);
    setIsOpen(false);
  };

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

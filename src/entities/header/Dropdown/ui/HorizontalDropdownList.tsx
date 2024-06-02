import { Dispatch } from "react";
import { DropListContainer, DropListBox, ListBox, OptionSelectButton } from "./styles";
import { useBoardProvider } from "@src/entities";
import { BoardFilterState } from "@src/entities/board/type";
import { mappingTitle } from "../constant";

interface Props {
  title: string;
  list: string[];
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
}

const HorizontalDropdownList = ({ title, list, setIsOpen }: Props) => {
  const { filter, setFilter } = useBoardProvider();
  const mappingKey: keyof BoardFilterState = mappingTitle[title];

  const selectItem = (item: string) => {
    if (filter[mappingKey].includes(item)) {
      setFilter((prev) => {
        return {
          ...prev,
          [mappingKey]: prev[mappingKey].filter((selectItem) => selectItem !== item),
        };
      });
    } else {
      setFilter((prev) => {
        return {
          ...prev,
          [mappingKey]: [...prev[mappingKey], item],
        };
      });
    }
  };

  return (
    <DropListContainer>
      <DropListBox>
        {list.map((item, index) => (
          <ListBox
            key={index}
            $isactive={filter[mappingKey].includes(item) ? "true" : "false"}
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

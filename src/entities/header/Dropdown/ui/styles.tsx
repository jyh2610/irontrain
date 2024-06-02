import styled from "styled-components";

export const BasicDropListContainer = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  border: 1px solid var(--color-border-gray);
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  z-index: 10;
`;
export const BasicDropListBox = styled.ul`
  width: 100%;
`;

export const BasicListBox = styled.li`
  width: 100%;
  padding: 1.6rem;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: var(--color-point);
  }
`;

export const DropListContainer = styled.div`
  position: absolute;
  border: 1px solid var(--color-border-gray);
  border-radius: 8px;
  top: 52px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  z-index: 10;
  background-color: white;
  box-shadow:
    rgba(0, 0, 0, 0.2) 0px 5px 5px -3px,
    rgba(0, 0, 0, 0.14) 0px 8px 10px 1px,
    rgba(0, 0, 0, 0.12) 0px 3px 14px 2px;
`;

export const DropListBox = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 한 줄당 최대 5개의 항목 */
  gap: 0.8rem;
  padding: 1rem 1.1rem;
`;

export const ListBox = styled.li<{ $isactive: string }>`
  white-space: nowrap;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${(props) => (props.$isactive === "true" ? "#d3d3d3" : "white")};

  padding: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-font-gray);
  box-sizing: border-box;

  &:hover {
    background-color: var(--color-point);
  }
`;

export const OptionSelectButton = styled.button`
  background-color: var(--color-background-gray);
  width: 100%;
  height: 3rem;
  &:hover {
    background-color: var(--color-point);
  }
`;

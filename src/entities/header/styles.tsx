import { GrPowerReset } from "react-icons/gr";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 3rem 2rem;
  border-bottom: 2px solid var(--color-border-gray);
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.8rem;
`;

export const RotatedResetIcon = styled(GrPowerReset)`
  transform: rotate(180deg);
  cursor: pointer;
`;

export const ViewSelectContainer = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const ViewIconWrapper = styled.div<{ $isselected: string }>`
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${({ $isselected }) => ($isselected === "true" ? "var(--color-background-gray)" : "transparent")};

  &:hover {
    background-color: var(--color-background-gray);
  }
`;

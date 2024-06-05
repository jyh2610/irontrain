import { GrPowerReset } from "react-icons/gr";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 2rem;
  border-bottom: 2px solid var(--color-border-gray);

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start; /* Align items to start for column layout */
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.8rem;

  @media (max-width: 500px) {
    width: 100%;
    gap: 0.5rem; /* Adjust gap for mobile */
  }
`;

export const RotatedResetIcon = styled(GrPowerReset)`
  transform: rotate(180deg);
  cursor: pointer;
`;

export const ViewSelectContainer = styled.div`
  display: flex;
  gap: 0.8rem;

  @media (max-width: 500px) {
    width: 100%;
    justify-content: flex-end; /* Align to the right for mobile */
    margin-top: 1rem; /* Add some margin to separate from filters */
  }
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

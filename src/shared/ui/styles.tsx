import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
`;

export const PageButton = styled.button<{ $isactive: string }>`
  margin: 0 0.5rem;
  padding: 1rem 1.3rem;
  cursor: pointer;
  background-color: ${({ $isactive }) => ($isactive === "true" ? "var(--color-point)" : "white")};
  border: 2px solid var(--color-border-gray);
  border-radius: 8px;
  transition:
    background-color 0.3s,
    color 0.3s;

  &:hover {
    background-color: var(--color-point);
  }
`;

export const IconBox = styled.div`
  margin: 0 0.5rem;
  padding: 1rem;
  cursor: pointer;
  border: 2px solid var(--color-border-gray);
  border-radius: 8px;
  &:hover {
    background-color: var(--color-point);
  }
`;

export const PageCount = styled.p`
  margin-left: 0.8rem;
  display: flex;
  align-items: center;
  color: var(--color-font-gray);
`;

import styled, { keyframes } from "styled-components";

const openAnimation = keyframes`
  from {
    max-width: 0;
    opacity: 0;
  }
  to {
    max-width: 100%;
    opacity: 1;
  }
`;

export const SearchContainer = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  gap: 0.8rem;
  align-items: center;
  animation: ${openAnimation} 0.5s ease-out forwards;
`;

export const BeforeGrayBorder = styled.button`
  width: 48px;
  height: 48px;
  border: 2px solid var(--color-border-gray);
  border-radius: 6px;
`;

export const SearchInputContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  width: 20rem;
  border-radius: 8px;
  background-color: var(--color-background-gray);
  padding: 0.8rem;
`;

export const SearchInput = styled.input`
  border-radius: 6px;
  width: 100%;
  height: 100%;
  border: none;
  background-color: var(--color-background-gray);
`;

export const IconBox = styled.div`
  cursor: pointer;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CancelButton = styled.button`
  width: 54px;
  height: 100%;
  min-width: 64px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.75;
  border-radius: 6px;

  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(248, 249, 250);
  }
`;

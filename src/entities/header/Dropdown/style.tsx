import styled from "styled-components";

export const DropdownContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: start;
`;

export const DropdownBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  width: 100%;
  height: 100%;
  padding: 12px 16px;
  border: 2px solid var(--color-border-gray);
  border-radius: 6px;
  cursor: pointer;
`;

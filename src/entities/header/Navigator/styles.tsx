import styled from "styled-components";

export const NavigateContainer = styled.div`
  padding: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid var(--color-border-gray);
  h1 {
    font-size: 24px;
    font-weight: bold;
  }
`;

export const ButtonBox = styled.div`
  border: 2px solid var(--color-border-gray);
  border-radius: 8px;
  padding: 1rem;

  &:hover {
    background-color: var(--color-point);
  }
`;
export const LogoBox = styled.div`
  width: 4rem;
  height: 4rem;

  img {
    object-fit: contain;
    height: 100%;
  }
`;
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

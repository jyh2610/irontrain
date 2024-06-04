import styled from "styled-components";

export const BoardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  padding: 2rem;
  justify-content: center;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const BoardListContainer = styled.div`
  margin: 1rem 0;
  padding: 1rem 2rem;
`;

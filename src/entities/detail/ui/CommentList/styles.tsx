import styled from "styled-components";

export const CommentListContainer = styled.div`
  padding-top: 2rem;
`;

export const CommentListHeader = styled.div`
  display: flex;
  align-items: end;
  gap: 0.6rem;
  h1 {
    font-size: 24px;
    font-weight: bold;
  }
  span {
    color: var(--color-font-gray);
    font-weight: bold;
  }
`;

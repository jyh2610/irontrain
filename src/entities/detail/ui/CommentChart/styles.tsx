import styled from "styled-components";

export const CommentChartContainer = styled.div``;

export const CommentInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CommentRatingAverageBox = styled.div`
  width: 30%;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--color-border-gray);
  padding: 0.5rem;
  &:hover {
    cursor: pointer;
  }
`;
export const CommentInputBox = styled.div`
  width: 57%;
  height: 10rem;
  border: 1px solid var(--color-border-gray);
  textarea {
    padding: 0.5rem;
    width: 100%;
    height: 100%;
    border: none;
    resize: none;
  }
`;

export const CommentRegButton = styled.button`
  width: 10%;
  height: 10rem;
  border: 1px solid var(--color-border-gray);
  &:hover {
    background-color: var(--color-background-gray);
  }
`;

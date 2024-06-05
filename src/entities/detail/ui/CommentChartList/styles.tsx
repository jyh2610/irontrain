import styled from "styled-components";

export const CommentChartContainer = styled.ul`
  height: 25rem;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const TitleBox = styled.div`
  margin-top: 5rem;
  display: flex;
  align-items: end;
  gap: 0.5rem;
  border-bottom: 2px solid var(--color-border-gray);
  padding-bottom: 1rem;
  span {
    color: var(--color-font-gray);
  }
  h1 {
    font-size: 24px;
    font-weight: bold;
  }
`;
export const CommentChartBox = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 2px solid var(--color-border-gray);
`;
export const CommentChartContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const LikeBox = styled.div`
  display: flex;
  item-align: center;
  justify-content: end;
  gap: 0.3rem;
  p {
    width: 2rem;
  }
`;

export const UpdateBtnBox = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 0.3rem;
  button {
    border: 2px solid var(--color-border-gray);
    border-radius: 6px;
    padding: 0.2rem;
    &:hover {
      background-color: var(--color-point);
    }
  }
`;

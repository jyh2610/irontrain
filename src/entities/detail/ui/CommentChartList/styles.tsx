import styled from "styled-components";

export const CommentChartContainer = styled.ul`
  margin-top: 5rem;
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
  justify-content: space-between;
  item-align: center;
  gap: 0.3rem;
  p {
    width: 2rem;
  }
`;

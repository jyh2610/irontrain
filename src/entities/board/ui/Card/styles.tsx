import styled from "styled-components";

export const CardContainer = styled.div`
  border: 3px solid var(--color-border-gray);
  border-radius: 8px;
  overflow: hidden;

  &:hover {
    border: 3px solid var(--color-point);
    cursor: pointer;
  }
`;

export const ImgBox = styled.div`
  width: 100%;
  height: 20rem;
  aspect-ratio: 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CardInfoBox = styled.div`
  border-top: 2px solid var(--color-border-gray);
  padding: 0.8rem 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
export const RatingBox = styled.div`
  display: flex;
  gap: 0.1rem;
`;

export const TagBox = styled.p`
  display: inline-flex;
  span {
    text-align: center;
    padding: 0.3rem 0.4rem;
    background-color: var(--color-point);
    border-radius: 6px;
  }
`;

export const InfoTopBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LikeBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

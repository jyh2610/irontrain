import styled from "styled-components";

export const CardContainer = styled.div`
  width: 20rem;
  border: 2px solid var(--color-border-gray);
  border-radius: 8px;
  overflow: hidden;
`;

export const ImgBox = styled.div`
  width: 20rem;
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

import styled from "styled-components";

export const ListViewContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  padding: 0.8rem;
  border-bottom: 2px solid var(--color-border-gray);
  &:first-child {
    border-top: 2px solid var(--color-border-gray);
  }
  &:hover {
    background-color: var(--color-background-gray);
    cursor: pointer;
  }
`;

export const ImgBox = styled.div`
  width: 6rem;
  height: 6rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StarAndDateBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: var(--color-font-gray);
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

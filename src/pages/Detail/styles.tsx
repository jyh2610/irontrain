import styled from "styled-components";

export const DetailContainer = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const ImgBox = styled.div`
  width: 100%;
  background-color: black;
  overflow: hidden;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  img {
    width: 30%;
    height: 20rem;
    object-fit: contain;
  }
`;

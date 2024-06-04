import styled from "styled-components";

export const DetailContainer = styled.div`
  height: 90vh;
  padding: 2rem;
  display: flex;
  justify-content: center;
  gap: 0.6rem;
`;

export const ImgBox = styled.div`
  width: 40%;
  background-color: black;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

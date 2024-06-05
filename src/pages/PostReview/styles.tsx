import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  max-height: 20rem;
  object-fit: contain;
  border-radius: 8px;
`;
export const DetailContainer = styled.div`
  width: 100%;
  padding: 2rem;
  align-items: center;
  gap: 2rem;
`;

export const ImgBox = styled.div`
  width: 100%;
  height: 20rem;
  background-color: black;
  overflow: hidden;
  border-radius: 8px;
  display: flex;
  justify-content: center;
`;

export const ImgUploadLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white; /* 아이콘 색상을 흰색으로 설정합니다. */
  font-size: 1.5rem; /* 아이콘과 텍스트의 크기를 조정합니다. */
`;
export const UploadContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const RegButton = styled.button`
  width: 100%;
  border: 2px solid var(--color-border-gray);
  border-radius: 6px;
  padding: 1rem;
  &:hover {
    background-color: var(--color-point);
  }
`;

import styled from "styled-components";

export const ReviewDetailContainer = styled.div`
  display: flex;
  justify-content: start;
  padding-top: 1rem;
`;

export const DetailTitleBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

export const IconBox = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  background-color: black;
  border-radius: 6px;
  overflow: hidden;
  img {
    height: 100%;
    object-fit: contain;
  }
`;

export const TitleInfoBox = styled.div`
  width: 80%;
  display: flex;
  gap: 0.2rem;
  input {
    width: 70%;
    padding: 0.5rem;
  }
  div {
    width: 40%;
  }
`;

export const LikeBox = styled.div`
  display: flex;
  gap: 0.3rem;
`;
export const ReviewDetailContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  padding: 2rem 0;
  border-top: 2px solid var(--color-border-gray);
  span {
    color: black;
  }

  textarea {
    height: 15rem;
  }
`;

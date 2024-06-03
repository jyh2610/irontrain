import { IGetReview } from "@src/entities/board/type";
import { useLocation } from "react-router-dom";
import { DetailContainer, ImgBox } from "./styles";
import { DetailList } from "@src/entities/detail";

export const Detail = () => {
  const { state } = useLocation();
  const review: IGetReview = state?.review;

  return (
    <DetailContainer>
      <ImgBox>
        <img src={review.path} alt="리뷰이미지" />
      </ImgBox>
      <DetailList />
    </DetailContainer>
  );
};

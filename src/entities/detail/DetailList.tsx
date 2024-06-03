import { useLocation } from "react-router-dom";
import { IGetReview } from "../board/type";
import { CommentList } from "./ui/CommentList/CommentList";
import { ReviewDetail } from "./ui/ReviewDetail/ReviewDetail";
import { DetailListContainer } from "./styles";

export const DetailList = () => {
  const { state } = useLocation();
  const review: IGetReview = state?.review;

  return (
    <DetailListContainer>
      <ReviewDetail review={review} />
      <CommentList comments={review.comments} />
    </DetailListContainer>
  );
};

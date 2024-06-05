import { IGetReviewWithAverages } from "../board/type";
import { CommentList } from "./ui/CommentList/CommentList";
import { ReviewDetail } from "./ui/ReviewDetail/ReviewDetail";
import { DetailListContainer } from "./styles";

interface Props {
  review: IGetReviewWithAverages;
}
export const DetailList = ({ review }: Props) => {
  return (
    <DetailListContainer>
      <ReviewDetail review={review} />
      <CommentList comments={review.comments} />
    </DetailListContainer>
  );
};

import { IGetReview } from "../board/type";
import { CommentList } from "./ui/CommentList/CommentList";
import { ReviewDetail } from "./ui/ReviewDetail/ReviewDetail";
import { DetailListContainer } from "./styles";

interface Props {
  review: IGetReview;
}
export const DetailList = ({ review }: Props) => {
  return (
    <DetailListContainer>
      <ReviewDetail review={review} />
      <CommentList comments={review.comments} />
    </DetailListContainer>
  );
};

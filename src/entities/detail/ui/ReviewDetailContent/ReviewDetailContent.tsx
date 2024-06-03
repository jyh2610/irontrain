import { ReviewDetailContentContainer } from "./styles";
import { IGetReview } from "@src/entities/board/type";

interface Props {
  review: IGetReview;
}

export const ReviewDetailContent = ({ review }: Props) => {
  return (
    <ReviewDetailContentContainer>
      <p>{review.content}</p>
    </ReviewDetailContentContainer>
  );
};

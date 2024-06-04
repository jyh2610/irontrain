import { IGetReviewWithAverages } from "@src/entities/board/type";
import {
  ReviewDetailContainer,
  DetailTitleBox,
  IconBox,
  TitleInfoBox,
  SubInfoBox,
  LikeBox,
  RatingBox,
  ReviewDetailContentContainer,
} from "./styles";
import { FaRegThumbsUp } from "react-icons/fa";
import { calculateLikes, renderStars, storageManage } from "@src/shared";
import { PutLikeReview } from "../../api";

interface Props {
  review: IGetReviewWithAverages;
}

export const ReviewDetail = ({ review }: Props) => {
  const fullStars = Math.floor(review.rating);
  const halfStar = review.rating % 1 >= 0.5;

  const { UUID } = storageManage();

  return (
    <>
      <ReviewDetailContainer>
        <DetailTitleBox>
          <IconBox>
            <img src={review.path} alt="썸네일" />
          </IconBox>
          <TitleInfoBox>
            <p>{review.title}</p>
            <SubInfoBox>
              <RatingBox>
                <p>{renderStars({ fullStars, halfStar })}</p>
                <LikeBox onClick={() => PutLikeReview(review, UUID!, review.id)}>
                  <FaRegThumbsUp />
                  <p>{calculateLikes(review.comments)}</p>
                </LikeBox>
              </RatingBox>
              <p>2024-06-01</p>
            </SubInfoBox>
          </TitleInfoBox>
        </DetailTitleBox>
      </ReviewDetailContainer>
      <ReviewDetailContentContainer>
        <div>{renderStars({ fullStars, halfStar })}</div>
        <p>{review.content}</p>
      </ReviewDetailContentContainer>
    </>
  );
};

import { IGetReview } from "@src/entities/board/type";
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
import { renderStars, storageManage } from "@src/shared";
import { PutLikeReview } from "../../api";

interface Props {
  review: IGetReview;
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
                <LikeBox onClick={() => PutLikeReview(review, UUID!)}>
                  <FaRegThumbsUp />
                  <p>{review.likedUuids.length}</p>
                </LikeBox>
              </RatingBox>
              <p>{review.date_created}</p>
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

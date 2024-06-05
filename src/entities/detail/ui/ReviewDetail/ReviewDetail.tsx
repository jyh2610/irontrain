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
import { usePutLikeReview } from "../../api";
import { useToast } from "@src/app/providers/ToastProvider";

interface Props {
  review: IGetReview;
}

export const ReviewDetail = ({ review }: Props) => {
  const fullStars = Math.floor(review.rating);
  const halfStar = review.rating % 1 >= 0.5;

  const { UUID } = storageManage();
  const { mutate } = usePutLikeReview(review, UUID!);
  const { showToast } = useToast();

  const likeHandler = () => {
    mutate();
    showToast({
      type: "success",
      message: "좋아요를 누르셨습니다.",
    });
  };
  const handleStarClick = (index: number) => {
    setRating(index);
  };
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
                <LikeBox onClick={() => UUID && likeHandler()}>
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
        <span>작성자 리뷰</span>
        <div>{renderStars({ fullStars, halfStar })}</div>
        <p>{review.content}</p>
      </ReviewDetailContentContainer>
    </>
  );
};

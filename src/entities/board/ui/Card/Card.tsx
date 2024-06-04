import { IGetReviewWithAverages } from "../../type";
import { useNavigate } from "react-router-dom";
import { calculateLikes, renderStars, truncateText } from "@src/shared";
import { FaRegThumbsUp } from "react-icons/fa";
import { CardContainer, ImgBox, CardInfoBox, RatingBox, TagBox, InfoTopBox, LikeBox } from "./styles";

interface Props {
  review: IGetReviewWithAverages;
}

export const Card = ({ review }: Props) => {
  const navigate = useNavigate();
  const fullStars = Math.floor(review.averageRating);
  const halfStar = review.averageRating % 1 >= 0.5;

  return (
    <CardContainer
      onClick={() =>
        navigate(`/detail/${review.id}`, {
          state: {
            review: review,
          },
        })
      }
    >
      <ImgBox>
        <img src={review.path} alt="리뷰이미지" />
      </ImgBox>
      <CardInfoBox>
        <InfoTopBox>
          <RatingBox>{renderStars({ fullStars, halfStar })}</RatingBox>
          <LikeBox>
            <FaRegThumbsUp />
            <p>{calculateLikes(review.comments)}</p>
          </LikeBox>
        </InfoTopBox>
        <p>{truncateText(review.content)}</p>
        <p>{review.date_created}</p>
        <TagBox>
          <span>#{review.category}</span>
        </TagBox>
      </CardInfoBox>
    </CardContainer>
  );
};

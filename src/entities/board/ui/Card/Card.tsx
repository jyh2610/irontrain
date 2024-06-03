import { IGetReview } from "../../type";
import { useNavigate } from "react-router-dom";
import { renderStars } from "../../utill/renderStart";
import { truncateText } from "@src/shared";
import { FaRegThumbsUp } from "react-icons/fa";
import { calculateLikes } from "../../utill/calculateAverageRating";
import { CardContainer, ImgBox, CardInfoBox, RatingBox, TagBox, InfoTopBox, LikeBox } from "./styles";

interface Props {
  review: IGetReview;
}

export const Card = ({ review }: Props) => {
  const navigate = useNavigate();
  const fullStars = Math.floor(review.rating);
  const halfStar = review.rating % 1 >= 0.5;

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

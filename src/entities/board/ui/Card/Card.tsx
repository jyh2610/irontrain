import { CardContainer, ImgBox, CardInfoBox, RatingBox, TagBox } from "./styles";
import { IGetReview } from "../../type";
import { useNavigate } from "react-router-dom";
import { renderStars } from "../../utill/renderStart";
import { truncateText } from "@src/shared";

interface Props {
  review: IGetReview;
}

export const Card = ({ review }: Props) => {
  const navigate = useNavigate();
  const fullStars = Math.floor(review.rating);
  const halfStar = review.rating % 1 >= 0.5;

  return (
    <CardContainer onClick={() => navigate(`/detail/${review.id}`)}>
      <ImgBox>
        <img src={review.path} alt="리뷰이미지" />
      </ImgBox>
      <CardInfoBox>
        <RatingBox>{renderStars({ fullStars, halfStar })}</RatingBox>
        <p>{truncateText(review.content)}</p>
        <p>{review.date_created}</p>
        <TagBox>
          <span>#{review.category}</span>
        </TagBox>
      </CardInfoBox>
    </CardContainer>
  );
};

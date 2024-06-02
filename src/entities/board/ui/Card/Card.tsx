import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { CardContainer, ImgBox, CardInfoBox, RatingBox } from "./styles";
import { IGetReview } from "../../type";
import { useNavigate } from "react-router-dom";

interface Props {
  review: IGetReview;
}

export const Card = ({ review }: Props) => {
  const navigate = useNavigate();
  const fullStars = Math.floor(review.rating);
  const halfStar = review.rating % 1 >= 0.5;

  const renderStars = () => {
    const stars = Array.from({ length: 5 }).map((_, index) => {
      if (index < fullStars) {
        return <IoIosStar key={index} size={18} color="var(--color-point)" />;
      } else if (index === fullStars && halfStar) {
        return <IoIosStarHalf key={index} size={18} color="var(--color-point)" />;
      } else {
        return <IoIosStarOutline key={index} size={18} color="gray" />;
      }
    });

    return stars;
  };

  const truncateText = (text: string) => {
    if (text.length > 15) {
      return text.substring(0, 20) + "...";
    }
    return text;
  };
  return (
    <CardContainer onClick={() => navigate(`/detail/${review.id}`)}>
      <ImgBox>
        <img src={review.path} alt="리뷰이미지" />
      </ImgBox>
      <CardInfoBox>
        <RatingBox>{renderStars()}</RatingBox>
        <p>{truncateText(review.content)}</p>
        <p>{review.date_created}</p>
      </CardInfoBox>
    </CardContainer>
  );
};

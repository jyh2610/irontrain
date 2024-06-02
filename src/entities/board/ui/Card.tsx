import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { CardContainer, ImgBox, CardInfoBox, RatingBox } from "./styles";
import { IGetReview } from "../type";

interface Props {
  review: IGetReview;
}

export const Card = ({ review }: Props) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(review.rating);
    const halfStar = review.rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<IoIosStar key={i} size={18} color="var(--color-point)" />);
      } else if (i === fullStars && halfStar) {
        stars.push(<IoIosStarHalf key={i} size={18} color="var(--color-point)" />);
      } else {
        stars.push(<IoIosStarOutline key={i} size={18} color="gray" />);
      }
    }
    return stars;
  };
  const truncateText = (text: string) => {
    if (text.length > 15) {
      return text.substring(0, 20) + "...";
    }
    return text;
  };
  return (
    <CardContainer>
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

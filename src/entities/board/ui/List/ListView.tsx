import { useNavigate } from "react-router-dom";
import { IGetReview } from "../../type";
import { ImgBox, ListViewContainer, InfoBox, StarAndDateBox, TagBox } from "./styles";
import { renderStars } from "../../utill/renderStart";
import { truncateText } from "@src/shared";
import { FaRegThumbsUp } from "react-icons/fa";
import { calculateLikes } from "../../utill/calculateAverageRating";

interface Props {
  review: IGetReview;
}

export const ListView = ({ review }: Props) => {
  const navigate = useNavigate();
  const fullStars = Math.floor(review.rating);
  const halfStar = review.rating % 1 >= 0.5;

  return (
    <ListViewContainer
      onClick={() =>
        navigate(`/detail/${review.id}`, {
          state: {
            review: review,
          },
        })
      }
    >
      <ImgBox>
        <img src={review.path} />
      </ImgBox>
      <InfoBox>
        <StarAndDateBox>
          <div>{renderStars({ fullStars, halfStar })}</div>
          <div>
            <FaRegThumbsUp />
            <span>{calculateLikes(review.comments)}</span>
          </div>
          <p>{review.date_created}</p>
        </StarAndDateBox>
        <p>{truncateText(review.content)}</p>
        <TagBox>
          <span>#{review.category}</span>
        </TagBox>
      </InfoBox>
    </ListViewContainer>
  );
};

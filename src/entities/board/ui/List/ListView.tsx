import { useNavigate } from "react-router-dom";
import { IGetReviewWithAverages } from "../../type";
import { ImgBox, ListViewContainer, InfoBox, StarAndDateBox, TagBox } from "./styles";
import { renderStars } from "../../../../shared/utills/renderStars";
import { truncateText } from "@src/shared";
import { FaRegThumbsUp } from "react-icons/fa";

interface Props {
  review: IGetReviewWithAverages;
}

export const ListView = ({ review }: Props) => {
  const navigate = useNavigate();
  const fullStars = Math.floor(review.averageRating);
  const halfStar = review.averageRating % 1 >= 0.5;

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
            <span>{review.likedUuids.length}</span>
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

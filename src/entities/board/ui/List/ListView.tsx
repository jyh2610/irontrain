import { useNavigate } from "react-router-dom";
import { IGetReview } from "../../type";
import { ImgBox, ListViewContainer, InfoBox, StarAndDateBox, TagBox } from "./styles";
import { renderStars } from "../../utill/renderStart";
import { truncateText } from "@src/shared";

interface Props {
  review: IGetReview;
}

export const ListView = ({ review }: Props) => {
  const navigate = useNavigate();
  const fullStars = Math.floor(review.rating);
  const halfStar = review.rating % 1 >= 0.5;

  return (
    <ListViewContainer onClick={() => navigate(`/detail/${review.id}`)}>
      <ImgBox>
        <img src={review.path} />
      </ImgBox>
      <InfoBox>
        <StarAndDateBox>
          <div>{renderStars({ fullStars, halfStar })}</div>
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

import { calculateLikes, renderStars } from "@src/shared";
import { CommentChartContainer } from "./styles";
import { Comment } from "@src/entities/board/type";

interface Props {
  comments: Comment[];
}

export const CommentChart = ({ comments }: Props) => {
  const averageRating = calculateLikes(comments);
  console.log(averageRating);

  //   const fullStars = Math.floor(review.rating);
  //   const halfStar = review.rating % 1 >= 0.5;
  return <CommentChartContainer>{/* <div>{renderStars({ fullStars, halfStar })}</div> */}</CommentChartContainer>;
};

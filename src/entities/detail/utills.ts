import { Comment, IGetReview } from "../board/type";

export const updateNewReview = (review: IGetReview, comment: Comment) => {
  const updatedReview = {
    ...review,
    comments: [...review.comments, comment],
  };

  return updatedReview;
};

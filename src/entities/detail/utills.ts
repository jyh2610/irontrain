import { Comment, IGetReview } from "../board/type";

export const updateNewReview = (review: IGetReview, comment: Comment) => {
  const updatedReview = {
    ...review,
    comments: [...review.comments, comment],
  };

  return updatedReview;
};

export const deleteReviewComment = (review: IGetReview, id: string) => {
  const updatedReview = {
    ...review,
    comments: review.comments.filter((comment) => comment.id !== id),
  };

  return updatedReview;
};

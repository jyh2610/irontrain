import { Comment, IGetReview } from "../board/type";

export const updateNewReview = (review: IGetReview, comment: Comment) => {
  const existingCommentIndex = review.comments.findIndex((c) => c.id === comment.id);

  if (existingCommentIndex !== -1) {
    const updatedComments = [...review.comments];
    updatedComments[existingCommentIndex] = comment;
    updatedComments.unshift(updatedComments.splice(existingCommentIndex, 1)[0]);
    return {
      ...review,
      comments: updatedComments,
    };
  } else {
    return {
      ...review,
      comments: [comment, ...review.comments],
    };
  }
};

export const deleteReviewComment = (review: IGetReview, id: string) => {
  const updatedReview = {
    ...review,
    comments: review.comments.filter((comment) => comment.id !== id),
  };

  return updatedReview;
};

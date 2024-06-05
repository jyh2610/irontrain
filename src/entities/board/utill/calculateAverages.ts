import { IGetReview, IGetReviewWithAverages } from "../type";

export const calculateAverages = (reviews: IGetReview[]): IGetReviewWithAverages[] => {
  return reviews.map((review) => {
    if (!review || !review.comments || review.comments.length === 0) {
      return { ...review, averageRating: review.rating || 0 } as IGetReviewWithAverages;
    }

    const totalRatings = review.comments.reduce((sum, comment) => sum + comment.rating, 0) + (review.rating || 0);
    const averageRating = totalRatings / (review.comments.length + 1);

    return { ...review, averageRating } as IGetReviewWithAverages;
  });
};

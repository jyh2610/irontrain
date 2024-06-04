import { IGetReviewWithAverages } from "@src/entities/board/type";
import request from "@src/shared/apis/axios";

const PutLike = async (review: IGetReviewWithAverages) => {
  return request({
    method: "PUT",
    url: `reviews/${review.id}`,
    data: review,
  });
};
export const PutLikeComment = async (review: IGetReviewWithAverages, uuid: string, commentId: string) => {
  try {
    const comment = review.comments.find((item) => item.id === commentId);
    if (!comment) {
      console.error("Comment not found");
      return { success: false, message: "Comment not found" };
    }

    if (comment.likedUuids && comment.likedUuids.includes(uuid)) {
      comment.like--;
      comment.likedUuids = comment.likedUuids.filter((id) => id !== uuid);
      console.log("Like removed successfully.");
    } else {
      comment.like++;
      if (!comment.likedUuids) {
        comment.likedUuids = [];
      }
      comment.likedUuids.push(uuid);
      console.log("Like added successfully.");
    }

    await PutLike(review);

    return { success: true, message: "Operation completed successfully" };
  } catch (error) {
    return { success: false, message: "An error occurred while updating the like status" };
  }
};

export const PutLikeReview = async (
  review: IGetReviewWithAverages,
  uuid: string
): Promise<{ success: boolean; message: string }> => {
  try {
    if (review.likedUuids && review.likedUuids.includes(uuid)) {
      review.likes--;
      review.likedUuids = review.likedUuids.filter((id) => id !== uuid);
      console.log("Like removed from review successfully.");
    } else {
      review.likes++;
      if (!review.likedUuids) {
        review.likedUuids = [];
      }
      review.likedUuids.push(uuid);
      console.log("Like added to review successfully.");
    }

    await PutLike(review);

    return { success: true, message: "Operation completed successfully" };
  } catch (error) {
    console.error("An error occurred while updating the like status of the review:", error);
    return { success: false, message: "An error occurred while updating the like status of the review" };
  }
};

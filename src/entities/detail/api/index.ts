import { IGetReview } from "@src/entities/board/type";
import request from "@src/shared/apis/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const getReviewDetail = async (id: string) => {
  const res = await request<IGetReview>({
    method: "GET",
    url: `comments/${id}`,
  });
  return res.data;
};

export const useGetReviewDetail = (id: string) => {
  return useQuery<IGetReview, Error>({
    queryKey: ["review", id],
    queryFn: () => getReviewDetail(id),
    enabled: !!id,
  });
};

const PutLike = async (review: IGetReview) => {
  return request({
    method: "PUT",
    url: `reviews/${review.id}`,
    data: review,
  });
};
export const PutLikeComment = async (review: IGetReview | undefined, uuid: string, commentId: string) => {
  try {
    if (review) {
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
    }
    return { success: true, message: "Operation completed successfully" };
  } catch (error) {
    return { success: false, message: "An error occurred while updating the like status" };
  }
};

export const PutLikeReview = async (review: IGetReview, uuid: string) => {
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
  } catch (error) {
    console.error("An error occurred while updating the like status of the review:", error);
  }
};

// export const usePutLikeReview = () => {
//   const queryClient = useQueryClient();
//   return useMutation(PutLikeReview, {
//     onSuccess: () => {
//       queryClient.invalidateQueries(["review"]);
//     },
//   });
// };
// export const usePutLikeReview = () => {
//   return useMutation<{ success: boolean; message: string }, Error, { review: IGetReview; uuid: string }>(
//     PutLikeReview,
//     {
//       onSuccess: () => {
//         queryClient.invalidateQueries("review");
//       },
//     }
//   );
// };
// export const usePutLikeComment = () => {
//   return useMutation(PutLikeComment, {
//     onSuccess: () => {
//       queryClient.invalidateQueries(["review"]);
//     },
//   });
// };
export interface IPostComment {
  rating: number;
  text: string;
  uuid: string;
}

export const PostComment = ({ comment, id }: { comment: IPostComment; id: string }) => {
  request({
    method: "POST",
    url: `/reviews/${id}/comments`,
    data: comment,
  });
};

import { IGetReview } from "@src/entities/board/type";
import request from "@src/shared/apis/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// Fetch review details
export const getReviewDetail = async (id: string): Promise<IGetReview> => {
  const res = await request<IGetReview>({
    method: "GET",
    url: `reviews/${id}`,
  });
  return res.data;
};

// Custom hook to use review details
export const useGetReviewDetail = (id: string) => {
  return useQuery<IGetReview>({
    queryKey: ["review", id],
    queryFn: () => getReviewDetail(id),
  });
};

// Update the review with the modified data
const putReview = async (review: IGetReview): Promise<IGetReview> => {
  const res = await request<IGetReview>({
    method: "PUT",
    url: `reviews/${review.id}`,
    data: review,
  });
  return res.data;
};

export const usePutReview = (review: IGetReview) => {
  const queryClient = useQueryClient();
  const mutationFn = () => putReview(review);
  return useMutation<IGetReview | undefined, Error, void>({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["review", review.id.toString()] });
      queryClient.invalidateQueries({ queryKey: ["cardList"] });
    },
    onError: (error: unknown) => {
      console.error("Mutation failed:", error);
    },
  });
};

// Toggle like for a comment
export const putLikeComment = async (review: IGetReview, uuid: string, commentId: string) => {
  const comment = review.comments.find((item) => item.id === commentId);
  if (!comment) {
    console.error("Comment not found");
    return;
  }
  if (comment.likedUuids?.includes(uuid)) {
    comment.like--;
    comment.likedUuids = comment.likedUuids.filter((id) => id !== uuid);
    console.log("Like removed successfully.");
  } else {
    comment.like++;
    comment.likedUuids = comment.likedUuids || [];
    comment.likedUuids.push(uuid);
    console.log("Like added successfully.");
  }

  return await putReview(review);
};

export const putLikeReview = async (review: IGetReview, uuid: string): Promise<IGetReview> => {
  if (review.likedUuids?.includes(uuid)) {
    review.likes--;
    review.likedUuids = review.likedUuids.filter((id) => id !== uuid);
    console.log("Like removed from review successfully.");
  } else {
    review.likes++;
    review.likedUuids = review.likedUuids || [];
    review.likedUuids.push(uuid);
    console.log("Like added to review successfully.");
  }

  return putReview(review);
};

// Custom hook to mutate like status for a review
export const usePutLikeReview = (review: IGetReview, uuid: string) => {
  const queryClient = useQueryClient();
  const mutationFn = () => putLikeReview(review, uuid);
  return useMutation<IGetReview, Error, void>({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["review", review.id.toString()] });
      queryClient.invalidateQueries({ queryKey: ["cardList"] });
    },
    onError: (error: unknown) => {
      console.error("Mutation failed:", error);
    },
  });
};

export const usePutLikeComment = (review: IGetReview, uuid: string, commentId: string) => {
  const queryClient = useQueryClient();
  const mutationFn = () => putLikeComment(review, uuid, commentId);
  return useMutation<IGetReview | undefined, Error, void>({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["review", review.id.toString()] });
      queryClient.invalidateQueries({ queryKey: ["cardList"] });
    },
    onError: (error: unknown) => {
      console.error("Mutation failed:", error);
    },
  });
};

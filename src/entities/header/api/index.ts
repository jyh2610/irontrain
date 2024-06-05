import request from "@src/shared/apis/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const deleteReview = async (id: string) => {
  return request({
    method: "DELETE",
    url: `/reviews/${id}`,
  });
};

export const useDeleteReview = (id: string) => {
  const queryClient = useQueryClient();
  const mutationFn = () => deleteReview(id);
  return useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cardList"] });
    },
    onError: (error: unknown) => {
      console.error("Mutation failed:", error);
    },
  });
};

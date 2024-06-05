import { IGetReview } from "@src/entities/board/type";
import request from "@src/shared/apis/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// API 요청 함수
export const postReview = async (data: IGetReview) => {
  return request({
    method: "POST",
    url: "/reviews",
    data: data,
  });
};

export const usePostReview = (data: IGetReview) => {
  const queryClient = useQueryClient();
  const mutationFn = () => postReview(data);

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

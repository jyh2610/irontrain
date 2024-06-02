import request from "@src/shared/apis/axios";
import { IGetReview } from "../type";
import { useQuery } from "@tanstack/react-query";

export const getStoreList = async (page: number, limit: number) => {
  const res = await request<IGetReview[]>({
    method: "GET",
    url: `/reviews?_page=${page}&_limit=${limit}`,
  });
  return {
    data: res.data,
    totalCount: parseInt(res.headers["x-total-count"], 10),
  };
};

export const useGetStoreList = (page: number, limit: number) => {
  return useQuery<{ data: IGetReview[]; totalCount: number }, Error>({
    queryKey: ["cardList", page, limit],
    queryFn: () => getStoreList(page, limit),
  });
};

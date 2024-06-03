import { IGetReview } from "@src/entities/board/type";
import request from "@src/shared/apis/axios";
import { useQuery } from "@tanstack/react-query";

export const getSearchItems = async (searchKeyword: string) => {
  try {
    const res = await request<IGetReview[]>({
      method: "GET",
      params: { q: searchKeyword },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const useSearchItems = (searchKeyword: string) => {
  return useQuery({
    queryKey: ["searchItems", searchKeyword],
    queryFn: () => getSearchItems(searchKeyword),
    enabled: !!searchKeyword,
  });
};

import request from "@src/shared/apis/axios";
import { BoardState, IGetReview } from "../type";
import { useQuery } from "@tanstack/react-query";
import { filterMapping } from "../constant";

interface Params {
  _page: number;
  _limit: number;
  [key: string]: string | string[] | number;
}

// 필터링된 데이터 요청 함수
const getStoreList = async (page: number, limit: number, filters: BoardState) => {
  const params: Params = {
    _page: page,
    _limit: limit,
  };

  Object.keys(filters).forEach((key) => {
    const filterKey = key as keyof BoardState;
    const filterValue = filters[filterKey];
    if (Array.isArray(filterValue) && filterValue.length > 0) {
      params[filterMapping[filterKey]] = filterValue.join(",");
    } else if (typeof filterValue === "string" && filterValue) {
      params[filterMapping[filterKey]] = filterValue;
    }
  });

  const res = await request<IGetReview[]>({
    method: "GET",
    url: "/reviews",
    params,
  });
  return {
    data: res.data,
    totalCount: parseInt(res.headers["x-total-count"], 10),
  };
};

export const useGetStoreList = (page: number, limit: number, filters: BoardState) => {
  return useQuery<{ data: IGetReview[]; totalCount: number }, Error>({
    queryKey: ["cardList", page, limit, filters],
    queryFn: () => getStoreList(page, limit, filters),
    enabled: true,
  });
};

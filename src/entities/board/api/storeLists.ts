import request from "@src/shared/apis/axios";

export const getStoreList = async (page: number, limit: number) => {
  const res = await request({
    method: "GET",
    url: `/reviews?_page=${page}&_limit=${limit}`,
  });
  return {
    data: res.data,
    totalCount: parseInt(res.headers["x-total-count"], 10),
  };
};

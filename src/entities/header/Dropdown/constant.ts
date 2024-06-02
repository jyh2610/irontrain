import { BoardFilterState } from "@src/entities/board/type";

export const mappingTitle: { [key: string]: keyof BoardFilterState } = {
  리뷰종류: "review",
  별점: "rating",
  카테고리: "category",
  유형순: "type",
};

import { BoardFilterState } from "@src/entities/board/type";

export const mappingTitle: { [key: string]: keyof BoardFilterState } = {
  태그: "category",
  별점: "rating",
  카테고리: "date_created",
  유형순: "type",
};

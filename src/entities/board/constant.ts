import { BoardState } from "./type";

export const initialState: BoardState = {
  search: "",
  date_created: "",
  rating: "",
  category: "",
  type: "",
};

export const filterMapping = {
  search: "q",
  date_created: "date_created_like",
  rating: "rating_like",
  category: "category_like",
  type: "type_like",
};

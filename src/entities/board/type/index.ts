// src/features/board/types/index.ts
export interface BoardState extends BoardFilterState {
  search: string;
}

export interface BoardFilterState {
  date_created: string[];
  rating: string[];
  category: string[];
  type: string[];
}

export interface Comment {
  id: number;
  like: number;
  text: string;
  uuid: string;
}

export interface IGetReview {
  id: number;
  title: string;
  date_created: string;
  content: string;
  category: string;
  rating: number;
  likes: number;
  path: string;
  uuid: string;
  comments: Comment[];
}

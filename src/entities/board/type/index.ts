// src/features/board/types/index.ts
export interface BoardState extends BoardFilterState {
  search: string;
}

export interface BoardFilterState {
  date_created: string;
  rating: string;
  category: string;
  type: string;
}

export interface Comment {
  id: string;
  rating: number;
  like: number;
  text: string;
  uuid: string;
  likedUuids: string[];
}

export interface IGetReview {
  id: string;
  title: string;
  date_created: string;
  content: string;
  category: string;
  rating: number;
  likes: number;
  path: string;
  uuid: string;
  likedUuids: string[];
  comments: Comment[];
}

export type IGetReviewWithAverages = Omit<IGetReview, "comments"> & {
  comments: Comment[];
  averageRating: number;
};

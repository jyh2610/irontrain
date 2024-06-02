import React, { createContext, ReactNode, useContext, useState, useMemo } from "react";
import { BoardState, IGetReview } from "../type";
import { initialState } from "../constant";
import { useGetStoreList } from "../api/storeLists";

interface BoardManageContext {
  filter: BoardState;
  setFilter: React.Dispatch<React.SetStateAction<BoardState>>;
  reviewData: { data: IGetReview[]; totalCount: number } | undefined;
}

const BoardContext = createContext<BoardManageContext | null>(null);

export const useBoardProvider = () => {
  const context = useContext(BoardContext);
  if (!context) {
    throw new Error("This component must be used within a <BoardProvider> component.");
  }
  return context;
};

export const BoardProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [filter, setFilter] = useState<BoardState>(initialState);
  const { data: reviewData } = useGetStoreList(1, 12);

  const memorizedValue = useMemo(
    () => ({
      filter,
      setFilter,
      reviewData,
    }),
    [filter, reviewData]
  );

  return <BoardContext.Provider value={memorizedValue}>{children}</BoardContext.Provider>;
};

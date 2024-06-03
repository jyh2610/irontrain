import React, { createContext, ReactNode, useContext, useState, useMemo, useEffect } from "react";
import { BoardState, IGetReview } from "../type";
import { initialState } from "../constant";
import { useGetStoreList } from "../api/storeLists";
import { sessionManage } from "@src/shared";

interface BoardManageContext {
  filter: BoardState;
  setFilter: React.Dispatch<React.SetStateAction<BoardState>>;
  reviewData: { data: IGetReview[]; totalCount: number } | undefined;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
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
  const [page, setPage] = useState(1);

  const { data: reviewData } = useGetStoreList(page, 12, filter);
  const { currentPage } = sessionManage();

  useEffect(() => {
    currentPage && setPage(Number(currentPage));
  }, []);

  const memorizedValue = useMemo(
    () => ({
      filter,
      setFilter,
      reviewData,
      page,
      setPage,
    }),
    [filter, reviewData, page]
  );

  return <BoardContext.Provider value={memorizedValue}>{children}</BoardContext.Provider>;
};

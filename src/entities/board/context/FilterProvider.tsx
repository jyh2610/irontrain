import React, { createContext, ReactNode, useContext, useState, useMemo, useEffect } from "react";
import { BoardState, IGetReviewWithAverages } from "../type";
import { initialFilterState } from "../constant";
import { useGetStoreList } from "../api/storeLists";
import { generateUUID, storageManage } from "@src/shared";
import { calculateAverages } from "../utill/calculateAverages";

interface BoardManageContext {
  filter: BoardState;
  setFilter: React.Dispatch<React.SetStateAction<BoardState>>;
  reviewData: { data: IGetReviewWithAverages[]; totalCount: number } | undefined;
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
  const [filter, setFilter] = useState<BoardState>(initialFilterState);
  const [page, setPage] = useState(1);
  const { data: reviewData } = useGetStoreList(page, 12, filter);
  const { currentPage, UUID: uuid, saveUUIDLocalStorage } = storageManage();

  useEffect(() => {
    if (uuid === null) {
      const generatedUUID = generateUUID();
      saveUUIDLocalStorage(generatedUUID);
    }
  }, []);

  const processedReviewData = useMemo(() => {
    if (reviewData) {
      const dataWithAverages = calculateAverages(reviewData.data);
      return { ...reviewData, data: dataWithAverages };
    }
    return reviewData;
  }, [reviewData]);

  useEffect(() => {
    currentPage && setPage(Number(currentPage));
  }, []);

  const memorizedValue = useMemo(
    () => ({
      filter,
      setFilter,
      reviewData: processedReviewData,
      page,
      setPage,
    }),
    [filter, reviewData, page]
  );

  return <BoardContext.Provider value={memorizedValue}>{children}</BoardContext.Provider>;
};

import React, { createContext, Dispatch, ReactNode, useContext, useMemo, useState } from "react";
import { useGetReviewDetail } from "../api";
import { useParams } from "react-router-dom";
import { IGetReview, IGetReviewWithAverages } from "@src/entities/board/type";
import { calculateAverages } from "@src/entities/board/utill/calculateAverages";

interface DetailManageContext {
  reviewData: IGetReview | undefined;
  ratingDistribution: Record<number, number>;
  page: number;
  setPage: Dispatch<React.SetStateAction<number>>;
  isLoading: boolean;
  id: string | undefined;
  review: IGetReviewWithAverages | undefined;
}

const DetailContext = createContext<DetailManageContext | null>(null);

export const useDetailProvider = () => {
  const context = useContext(DetailContext);
  if (!context) {
    throw new Error("This component must be used within a <DetailProvider> component.");
  }
  return context;
};

export const DetailProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { id } = useParams();
  const [page, setPage] = useState(1);
  const { data: reviewData, isLoading, error } = useGetReviewDetail(id || "");
  const processedError = error ? error : null;
  const ratingDistribution = useMemo(() => {
    const distribution: Record<number, number> = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

    if (reviewData && reviewData.comments) {
      reviewData.comments.forEach((comment) => {
        if (comment.rating >= 0 && comment.rating <= 5) {
          distribution[comment.rating]++;
        }
      });
    }

    return distribution;
  }, [reviewData]);

  const processedReviewData = useMemo(() => {
    if (reviewData) {
      const dataWithAverages = calculateAverages([reviewData]);
      return dataWithAverages[0];
    }
  }, [reviewData]);

  const memorizedValue = useMemo(
    () => ({
      id,
      review: processedReviewData,
      isLoading,
      processedError,
      ratingDistribution,
      page,
      setPage,
      reviewData,
    }),
    [id, processedReviewData, isLoading, processedError, ratingDistribution, page, reviewData]
  );

  return (
    <DetailContext.Provider value={memorizedValue}>
      {isLoading ? (
        <div>Loading...</div>
      ) : processedError ? (
        <div>Error: {processedError.message}</div>
      ) : reviewData ? (
        children
      ) : (
        <div>No Review Found</div>
      )}
    </DetailContext.Provider>
  );
};

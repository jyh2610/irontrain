import React, { createContext, ReactNode, useContext, useState, useMemo } from "react";
import { BoardState } from "../type";

interface BoardManageContext {
  filter: BoardState;
  setFilter: React.Dispatch<React.SetStateAction<BoardState>>;
}

const initialState: BoardState = {
  search: "",
  review: [],
  rating: [],
  category: [],
  type: [],
};

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

  const memorizedValue = useMemo(
    () => ({
      filter,
      setFilter,
    }),
    [filter]
  );

  return <BoardContext.Provider value={memorizedValue}>{children}</BoardContext.Provider>;
};

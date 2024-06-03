import React, { createContext, ReactNode, useContext, useMemo } from "react";

interface BoardManageContext {}

const DetailContext = createContext<BoardManageContext | null>(null);

export const useDetailProvider = () => {
  const context = useContext(DetailContext);
  if (!context) {
    throw new Error("This component must be used within a <BoardProvider> component.");
  }
  return context;
};

export const DetailProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const memorizedValue = useMemo(() => ({}), []);

  return <DetailContext.Provider value={memorizedValue}>{children}</DetailContext.Provider>;
};

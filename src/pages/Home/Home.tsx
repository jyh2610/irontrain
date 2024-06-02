import { Header } from "@src/entities";
import { Board } from "@src/entities/board/Board";
import { sessionManage } from "@src/shared";
import { useEffect, useState } from "react";

export const Home = () => {
  const [selectedView, setSelectedView] = useState<string>("grid");
  const { currentViewType } = sessionManage();

  useEffect(() => {
    currentViewType && setSelectedView(currentViewType);
  }, []);

  return (
    <>
      <Header selectedView={selectedView} setSelectedView={setSelectedView} />
      <Board selectedView={selectedView} />
    </>
  );
};

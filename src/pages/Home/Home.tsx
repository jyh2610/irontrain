import { useEffect, useState } from "react";
import { Header } from "@src/entities";
import { Board } from "@src/entities/board/Board";
import { storageManage } from "@src/shared";

export const Home = () => {
  const [selectedView, setSelectedView] = useState<string>("grid");
  const { currentViewType } = storageManage();

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

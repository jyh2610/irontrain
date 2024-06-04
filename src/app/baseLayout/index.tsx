import { Outlet } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import { BoardProvider, DetailProvider, Navigate } from "@src/entities";
import QueryWrapper from "../providers/QueryWrapper";
import { generateUUID, storageManage } from "@src/shared";
import { useEffect } from "react";

export const BaseLayout = () => {
  const { UUID, saveUUIDLocalStorage } = storageManage();
  useEffect(() => {
    if (!UUID) {
      const generatedUUID = generateUUID();
      saveUUIDLocalStorage(generatedUUID);
    }
  }, []);
  return (
    <>
      <GlobalStyles />
      <QueryWrapper>
        <main>
          <DetailProvider>
            <BoardProvider>
              <Navigate />
              <Outlet />
            </BoardProvider>
          </DetailProvider>
        </main>
      </QueryWrapper>
    </>
  );
};

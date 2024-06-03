import { Outlet } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import { BoardProvider, DetailProvider, Navigate } from "@src/entities";
import QueryWrapper from "../providers/QueryWrapper";
import { generateUUID, sessionManage } from "@src/shared";
import { useEffect } from "react";

export const BaseLayout = () => {
  const { UUID, saveUUIDSessionStorage } = sessionManage();
  useEffect(() => {
    if (!UUID) {
      const generatedUUID = generateUUID();
      saveUUIDSessionStorage(generatedUUID);
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

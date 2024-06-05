import { Outlet } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import { BoardProvider, DetailProvider, Navigate } from "@src/entities";
import QueryWrapper from "../providers/QueryWrapper";
import { ToastProvider } from "../providers/ToastProvider";

export const BaseLayout = () => {
  return (
    <>
      <GlobalStyles />
      <ToastProvider>
        <QueryWrapper>
          <main>
            <BoardProvider>
              <DetailProvider>
                <Navigate />
                <Outlet />
              </DetailProvider>
            </BoardProvider>
          </main>
        </QueryWrapper>
      </ToastProvider>
    </>
  );
};

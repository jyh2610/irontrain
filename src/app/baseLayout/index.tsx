import { Outlet } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import { BoardProvider, DetailProvider, Navigate } from "@src/entities";
import QueryWrapper from "../providers/QueryWrapper";

export const BaseLayout = () => {
  return (
    <>
      <GlobalStyles />
      <QueryWrapper>
        <ReviewContainer>
          <DetailProvider>
            <BoardProvider>
              <Navigate />
              <Outlet />
            </BoardProvider>
          </DetailProvider>
        </ReviewContainer>
      </QueryWrapper>
    </>
  );
};

const ReviewContainer = styled.main`
  margin: 0 auto;
`;

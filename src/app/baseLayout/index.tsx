import { Outlet } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import { BoardProvider } from "@src/entities";
import QueryWrapper from "../providers/QueryWrapper";

export const BaseLayout = () => {
  return (
    <>
      <GlobalStyles />
      <QueryWrapper>
        <ReviewContainer>
          <main>
            <BoardProvider>
              <Outlet />
            </BoardProvider>
          </main>
        </ReviewContainer>
      </QueryWrapper>
    </>
  );
};

const ReviewContainer = styled.div`
  width: viewport;
  margin: 0 auto;
`;

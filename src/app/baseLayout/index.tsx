import { Outlet } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import { BoardProvider } from "@src/entities";

export const BaseLayout = () => {
  return (
    <>
      <GlobalStyles />
      <ReviewContainer>
        <main>
          <BoardProvider>
            <Outlet />
          </BoardProvider>
        </main>
      </ReviewContainer>
    </>
  );
};

const ReviewContainer = styled.div`
  margin: 0 auto;
`;

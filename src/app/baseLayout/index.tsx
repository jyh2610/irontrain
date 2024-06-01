import { Outlet } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";

export const BaseLayout = () => {
  return (
    <>
      <GlobalStyles />
      <ReviewContainer>
        <main>
          <Outlet />
        </main>
      </ReviewContainer>
    </>
  );
};

const ReviewContainer = styled.div`
  margin: 0 auto;
`;

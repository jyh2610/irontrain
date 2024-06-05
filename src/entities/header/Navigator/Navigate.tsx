import { useLocation, useNavigate } from "react-router-dom";
import { ButtonBox, NavigateContainer, LogoBox, LogoContainer, ButtonContainer } from "./styles";
import logo from "@src/shared/assets/logo.webp";
import { useDetailProvider } from "@src/entities/detail/context/DetailReviewProvider";
import { storageManage } from "@src/shared";

export const Navigate = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { UUID } = storageManage();
  const { review } = useDetailProvider();
  const isDetailPage = location.pathname.includes("detail");
  const isFixorPostPage = location.pathname.includes("fix_review") || location.pathname.includes("post_review");
  return (
    <NavigateContainer>
      <LogoContainer onClick={() => navigate("/")}>
        <LogoBox>
          <img src={logo} alt="logo" />
        </LogoBox>
        <h1>맛집을 게시하세요!</h1>
      </LogoContainer>
      <ButtonContainer>
        {isDetailPage && UUID === review?.uuid ? (
          <ButtonBox
            onClick={() =>
              navigate("/fix_review", {
                state: {
                  review,
                },
              })
            }
          >
            <button type="button">수정하기</button>
          </ButtonBox>
        ) : (
          isFixorPostPage && (
            <ButtonBox onClick={() => navigate(-1)}>
              <button type="button">취소하기</button>
            </ButtonBox>
          )
        )}
        <ButtonBox onClick={() => navigate("/post_review")}>
          <button type="button">작성하기</button>
        </ButtonBox>
      </ButtonContainer>
    </NavigateContainer>
  );
};

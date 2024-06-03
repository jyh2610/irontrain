import { useNavigate } from "react-router-dom";
import { ButtonBox, NavigateContainer, LogoBox, LogoContainer } from "./styles";
import logo from "@src/shared/assets/logo.webp";

export const Navigate = () => {
  const navigate = useNavigate();
  return (
    <NavigateContainer>
      <LogoContainer onClick={() => navigate("/")}>
        <LogoBox>
          <img src={logo} alt="logo" />
        </LogoBox>
        <h1>맛집을 게시하세요!</h1>
      </LogoContainer>
      <ButtonBox>
        <button type="button">작성하기</button>
      </ButtonBox>
    </NavigateContainer>
  );
};

import { DetailContainer, ImgBox } from "./styles";
import { DetailList } from "@src/entities/detail";
import { useDetailProvider } from "@src/entities";

export const Detail = () => {
  const { review } = useDetailProvider();
  return (
    <DetailContainer>
      <ImgBox>
        <img src={review?.path} alt="리뷰이미지" />
      </ImgBox>
      <DetailList review={review!} />
    </DetailContainer>
  );
};

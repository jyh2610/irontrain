import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { DetailTitleBox, IconBox, ReviewDetailContainer, ReviewDetailContentContainer, TitleInfoBox } from "./styles";
import { Dispatch, useState } from "react";
import { IGetReview } from "../board/type";

interface PostProps {
  image: File | null;
  setReviewData: Dispatch<React.SetStateAction<IGetReview>>;
}

export const Post = ({ image, setReviewData }: PostProps) => {
  const [rating, setRating] = useState(1);
  const handleStarClick = (index: number) => {
    setRating(index);
    setReviewData((prev) => {
      return { ...prev, rating: index };
    });
  };

  return (
    <>
      <ReviewDetailContainer>
        <DetailTitleBox>
          <IconBox>
            {!image ? (
              <img src={"/src/shared/assets/logo.webp"} alt="썸네일" />
            ) : (
              <img src={URL.createObjectURL(image)} alt="썸네일" />
            )}
          </IconBox>
          <TitleInfoBox>
            <input
              onChange={(e) =>
                setReviewData((prev) => {
                  return { ...prev, title: e.target.value };
                })
              }
              type="text"
              placeholder="제목을 입력하세요!"
            />
          </TitleInfoBox>
        </DetailTitleBox>
      </ReviewDetailContainer>
      <ReviewDetailContentContainer>
        <span>작성자 리뷰</span>
        <div>
          {[...Array(5)].map((_, index) => (
            <span key={index} onClick={() => handleStarClick(index + 1)}>
              {index < rating ? <IoIosStar size={18} color="var(--color-point)" /> : <IoIosStarOutline size={18} />}
            </span>
          ))}
        </div>
        <textarea
          onChange={(e) =>
            setReviewData((prev) => {
              return { ...prev, title: e.target.value };
            })
          }
          placeholder="리뷰를 입력해주세요."
        />
      </ReviewDetailContentContainer>
    </>
  );
};

import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { DetailTitleBox, IconBox, ReviewDetailContainer, ReviewDetailContentContainer, TitleInfoBox } from "./styles";
import { Dispatch } from "react";
import { IGetReview } from "../board/type";
import { category } from "@src/shared";
import { Dropdown } from "../header/Dropdown/Dropdown";

interface PostProps {
  image: File | null;
  setReviewData: Dispatch<React.SetStateAction<IGetReview>>;
  reviewData: IGetReview;
}

export const Post = ({ image, setReviewData, reviewData }: PostProps) => {
  const handleStarClick = (index: number) => {
    setReviewData((prev) => {
      return { ...prev, rating: index };
    });
  };

  return (
    <>
      <ReviewDetailContainer>
        <DetailTitleBox>
          <IconBox>
            {!image && reviewData.path.length === 0 ? (
              <img src={"/src/shared/assets/logo.webp"} alt="썸네일" />
            ) : (
              <img src={reviewData.path} alt="썸네일" />
            )}
          </IconBox>
          <TitleInfoBox>
            <input
              value={reviewData.title}
              onChange={(e) =>
                setReviewData((prev) => {
                  return { ...prev, title: e.target.value };
                })
              }
              type="text"
              placeholder="제목을 입력하세요!"
            />
            <Dropdown title="태그" dropList={category} />
          </TitleInfoBox>
        </DetailTitleBox>
      </ReviewDetailContainer>
      <ReviewDetailContentContainer>
        <span>작성자 리뷰</span>
        <div>
          {[...Array(5)].map((_, index) => (
            <span key={index} onClick={() => handleStarClick(index + 1)}>
              {index < reviewData.rating ? (
                <IoIosStar size={18} color="var(--color-point)" />
              ) : (
                <IoIosStarOutline size={18} />
              )}
            </span>
          ))}
        </div>
        <textarea
          value={reviewData.content}
          onChange={(e) =>
            setReviewData((prev) => {
              return { ...prev, content: e.target.value };
            })
          }
          placeholder="리뷰를 입력해주세요."
        />
      </ReviewDetailContentContainer>
    </>
  );
};

import { useState, useRef } from "react";
import { IoDuplicateOutline } from "react-icons/io5";
import { DetailContainer, ImgBox, ImgUploadLabel, RegButton, UploadContainer } from "./styles";
import { Post, testReviewValidate, usePostReview } from "@src/entities";
import { IGetReview } from "@src/entities/board/type";
import { generateUUID, storageManage } from "@src/shared";
import { useToast } from "@src/app/providers/ToastProvider";
import { useNavigate } from "react-router-dom";

const { UUID } = storageManage();
const initialState: IGetReview = {
  id: "",
  title: "",
  date_created: "",
  content: "",
  category: "",
  rating: 0,
  likes: 0,
  path: "",
  uuid: UUID ? UUID : generateUUID(),
  likedUuids: [],
  comments: [],
};
export const PostReview = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState<File | null>(null);
  const [reviewData, setReviewData] = useState<IGetReview>(initialState);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { mutate } = usePostReview(reviewData);
  const { showToast } = useToast();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = event.target.files?.[0];
    if (selectedImage) {
      setImage(selectedImage);
    }
  };

  const handleImgBoxClick = () => {
    fileInputRef.current?.click();
  };

  const submitReview = () => {
    const validationError = testReviewValidate(reviewData);
    if (validationError) {
      showToast({
        type: "fail",
        message: validationError,
      });
      return;
    }

    try {
      mutate();
      showToast({
        type: "success",
        message: "리뷰등록에 성공하였습니다.",
      });
      navigate("/");
    } catch {
      showToast({
        type: "fail",
        message: "리뷰등록에 실패하였습니다.",
      });
    }
  };

  return (
    <DetailContainer>
      <ImgBox onClick={handleImgBoxClick}>
        {!image ? (
          <UploadContainer>
            <ImgUploadLabel>
              <IoDuplicateOutline size={32} color="white" />
            </ImgUploadLabel>
            <input
              ref={fileInputRef}
              id="image-upload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </UploadContainer>
        ) : (
          <img src={URL.createObjectURL(image)} alt="리뷰 이미지" />
        )}
      </ImgBox>
      <Post image={image} setReviewData={setReviewData} />
      <RegButton type="button" onClick={submitReview}>
        등록하기
      </RegButton>
    </DetailContainer>
  );
};

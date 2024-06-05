import { useState, useRef } from "react";
import { IoDuplicateOutline } from "react-icons/io5";
import { DetailContainer, ImgBox, ImgUploadLabel, RegButton, UploadContainer } from "./styles";
import { Post, testReviewValidate, usePostReview } from "@src/entities";
import { IGetReview } from "@src/entities/board/type";
import { generateUUID, storageManage } from "@src/shared";
import { useToast } from "@src/app/providers/ToastProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { usePutReview } from "@src/entities/detail/api";

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
  const location = useLocation();
  const { state, pathname } = location;
  const reviewedData: IGetReview = state ? state?.review : initialState;
  const [image, setImage] = useState<File | null>(null);
  const [reviewData, setReviewData] = useState<IGetReview>(reviewedData ? reviewedData : initialState);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { mutate: regReview } = usePostReview(reviewData);
  const { mutate: fixReview } = usePutReview(reviewData);

  console.log(reviewData);

  const { showToast } = useToast();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = event.target.files?.[0];
    if (selectedImage) {
      setImage(selectedImage);
      setReviewData((prev) => ({ ...prev, path: `/src/shared/assets/uploadImg/${selectedImage.name}` }));
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
      pathname.includes("fix_review") ? fixReview() : regReview();
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
        {!image && reviewData.path.length === 0 ? (
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
          <img src={reviewData.path} alt="리뷰 이미지" />
        )}
      </ImgBox>
      <Post image={image} reviewData={reviewData} setReviewData={setReviewData} />
      <RegButton type="button" onClick={submitReview}>
        등록하기
      </RegButton>
    </DetailContainer>
  );
};

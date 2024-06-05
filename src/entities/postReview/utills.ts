import { IGetReview } from "../board/type";

export const testReviewValidate = (reviewData: IGetReview): string | null => {
  if (reviewData.path.length < 1) {
    return "이미지를 업로드하세요.";
  }

  if (reviewData.title.length < 1) {
    return "제목을 입력해주세요.";
  }

  if (reviewData.content.length < 1) {
    return "리뷰 내용을 입력해주세요.";
  }

  return null;
};

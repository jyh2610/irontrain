import { generateUUID, storageManage } from "@src/shared";
import {
  CommentChartContainer,
  CommentInputBox,
  CommentInputContainer,
  CommentRatingAverageBox,
  CommentRegButton,
} from "./styles";
import { useDetailProvider } from "../../context/DetailReviewProvider";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { useState } from "react";
import { usePutReview } from "../../api";
import { Comment } from "@src/entities/board/type";
import { updateNewReview } from "../../utills";
import { useToast } from "@src/app/providers/ToastProvider";

interface Props {
  initialComment?: Comment;
  onClose?: () => void;
}

export const CommentChart = ({ initialComment, onClose }: Props) => {
  const { showToast } = useToast();
  const [rating, setRating] = useState(1);
  const [inputValue, setInputValue] = useState(initialComment ? initialComment.text : "");
  const { review } = useDetailProvider();
  const { UUID } = storageManage();
  const comment: Comment = {
    id: initialComment ? initialComment.id : generateUUID(),
    rating: rating,
    text: inputValue,
    uuid: UUID!,
    like: 0,
    likedUuids: [],
  };
  const newReview = review && updateNewReview(review, comment);
  const { mutate: postAndGetReview } = usePutReview(newReview!);
  const PostCommentHandler = async () => {
    if (inputValue.length === 0) {
      showToast({
        type: "fail",
        message: "한글자 이상입력하세요!",
      });
      return;
    }

    try {
      await postAndGetReview();
      setInputValue("");
      showToast({
        type: "success",
        message: "댓글이 입력되었습니다.",
      });
    } catch {
      showToast({
        type: "fail",
        message: "댓글이 입력에 실패하였습니다.",
      });
    } finally {
      onClose && onClose();
    }
  };

  const handleStarClick = (index: number) => {
    setRating(index);
  };

  return (
    <CommentChartContainer>
      <CommentInputContainer>
        <CommentRatingAverageBox>
          {[...Array(5)].map((_, index) => (
            <span key={index} onClick={() => handleStarClick(index + 1)}>
              {index < rating ? <IoIosStar size={18} color="var(--color-point)" /> : <IoIosStarOutline size={18} />}
            </span>
          ))}
        </CommentRatingAverageBox>
        <CommentInputBox>
          <textarea value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="댓글 입력" />
        </CommentInputBox>
        <CommentRegButton type="button" onClick={PostCommentHandler}>
          입력
        </CommentRegButton>
      </CommentInputContainer>
    </CommentChartContainer>
  );
};

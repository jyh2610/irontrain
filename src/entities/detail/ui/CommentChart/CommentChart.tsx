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

export const CommentChart = () => {
  const [rating, setRating] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const { review } = useDetailProvider();
  const { UUID } = storageManage();
  const comment: Comment = {
    id: generateUUID(),
    rating: rating,
    text: inputValue,
    uuid: UUID!,
    like: 0,
    likedUuids: [],
  };

  const newReview = review && updateNewReview(review, comment);

  const { mutate: postAndGetReview } = usePutReview(newReview!);

  const handleStarClick = (index: number) => {
    setRating(index);
  };
  const PostCommentHandler = async () => {
    await postAndGetReview();
    setInputValue("");
  };
  return (
    <CommentChartContainer>
      <CommentInputContainer>
        <CommentRatingAverageBox>
          {[...Array(5)].map((_, index) => (
            <span key={index} onClick={() => handleStarClick(index + 1)}>
              {index < rating ? <IoIosStar size={24} color="var(--color-point)" /> : <IoIosStarOutline size={24} />}
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

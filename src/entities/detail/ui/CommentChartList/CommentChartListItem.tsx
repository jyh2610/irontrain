import { FaRegThumbsUp } from "react-icons/fa";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { CommentChartBox, CommentChartContentBox, LikeBox, UpdateBtnBox } from "./styles";
import { Comment } from "@src/entities/board/type";
import { usePutLikeComment, usePutReview } from "../../api";
import { Modal, storageManage } from "@src/shared";
import { useDetailProvider } from "@src/entities";
import { useToast } from "@src/app/providers/ToastProvider";
import { deleteReviewComment } from "../../utills";
import { useState } from "react";
import { CommentChart } from "../CommentChart/CommentChart";

const CommentChartListItem = ({ comment }: { comment: Comment }) => {
  const { UUID } = storageManage();
  const { review } = useDetailProvider();
  const { mutate } = usePutLikeComment(review!, UUID!, comment.id);
  const [modal, setModal] = useState(false);
  const { showToast } = useToast();
  const likeHandler = () => {
    mutate();
    showToast({
      type: "success",
      message: "좋아요를 누르셨습니다.",
    });
  };

  const newReview = review && deleteReviewComment(review, comment.id);
  const { mutate: postAndGetReview } = usePutReview(newReview!);

  return (
    <>
      <CommentChartBox key={comment.id}>
        <CommentChartContentBox>
          <div>
            {[...Array(5)].map((_, index) =>
              index < comment.rating ? (
                <IoIosStar key={index} size={14} color="var(--color-point)" />
              ) : (
                <IoIosStarOutline key={index} size={14} color="var(--color-point)" />
              )
            )}
          </div>
          <p>{comment.text}</p>
        </CommentChartContentBox>
        <div>
          <LikeBox onClick={likeHandler}>
            <FaRegThumbsUp />
            <p>{comment.likedUuids.length}</p>
          </LikeBox>
          {UUID === comment.uuid && (
            <UpdateBtnBox>
              <button onClick={() => setModal(true)}>수정</button>
              <button onClick={() => postAndGetReview()}>삭제</button>
            </UpdateBtnBox>
          )}
        </div>
      </CommentChartBox>
      {modal && (
        <Modal onClose={() => setModal(false)}>
          <CommentChart onClose={() => setModal(false)} initialComment={comment} />
        </Modal>
      )}
    </>
  );
};

export default CommentChartListItem;

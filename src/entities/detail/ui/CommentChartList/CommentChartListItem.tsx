import { FaRegThumbsUp } from "react-icons/fa";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { CommentChartBox, CommentChartContentBox, LikeBox } from "./styles";
import { Comment } from "@src/entities/board/type";
import { usePutLikeComment, usePutReview } from "../../api";
import { Modal, generateUUID, storageManage } from "@src/shared";
import { useDetailProvider } from "@src/entities";
import { useToast } from "@src/app/providers/ToastProvider";
import { updateNewReview, deleteReviewComment } from "../../utills";
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
  // const updatedComment: Comment = {
  //   id: comment.id,
  //   rating: comment.rating,
  //   text: "",
  //   uuid: comment.uuid,
  //   like: comment.like,
  //   likedUuids: comment.likedUuids,
  // };
  const newReview = review && deleteReviewComment(review, comment.id);
  const { mutate: postAndGetReview } = usePutReview(newReview!);
  // const PostCommentHandler = async () => {
  //   await postAndGetReview();
  //   setInputValue("");
  // };

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
          <div>
            <button onClick={() => setModal(true)}>수정</button>
            <button onClick={() => postAndGetReview()}>삭제</button>
          </div>
        </div>
      </CommentChartBox>
      {modal && (
        <Modal onClose={() => setModal(false)}>
          <CommentChart />
        </Modal>
      )}
    </>
  );
};

export default CommentChartListItem;

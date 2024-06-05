import { FaRegThumbsUp } from "react-icons/fa";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { CommentChartBox, CommentChartContentBox, LikeBox } from "./styles";
import { Comment } from "@src/entities/board/type";
import { usePutLikeComment } from "../../api";
import { storageManage } from "@src/shared";
import { useDetailProvider } from "@src/entities";
import { useToast } from "@src/app/providers/ToastProvider";

const CommentChartListItem = ({ comment }: { comment: Comment }) => {
  const { UUID } = storageManage();
  const { review } = useDetailProvider();
  const { mutate } = usePutLikeComment(review, UUID!, comment.id);
  const { showToast } = useToast();

  const likeHandler = () => {
    mutate();
    showToast({
      type: "success",
      message: "좋아요를 누르셨습니다.",
    });
  };
  return (
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
      <LikeBox onClick={likeHandler}>
        <FaRegThumbsUp />
        <p>{comment.likedUuids.length}</p>
      </LikeBox>
    </CommentChartBox>
  );
};

export default CommentChartListItem;

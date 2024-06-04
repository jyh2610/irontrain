import { useDetailProvider } from "@src/entities";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { CommentChartBox, CommentChartContainer, CommentChartContentBox, LikeBox } from "./styles";
import { FaRegThumbsUp } from "react-icons/fa";
import { PutLikeComment } from "../../api";
import { storageManage } from "@src/shared";
import { PageNationBar } from "@src/shared/ui/PageNationBar";

export const CommentChartList = () => {
  const { review, page, setPage } = useDetailProvider();
  const { UUID, saveCurrentCommentPageSessionStorage } = storageManage();
  const commentList = review?.comments;
  return (
    <>
      <CommentChartContainer>
        {commentList?.map((comment) => (
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
            <LikeBox>
              <FaRegThumbsUp onClick={() => PutLikeComment(review, UUID!, comment.id)} />
              <p>{comment.likedUuids.length}</p>
            </LikeBox>
          </CommentChartBox>
        ))}
      </CommentChartContainer>
      <PageNationBar
        saveSession={saveCurrentCommentPageSessionStorage}
        totalCount={review?.comments.length}
        currentPage={page}
        onPageChange={setPage}
      />
    </>
  );
};

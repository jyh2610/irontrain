import { useDetailProvider } from "@src/entities";
import { CommentChartContainer } from "./styles";
import { storageManage } from "@src/shared";
import { PageNationBar } from "@src/shared/ui/PageNationBar";
import CommentChartListItem from "./CommentChartListItem";

export const CommentChartList = () => {
  const { review, page, setPage } = useDetailProvider();
  const { saveCurrentCommentPageSessionStorage } = storageManage();
  const commentList = review?.comments;

  return (
    <>
      <CommentChartContainer>
        {commentList?.map((comment) => <CommentChartListItem key={comment.uuid} comment={comment} />)}
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

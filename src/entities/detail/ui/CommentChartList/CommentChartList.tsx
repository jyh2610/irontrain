import { useDetailProvider } from "@src/entities";
import { CommentChartContainer, TitleBox } from "./styles";
import CommentChartListItem from "./CommentChartListItem";

export const CommentChartList = () => {
  const { review } = useDetailProvider();
  const commentList = review?.comments;

  return (
    <>
      <TitleBox>
        <h1>댓글</h1>
        <span>{review?.comments.length}</span>
      </TitleBox>
      <CommentChartContainer>
        {commentList?.map((comment) => <CommentChartListItem key={comment.id} comment={comment} />)}
      </CommentChartContainer>
    </>
  );
};

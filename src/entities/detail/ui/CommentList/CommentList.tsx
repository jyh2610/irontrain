import { Comment } from "@src/entities/board/type";
import { CommentListContainer, CommentListHeader } from "./styles";
import { CommentChart } from "../CommentChart/CommentChart";
import { CommentChartList } from "../CommentChartList/CommentChartList";

interface Props {
  comments: Comment[];
}

export const CommentList = ({ comments }: Props) => {
  return (
    <CommentListContainer>
      <CommentListHeader>
        <h1>후기</h1>
        <span>{comments.length}</span>
      </CommentListHeader>
      <CommentChart />
      <CommentChartList />
    </CommentListContainer>
  );
};

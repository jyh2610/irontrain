import { Comment } from "@src/entities/board/type";
import { CommentListContainer, CommentListHeader } from "./styles";
import { CommentChart } from "../CommentChart/CommentChart";

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
      <CommentChart comments={comments} />
    </CommentListContainer>
  );
};

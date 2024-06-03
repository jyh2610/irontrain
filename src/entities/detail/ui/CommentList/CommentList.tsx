import { Comment } from "@src/entities/board/type";
import { CommentListContainer } from "./styles";

interface Props {
  comments: Comment[];
}

export const CommentList = ({ comments }: Props) => {
  return (
    <CommentListContainer>
      <div>
        <h1>후기</h1>
        <span>{comments.length}</span>
      </div>
    </CommentListContainer>
  );
};

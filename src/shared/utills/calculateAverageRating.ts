import { Comment } from "@src/entities/board/type";

export const calculateLikes = (comments: Comment[]) => {
  const numberOfLikes = comments.reduce((acc, comment) => {
    if (comment.like) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);
  return numberOfLikes;
};

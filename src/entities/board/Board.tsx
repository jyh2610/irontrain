import { Card } from "./ui/Card";
import { BoardContainer } from "./styles";
import { useBoardProvider } from "./context/FilterProvider";

export const Board = () => {
  const { reviewData } = useBoardProvider();
  return <BoardContainer>{reviewData?.data.map((review) => <Card key={review.id} review={review} />)}</BoardContainer>;
};

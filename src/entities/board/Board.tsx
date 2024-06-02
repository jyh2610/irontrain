import { Card } from "./ui/Card";
import { BoardContainer } from "./styles";
import { useBoardProvider } from "./context/FilterProvider";
import { PageNationBar } from "@src/shared/ui/PageNationBar";

export const Board = () => {
  const { reviewData, page, setPage } = useBoardProvider();

  return (
    <div>
      <BoardContainer>{reviewData?.data.map((review) => <Card key={review.id} review={review} />)}</BoardContainer>
      <PageNationBar totalCount={reviewData?.totalCount} currentPage={page} onPageChange={setPage} />
    </div>
  );
};

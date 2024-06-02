import { PageNationBar } from "@src/shared/ui/PageNationBar";
import { Card } from "./ui/Card/Card";
import { ListView } from "./ui/List/ListView";
import { useBoardProvider } from "./context/FilterProvider";
import { BoardContainer } from "./styles";

interface Props {
  selectedView: string;
}

export const Board = ({ selectedView }: Props) => {
  const { reviewData, page, setPage } = useBoardProvider();

  return (
    <div>
      <BoardContainer>
        {reviewData?.data.map((review) =>
          selectedView === "grid" ? (
            <Card key={review.id} review={review} />
          ) : (
            <ListView key={review.id} review={review} />
          )
        )}
      </BoardContainer>
      <PageNationBar totalCount={reviewData?.totalCount} currentPage={page} onPageChange={setPage} />
    </div>
  );
};

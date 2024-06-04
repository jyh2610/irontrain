import { PageNationBar } from "@src/shared/ui/PageNationBar";
import { Card } from "./ui/Card/Card";
import { ListView } from "./ui/List/ListView";
import { useBoardProvider } from "./context/FilterProvider";
import { BoardContainer, BoardListContainer } from "./styles";
import { storageManage } from "@src/shared";

interface Props {
  selectedView: string;
}

export const Board = ({ selectedView }: Props) => {
  const { reviewData, page, setPage } = useBoardProvider();
  const { saveCurrentPageSessionStorage } = storageManage();
  return (
    <div>
      {selectedView === "grid" ? (
        <BoardContainer>{reviewData?.data.map((review) => <Card key={review.id} review={review} />)}</BoardContainer>
      ) : (
        <BoardListContainer>
          {reviewData?.data.map((review) => <ListView key={review.id} review={review} />)}
        </BoardListContainer>
      )}
      <PageNationBar
        saveSession={saveCurrentPageSessionStorage}
        totalCount={reviewData?.totalCount}
        currentPage={page}
        onPageChange={setPage}
      />
    </div>
  );
};

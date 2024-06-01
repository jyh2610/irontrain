import { useParams } from "react-router-dom";

export const Detail = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Detail Page</h1>
      <p>Review ID: {id}</p>
    </div>
  );
};

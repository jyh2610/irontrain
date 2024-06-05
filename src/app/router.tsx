import { createBrowserRouter } from "react-router-dom";

import { Detail, Home, PostReview } from "@src/pages";
import { BaseLayout } from "./baseLayout";
import { DetailProvider } from "@src/entities";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "detail/:id",
        element: (
          <DetailProvider>
            <Detail />
          </DetailProvider>
        ),
      },
      {
        path: "post_review",
        element: <PostReview />,
      },
    ],
  },
]);

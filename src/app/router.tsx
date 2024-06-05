import { createBrowserRouter } from "react-router-dom";

import { Detail, FixReview, Home, PostReview } from "@src/pages";
import { BaseLayout } from "./baseLayout";

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
        element: <Detail />,
      },
      {
        path: "post_review",
        element: <PostReview />,
      },
      {
        path: "fix_review",
        element: <FixReview />,
      },
    ],
  },
]);

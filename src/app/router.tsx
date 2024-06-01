import { createBrowserRouter } from "react-router-dom";

import { Detail, Home } from "@src/pages";
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
    ],
  },
]);

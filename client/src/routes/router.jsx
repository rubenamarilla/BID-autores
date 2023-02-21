import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Main from "../layout/Main";
import CreateAuthor from "../components/CreateAuthor";
import AuthorList from "../components/AuthorList";
import EditAuthor from "../components/EditAuthor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <AuthorList />,
      },
      {
        path: "/create",
        element: <CreateAuthor />,
      },
      {
        path: "/edit/:id",
        element: <EditAuthor />,
      }
    ],
  },
]);

export default router;

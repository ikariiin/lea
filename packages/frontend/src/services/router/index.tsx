import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import { lazyImportModule, ModuleType } from "../import";

const Landing = lazyImportModule(ModuleType.Feature, "landing");
const Search = lazyImportModule(ModuleType.Feature, "search");

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/search",
      element: <Search />,
    },
  ]);

  return <RouterProvider router={router} />;
};

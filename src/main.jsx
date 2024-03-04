import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";
import PastProjectsPage from "./pages/PastProjectsPage.jsx";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/Tulsa-Lawn",
    element: <HomePage />,
  },
  {
    path: "/Tulsa-Lawn/services",
    element: <ServicesPage />,
    children: [
      { path: "residential-lawn", element: <ServicesPage /> },
      { path: "commercial-lawn", element: <ServicesPage /> },
      { path: "hedge-trimming", element: <ServicesPage /> },
      { path: "leaf-removal", element: <ServicesPage /> },
    ],
  },
  {
    path: "/Tulsa-Lawn/about",
    element: <AboutUsPage />,
  },
  {
    path: "/Tulsa-Lawn/past-projects",
    element: <PastProjectsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

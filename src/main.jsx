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
    path: "/" ,
    element: <HomePage />,
  },
  {
    path: "/services",
    element: <ServicesPage />,
  },
  {
    path: "/about",
    element: <AboutUsPage />,
  },
  {
    path: "/past-projects",
    element: <PastProjectsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

import React from "react";
import { createRoot } from "react-dom/client"; // Corrected import statement
import HomePage from "./pages/HomePage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";
import PastProjectsPage from "./pages/PastProjectsPage.jsx";
import ResidentialLawnService from "./Layout/ResidentialLawnService.jsx";
import CommercialLawnService from "./Layout/CommercialLawnService.jsx";
import HedgeTrimmingService from "./Layout/HedgeTrimmingService.jsx";
import LeafRemovalService from "./Layout/LeafRemovalService.jsx";

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
      { path: "residential-lawn", element: <ResidentialLawnService /> },
      { path: "commercial-lawn", element: <CommercialLawnService /> },
      { path: "hedge-trimming", element: <HedgeTrimmingService /> },
      { path: "leaf-removal", element: <LeafRemovalService /> },
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

const root = createRoot(document.getElementById("root")); // Use the corrected import
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

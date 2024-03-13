import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./pages/HomePage.jsx";

const LazyResidentialLawnService = React.lazy(
  () => import("./Layout/ResidentialLawnService.jsx"),
);
const LazyCommercialLawnService = React.lazy(
  () => import("./Layout/CommercialLawnService.jsx"),
);
const LazyHedgeTrimmingService = React.lazy(
  () => import("./Layout/HedgeTrimmingService.jsx"),
);
const LazyLeafRemovalService = React.lazy(
  () => import("./Layout/LeafRemovalService.jsx"),
);
const LazyServicesPage = React.lazy(() => import("./pages/ServicesPage.jsx"));
const LazyAboutUsPage = React.lazy(() => import("./pages/AboutUsPage.jsx"));
const LoadingPage = React.lazy(() => import("./pages/LoadingPage.jsx"));
const LazyProjectsPage = React.lazy(
  () => import("./pages/PastProjectsPage.jsx"),
);

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/loading",
    element: <LoadingPage />,
  },
  {
    path: "/services/",
    element: (
      <Suspense fallback={<LoadingPage></LoadingPage>}>
        <LazyServicesPage />
      </Suspense>
    ),
    children: [
      {
        path: "residential-lawn",
        element: (
          <Suspense fallback={<LoadingPage></LoadingPage>}>
            <LazyResidentialLawnService />
          </Suspense>
        ),
      },
      {
        path: "commercial-lawn",
        element: (
          <Suspense fallback={<LoadingPage></LoadingPage>}>
            <LazyCommercialLawnService />
          </Suspense>
        ),
      },
      {
        path: "hedge-trimming",
        element: (
          <Suspense fallback={<LoadingPage></LoadingPage>}>
            <LazyHedgeTrimmingService />
          </Suspense>
        ),
      },
      {
        path: "leaf-removal",
        element: (
          <Suspense fallback={<LoadingPage></LoadingPage>}>
            <LazyLeafRemovalService />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/about",
    element: (
      <Suspense fallback={<LoadingPage></LoadingPage>}>
        <LazyAboutUsPage />
      </Suspense>
    ),
  },
  {
    path: "/past-projects",
    element: (
      <Suspense fallback={<LoadingPage></LoadingPage>}>
        <LazyProjectsPage />
      </Suspense>
    ),
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
);

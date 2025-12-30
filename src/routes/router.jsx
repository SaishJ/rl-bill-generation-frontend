import { lazy } from "react";
import { createBrowserRouter } from "react-router";

import AuthLayout from "./layout/AuthLayout.jsx";
import ProtectedRoute from "./layout/ProtectedRoute.jsx";
import DashboardLayout from "./layout/DashboardLayout.jsx";

const Login = lazy(() => import("../pages/Login.jsx"));
const Home = lazy(() => import("../pages/Home.jsx"));
const Bills = lazy(() => import("../pages/Bills.jsx"));
const GenerateBill = lazy(() => import("../pages/GenerateBill.jsx"));

const router = createBrowserRouter([
  // Unauth route
  {
    element: <AuthLayout />,
    children: [{ path: "/login", Component: Login }],
  },
  // Auth routes
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            Component: Home,
          },
          {
            path: "/bills",
            Component: Bills,
          },
        ],
      },
      {
        path: "/generate-bill",
        Component: GenerateBill,
      },
    ],
  },
]);

export default router;

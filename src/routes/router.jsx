import { lazy } from "react";
import { createBrowserRouter } from "react-router";

import AuthLayout from "./layout/AuthLayout.jsx";
import AppLayout from "./layout/AppLayout.jsx";
import ProtectedRoute from "./layout/ProtectedRoute.jsx";

const Login = lazy(() => import("../pages/Login.jsx"));
const Home = lazy(() => import("../pages/Home.jsx"));

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
        element: <AppLayout />,
        children: [
          {
            path: "/",
            Component: Home,
          },
        ],
      },
    ],
  },
]);

export default router;

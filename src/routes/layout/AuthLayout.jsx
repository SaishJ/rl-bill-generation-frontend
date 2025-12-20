import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { selectIsAuthenticated } from "@/features/auth/authSelectors";

const AuthLayout = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default AuthLayout;

import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { selectIsAuthenticated } from "@/features/auth/authSelectors";

const ProtectedRoute = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;

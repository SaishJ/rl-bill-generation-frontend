import React from "react";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "@/features/auth/authSelectors";
import BasicHeader from "@/components/headers/BasicHeader";
import Sidebar from "@/components/Sidebar";
import { Navigate, Outlet } from "react-router";

const DashboardLayout = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <>
      <BasicHeader />
      <div>
        <Sidebar />
        <main className="ml-60 p-4 min-h-[calc(100vh-3.5rem)]">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;

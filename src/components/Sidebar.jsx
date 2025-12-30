import React from "react";
import { Link, useLocation } from "react-router";
import { sidebarRoutes } from "@/utils/constant";

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="w-60 fixed left-0 top-[3.5rem] h-[calc(100vh-3.5rem)] p-3 shadow-sm flex flex-col gap-3">
      {sidebarRoutes.map((_route, index) => {
        const Icon = _route.icon;
        const isActive = _route.path === location.pathname;

        return (
          <Link
            key={index}
            to={_route.path}
            className={`rounded-md px-2 py-2.5 flex flex-row gap-2 ${
              isActive ? "bg-neutral-100" : "bg-neutral-50"
            } hover:bg-neutral-100 transition-colors duration-300`}
          >
            <Icon className="h-6 w-6" />
            {_route.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;

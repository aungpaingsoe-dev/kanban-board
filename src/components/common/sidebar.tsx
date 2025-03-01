import React from "react";
import { LayoutDashboard, ListChecks } from "lucide-react";
import { Link, useLocation } from "react-router";

const SideBar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="md:w-[240px] dark:bg-gray-950 h-screen border-e shadow-sm py-4 px-2 fixed top-0 start-0 bg-white hidden md:block">
      <div className="text-xl font-medium px-2">Kanban Board</div>
      <div className="mt-7">
        <div className=" opacity-70 px-2 text-sm">General</div>
        <ul className="flex flex-col gap-1 mt-3">
          <Link to="/">
            <li
              className={`menu-item ${
                location.pathname === "/" &&
                "bg-slate-100 dark:bg-gray-800 opacity-100"
              }`}
            >
              <LayoutDashboard size={16} />
              Dashboard
            </li>
          </Link>
          <Link to="/tasks">
            <li
              className={`menu-item ${
                location.pathname === "/tasks" &&
                "bg-slate-100 dark:bg-gray-800 opacity-100"
              }`}
            >
              <ListChecks size={16} />
              My Task
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;

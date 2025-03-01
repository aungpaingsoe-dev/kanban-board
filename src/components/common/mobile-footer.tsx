import React from "react";
import { Link, useLocation } from "react-router";
import { Circle, CircleCheck, Clock, LayoutDashboard } from "lucide-react";

const MobileFooter: React.FC = () => {
  const location = useLocation();

  return (
    <div className=" fixed bottom-0 w-full bg-white dark:bg-gray-950 py-2 border md:hidden">
      <ul className=" grid grid-cols-4 items-center justify-around text-xs ">
        <Link to="/">
          <li
            className={`flex flex-col items-center gap-1 cursor-pointer ${
              location.pathname === "/" &&
              "bg-slate-100 dark:bg-slate-900 mx-1 py-2 rounded-lg"
            } `}
          >
            <LayoutDashboard size={16} />
            <span>Dashboard</span>
          </li>
        </Link>

        <Link to="/tasks#todo">
          <li
            className={`flex flex-col items-center gap-1 cursor-pointer ${
              location.hash === "#todo" &&
              "bg-slate-100 dark:bg-slate-900 mx-1 py-2 rounded-lg "
            }`}
          >
            <Circle size={16} />
            <span>To Do</span>
          </li>
        </Link>

        <Link to="/tasks#in-progress">
          <li
            className={`flex flex-col items-center gap-1 cursor-pointer ${
              location.hash === "#in-progress" &&
              "bg-slate-100 dark:bg-slate-900 mx-1 py-2 rounded-lg "
            }`}
          >
            <Clock className=" text-yellow-500 " size={16} />
            <span>On Progress</span>
          </li>
        </Link>

        <Link to="/tasks#done">
          <li
            className={`flex flex-col items-center gap-1 cursor-pointer ${
              location.hash === "#done" &&
              "bg-slate-100 dark:bg-slate-900 mx-1 py-2 rounded-lg "
            }`}
          >
            <CircleCheck className=" text-green-500 " size={16} />
            <span>Done</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default MobileFooter;

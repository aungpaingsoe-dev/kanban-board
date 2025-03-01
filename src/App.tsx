import { Link, Outlet, useLocation } from "react-router";
import { Header, SideBar } from "@/components";
import { Circle, CircleCheck, Clock, LayoutDashboard } from "lucide-react";

function App() {
  const location = useLocation();

  return (
    <div className="flex">
      <SideBar />
      <div className=" w-full md:w-[calc(100%-240px)] md:ms-[240px] ">
        <Header />
        <div className="px-5 my-5 pb-20 md:pb-0">
          <Outlet />
        </div>
        <div className=" fixed bottom-0 w-full bg-white py-2 border md:hidden">
          <ul className=" grid grid-cols-4 items-center justify-around text-xs ">
            <Link to="/">
              <li
                className={`flex flex-col items-center gap-1 cursor-pointer ${
                  location.pathname === "/" &&
                  "bg-slate-100 mx-1 py-2 rounded-lg"
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
                  "bg-slate-100 mx-1 py-2 rounded-lg "
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
                  "bg-slate-100 mx-1 py-2 rounded-lg "
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
                  "bg-slate-100 mx-1 py-2 rounded-lg "
                }`}
              >
                <CircleCheck className=" text-green-500 " size={16} />
                <span>Done</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

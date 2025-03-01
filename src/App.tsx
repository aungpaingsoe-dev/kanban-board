import { Outlet } from "react-router";
import { Header, MobileFooter, SideBar } from "@/components";

function App() {
  return (
    <div className="flex dark:bg-gray-950">
      <SideBar />
      <div className=" w-full md:w-[calc(100%-240px)] md:ms-[240px] ">
        <Header />
        <div className="px-5 my-5 pb-20 md:pb-0">
          <Outlet />
        </div>
        <MobileFooter />
      </div>
    </div>
  );
}

export default App;

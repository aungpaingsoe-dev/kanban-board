import { Outlet } from "react-router"
import { Header, SideBar } from "@/components"

function App() {
  return (
    <div className="flex">
      <SideBar />
      <div className="w-[calc(100%-240px)] ms-[240px] ">
        <Header />
        <div className="px-5 my-5">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default App

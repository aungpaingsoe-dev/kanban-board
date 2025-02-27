import { Outlet } from "react-router"
import { Header, SideBar } from "@/components"

function App() {
  return (
    <div className="flex">
      <SideBar />
      <div className="px-5 w-[calc(100%-240px)] ms-[240px] ">
        <Header />
        <div className="mt-5">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default App

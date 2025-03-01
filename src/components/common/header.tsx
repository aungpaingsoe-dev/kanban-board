import React from "react";
import { useLocation } from "react-router";
import { ModeToggle } from "@/components";

const Header: React.FC = () => {
  const location = useLocation();

  return (  
    <nav className="py-3 px-5 md:flex dark:bg-gray-950 dark:border justify-between items-center sticky top-0 bg-white shadow-sm z-10 hidden">
      <div className="  font-medium ">
        {location.pathname === "/" ? (
          <span>Dashboard</span>
        ) : (
          <span>My Tasks</span>
        )}
      </div>
      <div>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Header;

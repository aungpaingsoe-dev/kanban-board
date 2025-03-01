import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLocation } from "react-router";

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="py-3 px-5 md:flex justify-between items-center sticky top-0 bg-white shadow-sm z-10 hidden">
      <div className="  font-medium ">
        {location.pathname === "/" ? (
          <span>Dashboard</span>
        ) : (
          <span>My Tasks</span>
        )}
      </div>
      <div>
        <Avatar>
          <AvatarImage alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};

export default Header;

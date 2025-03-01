import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Header: React.FC = () => {
  return (
    <nav className="py-3 px-5 md:flex justify-between items-center sticky top-0 bg-white shadow-sm z-10 hidden">
      <div className="relative">
        <Search className=" absolute start-2.5 top-1.5 opacity-50" />
        <Input className="w-[300px] ps-10" placeholder="Search keyword..." />
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

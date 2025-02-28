import { Meh } from "lucide-react";
import React from "react";

const Empty: React.FC = () => {
  return (
    <div className="p-2 border rounded-lg py-5 text-center opacity-70 text-sm">
      <div className="flex justify-center items-center gap-1">
        <Meh size={16} />
        Empty Task
      </div>
    </div>
  );
};

export default Empty;

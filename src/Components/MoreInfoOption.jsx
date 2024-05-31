import React from "react";
import { ChevronDown } from "lucide-react";

function MoreInfoOption() {
  return (
    <button className="flex items-center bg-gradient-to-r from-blue-800 to-indigo-900 focus:outline-none border-none">
      <h2 className="text-xl">Education</h2>
      <ChevronDown />
    </button>
  );
}

export default MoreInfoOption;

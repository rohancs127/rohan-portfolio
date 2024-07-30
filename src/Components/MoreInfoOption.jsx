import React from "react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

function MoreInfoOption({ InfoName, isOpen }) {
  return (
    <button className="flex items-center bg-gradient-to-r from-blue-800 to-indigo-900 focus:outline-none border-none">
      <h2 className="text-xl">{InfoName}</h2>
      <ChevronDown className={`transition-transform duration-500 ${isOpen && 'rotate-180'}`}/>
    </button>
  );
}

export default MoreInfoOption;

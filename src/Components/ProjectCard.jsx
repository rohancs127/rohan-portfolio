import React from "react";

function ProjectCard() {
  return (
    <div className="flex-col items-start border-none shadow shadow-sm shadow-gray-700  p-10 w-72 rounded-lg transition-all duration-300 bg-gradient-to-r from-indigo-950 to-zinc-900 hover:shadow-gray-700 hover:shadow-md">
      <h2 className="text-xl mb-7 font-bold">Project Name</h2>
      <button className="relative left-0 right-0 bottom-0 font-bold bg-indigo-900 text-slate-200 border-none hover:text-indigo-900 hover:bg-slate-200 transition-all duration-200">Check out</button>
    </div>
  );
}

export default ProjectCard;

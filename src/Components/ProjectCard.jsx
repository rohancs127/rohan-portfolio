import React from "react";

function ProjectCard({ projectName, projectLink }) {
  return (
    <div className="flex-col items-center border-none shadow-sm shadow-gray-700  p-10 w-60 rounded-lg transition-all duration-300 bg-gradient-to-r from-indigo-950 to-zinc-900 hover:shadow-gray-700 hover:shadow-md relative">
      <h2 className="text-xl mb-7 font-bold">{projectName}</h2>
      <a href={projectLink}>
        <button className="absolute left-3 bottom-3 font-bold bg-indigo-900 text-slate-200 border-none hover:text-indigo-900 hover:bg-slate-200 transition-all duration-200">
          Check out
        </button>
      </a>
    </div>
  );
}

export default ProjectCard;

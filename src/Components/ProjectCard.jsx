import React from "react";

function ProjectCard() {
  return (
    <div className="flex-col items-start border border-zinc-700 p-10 w-72 rounded-lg bg-gradient-to-r from-indigo-900 to-zinc-900">
      <h2 className="text-xl mb-7 font-bold">Project Name</h2>
      <button className="relative left-0 right-0 bottom-0 bg-slate-50 text-indigo-950">Check out</button>
    </div>
  );
}

export default ProjectCard;

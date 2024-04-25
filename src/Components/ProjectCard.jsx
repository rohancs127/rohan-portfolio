import React from "react";

function ProjectCard() {
  return (
    <div className="flex-col items-start border border-zinc-700 p-10 item w-72">
      <h2 className="text-xl mb-7">Project Name</h2>
      <button>Check out</button>
    </div>
  );
}

export default ProjectCard;

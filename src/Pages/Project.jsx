import React from "react";
import ProjectCard from "../Components/ProjectCard";

function Project() {
  return (
    <div>
      <div className="flex justify-center p-10">
        <h1 className="font-bold text-indigo-300 hover:tracking-widest transition-all duration-300">
          My Works
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-16 px-20">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

export default Project;

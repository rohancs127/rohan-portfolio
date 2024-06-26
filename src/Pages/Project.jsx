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
      <div className="flex gap-20 justify-center mt-14">
        <ProjectCard
          projectName="Deepfake Voice Detection"
          projectLink="https://github.com/rohancs127/Deepfake_voice_detection"
        />
        <ProjectCard
          projectName="ResQL - Catostrophe Management System"
          projectLink="https://github.com/rohancs127/ResQL"
        />
        <ProjectCard
          projectName="Certificate Generator"
          projectLink="https://github.com/rohancs127/Certificate-generator"
        />
      </div>
    </div>
  );
}

export default Project;

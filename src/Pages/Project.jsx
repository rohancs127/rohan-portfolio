import React from "react";
import ProjectCard from "../Components/ProjectCard";

function Project() {
  return (
    <div className="pt-52">
      <div className="flex justify-center p-10">
        <h1 className="font-bold text-indigo-300 hover:tracking-widest transition-all duration-300">
          My Works
        </h1>
      </div>
      <div className="flex gap-20 justify-center mt-14 max-sm:flex-col max-sm:items-center">
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
        <ProjectCard
          projectName="Zomato Clone Website"
          projectLink="https://github.com/rohancs127/Zomato-clone-website.git"
        />
      </div>
    </div>
  );
}

export default Project;

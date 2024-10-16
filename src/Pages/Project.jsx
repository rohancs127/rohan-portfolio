import React from "react";
import ProjectCard from "../Components/ProjectCard";

function Project() {
  return (
    <div className="pt-60 md:max-2xl:pt-36 pb-56 max-sm:pt-16">
      <div className="flex justify-center p-10">
        <h1 className="font-bold text-indigo-300 hover:tracking-widest transition-all duration-300 max-sm:hover:tracking-wider">
          My Works
        </h1>
      </div>
      <div className="grid grid-cols-3 place-items-center gap-20 justify-center mt-14 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:px-0 px-60">
      <ProjectCard
          projectName="Bus Reservation App"
          projectLink="https://github.com/rohancs127/Bus-Reservation-App"
        />
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

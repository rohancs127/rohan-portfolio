import React from "react";
import SkillSection from "./SkillSection";

function Home() {
  return (
    <div>
      <div className="flex w-full mt-32 mr-24 py-32 justify-center gap-60 items-center text-indigo-200">
        <div>
          <img src="images/Rohan.jpg" width={300} className="rounded-full" />
        </div>
        <div className="flex-col pt-10">
          <h1 className="mb-5 font-bold text-violet-400 text-7xl p-5">Hi</h1>
          <h2 className="mb-5 font-bold text-5xl p-5">I am Rohan</h2>
          <h3 className="text-4xl font-mono p-5">
            I'm a Computer Science Engineer..
          </h3>
        </div>
      </div>
      <div className="py-32">
        <SkillSection />
      </div>
    </div>
  );
}

export default Home;

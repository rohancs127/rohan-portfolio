import React from "react";
import SkillSection from "./SkillSection";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";

function Home({ homeRef, skillRef, aboutRef, projectRef, contactRef }) {
  return (
    <div className="max-sm:select-none">
      <div
        className="flex w-full pt-60 mb-32 mr-24 py-32 justify-center gap-60 items-center text-indigo-200 max-sm:gap-20 max-sm:pt-40 max-sm:flex-col max-sm:items-center"
        ref={homeRef}
      >
        <div>
          <img
            src="src/assets/Profile/Rohan.jpg"
            width={300}
            className="rounded-full animate-slide-in-left"
          />
        </div>
        <div className="flex-col pt-10 max-sm:ml-10 animate-slide-in-down">
          <h1 className="mb-5 font-bold text-violet-400 text-7xl p-5">Hi</h1>
          <h2 className="mb-5 font-bold text-5xl p-5">I am Rohan</h2>
          <h3 className="text-4xl font-mono p-5 ">
            I'm a Computer Science Engineer..
          </h3>
        </div>
      </div>
      <div className="py-32 pt-60 max-sm:pt-20 " ref={skillRef}>
        <SkillSection />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={projectRef}>
        <Project />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}

export default Home;

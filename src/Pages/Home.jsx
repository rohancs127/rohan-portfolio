import React from "react";
import SkillSection from "./SkillSection";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";

import myImage from '../assets/Profile/Rohan.jpg'

function Home({ homeRef, skillRef, aboutRef, projectRef, contactRef }) {
  return (
    <div className=" flex-col justify-between">
      <div
        className="flex w-full pt-64 pb-96 md:max-2xl:pt-32 justify-center gap-60 md:max-2xl:gap-32 items-center text-indigo-200 max-sm:gap-10 max-sm:pt-28 max-sm:flex-col max-sm:items-center"
        ref={homeRef}
      >
        <div>
          <img
            src={myImage}
            width={300}
            className="rounded-full animate-slide-in-left max-sm:w-56"
          />
        </div>
        <div className="flex-col pt-10 max-sm:ml-10 animate-slide-in-down">
          <h1 className="mb-5 font-bold text-violet-400 text-7xl p-5 max-sm:text-6xl max-sm:py-1">Hi</h1>
          <h2 className="mb-5 font-bold text-5xl p-5 max-sm:text-4xl max-sm:py-1">I am Rohan</h2>
          <h3 className="text-4xl font-mono p-5 max-sm:text-3xl max-sm:py-1">
            I'm a Computer Science Engineer..
          </h3>
        </div>
      </div>
      <div className="md:max-2xl:pt-40 pt-64 max-sm:pt-20 " ref={skillRef}>
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

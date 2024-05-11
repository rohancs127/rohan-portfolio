import React from "react";
import ResumeSection from "../Components/ResumeSection";
import MoreInfo from "../Components/MoreInfo";

function About() {
  return (
    <div className="py-44">
      <div className="text-center flex-col gap-10 items-start">
        <h1 className="font-bold text-indigo-300 hover:tracking-widest transition-all duration-300 inline-block">
          Know Me
        </h1>
        <div className="self-center text-2xl px-72 mt-16">
          My name is Rohan. I'm pursuing my Bachelor of Engineering degree in
          Computer Science and Engineering. I'm interested in the field of Web
          development. I have a good understanding in programming languages.
        </div>
        <div className="py-10">
          <h2 className="text-xl bg-gray-900">Education</h2>
        </div>
        <ResumeSection />
      </div>
    </div>
  );
}

export default About;

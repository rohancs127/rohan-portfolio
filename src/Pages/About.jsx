import React from "react";
import ResumeSection from "../Components/ResumeSection";
import MoreInfo from "../Components/MoreInfo";
import { ChevronDown } from "lucide-react";

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
        <div className="my-10 flex justify-center gap-5 items-center cursor-pointer">
          <h2 className="text-xl">Education</h2>
          <ChevronDown />
        </div>
        <ResumeSection />
      </div>
    </div>
  );
}

export default About;

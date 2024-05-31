import React from "react";
import ResumeSection from "../Components/ResumeSection";
import EducationInfo from "../Components/EducationInfo";
import MoreInfoOption from "../Components/MoreInfoOption";
import { useState } from "react";

function About() {
  const [educationInfoVisibility, setEducationInfoVisibility] = useState(false);

  // const displaymoreInfo = () => {
  //   if (!moreInfoVisibility) {
  //     setMoreInfoVisibility(true);
  //   } else setMoreInfoVisibility(false);
  // };

  return (
    <div className="pt-64">
      <div className="text-center flex-col gap-10 items-center">
        <h1 className="font-bold text-indigo-300 hover:tracking-widest transition-all duration-300 inline-block">
          Know Me
        </h1>
        <div className="self-center text-2xl px-72 mt-16">
          My name is Rohan. I'm pursuing my Bachelor of Engineering degree in
          Computer Science and Engineering. I'm interested in the field of Web
          development. I have a good understanding in programming languages.
        </div>
        <div
          className="my-10 flex justify-center gap-5 items-center cursor-pointer"
          onClick={() => {
            if (!educationInfoVisibility) setEducationInfoVisibility(true);
            else setEducationInfoVisibility(false);
          }}
        >
          <div>
            <MoreInfoOption InfoName="Education" />
          </div>
        </div>
        <div>{educationInfoVisibility && <EducationInfo />}</div>
        <div>
          <ResumeSection />
        </div>
      </div>
    </div>
  );
}

export default About;

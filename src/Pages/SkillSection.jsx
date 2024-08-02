import React from "react";
import Skill from "../Components/Skill";

import cppImage from "../assets/skillLogos/c++.svg";
import javaImage from "../assets/skillLogos/java.svg";
import pythonImage from "../assets/skillLogos/python.svg";
import htmlImage from "../assets/skillLogos/html.svg";
import cssImage from "../assets/skillLogos/css.svg";
import javascriptImage from "../assets/skillLogos/javascript.svg";
import nodejsImage from "../assets/skillLogos/node-js.svg";
import reactImage from "../assets/skillLogos/react.svg";
import tailwindImage from "../assets/skillLogos/tailwind-css.svg";

function SkillSection() {
  return (
    <div className="pb-48">
      <div className="flex justify-center p-10">
        <h1 className="font-bold text-indigo-300 hover:tracking-widest transition-all duration-300 max-sm:hover:tracking-wider">
          Skills
        </h1>
      </div>
      <div className="flex flex-wrap justify-center max-sm:flex-col">
        <Skill image={cppImage} skill="C++" />
        <Skill image={javaImage} skill="JAVA" />
        <Skill image={pythonImage} skill="PYTHON" />
        <Skill image={htmlImage} skill="HTML" />
        <Skill image={cssImage} skill="CSS" />
        <Skill image={javascriptImage} skill="JAVASCRIPT" />
        <Skill image={nodejsImage} skill="NODEJS" />
        <Skill image={reactImage} skill="REACTJS" />
        <Skill image={tailwindImage} skill="TAILWIND CSS" />
      </div>
    </div>
  );
}

export default SkillSection;

import React from "react";
import Skill from "../Components/Skill";

function Home() {
  return (
    <div>
      <div className="flex w-full mt-32 mr-24 p-40 justify-center gap-60 items-center">
        <div>
          <img src="images/Rohan.jpg" width={300} className="rounded-full" />
        </div>
        <div className="flex-col pt-10">
          <h1 className="mb-5 font-bold text-yellow-200 text-7xl p-5">Hi</h1>
          <h2 className="mb-5 font-bold text-5xl p-5">I am Rohan</h2>
          <h3 className="text-4xl font-mono p-5">
            I'm a Computer Science Engineer..
          </h3>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        <Skill image="../../src/assets/skillLogos/c++.svg" skill="C++" />
        <Skill image="../../src/assets/skillLogos/java.svg" skill="JAVA" />
        <Skill image="../../src/assets/skillLogos/python.svg" skill="PYTHON" />
        <Skill image="../../src/assets/skillLogos/html.svg" skill="HTML" />
        <Skill image="../../src/assets/skillLogos/css.svg" skill="CSS" />
        <Skill
          image="../../src/assets/skillLogos/javascript.svg"
          skill="JAVASCRIPT"
        />
        <Skill image="../../src/assets/skillLogos/node-js.svg" skill="NODEJS" />
        <Skill image="../../src/assets/skillLogos/react.svg" skill="REACTJS" />
        <Skill
          image="../../src/assets/skillLogos/tailwind-css.svg"
          skill="TAILWIND CSS"
        />
      </div>
    </div>
  );
}

export default Home;

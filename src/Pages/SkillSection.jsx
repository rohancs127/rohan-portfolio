import React from 'react';
import Skill from '../Components/Skill';

function SkillSection() {
  return (
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
  )
}

export default SkillSection
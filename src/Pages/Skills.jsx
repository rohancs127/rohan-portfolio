// src/Pages/Skills.jsx
import React from 'react';
import { skills } from '../data';
import SkillCard from '../Components/SkillCard'; // <-- Import the component

function Skills() {
  return (
    <div className="mt-20">
      <h3 className="text-2xl font-bold text-slate-lightest mb-8 text-center">My Tech Stack</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="bg-navy-light p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-cyan-400 mb-4 text-center">{category}</h4>
            <div className="grid grid-cols-3 gap-4">
              {skillList.map(skill => (
                <SkillCard key={skill.name} {...skill} /> // <-- Use the component
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
// src/Components/ProjectCard.jsx

import React from 'react';
import { Github } from 'lucide-react';

const ProjectCard = ({ name, description, tech, link }) => (
  <div className="bg-navy-light rounded-lg shadow-lg p-6 flex flex-col justify-between hover:transform hover:-translate-y-2 transition-transform duration-300">
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-slate-lightest group-hover:text-cyan-400">{name}</h3>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-slate-light hover:text-cyan-400">
          <Github size={24} />
        </a>
      </div>
      <p className="text-slate-dark text-sm mb-4">{description}</p>
    </div>
    <ul className="flex flex-wrap gap-2 mt-auto">
      {tech.map(t => (
        <li key={t} className="text-xs text-cyan-400 bg-navy-blue px-2 py-1 rounded-full font-mono">{t}</li>
      ))}
    </ul>
  </div>
);

export default ProjectCard;
// src/Components/SkillCard.jsx

import React from 'react';

const SkillCard = ({ name, icon }) => (
  <div className="flex flex-col items-center justify-center p-4 bg-navy-lighter rounded-lg shadow-md hover:transform hover:-translate-y-1 transition-transform duration-300">
    <img src={icon} alt={name} className="w-12 h-12 mb-2" />
    <span className="text-sm text-slate-light">{name}</span>
  </div>
);

export default SkillCard;
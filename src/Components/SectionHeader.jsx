// src/Components/SectionHeader.jsx

import React from 'react';

const SectionHeader = ({ number, title }) => {
  return (
    <h2 className="text-3xl font-bold text-slate-lightest mb-12 flex items-center">
      <span className="text-cyan-400 font-mono mr-4 text-2xl">{number}.</span>
      {title}
      <span className="flex-grow h-px bg-slate-700 ml-6"></span>
    </h2>
  );
};

export default SectionHeader;
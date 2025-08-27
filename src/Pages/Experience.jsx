// src/Pages/Experience.jsx
import React, { forwardRef, useState } from 'react';
import Section from '../Components/Section';
import SectionHeader from '../Components/SectionHeader';
import { experience } from '../data';
import { Briefcase, ChevronRight } from 'lucide-react';

const Experience = forwardRef((props, ref) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Section ref={ref}>
        <SectionHeader number="02" title="Where I’ve Worked" />
      
      <div className="flex flex-col md:flex-row gap-8 min-h-[300px]">
        {/* Tab List */}
        <div className="flex md:flex-col overflow-x-auto">
          {experience.map((job, index) => (
            <button
              key={job.company}
              onClick={() => setActiveTab(index)}
              className={`text-left px-4 py-2 whitespace-nowrap text-sm border-b-2 md:border-b-0 md:border-l-2 transition-all duration-300 ${
                activeTab === index
                  ? 'border-cyan-400 text-cyan-400 bg-navy-light'
                  : 'border-slate-700 text-slate-400 hover:bg-navy-light'
              }`}
            >
              {job.company}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="flex-1">
          {experience.map((job, index) => (
            <div key={index} className={`${activeTab === index ? 'block' : 'hidden'}`}>
              <h3 className="text-xl font-medium text-slate-200">
                {job.role} <span className="text-cyan-400">@ {job.company}</span>
              </h3>
              <p className="font-mono text-sm text-slate-400 mt-1 mb-6">{job.date}</p>
              <ul className="space-y-3">
                {job.description.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <ChevronRight className="w-4 h-4 mr-3 mt-1 text-cyan-400 flex-shrink-0" />
                    <span className="text-slate-400">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
});

export default Experience;
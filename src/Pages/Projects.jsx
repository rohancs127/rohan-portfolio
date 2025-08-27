// src/Pages/Projects.jsx
import React, { forwardRef } from 'react';
import Section from '../Components/Section';
import SectionHeader from '../Components/SectionHeader';
import ProjectCard from '../Components/ProjectCard'; 
import { projects } from '../data';

const Projects = forwardRef((props, ref) => {
  return (
    <Section ref={ref}>
        <SectionHeader number="04" title="Some Things I’ve Built" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <ProjectCard key={project.name} {...project} /> // <-- Use the component
        ))}
      </div>
    </Section>
  );
});

export default Projects;
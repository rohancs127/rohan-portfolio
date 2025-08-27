// src/Pages/About.jsx
import React, { forwardRef } from 'react';
import Section from '../Components/Section';
import SectionHeader from '../Components/SectionHeader';
import { aboutMe } from '../data';
import Skills from './Skills'; 

// Assuming you have a profile image in assets
import profileImage from '../assets/Profile/Rohan.jpg'; 

const About = forwardRef((props, ref) => {
  return (
    <Section ref={ref}>
      <SectionHeader number="01" title="About Me" />
      <div className="grid md:grid-cols-5 gap-12">
        <div className="md:col-span-3 text-slate-400 space-y-4">
          <p>{aboutMe.paragraph1}</p>
          <p>{aboutMe.paragraph2}</p>
          <p>{aboutMe.leadership}</p>
        </div>
        <div className="md:col-span-2 flex justify-center items-start">
            <div className="relative w-64 h-64 rounded-lg group">
                <div className="absolute inset-0 bg-cyan-400 rounded-lg transform transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                <img src={profileImage} alt="Rohan" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
            </div>
        </div>
      </div>
      <Skills /> {/* Embedding skills section here */}
    </Section>
  );
});

export default About;
// src/Pages/Contact.jsx
import React, { forwardRef } from 'react';
import Section from '../Components/Section';
import SectionHeader from '../Components/SectionHeader';
import SocialIcons from '../Components/SocialIcon'; // <-- Import the component
import { contactInfo } from '../data';

const Contact = forwardRef((props, ref) => {
  return (
    <Section ref={ref} className="text-center max-w-2xl mx-auto">
      <SectionHeader number="05" title="What's Next?" />
      <h3 className="text-5xl font-bold text-slate-lightest mb-4">Get In Touch</h3>
      <p className="text-slate-dark mb-8">
      I enjoy discussing technology and innovation. If you have a question, want to connect, or just want to chat about the cloud, feel free to drop me a line.
      </p>
      <a
        href={`mailto:${contactInfo.email}`}
        className="inline-block bg-transparent border border-cyan-400 text-cyan-400 font-medium py-3 px-8 rounded-md hover:bg-cyan-400 hover:bg-opacity-10 transition-all duration-300"
      >
        Say Hello
      </a>
       <div className="mt-8 flex justify-center"> 
         <SocialIcons />
       </div>
    </Section>
  );
});

export default Contact;
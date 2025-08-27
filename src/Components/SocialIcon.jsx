// src/Components/SocialIcon.jsx

import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { contactInfo } from '../data';

const SocialIcons = ({ direction = 'row' }) => {
  const socialLinks = [
    { href: contactInfo.github, icon: <Github size={20} />, name: 'GitHub' },
    { href: contactInfo.linkedin, icon: <Linkedin size={20} />, name: 'LinkedIn' },
    { href: contactInfo.instagram, icon: <Instagram size={20} />, name: 'LinkedIn' },
    // Add more here if you want, e.g., Twitter
  ];

  const classDirection = direction === 'col' ? 'flex-col space-y-6' : 'flex-row space-x-6';

  return (
    <div className={`flex ${classDirection}`}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className="text-slate-dark hover:text-cyan-400 transition-all duration-300 transform hover:translate-y-[-3px]"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
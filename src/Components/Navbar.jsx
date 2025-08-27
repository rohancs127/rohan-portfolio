// src/Components/Navbar.jsx

import React, { useState, useEffect } from "react";
import { navigation } from "../data";
import { Menu, X } from "lucide-react";

const Navbar = ({ refs, scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  // UX Improvement: Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function to reset the style when the component unmounts
    return () => { document.body.style.overflow = 'unset' };
  }, [isOpen]);

  const handleScroll = (refName) => {
    scrollToSection(refs[refName]);
    setIsOpen(false);
  };
  
  const navLinks = (
    <>
      {navigation.map((item, index) => (
        <li key={item.name}>
          <button
            onClick={() => handleScroll(item.ref)}
            className="text-slate-300 hover:text-cyan-400 transition-colors duration-300"
          >
            <span className="text-cyan-400">0{index + 1}.</span> {item.name}
          </button>
        </li>
      ))}
      <a
        href="/Rohan.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded-md hover:bg-cyan-400 hover:bg-opacity-10 transition-all duration-300"
      >
        Resume
      </a>
    </>
  );

  return (
    // We use a React Fragment (<>) to return two sibling elements
    <>
      {/* This header is now ONLY the top bar */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-navy-blue/80 backdrop-blur-md shadow-lg">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-cyan-400">RK</a>
          
          <ul className="hidden md:flex items-center space-x-8 text-sm">
            {navLinks}
          </ul>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Open menu">
              <Menu className="h-6 w-6 text-cyan-400" />
            </button>
          </div>
        </nav>
      </header>

      {/* This is the mobile menu overlay, now separate from the header */}
      <div
        className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out md:hidden 
                   ${isOpen ? "translate-x-0" : "translate-x-full"}
                   bg-navy-light`} // Solid background to cover all content
      >
        <div className="flex justify-end p-6">
          <button onClick={() => setIsOpen(false)} aria-label="Close menu">
            <X className="h-8 w-8 text-cyan-400" />
          </button>
        </div>
        <ul className="flex flex-col items-center justify-center h-full -mt-12 space-y-8 text-xl">
          {navLinks}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
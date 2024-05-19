import React from "react";

const navbarComponentStyle =
  "transtion-all duration-300 font-medium border-b-2 border-purple-950 hover:border-b-2 hover:border-neutral-300";

const Navbar = ({ homeRef, skillRef, aboutRef, projectRef, contactRef }) => {
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex justify-end items-center gap-20 bg-purple-950 py-4 w-full px-10 mt-0 h-min fixed z-10 top-0">
      <ul
        className={navbarComponentStyle}
        onClick={() => scrollToSection(homeRef)}
      >
        Home
      </ul>
      <ul
        className={navbarComponentStyle}
        onClick={() => scrollToSection(skillRef)}
      >
        Skills
      </ul>
      <ul
        className={navbarComponentStyle}
        onClick={() => scrollToSection(aboutRef)}
      >
        About Me
      </ul>
      <ul
        className={navbarComponentStyle}
        onClick={() => scrollToSection(projectRef)}
      >
        My Projects
      </ul>
      <ul
        className={navbarComponentStyle}
        onClick={() => scrollToSection(contactRef)}
      >
        Contact Me
      </ul>
    </div>
  );
};

export default Navbar;

import React from "react";
import { scrollToSection } from "../js/scrollToSection";

import { Home } from "lucide-react";
import { Trophy } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import { Laptop } from "lucide-react";
import { Mail } from "lucide-react";


const navbarComponentStyle =
  "transtion-all duration-300 font-medium border-b-2 border-purple-950 hover:border-b-2 hover:border-neutral-300";

const screenWidth = window.innerWidth;

const Navbar = ({ homeRef, skillRef, aboutRef, projectRef, contactRef }) => {
  return (
    <div className="flex justify-end items-center gap-20 bg-purple-950 py-4 w-full px-10 mt-0 h-min fixed z-10 top-0 max-sm:w-max max-sm:gap-5 max-sm:text-xs max-sm:select-none max-sm:justify-center">
      <ul
        className={navbarComponentStyle}
        onClick={() => scrollToSection(homeRef)}
      >
        {(screenWidth>640) && "Home"}
        {!(screenWidth>640) && <Home />}
      </ul>
      <ul
        className={navbarComponentStyle}
        onClick={() => scrollToSection(skillRef)}
      >
        {(screenWidth>640) && "Skills"}
        {!(screenWidth>640) && <Trophy />}
      </ul>
      <ul
        className={navbarComponentStyle}
        onClick={() => scrollToSection(aboutRef)}
      >
        {(screenWidth>640) && "About me"}
        {!(screenWidth>640) && <CircleUserRound />}
      </ul>
      <ul
        className={navbarComponentStyle}
        onClick={() => scrollToSection(projectRef)}
      >
        {(screenWidth>640) && "My Projects"}
        {!(screenWidth>640) && <Laptop />}
      </ul>
      <ul
        className={navbarComponentStyle}
        onClick={() => scrollToSection(contactRef)}
      >
        {(screenWidth>640) && "Contact Me"}
        {!(screenWidth>640) && <Mail />}
      </ul>
    </div>
  );
};

export default Navbar;

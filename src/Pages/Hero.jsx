// src/Pages/Hero.jsx
import React, { forwardRef } from "react";
import { professionalSummary } from "../data";

const Hero = forwardRef(({ scrollToSection }, ref) => {
  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col justify-center items-start pt-20"
    >
      <h1 className="text-cyan-400 font-mono text-lg mb-4">Hi, my name is</h1>
      <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold text-slate-200">
        {professionalSummary.name}.
      </h2>
      <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-400 mt-2">
        I build things for the cloud.
      </h3>
      <p className="mt-6 max-w-xl text-slate-400">
        I'm a <span className="text-cyan-400">{professionalSummary.title}</span> with a focus on infrastructure and data modernization. {professionalSummary.summary.split('. ')[1]}
      </p>
      <div className="mt-12">
        <button
          onClick={scrollToSection}
          className="bg-transparent border border-cyan-400 text-cyan-400 font-medium py-3 px-8 rounded-md hover:bg-cyan-400 hover:bg-opacity-10 transition-all duration-300"
        >
          Get In Touch
        </button>
      </div>
    </section>
  );
});

export default Hero;
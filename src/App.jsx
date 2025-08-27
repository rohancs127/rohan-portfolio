// src/App.jsx
import Navbar from "./Components/Navbar";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Experience from "./Pages/Experience";
import Certifications from "./Pages/Certifications";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import { useRef } from "react";

function App() {
  const refs = {
    homeRef: useRef(null),
    aboutRef: useRef(null),
    experienceRef: useRef(null),
    certificationsRef: useRef(null),
    projectRef: useRef(null),
    contactRef: useRef(null),
  };

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar refs={refs} scrollToSection={scrollToSection} />
      <main className="px-6 md:px-20 lg:px-40">
        <Hero ref={refs.homeRef} scrollToSection={() => scrollToSection(refs.contactRef)} />
        <About ref={refs.aboutRef} />
        <Experience ref={refs.experienceRef} />
        <Certifications ref={refs.certificationsRef} />
        <Projects ref={refs.projectRef} />
        <Contact ref={refs.contactRef} />
      </main>
    </div>
  );
}

export default App;
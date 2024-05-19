import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import { useRef } from "react";

function App() {
  const homeRef = useRef(null);
  const skillRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <>
      <Navbar
        homeRef={homeRef}
        skillRef={skillRef}
        aboutRef={aboutRef}
        projectRef={projectRef}
        contactRef={contactRef}
      />
      <Home
        homeRef={homeRef}
        skillRef={skillRef}
        aboutRef={aboutRef}
        projectRef={projectRef}
        contactRef={contactRef}
      />
    </>
  );
}

export default App;

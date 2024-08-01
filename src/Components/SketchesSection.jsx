import React from "react";
import SketchCard from "./SketchCard";

import sketch1Image from "../assets/Sketches/Sketch1.jpg";
import sketch2Image from "../assets/Sketches/Sketch2.jpeg";
import sketch3Image from "../assets/Sketches/Sketch3.jpeg";
import sketch4Image from "../assets/Sketches/Sketch4.jpeg";
import sketch5Image from "../assets/Sketches/Sketch5.jpeg";
import sketch6Image from "../assets/Sketches/Sketch6.jpeg";

function SketchesSection() {
  return (
    <div className="flex justify-center gap-10 items-center my-20  overflow-x-auto overflow-y-hidden scrollbar-hide max-sm:grid max-sm:grid-cols-2 max-sm:px-10 max-sm:pb-20 animate-slide-in-up">
      <SketchCard sketch={sketch1Image} />
      <SketchCard sketch={sketch2Image} />
      <SketchCard sketch={sketch3Image} />
      <SketchCard sketch={sketch4Image} />
      <SketchCard sketch={sketch5Image} />
      <SketchCard sketch={sketch6Image} />
    </div>
  );
}

export default SketchesSection;

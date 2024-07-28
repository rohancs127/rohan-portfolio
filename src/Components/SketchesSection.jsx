import React from "react";
import SketchCard from "./SketchCard";

function SketchesSection() {
  return (
    <div className="flex justify-center gap-10 items-center my-20  overflow-x-auto overflow-y-hidden scrollbar-hide max-sm:grid max-sm:grid-cols-2 max-sm:px-10 max-sm:pb-20">
      <SketchCard sketch="src/assets/Sketches/Sketch1.jpg" />
      <SketchCard sketch="src/assets/Sketches/Sketch2.jpeg" />
      <SketchCard sketch="src/assets/Sketches/Sketch3.jpeg" />
      <SketchCard sketch="src/assets/Sketches/Sketch4.jpeg" />
      <SketchCard sketch="src/assets/Sketches/Sketch5.jpeg" />
      <SketchCard sketch="src/assets/Sketches/Sketch6.jpeg" />

    </div>
  );
}

export default SketchesSection;

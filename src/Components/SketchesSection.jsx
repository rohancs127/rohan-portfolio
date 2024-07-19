import React from "react";
import SketchCard from "./SketchCard";

function SketchesSection() {
  return (
    <div className="grid grid-flow-col gap-10 items-center justify-center m-20 overflow-x-scroll overflow-y-hidden scrollbar-hide">
      <SketchCard />
      <SketchCard />
      <SketchCard />
      <SketchCard />
      <SketchCard />
      <SketchCard />
      <SketchCard />
      <SketchCard />
      <SketchCard />
      <SketchCard />
      <SketchCard />
      <SketchCard />
    </div>
  );
}

export default SketchesSection;
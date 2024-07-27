import React from "react";

function SketchCard({sketch}) {
  return (
    <div className="bg-black h-52 w-52 flex-shrink-0 hover:shadow-xl hover:shadow-slate-200 flex justify-center transition-all duration-300">
      <img src={sketch}  className="w-48 h-52"/>
    </div>
  );
}

export default SketchCard;

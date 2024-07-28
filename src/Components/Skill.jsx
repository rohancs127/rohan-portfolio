import React from "react";

function Skill({ image, skill }) {
  return (
    <div className="grid grid-flow-col items-center gap-10 content-center p-2 px-7 m-7 w-100 bg-gray-950 rounded-md hover:shadow-gray-700 shadow transition-all duration-300 ">
      <img src={image} className="w-14" />
      <div>{skill}</div>
    </div>
  );
}

export default Skill;

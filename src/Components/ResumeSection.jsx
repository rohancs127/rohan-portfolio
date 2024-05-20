import React from "react";

function ResumeSection() {
  const handleDownload = (e) => {
    console.log(e);
    e.preventDefault();
    const resumeUrl = "resume/Rohan_Resume.pdf";
    window.open(resumeUrl, "_blank");
  };
  return (
    <div>
      <button
        className=" focus:outline-none relative left-0 right-0 bottom-0 font-bold bg-indigo-900 text-slate-200 border-none shadow hover:shadow-sm hover:shadow-indigo-400 transition-all duration-200 "
        onClick={() => handleDownload(event)}
      >
        Resume
      </button>
      <div>Download my resume here!</div>
    </div>
  );
}

export default ResumeSection;

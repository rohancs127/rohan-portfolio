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
        className=" focus:outline-none relative left-0 right-0 bottom-0 font-bold bg-indigo-900 text-slate-200 border-none shadow hover:shadow-sm hover:shadow-indigo-400 transition-all duration-200 mb-3 max-sm:scale-90"
        onClick={() => handleDownload(event)}
      >
        Download Resume
      </button>
      <div>Checkout my resume here!</div>
    </div>
  );
}

export default ResumeSection;

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
      <button onClick={handleDownload(event)}>Resume</button>
      <div>Download my resume here!</div>
    </div>
  );
}

export default ResumeSection;

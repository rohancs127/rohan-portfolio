import React from "react";

function ResumeSection() {
    const handleDownload = () => {
        const resumeUrl = 'resume/Rohan_Resume.pdf';
        window.open(resumeUrl, '_blank');
      };
  return (
    <div>
      <button onClick={handleDownload()}>Resume</button>
      <div>Download my resume here!</div>
    </div>
  );
}

export default ResumeSection;

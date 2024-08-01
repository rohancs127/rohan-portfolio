import React from "react";
import CertificateCard from "./CertificateCard";

function CertificatesSection() {
  return (
    <div className="flex gap-10 items-center justify-center my-20 overflow-x-auto scrollbar-hide px-20 max-sm:grid animate-slide-in-up">
      <CertificateCard certificateImage="src/assets/Certificates/Certificate1.jpg" certificateName="Responsive Website Basics: Code With HTML, CSS and Javascript by University Of London" />
      <CertificateCard certificateImage="src/assets/Certificates/Certificate2.jpg" certificateName="AI for Future Workforce Program by Intel Corporation"/>
      <CertificateCard certificateImage="src/assets/Certificates/Certificate3.jpg" certificateName="Outstanding Leadership and Dedication by Sahyadri College of Engineering and Management"/>
      <CertificateCard certificateImage="src/assets/Certificates/Certificate4.jpeg" certificateName="Internship Completion Certificate by Technical Career Education"/>
    </div>
  );
}

export default CertificatesSection;

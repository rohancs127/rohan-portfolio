import React from "react";
import CertificateCard from "./CertificateCard";

import certificate1Image from '../assets/Certificates/Certificate1.jpg';
import certificate2Image from '../assets/Certificates/Certificate2.jpg';
import certificate3Image from '../assets/Certificates/Certificate3.jpg';
import certificate4Image from '../assets/Certificates/Certificate4.jpeg';


function CertificatesSection() {
  return (
    <div className="flex gap-10 items-center justify-center my-20 overflow-x-auto scrollbar-hide px-20 max-sm:grid animate-slide-in-up">
      <CertificateCard certificateImage={certificate1Image} certificateName="Responsive Website Basics: Code With HTML, CSS and Javascript by University Of London" />
      <CertificateCard certificateImage={certificate2Image} certificateName="AI for Future Workforce Program by Intel Corporation"/>
      <CertificateCard certificateImage={certificate3Image} certificateName="Outstanding Leadership and Dedication by Sahyadri College of Engineering and Management"/>
      <CertificateCard certificateImage={certificate4Image} certificateName="Internship Completion Certificate by Technical Career Education"/>
    </div>
  );
}

export default CertificatesSection;

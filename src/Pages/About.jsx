import React, { useState } from 'react';
import ResumeSection from '../Components/ResumeSection';
import EducationInfo from '../Components/EducationInfo';
import MoreInfoOption from '../Components/MoreInfoOption';
import CertificatesSection from '../Components/CertificatesSection';
import SketchesSection from '../Components/SketchesSection';

function About() {
  const [openSection, setOpenSection] = useState(null);

  const handleSectionClick = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="pt-44 pb-40 max-sm:pt-28">
      <div className="text-center flex-col gap-10 items-center">
        <h1 className="font-bold text-indigo-300 hover:tracking-widest transition-all duration-300 inline-block max-sm:hover:tracking-wider">
          Know Me
        </h1>
        <div className="self-center text-2xl px-72 mt-16 max-sm:px-0 max-sm:mx-16">
          My name is Rohan. I'm pursuing my Bachelor of Engineering degree in
          Computer Science and Engineering. I'm interested in the field of Web
          development. I have a good understanding in programming languages.
        </div>
        <div className="my-10">
          <div className="flex gap-20 justify-center max-sm:flex-col max-sm:items-center max-sm:gap-10">
            <div onClick={() => handleSectionClick('education')}>
              <MoreInfoOption InfoName="Education" isOpen={openSection === 'education'} />
            </div>
            <div onClick={() => handleSectionClick('certificates')}>
              <MoreInfoOption InfoName="Certificates" isOpen={openSection === 'certificates'} />
            </div>
            <div onClick={() => handleSectionClick('sketches')}>
              <MoreInfoOption InfoName="Sketches" isOpen={openSection === 'sketches'} />
            </div>
          </div>
        </div>
        <div>
          {openSection === 'education' && <EducationInfo />}
          {openSection === 'certificates' && <CertificatesSection />}
          {openSection === 'sketches' && <SketchesSection />}
        </div>
        <div>
          <ResumeSection />
        </div>
      </div>
    </div>
  );
}

export default About;

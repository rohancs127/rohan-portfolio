import React from "react";
import SocialCard from "../Components/SocialCard";
import EmailSection from "../Components/EmailSection";

function Contact() {
  return (
    <div className="pt-40 pb-40 max-sm:pt-16">
      <div className="flex justify-center p-10">
        <h1 className="font-bold text-indigo-300 hover:tracking-widest max-sm:hover:tracking-wider transition-all duration-300">
          Contact Me
        </h1>
      </div>
      <div className="flex justify-center">
        <EmailSection />
      </div>
      <div className="flex flex-wrap justify-center gap-10 mt-10 max-sm:gap-5">
        <SocialCard
          logo="../../src/assets/socialMediaLogo/github.svg"
          account="GitHub"
          link="https://github.com/rohancs127"
          width="w-12 max-sm:w-7"
        />
        <SocialCard
          logo="../../src/assets/socialMediaLogo/linked-in.svg"
          account="LinkedIn"
          link="https://www.linkedin.com/in/rohan-44aa02228"
          width="w-12 max-sm:w-7"
        />
        <SocialCard
          logo="../../src/assets/socialMediaLogo/twitterx.svg"
          account="X"
          link="https://x.com/rohanKumar5803"
          width="w-12 max-sm:w-7"
        />
        <SocialCard
          logo="../../src/assets/socialMediaLogo/facebook.svg"
          account="Facebook"
          link="https://www.facebook.com/profile.php?id=100012243734741"
          width="w-12 max-sm:w-7"
        />
        <SocialCard
          logo="../../src/assets/socialMediaLogo/instagram.svg"
          account="Instagram"
          link="https://www.instagram.com/rohan__kumar._"
          width="w-12 max-sm:w-7"
        />
      </div>
      <div className="text-center mt-20">
        <div>Source code available at</div>
        <a href="https://github.com/rohancs127/rohan-portfolio.git"><div className="flex items-center justify-center text-lg text-white cursor-pointer m-5"><img src="src/assets/socialMediaLogo/github.svg" className="w-8"/>/rohancs127</div></a>
      </div>
    </div>
  );
}

export default Contact;

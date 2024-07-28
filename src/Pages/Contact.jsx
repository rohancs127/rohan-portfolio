import React from "react";
import SocialCard from "../Components/SocialCard";
import EmailSection from "../Components/EmailSection";

function Contact() {
  return (
    <div className="pt-52 pb-40 max-sm:pt-16">
      <div className="flex justify-center p-10">
        <h1 className="font-bold text-indigo-300 hover:tracking-widest max-sm:hover:tracking-wider transition-all duration-300">
          Contact Me
        </h1>
      </div>
      <div className="flex justify-center">
        <EmailSection />
      </div>
      <div className="flex flex-wrap justify-center gap-10 mt-10">
        <SocialCard
          logo="../../src/assets/socialMediaLogo/github.svg"
          account="GitHub"
          link="https://github.com/rohancs127"
          width="w-12"
        />
        <SocialCard
          logo="../../src/assets/socialMediaLogo/linked-in.svg"
          account="LinkedIn"
          link="https://www.linkedin.com/in/rohan-44aa02228"
          width="w-12"
        />
        <SocialCard
          logo="../../src/assets/socialMediaLogo/twitterx.svg"
          account="X"
          link="https://x.com/rohanKumar5803"
          width="w-12"
        />
        <SocialCard
          logo="../../src/assets/socialMediaLogo/facebook.svg"
          account="Facebook"
          link="https://www.facebook.com/profile.php?id=100012243734741"
          width="w-12"
        />
        <SocialCard
          logo="../../src/assets/socialMediaLogo/instagram.svg"
          account="Instagram"
          link="https://www.instagram.com/rohan__kumar._"
          width="w-12"
        />
      </div>
    </div>
  );
}

export default Contact;

import React from "react";
import SocialCard from "../Components/SocialCard";

function Contact() {
  return (
    <div>
      <div className="flex justify-center p-10">
        <h1 className="font-bold text-indigo-300 hover:tracking-widest transition-all duration-300">
          Contact
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        <a>
          <SocialCard
            logo="../../src/assets/socialMediaLogo/github.svg"
            account="GitHub"
          />
        </a>
        <a>
          <SocialCard
            logo="../../src/assets/socialMediaLogo/linked-in.svg"
            account="LinkedIn"
          />
        </a>
        <a>
          <SocialCard
            logo="../../src/assets/socialMediaLogo/twitterx.svg"
            account="X"
          />
        </a>
        <a>
          <SocialCard
            logo="../../src/assets/socialMediaLogo/facebook.svg"
            account="Facebook"
          />
        </a>
        <a>
          <SocialCard
            logo="../../src/assets/socialMediaLogo/instagram.svg"
            account="Instagram"
          />
        </a>
      </div>
    </div>
  );
}

export default Contact;

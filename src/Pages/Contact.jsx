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
      <div className="flex flex-wrap justify-center">
        <SocialCard />
        <SocialCard />
        <SocialCard />
        <SocialCard />
        <SocialCard />
      </div>
    </div>
  );
}

export default Contact;

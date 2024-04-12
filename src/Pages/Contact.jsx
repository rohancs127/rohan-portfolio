import React from "react";
import SocialCard from "../Components/SocialCard";

function Contact() {
  return (
    <div className="flex justify-center">
      <div className="flex-col">
        <h1 className="font-bold text-indigo-300 hover:tracking-widest transition-all duration-300">
          Contact
        </h1>
        <SocialCard />
      </div>
    </div>
  );
}

export default Contact;

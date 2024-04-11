import React from "react";

function SocialCard() {
  return (
    <div>
      <div>Contact</div>
      <div className="flex items-center p-10 border-violet-300 shadow-sky-400">
        <img
          src="../../src/assets/socialMediaLogo/facebook.svg"
          className="w-14"
        />
        <h3>username</h3>
      </div>
    </div>
  );
}

export default SocialCard;

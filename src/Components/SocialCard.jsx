import React from "react";

function SocialCard({ logo, account, link }) {
  return (
    <a href={link}>
      <div className="flex gap-5 items-center justify-center px-5 py-1 bg-gray-900 w-48 text-stone-100 border-purple-900 border border-opacity-50 rounded-md">
        <img src={logo} className="w-12" />
        <h3>{account}</h3>
      </div>
    </a>
  );
}

export default SocialCard;

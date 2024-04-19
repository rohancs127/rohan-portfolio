import React from "react";

function SocialCard({ logo, account, link, width }) {
  return (
    <a href={link}>
      <div className="flex gap-5 items-center justify-center px-5 py-1 bg-gray-900 w-48 text-stone-100 border-purple-900 border border-opacity-50 rounded-md hover:shadow-purple-300 hover:shadow transition-all duration-200 h-">
        <img src={logo} className={width} />
        <h3>{account}</h3>
      </div>
    </a>
  );
}

export default SocialCard;

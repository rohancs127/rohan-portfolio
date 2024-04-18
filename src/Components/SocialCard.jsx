import React from "react";

function SocialCard({ logo, account }) {
  return (
    <div className="flex items-center justify-center px-5 py-1 bg-slate-300 w-40">
      <img src={logo} className="w-14" />
      <h3>{account}</h3>
    </div>
  );
}

export default SocialCard;

import React from "react";

function CertificateCard({certificateImage, certificateName}) {
  return (
    <div className="h-52 w-72 rounded-xl overflow-hidden flex-shrink-0 bg-white">
      <img src={certificateImage} className="h-52" />
      <div className=" opacity-0 hover:opacity-80 duration-200 relative bottom-52 text-white bg-indigo-400 bg w-full h-full flex-col pt-10 p-11 transform">
        <h1 className="text-lg font-bold">{certificateName}</h1>
      </div>
    </div>
  );
}

export default CertificateCard;

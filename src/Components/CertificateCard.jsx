import React from "react";

function CertificateCard() {
  return (
    <div className="h-52 w-72 rounded-xl overflow-hidden flex-shrink-0">
      <img src="images/demo-certificate.jpeg" className="h-52" />
      <div className=" opacity-0 hover:opacity-80 duration-200 relative bottom-52 text-gray-100 bg-indigo-400 bg w-full h-full flex-col pt-10 transform">
        <h1 className="text-lg font-bold">Certificate</h1>
      </div>
    </div>
  );
}

export default CertificateCard;

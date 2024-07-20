import React from "react";
import CertificateCard from "./CertificateCard";

function CertificatesSection() {
  return (
    <div className="flex gap-10 items-center justify-start my-20 overflow-x-auto scrollbar-hide ">
      <CertificateCard />
      <CertificateCard />
      <CertificateCard />
      <CertificateCard />
      <CertificateCard />
      <CertificateCard />
      <CertificateCard />
      <CertificateCard />
      <CertificateCard />
      <CertificateCard />
    </div>
  );
}

export default CertificatesSection;

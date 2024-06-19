import React from "react";
import CertificateCard from "./CertificateCard";

function CertificatesSection() {
  return (
    <div className="grid grid-flow-col gap-10 justify-center mb-32">
      <CertificateCard />
      <CertificateCard />
      <CertificateCard />
    </div>
  );
}

export default CertificatesSection;

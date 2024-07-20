import React from "react";
import CertificateCard from "./CertificateCard";

function CertificatesSection() {
  return (
    <div className="grid grid-flow-col gap-10 items-center justify-center m-20 overflow-x-scroll overflow-y-hidden scrollbar-hide pl-72">
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

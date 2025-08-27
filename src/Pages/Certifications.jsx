import React, { forwardRef } from 'react';
import Section from '../Components/Section';
import SectionHeader from '../Components/SectionHeader';
import CertificateCard from '../Components/CertificateCard'; // <-- Import the new component
import { certifications } from '../data';

const Certifications = forwardRef((props, ref) => {
    return (
        <Section ref={ref}>
            <SectionHeader number="03" title="Certifications & Credentials" />
            
            <div className="max-w-3xl mx-auto">
                {certifications.map(cert => (
                    <CertificateCard 
                        key={cert.name} 
                        name={cert.name}
                        issuer={cert.issuer}
                        logo={cert.logo}
                        link={cert.link}
                    />
                ))}
            </div>
        </Section>
    );
});

export default Certifications;
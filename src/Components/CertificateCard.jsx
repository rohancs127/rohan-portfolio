// src/Components/CertificateCard.jsx

import React from 'react';
import { ExternalLink } from 'lucide-react';

const CertificateCard = ({ name, issuer, logo, link }) => {
    return (
        <div className="bg-navy-light rounded-lg shadow-lg p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left hover:transform hover:-translate-y-2 transition-transform duration-300">
            <img 
                src={logo} 
                alt={`${name} logo`} 
                className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0" 
            />
            <div className="flex-grow">
                <h3 className="text-lg sm:text-xl font-bold text-slate-lightest">{name}</h3>
                <p className="text-slate-dark mt-1">Issued by: {issuer}</p>
            </div>
            {link && link !== "YOUR_CREDLY_BADGE_LINK_HERE" && (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-light hover:text-cyan-400 mt-3 sm:mt-0"
                    aria-label="Verify certification"
                >
                    <ExternalLink size={24} />
                </a>
            )}
        </div>
    );
};

export default CertificateCard;

import React from 'react';

const SqlIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={className}>
        <path fill="#F29111" d="M112,5H16C10,5,5,10,5,16v34h118V16C123,10,118,5,112,5z"/>
        <path fill="#00758F" d="M123,65H5v47c0,6,5,11,11,11h96c6,0,11-5,11-11V65z"/>
        <path fill="#E0E0E0" d="M123,50H5v15h118V50z"/>
        <path fill="#FFFFFF" d="M26,30c0,6.1,4.9,11,11,11s11-4.9,11-11s-4.9-11-11-11S26,23.9,26,30z"/>
        <path fill="#F29111" d="M37,19c-3.9,0-7.3,1.8-9.4,4.5c2.3-1.2,5-1.9,7.9-1.9c6.1,0,11,4.9,11,11c0,2.9-1.1,5.6-3,7.6 c2.7-2.1,4.5-5.5,4.5-9.4C48,23.9,43.1,19,37,19z"/>
        <text x="31" y="107" fill="#FFFFFF" fontFamily="Arial, sans-serif" fontSize="30" fontWeight="bold">SQL</text>
    </svg>
);

export default SqlIcon;


import React from 'react';

const PythonIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M14.25 12C14.25 15.0016 11.8016 17.25 9 17.25V21C13.9706 21 18 16.9706 18 12H14.25Z" fill="#3776AB"/>
        <path d="M15 9C15 5.02944 11.9706 2 8 2V5.75C10.1984 5.75 12.25 7.80157 12.25 10H15V9Z" fill="#FFD43B"/>
        <path d="M9.75 12C9.75 8.99837 12.1984 6.75 15 6.75V3C10.0294 3 6 7.02944 6 12H9.75Z" fill="#3776AB"/>
        <path d="M9 15C9 18.9706 12.0294 22 16 22V18.25C13.8016 18.25 11.75 16.1984 11.75 14H9V15Z" fill="#FFD43B"/>
    </svg>
);

export default PythonIcon;

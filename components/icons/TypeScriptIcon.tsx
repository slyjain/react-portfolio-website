
import React from 'react';

const TypeScriptIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className={className} fill="#3178C6">
        <path d="M24,24.3l-5.3-3.4v-4.9l5.3,3.4v10.8l-5.3,3.4v-4.9l5.3-3.4Z" fill="#fff"/>
        <path d="M29.3,31.1l5.3-3.4v-4.9l-5.3,3.4v10.8l5.3,3.4v-4.9Z" fill="#fff" opacity=".7"/>
        <path d="M0,0H48V48H0Z" fill="none"/>
        <path d="M48,48H26.3V26.5H48Zm-2-2H28.3V28.5H46Z"/>
        <path d="M21.7,48H0V26.5H21.7Zm-2-2H2V28.5H19.7Z"/>
        <path d="M26.3,21.5H0V0H26.3Zm-2-2H2V2H24.3Z"/>
        <path d="M48,21.5H28.3V0H48Zm-2-2H30.3V2H46Z"/>
        <path d="M24,24.3l5.3-3.4v-4.9L24,19.4v10.8l5.3,3.4v-4.9Z" fill="#fff"/>
    </svg>
);

export default TypeScriptIcon;

import React from 'react';

const CodeforcesIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M4.167 3.819h2.32v10.95h-2.32zM12 3.819h2.32v10.95H12z" />
    <path d="M8.232 3.819a.75.75 0 01.75-.75h2.32a.75.75 0 01.75.75v10.95a.75.75 0 01-.75.75h-2.32a.75.75 0 01-.75-.75zM17.513 3.069h2.32v12.45h-2.32z" />
    <path d="M4.167 16.288h15.666v2.32H4.167z" />
  </svg>
);

export default CodeforcesIcon;
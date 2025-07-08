import React from 'react';
import { YOUR_NAME, SOCIAL_LINKS } from '../constants';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import CodeforcesIcon from './icons/CodeforcesIcon';


const Footer: React.FC = () => {
  return (
    <footer className="text-center py-8">
      <div className="mb-4">
        <p className="text-gray-400">
          Crafted with AI by {YOUR_NAME}
        </p>
       
      </div>
       <div className="flex justify-center gap-4">
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-white transition-colors duration-300">
            <GitHubIcon className="h-6 w-6" />
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors duration-300">
            <LinkedInIcon className="h-6 w-6" />
          </a>
          {SOCIAL_LINKS.codeforces && (
             <a href={SOCIAL_LINKS.codeforces} target="_blank" rel="noopener noreferrer" aria-label="Codeforces" className="text-gray-400 hover:text-white transition-colors duration-300">
                <CodeforcesIcon className="h-6 w-6" />
            </a>
          )}
        </div>
    </footer>
  );
};

export default Footer;
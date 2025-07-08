import React from 'react';
import {
  YOUR_NAME,
  YOUR_TITLE,
  YOUR_BIO,
  YOUR_PROFILE_PICTURE_URL,
  SOCIAL_LINKS
} from '../constants';

import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import CodeforcesIcon from './icons/CodeforcesIcon';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col-reverse md:flex-row items-start gap-10 md:gap-16">
      <div className="flex-1">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {YOUR_NAME}
        </h1>
        <h2 className="mt-2 text-lg sm:text-xl font-semibold text-white/80 tracking-wide">
          {YOUR_TITLE}
        </h2>
        <p className="mt-4 max-w-md text-sm sm:text-base text-gray-400 leading-relaxed">
          {YOUR_BIO}
        </p>

        <div className="mt-6 flex gap-5">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="group"
          >
            <GitHubIcon className="h-6 w-6 text-white/60 group-hover:text-white transition-colors duration-300" />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="group"
          >
            <LinkedInIcon className="h-6 w-6 text-white/60 group-hover:text-white transition-colors duration-300" />
          </a>
          {SOCIAL_LINKS.codeforces && (
            <a
              href={SOCIAL_LINKS.codeforces}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Codeforces"
              className="group"
            >
              <CodeforcesIcon className="h-6 w-6 text-white/60 group-hover:text-white transition-colors duration-300" />
            </a>
          )}
        </div>
      </div>

      <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0 rounded-full overflow-hidden bg-gradient-to-br from-white/10 to-black/10 p-1 backdrop-blur border border-white/10 shadow-2xl">
        <img
          src={YOUR_PROFILE_PICTURE_URL}
          alt="Profile"
          className="rounded-full w-full h-full object-cover"
        />
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import Section from './Section';

type Tech = {
  name: string;
  image: string;
};

const TECH_STACK: Tech[] = [
  { name: 'HTML', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Tailwind CSS', image: 'https://www.svgrepo.com/show/374118/tailwind.svg' },
  { name: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'MongoDB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Docker', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Git', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Java', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'C++', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'C', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
];

const TechStack: React.FC = () => {
  return (
    <Section title="Tech Stack">
      <div
        className="
          w-full rounded-3xl p-6 md:p-10 relative overflow-hidden
          bg-gradient-to-br from-white/10 to-black/20
          border border-white/10 shadow-2xl backdrop-blur-2xl
        "
      >
        {/* Glossy top glare */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent opacity-10 pointer-events-none" />
        {/* Inner glow border */}
        <div className="absolute -inset-px rounded-3xl border border-white/10 pointer-events-none" />

        <div className="relative z-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-y-8 gap-x-6">
          {TECH_STACK.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center gap-3 transition-transform duration-200 hover:scale-105 group"
            >
              <div
                className="
                  p-3 rounded-xl backdrop-blur-lg border border-white/10
                  bg-gradient-to-br from-white/20 to-black/30
                  shadow-inner group-hover:shadow-xl transition-all duration-300
                "
              >
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="h-10 w-10 object-contain"
                  loading="lazy"
                />
              </div>
              <span className="text-sm text-gray-100 text-center">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default TechStack;

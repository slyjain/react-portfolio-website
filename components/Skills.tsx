import React from 'react';
import Section from './Section';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <Section title="Skills">
      <div className="flex flex-wrap gap-2">
        {SKILLS.map((skill, index) => (
          <div key={index} className="rounded-full bg-gray-800 px-3 py-1 text-sm font-medium leading-5 text-gray-300 transition-all duration-300 hover:bg-gray-700 hover:text-white">
            {skill.name}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
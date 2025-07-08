import React from 'react';
import Section from './Section';
import { EDUCATION_DATA } from '../constants';

const Education: React.FC = () => {
  return (
    <Section title="Education">
      <div className="space-y-8">
        {EDUCATION_DATA.map((edu, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 shadow-lg rounded-2xl p-6 backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:border-white/20"
          >
            <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2 gap-2">
              <h3 className="text-white font-extrabold text-lg sm:text-xl">
                {edu.degree}
              </h3>
              <p className="text-sm text-gray-400 whitespace-nowrap">{edu.period}</p>
            </div>
            <h4 className="text-base font-semibold text-gray-300 mb-1">
              {edu.institution}
            </h4>
            <p className="text-sm text-gray-400">{edu.details}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;

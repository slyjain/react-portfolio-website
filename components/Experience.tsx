import React from 'react';
import Section from './Section';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <Section title="Work Experience">
      <div className="relative space-y-14 before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
        {EXPERIENCES.map((exp, index) => (
          <div
            key={index}
            className="relative flex items-start md:items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
          >
            {/* Timeline dot */}
            <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-black group-hover:bg-white text-white group-hover:text-black transition-all duration-300 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-lg">
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="14" height="12">
                <path
                  fillRule="nonzero"
                  d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                />
              </svg>
            </div>

            {/* Content box */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.25rem)] bg-gradient-to-br from-white/5 to-white/10 p-6 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-lg transition-all duration-300 group-hover:shadow-white/20">
              <div className="flex items-center gap-4 mb-3">
                {exp.imageUrl && (
                  <img
                    src={exp.imageUrl}
                    alt={exp.company}
                    className="w-10 h-10 object-contain rounded-md border border-white/10 shadow-md"
                  />
                )}
                <div className="flex-1">
                  <h3 className="text-white font-extrabold text-lg">{exp.role}</h3>
                  <div className="text-base text-gray-400 font-medium">{exp.company}</div>
                </div>
              </div>
              <div className="text-sm text-gray-500 mb-3">{exp.period}</div>
              <ul className="list-disc list-inside text-base text-gray-200 space-y-2 leading-relaxed">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;

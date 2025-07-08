import React from 'react';
import Section from './Section';
import { ACHIEVEMENTS } from '../constants';

const Achievements: React.FC = () => {
  return (
    <Section title="Achievements">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ACHIEVEMENTS.map((ach, index) => (
          <div
            key={index}
            className={`
              relative overflow-hidden p-6 rounded-2xl border border-white/10
              bg-gradient-to-br from-white/10 to-black/20
              backdrop-blur-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)]
              transition-all duration-300
              hover:shadow-2xl group
            `}
          >
            {/* Glossy top shine */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent opacity-10 pointer-events-none" />

            {/* Subtle inner glow */}
            <div className="absolute -inset-px rounded-2xl border border-white/10 group-hover:border-white/30 transition-colors duration-300" />

            <h3 className="text-base font-semibold text-white z-10 relative">
              {ach.title}
            </h3>
            <p className="mt-2 text-sm text-gray-300 z-10 relative">
              {ach.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Achievements;

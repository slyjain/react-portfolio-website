import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="scroll-mt-16">
      <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl mb-8 group">
        {title}
        <span className="block h-0.5 max-w-0 group-hover:max-w-full transition-all duration-500 bg-white mt-2"></span>
      </h2>
      {children}
    </section>
  );
};

export default Section;
import React from 'react';
import Section from './Section';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  return (
    <Section title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;

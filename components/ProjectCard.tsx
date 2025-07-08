import React from 'react';
import { Project } from '../types';
import GitHubIcon from './icons/GitHubIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';
import { CardContainer, CardBody, CardItem } from './ThreeDCard';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, tags, repoUrl, liveUrl, imageUrl } = project;

  return (
    <CardContainer containerClassName="w-full">
      <CardBody
        className={`
          relative group/card w-full aspect-[4/3] p-5 rounded-2xl
          bg-gradient-to-br from-white/10 to-black/10
          border-2 border-white/20 group-hover/card:border-white/40
          backdrop-blur-xl shadow-lg hover:shadow-2xl
          transition-all duration-300
        `}
      >
        <CardItem translateZ="50" className="text-xl font-semibold text-white">
          {title}
        </CardItem>

        <CardItem as="p" translateZ="40" className="text-gray-300 text-sm mt-2 max-w-full">
          {description}
        </CardItem>

        <CardItem translateZ="30" className="w-full mt-4">
          <img
            src={imageUrl}
            alt={`Thumbnail for ${title}`}
            className="h-48 w-full object-cover rounded-xl shadow-md group-hover/card:shadow-xl transition-shadow"
          />
        </CardItem>

        <div className="flex justify-between items-end mt-6">
          <CardItem translateZ={20} className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white border border-white/10 backdrop-blur"
              >
                {tag}
              </span>
            ))}
          </CardItem>

          <CardItem translateZ={20} className="flex items-center gap-3">
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} repository`}
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              <GitHubIcon className="h-6 w-6" />
            </a>

            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} live demo`}
                className="text-white hover:text-gray-300 transition-colors duration-300"
              >
                <ExternalLinkIcon className="h-6 w-6" />
              </a>
            )}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ProjectCard;

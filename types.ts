import React from 'react';

export interface Tech {
  name: string;
  icon: React.FC<{ className?: string }>;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl: string;
  imageUrl: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
    degree: string;
    institution: string;
    period: string;
    details: string;
}

export interface Achievement {
    title: string;
    description: string;
}
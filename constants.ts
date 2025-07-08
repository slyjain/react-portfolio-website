import { Tech, Project, Experience, Education, Achievement } from './types';

import ReactIcon from './components/icons/ReactIcon';
import TypeScriptIcon from './components/icons/TypeScriptIcon';
import JavaScriptIcon from './components/icons/JavaScriptIcon';
import PythonIcon from './components/icons/PythonIcon';
import CppIcon from './components/icons/CppIcon';
import SqlIcon from './components/icons/SqlIcon';
import NodeJsIcon from './components/icons/NodeJsIcon';
import ExpressIcon from './components/icons/ExpressIcon';
import MongoDbIcon from './components/icons/MongoDbIcon';
import PostgresIcon from './components/icons/PostgresIcon';
import MySqlIcon from './components/icons/MySqlIcon';
import GitIcon from './components/icons/GitIcon';
import AwsIcon from './components/icons/AwsIcon';


export const YOUR_NAME = "Samyak Rote";
export const YOUR_TITLE = "Software Engineer & Computer Science Student";
export const YOUR_BIO = "Computer Science student at IIIT Nagpur specializing in algorithm design and full-stack development. Passionate about building complex, efficient, and user-friendly applications.";
export const YOUR_PROFILE_PICTURE_URL = "./20230826_115633.jpg";

export const SOCIAL_LINKS = {
    linkedin: "https://www.linkedin.com/in/samyak-rote/",
    github: "https://github.com/slyjain",
    codeforces: "https://codeforces.com/profile/slyjain"
};


export const FRONTEND_TECH: Tech[] = [
    { name: 'React.js', icon: ReactIcon },
    { name: 'JavaScript', icon: JavaScriptIcon },
    { name: 'TypeScript', icon: TypeScriptIcon },
    { name: 'Python', icon: PythonIcon },
    { name: 'C++', icon: CppIcon },
    { name: 'SQL', icon: SqlIcon },
];

export const BACKEND_TECH: Tech[] = [
    { name: 'Node.js', icon: NodeJsIcon },
    { name: 'Express.js', icon: ExpressIcon },
    { name: 'MongoDB', icon: MongoDbIcon },
    { name: 'PostgreSQL', icon: PostgresIcon },
    { name: 'MySQL', icon: MySqlIcon },
    { name: 'Git', icon: GitIcon },
    { name: 'AWS', icon: AwsIcon },
];

export const SKILLS: Tech[] = [...FRONTEND_TECH, ...BACKEND_TECH];

export const PROJECTS: Project[] = [
    {
      title: "Text-to-Learn: AI-powered Course Generator",
      description: "Built a platform to convert raw text into structured courses using AI-generated content. Rendered headings, paragraphs, code, videos, and MCQs from JSON schema. Introduced a dynamic programming-based safety check for robust generation during parallelism. Added course saving & dashboards.",
      tags: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Gemini API'],
      repoUrl: 'https://github.com/YourUsername/text-to-learn',
      imageUrl: 'https://images.unsplash.com/photo-1603574670812-d24560880210?q=80&w=2069&auto=format&fit=crop',
    },
    {
      title: "AI-powered Coding Assistant Chrome Extension",
      description: "Built a Retrieval-Augmented Generation-based Chrome Extension offering AI help on 400+ problems. Overrode window.fetch() to extract problem context for real-time prompt generation. Fine-tuned prompts dynamically and persisted chat history across sessions.",
      tags: ['JavaScript', 'Chrome Extensions', 'Gemini API'],
      repoUrl: 'https://github.com/slyjain/Samyak_Rote_submission',
      imageUrl: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2069&auto=format&fit=crop',
    },
    {
      title: "Rubik’s Cube Solver – Korf’s IDA* Algorithm",
      description: "Implemented Korf’s IDA* algorithm using a pattern database. Modeled cubes in 3D, 1D, and Bitboard formats. Benchmarked BFS (30.41s), DFS (32.99s), IDDFS (1.94s) on 7 scrambles; solved 13-move scrambles in 1.379s with estimated 200M× speedup.",
      tags: ['C++', 'CMake', 'Algorithms'],
      repoUrl: 'https://github.com/slyjain/KorfsRubiksCubeSolver',
      liveUrl: 'https://www.cs.princeton.edu/courses/archive/fall06/cos402/papers/korfrubik.pdf',
      imageUrl: 'https://images.unsplash.com/photo-1593113646773-462716a8ca6a?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: "Real-Time Collaborative Whiteboard",
      description: "Architected a full-stack whiteboard with 10+ drawing tools, undo/redo, and real-time collaboration via WebSockets. Secured with JWT auth and role-based access. Deployed using Vercel + Render; MongoDB-backed with REST APIs.",
      tags: ['React', 'Node.js', 'Socket.IO', 'MongoDB'],
      repoUrl: 'https://github.com/slyjain/finalBackend',
      liveUrl: 'https://whiteboard-tutorial-eight.vercel.app/',
      imageUrl: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=1974&auto=format&fit=crop',
    },
    {
      title: "Vehicle Routing Optimization",
      description: "Designed a genetic algorithm to optimize routing across 3 vehicles and 10 destinations. Used DEAP for evolutionary principles and custom fitness function to ensure balanced load and valid routes.",
      tags: ['Python', 'Genetic Algorithms', 'DEAP'],
      repoUrl: 'https://github.com/slyjain',
      imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop',
    },
    {
      title: "School Payment & Dashboard System",
      description: "Built a full-stack system to manage school fee transactions. Integrated JWT-secured payment gateway, webhook logs, and transaction states. Designed a dashboard with pagination, filters, and sorting.",
      tags: ['NestJS', 'MongoDB', 'React.js', 'Tailwind CSS'],
      repoUrl: 'https://github.com/YourUsername/school-payments-dashboard',
      imageUrl: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=2069&auto=format&fit=crop',
    },
    {
      title: "Human Activity Recognition (HAR)",
      description: "Improved HAR model from 73% to 87% by using K-Means for dimensionality reduction. Reduced feature count from 561 to 75 and achieved 77.8% training time reduction using optimized clustering.",
      tags: ['Python', 'ML', 'Clustering'],
      repoUrl: 'https://github.com/slyjain',
      imageUrl: 'https://images.unsplash.com/photo-1554284126-aa88f22d8b74?q=80&w=2069&auto=format&fit=crop',
    },
    {
      title: "Stock Plotter – Yahoo Finance",
      description: "Built a stock visualization tool that scrapes data from Yahoo Finance. Backend with Node.js and Express updates real-time charts for up to 200 trading days using Chart.js.",
      tags: ['Node.js', 'Express.js', 'Chart.js'],
      repoUrl: 'https://github.com/slyjain',
      liveUrl: 'https://slyjain.github.io/stock-website-frontend/',
      imageUrl: 'https://images.unsplash.com/photo-1581093588401-4ca5c584f003?q=80&w=2069&auto=format&fit=crop',
    }
  ];
  export const EXPERIENCES: Experience[] = [
    {
      title: 'DSA Doubt Solver',
      company: 'AlgoZenith',
      location: 'Remote',
      period: 'Jun 2025 – Ongoing',
      description: [
        'Solved 300+ DSA doubts covering core and advanced topics like Trees, Graphs, Dynamic Programming, and Segment Trees.',
        'Provided optimized C++/Python code and detailed step-by-step explanations to enhance student understanding.',
        'Maintained high feedback ratings from students for clarity, speed, and problem-solving depth.'
      ],
      imageUrl: 'https://maang.in/_next/static/media/AZlogo.925989af.svg'
    }
  ];
  
export const EDUCATION_DATA: Education[] = [
    {
        degree: 'Bachelor of Technology, Computer Science and Engineering',
        institution: 'Indian Institute of Information Technology, Nagpur',
        period: 'Nov 2022 - Jun 2026',
        details: 'CGPA: 8.77'
    },
];

export const ACHIEVEMENTS: Achievement[] = [
    {
      title: 'Codeforces Specialist',
      description: 'Reached a maximum rating of 1415, ranked 1647 in Codeforces Round 991 (Div. 3).',
      imageUrl: 'https://images.unsplash.com/photo-1531497865144-0464ef8fb9f8?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'LeetCode Knight',
      description: 'Achieved Rank 413 out of 27,000+ participants in a global LeetCode Biweekly Contest 160.',
      imageUrl: 'https://images.unsplash.com/photo-1632922266880-bba2045e03e6?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'NTSE Scholar',
      description: 'Earned recognition as a top 1,000 student out of over 800,000 candidates in the NCERT NTSE scholarship program. Ranked 245 in Maharashtra in Stage 1.',
      imageUrl: 'https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Cleared PRMO',
      description: 'Qualified for RMO (Regional Mathematical Olympiad).',
      imageUrl: 'https://images.unsplash.com/photo-1581090700227-1e8a1f3f5df1?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Qualified Homi Bhabha Stage 1',
      description: 'Cleared Stage 1 of the prestigious Dr. Homi Bhabha Balvaidyanik Exam.',
      imageUrl: 'https://images.unsplash.com/photo-1600267165551-ecfdc6e92744?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'CodeChef 4-Star',
      description: 'Achieved Rank 43 out of 2000+ participants in Starters 187 contest.',
      imageUrl: 'https://images.unsplash.com/photo-1531379410502-63bfe8cdaf93?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Notes Intern at Algozenith',
      description: 'Published 100+ detailed explanations of core and advanced DSA concepts to support 300+ students.',
      imageUrl: 'https://images.unsplash.com/photo-1584697964364-026d84dbdf8b?q=80&w=2070&auto=format&fit=crop'
    }
  ];
  

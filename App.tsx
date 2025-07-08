
import React from 'react';
import Header from './components/Header';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import Achievements from './components/Achievements';
import { EXPERIENCES } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-gray-300 font-sans">
      <div className="fixed top-0 left-0 -z-10 h-full w-full bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,255,255,0.1),rgba(255,255,255,0))]"></div>
      
      <main className="max-w-4xl mx-auto p-5 md:p-10 space-y-20 md:space-y-28">
        <Header />
        <TechStack />
        <Projects />
        <Achievements />
        {EXPERIENCES.length > 0 && <Experience />}
        <Education />
        <Footer />
      </main>
    </div>
  );
};

export default App;
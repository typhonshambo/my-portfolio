import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Terminal from './components/Terminal';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Achievements from './components/sections/Achievements';
import Blog from './components/sections/Blog';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import Help from './components/sections/Help';

type Section = 'home' | 'about' | 'experience' | 'projects' | 'achievements' | 'blog' | 'skills' | 'contact' | 'help';

function App() {
  const [currentSection, setCurrentSection] = useState<Section>('home');
  const [showWelcome, setShowWelcome] = useState(true);

  const handleCommand = (command: string) => {
    switch (command.toLowerCase()) {
      case 'about':
      case 'clear':
        setCurrentSection('home');
        break;
      case 'experience':
        setCurrentSection('experience');
        break;
      case 'projects':
        setCurrentSection('projects');
        break;
      case 'achievements':
        setCurrentSection('achievements');
        break;
      case 'blog':
        setCurrentSection('blog');
        break;
      case 'skills':
        setCurrentSection('skills');
        break;
      case 'contact':
        setCurrentSection('contact');
        break;
      case 'help':
        setCurrentSection('help');
        break;
      default:
        // Invalid command - could show error or stay on current section
        break;
    }
    setShowWelcome(false);
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <Hero />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'achievements':
        return <Achievements />;
      case 'blog':
        return <Blog />;
      case 'skills':
        return <Skills />;
      case 'contact':
        return <Contact />;
      case 'help':
        return <Help />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white pb-20">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black pointer-events-none" />
      <div 
        className="fixed inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ff41' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      {/* Welcome Message */}
      <AnimatePresence>
        {showWelcome && currentSection === 'home' && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40 max-w-2xl mx-auto"
          >
            <div className="glass-panel p-4 text-center">
              <pre className="text-green-400 font-mono text-xs leading-tight whitespace-pre">
{`╭─────────────────────────────────────────────────────────────╮
│  Welcome to Shambo Chowdhury's Interactive Portfolio       │
│  Type 'help' to see available commands                     │
│  Navigate using terminal commands for the full experience  │
╰─────────────────────────────────────────────────────────────╯`}
              </pre>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <AnimatePresence mode="wait">
        <motion.main
          key={currentSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderSection()}
        </motion.main>
      </AnimatePresence>

      {/* Terminal */}
      <Terminal onCommand={handleCommand} currentSection={currentSection} />
    </div>
  );
}

export default App;
import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, Terminal, ChevronRight } from 'lucide-react';

const Help: React.FC = () => {
  const commands = [
    { command: 'about', description: 'Learn about me and my background' },
    { command: 'experience', description: 'View my work experience and internships' },
    { command: 'projects', description: 'Explore my featured projects and implementations' },
    { command: 'achievements', description: 'See my awards and open source contributions' },
    { command: 'blog', description: 'Read my technical articles and insights' },
    { command: 'skills', description: 'Browse my technical skills and expertise' },
    { command: 'contact', description: 'Get in touch with me' },
    { command: 'clear', description: 'Clear the terminal (return to home)' },
    { command: 'help', description: 'Show this help menu' }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen p-8"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4 font-mono flex items-center gap-3">
            <HelpCircle className="w-8 h-8 text-green-400" />
            <span className="text-green-400">~/</span>help
          </h2>
          <p className="text-gray-400 text-lg">Available terminal commands</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-panel p-8 mb-8"
        >
          <div className="flex items-center gap-2 mb-6">
            <Terminal className="w-5 h-5 text-green-400" />
            <h3 className="text-xl font-semibold text-white">Terminal Commands</h3>
          </div>
          
          <div className="space-y-4">
            {commands.map((cmd, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700/30 hover:border-green-500/30 transition-colors group"
              >
                <ChevronRight className="w-4 h-4 text-green-400" />
                <code className="text-green-400 font-mono font-semibold min-w-[100px] text-left">
                  {cmd.command}
                </code>
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  {cmd.description}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="glass-panel p-6"
        >
          <h3 className="text-lg font-semibold text-white mb-4">
            <span className="text-green-400">#</span> Navigation Tips
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <p className="text-gray-300">
                <span className="text-cyan-400 font-mono">↑↓</span> Navigate command history
              </p>
              <p className="text-gray-300">
                <span className="text-cyan-400 font-mono">Tab</span> Autocomplete commands
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-300">
                <span className="text-cyan-400 font-mono">Enter</span> Execute command
              </p>
              <p className="text-gray-300">
                <span className="text-cyan-400 font-mono">clear</span> Return to home
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-400 font-mono text-sm">
            Welcome to my interactive portfolio! Use the terminal below to explore.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Help;
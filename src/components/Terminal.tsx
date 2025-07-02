import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, ChevronRight } from 'lucide-react';

interface TerminalProps {
  onCommand: (command: string) => void;
  currentSection: string;
}

const Terminal: React.FC<TerminalProps> = ({ onCommand, currentSection }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = [
    'about', 'experience', 'projects', 'achievements', 'blog', 'skills', 'contact', 'clear', 'help'
  ];


  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setHistory(prev => [...prev, input]);
      setHistoryIndex(-1);
      onCommand(input.trim().toLowerCase());
      setInput('');
      setIsTyping(true);
      setTimeout(() => setIsTyping(false), 500);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const matches = commands.filter(cmd => cmd.startsWith(input.toLowerCase()));
      if (matches.length === 1) {
        setInput(matches[0]);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-xl border-t border-green-500/30 p-4 z-50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-2">
          <TerminalIcon className="w-4 h-4 text-green-400" />
          <span className="text-green-400 text-sm font-mono">shambo@portfolio:~/{currentSection}</span>
        </div>
        
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <ChevronRight className="w-4 h-4 text-green-400" />
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-green-400 font-mono outline-none placeholder-green-400/50"
            placeholder="Type a command..."
            autoComplete="off"
            spellCheck={false}
          />
          <AnimatePresence>
            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-green-400 text-sm"
              >
                Processing...
              </motion.div>
            )}
          </AnimatePresence>
        </form>

        <div className="mt-2 text-xs text-green-400/70 font-mono">
          Available: {commands.join(' | ')} | Use ↑↓ for history | Tab for autocomplete
        </div>
      </div>
    </motion.div>
  );
};

export default Terminal;
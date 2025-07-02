import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Cloud, Users, Bot, Star, ExternalLink } from 'lucide-react';
import { achievements, openSourceContributions } from '../../data/portfolio';

const iconMap = {
  trophy: Trophy,
  cloud: Cloud,
  users: Users,
  bot: Bot
};

const Achievements: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen p-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4 font-mono">
            <span className="text-green-400">~/</span>achievements
          </h2>
          <p className="text-gray-400 text-lg">Recognition and community contributions</p>
        </motion.div>

        {/* Awards Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {achievements.map((achievement, index) => {
            const IconComponent = iconMap[achievement.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel p-6 hover:border-green-500/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-500/20 rounded-lg">
                    <IconComponent className="w-6 h-6 text-green-400 group-hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                      {achievement.title}
                    </h3>
                    {achievement.metric && (
                      <div className="text-2xl font-bold text-cyan-400 font-mono mb-2">
                        {achievement.metric}
                      </div>
                    )}
                    <p className="text-gray-300 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Open Source Contributions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Star className="w-6 h-6 text-yellow-400" />
            Open Source Contributions
          </h3>
          
          <div className="space-y-6">
            {openSourceContributions.map((contribution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="glass-panel p-6 hover:border-green-500/50 transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                      {contribution.title}
                    </h4>
                    <p className="text-gray-300 mb-2">
                      {contribution.description}
                    </p>
                    <div className="text-sm text-gray-400 font-mono">
                      {contribution.duration}
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600/20 hover:bg-green-600/30 text-green-400 rounded-lg transition-colors border border-green-500/30 hover:border-green-500/50 text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View PR
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Achievements;
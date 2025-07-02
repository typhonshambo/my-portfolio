import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Wrench } from 'lucide-react';
import { skills } from '../../data/portfolio';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: skills.languages,
      color: "green"
    },
    {
      title: "Data Science & ML Ops",
      icon: Database,
      skills: skills.dataScience,
      color: "cyan"
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: skills.cloudDevOps,
      color: "yellow"
    },
    {
      title: "Backend Frameworks",
      icon: Wrench,
      skills: skills.backend,
      color: "purple"
    }
  ];

  const colorMap = {
    green: "bg-green-500/20 text-green-400 border-green-500/30",
    cyan: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    yellow: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    purple: "bg-purple-500/20 text-purple-400 border-purple-500/30"
  };

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
            <span className="text-green-400">~/</span>skills
          </h2>
          <p className="text-gray-400 text-lg">Technical expertise and tools</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel p-6 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <IconComponent className="w-6 h-6 text-green-400" />
                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + idx * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className={`px-3 py-2 rounded-lg text-sm font-mono border transition-all duration-200 ${
                        colorMap[category.color as keyof typeof colorMap]
                      }`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 glass-panel p-8"
        >
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">
            <span className="text-green-400">#</span> Skill Proficiency
          </h3>
          
          <div className="space-y-6">
            {[
              { skill: "Python", level: 95 },
              { skill: "Machine Learning", level: 70 },
              { skill: "DevOps/MLOps", level: 60 },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">{item.skill}</span>
                  <span className="text-green-400 font-mono text-sm">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.level}%` }}
                    transition={{ delay: 1 + index * 0.1, duration: 1 }}
                    className="bg-gradient-to-r from-green-400 to-cyan-400 h-2 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
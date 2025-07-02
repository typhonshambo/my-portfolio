import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { experiences } from '../../data/portfolio';

const Experience: React.FC = () => {
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
            <span className="text-green-400">~/</span>experience
          </h2>
          <p className="text-gray-400 text-lg">Professional journey and internships</p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="glass-panel p-8 hover:border-green-500/50 transition-all duration-300 group"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-5 h-5 text-green-400" />
                    <h3 className="text-xl font-semibold text-white group-hover:text-green-400 transition-colors">
                      {exp.title}
                    </h3>
                  </div>
                  <p className="text-cyan-400 font-medium mb-2">{exp.company}</p>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.duration}</span>
                  </div>
                  {exp.location && (
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  )}
                </div>

                <div className="lg:w-2/3">
                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300">
                        <ChevronRight className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-mono border border-green-500/30"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 glass-panel p-6"
        >
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <span className="text-green-400">#</span> Education
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
              <h4 className="text-green-400 font-semibold">Class XII - CBSE (2023)</h4>
              <p className="text-gray-300">Kendriya Vidyalaya CMERI Durgapur</p>
              <p className="text-cyan-400 font-mono">90.4%</p>
            </div>
            <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
              <h4 className="text-green-400 font-semibold">Class X - CBSE (2020)</h4>
              <p className="text-gray-300">Kendriya Vidyalaya Burdwan</p>
              <p className="text-cyan-400 font-mono">94.6%</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;
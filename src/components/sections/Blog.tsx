import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Clock, Tag, ArrowRight } from 'lucide-react';
import { blogPosts } from '../../data/portfolio';

const Blog: React.FC = () => {
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
            <span className="text-green-400">~/</span>blog
          </h2>
          <p className="text-gray-400 text-lg">Technical articles and insights</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-6 hover:border-green-500/50 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-green-400" />
                <h3 className="text-xl font-semibold text-white group-hover:text-green-400 transition-colors">
                  {post.title}
                </h3>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="flex items-center gap-1 px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs font-mono border border-green-500/30"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-green-400 text-sm font-medium group-hover:text-green-300 transition-colors"
              >
                <span>Read Article</span>
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-green-600/20 hover:bg-green-600/30 text-green-400 rounded-lg transition-colors border border-green-500/30 hover:border-green-500/50 font-mono"
          >
            View All Articles
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 glass-panel p-6"
        >
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <span className="text-green-400">#</span> Topics I Write About
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
              <h4 className="text-green-400 font-semibold mb-2">AI & Machine Learning</h4>
              <p className="text-gray-300 text-sm">GenAI applications, MLOps, predictive modeling</p>
            </div>
            <div className="p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
              <h4 className="text-cyan-400 font-semibold mb-2">Backend Development</h4>
              <p className="text-gray-300 text-sm">API design, scalability, system architecture</p>
            </div>
            <div className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
              <h4 className="text-yellow-400 font-semibold mb-2">Open Source</h4>
              <p className="text-gray-300 text-sm">Contributing to projects, community building</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Blog;
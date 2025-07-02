import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
            <span className="text-green-400">~/</span>contact
          </h2>
          <p className="text-gray-400 text-lg">Let's connect and collaborate</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-panel p-6">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-green-400" />
                Get In Touch
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm always interested in discussing new opportunities, innovative projects, 
                and collaborations in Data Science, MLOps, and open source.
              </p>
              
              <div className="space-y-4">
                <motion.a
                  href="mailto:shamboc04@gmail.com"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-3 p-4 bg-green-500/10 rounded-lg border border-green-500/20 hover:border-green-500/40 transition-colors group"
                >
                  <Mail className="w-5 h-5 text-green-400 group-hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-400 text-sm">shamboc04@gmail.com</p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/shambo04/"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-3 p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-colors group"
                >
                  <Linkedin className="w-5 h-5 text-cyan-400 group-hover:drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                  <div>
                    <p className="text-white font-medium">LinkedIn</p>
                    <p className="text-gray-400 text-sm">Connect professionally</p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://www.github.com/typhonshambo"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-3 p-4 bg-purple-500/10 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-colors group"
                >
                  <Github className="w-5 h-5 text-purple-400 group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                  <div>
                    <p className="text-white font-medium">GitHub</p>
                    <p className="text-gray-400 text-sm">Check out my projects</p>
                  </div>
                </motion.a>
              </div>
            </div>

            <div className="glass-panel p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                <span className="text-green-400">#</span> Current Status
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-gray-300">Available for opportunities</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                  <span className="text-gray-300">Research Intern at IIT Kharagpur</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  <span className="text-gray-300">Open to collaborations</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-panel p-8"
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <Send className="w-5 h-5 text-green-400" />
              Send Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:border-green-500/50 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:border-green-500/50 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:border-green-500/50 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project, opportunity, or just say hello!"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-green-600/20 hover:bg-green-600/30 text-green-400 rounded-lg transition-colors border border-green-500/30 hover:border-green-500/50 font-medium"
              >
                <Send className="w-4 h-4" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center glass-panel p-6"
        >
          <p className="text-gray-300 mb-4">
            Prefer a different way to connect? Check out my other profiles:
          </p>
          <div className="flex justify-center gap-4">
            {[
              { icon: Github, href: "#", label: "GitHub", color: "text-gray-400" },
              { icon: Linkedin, href: "#", label: "LinkedIn", color: "text-blue-400" },
              { icon: ExternalLink, href: "#", label: "Resume", color: "text-green-400" }
            ].map(({ icon: Icon, href, label, color }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 glass-panel hover:border-green-500/50 transition-all duration-200 ${color}`}
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
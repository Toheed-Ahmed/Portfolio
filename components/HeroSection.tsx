'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Link, ExternalLink } from 'lucide-react';
import Button from './Button';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, type: 'tween' },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Availability Badge */}
            <motion.div variants={badgeVariants} className="w-fit">
              <div className="glass px-4 py-2 rounded-full flex items-center gap-2 text-sm">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-slate-300">Available for opportunities</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-gradient">Building scalable products</span>
                <br />
                <span className="text-slate-100">that simplify workflows</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                Full Stack Developer focused on SaaS products, productivity tools, and workflow automation. Turning ideas into elegant solutions that solve real problems.
              </p>
            </motion.div>

            {/* Tech Stack Pills */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind'].map((tech) => (
                <motion.div
                  key={tech}
                  className="glass px-3 py-1 rounded-full text-xs text-blue-300"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(37, 99, 235, 0.5)' }}
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={scrollToProjects}
                variant="primary"
                size="lg"
                className="group"
              >
                View My Work
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Button>
              <motion.a
                href="https://github.com/Toheed-Ahmed"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="lg">
                  <Link size={20} />
                  GitHub
                </Button>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4 pt-8">
              <motion.a
                href="https://github.com/Toheed-Ahmed"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 glass rounded-lg hover:glow-blue transition-all"
              >
                <Link size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/toheed-ahmed-7aa7162b4"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 glass rounded-lg hover:glow-blue transition-all"
              >
                <Link size={24} />
              </motion.a>
              <motion.a
                href="mailto:kalwartoheed060@gmail.com"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 glass rounded-lg hover:glow-blue transition-all"
              >
                <ExternalLink size={24} />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column - Interactive Element */}
          <motion.div
            className="relative h-full hidden md:flex items-center justify-center"
            variants={itemVariants}
          >
            <div className="relative w-full aspect-square max-w-md">
              {/* Rotating gradient border */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-20 blur-2xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />

              {/* Glassmorphic card */}
              <div className="absolute inset-0 glass rounded-3xl overflow-hidden flex items-center justify-center">
                <motion.div
                  className="text-center space-y-4"
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  <div className="text-6xl font-bold text-gradient">TA</div>
                  <p className="text-slate-300">Full Stack Developer</p>
                  <p className="text-sm text-slate-400">SaaS • Productivity • Automation</p>
                </motion.div>
              </div>

              {/* Floating decorative elements */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-24 h-24 border border-blue-500 rounded-full opacity-10"
                  style={{
                    top: `${25 * (i % 2)}%`,
                    left: `${25 * (i % 2)}%`,
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20 + i * 5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs text-slate-400">Scroll to explore</p>
            <div className="w-6 h-10 border border-slate-400 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-slate-400 rounded-full mt-2"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

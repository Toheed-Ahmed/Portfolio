'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Share2, Code } from 'lucide-react';
import Button from './Button';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const techStackVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6 }
    },
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const techStack = [
    { name: 'React', color: 'from-cyan-400 to-blue-500' },
    { name: 'Next.js', color: 'from-slate-200 to-slate-400' },
    { name: 'TypeScript', color: 'from-blue-600 to-purple-600' },
    { name: 'Tailwind', color: 'from-cyan-300 to-blue-400' },
  ];

  const stats = [
    { value: '10+', label: 'Projects Built' },
    { value: '2+', label: 'Years Coding' },
    { value: '100%', label: 'Dedication' },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Animated background elements - premium version */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-float-slow pointer-events-none" style={{
        background: 'radial-gradient(circle, rgba(14, 165, 233, 0.5) 0%, transparent 70%)',
      }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-15 animate-float pointer-events-none" style={{
        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.5) 0%, transparent 70%)',
        animationDelay: '2s',
      }} />
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full blur-3xl opacity-10 animate-float-slow pointer-events-none" style={{
        background: 'radial-gradient(circle, rgba(14, 165, 233, 0.3) 0%, transparent 70%)',
        animationDelay: '4s',
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Availability Badge - Premium */}
            <motion.div variants={itemVariants} className="w-fit">
              <motion.div
                className="glass px-4 py-2 rounded-full flex items-center gap-2 text-sm backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-2 h-2 rounded-full bg-cyan-400"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-slate-300">Available for opportunities</span>
              </motion.div>
            </motion.div>

            {/* Headline - Powerful & Memorable */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
                <motion.span
                  className="gradient-text block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  Crafting
                </motion.span>
                <motion.span
                  className="text-slate-100 block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  Premium Digital
                </motion.span>
                <motion.span
                  className="gradient-text block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  Experiences
                </motion.span>
              </h1>

              {/* Subheading */}
              <motion.p 
                variants={itemVariants}
                className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl font-light"
              >
                Full Stack Engineer passionate about building scalable SaaS products, workflow automation tools, and elegant user experiences. Currently exploring advanced system design and modern web architecture.
              </motion.p>
            </motion.div>

            {/* Tech Stack Pills - Animated */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-2">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  custom={index}
                  variants={techStackVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.08,
                    boxShadow: '0 0 30px rgba(6, 182, 212, 0.5)',
                  }}
                  className={`badge-primary px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${tech.color} bg-opacity-10 border border-cyan-500 border-opacity-30 text-cyan-300 cursor-pointer`}
                >
                  {tech.name}
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-6">
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
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button variant="outline" size="lg">
                  <Code size={20} />
                  GitHub
                </Button>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
              <motion.a
                href="https://github.com/Toheed-Ahmed"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 glass rounded-lg hover:glow-md transition-all"
              >
                <Code size={24} className="text-slate-300 hover:text-cyan-400" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/toheed-ahmed-7aa7162b4"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 glass rounded-lg hover:glow-md transition-all"
              >
                <Share2 size={24} className="text-slate-300 hover:text-cyan-400" />
              </motion.a>
              <motion.a
                href="mailto:kalwartoheed060@gmail.com"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 glass rounded-lg hover:glow-md transition-all"
              >
                <Mail size={24} className="text-slate-300 hover:text-cyan-400" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column - Interactive Visual Element */}
          <motion.div
            className="relative h-full hidden lg:flex items-center justify-center"
            variants={itemVariants}
          >
            {/* Animated gradient orb */}
            <div className="relative w-full h-full flex items-center justify-center">
              <motion.div
                className="absolute w-96 h-96 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, rgba(14, 165, 233, 0.1) 70%, transparent 100%)',
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Inner rotating ring */}
              <motion.div
                className="absolute w-80 h-80 border border-cyan-500 border-opacity-30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity }}
              />

              {/* Stats around the circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="absolute glass px-6 py-4 rounded-xl text-center backdrop-blur-md"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{ duration: 12, repeat: Infinity }}
                    style={{
                      transform: `rotate(${index * 120}deg) translateY(-180px)`,
                    }}
                  >
                    <div className="text-2xl md:text-3xl font-bold gradient-text">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-slate-400 mt-2">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Center sparkle */}
              <motion.div
                animate={{
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator - premium */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs text-slate-500">Scroll to explore</span>
          <div className="w-6 h-10 border border-slate-600 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-cyan-400 rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}


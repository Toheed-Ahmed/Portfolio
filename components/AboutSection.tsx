'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Zap, Target, Award, Code2, Rocket } from 'lucide-react';

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const focusAreas = [
    {
      icon: Rocket,
      title: 'SaaS Products',
      description: 'Building scalable, user-centric SaaS applications from concept to production',
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Creating tools that eliminate repetitive tasks and boost productivity',
    },
    {
      icon: Code2,
      title: 'Modern Tech Stack',
      description: 'Leveraging cutting-edge frameworks and best practices in web development',
    },
    {
      icon: Target,
      title: 'Product Thinking',
      description: 'Solving real problems with elegant, thoughtful design and engineering',
    },
  ];

  const stats = [
    {
      icon: Award,
      value: '10+',
      label: 'Projects Completed',
      color: 'cyan',
    },
    {
      icon: Code2,
      value: '2+',
      label: 'Years Experience',
      color: 'blue',
    },
    {
      icon: Lightbulb,
      value: '∞',
      label: 'Learning Journey',
      color: 'cyan',
    },
  ];

  return (
    <section id="about" className="section-spacing relative">
      {/* Background accent */}
      <div className="absolute left-0 top-0 w-96 h-96 rounded-full blur-3xl opacity-5 pointer-events-none" style={{
        background: 'radial-gradient(circle, rgba(14, 165, 233, 0.4), transparent)',
      }} />

      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-3">
              <Lightbulb size={24} className="text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">About Me</span>
            </div>
            <h2 className="section-heading text-4xl md:text-5xl">
              Building the future, one line at a time
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Story */}
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <div className="space-y-4">
                <p className="text-lg text-slate-300 leading-relaxed font-light">
                  I'm a Full Stack Engineer with a deep passion for crafting digital products that solve real problems. My journey began with curiosity about how technology works, and has evolved into a commitment to building elegant solutions that users love.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed font-light">
                  I believe great engineering is about more than just writing code. It's about understanding user needs, thinking strategically about product architecture, and creating experiences that are both technically sound and delightful to use.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed font-light">
                  Every project I work on is an opportunity to learn, grow, and contribute something meaningful. I'm obsessed with clean code, thoughtful design, and continuous improvement.
                </p>
              </div>

              {/* Philosophy highlight */}
              <motion.div
                className="glass-lg p-6 rounded-xl border border-cyan-500 border-opacity-30 space-y-3"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-3">
                  <Lightbulb size={20} className="text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-100 mb-1">My Philosophy</h4>
                    <p className="text-sm text-slate-400">
                      {"Simple > Complex. Users > Code. Impact > Perfection."}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Focus Areas */}
            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              {focusAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.div
                    key={area.title}
                    custom={index}
                    variants={itemVariants}
                    whileHover={{ x: 8 }}
                    className="group glass-lg p-6 rounded-xl border border-slate-700 border-opacity-50 hover:border-cyan-500 hover:border-opacity-30 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="p-3 rounded-lg bg-cyan-500 bg-opacity-10 border border-cyan-500 border-opacity-20 flex-shrink-0 group-hover:border-opacity-50 transition-all"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Icon size={24} className="text-cyan-400" />
                      </motion.div>
                      <div className="flex-1 space-y-1">
                        <h4 className="text-lg font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">
                          {area.title}
                        </h4>
                        <p className="text-sm text-slate-400">
                          {area.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-6 pt-8"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  custom={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="glass-lg p-8 rounded-xl border border-slate-700 border-opacity-50 hover:border-cyan-500 hover:border-opacity-30 text-center group transition-all"
                >
                  <motion.div
                    className="inline-flex p-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 bg-opacity-10 border border-cyan-500 border-opacity-20 mb-4"
                    whileHover={{ rotate: 6, scale: 1.1 }}
                  >
                    <Icon size={32} className="text-cyan-400" />
                  </motion.div>
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <p className="text-sm text-slate-400 font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Highlight Card */}
          <motion.div
            variants={itemVariants}
            className="glass-lg p-10 rounded-2xl border border-cyan-500 border-opacity-20 hover:border-opacity-40 transition-all"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <motion.div
                  className="p-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 bg-opacity-15"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Rocket size={48} className="text-cyan-400" />
                </motion.div>
              </div>
              <div className="space-y-3 flex-1">
                <h3 className="text-2xl font-bold text-slate-100">
                  Always Learning, Always Growing
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  I'm passionate about staying at the cutting edge of web technologies. Currently diving deep into advanced TypeScript patterns, system design, and exploring how AI can enhance user experiences.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

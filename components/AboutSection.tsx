'use client';

import React from 'react';
import { motion } from 'framer-motion';

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8 },
  }),
};

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-12"
        >
          {/* Section Title */}
          <div className="space-y-4">
            <h2 className="section-heading">About Me</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <motion.div
              className="space-y-6"
              custom={0}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm a Full Stack Developer with a passion for building scalable web applications and SaaS products. My journey started with a curiosity about how things work, and it evolved into a deep love for creating elegant solutions to complex problems.
              </p>

              <p className="text-lg text-slate-300 leading-relaxed">
                I specialize in modern web technologies and focus on creating products that are not just technically sound but also delightful to use. I believe in the power of clean code, thoughtful design, and continuous learning.
              </p>

              <div className="space-y-4 pt-4">
                <h3 className="text-xl font-semibold text-slate-100">What I'm focused on:</h3>
                <ul className="space-y-3">
                  {[
                    'Building scalable SaaS applications',
                    'Creating workflow automation tools',
                    'Implementing modern UI/UX patterns',
                    'Optimizing performance and user experience',
                    'Growing as a product-minded engineer',
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      custom={i}
                      variants={fadeInVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '-100px' }}
                      className="flex items-start gap-3 text-slate-300"
                    >
                      <span className="text-blue-400 font-bold pt-1">→</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right Column - Stats/Highlights */}
            <motion.div
              className="space-y-6"
              custom={1}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: '10+', label: 'Projects Built' },
                  { number: '5+', label: 'Tech Stack' },
                  { number: '2+', label: 'Years Experience' },
                  { number: '100%', label: 'Growth Mindset' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className="glass p-6 rounded-xl text-center group hover:bg-opacity-20 transition-all"
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(37, 99, 235, 0.3)' }}
                  >
                    <div className="text-3xl font-bold text-blue-400">{stat.number}</div>
                    <div className="text-sm text-slate-400 mt-2">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Highlights Card */}
              <div className="glass-lg p-8 rounded-2xl space-y-4">
                <h3 className="text-xl font-semibold text-slate-100">Key Highlights</h3>
                <ul className="space-y-3 text-slate-300">
                  {[
                    'Campus Director at Hult Prize MUET',
                    'Aspire Leaders Program Participant',
                    'Best Delegate - WHO Committee MUET MUN 2025',
                    'Certified Web Developer - Sukkur IBA 2025',
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      custom={i}
                      variants={fadeInVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '-100px' }}
                      className="flex items-center gap-3"
                    >
                      <span className="text-blue-400">✓</span>
                      <span className="text-sm">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

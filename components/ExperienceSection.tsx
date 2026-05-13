'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Star, Target } from 'lucide-react';

interface Experience {
  id: number;
  type: 'leadership' | 'achievement';
  title: string;
  organization: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
  year?: string;
  gradient: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    type: 'leadership',
    title: 'Campus Director',
    organization: 'Hult Prize MUET',
    description: 'Leading innovation and entrepreneurship initiatives',
    details: [
      'Directed a team of 20+ members across multiple projects',
      'Organized innovation-driven events and competitions',
      'Managed execution, coordination, and strategic planning',
      'Fostered startup culture and entrepreneurial mindset',
    ],
    icon: <Briefcase size={28} />,
    year: '2024',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    id: 2,
    type: 'achievement',
    title: 'Aspire Leaders Program',
    organization: 'Harvard Business School',
    description: 'International leadership development program',
    details: [
      'Faculty-led program from prestigious Harvard Business School',
      'International collaboration with peers from 50+ countries',
      'Developed leadership and strategic thinking frameworks',
      'Built network with global leaders and changemakers',
    ],
    icon: <Award size={28} />,
    year: '2024',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    id: 3,
    type: 'achievement',
    title: 'Best Delegate Award',
    organization: 'WHO Committee MUET MUN 2025',
    description: 'Outstanding diplomatic performance recognition',
    details: [
      'Awarded best delegate in highly competitive WHO committee',
      'Demonstrated exceptional public speaking and diplomacy skills',
      'Represented national interests with strategic thinking',
      'Prepared comprehensive position papers and proposals',
    ],
    icon: <Star size={28} />,
    year: '2025',
    gradient: 'from-yellow-500 to-orange-600',
  },
  {
    id: 4,
    type: 'achievement',
    title: 'Certified Full Stack Developer',
    organization: 'Sukkur IBA University',
    description: 'Professional web development certification',
    details: [
      'Completed comprehensive full-stack web development certification',
      'Mastered modern frameworks, libraries, and best practices',
      'Built production-quality projects from concept to deployment',
      'Demonstrated proficiency across the entire development stack',
    ],
    icon: <Target size={28} />,
    year: '2025',
    gradient: 'from-green-500 to-emerald-600',
  },
];

const ExperienceCard = ({ experience, index }: { experience: Experience; index: number }) => {
  return (
    <motion.div
      custom={index}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.12, duration: 0.8 }}
      viewport={{ once: true, margin: '-100px' }}
      whileHover={{ y: -8 }}
      className="relative"
    >
      {/* Timeline connector */}
      {index < experiences.length - 1 && (
        <div className="hidden md:block absolute left-12 top-24 w-1 h-16 bg-gradient-to-b from-cyan-500 to-transparent" />
      )}

      <div className="glass-lg p-8 rounded-2xl border border-slate-700 border-opacity-50 hover:border-opacity-100 transition-all group">
        {/* Timeline dot */}
        <motion.div
          className={`absolute -left-6 md:left-1/2 md:-translate-x-1/2 md:top-8 w-12 h-12 rounded-full bg-gradient-to-br ${experience.gradient} border-4 border-slate-950 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
          whileHover={{ scale: 1.2 }}
        >
          <div className="text-white">
            {experience.icon}
          </div>
        </motion.div>

        {/* Year badge */}
        {experience.year && (
          <motion.div
            className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${experience.gradient} bg-opacity-15 border border-slate-700 border-opacity-50 text-slate-300`}
            whileHover={{ scale: 1.05 }}
          >
            {experience.year}
          </motion.div>
        )}

        <div className="md:ml-8 space-y-4">
          {/* Header */}
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
              {experience.title}
            </h3>
            <p className={`text-sm font-semibold bg-gradient-to-r ${experience.gradient} bg-opacity-60 text-transparent bg-clip-text`}>
              {experience.organization}
            </p>
            <p className="text-slate-400 font-light">{experience.description}</p>
          </div>

          {/* Details */}
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-800 bg-opacity-30 border border-slate-700 border-opacity-30">
              <div className={`text-sm font-bold bg-gradient-to-r ${experience.gradient} bg-clip-text text-transparent flex-shrink-0 mt-0.5`}>
                →
              </div>
              <p className="text-sm text-slate-300">{experience.details[0]}</p>
            </div>
            {experience.details.slice(1).map((detail, idx) => (
              <div key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                <motion.span
                  className="text-cyan-400 font-bold text-lg leading-tight flex-shrink-0 mt-0.5"
                  whileHover={{ scale: 1.3 }}
                >
                  ·
                </motion.span>
                <span>{detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-spacing relative">
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-5 pointer-events-none" style={{
        background: 'radial-gradient(circle, rgba(14, 165, 233, 0.4), transparent)',
      }} />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-6 max-w-3xl"
          >
            <div className="flex items-center gap-3">
              <Briefcase size={24} className="text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">Journey</span>
            </div>

            <h2 className="section-heading text-4xl md:text-5xl">
              Experience & Achievements
            </h2>

            <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />

            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl font-light">
              A timeline of my professional journey, leadership initiatives, and key achievements that have shaped my career and continue to drive my growth.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="space-y-8 md:space-y-12">
            {experiences.map((experience, index) => (
              <ExperienceCard key={experience.id} experience={experience} index={index} />
            ))}
          </div>

          {/* CTA Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="glass-lg p-10 rounded-2xl border border-cyan-500 border-opacity-20 hover:border-opacity-40 transition-all text-center space-y-4"
          >
            <h3 className="text-2xl font-bold text-slate-100">
              Always Growing, Always Learning
            </h3>
            <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Each experience has taught me something valuable about leadership, innovation, and the power of collaborative work. I'm excited about what comes next.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


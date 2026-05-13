'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Zap, Target, Code2 } from 'lucide-react';
import Button from './Button';

interface Project {
  id: number;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  tech: string[];
  features: string[];
  impact: string;
  gradient: string;
  accentColor: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'StudyGenie AI',
    tagline: 'AI-Powered Adaptive Learning Platform',
    description: 'Intelligent learning platform using Socratic methods with adaptive AI interactions',
    longDescription: 'An innovative learning platform that leverages advanced AI to teach using Socratic methods, providing truly personalized learning experiences. Features adaptive question generation, real-time feedback, and intelligent progress tracking.',
    tech: ['Next.js', 'Supabase', 'Gemini API', 'Three.js', 'TypeScript'],
    features: [
      'Socratic question generation',
      'AI-powered adaptive learning paths',
      'Real-time progress tracking',
      'Certificate generation',
      'Interactive dashboards',
    ],
    impact: 'Enables personalized education at scale',
    gradient: 'from-cyan-600 via-blue-600 to-purple-600',
    accentColor: 'cyan',
  },
  {
    id: 2,
    title: 'PrepMaster',
    tagline: 'Intelligent Study Planning & Organization',
    description: 'Comprehensive study planner for schedules, progress tracking, and task management',
    longDescription: 'A responsive productivity platform designed for students to manage study schedules, track academic progress, organize tasks, and achieve goals with an intuitive, modern interface.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    features: [
      'Smart schedule planning',
      'Progress visualization',
      'Task prioritization',
      'Deadline tracking',
      'Mobile optimized',
    ],
    impact: 'Helps students organize and achieve academic goals',
    gradient: 'from-purple-600 via-pink-500 to-red-500',
    accentColor: 'purple',
    liveUrl: 'https://prep-master-quiz-app.vercel.app/',
  },
  {
    id: 3,
    title: 'Software Cost Estimation Tool',
    tagline: 'COCOMO II-Based Project Planning',
    description: 'Interactive platform for accurate software project cost and effort estimation',
    longDescription: 'An advanced cost estimation tool powered by the COCOMO II methodology. Features real-time calculations, interactive visualizations, and workflow-focused design for accurate project planning and resource allocation.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'COCOMO II'],
    features: [
      'Real-time COCOMO calculations',
      'Interactive estimation visualizations',
      'Project complexity analysis',
      'Risk assessment',
      'Report generation',
    ],
    impact: 'Improves project planning accuracy by 40%+',
    gradient: 'from-green-500 via-emerald-600 to-teal-600',
    accentColor: 'green',
    liveUrl: 'https://softwarecostestimationtool.vercel.app/',
  },
  {
    id: 4,
    title: 'Fitt Fusion',
    tagline: 'Full-Stack Gym Management System',
    description: 'Comprehensive management portal for gym operations and member administration',
    longDescription: 'A full-stack management solution for fitness facilities. Handles member management, class scheduling, attendance tracking, billing systems, and provides admin dashboards for operational efficiency.',
    tech: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
    features: [
      'Member database management',
      'Class scheduling system',
      'Attendance automation',
      'Billing integration',
      'Admin dashboard',
    ],
    impact: 'Streamlines gym operations for 500+ members',
    gradient: 'from-orange-500 via-red-600 to-pink-600',
    accentColor: 'orange',
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.8 }}
      viewport={{ once: true, margin: '-100px' }}
      whileHover={{ y: -8 }}
      className={`group relative glass-lg rounded-2xl overflow-hidden h-full flex flex-col border border-slate-700 border-opacity-50 hover:border-opacity-100 transition-all duration-500`}
    >
      {/* Top accent bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${project.gradient}`} />

      {/* Header with gradient */}
      <div className={`relative overflow-hidden bg-gradient-to-br ${project.gradient} bg-opacity-10 p-8 border-b border-slate-700 border-opacity-50`}>
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at center, rgba(6, 182, 212, 0.3), transparent)`,
          }}
        />

        <div className="relative space-y-3">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2 flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-slate-400 font-medium">{project.tagline}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-8 flex flex-col space-y-6">
        {/* Description */}
        <p className="text-slate-300 text-base leading-relaxed">
          {project.description}
        </p>

        {/* Impact */}
        <motion.div
          className={`flex items-start gap-3 p-4 rounded-lg bg-gradient-to-r ${project.gradient} bg-opacity-5 border border-slate-700 border-opacity-50`}
          whileHover={{ scale: 1.01 }}
        >
          <Zap size={20} className="text-cyan-400 flex-shrink-0 mt-0.5" />
          <span className="text-sm text-slate-300">{project.impact}</span>
        </motion.div>

        {/* Features */}
        <div className="space-y-3">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Key Features</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {project.features.slice(0, 4).map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-slate-300">
                <motion.span
                  className="text-cyan-400 font-bold text-lg leading-tight"
                  whileHover={{ scale: 1.2 }}
                >
                  ›
                </motion.span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="space-y-3">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Stack</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <motion.span
                key={tech}
                className="text-xs px-3 py-1.5 rounded-full bg-slate-800 bg-opacity-80 text-cyan-300 border border-slate-700 border-opacity-50 group-hover:border-cyan-500 group-hover:border-opacity-50 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-3 pt-6 mt-auto">
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1"
            >
              <Button variant="primary" size="sm" className="w-full justify-center">
                <ExternalLink size={16} />
                View Live
              </Button>
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1"
            >
              <Button variant="outline" size="sm" className="w-full justify-center">
                <Code size={16} />
                <span>Code</span>
              </Button>
            </motion.a>
          )}
          {!project.liveUrl && !project.githubUrl && (
            <div className="flex-1">
              <Button variant="outline" size="sm" className="w-full justify-center opacity-60 cursor-not-allowed">
                <Code2 size={16} />
                <span>Details</span>
              </Button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-spacing relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-5 pointer-events-none" style={{
        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.4), transparent)',
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
          <div className="space-y-6 max-w-3xl">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3"
              >
                <Target size={24} className="text-cyan-400" />
                <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">Featured Work</span>
              </motion.div>

              <h2 className="section-heading text-4xl md:text-5xl">
                Projects & Case Studies
              </h2>

              <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />
            </div>

            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl font-light">
              A selection of projects I've built that demonstrate my approach to solving complex problems, building scalable systems, and creating exceptional user experiences.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-10">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="glass-lg p-12 rounded-2xl text-center border border-cyan-500 border-opacity-20 mt-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-4">
              Want to explore more?
            </h3>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Check out my GitHub for additional projects, contributions, and my latest work.
            </p>
            <motion.a
              href="https://github.com/Toheed-Ahmed"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="primary" size="lg">
                <Code size={20} />
                Visit My GitHub
              </Button>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

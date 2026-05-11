import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Button from './Button';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  features: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  color: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'StudyGenie AI',
    description: 'AI-powered learning platform using Socratic methods and adaptive interactions.',
    longDescription: 'An intelligent learning platform that uses AI to teach using Socratic methods, providing personalized learning experiences with adaptive interactions, certificate generation, and interactive progress dashboards.',
    tech: ['Next.js', 'Supabase', 'Gemini API', 'Three.js', 'TypeScript'],
    features: [
      'Socratic learning methods',
      'AI-powered adaptive interactions',
      'Certificate generation',
      'Progress dashboards',
      'Real-time feedback',
    ],
    image: 'bg-gradient-to-br from-blue-600 to-cyan-500',
    color: 'from-blue-600 to-cyan-500',
  },
  {
    id: 2,
    title: 'PrepMaster Study Planner',
    description: 'Responsive productivity-focused study planner for schedules and task management.',
    longDescription: 'A comprehensive study planning tool designed for students to manage their schedules, track progress, organize tasks, and achieve their academic goals with an intuitive and responsive interface.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    features: [
      'Responsive design',
      'Schedule planning',
      'Progress tracking',
      'Task organization',
      'Time management tools',
    ],
    image: 'bg-gradient-to-br from-purple-600 to-pink-500',
    liveUrl: 'https://prep-master-quiz-app.vercel.app/',
    color: 'from-purple-600 to-pink-500',
  },
  {
    id: 3,
    title: 'Software Cost Estimation Tool',
    description: 'Interactive COCOMO II platform with real-time calculations and workflow design.',
    longDescription: 'An innovative software cost estimation tool powered by COCOMO II methodology, featuring real-time calculations, interactive visualizations, and workflow-focused design for accurate project planning.',
    tech: ['JavaScript', 'HTML', 'CSS', 'COCOMO II Model'],
    features: [
      'Real-time calculations',
      'COCOMO II methodology',
      'Interactive visualizations',
      'Workflow-focused design',
      'Estimation accuracy',
    ],
    image: 'bg-gradient-to-br from-green-600 to-emerald-500',
    liveUrl: 'https://softwarecostestimationtool.vercel.app/',
    color: 'from-green-600 to-emerald-500',
  },
  {
    id: 4,
    title: 'Fitt Fusion Gym Management Portal',
    description: 'Full-stack gym management system with scheduling and member management.',
    longDescription: 'A comprehensive gym management portal that handles member management, class scheduling, billing, attendance tracking, and backend operations for fitness facilities.',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    features: [
      'Member management',
      'Class scheduling',
      'Attendance tracking',
      'Billing system',
      'Admin dashboard',
    ],
    image: 'bg-gradient-to-br from-orange-600 to-red-500',
    color: 'from-orange-600 to-red-500',
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      className="group glass-lg rounded-2xl overflow-hidden h-full flex flex-col"
      whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(37, 99, 235, 0.4)' }}
      transition={{ duration: 0.3 }}
    >
      {/* Project Image/Gradient */}
      <div className={`h-48 bg-gradient-to-br ${project.image} opacity-80 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-300" />
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity"
          initial={{ scale: 0.8 }}
          whileHover={{ scale: 1 }}
        >
          {project.title.charAt(0)}
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col">
        <h3 className="text-2xl font-bold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-slate-300 text-sm mb-4 flex-1">{project.description}</p>

        {/* Features */}
        <div className="mb-4 space-y-2">
          <p className="text-xs text-slate-400 font-semibold uppercase">Key Features</p>
          <ul className="text-xs text-slate-300 space-y-1">
            {project.features.slice(0, 3).map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <span className="text-blue-400">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="text-xs px-2 py-1 rounded bg-slate-700 bg-opacity-50 text-blue-300 border border-slate-600 border-opacity-50">
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-4 mt-auto">
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1"
            >
              <Button variant="primary" size="sm" className="w-full justify-center">
                <ExternalLink size={16} />
                Live Demo
              </Button>
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1"
            >
              <Button variant="secondary" size="sm" className="w-full justify-center">
                <Github size={16} />
                Code
              </Button>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
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
            <h2 className="section-heading">Featured Projects</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
            <p className="text-lg text-slate-400 max-w-2xl">
              A selection of projects I've built that showcase my full-stack capabilities and problem-solving approach.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                custom={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          {/* View More CTA */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <p className="text-slate-300 mb-4">Interested in seeing more? Check out my GitHub.</p>
            <motion.a
              href="https://github.com/Toheed-Ahmed"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline">
                <Github size={20} />
                View All Projects
              </Button>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

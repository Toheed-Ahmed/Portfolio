'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Zap, Palette, GitBranch, Lightbulb, Brain, Cpu } from 'lucide-react';

interface SkillCategoryProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  skills: string[];
  gradient: string;
  index: number;
}

const SkillCategory = ({ icon, title, description, skills, gradient, index }: SkillCategoryProps) => {
  return (
    <motion.div
      custom={index}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      viewport={{ once: true, margin: '-100px' }}
      whileHover={{ y: -8 }}
      className={`group glass-lg p-8 rounded-2xl border border-slate-700 border-opacity-50 hover:border-opacity-100 transition-all duration-500 space-y-6 h-full`}
    >
      {/* Header with gradient accent */}
      <div className={`h-1 w-12 bg-gradient-to-r ${gradient} rounded-full group-hover:w-full transition-all duration-500`} />

      <div className="space-y-2">
        <div className="flex items-center gap-4">
          <motion.div
            className={`p-3 rounded-lg bg-gradient-to-br ${gradient} bg-opacity-10 border border-slate-700 border-opacity-50 group-hover:border-opacity-100 transition-all`}
            whileHover={{ scale: 1.1, rotate: 8 }}
          >
            {icon}
          </motion.div>
          <div>
            <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
              {title}
            </h3>
            <p className="text-xs text-slate-500 font-medium">{description}</p>
          </div>
        </div>
      </div>

      {/* Skills Tags */}
      <div className="space-y-3">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Proficiencies</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <motion.span
              key={skill}
              className="text-xs px-3 py-1.5 rounded-full bg-slate-800 bg-opacity-80 text-slate-300 border border-slate-700 border-opacity-50 group-hover:border-cyan-500 group-hover:border-opacity-40 transition-all"
              whileHover={{
                scale: 1.08,
                backgroundColor: 'rgba(6, 182, 212, 0.1)',
                color: '#06b6d4',
                borderColor: 'rgba(6, 182, 212, 0.6)',
              }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Skill bar indicator */}
      <div className="pt-2 border-t border-slate-700 border-opacity-50">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-slate-500">Expertise</span>
          <motion.div
            className="w-24 h-1 bg-slate-800 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className={`h-full bg-gradient-to-r ${gradient}`}
              initial={{ width: 0 }}
              whileInView={{ width: '85%' }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: <Code2 size={28} className="text-cyan-400" />,
      title: 'Frontend',
      description: 'UI & Interactions',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      icon: <Cpu size={28} className="text-blue-400" />,
      title: 'Backend',
      description: 'Servers & APIs',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'TypeScript', 'PHP', 'Database Design'],
      gradient: 'from-blue-500 to-indigo-600',
    },
    {
      icon: <Database size={28} className="text-cyan-400" />,
      title: 'Database',
      description: 'Data Management',
      skills: ['MongoDB', 'MySQL', 'Supabase', 'Firebase', 'PostgreSQL', 'Query Optimization'],
      gradient: 'from-cyan-400 to-teal-600',
    },
    {
      icon: <Palette size={28} className="text-purple-400" />,
      title: 'Design & UX',
      description: 'Visual & Experience',
      skills: ['Figma', 'UI Design', 'Responsive Design', 'Accessibility', 'Design Systems', 'Prototyping'],
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      icon: <GitBranch size={28} className="text-green-400" />,
      title: 'DevOps & Tools',
      description: 'Development Workflow',
      skills: ['Git', 'GitHub', 'Vercel', 'Docker', 'Postman', 'VS Code', 'CI/CD'],
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      icon: <Brain size={28} className="text-orange-400" />,
      title: 'AI & Automation',
      description: 'Emerging Tech',
      skills: ['ChatGPT API', 'Gemini API', 'Prompt Engineering', 'AI Integration', 'Automation', 'LLMs'],
      gradient: 'from-orange-500 to-red-600',
    },
  ];

  const learningTopics = [
    { label: 'Advanced TypeScript', gradient: 'from-blue-500 to-cyan-500' },
    { label: 'System Design', gradient: 'from-purple-500 to-pink-500' },
    { label: 'Web Performance', gradient: 'from-cyan-500 to-teal-500' },
    { label: 'AI Integration', gradient: 'from-orange-500 to-red-500' },
    { label: 'Cloud Architecture', gradient: 'from-green-500 to-emerald-500' },
  ];

  return (
    <section id="skills" className="section-spacing relative">
      {/* Background accent */}
      <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full blur-3xl opacity-5 pointer-events-none" style={{
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
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-6 max-w-3xl"
          >
            <div className="flex items-center gap-3">
              <Lightbulb size={24} className="text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">Technical Arsenal</span>
            </div>

            <h2 className="section-heading text-4xl md:text-5xl">
              Skills & Expertise
            </h2>

            <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />

            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl font-light">
              A comprehensive toolkit of modern technologies and proven methodologies I use to build scalable, performant applications and solve complex engineering challenges.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <SkillCategory
                key={category.title}
                icon={category.icon}
                title={category.title}
                description={category.description}
                skills={category.skills}
                gradient={category.gradient}
                index={index}
              />
            ))}
          </div>

          {/* Learning & Growth Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="glass-lg p-12 rounded-2xl border border-cyan-500 border-opacity-20 hover:border-opacity-40 transition-all space-y-8"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Zap size={28} className="text-cyan-400" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-100">Currently Learning</h3>
                  <p className="text-sm text-slate-500">Expanding horizons and staying ahead of the curve</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {learningTopics.map((topic) => (
                <motion.span
                  key={topic.label}
                  className={`text-sm px-4 py-2 rounded-lg bg-gradient-to-r ${topic.gradient} bg-opacity-15 border border-slate-700 border-opacity-50 text-slate-300 font-medium`}
                  whileHover={{
                    scale: 1.05,
                    borderColor: 'rgba(6, 182, 212, 0.8)',
                    boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)',
                  }}
                >
                  {topic.label}
                </motion.span>
              ))}
            </div>

            <p className="text-slate-400 font-light leading-relaxed">
              I'm committed to continuous learning and staying at the forefront of web technology. I regularly explore new frameworks, dive into advanced concepts, and apply emerging technologies to real-world problems.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

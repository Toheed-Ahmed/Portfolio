import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Zap, Palette, GitBranch, Lightbulb } from 'lucide-react';

const SkillCategory = ({ icon: Icon, title, skills }: { icon: React.ReactNode; title: string; skills: string[] }) => {
  return (
    <motion.div
      className="glass-lg p-6 rounded-2xl group"
      whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(37, 99, 235, 0.3)' }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="text-blue-400">{Icon}</div>
        <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <motion.span
            key={skill}
            className="text-xs px-3 py-1 rounded-full bg-slate-700 bg-opacity-50 text-slate-300 border border-slate-600 border-opacity-50"
            whileHover={{
              scale: 1.1,
              backgroundColor: 'rgba(37, 99, 235, 0.3)',
              borderColor: 'rgba(37, 99, 235, 0.6)',
              color: '#3b82f6',
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: <Code2 size={24} />,
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
    },
    {
      icon: <Zap size={24} />,
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'PHP', 'REST APIs', 'TypeScript'],
    },
    {
      icon: <Database size={24} />,
      title: 'Database',
      skills: ['MongoDB', 'MySQL', 'Supabase', 'Firebase'],
    },
    {
      icon: <Palette size={24} />,
      title: 'Design & Tools',
      skills: ['Figma', 'UI/UX Design', 'Responsive Design', 'Accessibility'],
    },
    {
      icon: <GitBranch size={24} />,
      title: 'DevOps & Tools',
      skills: ['Git', 'GitHub', 'Vercel', 'Postman', 'VS Code'],
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'AI & Automation',
      skills: ['ChatGPT', 'Gemini API', 'GitHub Copilot', 'Cursor AI'],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
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
            <h2 className="section-heading">Technical Skills</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
            <p className="text-lg text-slate-400 max-w-2xl">
              A comprehensive toolkit of modern technologies and tools I use to build scalable, performant applications.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                custom={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <SkillCategory
                  icon={category.icon}
                  title={category.title}
                  skills={category.skills}
                />
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            className="glass-lg p-8 rounded-2xl mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h3 className="text-xl font-semibold text-slate-100 mb-4">What I'm Learning</h3>
            <div className="space-y-4">
              <p className="text-slate-300">
                I'm committed to continuous learning and staying updated with the latest technologies. Currently exploring:
              </p>
              <div className="flex flex-wrap gap-3">
                {['Advanced TypeScript', 'Web Performance', 'Cloud Architecture', 'System Design', 'AI Integration'].map((topic) => (
                  <motion.span
                    key={topic}
                    className="text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-opacity-20 border border-blue-500 border-opacity-30 text-blue-300"
                    whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(37, 99, 235, 0.4)' }}
                  >
                    {topic}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

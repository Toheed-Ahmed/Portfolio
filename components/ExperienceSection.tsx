import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase } from 'lucide-react';

interface Experience {
  id: number;
  type: 'leadership' | 'achievement';
  title: string;
  organization: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
}

const experiences: Experience[] = [
  {
    id: 1,
    type: 'leadership',
    title: 'Campus Director',
    organization: 'Hult Prize MUET',
    description: 'Leading innovation and entrepreneurship at MUET',
    details: [
      'Led a team of 20+ members',
      'Organized innovation-driven events',
      'Managed execution and coordination',
      'Fostered startup culture on campus',
    ],
    icon: <Briefcase size={24} />,
  },
  {
    id: 2,
    type: 'achievement',
    title: 'Aspire Leaders Program',
    organization: 'Harvard Business School',
    description: 'International leadership development program',
    details: [
      'Faculty-led program from Harvard Business School',
      'International collaboration with peers',
      'Leadership and strategy development',
      'Network with global leaders',
    ],
    icon: <Award size={24} />,
  },
  {
    id: 3,
    type: 'achievement',
    title: 'Best Delegate Award',
    organization: 'WHO Committee MUET MUN 2025',
    description: 'Recognized for outstanding diplomatic performance',
    details: [
      'Won best delegate in WHO committee',
      'Demonstrated strong public speaking skills',
      'Active participation and diplomacy',
      'Represented national interests effectively',
    ],
    icon: <Award size={24} />,
  },
  {
    id: 4,
    type: 'achievement',
    title: 'Certified Web Developer',
    organization: 'Sukkur IBA University 2025',
    description: 'Professional web development certification',
    details: [
      'Full-stack web development certification',
      'Modern technologies and frameworks',
      'Industry-standard best practices',
      'Portfolio of completed projects',
    ],
    icon: <Award size={24} />,
  },
];

const ExperienceCard = ({ experience, index }: { experience: Experience; index: number }) => {
  return (
    <motion.div
      custom={index}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      viewport={{ once: true, margin: '-100px' }}
      className={`relative ${index % 2 === 0 ? 'md:text-right' : ''}`}
    >
      <div className="md:w-1/2 md:mx-auto px-4">
        <div className="glass-lg p-6 rounded-2xl group hover:bg-opacity-20 transition-all">
          {/* Icon and Title */}
          <div className="flex items-start gap-4">
            <motion.div
              className="p-3 rounded-lg bg-blue-600 bg-opacity-20 border border-blue-500 border-opacity-30 flex-shrink-0 text-blue-400 group-hover:text-blue-300 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              {experience.icon}
            </motion.div>

            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                {experience.title}
              </h3>
              <p className="text-sm text-blue-400 font-semibold">{experience.organization}</p>
              <p className="text-sm text-slate-400 mt-1">{experience.description}</p>
            </div>
          </div>

          {/* Details */}
          <ul className="mt-4 space-y-2 ml-16">
            {experience.details.map((detail) => (
              <motion.li
                key={detail}
                className="text-sm text-slate-300 flex items-start gap-2"
                whileHover={{ x: 5 }}
              >
                <span className="text-blue-400 mt-1">•</span>
                <span>{detail}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* Timeline center dot */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-dark-bg hidden md:block"
        whileHover={{ scale: 1.5, boxShadow: '0 0 20px rgba(37, 99, 235, 0.6)' }}
      />
    </motion.div>
  );
};

export default function ExperienceSection() {
  const achievements = experiences.filter((e) => e.type === 'achievement');
  const leadership = experiences.filter((e) => e.type === 'leadership');

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative">
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
            <h2 className="section-heading">Experience & Leadership</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
          </div>

          {/* Leadership Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-100">Leadership Roles</h3>
            <div className="space-y-6">
              {leadership.map((exp, idx) => (
                <ExperienceCard key={exp.id} experience={exp} index={idx} />
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-100">Achievements & Certifications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((exp, idx) => (
                <motion.div
                  key={exp.id}
                  custom={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.8 }}
                  viewport={{ once: true, margin: '-100px' }}
                >
                  <div className="glass-lg p-6 rounded-2xl group hover:bg-opacity-20 transition-all h-full">
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="p-3 rounded-lg bg-amber-600 bg-opacity-20 border border-amber-500 border-opacity-30 flex-shrink-0 text-amber-400 group-hover:text-amber-300 transition-colors"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        {exp.icon}
                      </motion.div>

                      <div>
                        <h4 className="text-lg font-bold text-slate-100 group-hover:text-amber-400 transition-colors">
                          {exp.title}
                        </h4>
                        <p className="text-sm text-amber-400 font-semibold">{exp.organization}</p>
                      </div>
                    </div>

                    <p className="mt-3 text-sm text-slate-300">{exp.description}</p>
                    <ul className="mt-3 space-y-1">
                      {exp.details.slice(0, 2).map((detail) => (
                        <li key={detail} className="text-xs text-slate-400 flex items-start gap-2">
                          <span className="text-amber-400 mt-1">✓</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

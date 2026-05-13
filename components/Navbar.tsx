'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Download, Code, Share2 } from 'lucide-react';
import Button from './Button';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('');

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section
      const sections = ['about', 'skills', 'projects', 'experience', 'contact'];
      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full top-0 z-40 transition-all duration-300 ${
          isScrolled ? 'glass-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              className="text-2xl font-bold gradient-text cursor-pointer font-sora"
              whileHover={{ scale: 1.05 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Toheed
            </motion.div>

            {/* Desktop Nav Items */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setActiveSection(item.id);
                  }}
                  className={`text-sm font-medium transition-colors duration-300 relative group ${
                    activeSection === item.id
                      ? 'text-cyan-400'
                      : 'text-slate-400 hover:text-slate-100'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 gradient-primary"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 gradient-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                </motion.button>
              ))}
            </div>

            {/* CTA Buttons & Social */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-3">
                <motion.a
                  href="https://github.com/Toheed-Ahmed"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg glass hover:glow-md transition-all"
                  title="GitHub"
                >
                  <Code size={20} className="text-slate-300 hover:text-cyan-400" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/toheed-ahmed-7aa7162b4"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg glass hover:glow-md transition-all"
                  title="LinkedIn"
                >
                  <Share2 size={20} className="text-slate-300 hover:text-cyan-400" />
                </motion.a>
              </div>

              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="sm">
                  <Download size={16} />
                  <span className="hidden sm:inline">Resume</span>
                </Button>
              </motion.a>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg glass hover:glow-md transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {mobileMenuOpen ? (
                  <X size={24} className="text-cyan-400" />
                ) : (
                  <Menu size={24} className="text-slate-300" />
                )}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={false}
            animate={{ height: mobileMenuOpen ? 'auto' : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden md:hidden"
          >
            <div className="pb-4 space-y-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setMobileMenuOpen(false);
                    setActiveSection(item.id);
                  }}
                  className="block w-full text-left px-4 py-2 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-cyan-400 hover:bg-opacity-10 transition-colors"
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.nav>
    </>
  );
}

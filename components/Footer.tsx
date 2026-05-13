'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Share2, Mail, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      label: 'GitHub',
      href: 'https://github.com/Toheed-Ahmed',
      icon: Code,
      gradient: 'from-gray-600 to-gray-800',
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/toheed-ahmed-7aa7162b4',
      icon: Share2,
      gradient: 'from-blue-600 to-blue-800',
    },
    {
      label: 'Email',
      href: 'mailto:kalwartoheed060@gmail.com',
      icon: Mail,
      gradient: 'from-red-500 to-pink-600',
    },
  ];

  const footerLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative border-t border-slate-700 border-opacity-30 bg-slate-950 bg-opacity-50 backdrop-blur-sm">
      {/* Background accent */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        background: 'radial-gradient(circle at 50% 100%, rgba(6, 182, 212, 0.4), transparent 70%)',
      }} />

      <div className="relative section-container py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.h3
              className="text-3xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
            >
              Toheed
            </motion.h3>
            <p className="text-sm text-slate-400 leading-relaxed font-light">
              Full Stack Engineer crafting premium digital experiences and solving complex problems with elegant code.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="text-xs text-slate-500">Building things since 2022</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-slate-100 text-sm uppercase tracking-wider">Navigate</h4>
            <div className="space-y-2">
              {footerLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-slate-400 hover:text-cyan-400 transition-colors font-light"
                  whileHover={{ x: 4 }}
                >
                  → {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-slate-100 text-sm uppercase tracking-wider">Resources</h4>
            <div className="space-y-2">
              {[
                { label: 'GitHub Repos', href: 'https://github.com/Toheed-Ahmed' },
                { label: 'LinkedIn Profile', href: 'https://linkedin.com/in/toheed-ahmed-7aa7162b4' },
              ].map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-slate-400 hover:text-cyan-400 transition-colors font-light"
                  whileHover={{ x: 4 }}
                >
                  → {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-slate-100 text-sm uppercase tracking-wider">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 rounded-lg bg-gradient-to-br ${link.gradient} bg-opacity-10 border border-slate-700 border-opacity-50 text-slate-300 hover:border-opacity-100 transition-all`}
                    whileHover={{ scale: 1.1, rotate: 8 }}
                    whileTap={{ scale: 0.95 }}
                    title={link.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="divider-premium my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-sm text-slate-500 font-light flex items-center gap-2"
          >
            <span>© {currentYear} Toheed Ahmed.</span>
            <span className="flex items-center gap-1">
              Made with
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart size={16} className="text-red-500" />
              </motion.span>
              for the web.
            </span>
          </motion.div>

          {/* Status */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-sm text-slate-500 font-light"
          >
            ✨ Open for opportunities and collaborations
          </motion.div>

          {/* Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2.5 rounded-lg glass hover:glow-md transition-all"
            title="Scroll to top"
          >
            <ArrowUp size={20} className="text-cyan-400" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}


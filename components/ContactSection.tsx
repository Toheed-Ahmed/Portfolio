'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Link, ExternalLink, ArrowRight } from 'lucide-react';
import Button from './Button';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert('Thanks for reaching out! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:kalwartoheed060@gmail.com',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Link,
      label: 'GitHub',
      href: 'https://github.com/Toheed-Ahmed',
      color: 'from-gray-700 to-gray-900',
    },
    {
      icon: Link,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/toheed-ahmed-7aa7162b4',
      color: 'from-blue-600 to-blue-800',
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-12"
        >
          {/* Section Title */}
          <div className="space-y-4 text-center">
            <h2 className="section-heading">Let's Work Together</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left - Contact Form */}
            <motion.div
              className="glass-lg p-8 rounded-2xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-300">
                    Your Name
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 bg-opacity-50 border border-slate-700 border-opacity-50 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-300">
                    Your Email
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 bg-opacity-50 border border-slate-700 border-opacity-50 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-300">
                    Message
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 bg-opacity-50 border border-slate-700 border-opacity-50 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight size={20} />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Right - Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              {/* Direct Contact */}
              <div className="glass-lg p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-slate-100 mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:kalwartoheed060@gmail.com"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700 hover:bg-opacity-50 transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-blue-600 bg-opacity-20 border border-blue-500 border-opacity-30 text-blue-400 group-hover:text-blue-300">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Email</p>
                      <p className="text-slate-100 group-hover:text-blue-400 transition-colors">kalwartoheed060@gmail.com</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-100">Connect with me</h3>
                <div className="grid grid-cols-3 gap-4">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group glass-lg p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-opacity-20 transition-all`}
                        whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(37, 99, 235, 0.3)' }}
                      >
                        <Icon size={32} className="text-blue-400 group-hover:text-blue-300 mb-2 transition-colors" />
                        <p className="text-sm font-semibold text-slate-300 group-hover:text-slate-100 transition-colors">{link.label}</p>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Availability */}
              <div className="glass-lg p-6 rounded-2xl border border-green-500 border-opacity-20 bg-gradient-to-br from-green-500 from-opacity-5 to-transparent">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-400 mt-1 animate-pulse" />
                  <div>
                    <h4 className="font-semibold text-slate-100">Currently Available</h4>
                    <p className="text-sm text-slate-300 mt-1">Open for full-time, freelance, and internship opportunities</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Code, Share2, ArrowRight, MessageCircle, Send } from 'lucide-react';
import Button from './Button';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

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
    setSubmitMessage('');

    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);

      // Clear message after 3 seconds
      setTimeout(() => {
        setSubmitMessage('');
      }, 3000);
    }, 1500);
  };

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:kalwartoheed060@gmail.com',
      gradient: 'from-red-500 to-pink-600',
      description: 'Send me an email',
    },
    {
      icon: Code,
      label: 'GitHub',
      href: 'https://github.com/Toheed-Ahmed',
      gradient: 'from-gray-600 to-gray-800',
      description: 'Check my code',
    },
    {
      icon: Share2,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/toheed-ahmed-7aa7162b4',
      gradient: 'from-blue-600 to-blue-800',
      description: 'Connect with me',
    },
  ];

  return (
    <section id="contact" className="section-spacing relative">
      {/* Background accent */}
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
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center space-y-6 max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3">
              <MessageCircle size={24} className="text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">Get In Touch</span>
            </div>

            <h2 className="section-heading text-4xl md:text-5xl">
              Ready to Work Together?
            </h2>

            <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto" />

            <p className="text-lg text-slate-400 leading-relaxed font-light">
              Whether you have a project in mind, want to discuss technology, or just want to say hello – I'd love to hear from you. Let's create something amazing together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Contact Form */}
            <motion.div
              className="glass-lg p-10 rounded-2xl border border-slate-700 border-opacity-50"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <h3 className="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-2">
                <Send size={24} className="text-cyan-400" />
                Send me a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <motion.div
                  className="space-y-2"
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 bg-opacity-60 border border-slate-700 text-slate-100 placeholder-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 focus:outline-none transition-all"
                  />
                </motion.div>

                {/* Email Input */}
                <motion.div
                  className="space-y-2"
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 bg-opacity-60 border border-slate-700 text-slate-100 placeholder-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 focus:outline-none transition-all"
                  />
                </motion.div>

                {/* Message Input */}
                <motion.div
                  className="space-y-2"
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 bg-opacity-60 border border-slate-700 text-slate-100 placeholder-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 focus:outline-none transition-all resize-none"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pt-2"
                >
                  <Button
                    onClick={(e) => {}}
                    variant="primary"
                    size="lg"
                    className="w-full justify-center group"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                      </>
                    )}
                  </Button>
                </motion.div>

                {/* Success Message */}
                {submitMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-green-500 bg-opacity-10 border border-green-500 border-opacity-30 text-green-300 text-sm text-center"
                  >
                    {submitMessage}
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Right - Social Links & Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              {/* Quick Links */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-100">Connect with me</h3>
                <p className="text-slate-400 font-light">
                  Prefer a quicker way to reach out? Use one of these options:
                </p>
              </div>

              <div className="space-y-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      custom={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ x: 8 }}
                      viewport={{ once: true, margin: '-100px' }}
                      className="group glass-lg p-6 rounded-xl border border-slate-700 border-opacity-50 hover:border-opacity-100 transition-all flex items-start gap-4"
                    >
                      <motion.div
                        className={`p-3 rounded-lg bg-gradient-to-br ${link.gradient} bg-opacity-15 border border-slate-700 border-opacity-50 group-hover:border-opacity-100 flex-shrink-0 text-white group-hover:scale-110 transition-transform`}
                        whileHover={{ rotate: 8, scale: 1.15 }}
                      >
                        <Icon size={24} />
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">
                          {link.label}
                        </h4>
                        <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                          {link.description}
                        </p>
                      </div>
                      <ArrowRight size={20} className="text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                    </motion.a>
                  );
                })}
              </div>

              {/* Response time */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true, margin: '-100px' }}
                className="glass-lg p-6 rounded-xl border border-cyan-500 border-opacity-20 space-y-3"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm font-semibold text-slate-300">Quick Response Time</span>
                </div>
                <p className="text-sm text-slate-400">
                  I typically respond to messages within 24 hours. Looking forward to connecting with you!
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


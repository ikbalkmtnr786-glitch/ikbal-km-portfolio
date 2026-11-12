
import React, { useState } from 'react';
import {
  Mail,
  Linkedin,
  Instagram,
  Send,
  Smartphone,
  CheckCircle
} from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo } from '../data';

export default function Contact() {
  const [deliveryMode, setDeliveryMode] = useState<'email' | 'whatsapp'>('whatsapp');
  const [formData, setFormData] = useState({
    name: '',
    source: '',
    purpose: 'Meta Ads & Campaign Support',
    message: ''
  });
  const [feedback, setFeedback] = useState('');

  const purposes = [
    'Meta Ads & Campaign Support',
    'Social Media Management',
    'Graphic Design & Content Creation',
    'Shopify Store Setup',
    'Freelance Project Discussion',
    'Job / Career Opportunity',
    'Other Enquiry'
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    setFeedback('');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = `Hello Ikbal,

Name: ${formData.name}
Contact: ${formData.source || 'Not provided'}
Enquiry: ${formData.purpose}

Message:
${formData.message}`;

    if (deliveryMode === 'whatsapp') {
      const whatsappUrl = personalInfo.whatsappUrl;
      const separator = whatsappUrl.includes('?') ? '&' : '?';
      const finalUrl = `${whatsappUrl}${separator}text=${encodeURIComponent(message)}`;

      window.open(finalUrl, '_blank', 'noopener,noreferrer');
      setFeedback('WhatsApp should open with your message ready to send. Please review and send it there.');
    } else {
      const subject = encodeURIComponent(`Portfolio Enquiry: ${formData.purpose}`);
      const body = encodeURIComponent(message);
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

      window.location.href = mailtoUrl;
      setFeedback('Your email application should open with the enquiry details. Please review and send the email.');
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-slate-950 relative overflow-hidden"
    >
      {/* Background lights */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono text-orange-500 font-semibold uppercase tracking-widest block">
            Get In Touch
          </span>

          <h2 className="text-3xl sm:text-4xl font-sans font-black text-white tracking-tight">
            Let&apos;s Connect
          </h2>

          <p className="text-sm text-slate-400 font-sans leading-relaxed">
            Have a project, collaboration idea, or career opportunity?
            Feel free to get in touch. I&apos;d be happy to hear from you.
          </p>
        </div>

        {/* Contact and Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-8 text-left">

            <div className="space-y-4">
              <h3 className="text-xl font-sans font-bold text-white tracking-tight">
                Contact Information
              </h3>

              <p className="text-sm text-slate-400 leading-relaxed font-sans">
                You can contact me directly through WhatsApp or email.
                I&apos;m open to discussions about Meta Ads, social media,
                content creation, Shopify support, and digital marketing roles.
              </p>
            </div>

            <div className="space-y-4">

              {/* WhatsApp */}
              <a
                id="contact-channel-whatsapp"
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-orange-500/30 hover:bg-slate-900 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/10 flex items-center justify-center text-orange-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Smartphone className="w-5 h-5" />
                </div>

                <div>
                  <p className="text-[10px] font-mono text-slate-500 uppercase">
                    WhatsApp
                  </p>
                  <p className="text-sm font-semibold text-white tracking-tight font-mono">
                    {personalInfo.phoneFormatted}
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                id="contact-channel-email"
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-orange-500/30 hover:bg-slate-900 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/10 flex items-center justify-center text-orange-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] font-mono text-slate-500 uppercase">
                    Email Address
                  </p>
                  <p className="text-sm font-semibold text-white tracking-tight truncate font-mono">
                    {personalInfo.email}
                  </p>
                </div>
              </a>

              {/* Social Links */}
              <div className="grid grid-cols-2 gap-4">

                <a
                  id="contact-channel-linkedin"
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-orange-500/30 hover:bg-slate-900 transition-all group"
                >
                  <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-orange-400 transition-colors shrink-0" />
                  <span className="text-xs font-semibold text-slate-300 font-mono">
                    LinkedIn
                  </span>
                </a>

                <a
                  id="contact-channel-instagram"
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-orange-500/30 hover:bg-slate-900 transition-all group"
                >
                  <Instagram className="w-5 h-5 text-slate-400 group-hover:text-orange-400 transition-colors shrink-0" />
                  <span className="text-xs font-semibold text-slate-300 font-mono">
                    Instagram
                  </span>
                </a>

              </div>
            </div>

            {/* Availability Note */}
            <div className="p-4 rounded-xl border border-dashed border-slate-800 text-slate-400 text-xs space-y-2 font-sans leading-relaxed">
              <p className="font-bold text-orange-500 uppercase tracking-wide">
                Open to Opportunities
              </p>
              <p>
                Available for suitable digital marketing projects,
                freelance collaborations, and relevant job opportunities.
              </p>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-slate-900/60 backdrop-blur-sm border border-slate-800 p-6 sm:p-8 rounded-2xl">

            <form onSubmit={handleSubmit} className="space-y-6 text-left">

              {/* Delivery Method */}
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase text-slate-400 block font-semibold">
                  Choose Contact Method
                </label>

                <div className="grid grid-cols-2 gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800">

                  <button
                    type="button"
                    onClick={() => {
                      setDeliveryMode('whatsapp');
                      setFeedback('');
                    }}
                    className={`py-2.5 rounded-lg text-xs font-mono tracking-wide uppercase font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      deliveryMode === 'whatsapp'
                        ? 'bg-orange-500 text-slate-950 font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    WhatsApp
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setDeliveryMode('email');
                      setFeedback('');
                    }}
                    className={`py-2.5 rounded-lg text-xs font-mono tracking-wide uppercase font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      deliveryMode === 'email'
                        ? 'bg-orange-500 text-slate-950 font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Mail className="w-3.5 h-3.5" />
                    Email
                  </button>

                </div>
              </div>

              {/* Name and Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div className="space-y-1">
                  <label
                    htmlFor="name-input"
                    className="text-[10px] font-mono text-slate-400 uppercase font-semibold"
                  >
                    Your Name *
                  </label>

                  <input
                    id="name-input"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your name"
                    className="w-full bg-slate-950 border border-slate-800 focus:border-orange-500/50 rounded-xl px-4 py-3 text-sm text-white font-sans placeholder-slate-600 outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="source-input"
                    className="text-[10px] font-mono text-slate-400 uppercase font-semibold"
                  >
                    {deliveryMode === 'whatsapp' ? 'Phone / WhatsApp' : 'Your Email'}
                  </label>

                  <input
                    id="source-input"
                    type={deliveryMode === 'whatsapp' ? 'tel' : 'email'}
                    name="source"
                    value={formData.source}
                    onChange={handleInputChange}
                    placeholder={
                      deliveryMode === 'whatsapp'
                        ? 'Enter your phone number'
                        : 'Enter your email address'
                    }
                    className="w-full bg-slate-950 border border-slate-800 focus:border-orange-500/50 rounded-xl px-4 py-3 text-sm text-white font-sans placeholder-slate-600 outline-none transition-colors"
                  />
                </div>

              </div>

              {/* Enquiry Purpose */}
              <div className="space-y-1">
                <label
                  htmlFor="purpose-select"
                  className="text-[10px] font-mono text-slate-400 uppercase font-semibold"
                >
                  What Is Your Enquiry About?
                </label>

                <select
                  id="purpose-select"
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleInputChange}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-orange-500/50 rounded-xl px-4 py-3 text-sm text-slate-300 outline-none transition-colors font-sans"
                >
                  {purposes.map((purpose) => (
                    <option key={purpose} value={purpose}>
                      {purpose}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label
                  htmlFor="message-input"
                  className="text-[10px] font-mono text-slate-400 uppercase font-semibold"
                >
                  Your Message *
                </label>

                <textarea
                  id="message-input"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Tell me a little about your project, requirements, or opportunity..."
                  className="w-full bg-slate-950 border border-slate-800 focus:border-orange-500/50 rounded-xl px-4 py-3 text-sm text-white font-sans placeholder-slate-600 outline-none resize-none transition-colors"
                />
              </div>

              {/* Submit */}
              <div>
                <button
                  id="contact-form-submit"
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-orange-500 text-slate-950 hover:bg-orange-600 font-mono font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-orange-500/15 text-center focus:outline-none active:scale-[0.99]"
                >
                  {deliveryMode === 'whatsapp' ? (
                    <>
                      <Smartphone className="w-4 h-4" />
                      Continue to WhatsApp
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Open Email Application
                    </>
                  )}
                </button>
              </div>

              {/* Honest Feedback */}
              {feedback && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-300 text-xs leading-relaxed flex items-start gap-2"
                >
                  <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <p>{feedback}</p>
                </motion.div>
              )}

              <p className="text-[10px] text-slate-500 font-sans leading-relaxed">
                This form prepares a message in WhatsApp or your email application.
                You will need to review and send the message yourself.
              </p>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

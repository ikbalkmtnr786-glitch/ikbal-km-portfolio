
import React, { useState } from 'react';
import {
  Mail,
  Linkedin,
  Instagram,
  Send,
  CheckCircle,
  Smartphone
} from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo } from '../data';

export default function Contact() {
  const [deliveryMode, setDeliveryMode] = useState<'email' | 'whatsapp'>('whatsapp');
  const [formData, setFormData] = useState({
    name: '',
    source: '',
    purpose: 'Meta Ads',
    message: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const purposes = [
    'Meta Ads',
    'Social Media Management',
    'Graphic Design & Content Creation',
    'Shopify Store Setup',
    'Freelance Project Discussion',
    'Job / Career Opportunity',
    'Other Inquiry'
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = [
      `Hello Ikbal,`,
      '',
      `Name: ${formData.name}`,
      `Contact: ${formData.source}`,
      `Purpose: ${formData.purpose}`,
      '',
      `Message:`,
      formData.message
    ].join('\n');

    if (deliveryMode === 'whatsapp') {
      const whatsappUrl = personalInfo.whatsappUrl;
      const separator = whatsappUrl.includes('?') ? '&' : '?';
      const finalUrl = `${whatsappUrl}${separator}text=${encodeURIComponent(message)}`;

      window.open(finalUrl, '_blank', 'noopener,noreferrer');
    } else {
      const subject = encodeURIComponent(`Portfolio Inquiry - ${formData.purpose}`);
      const body = encodeURIComponent(message);
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

      window.location.href = mailtoUrl;
    }

    setIsSuccess(true);

    window.setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        name: '',
        source: '',
        purpose: 'Meta Ads',
        message: ''
      });
    }, 2500);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-slate-950 relative overflow-hidden"
    >
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono text-orange-500 font-semibold uppercase tracking-widest block">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black text-white tracking-tight">
            Let&apos;s Connect
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Have a project, a business requirement, or a career opportunity?
            Send me a message and let&apos;s discuss how I can help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <h3 className="text-xl font-sans font-bold text-white tracking-tight">
                Contact Information
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                You can contact me directly for Meta Ads, social media
                management, content creation, Shopify support, freelance
                projects, or suitable job opportunities.
              </p>
            </div>

            <div className="space-y-4">

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

            <div className="p-4 rounded-xl border border-dashed border-slate-800 text-slate-400 text-xs space-y-1.5">
              <p className="font-bold text-orange-400 uppercase">
                About Pixo Spark
              </p>
              <p className="leading-relaxed">
                Pixo Spark is my personal portfolio brand, where I showcase
                digital marketing practice, creative work, and project
                experience.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 bg-slate-900/60 backdrop-blur-sm border border-slate-800 p-6 sm:p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6 text-left">

              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase text-slate-400 block font-semibold">
                  Choose How to Contact Me
                </label>

                <div className="grid grid-cols-2 gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800">
                  <button
                    type="button"
                    onClick={() => setDeliveryMode('whatsapp')}
                    className={`py-2 rounded-lg text-xs font-mono tracking-wide uppercase font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
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
                    onClick={() => setDeliveryMode('email')}
                    className={`py-2 rounded-lg text-xs font-mono tracking-wide uppercase font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
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
                    className="w-full bg-slate-950 border border-slate-800 focus:border-orange-500/50 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white font-sans placeholder-slate-600 outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="source-input"
                    className="text-[10px] font-mono text-slate-400 uppercase font-semibold"
                  >
                    {deliveryMode === 'whatsapp' ? 'Your Phone Number *' : 'Your Email Address *'}
                  </label>
                  <input
                    id="source-input"
                    type={deliveryMode === 'whatsapp' ? 'tel' : 'email'}
                    name="source"
                    value={formData.source}
                    onChange={handleInputChange}
                    required
                    placeholder={
                      deliveryMode === 'whatsapp'
                        ? 'Enter your phone number'
                        : 'Enter your email address'
                    }
                    className="w-full bg-slate-950 border border-slate-800 focus:border-orange-500/50 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white font-sans placeholder-slate-600 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="purpose-select"
                  className="text-[10px] font-mono text-slate-400 uppercase font-semibold"
                >
                  What Are You Looking For?
                </label>
                <select
                  id="purpose-select"
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleInputChange}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-orange-500/50 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-300 outline-none transition-colors font-sans"
                >
                  {purposes.map(purpose => (
                    <option key={purpose} value={purpose}>
                      {purpose}
                    </option>
                  ))}
                </select>
              </div>

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
                  rows={4}
                  placeholder="Briefly describe your project, requirement, or opportunity..."
                  className="w-full bg-slate-950 border border-slate-800 focus:border-orange-500/50 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white font-sans placeholder-slate-600 outline-none resize-none transition-colors"
                />
              </div>

              <div>
                <button
                  id="contact-form-submit"
                  type="submit"
                  disabled={isSuccess}
                  className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-orange-500 text-slate-950 hover:bg-orange-600 font-mono font-bold text-xs uppercase tracking-wider transition-all disabled:opacity-60 cursor-pointer shadow-lg shadow-orange-500/15 text-center focus:outline-none active:scale-[0.99]"
                >
                  {isSuccess ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      Message Prepared
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      {deliveryMode === 'whatsapp'
                        ? 'Continue to WhatsApp'
                        : 'Open Email App'}
                    </>
                  )}
                </button>
              </div>

              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs leading-relaxed"
                >
                  Your message has been prepared. Please check WhatsApp or your
                  email app and send it to complete your inquiry.
                </motion.div>
              )}

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

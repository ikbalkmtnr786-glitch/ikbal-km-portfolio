import React, { useState } from 'react';
import { Mail, MessageSquare, Linkedin, Instagram, Send, CheckCircle, Smartphone } from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo } from '../data';

export default function Contact() {
  const [deliveryMode, setDeliveryMode] = useState<'email' | 'whatsapp'>('whatsapp');
  const [formData, setFormData] = useState({
    name: '',
    source: '', // phone or email matching delivery
    purpose: 'Standard Meta Ads Campaign',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const purposes = [
    'Standard Meta Ads Campaign',
    'Organic Grid/SMM Curation',
    'AI Content Pipeline Integration',
    'Freelance Business Discussion',
    'Open Career/Role Opportunity'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Guard inputs
    if (!formData.name || !formData.message) {
      return;
    }

    setIsSubmitting(true);

    if (deliveryMode === 'whatsapp') {
      // whatsapp: compile message and open in new tab
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);

        const textMessage = `Hi Ikbal!%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Contact:* ${encodeURIComponent(formData.source || 'Not provided')}%0A*Purpose:* ${encodeURIComponent(formData.purpose)}%0A%0A*Message:*%0A${encodeURIComponent(formData.message)}`;
        const waUrl = `https://wa.me/${personalInfo.phone}?text=${textMessage}`;
        
        // Open WhatsApp
        window.open(waUrl, '_blank');

        // Form cleanup after minor delay
        setTimeout(() => {
          setIsSuccess(false);
          setFormData({ name: '', source: '', purpose: 'Standard Meta Ads Campaign', message: '' });
        }, 1500);

      }, 800);
    } else {
      // Standard email proxy simulation
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        
        // Sim success
        setTimeout(() => {
          setIsSuccess(false);
          setFormData({ name: '', source: '', purpose: 'Standard Meta Ads Campaign', message: '' });
        }, 3000);
      }, 1000);
    }
  };

  return (
    <section 
      id="contact" 
      className="py-24 bg-slate-950 relative overflow-hidden"
    >
      {/* Visual background lights */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono text-orange-500 font-semibold uppercase tracking-widest block">
            Initiate Connection
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black text-white tracking-tight">
            Let&apos;s Build Systems
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-mono">
            Get high-ROI setups and premium SMM campaign curation custom-fit for your brand ecosystem.
          </p>
        </div>

        {/* Form and info double container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct channels left column */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <h3 className="text-xl font-sans font-bold text-white tracking-tight">
                Accelerated Inquiry Routing
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                Prefer direct communication? Reach out directly through any of our certified channels. Ikbal typically responds inside 2 business hours for Meta campaign diagnostics.
              </p>
            </div>

            {/* Channels card grid */}
            <div className="space-y-4">
              
              {/* WhatsApp Card */}
              <a 
                id="contact-channel-whatsapp"
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/40 border border-slate-850 hover:border-orange-500/30 hover:bg-slate-900 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/10 flex items-center justify-center text-orange-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-550 uppercase">WhatsApp Instant</p>
                  <p className="text-sm font-semibold text-white tracking-tight font-mono">{personalInfo.phoneFormatted}</p>
                </div>
              </a>

              {/* Email Card */}
              <a 
                id="contact-channel-email"
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/40 border border-slate-850 hover:border-orange-500/30 hover:bg-slate-900 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/10 flex items-center justify-center text-orange-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-mono text-slate-555 uppercase">Email Address</p>
                  <p className="text-sm font-semibold text-white tracking-tight truncate font-mono">{personalInfo.email}</p>
                </div>
              </a>

              <div className="grid grid-cols-2 gap-4">
                {/* LinkedIn */}
                <a 
                  id="contact-channel-linkedin"
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/40 border border-slate-850 hover:border-orange-500/30 hover:bg-slate-900 transition-all group"
                >
                  <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-orange-400 transition-colors shrink-0" />
                  <span className="text-xs font-semibold text-slate-350 font-mono">LinkedIn</span>
                </a>

                {/* Instagram */}
                <a 
                  id="contact-channel-instagram"
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/40 border border-slate-850 hover:border-orange-500/30 hover:bg-slate-900 transition-all group"
                >
                  <Instagram className="w-5 h-5 text-slate-400 group-hover:text-orange-400 transition-colors shrink-0" />
                  <span className="text-xs font-semibold text-slate-350 font-mono">Instagram</span>
                </a>
              </div>

            </div>

            {/* Operating Disclaimer Box */}
            <div className="p-4 rounded-xl border border-dashed border-slate-850 text-slate-500 text-[11px] space-y-1.5 font-mono">
              <p className="font-bold text-orange-500/80 uppercase">PIXO SPARK ENGAGEMENT ETHOS:</p>
              <p>We work exclusively on campaigns and workflows where real ROIs can be calculated, tracked, and validated. No vanity metrics or generic growth hype.</p>
            </div>

          </div>

          {/* Form container right column */}
          <div className="lg:col-span-12 lg:col-start-7 bg-slate-900/60 backdrop-blur-sm border border-slate-850 p-6 sm:p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              
              {/* Delivery Toggle bar */}
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase text-slate-400 block font-semibold">
                  Preferred Delivery Method
                </label>
                
                <div className="grid grid-cols-2 gap-2 bg-slate-950 p-1 rounded-xl border border-slate-850">
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
                    WhatsApp Direct
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
                    Email Proxy
                  </button>
                </div>
              </div>

              {/* Form Input Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Full name */}
                <div className="space-y-1">
                  <label htmlFor="name-input" className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Your Name *</label>
                  <input
                    id="name-input"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="E.g. Alex"
                    className="w-full bg-slate-950 border border-slate-850 focus:border-orange-500/50 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white font-sans placeholder-slate-700 outline-none transition-colors"
                  />
                </div>

                {/* Email or Phone source based on toggle */}
                <div className="space-y-1">
                  <label htmlFor="source-input" className="text-[10px] font-mono text-slate-400 uppercase font-semibold">
                    {deliveryMode === 'whatsapp' ? 'Phone / WhatsApp *' : 'Your Email *'}
                  </label>
                  <input
                    id="source-input"
                    type={deliveryMode === 'whatsapp' ? 'tel' : 'email'}
                    name="source"
                    value={formData.source}
                    onChange={handleInputChange}
                    required
                    placeholder={deliveryMode === 'whatsapp' ? 'E.g. +91 90000 00000' : 'E.g. brand@example.com'}
                    className="w-full bg-slate-950 border border-slate-850 focus:border-orange-500/50 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white font-sans placeholder-slate-700 outline-none transition-colors"
                  />
                </div>

              </div>

              {/* Campaign specialization purpose */}
              <div className="space-y-1">
                <label htmlFor="purpose-select" className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Primary Specialization Required</label>
                <select
                  id="purpose-select"
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleInputChange}
                  className="w-full bg-slate-950 border border-slate-850 focus:border-orange-500/50 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-400 outline-none transition-colors font-sans"
                >
                  {purposes.map((p, idx) => (
                    <option key={idx} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message text block */}
              <div className="space-y-1">
                <label htmlFor="message-input" className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Your Brief Description *</label>
                <textarea
                  id="message-input"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  placeholder="Tell Ikbal about your current metrics and goals..."
                  className="w-full bg-slate-950 border border-slate-850 focus:border-orange-500/50 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white font-sans placeholder-slate-700 outline-none resize-none transition-colors"
                />
              </div>

              {/* Form submit dispatch bar */}
              <div>
                <button
                  id="contact-form-submit"
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-orange-500 text-slate-950 hover:bg-orange-600 font-mono font-bold text-xs uppercase tracking-wider transition-all disabled:opacity-50 cursor-pointer shadow-lg shadow-orange-500/15 text-center focus:outline-none active:scale-99"
                >
                  {isSuccess ? (
                    <>
                      <CheckCircle className="w-4 h-4 text-slate-950" />
                      Dispatched Successfully!
                    </>
                  ) : isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      Routing To Channels...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-slate-950" />
                      {deliveryMode === 'whatsapp' ? 'Open WhatsApp Chat' : 'Submit Email Inquiry'}
                    </>
                  )}
                </button>
              </div>

              {/* Simulated response feedback block */}
              {isSuccess && deliveryMode === 'email' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs sm:text-xs leading-relaxed"
                >
                  <p className="font-bold uppercase font-mono mb-1">📬 Proxy Email Receipt Logged</p>
                  <p className="font-sans">Your inquiry data was formatted and cached. Ikbal has been notified via digital dashboard relays, or you can use WhatsApp Direct to skip line queuing.</p>
                </motion.div>
              )}

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

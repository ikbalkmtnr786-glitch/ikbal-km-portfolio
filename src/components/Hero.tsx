import React from 'react';
import { ArrowDown, MessageCircle, Sparkles, Award, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo } from '../data';
import PortfolioImage from './PortfolioImage';

export default function Hero() {
  const handleScrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Premium Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-amber-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[150px] bg-gradient-to-t from-slate-950/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Info Column */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
            
            {/* Tagline / Subtitle Badge */}
            <motion.div
              id="hero-badge"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 pointer-events-none"
            >
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-xs font-mono font-medium tracking-wide uppercase">
                {personalInfo.badge}
              </span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-2">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-orange-500 font-mono text-sm tracking-[0.2em] uppercase block font-semibold"
              >
                {personalInfo.title}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl font-sans font-black text-white tracking-tight leading-[1.1]"
              >
                Solving Digital Growth for Brands
              </motion.h1>
            </div>

            {/* Campaign Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl sm:text-2xl font-mono text-orange-400 font-bold border-l-2 border-orange-500 pl-4 py-1"
            >
              &ldquo;{personalInfo.tagline}&rdquo;
            </motion.p>

            {/* Professional Bio Brief */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-slate-350 text-sm sm:text-base leading-relaxed max-w-xl font-sans"
            >
              {personalInfo.bio}
            </motion.p>

            {/* CTA action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mt-2"
            >
              <button
                id="hero-cta-viewwork"
                onClick={handleScrollToPortfolio}
                className="group flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all active:scale-98 cursor-pointer focus:outline-none"
              >
                View Works
                <ArrowDown className="w-4 h-4 text-orange-500 group-hover:translate-y-1 transition-transform" />
              </button>
              
              <a
                id="hero-cta-whatsapp"
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider shadow-lg shadow-orange-500/15 hover:shadow-orange-500/25 transition-all active:scale-98"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950 text-slate-950" />
                Let&apos;s Talk WhatsApp
              </a>
            </motion.div>

          </div>

          {/* Profile Image Column (with floating stats) */}
          <div className="lg:col-span-5 relative flex justify-center items-center mt-8 lg:mt-0">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
              
              {/* Backside Glowing Aura */}
              <div className="absolute inset-4 rounded-3xl bg-gradient-to-tr from-orange-500/20 to-amber-500/10 blur-xl animate-pulse" />
              
              {/* Profile Image Wrapper */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full rounded-2xl overflow-hidden border-2 border-slate-800 shadow-2xl relative z-10"
              >
                <PortfolioImage
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  type="profile"
                />
              </motion.div>

              {/* FLOATING BADGE 1: 872 Organic Accounts Reached */}
              <motion.div
                initial={{ x: -20, y: 10, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -left-6 bottom-10 z-20"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                  className="bg-slate-950/90 backdrop-blur-md border border-slate-800 rounded-xl p-3 shadow-xl flex items-center gap-3 max-w-[190px]"
                >
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0">
                    <TrendingUp className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <p className="text-sm font-mono font-bold text-white tracking-tight">872</p>
                    <p className="text-[10px] text-slate-400 font-sans leading-tight">Organic Accounts Reached</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* FLOATING BADGE 2: Grade A+ Certified */}
              <motion.div
                initial={{ x: 20, y: -10, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute -right-6 top-10 z-20"
              >
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                  className="bg-slate-950/90 backdrop-blur-md border border-slate-800 rounded-xl p-3 shadow-xl flex items-center gap-3 max-w-[190px]"
                >
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0">
                    <Award className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <p className="text-sm font-mono font-bold text-white tracking-tight">Grade A+</p>
                    <p className="text-[10px] text-slate-400 font-sans leading-tight">Certified Specialist</p>
                  </div>
                </motion.div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
      
      {/* Bottom subtle divider line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-900 to-transparent" />
    </section>
  );
}

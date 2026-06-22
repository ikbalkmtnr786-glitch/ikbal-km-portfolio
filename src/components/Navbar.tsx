import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { personalInfo } from '../data';

interface NavbarProps {
  onResumeOpen: () => void;
}

export default function Navbar({ onResumeOpen }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'skills', label: 'Skills' },
    { id: 'credentials', label: 'Credentials' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.scrollY;
          const elementBottom = bottom + window.scrollY;
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <nav id="main-nav" className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-900/80 py-3 shadow-lg shadow-slate-950/20' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <button id="nav-logo" onClick={() => handleScrollTo('home')} className="flex items-center gap-2 text-left group cursor-pointer focus:outline-none">
            <div className="h-10 w-24 flex items-center justify-center">
              <img src="/pixo-logo.png" alt="Pixo Spark Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="text-white font-sans font-bold text-base tracking-tight block">{personalInfo.name}</span>
              <span className="text-[10px] font-mono text-orange-400 tracking-wider uppercase block -mt-1 font-semibold">Pixo Spark</span>
            </div>
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button key={item.id} id={`nav-link-${item.id}`} onClick={() => handleScrollTo(item.id)} className={`relative px-3 py-1.5 rounded-md text-xs font-mono tracking-wide transition-colors cursor-pointer focus:outline-none ${activeSection === item.id ? 'text-orange-400' : 'text-slate-400 hover:text-white'}`}>
                {activeSection === item.id && (
                  <motion.span layoutId="activeNavBackground" className="absolute inset-0 bg-slate-900 border border-slate-800 rounded-md -z-10" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />
                )}
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center">
            <button id="desktop-resume-btn" onClick={onResumeOpen} className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20 active:scale-95 transition-all text-center">
              Resume
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex lg:hidden items-center gap-3">
            <button id="mobile-resume-trigger" onClick={onResumeOpen} className="px-3 py-1.5 rounded-md bg-gradient-to-r from-orange-500 to-amber-600 text-slate-950 font-mono font-bold text-[10px] uppercase tracking-wider">CV</button>
            <button id="mobile-menu-toggle" onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-850 active:scale-95 transition-all" aria-label="Toggle menu">
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div id="mobile-drawer" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }} className="lg:hidden w-full bg-slate-950 border-b border-slate-900 overflow-hidden">
            <div className="px-4 pt-2 pb-6 space-y-1.5">
              {navItems.map((item) => (
                <button key={item.id} id={`mobile-nav-link-${item.id}`} onClick={() => handleScrollTo(item.id)} className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-mono tracking-wide flex items-center justify-between ${activeSection === item.id ? 'bg-slate-905 border border-orange-500/20 text-orange-400 font-bold' : 'text-slate-400 hover:bg-slate-900 hover:text-white'}`}>
                  {item.label}
                  {activeSection === item.id && <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
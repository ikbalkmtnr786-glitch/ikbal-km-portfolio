import React from 'react';
import { ArrowUp, Sparkles, Send, Linkedin, Instagram, Mail } from 'lucide-react';
import { personalInfo } from '../data';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const menuItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'credentials', label: 'Credentials' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
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
    <footer 
      id="main-footer"
      className="bg-slate-950 border-t border-slate-900/80 pt-16 pb-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-900">
          
          {/* Brand block left */}
          <div className="md:col-span-5 space-y-4">
            <button 
              onClick={handleScrollToTop}
              className="flex items-center gap-2 group cursor-pointer focus:outline-none"
            >
             <div className="h-8 w-20 flex items-center justify-center">
                <img src="/pixo-logo.png" alt="Pixo Spark Logo" className="w-full h-full object-contain" />
              </div> 
              <div>
                <span className="text-white font-sans font-bold text-base tracking-tight block">
                  {personalInfo.name}
                </span>
                <span className="text-[9px] font-mono text-orange-400 tracking-widest uppercase block -mt-1 font-semibold">
                  Pixo Spark
                </span>
              </div>
            </button>
            
            <p className="text-xs text-slate-450 leading-relaxed max-w-sm">
              I construct high-ROI conversion marketing layouts, Meta-Ads setups, and AI creative strategies to deliver profit-focused digital scale-ups under the personal trademark brand <span className="text-orange-500/90 font-mono">Pixo Spark</span>.
            </p>
          </div>

          {/* Quick link columns */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">Workspace Map</h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              {menuItems.map((m, idx) => (
                <button
                  key={idx}
                  onClick={() => handleScrollTo(m.id)}
                  className="text-left py-0.5 text-slate-400 hover:text-white transition-colors cursor-pointer focus:outline-none"
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social connections column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">Contact Channel Routing</h4>
            <p className="text-xs text-slate-400 font-sans">For professional role inquiries or project briefs, initiate chat routing.</p>
            <div className="flex gap-3 pt-1">
              <a href={`mailto:${personalInfo.email}`} className="w-8.5 h-8.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-orange-500/30 text-slate-400 hover:text-orange-400 flex items-center justify-center transition-colors shadow-lg">
                <Mail className="w-4 h-4" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="w-8.5 h-8.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-orange-500/30 text-slate-400 hover:text-orange-400 flex items-center justify-center transition-colors shadow-lg">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={personalInfo.instagram} target="_blank" rel="noreferrer" className="w-8.5 h-8.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-orange-500/30 text-slate-400 hover:text-orange-400 flex items-center justify-center transition-colors shadow-lg">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Brand ownership fineprint disclaimer and copyright footer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-mono text-slate-500">
          <div className="space-y-1 text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} IKBAL KM &bull; PIXO SPARK (PERSONAL BRAND &bull; NOT AN AGENCY)</p>
            <p className="text-[9px] text-slate-600 font-sans max-w-xl">
              Disclaimer: Pixo Spark is a personal, independent marketing brand created and managed by Ikbal KM to document his individual campaign test projects, achievements, and educational skills. It is not operating as a public digital advertising agency, corporate company, or advisory firm.
            </p>
          </div>

          <button
            id="scroll-to-top-btn"
            onClick={handleScrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-850 text-slate-400 hover:text-white transition-colors cursor-pointer focus:outline-none flex items-center gap-1 shrink-0"
            aria-label="Back to top"
          >
            <span className="text-[9px] uppercase tracking-wider font-semibold">Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-orange-500" />
          </button>
        </div>

      </div>
    </footer>
  );
}

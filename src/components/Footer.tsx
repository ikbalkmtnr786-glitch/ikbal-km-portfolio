
import React from 'react';
import { ArrowUp, Linkedin, Instagram, Mail } from 'lucide-react';
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

          {/* Brand Block */}
          <div className="md:col-span-5 space-y-4">
            <button
              onClick={handleScrollToTop}
              className="flex items-center gap-2 group cursor-pointer focus:outline-none"
              aria-label="Back to homepage"
            >
              <div className="h-10 w-32 flex items-center justify-center">
                <img
                  src="/pixo-logo.png"
                  alt="Pixo Spark Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </button>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              A personal portfolio showcasing my work and learning in
              digital marketing, Meta Ads, social media management,
              graphic design, and Shopify support under the name{' '}
              <span className="text-orange-500/90 font-mono">
                Pixo Spark
              </span>.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">
              Quick Navigation
            </h4>

            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  className="text-left py-0.5 text-slate-400 hover:text-white transition-colors cursor-pointer focus:outline-none"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social Connections */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">
              Let&apos;s Connect
            </h4>

            <p className="text-xs text-slate-400 font-sans leading-relaxed">
              For digital marketing projects, freelance collaborations,
              or career opportunities, feel free to contact me.
            </p>

            <div className="flex gap-3 pt-1">

              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send email"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-orange-500/30 text-slate-400 hover:text-orange-400 flex items-center justify-center transition-colors shadow-lg"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-orange-500/30 text-slate-400 hover:text-orange-400 flex items-center justify-center transition-colors shadow-lg"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram profile"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-orange-500/30 text-slate-400 hover:text-orange-400 flex items-center justify-center transition-colors shadow-lg"
              >
                <Instagram className="w-4 h-4" />
              </a>

            </div>
          </div>

        </div>

        {/* Copyright and Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-mono text-slate-500">

          <div className="space-y-2 text-center md:text-left">

            <p>
              &copy; {new Date().getFullYear()} Ikbal KM
              <span className="mx-1.5">&bull;</span>
              Pixo Spark
            </p>

            <p className="text-[9px] text-slate-600 font-sans max-w-xl leading-relaxed">
              Pixo Spark is my personal portfolio and independent
              professional brand. It showcases my individual projects,
              practical experience, creative work, and digital marketing
              skills. It is not presented as an established agency or
              corporate company.
            </p>

          </div>

          <button
            id="scroll-to-top-btn"
            onClick={handleScrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer focus:outline-none flex items-center gap-1 shrink-0"
            aria-label="Back to top"
          >
            <span className="text-[9px] uppercase tracking-wider font-semibold">
              Top
            </span>

            <ArrowUp className="w-3.5 h-3.5 text-orange-500" />
          </button>

        </div>

      </div>
    </footer>
  );
}

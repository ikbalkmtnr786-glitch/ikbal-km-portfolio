import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { personalInfo } from '../data';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          id="whatsapp-floating-btn"
          className="fixed bottom-6 right-6 z-50 group pointer-events-auto"
        >
          {/* Glowing Backlight Ring */}
          <span className="absolute inset-0 rounded-full bg-orange-500/25 blur-md animate-ping" />
          
          <a
            href={personalInfo.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-orange-500 to-amber-600 border border-orange-400/20 text-slate-930 shadow-2xl active:scale-95 transition-all text-center focus:outline-none"
            aria-label="Direct Chat on WhatsApp"
            title="Let's Talk WhatsApp"
          >
            <MessageCircle className="w-7 h-7 fill-slate-950 text-slate-950" />
            
            {/* Slide-out Tooltip badge on Hover */}
            <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900 border border-slate-800 text-orange-400 text-[10px] font-mono uppercase font-bold tracking-wider px-3 py-1.5 rounded-lg opacity-0 shrink group-hover:opacity-100 transition-opacity duration-350 pointer-events-none shadow-xl flex items-center gap-1.5 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              WhatsApp Direct
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

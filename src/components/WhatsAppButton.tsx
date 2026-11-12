
import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { personalInfo } from '../data';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility();

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
          <span className="absolute inset-0 rounded-full bg-orange-500/25 blur-md animate-ping" />

          <a
            href={personalInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-orange-500 to-amber-600 border border-orange-400/20 text-slate-950 shadow-2xl active:scale-95 transition-all text-center focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-slate-950"
            aria-label="Contact Ikbal on WhatsApp"
            title="Contact on WhatsApp"
          >
            <MessageCircle className="w-7 h-7 fill-slate-950 text-slate-950" />

            <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900 border border-slate-800 text-orange-400 text-[10px] font-mono uppercase font-bold tracking-wider px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl flex items-center gap-1.5 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              WhatsApp
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import React from 'react';
import { Target, Instagram, Sparkles, Check, CheckCircle, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { services, personalInfo } from '../data';

export default function Services() {
  
  // Icon selector
  const getIcon = (iconName: string) => {
    const className = "w-6 h-6 text-orange-400";
    switch (iconName) {
      case 'Target': return <Target className={className} />;
      case 'Instagram': return <Instagram className={className} />;
      case 'Sparkles': return <Sparkles className={className} />;
      default: return <Check className={className} />;
    }
  };

  return (
    <section 
      id="services" 
      className="py-24 bg-slate-900/40 relative overflow-hidden"
    >
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-orange-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono text-orange-500 font-semibold uppercase tracking-widest block">
            Offered Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black text-white tracking-tight">
            Revenue Engineering Solutions
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto font-mono">
            Standardizing metrics, enhancing visuals, and scaling ROI for growth-minded digital brands.
          </p>
        </div>

        {/* 3 Services Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              id={`service-card-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-950 border border-slate-850 p-7 rounded-2xl flex flex-col justify-between hover:border-orange-500/20 group hover:shadow-2xl hover:shadow-orange-500/5 transition-all duration-300"
            >
              <div className="space-y-6 text-left">
                {/* Header Block */}
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-mono text-slate-650 uppercase font-semibold">
                    0{index + 1} / SOLUTIONS
                  </span>
                </div>

                {/* Info and Copy text */}
                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl font-sans font-black text-white group-hover:text-orange-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                    {service.description}
                  </p>
                </div>

                {/* Deliverables Checklist list */}
                <div className="p-4 bg-slate-900/60 border border-slate-850/60 rounded-xl space-y-3 pt-4">
                  <p className="text-[9px] font-mono tracking-wider font-bold text-slate-500 uppercase">Core Deliverables</p>
                  
                  <div className="space-y-2.5">
                    {service.details.map((act, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2 text-left">
                        <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-300 leading-normal font-sans">
                          {act}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Card Footer whatsapp action */}
              <div className="pt-6 mt-6 border-t border-slate-900">
                <a
                  id={`service-cta-whatsapp-${index}`}
                  href={`${personalInfo.whatsappUrl}&text=Hi%20Ikbal,%20I%20am%20interested%20in%20your%20${encodeURIComponent(service.title)}%20services!`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 text-white font-mono text-xs uppercase tracking-wider transition-colors font-bold group-hover:border-orange-500/30 group-hover:text-orange-400"
                >
                  Configure My System
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

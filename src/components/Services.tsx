
import React from 'react';
import {
  Target,
  Instagram,
  Sparkles,
  ShoppingBag,
  CheckCircle,
  ArrowUpRight,
  Check
} from 'lucide-react';
import { motion } from 'motion/react';
import { services, personalInfo } from '../data';

export default function Services() {

  // Service Icon Selector
  const getIcon = (iconName: string) => {
    const className = "w-6 h-6 text-orange-400";

    switch (iconName) {
      case 'Target':
        return <Target className={className} />;

      case 'Instagram':
        return <Instagram className={className} />;

      case 'Sparkles':
        return <Sparkles className={className} />;

      case 'ShoppingBag':
        return <ShoppingBag className={className} />;

      default:
        return <Check className={className} />;
    }
  };

  return (
    <section
      id="services"
      className="py-24 bg-slate-900/40 relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-orange-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">

          <span className="text-xs font-mono text-orange-500 font-semibold uppercase tracking-widest block">
            How I Can Help
          </span>

          <h2 className="text-3xl sm:text-4xl font-sans font-black text-white tracking-tight">
            Services & Expertise
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto font-mono">
            Practical digital marketing, social media, creative design and Shopify support to help businesses build their online presence.
          </p>

        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              id={`service-card-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-950 border border-slate-800 p-7 rounded-2xl flex flex-col justify-between hover:border-orange-500/20 group hover:shadow-2xl hover:shadow-orange-500/5 transition-all duration-300"
            >

              <div className="space-y-6 text-left">

                {/* Service Icon and Number */}
                <div className="flex justify-between items-start">

                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    {getIcon(service.iconName)}
                  </div>

                  <span className="text-[11px] font-mono text-slate-500 uppercase font-semibold">
                    {String(index + 1).padStart(2, '0')} / SERVICES
                  </span>

                </div>

                {/* Service Title and Description */}
                <div className="space-y-3">

                  <h3 className="text-lg sm:text-xl font-sans font-black text-white group-hover:text-orange-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                    {service.description}
                  </p>

                </div>

                {/* Service Deliverables */}
                <div className="p-4 bg-slate-900/60 border border-slate-800/60 rounded-xl space-y-3 pt-4">

                  <p className="text-[9px] font-mono tracking-wider font-bold text-slate-500 uppercase">
                    What I Can Help With
                  </p>

                  <div className="space-y-2.5">

                    {service.details.map((act, aIdx) => (
                      <div
                        key={aIdx}
                        className="flex items-start gap-2 text-left"
                      >

                        <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />

                        <span className="text-xs text-slate-300 leading-normal font-sans">
                          {act}
                        </span>

                      </div>
                    ))}

                  </div>

                </div>

              </div>

              {/* WhatsApp Contact Button */}
              <div className="pt-6 mt-6 border-t border-slate-900">

                <a
                  id={`service-cta-whatsapp-${index}`}
                  href={`${personalInfo.whatsappUrl}?text=${encodeURIComponent(`Hi Ikbal, I am interested in your ${service.title} service. Could you please share more details?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white font-mono text-xs uppercase tracking-wider transition-colors font-bold group-hover:border-orange-500/30 group-hover:text-orange-400"
                >

                  Discuss This Service

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

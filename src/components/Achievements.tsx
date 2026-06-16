import React from 'react';
import { TrendingUp, Users, Percent, CreditCard, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { stats } from '../data';

export default function Achievements() {
  const achievements = [
    {
      value: "0 → 171",
      label: "Instagram Growth",
      detail: "Gained real niche-specific followers organically under the Pixo Spark banner in 30 days.",
      icon: <Users className="w-5 h-5 text-orange-400" />,
      color: "from-orange-500/20 to-transparent"
    },
    {
      value: "872",
      label: "Organic Accounts Reached",
      detail: "Unique high-intent marketing profiles reached purely via content distribution and Reels pacing.",
      icon: <TrendingUp className="w-5 h-5 text-amber-400" />,
      color: "from-amber-500/20 to-transparent"
    },
    {
      value: "4.9%",
      label: "Engagement Rate",
      detail: "Organic interactions ratio, beating the 1.2% industry average and proving content-market fit.",
      icon: <Percent className="w-5 h-5 text-orange-400" />,
      color: "from-orange-500/20 to-transparent"
    },
    {
      value: "₹30",
      label: "Cost Per Lead (CPL)",
      detail: "Formulated highly effective direct Meta Lead ad campaigns giving quality inquiries at low budgets.",
      icon: <CreditCard className="w-5 h-5 text-amber-400" />,
      color: "from-amber-500/20 to-transparent"
    }
  ];

  return (
    <section 
      id="achievements" 
      className="py-24 bg-slate-900/40 relative overflow-hidden"
    >
      {/* Decorative Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#020617_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
          <div className="text-left space-y-3">
            <span className="text-xs font-mono text-orange-500 font-semibold uppercase tracking-widest block">
              Performance Markers
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-black text-white tracking-tight">
              Evidence Over Assertions
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md text-left md:text-right font-mono">
            Every metric reflects real live dashboard campaign measurements. No inflated stats, only direct performance marketing feedback loops.
          </p>
        </div>

        {/* 4 Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              id={`ach-card-${idx}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-slate-950 border border-slate-800/80 rounded-2xl p-6 relative overflow-hidden hover:border-orange-500/30 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Backside spotlight */}
              <div className={`absolute top-0 left-0 right-0 h-40 bg-gradient-to-b ${item.color} opacity-40 group-hover:opacity-60 transition-opacity duration-300`} />

              <div className="relative z-10 space-y-4">
                {/* Header Icon & label */}
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                    Metrics Loop 0{idx + 1}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-850 flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>

                {/* Main Metric Value */}
                <div>
                  <h3 className="text-4xl sm:text-5xl font-mono font-black text-white tracking-tight">
                    {item.value}
                  </h3>
                  <p className="text-xs sm:text-sm font-sans font-semibold text-orange-400 mt-1 uppercase tracking-wider">
                    {item.label}
                  </p>
                </div>
              </div>

              {/* Detail description paragraph */}
              <div className="relative z-10 mt-6 pt-4 border-t border-slate-900">
                <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed text-left">
                  {item.detail}
                </p>
              </div>

              {/* Tiny design indicator overlay */}
              <div className="absolute right-4 bottom-4 text-slate-850 group-hover:text-orange-950/20 transition-colors">
                <ChevronRight className="w-8 h-8" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

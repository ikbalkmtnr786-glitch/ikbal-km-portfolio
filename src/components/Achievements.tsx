
import React from 'react';
import {
  TrendingUp,
  Users,
  Percent,
  MessageCircle,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';

export default function Achievements() {
  const achievements = [
    {
      value: "0 → 171",
      label: "Instagram Followers",
      detail:
        "Grew the Pixo Spark Instagram account from zero to 171 followers through organic social media activities.",
      icon: <Users className="w-5 h-5 text-orange-400" />,
      color: "from-orange-500/20 to-transparent"
    },
    {
      value: "872",
      label: "Organic Accounts Reached",
      detail:
        "Reached 872 Instagram accounts through organic content published as part of the Pixo Spark personal project.",
      icon: <TrendingUp className="w-5 h-5 text-amber-400" />,
      color: "from-amber-500/20 to-transparent"
    },
    {
      value: "4.9%",
      label: "Engagement Rate",
      detail:
        "Recorded a 4.9% engagement rate on the Pixo Spark Instagram account.",
      icon: <Percent className="w-5 h-5 text-orange-400" />,
      color: "from-orange-500/20 to-transparent"
    },
    {
      value: "5",
      label: "Messaging Conversations",
      detail:
        "Recorded 5 messaging conversations from a Meta Ads campaign with a total reported ad spend of ₹127.11.",
      icon: <MessageCircle className="w-5 h-5 text-amber-400" />,
      color: "from-amber-500/20 to-transparent"
    }
  ];

  return (
    <section
      id="achievements"
      className="py-24 bg-slate-900/40 relative overflow-hidden"
    >
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#020617_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
          <div className="text-left space-y-3">
            <span className="text-xs font-mono text-orange-500 font-semibold uppercase tracking-widest block">
              Project Highlights
            </span>

            <h2 className="text-3xl sm:text-4xl font-sans font-black text-white tracking-tight">
              Practical Work & Results
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 max-w-md text-left md:text-right leading-relaxed">
            A snapshot of my practical work in organic social media growth and Meta Ads campaign execution.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.label}
              id={`ach-card-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-slate-950 border border-slate-800/80 rounded-2xl p-6 min-h-[260px] relative overflow-hidden hover:border-orange-500/30 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Background Spotlight */}
              <div
                className={`absolute top-0 left-0 right-0 h-40 bg-gradient-to-b ${item.color} opacity-40 group-hover:opacity-60 transition-opacity duration-300`}
              />

              <div className="relative z-10 space-y-5">

                {/* Icon */}
                <div className="flex justify-end items-center">
                  <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>

                {/* Metric */}
                <div>
                  <h3 className="text-3xl sm:text-4xl font-mono font-black text-white tracking-tight break-words">
                    {item.value}
                  </h3>

                  <p className="text-xs sm:text-sm font-sans font-semibold text-orange-400 mt-2 uppercase tracking-wider leading-relaxed">
                    {item.label}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="relative z-10 mt-6 pt-4 border-t border-slate-800">
                <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed text-left">
                  {item.detail}
                </p>
              </div>

              {/* Decorative Indicator */}
              <div className="absolute right-3 bottom-3 text-slate-800 group-hover:text-orange-500/20 transition-colors pointer-events-none">
                <ChevronRight className="w-7 h-7" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

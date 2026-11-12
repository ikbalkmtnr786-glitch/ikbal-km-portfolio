
import React from 'react';
import {
  Target,
  Sparkles,
  BookOpen,
  ShoppingBag,
  TrendingUp
} from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const cards = [
    {
      title: "Meta Ads & Campaign Support",
      icon: <Target className="w-6 h-6 text-orange-400" />,
      description:
        "Practical experience with Meta Ads campaign setup and execution, including campaign objectives, audience selection, messaging campaigns and performance monitoring.",
      points: [
        "Meta Ads campaign setup",
        "Audience targeting basics",
        "Messaging campaign planning",
        "Budget and performance monitoring"
      ]
    },
    {
      title: "Shopify & E-commerce",
      icon: <ShoppingBag className="w-6 h-6 text-orange-400" />,
      description:
        "Working knowledge of Shopify store setup and basic management, with a focus on product organisation, collections, themes and essential store settings.",
      points: [
        "Shopify store setup",
        "Basic theme customisation",
        "Products and collections",
        "Basic store configuration"
      ]
    },
    {
      title: "Social Media & Content Creation",
      icon: <Sparkles className="w-6 h-6 text-orange-400" />,
      description:
        "Creating social media content and visual creatives for personal projects and client work, with attention to brand consistency and audience engagement.",
      points: [
        "Social media content planning",
        "Canva graphic design",
        "Reels and video editing",
        "Captions and creative copy"
      ]
    }
  ];

  return (
    <section
      id="about"
      className="py-24 bg-slate-950 relative overflow-hidden"
    >
      {/* Decorative Blur Element */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-orange-600/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono text-orange-500 font-semibold uppercase tracking-widest block">
            About My Work
          </span>

          <h2 className="text-3xl sm:text-4xl font-sans font-black text-white tracking-tight leading-tight">
            Digital Marketing, Shopify & Creative Content.
          </h2>

          <p className="text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            I bring together practical digital marketing skills, Shopify knowledge and creative content development to help businesses strengthen their online presence.
          </p>
        </div>

        {/* Expertise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              id={`about-card-${index}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 hover:border-orange-500/30 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/5 group"
            >
              <div className="space-y-4">

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>

                <h3 className="text-lg font-sans font-bold text-white group-hover:text-orange-400 transition-colors">
                  {card.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Skills Checklist */}
              <div className="mt-6 pt-5 border-t border-slate-800 space-y-3">
                {card.points.map((point) => (
                  <div key={point} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 mt-1.5 shrink-0 rounded-full bg-orange-400" />
                    <span className="text-xs font-mono text-slate-300 leading-relaxed">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pixo Spark Organic Growth */}
        <motion.div
          id="about-growth-banner"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 relative overflow-hidden"
        >
          {/* Subtle Decoration */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial-gradient from-orange-500/5 to-transparent blur-xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            <div className="lg:col-span-7 space-y-4 text-left relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-orange-500/10 border border-orange-500/20 text-[10px] font-mono text-orange-400 font-bold uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5" />
                Personal Project — Pixo Spark
              </div>

              <h3 className="text-xl sm:text-2xl font-sans font-bold text-white tracking-tight">
                Building an Organic Social Media Presence
              </h3>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                I developed Pixo Spark as a personal digital marketing project to gain practical experience in social media management, content planning and creative design. It also helped me understand audience engagement and organic growth.
              </p>
            </div>

            {/* Reported Project Metrics */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4 relative z-10">

              <div className="bg-slate-950/60 border border-slate-800 p-4 sm:p-5 rounded-2xl text-center">
                <p className="text-2xl sm:text-3xl font-mono font-black text-orange-500 tracking-tight">
                  0 → 171
                </p>
                <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mt-2">
                  Organic Followers
                </p>
              </div>

              <div className="bg-slate-950/60 border border-slate-800 p-4 sm:p-5 rounded-2xl text-center">
                <p className="text-2xl sm:text-3xl font-mono font-black text-white tracking-tight">
                  872
                </p>
                <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mt-2">
                  Organic Accounts Reached
                </p>
              </div>

              <div className="col-span-2 bg-slate-950/60 border border-slate-800 p-4 sm:p-5 rounded-2xl text-center">
                <div className="flex items-center justify-center gap-2">
                  <TrendingUp className="w-4 h-4 text-orange-400" />
                  <p className="text-2xl sm:text-3xl font-mono font-black text-orange-400 tracking-tight">
                    4.9%
                  </p>
                </div>
                <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mt-2">
                  Engagement Rate
                </p>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

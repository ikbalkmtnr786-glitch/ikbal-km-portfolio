import React from 'react';
import { Target, Cpu, TrendingUp, Sparkles, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const cards = [
    {
      title: "Paid Acquisition Dominance",
      icon: <Target className="w-6 h-6 text-orange-400" />,
      description: "Engineering strategic Meta conversion funnels that minimize cost-per-lead (CPL) while matching precise interest avatars. Focusing on direct-response structures, tracking pixels, and systematic budget scaling models.",
      points: ["Conversion funnel audits", "A/B creative testing matrix", "Interest pairing algorithms", "₹30 average cost milestones"]
    },
    {
      title: "AI Automation Excellence",
      icon: <Cpu className="w-6 h-6 text-orange-400" />,
      description: "Fusing cutting-edge generative tools like ChatGPT and Gemini inside the modern marketing stack. Drastically accelerating copywriting briefs, buyer objection mapping, and automated creative layout batching.",
      points: ["Prompt-driven sales copy", "Market intelligence frameworks", "Dynamic template generation", "AI content workflow setups"]
    },
    {
      title: "Creator Spirit & Growth Engine",
      icon: <Sparkles className="w-6 h-6 text-orange-400" />,
      description: "Powering Pixo Spark — Ikbal's custom personal brand space — to formulate aesthetic, agency-level grids, Reels, and carousels that drive real-world attention, organic interactions, and direct leads.",
      points: ["Personal brand curation", "High-fidelity Canva canvases", "Engagement loop implementation", "Reels retention analysis"]
    }
  ];

  return (
    <section 
      id="about" 
      className="py-24 bg-slate-950 relative overflow-hidden"
    >
      {/* Decorative Blur elements */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-orange-600/5 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono text-orange-500 font-semibold uppercase tracking-widest block">
            Core Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black text-white tracking-tight leading-tight">
            Fusing Aesthetic Integrity with Direct-Response ROI Optimization.
          </h2>
          <p className="text-sm font-mono text-slate-400 max-w-xl mx-auto">
            Providing high-conversion structures backed by structured layouts and visual consistency under the personal brand <span className="text-orange-400 font-semibold">Pixo Spark</span>.
          </p>
        </div>

        {/* Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              id={`about-card-${index}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 hover:border-orange-500/30 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/5 group"
            >
              <div className="space-y-4">
                {/* Icon Wrapper */}
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

              {/* Bullet checklist features */}
              <div className="mt-6 pt-5 border-t border-slate-850 space-y-2">
                {card.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-orange-400" />
                    <span className="text-[11px] font-mono text-slate-300">{pt}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Organic Growth Highlight Banner */}
        <motion.div
          id="about-growth-banner"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 relative overflow-hidden"
        >
          {/* Subtle decoration */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial-gradient from-orange-500/5 to-transparent blur-xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-orange-500/10 border border-orange-500/20 text-[10px] font-mono text-orange-400 font-bold uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5" />
                Under the Brand &ldquo;Pixo Spark&rdquo;
              </div>
              <h4 className="text-xl sm:text-2xl font-sans font-bold text-white tracking-tight">
                Case Study: From Cold Launch to High Organic Engagement
              </h4>
              <p className="text-xs sm:text-sm text-slate-350 leading-relaxed">
                By maintaining precise aesthetic standards and deploying high-value direct-response carousels, the profile bypassed traditional ad spending to aggregate and reach an audience of 872 accounts with a magnificent 4.9% engagement quotient from a cold starting block.
              </p>
            </div>
            
            {/* Stat Counter blocks */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="bg-slate-950/60 border border-slate-850 p-5 rounded-2xl text-center">
                <p className="text-3xl sm:text-4xl font-mono font-black text-orange-500 tracking-tight">0 → 171</p>
                <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mt-1">Growth (Followers)</p>
              </div>
              <div className="bg-slate-950/60 border border-slate-850 p-5 rounded-2xl text-center">
                <p className="text-3xl sm:text-4xl font-mono font-black text-white tracking-tight">4.9%</p>
                <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mt-1">Engagement Quotient</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

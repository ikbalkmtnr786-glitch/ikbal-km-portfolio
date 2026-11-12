
import {
  Target,
  Compass,
  Sparkles,
  Search,
  LayoutGrid,
  Image as ImageIcon,
  PenTool,
  Video,
  BrainCircuit,
  Cpu,
  ShoppingBag,
  Monitor,
  BarChart3
} from 'lucide-react';

import { motion } from 'motion/react';
import { skillCategories } from '../data';

export default function Skills() {

  // Find the icon associated with each skill
  const getIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-orange-400" };

    switch (iconName) {
      case 'Target':
        return <Target {...props} />;
      case 'Compass':
        return <Compass {...props} />;
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'Search':
        return <Search {...props} />;
      case 'LayoutGrid':
        return <LayoutGrid {...props} />;
      case 'Image':
        return <ImageIcon {...props} />;
      case 'PenTool':
        return <PenTool {...props} />;
      case 'Video':
        return <Video {...props} />;
      case 'BrainCircuit':
        return <BrainCircuit {...props} />;
      case 'Cpu':
        return <Cpu {...props} />;
      case 'ShoppingBag':
        return <ShoppingBag {...props} />;
      case 'Monitor':
        return <Monitor {...props} />;
      case 'BarChart3':
        return <BarChart3 {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  return (
    <section
      id="skills"
      className="py-24 bg-slate-950 relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-orange-600/5 rounded-full blur-[120px]" />
      <div className="absolute left-10 top-10 w-60 h-60 bg-amber-500/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono text-orange-500 font-semibold uppercase tracking-widest block">
            Skills & Tools
          </span>

          <h2 className="text-3xl sm:text-4xl font-sans font-black text-white tracking-tight">
            My Digital Marketing Toolkit
          </h2>

          <p className="text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            My practical skills and tools across Meta Ads, social media marketing, Shopify, creative design and AI-assisted productivity.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, catIdx) => (
            <div key={category.title} className="space-y-6">

              {/* Category Header */}
              <div className="flex items-center gap-3 border-b border-slate-900 pb-3">
                <span className="text-xs font-mono font-bold text-orange-500 bg-orange-500/10 px-2.5 py-1 rounded">
                  {String(catIdx + 1).padStart(2, '0')}
                </span>

                <h3 className="text-lg font-sans font-extrabold text-white uppercase tracking-wider">
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    id={`skill-${catIdx}-${skill.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="bg-slate-900/40 backdrop-blur-sm border border-slate-800 p-5 rounded-xl hover:border-orange-500/20 hover:bg-slate-900/80 transition-all duration-300 flex flex-col gap-3 group"
                  >

                    {/* Icon & Skill Name */}
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0 group-hover:bg-orange-500/10 group-hover:border-orange-500/20 transition-colors">
                        {getIcon(skill.iconName)}
                      </div>

                      <h4 className="text-sm font-sans font-bold text-white group-hover:text-orange-400 transition-colors">
                        {skill.name}
                      </h4>
                    </div>

                    {/* Skill Description */}
                    <p className="text-xs text-slate-400 leading-relaxed text-left">
                      {skill.description}
                    </p>

                  </motion.div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { Target, Award, Sparkles, Image as ImageIcon, Video, Layers, Contact } from 'lucide-react';

interface PortfolioImageProps {
  src: string;
  alt: string;
  className?: string;
  type: 'profile' | 'certificate' | 'project';
  metaData?: {
    title?: string;
    issuer?: string;
    date?: string;
    grade?: string;
    category?: string;
    metrics?: { label: string; value: string }[];
  };
}

export default function PortfolioImage({ src, alt, className = "", type, metaData }: PortfolioImageProps) {
  const [hasError, setHasError] = useState(false);

  // If there's no error, we try to render the standard img
  if (!hasError) {
    return (
      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-300`}
        onError={() => setHasError(true)}
        referrerPolicy="no-referrer"
      />
    );
  }

  // Fallback views: incredibly polished vectors matching the slate #0f172a theme with orange accents #f97316
  if (type === 'profile') {
    return (
      <div className={`${className} bg-slate-900 border border-slate-700/60 relative flex flex-col items-center justify-center overflow-hidden`}>
        {/* Glow rings */}
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-orange-500/5" />
        <div className="absolute w-40 h-40 rounded-full border border-orange-500/20 animate-pulse" />
        <div className="absolute w-56 h-56 rounded-full border border-slate-800" />
        
        {/* Avatar SVG Vector */}
        <div className="z-10 flex flex-col items-center text-center p-4">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-lg shadow-orange-500/20 mb-3 border border-orange-400/30">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <span className="text-sm font-mono text-orange-400 tracking-wider uppercase">Ikbal KM</span>
          <span className="text-xs text-slate-400 mt-1">Social Strategist & Ads Specialist</span>
        </div>
        
        {/* Abstract framing */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>
    );
  }

  if (type === 'certificate') {
    const isFirst = metaData?.title?.includes("AI");
    return (
      <div className={`${className} bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800 relative flex flex-col justify-between p-6 overflow-hidden`}>
        {/* Glow overlay */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
        
        {/* Top bar with badge */}
        <div className="flex justify-between items-start z-10 w-full">
          <div className="p-2 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400">
            <Award className="w-6 h-6" />
          </div>
          {isFirst && (
            <span className="text-xs font-mono font-semibold bg-orange-500 text-slate-950 px-2.5 py-1 rounded-full uppercase tracking-wider shadow-lg shadow-orange-500/20">
              Grade A+ Program
            </span>
          )}
        </div>

        {/* Certificate Text details */}
        <div className="my-auto py-4 z-10">
          <p className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">OFFICIAL CERTIFICATION</p>
          <h4 className="text-lg font-sans font-bold text-white tracking-tight mt-1 group-hover:text-orange-400 transition-colors">
            {metaData?.title || "Digital Marketing Certificate"}
          </h4>
          <p className="text-xs text-slate-400 mt-2 flex items-center gap-1.5 font-mono">
            <span>Issued by:</span>
            <span className="text-orange-400 font-semibold">{metaData?.issuer || "The TET Skills"}</span>
          </p>
        </div>

        {/* Bottom bar metadata */}
        <div className="flex justify-between items-center z-10 border-t border-slate-900 pt-3">
          <span className="text-[10px] font-mono text-slate-500 uppercase">{metaData?.date || "2025"}</span>
          <span className="text-[9px] font-mono text-slate-400/80 bg-slate-900/80 border border-slate-800 px-2 py-0.5 rounded">
            Pixo Spark Certified
          </span>
        </div>
      </div>
    );
  }

  // default type projects: rendering a high-end poster mock
  const category = metaData?.category || "Digital Marketing";
  
  // Icon picker for category
  const getCategoryIcon = () => {
    switch (category) {
      case 'Social Media Growth': return <Sparkles className="w-5 h-5" />;
      case 'Paid Acquisition': return <Target className="w-5 h-5" />;
      case 'Content Creative': return <ImageIcon className="w-5 h-5" />;
      case 'Marketing Automation': return <Layers className="w-5 h-5" />;
      case 'Video Marketing': return <Video className="w-5 h-5" />;
      default: return <Contact className="w-5 h-5" />;
    }
  };

  return (
    <div className={`${className} bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-800/80 relative flex flex-col justify-between p-5 overflow-hidden group`}>
      {/* Dynamic graphic particles */}
      <div className="absolute -bottom-16 -left-16 w-36 h-36 bg-orange-600/5 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-125" />
      <div className="absolute -top-16 -right-16 w-36 h-36 bg-orange-500/10 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-125" />
      
      {/* Top Header */}
      <div className="flex justify-between items-center z-10">
        <span className="text-[10px] font-mono uppercase bg-slate-900/90 text-orange-400 border border-slate-800 px-2.5 py-0.5 rounded-full">
          PIXO SPARK Case Study
        </span>
        <div className="text-orange-400 bg-orange-500/10 p-1.5 rounded-lg border border-orange-500/20">
          {getCategoryIcon()}
        </div>
      </div>

      {/* Campaign Branding Midsection */}
      <div className="my-auto py-3 z-10">
        <span className="text-[9px] font-mono tracking-widest text-[#f97316]/80 uppercase block mb-1">
          {category}
        </span>
        <h3 className="text-lg font-sans font-bold text-white leading-tight group-hover:text-orange-400 transition-colors">
          {metaData?.title || "Premium Campaign Capture"}
        </h3>
      </div>

      {/* Metrics Banner */}
      {metaData?.metrics && metaData.metrics.length > 0 ? (
        <div className="grid grid-cols-3 gap-2 bg-slate-950/80 backdrop-blur-md rounded-lg p-2.5 border border-slate-800/80 z-10 mt-auto">
          {metaData.metrics.map((m, idx) => (
            <div key={idx} className="text-center border-r last:border-r-0 border-slate-800/80">
              <p className="text-xs font-mono font-bold text-orange-400">{m.value}</p>
              <p className="text-[8px] text-slate-400/90 mt-0.5 leading-none tracking-tight">{m.label}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-md rounded-lg p-2.5 border border-slate-800/50 z-10 mt-auto">
          <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
          <p className="text-[9px] font-mono text-slate-400">Direct-Response Creative Asset</p>
        </div>
      )}
    </div>
  );
}

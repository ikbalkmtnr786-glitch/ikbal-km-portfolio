import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Linkedin, Instagram, Award, Briefcase, GraduationCap, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo, skillCategories, certificates } from '../data';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      id="resume-modal-overlay"
      className="fixed inset-0 z-55 flex items-center justify-center p-4 overflow-y-auto"
    >
      {/* Backdrop cover */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-40"
      />

      {/* CV Modal Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 30 }}
        transition={{ type: 'spring', duration: 0.45 }}
        className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-4xl overflow-hidden relative z-50 shadow-2xl my-8 max-h-[90vh] flex flex-col"
      >
        
        {/* Header toolbar */}
        <div className="bg-slate-950/80 backdrop-blur-md border-b border-slate-850 p-4 shrink-0 flex items-center justify-between z-10 px-6 sm:px-8">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
            <h3 className="text-white font-mono text-xs uppercase tracking-wider font-bold">Interactive Resume</h3>
          </div>
          
          <div className="flex items-center gap-2">
            {/* Print/PDF call */}
            <button
              id="resume-print-btn"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-855 border border-slate-800 text-orange-400 hover:text-orange-300 font-mono text-xs font-semibold cursor-pointer focus:outline-none transition-colors"
              title="Print CV or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            {/* Standard Close callback */}
            <button
              id="resume-close-btn"
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-400 hover:text-white transition-all cursor-pointer focus:outline-none"
              aria-label="Close CV"
            >
              <X className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Container */}
        <div className="overflow-y-auto flex-grow p-6 sm:p-10 text-left bg-slate-900">
          
          {/* Printable master block container */}
          <div 
            id="printable-cv-document"
            className="bg-slate-950 rounded-2xl border border-slate-850/80 p-6 sm:p-10 shadow-2xl relative overflow-hidden text-slate-300 font-sans leading-relaxed transition-all"
          >
            {/* Top orange line header decoration */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400 no-print" />

            {/* Name/Info Header Section */}
            <div className="border-b border-slate-850 pb-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              
              <div className="md:col-span-8 space-y-2">
                <span className="text-[10px] font-mono uppercase bg-orange-500/10 text-orange-400 px-2.5 py-0.5 rounded tracking-widest font-bold">
                  Portfolio CV
                </span>
                <h1 className="text-3xl sm:text-4xl font-sans font-black text-white tracking-tight">
                  {personalInfo.name}
                </h1>
                <p className="text-sm font-mono text-orange-400 font-semibold tracking-wide uppercase">
                  {personalInfo.title}
                </p>
                <p className="text-xs text-slate-400 max-w-xl pt-2 font-sans">
                  Meta Ads Specialist and Social Media Strategist who builds high-ROI conversion systems. Fuses direct-response metrics optimization with creative brand messaging under personal portfolio label <span className="font-semibold text-white">Pixo Spark</span>.
                </p>
              </div>

              {/* Direct links contacts block */}
              <div className="md:col-span-4 space-y-2 text-xs font-mono border-t md:border-t-0 md:border-l border-slate-850 pt-6 md:pt-0 md:pl-6 text-slate-400">
                <p className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block mb-1">Direct Channels</p>
                
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                  <span className="truncate">{personalInfo.email}</span>
                </a>
                <a href={personalInfo.whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                  <span>{personalInfo.phoneFormatted}</span>
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Linkedin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                  <span className="truncate">lucid/in/ikbal-km</span>
                </a>
                <a href={personalInfo.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Instagram className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                  <span>@pixospar</span>
                </a>
              </div>

            </div>

            {/* Resume core columns */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8">
              
              {/* Left Column (Work & Education) */}
              <div className="md:col-span-8 space-y-8">
                
                {/* Work timeline section */}
                <div className="space-y-4">
                  <h3 className="text-xs sm:text-sm font-mono font-bold text-orange-400 uppercase tracking-widest flex items-center gap-2 pb-2 border-b border-slate-850/60">
                    <Briefcase className="w-4 h-4" />
                    Practical Experience
                  </h3>

                  <div className="space-y-6">
                    {/* Role 1 */}
                    <div className="relative pl-5 border-l border-slate-800 space-y-1 text-left">
                      <div className="absolute -left-1 top-1.5 w-2.5 h-2.5 rounded-full bg-orange-500" />
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                        <h4 className="text-sm font-sans font-bold text-white">Digital Marketing Executive / Intern</h4>
                        <span className="text-[10px] sm:text-xs font-mono bg-slate-900 border border-slate-800 px-2 py-0.5 rounded text-slate-400">Mar 2025 - Apr 2025</span>
                      </div>
                      <p className="text-xs text-orange-400/90 font-mono">Team Ynes</p>
                      <ul className="text-xs text-slate-400 list-disc pl-4 space-y-1.5 mt-2 font-sans">
                        <li>Fitted brand creative materials matching corporate aesthetics for social feeds.</li>
                        <li>Automated content schedules, leveraging ChatGPT pipelines to construct high-frequency copies.</li>
                        <li>Analyzed audience research matrices to profile interest cohorts, delivering optimized post engagement results.</li>
                      </ul>
                    </div>

                    {/* Role 2 */}
                    <div className="relative pl-5 border-l border-slate-800 space-y-1 text-left">
                      <div className="absolute -left-1 top-1.5 w-2.5 h-2.5 rounded-full bg-orange-500" />
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                        <h4 className="text-sm font-sans font-bold text-white">Digital Marketing Associate / Apprentice</h4>
                        <span className="text-[10px] sm:text-xs font-mono bg-slate-900 border border-slate-800 px-2 py-0.5 rounded text-slate-400">Jan 2025 - Feb 2025</span>
                      </div>
                      <p className="text-xs text-orange-400/90 font-mono">The TET Skills</p>
                      <ul className="text-xs text-slate-400 list-disc pl-4 space-y-1.5 mt-2 font-sans">
                        <li>Configured direct-response Meta Ads campaigns resulting in qualified educational lead streams.</li>
                        <li>Analyzed landing structures and optimized qualifying Meta forms layouts to secure ₹30 average CPL margins.</li>
                        <li>Formulated structured A/B image grids inside Canva to drive ad click-through frequencies.</li>
                      </ul>
                    </div>

                    {/* Role 3 */}
                    <div className="relative pl-5 border-l border-slate-800 space-y-1 text-left">
                      <div className="absolute -left-1 top-1.5 w-2.5 h-2.5 rounded-full bg-slate-700" />
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                        <h4 className="text-sm font-sans font-bold text-white">Founder & Growth Strategist</h4>
                        <span className="text-[10px] sm:text-xs font-mono bg-slate-900 border border-slate-800 px-2 py-0.5 rounded text-slate-400">May 2025 - Present</span>
                      </div>
                      <p className="text-xs text-orange-400/90 font-mono">Pixo Spark (Personal Branding Block)</p>
                      <ul className="text-xs text-slate-400 list-disc pl-4 space-y-1.5 mt-2 font-sans">
                        <li>Engineered structural content grids generating 872 unique accounts organic reach.</li>
                        <li>Coordinated video layouts adjustments for micro-reels pacing, sustaining a 4.9%+ direct interaction quotient.</li>
                        <li>Curated and compiled design blueprints for freelance local conversion inquiries.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Academic Credentials resume section */}
                <div className="space-y-4">
                  <h3 className="text-xs sm:text-sm font-mono font-bold text-orange-400 uppercase tracking-widest flex items-center gap-2 pb-2 border-b border-slate-850/60">
                    <GraduationCap className="w-4 h-4" />
                    Credentials & Certifications
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {certificates.map((cert) => (
                      <div key={cert.id} className="p-4 bg-slate-900/60 border border-slate-850 rounded-xl space-y-1">
                        <p className="text-[10px] font-mono text-orange-500 font-bold uppercase">{cert.date}</p>
                        <h4 className="text-xs sm:text-sm font-sans font-bold text-white leading-snug">{cert.title}</h4>
                        <p className="text-[11px] text-slate-400 font-mono">{cert.issuer}</p>
                        {cert.grade && (
                          <span className="inline-block mt-1 text-[9px] font-mono font-bold bg-orange-500/10 border border-orange-500/25 text-orange-400 px-1.5 py-0.5 rounded">
                            {cert.grade} Program
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

              </div>
              
              {/* Right Column (Skills & Tools) */}
              <div className="md:col-span-4 space-y-8">
                
                {/* Specializations skills tags */}
                <div className="space-y-4">
                  <h3 className="text-xs sm:text-sm font-mono font-bold text-orange-400 uppercase tracking-widest flex items-center gap-2 pb-2 border-b border-slate-850/60">
                    <Award className="w-4 h-4" />
                    Pro Specializations
                  </h3>

                  <div className="space-y-6">
                    {skillCategories.map((cat, idx) => (
                      <div key={idx} className="space-y-2 text-left">
                        <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-bold">{cat.title}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {cat.skills.map((skill, sIdx) => (
                            <span 
                              key={sIdx}
                              className="text-[11px] font-mono bg-slate-900/80 hover:bg-slate-900 text-slate-300 border border-slate-800 px-2.5 py-1 rounded-lg"
                              title={skill.description}
                            >
                              {skill.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Practical strengths check lists */}
                <div className="space-y-4">
                  <h3 className="text-xs sm:text-sm font-mono font-bold text-orange-400 uppercase tracking-widest flex items-center gap-2 pb-2 border-b border-slate-850/60">
                    <CheckCircle className="w-4 h-4" />
                    Core Strengths
                  </h3>

                  <div className="space-y-2.5 text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      <span>Direct-Response Marketing Focus</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      <span>Lead Acquisition Cost Controls</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      <span>Canva and PSD Design Standard</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      <span>AI Copilot Content Accelerations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      <span>Absolute Professional Ethics</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Interactive signature print-look block */}
            <div className="border-t border-slate-850 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-4">
              <span>Verified Registry ID: PXS-2025-90611</span>
              <span>IKBAL KM &bull; META ADS SPECIALIST</span>
            </div>

          </div>

          {/* Quick print helper toast */}
          <p className="text-xs text-slate-500 text-center mt-6 uppercase font-mono max-w-sm mx-auto no-print">
            Tip: Clicking Print loads printing drivers. Select &ldquo;Save as PDF&rdquo; to download a high-end physical copy.
          </p>

        </div>

        {/* Modal sticky bottom bar */}
        <div className="bg-slate-950 border-t border-slate-850 p-4 shrink-0 flex items-center justify-center">
          <button
            id="resume-modal-footer-close"
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-orange-500 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider hover:bg-orange-600 transition-colors cursor-pointer"
          >
            Close document window
          </button>
        </div>

      </motion.div>

      {/* Embedded Printing CSS styles using inline style tag so it overrides master dark themes on printing */}
      <style>{`
        @media print {
          /* Hide everything except the CV container */
          body * {
            visibility: hidden;
            background: white !important;
            color: #0f172a !important;
          }
          #resume-modal-overlay,
          #resume-modal-overlay * {
            visibility: visible;
          }
          /* Target exact inner container */
          #printable-cv-document {
            visibility: visible;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            border: none !important;
            background: white !important;
            color: #0f172a !important;
            padding: 0 !important;
            box-shadow: none !important;
          }
          #printable-cv-document * {
            visibility: visible;
            color: #1e293b !important;
            border-color: #e2e8f0 !important;
            background: transparent !important;
            box-shadow: none !important;
          }
          #printable-cv-document h1,
          #printable-cv-document h2,
          #printable-cv-document h3,
          #printable-cv-document h4 {
            color: #0f172a !important;
          }
          #printable-cv-document span,
          #printable-cv-document p,
          #printable-cv-document li {
            color: #334155 !important;
          }
          #resume-modal-overlay > div:first-child,
          .no-print,
          #main-nav,
          #whatsapp-floating-btn,
          button {
            display: none !important;
            visibility: hidden !important;
          }
        }
      `}</style>
    </div>
  );
}

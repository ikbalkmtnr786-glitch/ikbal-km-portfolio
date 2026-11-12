
import React from 'react';
import {
  X,
  Printer,
  Mail,
  Phone,
  Linkedin,
  Instagram,
  Award,
  Briefcase,
  GraduationCap,
  CheckCircle,
  BookOpen
} from 'lucide-react';
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
      className="fixed inset-0 z-[55] flex items-center justify-center p-4 overflow-y-auto"
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-40"
      />

      {/* Resume Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 30 }}
        transition={{ type: 'spring', duration: 0.45 }}
        className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-4xl overflow-hidden relative z-50 shadow-2xl my-8 max-h-[90vh] flex flex-col"
      >

        {/* Header Toolbar */}
        <div className="bg-slate-950/80 backdrop-blur-md border-b border-slate-800 p-4 shrink-0 flex items-center justify-between z-10 px-6 sm:px-8">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
            <h3 className="text-white font-mono text-xs uppercase tracking-wider font-bold">
              Professional Resume
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="resume-print-btn"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-orange-400 hover:text-orange-300 font-mono text-xs font-semibold cursor-pointer focus:outline-none transition-colors"
              title="Print CV or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              id="resume-close-btn"
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-all cursor-pointer focus:outline-none"
              aria-label="Close CV"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Resume */}
        <div className="overflow-y-auto flex-grow p-6 sm:p-10 text-left bg-slate-900">

          <div
            id="printable-cv-document"
            className="bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden text-slate-300 font-sans leading-relaxed transition-all"
          >

            {/* Top Decoration */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400 no-print" />

            {/* Personal Information */}
            <div className="border-b border-slate-800 pb-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">

              <div className="md:col-span-8 space-y-2">
                <span className="text-[10px] font-mono uppercase bg-orange-500/10 text-orange-400 px-2.5 py-0.5 rounded tracking-widest font-bold">
                  Professional Resume
                </span>

                <h1 className="text-3xl sm:text-4xl font-sans font-black text-white tracking-tight">
                  {personalInfo.name}
                </h1>

                <p className="text-sm font-mono text-orange-400 font-semibold tracking-wide uppercase">
                  {personalInfo.title}
                </p>

                <p className="text-xs text-slate-400 max-w-xl pt-2 font-sans leading-relaxed">
                  Entry-level digital marketing professional with practical
                  exposure to Meta Ads, social media management, content
                  creation, and Shopify store setup. Interested in applying
                  creative skills, campaign knowledge, and a willingness to
                  learn to support business growth.
                </p>
              </div>

              {/* Contact Details */}
              <div className="md:col-span-4 space-y-3 text-xs font-mono border-t md:border-t-0 md:border-l border-slate-800 pt-6 md:pt-0 md:pl-6 text-slate-400">

                <p className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block mb-1">
                  Contact Details
                </p>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                  <span className="truncate">{personalInfo.email}</span>
                </a>

                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                  <span>{personalInfo.phoneFormatted}</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                  <span>Instagram Profile</span>
                </a>

              </div>
            </div>

            {/* Main Resume Content */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8">

              {/* Left Column */}
              <div className="md:col-span-8 space-y-8">

                {/* Practical Experience */}
                <div className="space-y-4">
                  <h3 className="text-xs sm:text-sm font-mono font-bold text-orange-400 uppercase tracking-widest flex items-center gap-2 pb-2 border-b border-slate-800/60">
                    <Briefcase className="w-4 h-4" />
                    Experience & Projects
                  </h3>

                  <div className="space-y-6">

                    {/* Pixo Spark */}
                    <div className="relative pl-5 border-l border-slate-800 space-y-1 text-left">
                      <div className="absolute -left-1 top-1.5 w-2.5 h-2.5 rounded-full bg-orange-500" />

                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                        <h4 className="text-sm font-sans font-bold text-white">
                          Digital Marketing & Content Projects
                        </h4>

                        <span className="text-[10px] sm:text-xs font-mono bg-slate-900 border border-slate-800 px-2 py-0.5 rounded text-slate-400">
                          Personal Projects
                        </span>
                      </div>

                      <p className="text-xs text-orange-400/90 font-mono">
                        Pixo Spark
                      </p>

                      <ul className="text-xs text-slate-400 list-disc pl-4 space-y-1.5 mt-2 font-sans">
                        <li>
                          Created and managed social media content for a
                          personal digital marketing portfolio.
                        </li>
                        <li>
                          Grew the Instagram account from 0 to 171 followers,
                          reaching 872 accounts organically with a reported
                          4.9% engagement rate.
                        </li>
                        <li>
                          Practised content planning, graphic design,
                          short-form video creation, and social media
                          management.
                        </li>
                        <li>
                          Built a portfolio website to present marketing
                          projects, creative work, and professional skills.
                        </li>
                      </ul>
                    </div>

                    {/* Innovative Designs */}
                    <div className="relative pl-5 border-l border-slate-800 space-y-1 text-left">
                      <div className="absolute -left-1 top-1.5 w-2.5 h-2.5 rounded-full bg-orange-500" />

                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                        <h4 className="text-sm font-sans font-bold text-white">
                          Social Media Project
                        </h4>

                        <span className="text-[10px] sm:text-xs font-mono bg-slate-900 border border-slate-800 px-2 py-0.5 rounded text-slate-400">
                          Ongoing
                        </span>
                      </div>

                      <p className="text-xs text-orange-400/90 font-mono">
                        Innovative Designs
                      </p>

                      <ul className="text-xs text-slate-400 list-disc pl-4 space-y-1.5 mt-2 font-sans">
                        <li>
                          Supported social media page setup and business
                          profile organisation.
                        </li>
                        <li>
                          Worked on creative content and promotional
                          materials for an interior design business.
                        </li>
                        <li>
                          Assisted with social media content preparation
                          and digital presence development.
                        </li>
                      </ul>
                    </div>

                    {/* Team Ynes */}
                    <div className="relative pl-5 border-l border-slate-800 space-y-1 text-left">
                      <div className="absolute -left-1 top-1.5 w-2.5 h-2.5 rounded-full bg-slate-700" />

                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                        <h4 className="text-sm font-sans font-bold text-white">
                          Digital Marketing Internship
                        </h4>

                        <span className="text-[10px] sm:text-xs font-mono bg-slate-900 border border-slate-800 px-2 py-0.5 rounded text-slate-400">
                          Apr 2025
                        </span>
                      </div>

                      <p className="text-xs text-orange-400/90 font-mono">
                        Team Ynes
                      </p>

                      <ul className="text-xs text-slate-400 list-disc pl-4 space-y-1.5 mt-2 font-sans">
                        <li>
                          Gained practical exposure to digital marketing
                          tasks and creative content preparation.
                        </li>
                        <li>
                          Worked on social media-related creative materials
                          and digital marketing activities.
                        </li>
                      </ul>
                    </div>

                    {/* TET Skills */}
                    <div className="relative pl-5 border-l border-slate-800 space-y-1 text-left">
                      <div className="absolute -left-1 top-1.5 w-2.5 h-2.5 rounded-full bg-slate-700" />

                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                        <h4 className="text-sm font-sans font-bold text-white">
                          Digital Marketing Training & Practical Work
                        </h4>

                        <span className="text-[10px] sm:text-xs font-mono bg-slate-900 border border-slate-800 px-2 py-0.5 rounded text-slate-400">
                          Jan – Feb 2025
                        </span>
                      </div>

                      <p className="text-xs text-orange-400/90 font-mono">
                        The TET Skills
                      </p>

                      <ul className="text-xs text-slate-400 list-disc pl-4 space-y-1.5 mt-2 font-sans">
                        <li>
                          Completed AI Integrated Digital Marketing
                          training and practical learning activities.
                        </li>
                        <li>
                          Gained exposure to Meta Ads, social media
                          marketing, creative preparation, and digital
                          marketing fundamentals.
                        </li>
                        <li>
                          Worked on a Meta Ads campaign that recorded
                          5 messaging conversations with an ad spend
                          of ₹127.11.
                        </li>
                      </ul>
                    </div>

                    {/* Previous Professional Experience */}
                    <div className="relative pl-5 border-l border-slate-800 space-y-1 text-left">
                      <div className="absolute -left-1 top-1.5 w-2.5 h-2.5 rounded-full bg-slate-700" />

                      <h4 className="text-sm font-sans font-bold text-white">
                        Previous Professional Experience
                      </h4>

                      <ul className="text-xs text-slate-400 list-disc pl-4 space-y-1.5 mt-2 font-sans">
                        <li>
                          Supermarket Supervisor – 2020 to 2024.
                        </li>
                        <li>
                          Site Supervisor – 2017 to 2018.
                        </li>
                        <li>
                          Team Leader, Field Research – Kantar IMRB,
                          2011 to 2015.
                        </li>
                      </ul>

                      <p className="text-[11px] text-slate-500 mt-2 font-sans">
                        Developed experience in team coordination,
                        supervision, communication, and reporting.
                      </p>
                    </div>

                  </div>
                </div>

                {/* Education */}
                <div className="space-y-4">
                  <h3 className="text-xs sm:text-sm font-mono font-bold text-orange-400 uppercase tracking-widest flex items-center gap-2 pb-2 border-b border-slate-800/60">
                    <BookOpen className="w-4 h-4" />
                    Education
                  </h3>

                  <div className="space-y-4">

                    <div>
                      <h4 className="text-sm font-sans font-bold text-white">
                        Diploma in Interior Designing
                      </h4>
                      <p className="text-xs text-slate-400 font-mono">
                        2015
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-sans font-bold text-white">
                        Higher Secondary Education
                      </h4>
                      <p className="text-xs text-slate-400 font-mono">
                        2011
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-sans font-bold text-white">
                        SSLC
                      </h4>
                      <p className="text-xs text-slate-400 font-mono">
                        2009
                      </p>
                    </div>

                  </div>
                </div>

                {/* Certifications */}
                <div className="space-y-4">
                  <h3 className="text-xs sm:text-sm font-mono font-bold text-orange-400 uppercase tracking-widest flex items-center gap-2 pb-2 border-b border-slate-800/60">
                    <GraduationCap className="w-4 h-4" />
                    Certifications
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {certificates.map((cert) => (
                      <div
                        key={cert.id}
                        className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl space-y-1"
                      >
                        <p className="text-[10px] font-mono text-orange-500 font-bold uppercase">
                          {cert.date}
                        </p>

                        <h4 className="text-xs sm:text-sm font-sans font-bold text-white leading-snug">
                          {cert.title}
                        </h4>

                        <p className="text-[11px] text-slate-400 font-mono">
                          {cert.issuer}
                        </p>

                        {cert.grade && (
                          <span className="inline-block mt-1 text-[9px] font-mono font-bold bg-orange-500/10 border border-orange-500/25 text-orange-400 px-1.5 py-0.5 rounded">
                            {cert.grade}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column */}
              <div className="md:col-span-4 space-y-8">

                {/* Skills */}
                <div className="space-y-4">
                  <h3 className="text-xs sm:text-sm font-mono font-bold text-orange-400 uppercase tracking-widest flex items-center gap-2 pb-2 border-b border-slate-800/60">
                    <Award className="w-4 h-4" />
                    Skills & Tools
                  </h3>

                  <div className="space-y-6">
                    {skillCategories.map((category, idx) => (
                      <div key={idx} className="space-y-2 text-left">
                        <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-bold">
                          {category.title}
                        </p>

                        <div className="flex flex-wrap gap-1.5">
                          {category.skills.map((skill, skillIdx) => (
                            <span
                              key={skillIdx}
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

                {/* Core Strengths */}
                <div className="space-y-4">
                  <h3 className="text-xs sm:text-sm font-mono font-bold text-orange-400 uppercase tracking-widest flex items-center gap-2 pb-2 border-b border-slate-800/60">
                    <CheckCircle className="w-4 h-4" />
                    Core Strengths
                  </h3>

                  <div className="space-y-2.5 text-xs text-slate-400">

                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                      <span>Meta Ads Campaign Fundamentals</span>
                    </div>

                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                      <span>Social Media Content Planning</span>
                    </div>

                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                      <span>Creative Design & Short-form Video</span>
                    </div>

                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                      <span>Shopify Store Setup Fundamentals</span>
                    </div>

                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                      <span>AI-assisted Content Creation</span>
                    </div>

                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                      <span>Team Coordination & Reporting</span>
                    </div>

                  </div>
                </div>

                {/* Professional Approach */}
                <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
                  <p className="text-[10px] font-mono text-orange-400 uppercase tracking-wider font-bold">
                    Professional Approach
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    Practical learning, honest communication,
                    attention to detail, and a willingness to improve
                    through real projects and feedback.
                  </p>
                </div>

              </div>

            </div>

            {/* Footer */}
            <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-4">
              <span>Portfolio: Pixo Spark</span>
              <span>IKBAL KM</span>
            </div>

          </div>

          <p className="text-xs text-slate-500 text-center mt-6 uppercase font-mono max-w-sm mx-auto no-print">
            Select &ldquo;Save as PDF&rdquo; in the print window to save a
            digital copy of this resume.
          </p>

        </div>

        {/* Bottom Bar */}
        <div className="bg-slate-950 border-t border-slate-800 p-4 shrink-0 flex items-center justify-center">
          <button
            id="resume-modal-footer-close"
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-orange-500 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider hover:bg-orange-600 transition-colors cursor-pointer"
          >
            Close Resume
          </button>
        </div>

      </motion.div>

      {/* Print Styles */}
      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 12mm;
          }

          body {
            background: white !important;
            overflow: visible !important;
          }

          body * {
            visibility: hidden !important;
          }

          #printable-cv-document,
          #printable-cv-document * {
            visibility: visible !important;
          }

          #printable-cv-document {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            max-width: none !important;
            border: none !important;
            border-radius: 0 !important;
            background: white !important;
            color: #334155 !important;
            padding: 0 !important;
            margin: 0 !important;
            box-shadow: none !important;
            overflow: visible !important;
          }

          #printable-cv-document * {
            color: #334155 !important;
            border-color: #e2e8f0 !important;
            box-shadow: none !important;
            text-shadow: none !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          #printable-cv-document h1,
          #printable-cv-document h2,
          #printable-cv-document h3,
          #printable-cv-document h4 {
            color: #0f172a !important;
          }

          #printable-cv-document .text-orange-400,
          #printable-cv-document .text-orange-500 {
            color: #c2410c !important;
          }

          #printable-cv-document .bg-slate-950,
          #printable-cv-document .bg-slate-900,
          #printable-cv-document .bg-slate-900\\/60,
          #printable-cv-document .bg-slate-900\\/80 {
            background: white !important;
          }

          #resume-modal-overlay,
          #resume-modal-overlay > div,
          #resume-modal-overlay button,
          #resume-modal-overlay .no-print {
            display: none !important;
          }

          #printable-cv-document {
            display: block !important;
          }

          a {
            text-decoration: none !important;
          }
        }
      `}</style>

    </div>
  );
}

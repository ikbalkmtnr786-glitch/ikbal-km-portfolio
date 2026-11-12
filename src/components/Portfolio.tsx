
import React, { useState } from 'react';
import { X, Sparkles, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { projects } from '../data';
import { Project } from '../types';
import PortfolioImage from './PortfolioImage';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [zoomPoster, setZoomPoster] = useState<string | null>(null);

  const tabs = [
    'All',
    'Social Media Growth',
    'Paid Acquisition',
    'Content Creative',
    'Marketing Automation',
    'Video Marketing'
  ];

  const filteredProjects = activeTab === 'All'
    ? projects
    : projects.filter((p) => p.category === activeTab);

  return (
    <section
      id="portfolio"
      className="py-24 bg-slate-950 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/5 left-10 w-80 h-80 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono text-orange-500 font-semibold uppercase tracking-widest block">
            Selected Work
          </span>

          <h2 className="text-3xl sm:text-4xl font-sans font-black text-white tracking-tight">
            Projects & Creative Work
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 font-mono">
            A selection of digital marketing projects, campaign experience, social media work and creative designs.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-4xl mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              id={`portfolio-tab-${tab.replace(/\s+/g, '-').toLowerCase()}`}
              onClick={() => setActiveTab(tab)}
              aria-pressed={activeTab === tab}
              className={`relative px-4 py-2 rounded-xl text-xs font-mono tracking-wide transition-all uppercase cursor-pointer focus:outline-none border ${
                activeTab === tab
                  ? 'bg-orange-500 text-slate-950 border-orange-500 font-bold shadow-lg shadow-orange-500/10'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          id="portfolio-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                id={`project-card-${project.id}`}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-orange-500/20 group transition-all duration-300 flex flex-col justify-between h-[450px]"
              >

                {/* Project Image */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-950 shrink-0">
                  <PortfolioImage
                    src={project.imageRef}
                    alt={project.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    type="project"
                    metaData={{
                      title: project.title,
                      category: project.category,
                      metrics: project.metrics
                    }}
                  />

                  {/* Category Label */}
                  <span className="absolute top-4 left-4 z-10 text-[10px] font-mono bg-slate-950/90 text-orange-400 border border-slate-800 px-2.5 py-0.5 rounded-full uppercase">
                    {project.category}
                  </span>
                </div>

                {/* Project Information */}
                <div className="p-5 flex flex-col justify-between flex-grow text-left">
                  <div className="space-y-2.5">

                    {/* Project Tags */}
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono text-slate-500 uppercase"
                        >
                          #{tag.replace(/\s+/g, '')}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-base sm:text-lg font-sans font-bold text-white group-hover:text-orange-400 transition-colors line-clamp-2">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-400 font-sans line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Project Footer */}
                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-2">
                    {project.metrics && project.metrics.length > 0 ? (
                      <span className="text-xs font-mono font-bold text-orange-400">
                        {project.metrics[0].value} {project.metrics[0].label}
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono text-slate-500">
                        CREATIVE PROJECT
                      </span>
                    )}

                    <button
                      id={`explore-trigger-${project.id}`}
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-white font-mono text-xs uppercase cursor-pointer focus:outline-none transition-colors"
                    >
                      View Project
                      <ArrowRight className="w-3.5 h-3.5 text-orange-500 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Category State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-slate-900/10 border border-slate-800 rounded-2xl max-w-lg mx-auto">
            <p className="text-slate-400 font-mono text-xs">
              NO PROJECTS AVAILABLE IN THIS CATEGORY YET.
            </p>
          </div>
        )}

      </div>

      {/* PROJECT DETAILS MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div
            id="portfolio-case-study-modal"
            className="fixed inset-0 z-[55] flex items-center justify-center p-4 overflow-y-auto"
          >

            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-40"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.45 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-4xl overflow-hidden relative z-50 shadow-2xl my-8 max-h-[90vh] flex flex-col"
            >

              {/* Close Button */}
              <button
                id="case-modal-close"
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-900 transition-all cursor-pointer focus:outline-none z-50"
                aria-label="Close project details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Scrollable Content */}
              <div className="overflow-y-auto flex-grow text-left">

                {/* Project Cover */}
                <div className="aspect-[21/9] sm:aspect-[24/8] w-full relative bg-slate-950 border-b border-slate-800">
                  <PortfolioImage
                    src={selectedProject.imageRef}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover opacity-90"
                    type="project"
                    metaData={{
                      title: selectedProject.title,
                      category: selectedProject.category
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

                  <span className="absolute bottom-4 left-6 z-10 text-xs font-mono bg-orange-500 text-slate-950 px-3 py-1 rounded font-bold uppercase tracking-wider">
                    {selectedProject.category}
                  </span>
                </div>

                {/* Project Details */}
                <div className="p-6 sm:p-8 space-y-8">

                  {/* Title and Tags */}
                  <div className="space-y-3">
                    <h2
                      id="project-modal-title"
                      className="text-2xl sm:text-3xl font-sans font-black text-white tracking-tight"
                    >
                      {selectedProject.title}
                    </h2>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {selectedProject.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 font-mono text-[10px] sm:text-xs uppercase"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Metrics */}
                  <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-4">
                      Reported Project Metrics
                    </p>

                    {selectedProject.metrics && selectedProject.metrics.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {selectedProject.metrics.map((met, mIdx) => (
                          <div
                            key={mIdx}
                            className="text-center sm:text-left border-b sm:border-b-0 sm:border-r last:border-0 border-slate-900 pb-4 sm:pb-0 sm:pr-4"
                          >
                            <p className="text-3xl sm:text-4xl font-mono font-black text-orange-400">
                              {met.value}
                            </p>

                            <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">
                              {met.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-slate-400 text-xs sm:text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                        <span>
                          Creative work and project materials are presented for visual review.
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Overview and Strategy */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-2">

                    {/* Project Overview */}
                    <div className="md:col-span-8 space-y-6">

                      <div className="space-y-3">
                        <h4 className="text-sm font-mono text-orange-500 font-bold uppercase tracking-wider border-b border-slate-800 pb-2">
                          Project Overview
                        </h4>

                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                          {selectedProject.overview}
                        </p>
                      </div>

                      {/* Strategy and Execution */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-mono text-orange-500 font-bold uppercase tracking-wider border-b border-slate-800 pb-2">
                          Approach & Execution
                        </h4>

                        <ul className="space-y-3">
                          {selectedProject.strategy.map((strat, sIdx) => (
                            <li
                              key={sIdx}
                              className="flex gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed text-left"
                            >
                              <span className="text-orange-500 font-mono text-xs font-bold leading-none shrink-0 mt-0.5">
                                [{String(sIdx + 1).padStart(2, '0')}]
                              </span>

                              <span>{strat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>

                    {/* Outcomes */}
                    <div className="md:col-span-4 space-y-6 bg-slate-950/40 p-5 rounded-2xl border border-slate-800/60">

                      <div className="space-y-4">
                        <h4 className="text-xs font-mono text-slate-400 font-bold uppercase tracking-wider border-b border-slate-900 pb-2">
                          Outcomes & Deliverables
                        </h4>

                        <ul className="space-y-4">
                          {selectedProject.results.map((res, rIdx) => (
                            <li key={rIdx} className="space-y-1">
                              <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />

                                <span className="text-[10px] font-mono text-orange-400 font-bold uppercase tracking-wider">
                                  Item {String(rIdx + 1).padStart(2, '0')}
                                </span>
                              </div>

                              <p className="text-xs text-slate-300 leading-relaxed pl-3.5">
                                {res}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>

                  </div>

                  {/* Related Creative Gallery */}
                  {selectedProject.relatedGallery && selectedProject.relatedGallery.length > 0 && (
                    <div className="space-y-4 pt-6 border-t border-slate-800">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-orange-400" />

                        <h4 className="text-sm font-mono text-orange-500 font-bold uppercase tracking-wider">
                          Related Creative Work
                        </h4>
                      </div>

                      <p className="text-xs text-slate-400 leading-relaxed font-sans max-w-xl">
                        Explore related designs and creative materials from this project. Select an image to view it in a larger format.
                      </p>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-3">
                        {selectedProject.relatedGallery.map((galPath, gIdx) => (
                          <div
                            key={gIdx}
                            onClick={() => setZoomPoster(galPath)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(event) => {
                              if (event.key === 'Enter' || event.key === ' ') {
                                event.preventDefault();
                                setZoomPoster(galPath);
                              }
                            }}
                            className="aspect-square rounded-xl overflow-hidden border border-slate-800 bg-slate-950 hover:border-orange-500/40 transition-all cursor-zoom-in group relative focus:outline-none focus:ring-2 focus:ring-orange-500"
                          >
                            <img
                              src={galPath}
                              alt={`Creative work ${gIdx + 1}`}
                              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                              onError={(e) => {
                                e.currentTarget.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 100 100'><rect width='100' height='100' fill='%230f172a'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='6' fill='%23f97316'>PIXO SPARK ASSET</text></svg>";
                              }}
                            />

                            <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-all" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>

                {/* Modal Footer */}
                <div className="bg-slate-950 border-t border-slate-800 p-5 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-[10px] font-mono text-slate-500 uppercase">
                    PIXO SPARK PERSONAL PORTFOLIO • 2026
                  </p>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2 rounded-lg bg-orange-500 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider cursor-pointer"
                  >
                    Close Project
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* CREATIVE IMAGE ZOOM MODAL */}
      <AnimatePresence>
        {zoomPoster && (
          <div
            id="portfolio-zoom-poster-modal"
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          >

            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setZoomPoster(null)}
              className="absolute inset-0 bg-slate-950/95 backdrop-blur-md cursor-zoom-out"
            />

            {/* Zoomed Image */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-xl w-full aspect-square rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 relative shadow-2xl z-10 p-2 flex items-center justify-center"
            >
              <button
                id="zoom-poster-close"
                onClick={() => setZoomPoster(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-white transition-all cursor-pointer z-10"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>

              <img
                src={zoomPoster}
                alt="Selected creative work enlarged"
                className="w-full h-full object-contain rounded-xl"
                onError={(e) => {
                  e.currentTarget.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23090d16'/><text x='50%' y='40%' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='6' fill='%23f97316'>PIXO SPARK</text><text x='50%' y='60%' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='4' fill='%23475569'>Creative Work Preview</text></svg>";
                }}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}

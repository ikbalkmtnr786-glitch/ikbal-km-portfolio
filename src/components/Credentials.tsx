
import React, { useState } from 'react';
import { Award, Calendar, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { certificates } from '../data';
import { Certificate } from '../types';
import PortfolioImage from './PortfolioImage';

export default function Credentials() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section
      id="credentials"
      className="py-24 bg-slate-900/40 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="text-left space-y-3">
            <span className="text-xs font-mono text-orange-500 font-semibold uppercase tracking-widest block">
              Certifications & Learning
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-black text-white tracking-tight">
              Certifications
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 max-w-sm text-left md:text-right font-mono">
            Professional training and certifications that reflect my learning and development in digital marketing.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              id={`credential-card-${cert.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onClick={() => setSelectedCert(cert)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setSelectedCert(cert);
                }
              }}
              aria-label={`View ${cert.title} certificate details`}
              className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-orange-500/30 cursor-pointer group transition-all duration-300 shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
            >

              {/* Certificate Image */}
              <div className="aspect-[4/3] w-full relative overflow-hidden bg-slate-900">
                <PortfolioImage
                  src={cert.imageRef}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  type="certificate"
                  metaData={{
                    title: cert.title,
                    issuer: cert.issuer,
                    date: cert.date,
                    grade: cert.grade
                  }}
                />

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                  <span className="px-4 py-2 bg-slate-900/90 border border-slate-800 text-orange-400 font-mono text-xs font-medium tracking-wider rounded-lg uppercase flex items-center gap-1.5 shadow-xl">
                    View Certificate
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="p-5 space-y-3 text-left">
                <div className="flex justify-between items-center gap-2">
                  <span className="text-[10px] font-mono text-slate-500 uppercase flex items-center gap-1 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 text-orange-500" />
                    Certificate
                  </span>

                  {cert.grade && (
                    <span className="text-[10px] font-mono bg-orange-500/10 text-orange-400 border border-orange-500/20 px-2 py-0.5 rounded font-bold uppercase">
                      {cert.grade}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-sans font-bold text-white group-hover:text-orange-400 transition-colors line-clamp-2">
                  {cert.title}
                </h3>

                <div className="flex justify-between items-center gap-2 text-xs text-slate-400">
                  <span className="truncate">{cert.issuer}</span>
                  <span className="font-mono text-[11px] shrink-0">
                    {cert.date}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Certificate Details Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div
            id="cert-lightbox"
            className="fixed inset-0 z-[55] flex items-center justify-center p-4"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', duration: 0.4 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="cert-modal-title"
              className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-3xl overflow-hidden relative z-10 shadow-2xl"
            >

              {/* Close Button */}
              <button
                id="cert-lightbox-close"
                onClick={() => setSelectedCert(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-900 transition-all cursor-pointer focus:outline-none z-20"
                aria-label="Close certificate details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12">

                {/* Certificate Image */}
                <div className="lg:col-span-7 bg-slate-950 p-6 flex items-center justify-center">
                  <div className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-slate-800 relative shadow-2xl">
                    <PortfolioImage
                      src={selectedCert.imageRef}
                      alt={selectedCert.title}
                      className="w-full h-full object-cover"
                      type="certificate"
                      metaData={{
                        title: selectedCert.title,
                        issuer: selectedCert.issuer,
                        date: selectedCert.date,
                        grade: selectedCert.grade
                      }}
                    />
                  </div>
                </div>

                {/* Certificate Information */}
                <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between text-left">
                  <div className="space-y-5">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-orange-500/10 border border-orange-500/20 text-[10px] font-mono text-orange-400 uppercase font-semibold">
                      <Award className="w-3.5 h-3.5" />
                      Professional Learning
                    </div>

                    <div className="space-y-2">
                      <h4
                        id="cert-modal-title"
                        className="text-xl font-sans font-black text-white leading-tight"
                      >
                        {selectedCert.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-slate-400">
                        This certificate represents training or learning completed in the stated subject area. It reflects my commitment to developing practical knowledge and professional skills.
                      </p>
                    </div>

                    <div className="space-y-3 pt-2">
                      <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                        <span className="font-mono text-slate-500 w-16 uppercase">
                          Issuer:
                        </span>
                        <span className="font-semibold text-orange-400">
                          {selectedCert.issuer}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                        <span className="font-mono text-slate-500 w-16 uppercase">
                          Issued:
                        </span>
                        <span className="flex items-center gap-1.5 font-mono text-xs">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          {selectedCert.date}
                        </span>
                      </div>

                      {selectedCert.grade && (
                        <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                          <span className="font-mono text-slate-500 w-16 uppercase">
                            Grade:
                          </span>
                          <span className="px-2 py-0.5 rounded bg-orange-500 text-slate-950 font-mono text-xs font-bold uppercase">
                            {selectedCert.grade}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-8 pt-5 border-t border-slate-800 flex flex-col gap-2.5">
                    <p className="text-[10px] font-mono text-slate-500 uppercase">
                      Certificate details are displayed as provided.
                    </p>

                    <button
                      onClick={() => setSelectedCert(null)}
                      className="w-full text-center py-2.5 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-white font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer focus:outline-none"
                    >
                      Return to Certificates
                    </button>
                  </div>

                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

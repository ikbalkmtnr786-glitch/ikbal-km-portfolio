import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Credentials from './components/Credentials';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div id="portfolio-app-root" className="min-h-screen bg-[#0f172a] text-slate-100 overflow-x-hidden font-sans selection:bg-orange-500/20 selection:text-orange-400">
      
      {/* Scrollable grid overlays */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(249,115,22,0.06),transparent_100%)] pointer-events-none z-0" />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation bar header */}
        <Navbar onResumeOpen={() => setIsResumeOpen(true)} />

        {/* Portals & Core Sections Layout strictly ordered */}
        <main className="flex-grow">
          <Hero />
          <About />
          <Achievements />
          <Skills />
          <Credentials />
          <Portfolio />
          <Services />
          <Contact />
        </main>

        {/* Closing details and disclosures */}
        <Footer />
      </div>

      {/* Persistent Overlay Assistants */}
      <WhatsAppButton />
      
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />

    </div>
  );
}

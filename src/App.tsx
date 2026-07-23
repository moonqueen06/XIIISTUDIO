import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ChallengeSolution } from './components/ChallengeSolution';
import { AboutFernanda } from './components/AboutFernanda';
import { ThreePillars } from './components/ThreePillars';
import { PortfolioGrid } from './components/PortfolioGrid';
import { PackagesSection } from './components/PackagesSection';
import { PricingTable } from './components/PricingTable';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AdminInboxModal } from './components/AdminInboxModal';
import { DeployExportModal } from './components/DeployExportModal';
import { MobileCinematicView } from './components/MobileCinematicView';
import { PortfolioItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [inboxOpen, setInboxOpen] = useState(false);
  const [deployModalOpen, setDeployModalOpen] = useState(false);
  const [prefilledScope, setPrefilledScope] = useState('');
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const [isMobileCinematic, setIsMobileCinematic] = useState(false);
  const [inboxCount, setInboxCount] = useState(1);

  // Fetch initial inbox count
  useEffect(() => {
    fetch('/api/contact')
      .then((res) => res.json())
      .then((json) => {
        if (json.data) setInboxCount(json.data.length);
      })
      .catch(() => {
        const raw = localStorage.getItem('xiii_contacts');
        if (raw) setInboxCount(JSON.parse(raw).length);
      });
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackageOrService = (title: string) => {
    setPrefilledScope(title);
    handleNavigate('contact');
  };

  const handleSelectProject = (project: PortfolioItem) => {
    setPrefilledScope(`Case Study Request: ${project.title}`);
    handleNavigate('contact');
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#800020] selection:text-white">
      {/* Sticky Header */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        inboxCount={inboxCount}
        onOpenInbox={() => setInboxOpen(true)}
        onOpenDeployModal={() => setDeployModalOpen(true)}
        isSoundEnabled={isSoundEnabled}
        onToggleSound={() => setIsSoundEnabled(!isSoundEnabled)}
        isMobileCinematic={isMobileCinematic}
        onToggleMobileMode={() => setIsMobileCinematic(!isMobileCinematic)}
      />

      {/* MOBILE CINEMATIC GALLERY MODE */}
      {isMobileCinematic ? (
        <MobileCinematicView
          onExitCinematic={() => setIsMobileCinematic(false)}
          onSelectProjectForContact={(title) => handleSelectPackageOrService(`Project: ${title}`)}
          isSoundEnabled={isSoundEnabled}
        />
      ) : (
        /* MAIN ONE PAGE SCROLL LAYOUT */
        <main className="w-full">
          {/* Hero Section */}
          <Hero
            onCtaClick={() => handleNavigate('contact')}
            onExploreClick={() => handleNavigate('pillars')}
          />

          {/* The Reality Check vs Solution */}
          <ChallengeSolution
            onCtaClick={() => handleNavigate('contact')}
          />

          {/* About Fernanda */}
          <AboutFernanda />

          {/* The Three Pillars */}
          <ThreePillars
            onSelectPillar={(pillar) => handleSelectPackageOrService(`Pillar Inquiry: ${pillar}`)}
          />

          {/* Minimalist Portfolio Showcase */}
          <PortfolioGrid
            onSelectProject={handleSelectProject}
          />

          {/* Engagement Models / Packages */}
          <PackagesSection
            onSelectPackage={handleSelectPackageOrService}
          />

          {/* A La Carte Pricing Matrix */}
          <PricingTable
            onSelectService={(service) => handleSelectPackageOrService(`Service: ${service}`)}
          />

          {/* Integrated Contact Form */}
          <ContactSection
            prefilledScope={prefilledScope}
            onInquirySubmitted={() => setInboxCount((prev) => prev + 1)}
          />
        </main>
      )}

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenDeployModal={() => setDeployModalOpen(true)}
      />

      {/* Studio Admin Inbox Drawer */}
      <AdminInboxModal
        isOpen={inboxOpen}
        onClose={() => setInboxOpen(false)}
      />

      {/* Deploy to Vercel/Netlify Instructions Modal */}
      <DeployExportModal
        isOpen={deployModalOpen}
        onClose={() => setDeployModalOpen(false)}
      />
    </div>
  );
}

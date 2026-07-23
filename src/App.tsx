import React, { useState } from 'react';
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
import { MobileCinematicView } from './components/MobileCinematicView';
import { AdminInboxModal } from './components/AdminInboxModal';
import { PortfolioItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [prefilledScope, setPrefilledScope] = useState('');
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const [isMobileCinematic, setIsMobileCinematic] = useState(false);
  const [isAdminInboxOpen, setIsAdminInboxOpen] = useState(false);

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
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#C8102E] selection:text-white">
      {/* Sticky Header */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        isSoundEnabled={isSoundEnabled}
        onToggleSound={() => setIsSoundEnabled(!isSoundEnabled)}
        isMobileCinematic={isMobileCinematic}
        onToggleMobileMode={() => setIsMobileCinematic(!isMobileCinematic)}
        onOpenInbox={() => setIsAdminInboxOpen(true)}
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
          />
        </main>
      )}

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenInbox={() => setIsAdminInboxOpen(true)}
      />

      {/* Admin Studio Inbox Modal */}
      <AdminInboxModal
        isOpen={isAdminInboxOpen}
        onClose={() => setIsAdminInboxOpen(false)}
      />
    </div>
  );
}


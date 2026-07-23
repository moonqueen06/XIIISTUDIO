import React, { useState, useEffect } from 'react';
import { Menu, X, Inbox, Download, Volume2, VolumeX, Sparkles, Smartphone, Monitor } from 'lucide-react';
import { playSubtleClick } from '../utils/audio';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  inboxCount: number;
  onOpenInbox: () => void;
  onOpenDeployModal: () => void;
  isSoundEnabled: boolean;
  onToggleSound: () => void;
  isMobileCinematic: boolean;
  onToggleMobileMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  inboxCount,
  onOpenInbox,
  onOpenDeployModal,
  isSoundEnabled,
  onToggleSound,
  isMobileCinematic,
  onToggleMobileMode,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'challenge', label: 'The Approach' },
    { id: 'about', label: 'About' },
    { id: 'pillars', label: 'Pillars' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'packages', label: 'Packages' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    playSubtleClick(isSoundEnabled);
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-[#050505]/80 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* XIII LOGO: Bold Typography signature style */}
        <button
          onClick={() => handleNavClick('hero')}
          className="group flex items-center space-x-3 text-left focus:outline-none"
          id="xii-logo-btn"
        >
          <div className="flex items-center">
            <span className="font-syne font-black text-3xl sm:text-4xl tracking-tighter text-white group-hover:text-[#800020] transition-colors select-none">
              XIII<span className="text-[#800020]">.</span>
            </span>
            <span className="ml-3 pl-3 border-l border-white/20 text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.25em] text-white/70 font-medium leading-tight hidden sm:block">
              ART & DESIGN
              <br />
              <span className="text-[#800020] font-bold">STUDIO</span>
            </span>
          </div>
        </button>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center space-x-7">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative text-[10px] uppercase tracking-[0.2em] font-mono transition-colors py-1 ${
                  isActive ? 'text-[#800020] font-bold' : 'text-white/70 hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#800020]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* RIGHT ACTION BUTTONS */}
        <div className="hidden sm:flex items-center space-x-3">
          {/* Sound Toggle */}
          <button
            onClick={() => {
              onToggleSound();
              playSubtleClick(!isSoundEnabled);
            }}
            title={isSoundEnabled ? 'Mute subtle UI audio' : 'Enable subtle UI audio'}
            className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded transition-colors"
          >
            {isSoundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>

          {/* Deploy / Export Instructions */}
          <button
            onClick={onOpenDeployModal}
            className="p-2 text-white/70 hover:text-[#800020] hover:bg-white/5 rounded transition-colors flex items-center space-x-1.5 text-[10px] font-mono uppercase tracking-widest border border-white/10"
            title="Export / Deploy to Vercel or Netlify"
          >
            <Download size={14} className="text-[#800020]" />
            <span className="hidden xl:inline text-[10px]">Deploy</span>
          </button>

          {/* Studio Inbox Drawer */}
          <button
            onClick={() => {
              playSubtleClick(isSoundEnabled);
              onOpenInbox();
            }}
            className="relative p-2 text-white/70 hover:text-white hover:bg-white/10 rounded transition-colors border border-white/10"
            title="Studio Inbox (Inquiries)"
          >
            <Inbox size={16} />
            {inboxCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#800020] text-white text-[9px] font-mono font-bold flex items-center justify-center">
                {inboxCount}
              </span>
            )}
          </button>

          {/* Main CTA */}
          <button
            onClick={() => handleNavClick('contact')}
            className="bg-[#800020] hover:bg-[#a00028] text-white px-5 py-2.5 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-mono font-bold transition-all shadow-lg shadow-red-950/30"
          >
            Initiate Project
          </button>
        </div>

        {/* MOBILE CONTROLS */}
        <div className="flex lg:hidden items-center space-x-2">
          {/* Mobile View Mode Switcher */}
          <button
            onClick={onToggleMobileMode}
            className={`p-2 rounded-full text-xs font-mono flex items-center space-x-1 border transition-colors ${
              isMobileCinematic
                ? 'bg-[#800020] text-white border-[#800020]'
                : 'bg-black/5 text-black border-black/10'
            }`}
            title="Toggle Cinematic Deck Mode"
          >
            {isMobileCinematic ? <Smartphone size={14} /> : <Monitor size={14} />}
            <span className="text-[10px] uppercase tracking-wider font-semibold">
              {isMobileCinematic ? 'Cinematic' : 'Scroll'}
            </span>
          </button>

          {/* Inbox Button on Mobile */}
          <button
            onClick={onOpenInbox}
            className="relative p-2 text-black rounded-full"
          >
            <Inbox size={20} />
            {inboxCount > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-[#800020] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                {inboxCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-black hover:text-[#800020] focus:outline-none"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE NAV OVERLAY */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-black/10 px-6 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-sm uppercase tracking-widest font-bold py-2 border-b border-black/5 flex items-center justify-between ${
                  activeSection === item.id ? 'text-[#800020]' : 'text-black'
                }`}
              >
                <span>{item.label}</span>
                {activeSection === item.id && (
                  <span className="w-2 h-2 rounded-full bg-[#800020]" />
                )}
              </button>
            ))}

            <div className="pt-4 flex flex-col space-y-3">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full bg-[#800020] text-white py-3 rounded-xl text-xs uppercase tracking-widest font-bold text-center"
              >
                Let’s Build Something
              </button>

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={onOpenDeployModal}
                  className="text-xs text-black/70 flex items-center space-x-1.5 font-mono"
                >
                  <Download size={14} />
                  <span>Deploy / Export Code</span>
                </button>

                <button
                  onClick={onToggleSound}
                  className="text-xs text-black/70 flex items-center space-x-1.5 font-mono"
                >
                  {isSoundEnabled ? <Volume2 size={14} /> : <VolumeX size={14} />}
                  <span>Audio: {isSoundEnabled ? 'On' : 'Off'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

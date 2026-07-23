import React, { useState, useEffect } from 'react';
import { Menu, X, Volume2, VolumeX, Smartphone, Monitor } from 'lucide-react';
import { playSubtleClick } from '../utils/audio';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  isSoundEnabled: boolean;
  onToggleSound: () => void;
  isMobileCinematic: boolean;
  onToggleMobileMode: () => void;
  onOpenInbox?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  isSoundEnabled,
  onToggleSound,
  isMobileCinematic,
  onToggleMobileMode,
  onOpenInbox,
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
    { id: 'challenge', label: 'Approach' },
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
        {/* XIII LOGO: Syne font signature style */}
        <button
          onClick={() => handleNavClick('hero')}
          className="group flex items-center space-x-3 text-left focus:outline-none"
          id="xii-logo-btn"
        >
          <div className="flex items-center">
            <span className="font-syne font-black text-3xl sm:text-4xl tracking-tighter text-white group-hover:text-[#C8102E] transition-colors select-none">
              XIII<span className="text-[#C8102E]">.</span>
            </span>
            <span className="ml-3 pl-3 border-l border-white/20 text-[10px] sm:text-[11px] font-syne uppercase tracking-[0.22em] text-white font-black leading-tight hidden sm:block">
              ART & DESIGN
              <br />
              <span className="text-[#C8102E] font-black tracking-[0.25em]">STUDIO</span>
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
                className={`relative text-xs uppercase tracking-wider transition-colors py-1 ${
                  isActive ? 'text-[#C8102E] font-bold' : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C8102E]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* RIGHT ACTION BUTTONS */}
        <div className="hidden sm:flex items-center space-x-3">
          {/* Studio Inbox Lead Dashboard Button */}
          {onOpenInbox && (
            <button
              onClick={onOpenInbox}
              title="View Studio Form Submissions & Leads"
              className="px-3 py-1.5 border border-white/20 hover:border-[#C8102E] text-white/80 hover:text-white text-[10px] font-mono uppercase tracking-wider transition-colors flex items-center space-x-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] animate-pulse" />
              <span>Studio Inbox</span>
            </button>
          )}

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

          {/* Main CTA */}
          <button
            onClick={() => handleNavClick('contact')}
            className="bg-[#C8102E] hover:bg-[#d91635] text-white px-6 py-2.5 text-xs uppercase tracking-wider font-syne font-bold transition-all shadow-lg"
          >
            Initiate Project
          </button>
        </div>

        {/* MOBILE CONTROLS */}
        <div className="flex lg:hidden items-center space-x-2">
          {/* Mobile View Mode Switcher */}
          <button
            onClick={onToggleMobileMode}
            className={`p-2 rounded-full text-xs flex items-center space-x-1 border transition-colors ${
              isMobileCinematic
                ? 'bg-[#C8102E] text-white border-[#C8102E]'
                : 'bg-white/10 text-white border-white/20'
            }`}
            title="Toggle View Mode"
          >
            {isMobileCinematic ? <Smartphone size={14} /> : <Monitor size={14} />}
            <span className="text-[10px] uppercase tracking-wider font-semibold">
              {isMobileCinematic ? 'Cinematic' : 'Scroll'}
            </span>
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-[#C8102E] focus:outline-none"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE NAV OVERLAY */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0a0a] border-b border-white/10 px-6 py-6 shadow-2xl animate-in slide-in-from-top-2 duration-200 text-white">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-sm uppercase tracking-widest font-syne font-bold py-2 border-b border-white/10 flex items-center justify-between ${
                  activeSection === item.id ? 'text-[#C8102E]' : 'text-white'
                }`}
              >
                <span>{item.label}</span>
                {activeSection === item.id && (
                  <span className="w-2 h-2 rounded-full bg-[#C8102E]" />
                )}
              </button>
            ))}

            <div className="pt-4 flex flex-col space-y-3">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full bg-[#C8102E] text-white py-3 text-xs uppercase tracking-widest font-syne font-bold text-center"
              >
                Initiate Project
              </button>

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={onToggleSound}
                  className="text-xs text-white/70 flex items-center space-x-1.5"
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


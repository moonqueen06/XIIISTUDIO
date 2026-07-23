import React from 'react';
import { ArrowUp, Mail, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenInbox?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenInbox }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] text-white pt-20 pb-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* BRAND COLUMN */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <span className="font-syne font-black text-4xl sm:text-5xl tracking-tighter text-white uppercase">
                XIII<span className="text-[#C8102E]">.</span>
              </span>
              <span className="pl-3 border-l border-white/20 text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-white font-black leading-tight">
                ART & DESIGN
                <br />
                <span className="text-[#C8102E] tracking-[0.25em]">STUDIO</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-white/70 font-sans max-w-sm leading-relaxed border-l-2 border-[#C8102E] pl-3">
              Multidisciplinary Design & Digital Strategy Studio by Fernanda. Merging artistic vision with structured operational workflows.
            </p>

            <div className="pt-2 text-xs text-white/60 space-y-1 uppercase tracking-wider font-syne font-medium">
              <p>Primary Sector: Tourism & Hospitality</p>
              <p>Serving: E-Commerce, Real Estate, Local Brands</p>
            </div>
          </div>

          {/* NAVIGATION LINKS */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs uppercase tracking-wider text-[#C8102E] font-syne font-bold">
              Navigation Index
            </p>
            <ul className="space-y-2 text-xs uppercase tracking-wider text-white/70 font-syne font-medium">
              <li>
                <button onClick={() => onNavigate('hero')} className="hover:text-white transition-all">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('challenge')} className="hover:text-white transition-all">
                  The Approach
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-all">
                  About Fernanda
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('pillars')} className="hover:text-white transition-all">
                  Three Pillars
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('portfolio')} className="hover:text-white transition-all">
                  Portfolio Showcase
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('packages')} className="hover:text-white transition-all">
                  Studio Packages
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('pricing')} className="hover:text-white transition-all">
                  Pricing Matrix
                </button>
              </li>
            </ul>
          </div>

          {/* DIRECT CHANNELS */}
          <div className="md:col-span-4 space-y-4">
            <p className="text-xs uppercase tracking-wider text-[#C8102E] font-syne font-bold">
              Direct Channels
            </p>
            <div className="space-y-3 text-sm text-white/80 font-sans">
              <p className="flex items-center space-x-2">
                <Mail size={16} className="text-[#C8102E]" />
                <a href="mailto:xiii.art.design@gmail.com" className="hover:underline font-semibold text-white">
                  xiii.art.design@gmail.com
                </a>
              </p>
              <p className="flex items-center space-x-2">
                <Phone size={16} className="text-[#C8102E]" />
                <a href="tel:+50764977883" className="hover:underline font-semibold text-white">
                  +507 6497-7883
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs uppercase tracking-wider text-white/60 space-y-4 sm:space-y-0 font-syne font-semibold">
          <p>© {new Date().getFullYear()} XIII Art & Design Studio. All Rights Reserved.</p>
          
          <div className="flex flex-wrap items-center gap-6">
            {onOpenInbox && (
              <button
                onClick={onOpenInbox}
                className="text-xs text-[#ff8093] hover:text-white uppercase tracking-widest font-mono font-bold flex items-center space-x-1.5 border-b border-[#C8102E]/40 pb-0.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]" />
                <span>Studio Inbox</span>
              </button>
            )}
            <span>Based in Bocas del Toro • Moving Worldwide</span>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1 text-white hover:text-[#ff8093] transition-colors font-bold"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};


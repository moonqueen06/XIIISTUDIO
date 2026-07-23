import React from 'react';
import { ArrowUp, Mail, Phone, Globe, ShieldCheck, Download } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenDeployModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenDeployModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] text-white pt-20 pb-12 border-t border-white/10 relative font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* BRAND COLUMN */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <span className="font-syne font-black text-4xl sm:text-5xl tracking-tighter text-white uppercase">
                XIII<span className="text-[#800020]">.</span>
              </span>
              <span className="pl-3 border-l border-white/20 text-[10px] uppercase tracking-[0.25em] text-white/70 font-bold leading-tight">
                ART & DESIGN
                <br />
                <span className="text-[#800020]">STUDIO</span>
              </span>
            </div>

            <p className="text-xs text-white/70 font-sans max-w-sm leading-relaxed border-l-2 border-[#800020] pl-3">
              Multidisciplinary Design & Digital Strategy Studio by Fernanda. Merging artistic vision with structured operational workflows.
            </p>

            <div className="pt-2 text-[10px] text-white/40 space-y-1 uppercase tracking-widest">
              <p>Primary Sector: Tourism & Hospitality</p>
              <p>Also Serving: E-Commerce, Local Services, Tech Startups</p>
            </div>
          </div>

          {/* NAVIGATION LINKS */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#800020] font-bold">
              Navigation Index
            </p>
            <ul className="space-y-2 text-xs font-mono uppercase tracking-wider text-white/70">
              <li>
                <button onClick={() => onNavigate('hero')} className="hover:text-white hover:translate-x-1 transition-all">
                  01 // Home & Hero
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('challenge')} className="hover:text-white hover:translate-x-1 transition-all">
                  02 // The Solution
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white hover:translate-x-1 transition-all">
                  03 // About Fernanda
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('pillars')} className="hover:text-white hover:translate-x-1 transition-all">
                  04 // Three Pillars
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('portfolio')} className="hover:text-white hover:translate-x-1 transition-all">
                  05 // Portfolio Grid
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('packages')} className="hover:text-white hover:translate-x-1 transition-all">
                  06 // Studio Packages
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('pricing')} className="hover:text-white hover:translate-x-1 transition-all">
                  07 // Pricing Matrix
                </button>
              </li>
            </ul>
          </div>

          {/* CONTACT & DEPLOY */}
          <div className="md:col-span-4 space-y-4">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#800020] font-bold">
              Direct Channels
            </p>
            <div className="space-y-2 text-xs text-white/80">
              <p className="flex items-center space-x-2">
                <Mail size={14} className="text-[#800020]" />
                <a href="mailto:xiii.art.design@gmail.com" className="hover:underline">
                  xiii.art.design@gmail.com
                </a>
              </p>
              <p className="flex items-center space-x-2">
                <Phone size={14} className="text-[#800020]" />
                <a href="tel:+50764977883" className="hover:underline">
                  +507 6497-7883
                </a>
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenDeployModal}
                className="inline-flex items-center space-x-2 bg-[#800020] hover:bg-[#a00028] text-white px-4 py-2.5 text-[10px] uppercase tracking-[0.2em] font-bold transition-all border border-white/20 shadow-lg"
              >
                <Download size={14} />
                <span>Export / Host Standalone</span>
              </button>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] uppercase tracking-widest text-white/40 space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} XIII Art & Design Studio. All Rights Reserved.</p>
          
          <div className="flex items-center space-x-6">
            <span>Costa Rica & Global Operations</span>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1 text-white hover:text-[#f5a6b0] transition-colors font-bold"
            >
              <span>Back to Top</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

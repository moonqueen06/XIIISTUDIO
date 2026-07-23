import React from 'react';
import { ArrowUpRight, Sparkles, Compass, Star } from 'lucide-react';
import { HERO_PORTRAIT_IMG } from '../data/portfolioData';

interface HeroProps {
  onCtaClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick, onExploreClick }) => {
  return (
    <section id="hero" className="relative pt-24 pb-16 md:pt-28 md:pb-24 overflow-hidden bg-[#050505] text-white border-b border-white/10">
      {/* Background Grid Lines Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TOP META BAR */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-10 font-syne">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-[2px] bg-[#C8102E]" />
            <span className="text-xs uppercase tracking-wider text-[#C8102E] font-bold">
              Art & Design Studio • Based in Bocas del Toro • Moving Worldwide
            </span>
          </div>

          <div className="text-right flex items-center space-x-4 text-xs uppercase tracking-wider text-white/60 font-semibold">
            <span>Est. MMXXIV</span>
            <span className="text-white/20">•</span>
            <span className="text-[#C8102E] font-semibold">Q3/Q4 Booking Active</span>
          </div>
        </div>

        {/* HERO TITLE BLOCK WITH BOLD EDITORIAL TYPOGRAPHY */}
        <div className="mb-12">
          <div className="max-w-4xl space-y-6">
            <h1 className="text-5xl sm:text-7xl lg:text-9xl font-syne font-black leading-none tracking-tighter uppercase select-none text-white">
              DESIGNER <span className="text-[#C8102E]">*</span><br />
              & ARTIST
            </h1>
            <p className="text-xl sm:text-3xl font-syne font-black uppercase text-[#C8102E] tracking-tight">
              — XIII STUDIO<span className="text-white">.</span>
            </p>
            <p className="text-sm sm:text-lg font-sans text-white/80 max-w-2xl leading-relaxed border-l-2 border-[#C8102E] pl-4">
              I design high-converting digital experiences, luxury brand identities, and automated operational engines that inspire and perform.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onCtaClick}
                className="bg-[#C8102E] hover:bg-white hover:text-black text-white px-8 py-4 text-xs font-syne font-bold uppercase tracking-wider transition-all shadow-xl flex items-center space-x-2"
              >
                <span>Start A Project</span>
                <ArrowUpRight size={16} />
              </button>

              <button
                onClick={onExploreClick}
                className="border border-white/20 hover:border-[#C8102E] text-white hover:text-[#C8102E] px-8 py-4 text-xs font-syne font-bold uppercase tracking-wider transition-all flex items-center space-x-2"
              >
                <Compass size={16} />
                <span>Explore The 3 Pillars</span>
              </button>
            </div>
          </div>
        </div>

        {/* 4 STATS ROW */}
        <div className="bg-[#0a0a0a] border border-white/10 p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center font-syne shadow-2xl">
          <div className="border-r border-white/10 pr-4 last:border-0 flex flex-col justify-center">
            <p className="text-3xl sm:text-5xl font-syne font-black text-white">+7</p>
            <p className="text-[11px] text-white/70 uppercase tracking-wider mt-1.5 font-bold leading-tight">
              Years in Graphic & Web Design
            </p>
          </div>
          <div className="border-r border-white/10 pr-4 last:border-0 flex flex-col justify-center">
            <p className="text-3xl sm:text-5xl font-syne font-black text-[#ff8093]">+20</p>
            <p className="text-[11px] text-white/70 uppercase tracking-wider mt-1.5 font-bold leading-tight">
              Years as a Fine Artist
            </p>
          </div>
          <div className="border-r border-white/10 pr-4 last:border-0 flex flex-col justify-center">
            <p className="text-3xl sm:text-5xl font-syne font-black text-white">+5</p>
            <p className="text-[11px] text-white/70 uppercase tracking-wider mt-1.5 font-bold leading-tight">
              Years in Marketing Strategy
            </p>
          </div>
          <div className="pr-2 flex flex-col justify-center">
            <p className="text-3xl sm:text-5xl font-syne font-black text-[#C8102E]">100%</p>
            <p className="text-[11px] text-white/70 uppercase tracking-wider mt-1.5 font-bold leading-tight">
              Tailored & Bespoke Systems
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};


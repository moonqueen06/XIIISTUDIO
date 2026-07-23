import React from 'react';
import { ArrowUpRight, Sparkles, Compass } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick, onExploreClick }) => {
  return (
    <section id="hero" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-[#050505] text-white">
      {/* Background Grid Lines Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TOP META BAR */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-12">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-[2px] bg-[#800020]" />
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#800020] font-bold">
              Art & Design House • Costa Rica & Global
            </span>
          </div>

          <div className="text-right flex items-center space-x-4 text-[10px] font-mono uppercase tracking-[0.25em] text-white/50">
            <span>Est. MMXXIV</span>
            <span className="text-white/20">•</span>
            <span className="text-[#800020] font-semibold">Q3/Q4 Booking Active</span>
          </div>
        </div>

        {/* HERO TITLE BLOCK WITH BOLD TYPOGRAPHY */}
        <div className="mb-12">
          <h1 className="text-5xl sm:text-7xl lg:text-9xl font-syne font-black leading-none tracking-tighter uppercase select-none text-white">
            XIII<span className="text-[#800020]">.</span>
          </h1>
          <div className="mt-4 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <p className="text-xl sm:text-3xl font-serif font-light italic text-white/90 leading-tight max-w-2xl">
              "Where artistic vision meets structured operational workflows."
            </p>
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-white/60 max-w-xs leading-relaxed border-l-2 border-[#800020] pl-4">
              Building cohesive brands, high-conversion digital experiences, and streamlined business operations.
            </p>
          </div>
        </div>

        {/* TYPOGRAPHY-DRIVEN STUDIO SHOWCASE (No Screenshots / No Images) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT LARGE TEXT STATEMENT CONTAINER */}
          <div className="lg:col-span-7 bg-white text-black p-8 sm:p-12 flex flex-col justify-between relative border border-white/10 shadow-2xl space-y-8">
            {/* Top Badge */}
            <div className="flex items-center justify-between border-b border-black/10 pb-4">
              <span className="text-[9px] font-mono uppercase tracking-[0.25em] bg-[#050505] text-white px-3 py-1 font-bold">
                01 / Digital Noir & Systems
              </span>
              <span className="text-[10px] font-mono text-black/50 uppercase tracking-widest">
                Fernanda • Studio Lead
              </span>
            </div>

            {/* Central Typography Statement */}
            <div className="space-y-4 my-auto">
              <h2 className="text-3xl sm:text-5xl font-syne font-black text-black tracking-tight uppercase leading-none">
                CONNECTED <br />
                BRAND ENGINES<span className="text-[#800020]">.</span>
              </h2>

              <p className="text-xs sm:text-sm font-mono uppercase tracking-wider text-black/80 leading-relaxed border-l-2 border-[#800020] pl-4">
                We bridge high-end artistic direction with robust operational architecture—delivering custom web applications, brand systems, and automated customer journeys.
              </p>
            </div>

            {/* Bottom Section CTA */}
            <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-black/10">
              <div className="text-[10px] font-mono uppercase tracking-widest text-black/60 space-y-1">
                <p>• Tourism & Hospitality Focus</p>
                <p>• E-Commerce & Luxury Real Estate</p>
              </div>

              <button
                onClick={onCtaClick}
                className="bg-[#800020] hover:bg-[#a00028] text-white px-6 py-3.5 text-[10px] font-mono uppercase tracking-[0.2em] font-bold transition-all shadow-xl shadow-red-950/20 flex items-center justify-center space-x-2 self-start sm:self-auto shrink-0"
              >
                <span>Initiate Vision</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMNS: Crimson Accent Block + Stats Matrix */}
          <div className="lg:col-span-5 flex flex-col gap-8 justify-between">
            
            {/* CRIMSON HERO STAT BLOCK */}
            <div className="bg-[#800020] p-8 text-white flex flex-col justify-between border border-white/10 shadow-2xl space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-white/50 text-[10px] font-mono uppercase tracking-[0.3em]">
                  Core Philosophy
                </span>
                <Sparkles size={16} className="text-white/60" />
              </div>

              <h2 className="text-3xl sm:text-4xl font-syne font-bold leading-tight tracking-tight uppercase">
                Artistic <br />
                Vision. <br />
                Systematic <br />
                Execution.
              </h2>

              <p className="text-xs font-mono text-white/80 leading-relaxed">
                Eliminating operational fragmentation through unified brand guidelines, automated marketing funnels, and optimized booking software.
              </p>

              <button
                onClick={onExploreClick}
                className="border border-white/30 px-5 py-3 text-[10px] font-mono uppercase tracking-[0.2em] hover:bg-white hover:text-[#800020] transition-all self-start flex items-center space-x-2 font-bold"
              >
                <Compass size={14} />
                <span>Explore The 3 Pillars</span>
              </button>
            </div>

            {/* THREE NUMERICAL STATS ROW */}
            <div className="bg-[#0a0a0a] border border-white/10 p-6 grid grid-cols-3 gap-4 text-center font-mono">
              <div className="border-r border-white/10 pr-2">
                <p className="text-2xl sm:text-3xl font-syne font-bold text-white">3</p>
                <p className="text-[9px] text-white/50 uppercase tracking-[0.2em] mt-1">
                  Core Pillars
                </p>
              </div>
              <div className="border-r border-white/10 pr-2">
                <p className="text-2xl sm:text-3xl font-syne font-bold text-[#800020]">+48%</p>
                <p className="text-[9px] text-white/50 uppercase tracking-[0.2em] mt-1">
                  Direct Growth
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-syne font-bold text-white">100%</p>
                <p className="text-[9px] text-white/50 uppercase tracking-[0.2em] mt-1">
                  Tailored
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

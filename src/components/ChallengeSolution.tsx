import React from 'react';
import { AlertCircle, CheckCircle2, Zap, ArrowRight } from 'lucide-react';

interface ChallengeSolutionProps {
  onCtaClick: () => void;
}

export const ChallengeSolution: React.FC<ChallengeSolutionProps> = ({ onCtaClick }) => {
  return (
    <section id="challenge" className="py-20 bg-[#0a0a0a] text-white border-y border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-6 h-[2px] bg-[#C8102E]" />
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#C8102E] font-bold">
              The Reality Check vs. The Solution
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-syne font-black text-white tracking-tight leading-tight uppercase">
            Stop wasting energy on <br className="hidden sm:inline" />
            fragmented digital pieces<span className="text-[#C8102E]">.</span>
          </h2>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* THE REALITY CHECK (The Problem - White Foundation Card) */}
          <div className="bg-white text-black p-8 sm:p-10 border border-white/10 shadow-2xl relative group">
            <div className="flex items-center space-x-3 mb-6 border-b border-black/10 pb-4">
              <div className="w-10 h-10 bg-[#050505] text-white flex items-center justify-center font-bold">
                <AlertCircle size={20} className="text-[#C8102E]" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-syne font-black uppercase text-black tracking-tight">The Reality Check</h3>
                <p className="text-[10px] font-mono text-black/60 uppercase tracking-[0.2em] font-bold">01 / The Fragmented Trap</p>
              </div>
            </div>

            <p className="text-black/80 text-sm leading-relaxed mb-6 font-sans">
              In today’s digital world, running a successful business takes more than just a pretty website or a random social media post. It requires a connected ecosystem where your strategy, your platforms, and your internal processes all talk to each other.
            </p>

            <div className="p-5 bg-[#f5f5f5] border-l-4 border-[#C8102E] text-black text-xs space-y-2 font-mono">
              <p className="font-bold text-black uppercase tracking-wider">When things are fragmented:</p>
              <ul className="list-disc list-inside space-y-1 text-black/70">
                <li>Disjointed customer & guest experiences</li>
                <li>Wasted marketing budgets and lost leads</li>
                <li>Burnout from manual, chaos-ridden internal tasks</li>
              </ul>
            </div>
          </div>

          {/* HOW I HELP (The Solution - Crimson Red Block) */}
          <div className="bg-[#C8102E] text-white p-8 sm:p-10 border border-white/10 shadow-2xl relative group overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-6 border-b border-white/20 pb-4">
                <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-bold">
                  <CheckCircle2 size={20} className="text-[#ff8093]" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-syne font-black uppercase text-white tracking-tight">How I Help</h3>
                  <p className="text-[10px] font-mono text-white/80 uppercase tracking-[0.2em] font-bold">02 / The XIII Solution</p>
                </div>
              </div>

              <p className="text-white/95 text-sm leading-relaxed mb-6 font-sans">
                I operate as your end-to-end partner. We move beyond disconnected tasks to design, build, and manage your brand from the inside out. By merging creative design with solid operational workflows, I help you build a seamless, efficient engine for your business.
              </p>

              <div className="p-5 bg-black/40 border border-white/20 text-white text-xs space-y-2 font-mono">
                <p className="font-bold text-white uppercase tracking-wider">The Connected Advantage:</p>
                <ul className="list-disc list-inside space-y-1 text-white/90">
                  <li>Cohesive visual identity & high-converting platforms</li>
                  <li>Streamlined customer service & booking workflows</li>
                  <li>Scalable digital engine built for direct revenue</li>
                </ul>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={onCtaClick}
                className="bg-white text-[#C8102E] hover:bg-[#050505] hover:text-white px-6 py-3.5 text-xs font-syne uppercase tracking-wider font-bold transition-all shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Connect Your Ecosystem</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

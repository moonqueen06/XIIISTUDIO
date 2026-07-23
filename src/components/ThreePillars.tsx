import React from 'react';
import { Palette, Layout, Cpu, Check, ArrowRight } from 'lucide-react';
import { PILLARS_DATA } from '../data/servicesData';

interface ThreePillarsProps {
  onSelectPillar: (pillarTitle: string) => void;
}

export const ThreePillars: React.FC<ThreePillarsProps> = ({ onSelectPillar }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Palette':
        return <Palette className="w-5 h-5 text-white" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-white" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-white" />;
      default:
        return <Palette className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="pillars" className="py-24 bg-[#0a0a0a] text-white relative overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-[2px] bg-[#800020]" />
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#800020] font-bold">
              03 / The Three Pillars
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-syne font-black text-white tracking-tighter uppercase leading-none">
            Architecture of <br />
            Visual Systems<span className="text-[#800020]">.</span>
          </h2>
          <p className="text-white/70 text-sm font-mono uppercase tracking-widest max-w-xl">
            A holistic 3-stage ecosystem taking your business from raw vision to an automated brand engine.
          </p>
        </div>

        {/* Pillars Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PILLARS_DATA.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-[#050505] p-8 border border-white/10 hover:border-[#800020] transition-all duration-300 flex flex-col justify-between group relative shadow-2xl"
            >
              {/* Top Pillar Number & Icon */}
              <div>
                <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                  <span className="font-syne text-4xl font-black text-[#800020]">
                    {pillar.number}
                  </span>
                  <div className="p-3 bg-[#800020] text-white shadow-lg">
                    {getIcon(pillar.icon)}
                  </div>
                </div>

                <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#f5a6b0] font-bold mb-1">
                  {pillar.subtitle}
                </p>
                
                <h3 className="text-2xl font-serif font-bold text-white mb-4">
                  {pillar.title}
                </h3>

                <p className="text-white/70 text-xs leading-relaxed mb-6 font-sans">
                  {pillar.description}
                </p>

                {/* Key Outcomes Checklist */}
                <div className="space-y-2.5 pt-4 border-t border-white/10 font-mono">
                  <p className="text-[9px] text-white/40 uppercase tracking-[0.25em] font-bold">
                    Core Outcomes
                  </p>
                  {pillar.keyOutcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-[11px] text-white/90">
                      <Check size={12} className="text-[#800020] shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-8">
                <button
                  onClick={() => onSelectPillar(pillar.title)}
                  className="w-full bg-[#800020] hover:bg-[#a00028] text-white py-3.5 px-4 text-[10px] font-mono uppercase tracking-[0.2em] font-bold transition-all flex items-center justify-center space-x-2 shadow-lg"
                >
                  <span>Inquire About {pillar.number}</span>
                  <ArrowRight size={12} />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

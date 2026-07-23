import React from 'react';
import { PRICING_TABLE_DATA, SPECIALIZATION_SECTORS } from '../data/servicesData';
import { Building2, Layers, ShieldCheck, Sparkles } from 'lucide-react';

interface PricingTableProps {
  onSelectService: (serviceCategory: string) => void;
}

export const PricingTable: React.FC<PricingTableProps> = ({ onSelectService }) => {
  return (
    <section id="pricing" className="py-24 bg-[#050505] text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-[2px] bg-[#800020]" />
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#800020] font-bold">
              06 / A La Carte Baseline
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-syne font-black text-white tracking-tighter uppercase leading-none">
            Transparent Matrix<span className="text-[#800020]">.</span>
          </h2>
          <p className="text-white/70 text-xs font-mono uppercase tracking-widest mt-4 max-w-xl">
            Prices scale transparently based on project scope, custom animation requirements, and system integrations.
          </p>
        </div>

        {/* Pricing Matrix Table */}
        <div className="overflow-x-auto mb-20 border border-white/10 bg-[#0a0a0a]">
          <table className="w-full text-left border-collapse min-w-[650px]">
            <thead>
              <tr className="bg-[#800020] text-white border-b border-white/20 font-mono text-xs uppercase tracking-[0.2em]">
                <th className="py-4 px-6 font-bold">
                  Service Category
                </th>
                <th className="py-4 px-6 font-bold">
                  Small Business / Startup
                </th>
                <th className="py-4 px-6 font-bold">
                  Mid-Market Scale
                </th>
                <th className="py-4 px-6 font-bold text-[#f5a6b0]">
                  Luxury & Custom Scope
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-xs font-mono">
              {PRICING_TABLE_DATA.map((row, idx) => (
                <tr
                  key={idx}
                  onClick={() => onSelectService(row.category)}
                  className="hover:bg-white/5 transition-colors cursor-pointer group"
                >
                  <td className="py-5 px-6 font-syne font-bold text-white group-hover:text-[#f5a6b0] transition-colors flex items-center space-x-2">
                    <span>{row.category}</span>
                  </td>
                  <td className="py-5 px-6 text-white/70">
                    {row.smallBiz}
                  </td>
                  <td className="py-5 px-6 text-white/70">
                    {row.mediumProj}
                  </td>
                  <td className="py-5 px-6 text-[#f5a6b0] font-bold bg-[#800020]/20">
                    {row.luxuryFull}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* SPECIALIZATION SECTORS SECTION */}
        <div id="specialization" className="pt-12 border-t border-white/10">
          <div className="mb-10">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-[2px] bg-[#800020]" />
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#800020] font-bold">
                07 / Sector Focus
              </span>
            </div>
            <h3 className="text-3xl sm:text-5xl font-syne font-black text-white uppercase tracking-tight">
              Primary Specializations & Sectors
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SPECIALIZATION_SECTORS.map((sector, idx) => (
              <div
                key={idx}
                className={`p-6 border transition-all ${
                  sector.primary
                    ? 'bg-[#800020] text-white border-white/20 shadow-2xl relative overflow-hidden'
                    : 'bg-[#0a0a0a] text-white border-white/10 hover:border-white/30'
                }`}
              >
                {sector.primary && (
                  <div className="absolute top-3 right-3 bg-black text-[#f5a6b0] border border-white/20 px-3 py-0.5 text-[8px] font-mono font-bold uppercase tracking-[0.25em]">
                    CORE FOCUS
                  </div>
                )}

                <div className="flex items-center space-x-3 mb-3">
                  <Building2 size={20} className={sector.primary ? 'text-[#f5a6b0]' : 'text-[#800020]'} />
                  <h4 className="text-lg font-serif font-bold text-white">
                    {sector.title}
                  </h4>
                </div>

                <p className={`text-xs leading-relaxed font-sans ${sector.primary ? 'text-white/90' : 'text-white/70'}`}>
                  {sector.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

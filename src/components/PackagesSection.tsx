import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight, Calculator } from 'lucide-react';
import { PACKAGES_DATA } from '../data/servicesData';

interface PackagesSectionProps {
  onSelectPackage: (packageTitle: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onSelectPackage }) => {
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const addonsList = [
    { id: 'brand', label: 'Brand Identity Blueprint', price: 1200 },
    { id: 'web', label: 'Custom Mobile Web Platform', price: 2500 },
    { id: 'seo', label: 'SEO & Google Workspace Integration', price: 650 },
    { id: 'ops', label: 'CRM & Guest Booking Automation', price: 1500 },
  ];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculatedTotal = selectedAddons.reduce((acc, currId) => {
    const item = addonsList.find((a) => a.id === currId);
    return acc + (item ? item.price : 0);
  }, 0);

  return (
    <section id="packages" className="py-24 bg-[#0a0a0a] text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-[2px] bg-[#800020]" />
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#800020] font-bold">
              05 / Engagement Models
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-syne font-black text-white tracking-tighter uppercase leading-none">
            Tailored Studio Packages<span className="text-[#800020]">.</span>
          </h2>
          <p className="text-white/70 text-xs font-mono uppercase tracking-widest mt-4 max-w-xl">
            Choose the model that fits your stage of growth—from ground-up buildouts to ongoing growth partnerships.
          </p>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {PACKAGES_DATA.map((pkg) => (
            <div
              key={pkg.id}
              className={`p-8 flex flex-col justify-between transition-all duration-300 relative border ${
                pkg.highlight
                  ? 'bg-[#800020] text-white border-white/20 shadow-2xl scale-[1.02]'
                  : 'bg-[#050505] text-white border-white/10 hover:border-white/30 shadow-2xl'
              }`}
            >
              {/* Highlight Badge */}
              {pkg.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-black text-white border border-white/20 px-4 py-1 text-[9px] font-mono font-bold uppercase tracking-[0.25em] shadow-md flex items-center space-x-1">
                  <Sparkles size={12} className="text-[#f5a6b0]" />
                  <span>Flagship Growth Model</span>
                </div>
              )}

              <div>
                {/* Header */}
                <div className="mb-6 border-b border-white/10 pb-4">
                  <span className={`text-[9px] font-mono uppercase tracking-[0.25em] font-bold px-2.5 py-1 inline-block mb-3 ${
                    pkg.highlight ? 'bg-black text-[#f5a6b0]' : 'bg-[#800020] text-white'
                  }`}>
                    {pkg.badge}
                  </span>
                  
                  <h3 className="text-2xl font-syne font-bold uppercase text-white">
                    {pkg.title}
                  </h3>

                  <p className={`text-xs mt-1 font-mono uppercase tracking-wider ${pkg.highlight ? 'text-white/80' : 'text-white/50'}`}>
                    {pkg.targetAudience}
                  </p>
                </div>

                {/* Investment */}
                <div className={`p-4 mb-6 border ${pkg.highlight ? 'bg-black/30 border-white/20' : 'bg-[#0a0a0a] border-white/10'}`}>
                  <p className="text-[9px] font-mono uppercase tracking-[0.25em] text-white/60">
                    Investment Baseline
                  </p>
                  <p className="text-2xl font-syne font-bold text-white">
                    {pkg.investment}
                  </p>
                </div>

                <p className="text-xs leading-relaxed mb-6 font-sans text-white/80">
                  {pkg.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-3 pt-4 border-t border-white/10 font-mono">
                  <p className="text-[9px] font-mono uppercase tracking-[0.25em] font-bold text-white/50">
                    Included Scope
                  </p>
                  {pkg.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 text-[11px] text-white/90">
                      <Check size={14} className={`shrink-0 mt-0.5 ${pkg.highlight ? 'text-[#f5a6b0]' : 'text-[#800020]'}`} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-8">
                <button
                  onClick={() => onSelectPackage(pkg.title)}
                  className={`w-full py-3.5 px-4 text-[10px] font-mono uppercase tracking-[0.2em] font-bold transition-all flex items-center justify-center space-x-2 ${
                    pkg.highlight
                      ? 'bg-white text-[#800020] hover:bg-black hover:text-white shadow-xl'
                      : 'bg-[#800020] hover:bg-[#a00028] text-white'
                  }`}
                >
                  <span>{pkg.ctaText}</span>
                  <ArrowRight size={14} />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* INTERACTIVE ESTIMATOR BOX */}
        <div className="bg-[#050505] p-8 border border-white/10 shadow-2xl">
          <div className="flex items-center space-x-3 mb-6 border-b border-white/10 pb-4">
            <div className="w-10 h-10 bg-[#800020] text-white flex items-center justify-center font-bold">
              <Calculator size={20} />
            </div>
            <div>
              <h3 className="text-xl font-syne font-bold text-white uppercase">Interactive Project Estimator</h3>
              <p className="text-[10px] font-mono text-white/50 uppercase tracking-widest">Select desired modules to calculate baseline scope</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {addonsList.map((addon) => {
              const active = selectedAddons.includes(addon.id);
              return (
                <button
                  key={addon.id}
                  onClick={() => toggleAddon(addon.id)}
                  className={`p-4 text-left border text-xs font-mono transition-all flex flex-col justify-between ${
                    active
                      ? 'bg-[#800020] text-white border-[#800020] shadow-xl'
                      : 'bg-[#0a0a0a] text-white/80 border-white/10 hover:border-white/30'
                  }`}
                >
                  <span className="font-mono text-xs font-bold mb-2">{addon.label}</span>
                  <span className={active ? 'text-[#f5a6b0] font-bold' : 'text-[#800020] font-bold'}>
                    +${addon.price.toLocaleString()}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-white/10 gap-4 font-mono">
            <div>
              <span className="text-[10px] text-white/50 uppercase tracking-widest block">Estimated Scope Total:</span>
              <span className="text-3xl font-syne font-bold text-[#800020]">
                ${calculatedTotal > 0 ? calculatedTotal.toLocaleString() : '0 (Select modules)'}
              </span>
            </div>

            {calculatedTotal > 0 && (
              <button
                onClick={() => onSelectPackage(`Custom Estimate: $${calculatedTotal.toLocaleString()}`)}
                className="bg-[#800020] hover:bg-[#a00028] text-white px-6 py-3.5 text-[10px] font-mono uppercase tracking-[0.2em] font-bold transition-all shadow-xl"
              >
                Inquire with This Scope
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

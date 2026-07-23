import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../data/portfolioData';
import { PortfolioItem, PortfolioCategory } from '../types';
import { ExternalLink, Eye, X, CheckCircle2, ArrowRight } from 'lucide-react';

interface PortfolioGridProps {
  onSelectProject: (project: PortfolioItem) => void;
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('all');
  const [lightboxItem, setLightboxItem] = useState<PortfolioItem | null>(null);

  const categories: { id: PortfolioCategory; label: string }[] = [
    { id: 'all', label: 'All Works' },
    { id: 'brand-identity', label: 'Brand Identity' },
    { id: 'web-app', label: 'Web Systems' },
    { id: 'photography', label: 'Photography & Art' },
    { id: 'operations', label: 'Operations & CRM' },
  ];

  const filteredItems = activeCategory === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-[#050505] text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-[2px] bg-[#C8102E]" />
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#C8102E] font-bold">
                04 / Gallery Showcase
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-syne font-black text-white tracking-tighter uppercase leading-none">
              Selected Works<span className="text-[#C8102E]">.</span>
            </h2>
          </div>

          <p className="text-white/60 text-xs font-mono uppercase tracking-widest max-w-md">
            Branding systems, web engineering, fine art photography, and operational workflows for ambitious brands.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-10 scrollbar-none border-b border-white/10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-[10px] font-mono uppercase tracking-[0.2em] whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#C8102E] text-white font-bold shadow-lg'
                  : 'bg-[#0a0a0a] text-white/60 hover:text-white border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* High-End Editorial Coming Soon Showcase */}
        <div className="bg-[#0a0a0a] border border-white/10 p-8 sm:p-16 text-center space-y-8 relative overflow-hidden shadow-2xl">
          {/* Subtle Background Accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8102E]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center space-x-2 bg-[#C8102E] text-white px-4 py-1.5 text-[10px] font-mono font-bold uppercase tracking-[0.25em]">
            <span>Archive Updating</span>
          </div>

          <div className="space-y-4">
            <h3 className="text-5xl sm:text-7xl lg:text-8xl font-syne font-black text-white uppercase tracking-tighter leading-none">
              SELECTED WORKS <br />
              <span className="text-[#C8102E]">COMING SOON...</span>
            </h3>
            <p className="text-white/70 text-xs sm:text-sm font-mono uppercase tracking-widest max-w-xl mx-auto leading-relaxed pt-2">
              Our curated portfolio of brand identity systems, custom web engineering, fine art photography, and operational CRM workflows is currently undergoing a complete archive refresh.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="bg-[#C8102E] hover:bg-[#d91635] text-white px-8 py-4 text-xs font-syne uppercase tracking-wider font-bold transition-all shadow-xl flex items-center space-x-2"
            >
              <span>Request Private Portfolio Deck</span>
              <ArrowRight size={14} />
            </a>

            <a
              href="#contact"
              className="border border-white/20 hover:border-white text-white px-8 py-4 text-xs font-syne uppercase tracking-wider font-bold transition-all flex items-center space-x-2"
            >
              <span>Direct Project Inquiry</span>
            </a>
          </div>

          {/* 3 Pillar Summary Cards */}
          <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left border-t border-white/10 mt-12 font-syne">
            <div className="p-6 bg-[#050505] border border-white/10 space-y-2">
              <span className="text-[10px] font-mono text-[#ff8093] uppercase tracking-widest font-bold">PILLAR 01</span>
              <h4 className="text-lg font-black uppercase text-white">Brand Architecture</h4>
              <p className="text-xs font-sans text-white/60 leading-relaxed">Identity guidelines, visual storytelling, and luxury collateral for forward-thinking brands.</p>
            </div>

            <div className="p-6 bg-[#050505] border border-white/10 space-y-2">
              <span className="text-[10px] font-mono text-[#ff8093] uppercase tracking-widest font-bold">PILLAR 02</span>
              <h4 className="text-lg font-black uppercase text-white">Digital Web Systems</h4>
              <p className="text-xs font-sans text-white/60 leading-relaxed">High-conversion web platforms, custom booking engines, and responsive digital experiences.</p>
            </div>

            <div className="p-6 bg-[#050505] border border-white/10 space-y-2">
              <span className="text-[10px] font-mono text-[#ff8093] uppercase tracking-widest font-bold">PILLAR 03</span>
              <h4 className="text-lg font-black uppercase text-white">Operational Strategy</h4>
              <p className="text-xs font-sans text-white/60 leading-relaxed">CRM integrations, automated lead funnels, and streamlined administrative workflows.</p>
            </div>
          </div>

        </div>

      </div>

      {/* LIGHTBOX CASE STUDY MODAL */}
      {lightboxItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="bg-[#0a0a0a] text-white max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-white/20 shadow-2xl relative p-6 sm:p-8">
            
            {/* Close Button */}
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 p-2.5 bg-white/10 hover:bg-[#C8102E] text-white transition-colors"
            >
              <X size={18} />
            </button>

            {/* Header Info */}
            <div className="space-y-2 mb-6 border-b border-white/10 pb-4">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#C8102E] font-bold">
                {lightboxItem.categoryLabel} • {lightboxItem.year}
              </span>
              <h3 className="text-3xl sm:text-4xl font-syne font-black text-white uppercase">
                {lightboxItem.title}
              </h3>
              <p className="text-xs font-mono text-white/50 uppercase tracking-widest">
                Client: {lightboxItem.client}
              </p>
            </div>

            {/* Image */}
            <div className="overflow-hidden mb-6 border border-white/10 bg-black">
              <img
                src={lightboxItem.imageUrl}
                alt={lightboxItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-[300px] sm:h-[380px] object-cover"
              />
            </div>

            {/* Summary */}
            <p className="text-base font-serif text-white/90 leading-relaxed mb-6 italic border-l-2 border-[#C8102E] pl-4 py-1">
              "{lightboxItem.summary}"
            </p>

            {/* Breakdown Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/10 mb-8 font-mono">
              {lightboxItem.challenge && (
                <div className="space-y-2">
                  <h4 className="text-[10px] uppercase tracking-[0.25em] text-[#C8102E] font-bold">
                    The Challenge
                  </h4>
                  <p className="text-xs text-white/80 leading-relaxed font-sans">
                    {lightboxItem.challenge}
                  </p>
                </div>
              )}

              {lightboxItem.solution && (
                <div className="space-y-2">
                  <h4 className="text-[10px] uppercase tracking-[0.25em] text-white font-bold">
                    The XIII Solution
                  </h4>
                  <p className="text-xs text-white/80 leading-relaxed font-sans">
                    {lightboxItem.solution}
                  </p>
                </div>
              )}
            </div>

            {lightboxItem.impact && (
              <div className="p-4 bg-[#C8102E]/20 border border-[#C8102E]/40 mb-8 flex items-start space-x-3 font-mono">
                <CheckCircle2 size={16} className="text-[#C8102E] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] font-bold text-white uppercase tracking-wider">Key Result & Impact</p>
                  <p className="text-xs text-white/80 font-sans mt-0.5">{lightboxItem.impact}</p>
                </div>
              </div>
            )}

            {/* Action */}
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => {
                  onSelectProject(lightboxItem);
                  setLightboxItem(null);
                }}
                className="bg-[#C8102E] hover:bg-[#d91635] text-white px-6 py-3.5 text-xs font-syne uppercase tracking-wider font-bold transition-all flex items-center space-x-2 shadow-xl"
              >
                <span>Request Similar Project</span>
                <ArrowRight size={14} />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

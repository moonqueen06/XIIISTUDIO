import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../data/portfolioData';
import { PortfolioItem } from '../types';
import { ChevronLeft, ChevronRight, Eye, Sparkles, X, ArrowUpRight } from 'lucide-react';
import { playSubtleClick } from '../utils/audio';

interface MobileCinematicViewProps {
  onExitCinematic: () => void;
  onSelectProjectForContact: (title: string) => void;
  isSoundEnabled: boolean;
}

export const MobileCinematicView: React.FC<MobileCinematicViewProps> = ({
  onExitCinematic,
  onSelectProjectForContact,
  isSoundEnabled,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [detailOpen, setDetailOpen] = useState(false);

  const currentItem = PORTFOLIO_ITEMS[currentIndex];

  const handleNext = () => {
    playSubtleClick(isSoundEnabled);
    setCurrentIndex((prev) => (prev + 1) % PORTFOLIO_ITEMS.length);
  };

  const handlePrev = () => {
    playSubtleClick(isSoundEnabled);
    setCurrentIndex((prev) => (prev - 1 + PORTFOLIO_ITEMS.length) % PORTFOLIO_ITEMS.length);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black text-white flex flex-col justify-between overflow-hidden animate-in fade-in duration-300">
      
      {/* Top Header */}
      <div className="p-4 flex items-center justify-between border-b border-white/10 bg-black/80 backdrop-blur-md z-20">
        <div className="flex items-center space-x-2">
          <span className="font-serif font-black text-2xl text-white tracking-tighter">XIII</span>
          <span className="text-[10px] font-mono text-[#f5a6b0] uppercase tracking-widest bg-[#800020] px-2 py-0.5 rounded">
            Cinematic Mobile Gallery
          </span>
        </div>

        <button
          onClick={onExitCinematic}
          className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      {/* Main Deck Slide Card */}
      <div className="relative flex-1 flex items-center justify-center p-4">
        
        {/* Background Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#800020]/30 via-black to-black pointer-events-none" />

        <div className="relative w-full max-w-sm h-[75vh] max-h-[580px] rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-stone-900 flex flex-col justify-between group">
          
          {/* Card Image */}
          <div className="relative h-2/3 overflow-hidden bg-black">
            <img
              src={currentItem.imageUrl}
              alt={currentItem.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-black/30" />
            
            {/* Counter Badge */}
            <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-white border border-white/10 font-bold">
              {currentIndex + 1} / {PORTFOLIO_ITEMS.length}
            </div>

            <div className="absolute top-4 right-4 bg-[#800020] px-3 py-1 rounded-full text-[10px] font-mono text-white font-bold uppercase tracking-wider shadow">
              {currentItem.categoryLabel}
            </div>
          </div>

          {/* Card Content */}
          <div className="p-6 flex-1 flex flex-col justify-between bg-stone-900 text-white space-y-3">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-white/50">
                {currentItem.client} • {currentItem.year}
              </p>
              <h3 className="text-2xl font-serif font-bold text-white leading-tight">
                {currentItem.title}
              </h3>
              <p className="text-xs text-white/70 line-clamp-2 font-sans mt-1.5 leading-relaxed">
                {currentItem.summary}
              </p>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => setDetailOpen(true)}
                className="text-xs font-mono text-[#f5a6b0] uppercase font-bold flex items-center space-x-1 hover:underline"
              >
                <Eye size={14} />
                <span>View Details</span>
              </button>

              <button
                onClick={() => {
                  onSelectProjectForContact(currentItem.title);
                  onExitCinematic();
                }}
                className="bg-[#800020] hover:bg-[#6b0f1a] text-white px-4 py-2 rounded-full text-[10px] font-mono uppercase font-bold tracking-wider flex items-center space-x-1"
              >
                <span>Inquire</span>
                <ArrowUpRight size={12} />
              </button>
            </div>
          </div>

        </div>

        {/* Floating Navigation Controls */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/80 text-white border border-white/20 shadow-xl active:scale-95"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/80 text-white border border-white/20 shadow-xl active:scale-95"
        >
          <ChevronRight size={22} />
        </button>

      </div>

      {/* Bottom Progress Dock */}
      <div className="p-4 bg-black border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/70">
        <button
          onClick={onExitCinematic}
          className="text-white hover:text-[#f5a6b0] uppercase font-bold"
        >
          ← Exit to Standard Scroll
        </button>

        <div className="flex space-x-1.5">
          {PORTFOLIO_ITEMS.map((_, idx) => (
            <span
              key={idx}
              onClick={() => {
                playSubtleClick(isSoundEnabled);
                setCurrentIndex(idx);
              }}
              className={`h-1.5 rounded-full cursor-pointer transition-all ${
                idx === currentIndex ? 'w-6 bg-[#800020]' : 'w-1.5 bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>

      {/* DETAIL DRAWER FOR MOBILE */}
      {detailOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl p-6 overflow-y-auto flex flex-col justify-between animate-in slide-in-from-bottom duration-200">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-mono text-[#f5a6b0] uppercase font-bold">
                {currentItem.categoryLabel}
              </span>
              <button
                onClick={() => setDetailOpen(false)}
                className="p-2 rounded-full bg-white/10 text-white"
              >
                <X size={18} />
              </button>
            </div>

            <h2 className="text-3xl font-serif font-bold text-white">{currentItem.title}</h2>
            <p className="text-xs font-mono text-white/60">Client: {currentItem.client}</p>

            <img
              src={currentItem.imageUrl}
              alt={currentItem.title}
              referrerPolicy="no-referrer"
              className="w-full h-48 object-cover rounded-xl border border-white/10"
            />

            <p className="text-sm font-serif italic text-white/90">"{currentItem.summary}"</p>

            {currentItem.challenge && (
              <div className="space-y-1 text-xs">
                <p className="font-mono text-[#f5a6b0] uppercase font-bold">Challenge</p>
                <p className="text-white/80 font-sans">{currentItem.challenge}</p>
              </div>
            )}

            {currentItem.solution && (
              <div className="space-y-1 text-xs">
                <p className="font-mono text-white uppercase font-bold">XIII Solution</p>
                <p className="text-white/80 font-sans">{currentItem.solution}</p>
              </div>
            )}
          </div>

          <div className="pt-6">
            <button
              onClick={() => {
                setDetailOpen(false);
                onSelectProjectForContact(currentItem.title);
                onExitCinematic();
              }}
              className="w-full bg-[#800020] text-white py-3.5 rounded-xl text-xs uppercase font-mono font-bold tracking-widest text-center"
            >
              Request Project Like This
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

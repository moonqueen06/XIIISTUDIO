import React, { useEffect, useState } from 'react';
import { Moon } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsFading(true);
          setTimeout(() => {
            onComplete();
          }, 600);
          return 100;
        }
        return prev + 3;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#050505] text-white flex flex-col items-center justify-center p-6 transition-opacity duration-500 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Rotating Moon Graphic Container */}
      <div className="relative mb-8 flex items-center justify-center">
        {/* Outer glowing halo ring */}
        <div className="absolute w-36 h-36 rounded-full border border-[#C8102E]/30 animate-ping opacity-20" />
        <div className="absolute w-32 h-32 rounded-full border border-white/10 animate-spin [animation-duration:8s]" />

        {/* Rotating Moon Icon */}
        <div className="relative z-10 w-20 h-20 bg-[#0a0a0a] border border-[#C8102E]/50 rounded-full flex items-center justify-center shadow-[0_0_35px_rgba(200,16,46,0.3)] animate-spin [animation-duration:14s]">
          <Moon size={36} className="text-[#C8102E] transform -rotate-12 drop-shadow-[0_0_10px_rgba(200,16,46,0.8)]" />
        </div>
      </div>

      {/* Brand Title */}
      <div className="text-center space-y-2 mb-6">
        <h1 className="font-syne font-black text-5xl sm:text-6xl tracking-tighter uppercase text-white select-none">
          XIII<span className="text-[#C8102E]">.</span>
        </h1>
        <p className="font-syne font-black text-xs sm:text-sm uppercase tracking-[0.25em] text-white">
          ART & DESIGN <span className="text-[#C8102E]">STUDIO</span>
        </p>
      </div>

      {/* Slogan requested by user */}
      <div className="text-center max-w-sm mb-8 border-y border-white/10 py-3.5 px-4">
        <p className="font-serif italic text-white/90 text-sm sm:text-base tracking-wide">
          "My studio is wherever you are."
        </p>
        <p className="font-syne text-[10px] sm:text-xs uppercase tracking-wider text-white/60 mt-1 font-semibold">
          Based in Bocas del Toro • Moving Worldwide
        </p>
      </div>

      {/* Progress Bar & Status */}
      <div className="w-64 space-y-2 text-center">
        <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#C8102E] transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex items-center justify-between text-[10px] font-syne uppercase tracking-wider text-white/50 font-semibold">
          <span>Initializing Experience</span>
          <span className="text-[#C8102E] font-bold">{progress}%</span>
        </div>
      </div>
    </div>
  );
};

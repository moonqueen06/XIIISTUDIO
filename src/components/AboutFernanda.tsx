import React from 'react';
import { GraduationCap, MapPin, Sparkles, Compass } from 'lucide-react';

export const AboutFernanda: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#050505] text-white relative overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Credentials & Key Focus (Text-driven block) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-[2px] bg-[#C8102E]" />
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#C8102E] font-bold">
                02 / Studio Founder & Lead
              </span>
            </div>

            <div className="bg-[#0a0a0a] border border-white/10 p-8 space-y-6 shadow-2xl">
              <div className="border-b border-white/10 pb-4">
                <p className="text-[9px] font-mono text-[#ff8093] uppercase tracking-[0.25em]">
                  Studio Lead Profile
                </p>
                <p className="font-syne text-3xl font-black uppercase text-white tracking-tight mt-1">
                  Fernanda<span className="text-[#C8102E]">.</span>
                </p>
                <p className="text-xs font-serif italic text-white/70 mt-1">
                  Multidisciplinary Artist & Digital Strategist
                </p>
              </div>

              {/* Quick Badges */}
              <div className="space-y-4 font-mono">
                <div className="bg-[#050505] border border-white/10 p-4 flex items-start space-x-3">
                  <MapPin size={18} className="text-[#C8102E] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[10px] uppercase font-bold text-white tracking-wider">Based in Bocas del Toro</p>
                    <p className="text-[9px] text-[#ff8093] uppercase tracking-widest mt-0.5 font-bold">Moving Worldwide</p>
                  </div>
                </div>

                <div className="bg-[#050505] border border-white/10 p-4 flex items-start space-x-3">
                  <GraduationCap size={18} className="text-[#C8102E] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[10px] uppercase font-bold text-white tracking-wider">UWC Maastricht & Ringling</p>
                    <p className="text-[9px] text-white/50 uppercase tracking-widest mt-0.5">Visual Studies & Fine Arts</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#C8102E]/20 border border-[#C8102E] text-xs font-mono text-white/90 space-y-1">
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#ff8093] font-bold">Specialized Operational Field</p>
                <p className="text-xs">Tourism, Hospitality, Real Estate & E-Commerce Systems</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Story Narrative ("HI, I'M FERNANDA") */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="text-4xl sm:text-6xl font-syne font-black text-white tracking-tighter uppercase leading-tight">
                Hi, I’m Fernanda<span className="text-[#C8102E]">.</span>
              </h2>

              <p className="text-xl sm:text-2xl font-serif text-[#ff8093] italic font-light mt-2">
                "My studio is wherever you are."
              </p>
            </div>

            <div className="space-y-4 text-white/80 font-sans text-sm sm:text-base leading-relaxed border-l-2 border-[#C8102E] pl-6 py-2">
              <p>
                Based in <strong className="text-white">Bocas del Toro</strong> and moving worldwide, my journey is a fusion of fine art and structured operational strategy. My formal introduction to the arts started with an IB at <strong className="text-white">UWC Maastricht</strong> in the Netherlands, followed by visual studies at <strong className="text-white">Ringling College of Art and Design</strong>.
              </p>

              <p>
                While I have a deep love for fine arts, photography, and digital direction, my mission is applying creative clarity to real-world business growth.
              </p>

              <p>
                I pair artistic foundation with tech systems—mastering web engineering, marketing architecture, and CRM creation. <strong className="text-white underline decoration-[#C8102E] underline-offset-4">I don’t just design beautiful brands—I build the backend workflows to make them operate effortlessly anywhere on earth.</strong>
              </p>
            </div>

            {/* Highlights Bar */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono">
              <div className="space-y-1 bg-[#0a0a0a] p-4 border border-white/10">
                <p className="text-[9px] uppercase tracking-[0.25em] text-[#C8102E] font-bold">Core Fine Arts</p>
                <p className="text-xs font-semibold text-white">Photography, Visual Direction & Brand Systems</p>
              </div>
              <div className="space-y-1 bg-[#0a0a0a] p-4 border border-white/10">
                <p className="text-[9px] uppercase tracking-[0.25em] text-[#C8102E] font-bold">Core Systems</p>
                <p className="text-xs font-semibold text-white">Web Engineering, CRM & Operational Workflows</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

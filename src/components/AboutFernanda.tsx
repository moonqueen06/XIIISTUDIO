import React, { useState } from 'react';
import { Download, ArrowUpRight, Cpu, Palette, Code2, Sparkles, Layers, PenTool, CheckCircle2 } from 'lucide-react';

export const AboutFernanda: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'adobe' | 'systems' | 'artistry' | 'media'>('all');

  const capabilities = [
    {
      category: 'adobe',
      categoryLabel: 'ADOBE CREATIVE SUITE',
      mastery: '95% MASTERY',
      skills: ['Photoshop', 'Illustrator', 'InDesign', 'Premiere Pro', 'After Effects'],
      description: 'Master-level visual editing, vector graphics, print production, motion design, and video compositing.'
    },
    {
      category: 'systems',
      categoryLabel: 'WEB, CODE & SYSTEMS',
      mastery: '100% MASTERY',
      skills: ['Custom Web Apps', 'Figma (UI/UX)', 'HTML / CSS / JavaScript', 'WordPress & Wix', 'Booking Systems', 'CRM & API Integrations', 'Google Tools Suite'],
      description: 'Full-stack design and deployment of high-conversion digital platforms, booking engines, and CRM automations.'
    },
    {
      category: 'artistry',
      categoryLabel: 'FINE ARTISTRY & CRAFT',
      mastery: 'EXPERTISE',
      skills: ['Fine Art Painting', 'Printmaking', 'Product Mockups', 'Woodworking', 'Couture & Apparel Design'],
      description: 'Tactile physical craftsmanship spanning fine art mediums, architectural woodwork, and custom fashion design.'
    },
    {
      category: 'media',
      categoryLabel: 'MEDIA, STORY & MARKETING',
      mastery: 'STRATEGIC',
      skills: ['Concept Photography', 'Lighting Design', 'Video Editing', 'Scriptwriting', 'Creative Copywriting', 'Marketing Strategy'],
      description: 'End-to-end editorial production, campaign narrative development, and revenue-focused brand marketing.'
    }
  ];

  const filteredCapabilities = activeCategory === 'all' 
    ? capabilities 
    : capabilities.filter(c => c.category === activeCategory);

  return (
    <section id="about" className="py-20 md:py-28 bg-white text-black relative overflow-hidden border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION EYEBROW */}
        <div className="flex items-center space-x-3 mb-12">
          <div className="w-8 h-[2px] bg-[#C8102E]" />
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#C8102E] font-bold">
            02 / Studio Founder & Multidisciplinary Lead
          </span>
        </div>

        {/* TOP EDITORIAL STATEMENT + NARRATIVE */}
        <div className="max-w-4xl space-y-6 mb-12">
          <h2 className="text-4xl sm:text-6xl font-syne font-black text-black tracking-tight uppercase leading-[1.05]">
            DESIGN IS SOLVING PROBLEMS WITH EMPATHY AND CREATIVITY<span className="text-[#C8102E]">.</span>
          </h2>

          <p className="text-base sm:text-lg font-sans text-black/80 leading-relaxed border-l-2 border-[#C8102E] pl-4">
            I’m Fernanda—founder & creative director of XIII Studio. Based in <strong className="text-black">Bocas del Toro</strong> and moving worldwide, I bridge high-end brands with full-stack web development, software integrations, and growth marketing.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#contact"
              className="bg-[#C8102E] hover:bg-black text-white px-6 py-3.5 text-xs font-syne font-bold uppercase tracking-wider transition-all shadow-xl inline-flex items-center space-x-2"
            >
              <span>Initiate Dialogue</span>
              <ArrowUpRight size={14} />
            </a>

            <a
              href="#contact"
              className="border border-black/20 hover:border-[#C8102E] text-black hover:text-[#C8102E] px-5 py-3.5 text-xs font-syne font-bold uppercase tracking-wider transition-all inline-flex items-center space-x-2"
            >
              <Download size={14} />
              <span>Capabilities Deck</span>
            </a>
          </div>
        </div>

        {/* MULTIDISCIPLINARY CAPABILITIES DASHBOARD */}
        <div className="bg-[#f8f8f8] border border-black/10 p-6 sm:p-10 shadow-xl space-y-8">
          
          {/* Dashboard Header & Category Filter Buttons */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/10 pb-6">
            <div>
              <span className="text-[10px] font-mono text-[#C8102E] font-bold uppercase tracking-widest block mb-1">
                STUDIO KNOWLEDGE & SOFTWARE MATRIX
              </span>
              <h3 className="text-2xl sm:text-3xl font-syne font-black uppercase text-black tracking-tight">
                CAPABILITIES DASHBOARD<span className="text-[#C8102E]">.</span>
              </h3>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 font-syne text-[11px] font-bold uppercase">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-3.5 py-1.5 transition-all border ${
                  activeCategory === 'all'
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-black/70 border-black/10 hover:border-black'
                }`}
              >
                All Domains
              </button>
              <button
                onClick={() => setActiveCategory('adobe')}
                className={`px-3.5 py-1.5 transition-all border ${
                  activeCategory === 'adobe'
                    ? 'bg-[#C8102E] text-white border-[#C8102E]'
                    : 'bg-white text-black/70 border-black/10 hover:border-black'
                }`}
              >
                Adobe Suite
              </button>
              <button
                onClick={() => setActiveCategory('systems')}
                className={`px-3.5 py-1.5 transition-all border ${
                  activeCategory === 'systems'
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-black/70 border-black/10 hover:border-black'
                }`}
              >
                Code & Systems
              </button>
              <button
                onClick={() => setActiveCategory('artistry')}
                className={`px-3.5 py-1.5 transition-all border ${
                  activeCategory === 'artistry'
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-black/70 border-black/10 hover:border-black'
                }`}
              >
                Fine Arts & Couture
              </button>
              <button
                onClick={() => setActiveCategory('media')}
                className={`px-3.5 py-1.5 transition-all border ${
                  activeCategory === 'media'
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-black/70 border-black/10 hover:border-black'
                }`}
              >
                Media & Strategy
              </button>
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCapabilities.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-black/10 p-6 sm:p-8 space-y-4 hover:border-[#C8102E] transition-all shadow-sm group"
              >
                <div className="border-b border-black/10 pb-3">
                  <span className="text-[11px] font-mono text-[#C8102E] font-bold uppercase tracking-wider block">
                    {item.categoryLabel}
                  </span>
                </div>

                <p className="text-xs font-sans text-black/70 leading-relaxed">
                  {item.description}
                </p>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center space-x-1.5 bg-[#f2f2f2] group-hover:bg-[#C8102E]/10 group-hover:text-[#C8102E] text-black px-3 py-1 border border-black/10 text-xs font-syne font-bold uppercase tracking-wider transition-colors"
                    >
                      <CheckCircle2 size={12} className="text-[#C8102E] shrink-0" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};


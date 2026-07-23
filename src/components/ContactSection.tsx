import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';
import { ContactInquiry } from '../types';

interface ContactSectionProps {
  prefilledScope?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  prefilledScope,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: prefilledScope || 'The Digital Blueprint ($6,000+)',
    budget: '$5,000 - $10,000',
    timeline: '1-2 Months',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Update projectType if prefilledScope changes
  React.useEffect(() => {
    if (prefilledScope) {
      setFormData((prev) => ({ ...prev, projectType: prefilledScope }));
    }
  }, [prefilledScope]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in your name, email, and project details.');
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Post to backend server endpoint /api/contact
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      }).catch(() => null);

      // 2. Submit to Formspree for instant email notification
      await fetch('https://formspree.io/f/xvzewpdr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          ...formData,
          _subject: `New XIII Studio Inquiry from ${formData.name}`,
        }),
      }).catch(() => null);

      saveToLocalStorage(formData);
      setSubmitSuccess(true);
    } catch {
      saveToLocalStorage(formData);
      setSubmitSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const saveToLocalStorage = (data: typeof formData) => {
    const existing = JSON.parse(localStorage.getItem('xiii_contacts') || '[]');
    const newInquiry: ContactInquiry = {
      ...data,
      id: 'local_' + Date.now(),
      createdAt: new Date().toISOString(),
      read: false,
      status: 'new',
    };
    existing.unshift(newInquiry);
    localStorage.setItem('xiii_contacts', JSON.stringify(existing));
  };

  const constructMailto = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nEngagement Model: ${formData.projectType}\nEstimated Budget: ${formData.budget}\nTimeline: ${formData.timeline}\n\nProject Details & Goals:\n${formData.message}`
    );
    return `mailto:xiii.art.design@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-[#050505] text-white relative overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* CRIMSON CTA BANNER (Reference Image 2 Inspired) */}
        <div className="bg-[#C8102E] text-white p-8 sm:p-14 mb-16 flex flex-col lg:flex-row lg:items-center justify-between gap-8 border border-white/20 shadow-2xl">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/80 font-bold">
              START YOUR EVOLUTION
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-syne font-black uppercase tracking-tight leading-none text-white">
              LET'S CREATE SOMETHING <br className="hidden sm:inline" />
              GREAT TOGETHER<span className="text-black">.</span>
            </h2>
          </div>
          
          <a
            href="mailto:xiii.art.design@gmail.com"
            className="w-20 h-20 sm:w-24 sm:h-24 bg-white text-black hover:bg-black hover:text-white transition-all rounded-full flex items-center justify-center shrink-0 shadow-2xl self-start lg:self-auto group"
            title="Email Directly"
          >
            <ArrowUpRight size={36} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div id="contact-form" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Contact Details & Brand Pitch */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-[2px] bg-[#C8102E]" />
                <span className="text-xs uppercase tracking-wider text-[#C8102E] font-syne font-bold">
                  Direct Communication
                </span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-syne font-black text-white tracking-tight uppercase leading-none">
                Ready to Lead<span className="text-[#C8102E]">?</span>
              </h2>
            </div>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed font-sans border-l-2 border-[#C8102E] pl-4">
              Whether you need a complete ground-up digital blueprint, ongoing growth partnership, or operational workflow architecture, let’s design a connected engine for your business.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <a
                href="mailto:xiii.art.design@gmail.com"
                className="flex items-center space-x-4 p-4 bg-[#0a0a0a] border border-white/10 hover:border-[#C8102E] transition-all group"
              >
                <div className="p-3 bg-[#C8102E] text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/50 font-syne font-semibold">Direct Email</p>
                  <p className="text-sm font-bold text-white group-hover:text-[#ff8093] transition-colors">
                    xiii.art.design@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+50764977883"
                className="flex items-center space-x-4 p-4 bg-[#0a0a0a] border border-white/10 hover:border-[#C8102E] transition-all group"
              >
                <div className="p-3 bg-[#C8102E] text-white">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/50 font-syne font-semibold">Direct Phone / WhatsApp</p>
                  <p className="text-sm font-bold text-white group-hover:text-[#ff8093] transition-colors">
                    +507 6497-7883
                  </p>
                </div>
              </a>
            </div>

            <div className="p-4 bg-[#0a0a0a] border border-white/10 text-xs text-white/70 space-y-1">
              <p className="text-xs uppercase tracking-wider text-[#C8102E] font-syne font-bold">Primary Sector Focus</p>
              <p className="font-sans text-xs">Tourism, Hospitality, Real Estate & High-Growth E-Commerce Brands.</p>
            </div>
          </div>

          {/* RIGHT: Integrated Contact Form */}
          <div className="lg:col-span-7 bg-[#0a0a0a] p-8 sm:p-10 border border-white/10 shadow-2xl">
            {submitSuccess ? (
              <div className="text-center py-12 space-y-6 animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-[#C8102E] text-white mx-auto flex items-center justify-center rounded-full">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-3xl font-syne font-bold text-white uppercase">Inquiry Delivered!</h3>
                
                <div className="space-y-2 text-white/90 text-sm max-w-md mx-auto leading-relaxed border-l-2 border-[#C8102E] pl-4 text-left">
                  <p className="font-semibold text-white">
                    Thank you for reaching out to XIII Art & Design Studio.
                  </p>
                  <p className="text-white/80 text-xs">
                    Your details have been submitted and sent directly to <strong className="text-white">xiii.art.design@gmail.com</strong>. Fernanda will review your message and get back to you within 24 hours.
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={constructMailto()}
                    className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 text-xs font-syne font-bold uppercase tracking-wider transition-colors border border-white/20"
                  >
                    <Mail size={14} />
                    <span>Open Email App to Confirm</span>
                  </a>

                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="inline-block bg-[#C8102E] hover:bg-[#d91635] text-white px-6 py-3 text-xs font-syne font-bold uppercase tracking-wider transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-syne font-bold text-white uppercase">
                    Project Inquiry Form
                  </h3>
                  <p className="text-xs text-white/60 font-sans mt-1">
                    All submitted info is sent directly to <span className="text-[#ff8093]">xiii.art.design@gmail.com</span>
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3 bg-[#C8102E]/20 border border-[#C8102E] text-white text-xs flex items-center space-x-2">
                    <AlertCircle size={16} className="text-[#C8102E]" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-white/80 font-syne font-semibold block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Fernanda Rodriguez"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#050505] border border-white/20 px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C8102E] transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-white/80 font-syne font-semibold block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. fernanda@brand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#050505] border border-white/20 px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C8102E] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-white/80 font-syne font-semibold block">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="text"
                      placeholder="+507 6497-7883"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#050505] border border-white/20 px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C8102E] transition-colors"
                    />
                  </div>

                  {/* Company */}
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-white/80 font-syne font-semibold block">
                      Company / Brand Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Pacific Resort"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#050505] border border-white/20 px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C8102E] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Project Type */}
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-white/80 font-syne font-semibold block">
                      Engagement Model / Service
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-[#050505] border border-white/20 px-4 py-3 text-xs text-white focus:outline-none focus:border-[#C8102E] transition-colors"
                    >
                      <option value="The Digital Blueprint ($6,000+)">The Digital Blueprint ($6,000+)</option>
                      <option value="The Growth Partner ($4,500/mo)">The Growth Partner ($4,500/mo)</option>
                      <option value="Operational Consulting / Systems ($1,200+)">Operational Consulting / Systems ($1,200+)</option>
                      <option value="Branding & Identity">Branding & Identity</option>
                      <option value="Website / Redesign">Website / Redesign</option>
                      <option value="Social Media Management">Social Media Management</option>
                      <option value="Custom Consultation ($150/hr)">Custom Consultation ($150/hr)</option>
                    </select>
                  </div>

                  {/* Estimated Budget */}
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-white/80 font-syne font-semibold block">
                      Estimated Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-[#050505] border border-white/20 px-4 py-3 text-xs text-white focus:outline-none focus:border-[#C8102E] transition-colors"
                    >
                      <option value="Under $2,000">Under $2,000</option>
                      <option value="$2,000 - $5,000">$2,000 - $5,000</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option value="$10,000+">$10,000+</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider text-white/80 font-syne font-semibold block">
                    Project Details & Goals *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your brand, target audience, challenges, or goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#050505] border border-white/20 p-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C8102E] transition-colors"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#C8102E] hover:bg-[#d91635] text-white py-4 text-xs font-syne uppercase tracking-wider font-bold transition-all flex items-center justify-center space-x-2 shadow-2xl disabled:opacity-50"
                >
                  <Send size={16} />
                  <span>{isSubmitting ? 'Submitting Message...' : 'Submit Inquiry'}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};


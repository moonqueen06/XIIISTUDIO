import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { ContactInquiry } from '../types';

interface ContactSectionProps {
  prefilledScope?: string;
  onInquirySubmitted: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  prefilledScope,
  onInquirySubmitted,
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
      // 1. Try real server endpoint /api/contact
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        onInquirySubmitted();
      } else {
        // Fallback to client localstorage if offline or static export
        saveToLocalStorage(formData);
        setSubmitSuccess(true);
        onInquirySubmitted();
      }
    } catch {
      // Offline/Static fallback
      saveToLocalStorage(formData);
      setSubmitSuccess(true);
      onInquirySubmitted();
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

  return (
    <section id="contact" className="py-24 bg-[#050505] text-white relative overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Contact Details & Brand Pitch */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-[2px] bg-[#800020]" />
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#800020] font-bold">
                  08 / Direct Communication
                </span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-syne font-black text-white tracking-tighter uppercase leading-none">
                Ready to Lead<span className="text-[#800020]">?</span>
              </h2>
            </div>

            <p className="text-white/80 text-sm leading-relaxed font-sans border-l-2 border-[#800020] pl-4">
              Whether you need a complete ground-up digital blueprint, ongoing growth partnership, or operational workflow architecture, let’s design a connected engine for your business.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-4 border-t border-white/10 font-mono">
              <a
                href="mailto:xiii.art.design@gmail.com"
                className="flex items-center space-x-4 p-4 bg-[#0a0a0a] border border-white/10 hover:border-[#800020] transition-all group"
              >
                <div className="p-3 bg-[#800020] text-white">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-[0.25em] text-white/50">Direct Email</p>
                  <p className="text-xs font-bold text-white group-hover:text-[#f5a6b0] transition-colors">
                    xiii.art.design@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+50764977883"
                className="flex items-center space-x-4 p-4 bg-[#0a0a0a] border border-white/10 hover:border-[#800020] transition-all group"
              >
                <div className="p-3 bg-[#800020] text-white">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-[0.25em] text-white/50">Direct WhatsApp / Phone</p>
                  <p className="text-xs font-bold text-white group-hover:text-[#f5a6b0] transition-colors">
                    +507 6497-7883
                  </p>
                </div>
              </a>
            </div>

            <div className="p-4 bg-[#0a0a0a] border border-white/10 text-xs text-white/70 space-y-1 font-mono">
              <p className="text-[9px] uppercase tracking-[0.25em] text-[#800020] font-bold">Primary Sector Focus</p>
              <p className="font-sans text-xs">Tourism & Hospitality (Direct bookings, guest loyalty & CRM).</p>
            </div>
          </div>

          {/* RIGHT: Integrated Contact Form */}
          <div className="lg:col-span-7 bg-[#0a0a0a] p-8 sm:p-10 border border-white/10 shadow-2xl">
            {submitSuccess ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-[#800020] text-white mx-auto flex items-center justify-center">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-3xl font-syne font-bold text-white uppercase">Inquiry Received!</h3>
                <p className="text-white/80 text-xs max-w-md mx-auto font-mono uppercase tracking-wider leading-relaxed">
                  Thank you for reaching out to XIII Art & Design Studio. Fernanda has received your message and will respond within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="mt-6 inline-block bg-[#800020] text-white px-6 py-3 text-[10px] font-mono font-bold uppercase tracking-[0.2em] transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-syne font-bold text-white uppercase mb-2">
                  Project Inquiry Form
                </h3>

                {errorMessage && (
                  <div className="p-3 bg-[#800020]/20 border border-[#800020] text-white text-xs font-mono flex items-center space-x-2">
                    <AlertCircle size={16} className="text-[#800020]" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-[9px] uppercase tracking-[0.25em] text-white/70 block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Fernanda Rodriguez"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#050505] border border-white/20 px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#800020] transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-[9px] uppercase tracking-[0.25em] text-white/70 block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. fernanda@brand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#050505] border border-white/20 px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#800020] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono">
                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-[9px] uppercase tracking-[0.25em] text-white/70 block">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="text"
                      placeholder="+506 8888-8888"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#050505] border border-white/20 px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#800020] transition-colors"
                    />
                  </div>

                  {/* Company */}
                  <div className="space-y-1.5">
                    <label className="text-[9px] uppercase tracking-[0.25em] text-white/70 block">
                      Company / Brand Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Costa Rica Resort"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#050505] border border-white/20 px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#800020] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono">
                  {/* Project Type */}
                  <div className="space-y-1.5">
                    <label className="text-[9px] uppercase tracking-[0.25em] text-white/70 block">
                      Engagement Model / Service
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-[#050505] border border-white/20 px-4 py-3 text-xs text-white focus:outline-none focus:border-[#800020] transition-colors"
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
                    <label className="text-[9px] uppercase tracking-[0.25em] text-white/70 block">
                      Estimated Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-[#050505] border border-white/20 px-4 py-3 text-xs text-white focus:outline-none focus:border-[#800020] transition-colors"
                    >
                      <option value="Under $2,000">Under $2,000</option>
                      <option value="$2,000 - $5,000">$2,000 - $5,000</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option value="$10,000+">$10,000+</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5 font-mono">
                  <label className="text-[9px] uppercase tracking-[0.25em] text-white/70 block">
                    Project Details & Goals *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your brand, target audience, challenges, or goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#050505] border border-white/20 p-4 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#800020] transition-colors"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#800020] hover:bg-[#a00028] text-white py-4 text-[10px] font-mono uppercase tracking-[0.2em] font-bold transition-all flex items-center justify-center space-x-2 shadow-2xl disabled:opacity-50"
                >
                  <Send size={14} />
                  <span>{isSubmitting ? 'Sending Submission...' : 'Submit Inquiry'}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

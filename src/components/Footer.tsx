import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Send, 
  Linkedin, 
  ExternalLink, 
  Check, 
  Copy, 
  MessageSquare, 
  Sparkles, 
  Clock, 
  ShieldAlert,
  ArrowUp
} from 'lucide-react';
import { CONTACT_INFO, NAV_ITEMS } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'ecommerce',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.name) return;
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      id="contact" 
      className="relative bg-[#05070e] border-t-2 border-cyan-400/40 shadow-[0_-10px_40px_rgba(0,255,255,0.15)] overflow-hidden"
    >
      {/* Volumetric glow accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-cyan-500/15 blur-[60px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        
        {/* Top Section: Brand & Contact Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start">
          
          {/* Left Column: Brand & Direct Connect */}
          <div className="lg:col-span-5 text-left">
            <div className="mb-4">
              <h3 className="text-2xl font-black text-white tracking-wide">SHAMIM HOSSEN</h3>
              <p className="text-xs text-slate-400 mt-1">E-commerce & Social Media Operations Specialist</p>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6 max-w-md">
              Ready to take tedious catalog updates, daily inventory tracking, customer emails, or social media scheduling off your plate? Let's scale together.
            </p>

            {/* Direct Email Pill with Copy */}
            <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-700/80 mb-6 max-w-md flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 overflow-hidden">
                <div className="p-2 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Direct Email</div>
                  <div className="text-xs sm:text-sm font-bold text-white truncate font-mono">
                    {CONTACT_INFO.email}
                  </div>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-cyan-950 border border-slate-600 hover:border-cyan-400 text-xs font-semibold text-slate-200 hover:text-cyan-300 transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-lime-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {/* Social Media 3D Icons (LinkedIn, Upwork, Fiverr) as requested */}
            <div className="mb-6">
              <div className="text-xs font-mono uppercase text-slate-400 mb-3">
                Connect on Marketplaces & Socials:
              </div>
              <div className="flex items-center gap-3">
                {/* Upwork */}
                <a
                  href="https://www.upwork.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-slate-900 border border-lime-400/40 text-lime-300 hover:bg-lime-950/60 text-xs font-bold flex items-center gap-2 transition-all shadow-[0_0_10px_rgba(57,255,20,0.15)]"
                >
                  <span className="w-2 h-2 rounded-full bg-lime-400" />
                  <span>Upwork Top Rated</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                {/* Fiverr */}
                <a
                  href="https://www.fiverr.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-slate-900 border border-emerald-400/40 text-emerald-300 hover:bg-emerald-950/60 text-xs font-bold flex items-center gap-2 transition-all shadow-[0_0_10px_rgba(16,185,129,0.15)]"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Fiverr Pro</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-cyan-400/40 text-cyan-300 hover:bg-cyan-950/60 transition-all shadow-[0_0_10px_rgba(0,255,255,0.15)]"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>Response SLA: Typically within 2 hours</span>
            </div>
          </div>

          {/* Right Column: 3D Glass-Styled "Let's Connect" Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl glass-panel-3d border border-cyan-400/30 shadow-[0_15px_40px_rgba(0,0,0,0.8)] relative">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-cyan-400" />
                    Let's Connect
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Tell me about your store or content goals. I will prepare a customized audit.
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-cyan-950 text-cyan-400 border border-cyan-500/30 text-[10px] font-mono font-bold">
                  FREE AUDIT
                </span>
              </div>

              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-cyan-950/40 border border-cyan-400/60 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-cyan-400/20 text-cyan-300 flex items-center justify-center mx-auto mb-3">
                    <Check className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">Message Received!</h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto mb-4">
                    Thank you, {formData.name}. Shamim will review your requirements and respond to <span className="text-cyan-300 font-mono">{formData.email}</span> within 2 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-300 hover:text-white"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-semibold text-slate-300 mb-1.5">
                        Your Name / Brand *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g., Alex Rivers / Apex Retail"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white text-xs placeholder:text-slate-500 transition-all outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-semibold text-slate-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g., alex@apexretail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white text-xs placeholder:text-slate-500 transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-300 mb-1.5">
                      Primary Service Focus
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {[
                        { id: 'ecommerce', label: 'E-commerce (Shopify/Amazon)' },
                        { id: 'facebook', label: 'Facebook' },
                        { id: 'instagram', label: 'Instagram' },
                        { id: 'linkedin', label: 'LinkedIn' },
                        { id: 'social', label: 'Social & YouTube SEO' },
                        { id: 'fullstack', label: 'Full-Service VA Support' }
                      ].map((s) => (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, service: s.id })}
                          className={`px-3 py-2 rounded-xl text-xs font-medium border text-left transition-all cursor-pointer ${
                            formData.service === s.id
                              ? 'bg-cyan-950/80 border-cyan-400 text-cyan-300 font-bold shadow-[0_0_10px_rgba(0,255,255,0.2)]'
                              : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                          }`}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-300 mb-1.5">
                      Project Details or Catalog Link
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe what you'd like Shamim to assist with (e.g. 500 product listings on Shopify, weekly YouTube thumbnail design, or daily inventory syncing)..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white text-xs placeholder:text-slate-500 transition-all outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider text-black btn-3d-neon flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_25px_rgba(0,255,255,0.35)]"
                  >
                    <Send className="w-4 h-4 text-black" />
                    <span>Sent Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Bar & Quick Links */}
        <div className="pt-8 border-t border-slate-800/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          
          <div className="flex flex-wrap items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-cyan-300 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} SHAMIM HOSSEN. All rights reserved.</span>
            
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-cyan-300 hover:border-cyan-400 transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};

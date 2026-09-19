import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Sparkles, 
  Check, 
  Calendar, 
  Clock, 
  ShoppingBag, 
  Share2, 
  ArrowRight, 
  CheckCircle2,
  TrendingUp,
  FileSpreadsheet
} from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialService = 'ecommerce'
}) => {
  const [selectedService, setSelectedService] = useState(initialService);
  const [hoursPerWeek, setHoursPerWeek] = useState(20);
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    storeOrChannelUrl: '',
    notes: '',
    timeSlot: 'Morning (EST / GMT)'
  });
  const [isBooked, setIsBooked] = useState(false);

  // Approximate time and money savings calculation
  const monthlyHoursSaved = hoursPerWeek * 4;
  const estimatedGmvGrowth = selectedService === 'ecommerce' ? '+35% to +60%' : '+40% to +85%';

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
  };

  const handleResetAndClose = () => {
    setIsBooked(false);
    setStep(1);
    onClose();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleResetAndClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return typeof document !== 'undefined' ? createPortal(
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8 pt-20 sm:pt-24 pb-10 bg-black/90 backdrop-blur-2xl overflow-y-auto"
      onClick={handleResetAndClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-3xl bg-slate-950 border border-cyan-400/40 shadow-[0_25px_80px_rgba(0,0,0,0.95),0_0_60px_rgba(0,255,255,0.25)] p-6 sm:p-8 md:p-9 text-left my-auto"
      >
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          aria-label="Close consultation modal"
          className="absolute top-6 right-6 sm:top-7 sm:right-7 z-30 p-2.5 rounded-full bg-slate-900/95 border border-slate-700/90 text-slate-300 hover:text-cyan-300 hover:border-cyan-400 hover:bg-slate-800 shadow-[0_4px_20px_rgba(0,0,0,0.7)] transition-all cursor-pointer group"
        >
          <X className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </button>

        {isBooked ? (
          <div className="py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-lime-400/20 text-lime-400 border border-lime-400/50 flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(57,255,20,0.4)]">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-white mb-2">
              Consultation Scheduled!
            </h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto mb-6 leading-relaxed">
              Thanks <span className="text-cyan-300 font-bold">{formData.name}</span>! Shamim has reserved your initial audit and discovery call. A calendar invitation and preliminary checklist have been dispatched to <span className="text-lime-300 font-mono">{formData.email}</span>.
            </p>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 max-w-md mx-auto text-left text-xs text-slate-300 space-y-2 mb-6">
              <div className="flex justify-between">
                <span className="text-slate-400">Selected Focus:</span>
                <span className="font-bold text-white capitalize">{selectedService}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Target Timeframe:</span>
                <span className="font-bold text-cyan-300">{formData.timeSlot}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Est. Time Saved:</span>
                <span className="font-bold text-lime-300">{monthlyHoursSaved} hours / month</span>
              </div>
            </div>

            <button
              onClick={handleResetAndClose}
              className="px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black btn-3d-neon cursor-pointer"
            >
              Close & Return to Portfolio
            </button>
          </div>
        ) : (
          <div>
            {/* Modal Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-500/30 text-xs font-mono font-bold uppercase mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                Free Discovery Call & Store Audit
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Book A 1-on-1 Consultation With Shamim
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Zero commitment. Let's inspect your current store catalogs or content pipeline and identify high-leverage growth avenues.
              </p>
            </div>

            {/* Step 1: Select Requirements & Live ROI Estimator */}
            {step === 1 && (
              <div className="space-y-6">
                {/* Service Selection Pills */}
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-2">
                    1. Select Virtual Assistant Scope:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedService('ecommerce')}
                      className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                        selectedService === 'ecommerce'
                          ? 'bg-cyan-950/80 border-cyan-400 shadow-[0_0_20px_rgba(0,255,255,0.2)]'
                          : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <ShoppingBag className="w-4 h-4 text-cyan-400" />
                        <span className="font-bold text-sm text-white">E-commerce Operations</span>
                      </div>
                      <p className="text-xs text-slate-300">
                        Shopify & Amazon listing optimization, Excel inventory sync, order fulfillment & customer tickets.
                      </p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedService('social')}
                      className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                        selectedService === 'social'
                          ? 'bg-lime-950/80 border-lime-400 shadow-[0_0_20px_rgba(57,255,20,0.2)]'
                          : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Share2 className="w-4 h-4 text-lime-400" />
                        <span className="font-bold text-sm text-white">Social Media & YouTube SEO</span>
                      </div>
                      <p className="text-xs text-slate-300">
                        High-CTR thumbnails, Instagram carousels, metadata ranking, calendar batching & multi-platform scheduling.
                      </p>
                    </button>
                  </div>
                </div>

                {/* Interactive Workload Slider */}
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-slate-300 uppercase">
                      2. Estimated Support Hours Needed:
                    </span>
                    <span className="text-sm font-black text-cyan-300 font-mono">
                      {hoursPerWeek} hrs / week
                    </span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="40"
                    step="5"
                    value={hoursPerWeek}
                    onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                    className="w-full accent-cyan-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                    <span>Part-Time (5h)</span>
                    <span>Standard (20h)</span>
                    <span>Dedicated (40h/Full-Time)</span>
                  </div>

                  {/* Dynamic Impact Cards */}
                  <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-slate-800">
                    <div className="p-3 rounded-xl bg-black/60 border border-cyan-500/20">
                      <div className="text-[10px] text-slate-400 uppercase font-mono">Hours Saved / Month</div>
                      <div className="text-lg font-black text-cyan-300">{monthlyHoursSaved} Hours</div>
                      <div className="text-[10px] text-slate-400">Reclaim your executive bandwidth</div>
                    </div>
                    <div className="p-3 rounded-xl bg-black/60 border border-lime-500/20">
                      <div className="text-[10px] text-slate-400 uppercase font-mono">Expected Efficiency Lift</div>
                      <div className="text-lg font-black text-lime-300">{estimatedGmvGrowth}</div>
                      <div className="text-[10px] text-slate-400">Catalog & engagement velocity</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-black btn-3d-neon flex items-center gap-2 cursor-pointer"
                  >
                    <span>Proceed to Contact Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Contact Form & Booking Slot */}
            {step === 2 && (
              <form onSubmit={handleBooking} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Miller"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@yourbrand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">
                    Store URL, Amazon Link, or Social Handle
                  </label>
                  <input
                    type="text"
                    placeholder="https://myshopifystore.com or @youtubechannel"
                    value={formData.storeOrChannelUrl}
                    onChange={(e) => setFormData({ ...formData, storeOrChannelUrl: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">
                    Preferred Time Window for Video Call
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs outline-none focus:border-cyan-400"
                  >
                    <option>Morning (EST / BST / 09:00 - 12:00)</option>
                    <option>Afternoon (EST / BST / 13:00 - 17:00)</option>
                    <option>Evening (EST / BST / 18:00 - 21:00)</option>
                    <option>Asynchronous Slack / Email Audit Only</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">
                    Specific Tasks or Challenges
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. We have 400 new summer apparel items that need optimized titles and description bullets before launch..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs outline-none focus:border-cyan-400 resize-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
                  >
                    ← Back to Scope Adjustments
                  </button>

                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-black btn-3d-lime flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(57,255,20,0.3)]"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Confirm Free Consultation</span>
                  </button>
                </div>
              </form>
            )}

          </div>
        )}

      </motion.div>
    </div>,
    document.body
  ) : null;
};

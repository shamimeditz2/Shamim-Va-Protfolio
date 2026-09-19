import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  Award,
  Sparkles
} from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section 
      id="testimonials" 
      className="relative py-24 bg-gradient-to-b from-black via-slate-950 to-black cyber-grid-bg overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-lime-400/30 text-lime-300 text-xs font-mono font-bold tracking-wider uppercase mb-3 shadow-[0_0_12px_rgba(57,255,20,0.2)]">
            <Award className="w-3.5 h-3.5" />
            Social Proof & Verified Trust
          </div>

          <h2 
            id="testimonials-title"
            className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4"
          >
            <span className="text-white">CLIENT </span>
            <span className="text-cyan-400">TESTIMONIALS</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            Real feedback from 7-figure store operators, YouTube creators, and busy agency founders.
          </p>
        </div>

        {/* 3D Floating Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              id={`testimonial-card-${t.id}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative flex flex-col justify-between rounded-3xl p-7 glass-panel-3d glass-panel-hover border border-slate-700/80 hover:border-cyan-400/50"
            >
              {/* Top Quote Icon & 3D Star Rating */}
              <div>
                <div className="flex items-center justify-between gap-4 mb-5">
                  {/* 3D Glowing Star Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <div 
                        key={i} 
                        className="w-6 h-6 rounded-md bg-amber-950/80 border border-amber-400/50 flex items-center justify-center shadow-[0_0_8px_rgba(251,191,36,0.3)]"
                      >
                        <Star className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                      </div>
                    ))}
                  </div>

                  {/* Platform Verified Pill */}
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-slate-900 border border-slate-700 text-cyan-300 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                    {t.platform}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-sm text-slate-200 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Client Info & Metric Result */}
              <div className="pt-5 border-t border-slate-800">
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="relative w-12 h-12 rounded-full p-[1.5px] bg-gradient-to-tr from-cyan-400 to-lime-400">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white">{t.name}</h4>
                    <p className="text-xs text-slate-400">{t.role}</p>
                    <p className="text-[11px] text-cyan-400 font-medium">{t.company}</p>
                  </div>
                </div>

                {/* Impact Result Tag */}
                <div className="px-3 py-1.5 rounded-xl bg-slate-900/90 border border-lime-400/30 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Outcome:</span>
                  <span className="font-extrabold text-lime-300">{t.metricResult}</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Global Client Trust Strip */}
        <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-wrap items-center justify-around gap-6 text-center">
          <div>
            <div className="text-2xl font-black text-cyan-300 font-display">100%</div>
            <div className="text-xs text-slate-400 font-mono">Job Success Score</div>
          </div>
          <div className="hidden sm:block w-[1px] h-8 bg-slate-800" />
          <div>
            <div className="text-2xl font-black text-lime-300 font-display">65,000+</div>
            <div className="text-xs text-slate-400 font-mono">E-com SKUs Handled</div>
          </div>
          <div className="hidden sm:block w-[1px] h-8 bg-slate-800" />
          <div>
            <div className="text-2xl font-black text-cyan-300 font-display">&lt; 2 Hours</div>
            <div className="text-xs text-slate-400 font-mono">Average Response SLA</div>
          </div>
          <div className="hidden sm:block w-[1px] h-8 bg-slate-800" />
          <div>
            <div className="text-2xl font-black text-lime-300 font-display">40+ Hrs/Wk</div>
            <div className="text-xs text-slate-400 font-mono">Time Saved Per Client</div>
          </div>
        </div>

      </div>
    </section>
  );
};

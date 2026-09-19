import React from 'react';
import { motion } from 'motion/react';
import { 
  Zap, 
  Sparkles, 
  BarChart3, 
  Clock, 
  Check, 
  ShieldCheck, 
  Boxes,
  Cpu
} from 'lucide-react';
import { WHY_CHOOSE_ME } from '../data/portfolioData';

export const WhyChooseMe: React.FC = () => {
  return (
    <section 
      id="why-me" 
      className="relative py-24 bg-black cyber-dot-bg overflow-hidden border-t border-slate-900"
    >
      {/* Background Volumetric Lighting */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-lime-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-bold tracking-wider uppercase mb-3 shadow-[0_0_12px_rgba(0,255,255,0.2)]">
            <ShieldCheck className="w-3.5 h-3.5" />
            Reliable Partner For Growth
          </div>

          <h2 
            id="why-choose-me-title"
            className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4"
          >
            <span className="text-white">WHY </span>
            <span className="text-cyan-400">CHOOSE </span>
            <span className="text-lime-400">ME</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            A dedicated Virtual Assistant who pairs mechanical operational diligence with commercial design instincts.
          </p>
        </div>

        {/* 3 Glowing 3D Isometric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WHY_CHOOSE_ME.map((item, index) => {
            const isCyan = item.glowColor === 'cyan';

            return (
              <motion.div
                key={item.id}
                id={`why-choose-card-${item.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative group rounded-3xl p-8 glass-panel-3d glass-panel-hover transition-all duration-300 ${
                  isCyan 
                    ? 'hover:border-cyan-400/70 hover:shadow-[0_20px_40px_rgba(0,255,255,0.2)]' 
                    : 'hover:border-lime-400/70 hover:shadow-[0_20px_40px_rgba(57,255,20,0.2)]'
                }`}
              >
                {/* 3D Glowing Isometric Icon Badge */}
                <div className="relative mb-6 inline-block">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border shadow-xl relative z-10 transition-transform duration-300 group-hover:scale-110 ${
                    isCyan 
                      ? 'bg-slate-900 border-cyan-400/50 shadow-[0_0_20px_rgba(0,255,255,0.3)]' 
                      : 'bg-slate-900 border-lime-400/50 shadow-[0_0_20px_rgba(57,255,20,0.3)]'
                  }`}>
                    {item.iconType === 'efficiency' && (
                      <Clock className="w-8 h-8 text-cyan-400 animate-pulse" />
                    )}
                    {item.iconType === 'creativity' && (
                      <Sparkles className="w-8 h-8 text-lime-400 animate-pulse" />
                    )}
                    {item.iconType === 'data' && (
                      <BarChart3 className="w-8 h-8 text-cyan-400 animate-pulse" />
                    )}
                  </div>
                  <div className={`absolute -inset-1 rounded-2xl blur-lg opacity-40 group-hover:opacity-80 transition-opacity ${
                    isCyan ? 'bg-cyan-400' : 'bg-lime-400'
                  }`} />
                </div>

                {/* Badge Stat */}
                <div className="inline-block px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700 text-xs font-mono font-bold text-slate-300 mb-3">
                  {item.stats}
                </div>

                {/* Title & Highlight */}
                <h3 className="text-xl font-black text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {item.title}
                </h3>
                <div className={`text-xs font-semibold mb-4 ${isCyan ? 'text-cyan-400' : 'text-lime-400'}`}>
                  {item.highlight}
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Feature Checklist */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2.5">
                  {item.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                        isCyan ? 'bg-cyan-950 text-cyan-400' : 'bg-lime-950 text-lime-400'
                      }`}>
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

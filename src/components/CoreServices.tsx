import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Sparkles, 
  ExternalLink, 
  ShoppingBag, 
  Share2, 
  FileSpreadsheet,
  Cpu,
  Flame
} from 'lucide-react';
import { CORE_SERVICES } from '../data/portfolioData';

interface CoreServicesProps {
  onSelectService: (serviceId: string) => void;
}

export const CoreServices: React.FC<CoreServicesProps> = ({ onSelectService }) => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section 
      id="services" 
      className="relative py-24 bg-black cyber-dot-bg overflow-hidden"
    >
      {/* Volumetric background lights */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-lime-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with 3D Neon-lit text */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold tracking-widest uppercase mb-4 shadow-[0_0_12px_rgba(0,255,255,0.2)]">
            <Cpu className="w-3.5 h-3.5" />
            Specialized Virtual Assistant Capabilities
          </div>

          <h2 
            id="core-services-title"
            className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4"
          >
            <span className="text-cyan-400">CORE </span>
            <span className="text-lime-400">SERVICES</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Engineered workflows that eliminate operational bottlenecks, optimize revenue conversion, and supercharge brand visibility.
          </p>
        </div>

        {/* Two 3D Floating Glass Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {CORE_SERVICES.map((service, index) => {
            const isCyan = service.glowColor === 'cyan';

            return (
              <motion.div
                key={service.id}
                id={`service-card-${service.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onMouseEnter={() => setActiveCard(service.id)}
                onMouseLeave={() => setActiveCard(null)}
                className={`group relative rounded-3xl p-6 sm:p-8 transition-all duration-500 glass-panel-3d ${
                  isCyan 
                    ? 'hover:border-cyan-400/60 hover:shadow-[0_20px_50px_rgba(0,255,255,0.25)]' 
                    : 'hover:border-lime-400/60 hover:shadow-[0_20px_50px_rgba(57,255,20,0.25)]'
                }`}
              >
                {/* Neon Rim Corner Accents */}
                <div className={`absolute -top-[1px] -left-[1px] w-8 h-8 rounded-tl-3xl border-t-2 border-l-2 transition-colors duration-300 ${
                  isCyan ? 'border-cyan-400' : 'border-lime-400'
                }`} />
                <div className={`absolute -bottom-[1px] -right-[1px] w-8 h-8 rounded-br-3xl border-b-2 border-r-2 transition-colors duration-300 ${
                  isCyan ? 'border-cyan-400' : 'border-lime-400'
                }`} />

                {/* 3D Visual Render Showcase */}
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8 border border-slate-700/60 shadow-2xl bg-black/80">
                  <img
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 pointer-events-none" />

                  {/* 3D Floating Logos near base as requested */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <div className="flex items-center gap-2">
                      {service.floatingLogos.map((logo, lIdx) => (
                        <div 
                          key={lIdx}
                          className={`px-2.5 py-1 rounded-lg backdrop-blur-md border text-xs font-bold flex items-center gap-1.5 shadow-lg ${logo.badgeBg} ${logo.textColor}`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                          <span>{logo.name}</span>
                        </div>
                      ))}
                    </div>

                    <div className="px-2.5 py-1 rounded-lg bg-black/80 border border-white/20 text-[11px] font-mono text-slate-300 backdrop-blur-md">
                      3D Octane Render
                    </div>
                  </div>
                </div>

                {/* Service Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3 className={`text-2xl sm:text-3xl font-black tracking-tight ${
                      isCyan ? 'text-cyan-300 group-hover:text-glow-cyan' : 'text-lime-300 group-hover:text-glow-lime'
                    }`}>
                      {service.title}
                    </h3>
                    <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700 text-[11px] font-mono font-bold text-slate-400">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-slate-400">
                    {service.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Key Points (Requested Checklist) */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    Key Core Deliverables:
                  </div>
                  <ul className="space-y-2.5">
                    {service.keyPoints.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${
                          isCyan ? 'text-cyan-400' : 'text-lime-400'
                        }`} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Software Tools Row */}
                <div className="mb-8 pt-4 border-t border-slate-800">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Tech Stack & Platforms
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {service.softwareTools.map((tool, tIdx) => (
                      <span 
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-700/80 text-[11px] font-medium text-slate-300 hover:border-cyan-500/40 transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="flex items-center justify-between gap-4 pt-4 border-t border-slate-800/80">
                  <div className="flex items-center gap-4">
                    {service.stats.map((st, sIdx) => (
                      <div key={sIdx}>
                        <div className={`text-base font-extrabold ${isCyan ? 'text-cyan-300' : 'text-lime-300'}`}>
                          {st.value}
                        </div>
                        <div className="text-[10px] text-slate-400 font-medium">
                          {st.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectService(service.id)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black flex items-center gap-2 transition-all cursor-pointer ${
                      isCyan ? 'btn-3d-neon' : 'btn-3d-lime'
                    }`}
                  >
                    <span>Hire For This</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

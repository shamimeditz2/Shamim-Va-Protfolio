import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TrendingUp, 
  ExternalLink, 
  Layers, 
  Sparkles, 
  X, 
  CheckCircle, 
  ArrowUpRight, 
  ShieldCheck, 
  Activity,
  Maximize2
} from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { ProjectCaseStudy } from '../types';

interface FeaturedProjectsProps {
  onOpenConsultation: () => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onOpenConsultation }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'ecommerce' | 'social' | 'youtube'>('all');
  const [activeProject, setActiveProject] = useState<ProjectCaseStudy | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveProject(null);
    };
    if (activeProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeProject]);

  const filteredProjects = selectedFilter === 'all' 
    ? FEATURED_PROJECTS 
    : FEATURED_PROJECTS.filter(p => p.category === selectedFilter);

  return (
    <section 
      id="portfolio" 
      className="relative py-24 bg-gradient-to-b from-black via-slate-950 to-black cyber-grid-bg"
    >
      {/* Volumetric glow background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-lime-400/40 text-lime-300 text-xs font-sans font-semibold tracking-wide uppercase mb-3 shadow-[0_0_12px_rgba(57,255,20,0.2)]">
              <Sparkles className="w-3.5 h-3.5" />
              Proven Case Studies & Client Results
            </div>
            
            <h2 
              id="featured-projects-title"
              className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white font-sans"
            >
              <span className="text-cyan-400">FEATURED </span>
              <span className="text-white">PROJECTS</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-xl">
              High-converting e-commerce listings, viral social carousels, and high-CTR YouTube video optimizations.
            </p>
          </div>

          {/* Interactive Filters */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-slate-900/90 border border-slate-700/80 backdrop-blur-md">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'ecommerce', label: 'Shopify / Amazon' },
              { id: 'social', label: 'Instagram' },
              { id: 'youtube', label: 'YouTube SEO' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedFilter(f.id as any)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold tracking-wide transition-all cursor-pointer ${
                  selectedFilter === f.id
                    ? 'bg-cyan-400 text-black shadow-[0_0_15px_rgba(0,255,255,0.4)]'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Interactive Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              id={`project-card-${project.id}`}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group flex flex-col rounded-3xl overflow-hidden glass-panel-3d glass-panel-hover border border-slate-700/60 hover:border-cyan-400/60 transition-all duration-300"
            >
              {/* Card Image Container with 3D Isometric Mockup */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-black">
                <img
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Floating Metric Badge */}
                <div className="absolute top-3 left-3 px-3 py-1.5 rounded-xl bg-black/85 border border-lime-400/50 backdrop-blur-md shadow-[0_4px_15px_rgba(0,0,0,0.8)] flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-lime-400" />
                  <span className="text-xs font-black text-lime-300">{project.metric}</span>
                </div>

                {/* Inspect Action Hint */}
                <button
                  onClick={() => setActiveProject(project)}
                  className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-cyan-400/40 text-cyan-300 hover:text-black hover:bg-cyan-400 hover:border-cyan-400 text-xs font-bold backdrop-blur-md shadow-lg transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Maximize2 className="w-3 h-3" />
                  <span>Inspect 3D Data</span>
                </button>

                {/* Category Pill */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-slate-950/80 border border-slate-700 text-[10px] font-mono text-slate-300 backdrop-blur-md">
                  {project.categoryLabel}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-slate-400 mb-1">
                    {project.client}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold font-sans text-white group-hover:text-cyan-300 transition-colors mb-2 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Results Highlights */}
                  <div className="grid grid-cols-2 gap-2 mb-4 pt-3 border-t border-slate-800">
                    {project.resultsBreakdown.slice(0, 2).map((r, rIdx) => (
                      <div key={rIdx} className="p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                        <div className="text-[10px] text-slate-400 truncate">{r.label}</div>
                        <div className="text-xs font-extrabold text-cyan-300">{r.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Deep Dive Action */}
                  <button
                    onClick={() => setActiveProject(project)}
                    className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-cyan-950/70 border border-slate-700 hover:border-cyan-400/60 text-xs font-bold text-slate-200 hover:text-cyan-300 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>View Full Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* 3D Interactive Case Study Deep-Dive Modal */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {activeProject && (
            <div 
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8 pt-20 sm:pt-24 pb-10 bg-black/90 backdrop-blur-2xl overflow-y-auto"
              onClick={() => setActiveProject(null)}
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 20 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-3xl max-h-[86vh] overflow-y-auto rounded-3xl bg-slate-950 border border-cyan-500/40 shadow-[0_25px_80px_rgba(0,0,0,0.95),0_0_60px_rgba(0,255,255,0.25)] p-6 sm:p-8 md:p-9 text-left my-auto"
              >
                {/* Close Button - positioned comfortably down and accessible */}
                <button
                  onClick={() => setActiveProject(null)}
                  aria-label="Close project modal"
                  className="absolute top-6 right-6 sm:top-7 sm:right-7 z-30 p-2.5 rounded-full bg-slate-900/95 border border-slate-700/90 text-slate-300 hover:text-cyan-300 hover:border-cyan-400 hover:bg-slate-800 shadow-[0_4px_20px_rgba(0,0,0,0.7)] transition-all cursor-pointer group"
                >
                  <X className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>

                {/* Category & Client with spacing for close button */}
                <div className="flex items-center gap-2 mb-2.5 pr-14 sm:pr-16 flex-wrap">
                  <span className="px-3 py-0.5 rounded-full text-xs font-mono font-bold bg-cyan-950/90 text-cyan-400 border border-cyan-500/40">
                    {activeProject.categoryLabel}
                  </span>
                  <span className="text-xs text-slate-400">• {activeProject.client}</span>
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-sans text-white mb-5 pr-14 leading-tight">
                  {activeProject.title}
                </h3>

              {/* 3D Mockup Visual Header */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6 border border-slate-700 shadow-2xl">
                <img
                  src={activeProject.imageSrc}
                  alt={activeProject.imageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-xl bg-black/80 border border-lime-400/60 backdrop-blur-md flex items-center gap-2">
                  <Activity className="w-4 h-4 text-lime-400" />
                  <span className="text-xs font-bold text-lime-300">{activeProject.metric}</span>
                </div>
              </div>

              {/* Full Description */}
              <div className="mb-6">
                <h4 className="text-xs font-sans uppercase text-slate-400 font-semibold tracking-wide mb-2">
                  Project Scope & Strategy:
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeProject.description}
                </p>
              </div>

              {/* Key Deliverables */}
              <div className="mb-6">
                <h4 className="text-xs font-sans uppercase text-cyan-400 font-semibold tracking-wide mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Executed Workflows & Deliverables:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeProject.keyDeliverables.map((del, dIdx) => (
                    <div key={dIdx} className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-2 text-xs text-slate-200">
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results Matrix */}
              <div className="mb-8">
                <h4 className="text-xs font-sans uppercase text-lime-400 font-semibold tracking-wide mb-3 flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5" />
                  Measurable Performance Metrics:
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  {activeProject.resultsBreakdown.map((res, rIdx) => (
                    <div key={rIdx} className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                      <div className="text-[11px] text-slate-400 mb-1">{res.label}</div>
                      <div className="text-lg font-black text-cyan-300">{res.value}</div>
                      <div className="text-[10px] font-mono text-lime-400 mt-0.5">{res.change}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400">Tools:</span>
                  <div className="flex flex-wrap gap-1">
                    {activeProject.toolsUsed.map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-[10px] text-slate-300 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    setActiveProject(null);
                    onOpenConsultation();
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black btn-3d-neon flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Similar Results</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>,
      document.body
    )}

    </section>
  );
};

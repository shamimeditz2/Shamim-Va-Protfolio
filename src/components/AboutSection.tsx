import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  UserCheck, 
  Award, 
  Terminal, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Database,
  Cpu,
  Layers,
  Sparkles
} from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenConsultation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'workflow' | 'certifications'>('overview');

  const workflowSteps = [
    {
      step: "01",
      title: "Discovery & Catalog Audit",
      desc: "Deep dive into your existing Shopify/Amazon listings, inventory sheets, or content queues to identify low-hanging revenue and traffic leaks.",
      tag: "Immediate Wins"
    },
    {
      step: "02",
      title: "SOP & Template Architecture",
      desc: "Standardize naming conventions, product description formulas, and graphic presets so execution remains fast, coherent, and repeatable.",
      tag: "Process Rigor"
    },
    {
      step: "03",
      title: "Precision Daily Execution",
      desc: "Daily backlog fulfillment: batching listings, syncing inventory, customer replies, and scheduling social assets with zero micro-management required.",
      tag: "Autopilot Delivery"
    },
    {
      step: "04",
      title: "Metrics Review & Continuous Optimization",
      desc: "Weekly KPI reports, conversion tracking, CTR analysis, and keyword re-indexing to ensure momentum never plateaus.",
      tag: "Compounding Growth"
    }
  ];

  return (
    <section 
      id="about" 
      className="relative py-24 bg-gradient-to-b from-black via-[#060a14] to-black cyber-grid-bg overflow-hidden border-t border-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-bold tracking-wider uppercase mb-3 shadow-[0_0_12px_rgba(0,255,255,0.2)]">
            <UserCheck className="w-3.5 h-3.5" />
            The Virtual Assistant Behind The Growth
          </div>

          <h2 
            id="about-section-title"
            className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4"
          >
            <span className="text-white">ABOUT </span>
            <span className="text-cyan-400">SHAMIM</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            Bridging analytical e-commerce rigor with creative digital design to liberate business owners from daily operational grind.
          </p>
        </div>

        {/* 3D Glass Tab Selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900/90 border border-slate-700 backdrop-blur-md">
            {[
              { id: 'overview', label: 'Professional Profile' },
              { id: 'workflow', label: '4-Step Operational Framework' },
              { id: 'certifications', label: 'Stack & Badges' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-cyan-400 text-black shadow-[0_0_18px_rgba(0,255,255,0.4)]'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab 1: Professional Profile */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="p-6 rounded-3xl glass-panel-3d border border-cyan-500/30">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 pb-4 border-b border-slate-800/80">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-cyan-400 shadow-[0_0_20px_rgba(0,255,255,0.35)] shrink-0 bg-black">
                    <img 
                      src={HERO_DATA.avatarImage} 
                      alt="Shamim Hossen" 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top"
                    />
                    <span className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-black" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white">
                      Hi, I’m Shamim — Your Growth Operations Engine.
                    </h3>
                    <p className="text-xs text-cyan-300 font-mono mt-0.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                      E-commerce & Social Operations Specialist
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  Over the past 4+ years, I have collaborated with D2C brand founders, Amazon FBA power sellers, and multi-channel content creators. I specialize in turning chaotic digital back-ends into streamlined, automated, and high-performing profit engines.
                </p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Unlike generic virtual assistants who need hand-holding, I proactively spot inventory discrepancies, rewrite underperforming listing copy with high-ranking keywords, and produce visual assets that genuinely stop the scroll.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="text-xs font-mono text-cyan-400 font-bold uppercase mb-1">Experience</div>
                  <div className="text-xl font-black text-white">4+ Years</div>
                  <div className="text-[11px] text-slate-400">Continuous Client Success</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="text-xs font-mono text-lime-400 font-bold uppercase mb-1">Timezones</div>
                  <div className="text-xl font-black text-white">US / UK / AU</div>
                  <div className="text-[11px] text-slate-400">Overlap Flexible</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="text-xs font-mono text-cyan-400 font-bold uppercase mb-1">Reliability</div>
                  <div className="text-xl font-black text-white">99.9%</div>
                  <div className="text-[11px] text-slate-400">On-Time Deliveries</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-6 rounded-3xl glass-panel-3d border border-lime-400/30 space-y-4">
                <div className="flex items-center gap-2 text-lime-400 font-mono text-xs font-bold uppercase">
                  <ShieldCheck className="w-4 h-4" />
                  What You Can Expect Daily:
                </div>
                
                {[
                  "Detailed daily progress reporting in Slack, ClickUp, or Email",
                  "Strict adherence to brand guidelines & aesthetic tone",
                  "Proactive problem solving before small issues snowball",
                  "Complete confidentiality with secure password management (1Password / Bitwarden)"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-lime-950 text-lime-400 border border-lime-500/40 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}

                <div className="pt-4 border-t border-slate-800">
                  <button
                    onClick={onOpenConsultation}
                    className="w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-black btn-3d-neon flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Schedule Free Strategy Call</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab 2: 4-Step Operational Framework */}
        {activeTab === 'workflow' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {workflowSteps.map((ws, wIdx) => (
              <div
                key={wIdx}
                className="p-6 rounded-3xl glass-panel-3d border border-slate-800 hover:border-cyan-400/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-sans font-bold text-3xl text-cyan-400/60">
                      {ws.step}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/30 text-[10px] font-mono">
                      {ws.tag}
                    </span>
                  </div>
                  <h4 className="text-base font-black text-white mb-2">{ws.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{ws.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Tab 3: Stack & Badges */}
        {activeTab === 'certifications' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="p-8 rounded-3xl glass-panel-3d border border-slate-800 max-w-4xl mx-auto text-left"
          >
            <h3 className="text-lg font-black text-white mb-6 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-cyan-400" />
              Verified Tool Competency & Professional Stack
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
              {[
                { name: "Shopify Plus Admin", level: "Expert", type: "Store Ops" },
                { name: "Amazon Seller Central", level: "Advanced", type: "FBA / FBM" },
                { name: "Helium 10 / Jungle Scout", level: "Expert", type: "SEO Research" },
                { name: "MS Excel & Google Sheets", level: "Master", type: "Formulas & Macros" },
                { name: "YouTube Studio & VidIQ", level: "Expert", type: "Algorithm SEO" },
                { name: "Canva Pro & Photoshop", level: "Advanced", type: "Visual Design" },
                { name: "Notion & ClickUp", level: "Advanced", type: "Project Mgmt" },
                { name: "Zendesk & Gorgias", level: "Expert", type: "Customer Support" },
              ].map((tool, idx) => (
                <div key={idx} className="p-3 rounded-2xl bg-slate-900 border border-slate-800">
                  <div className="text-xs font-bold text-white mb-0.5">{tool.name}</div>
                  <div className="text-[10px] text-cyan-400 font-mono">{tool.level}</div>
                  <div className="text-[10px] text-slate-500">{tool.type}</div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/90 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-cyan-950 text-cyan-300 border border-cyan-400/40">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Custom Tool Onboarding?</div>
                  <div className="text-[11px] text-slate-400">Fast learner capable of adopting your proprietary tech stack in under 48 hours.</div>
                </div>
              </div>
              <button
                onClick={onOpenConsultation}
                className="px-4 py-2 rounded-xl text-xs font-bold uppercase text-black btn-3d-neon shrink-0 cursor-pointer"
              >
                Inquire For Custom Stack
              </button>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
};

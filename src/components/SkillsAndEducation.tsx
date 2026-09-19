import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Wrench, 
  GraduationCap, 
  CheckCircle2, 
  Sparkles, 
  ExternalLink,
  Laptop,
  Award,
  Layers,
  Cpu,
  BookOpen,
  Calendar,
  Building2,
  Code
} from 'lucide-react';

interface SkillCategory {
  title: string;
  category: string;
  glow: 'cyan' | 'lime';
  skills: {
    name: string;
    proficiency: number; // 1-100
    level: string;
    experience: string;
    badge?: string;
  }[];
}

interface ToolItem {
  name: string;
  category: 'E-commerce' | 'Social & Video' | 'Productivity & Data' | 'Design & Creative';
  role: string;
  proficiency: 'Master' | 'Expert' | 'Advanced';
  glow: 'cyan' | 'lime';
  highlight: string;
}

interface EducationItem {
  degree: string;
  institution: string;
  timeline: string;
  field: string;
  badge: string;
  highlights: string[];
}

export const SkillsAndEducation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'skills' | 'tools' | 'education'>('all');
  const [toolCategory, setToolCategory] = useState<string>('all');

  const skillCategories: SkillCategory[] = [
    {
      title: 'E-Commerce Operations & Store Management',
      category: 'Store Front & Fulfillment',
      glow: 'cyan',
      skills: [
        { name: 'Shopify Store Admin & Catalog Upload', proficiency: 98, level: 'Expert', experience: '4+ Yrs', badge: 'Core' },
        { name: 'Amazon Seller Central (FBA/FBM)', proficiency: 94, level: 'Advanced', experience: '3+ Yrs' },
        { name: 'SEO Product Description & Copywriting', proficiency: 95, level: 'Expert', experience: '4+ Yrs' },
        { name: 'Inventory Reconciliation & Stock Tracking', proficiency: 96, level: 'Master', experience: '4+ Yrs' },
        { name: 'Order Processing & Returns Management', proficiency: 95, level: 'Expert', experience: '3+ Yrs' },
        { name: 'E-commerce Customer Support & Helpdesk', proficiency: 92, level: 'Expert', experience: '3+ Yrs' },
      ]
    },
    {
      title: 'Social Media & Video Content Growth',
      category: 'Audience & Engagement',
      glow: 'lime',
      skills: [
        { name: 'YouTube SEO & Algorithm Metadata Tagging', proficiency: 96, level: 'Expert', experience: '3+ Yrs', badge: 'Top CTR' },
        { name: 'Facebook Page & Group Management', proficiency: 95, level: 'Expert', experience: '4+ Yrs' },
        { name: 'Instagram Content Strategy & Carousel Grids', proficiency: 94, level: 'Expert', experience: '3+ Yrs' },
        { name: 'LinkedIn Company Page & Professional Outreach', proficiency: 90, level: 'Advanced', experience: '2+ Yrs' },
        { name: 'CTR-Focused Thumbnail & Creative Design', proficiency: 94, level: 'Expert', experience: '3+ Yrs' },
        { name: 'Social Media Scheduling & Community Moderation', proficiency: 96, level: 'Master', experience: '4+ Yrs' },
      ]
    },
    {
      title: 'Executive Assistance & Data Intelligence',
      category: 'Productivity & Operations',
      glow: 'cyan',
      skills: [
        { name: 'MS Excel / Google Sheets Formulas & Pivot Tables', proficiency: 97, level: 'Master', experience: '4+ Yrs', badge: 'High Precision' },
        { name: 'Competitor & Keyword Mining (Helium 10, VidIQ)', proficiency: 92, level: 'Advanced', experience: '3+ Yrs' },
        { name: 'Email Inbox Zero & Calendar Management', proficiency: 94, level: 'Expert', experience: '4+ Yrs' },
        { name: 'SOP Documentation & Workflow Automation', proficiency: 90, level: 'Advanced', experience: '3+ Yrs' },
        { name: 'CRM Data Cleaning & B2B Lead Management', proficiency: 95, level: 'Expert', experience: '3+ Yrs' },
        { name: 'Executive Daily Reporting & KPI Dashboards', proficiency: 96, level: 'Master', experience: '4+ Yrs', badge: 'Actionable' },
      ]
    }
  ];

  const toolsList: ToolItem[] = [
    // E-commerce
    { name: 'Shopify & Shopify Plus', category: 'E-commerce', role: 'Store Management, Product Uploads & Orders', proficiency: 'Master', glow: 'cyan', highlight: 'Catalog Scaling' },
    { name: 'Amazon Seller Central', category: 'E-commerce', role: 'Listings, Flat Files, Inventory & Pricing', proficiency: 'Expert', glow: 'cyan', highlight: 'FBA Logistics' },
    { name: 'Helium 10 & Jungle Scout', category: 'E-commerce', role: 'Keyword Extraction & Competitor Audits', proficiency: 'Advanced', glow: 'cyan', highlight: 'High-Rank SEO' },
    { name: 'WooCommerce', category: 'E-commerce', role: 'WordPress Store Maintenance & Product Sync', proficiency: 'Advanced', glow: 'cyan', highlight: 'WP Integration' },
    
    // Social & Video
    { name: 'YouTube Studio', category: 'Social & Video', role: 'Video SEO, Analytics, End-Screens & Cards', proficiency: 'Master', glow: 'lime', highlight: 'Growth Scaling' },
    { name: 'VidIQ & TubeBuddy', category: 'Social & Video', role: 'Algorithm Optimization & Keyword Scoring', proficiency: 'Expert', glow: 'lime', highlight: 'Top Search Tags' },
    { name: 'Meta Business Suite', category: 'Social & Video', role: 'Facebook & Instagram Scheduling & Insights', proficiency: 'Master', glow: 'lime', highlight: 'Cross-Posting' },
    { name: 'Buffer / Later / Metricool', category: 'Social & Video', role: 'Multi-Channel Calendar & Auto-Publishing', proficiency: 'Expert', glow: 'lime', highlight: 'Queue Delivery' },
    
    // Design & Creative
    { name: 'Canva Pro', category: 'Design & Creative', role: 'Thumbnails, Carousels, Banners & Brand Assets', proficiency: 'Master', glow: 'cyan', highlight: 'Rapid Prototyping' },
    { name: 'Adobe Photoshop', category: 'Design & Creative', role: 'Photo Retouching, Cutouts & Thumbnail FX', proficiency: 'Advanced', glow: 'cyan', highlight: 'Visual Polish' },
    { name: 'CapCut / Premiere Basics', category: 'Design & Creative', role: 'Shorts & Reels Formatting & Subtitles', proficiency: 'Advanced', glow: 'cyan', highlight: 'Vertical Video' },
    
    // Productivity & Data
    { name: 'MS Excel (Formulas & Macros)', category: 'Productivity & Data', role: 'Inventory Sheets, VLOOKUP, Reorder Logic', proficiency: 'Master', glow: 'lime', highlight: '99.9% Accuracy' },
    { name: 'Google Sheets & Workspace', category: 'Productivity & Data', role: 'Collaborative Dashboards & Client Trackers', proficiency: 'Master', glow: 'lime', highlight: 'Real-time Sync' },
    { name: 'Notion & Trello & ClickUp', category: 'Productivity & Data', role: 'Sprint Tracking, SOP Storage & Kanban', proficiency: 'Expert', glow: 'lime', highlight: 'Task Autopilot' },
    { name: 'Slack & Zoom & Gmail', category: 'Productivity & Data', role: 'Daily Async Reporting & Rapid Client Comms', proficiency: 'Master', glow: 'cyan', highlight: 'Sub-2h SLA' },
    { name: 'Zendesk & Gorgias', category: 'Productivity & Data', role: 'Customer Ticketing & Live Chat Support', proficiency: 'Expert', glow: 'cyan', highlight: 'CSAT Support' },
  ];

  const educationList: EducationItem[] = [
    {
      degree: 'Bachelor of Business Administration (BBA) / Graduation',
      institution: 'National University / Reputed Academic Institution',
      timeline: 'Completed',
      field: 'Business Studies, Management & Marketing Fundamentals',
      badge: 'Academic Foundation',
      highlights: [
        'Solid grounding in business operations, customer psychology, and organizational workflow management.',
        'Applied analytical coursework in financial budgeting, inventory calculation, and commercial logistics.',
        'Strong bilingual communication and corporate business correspondence proficiency.'
      ]
    },
    {
      degree: 'Professional Virtual Assistant & E-commerce Operations',
      institution: 'Verified Freelance & Industry Training Programs',
      timeline: 'Continuous Professional Development',
      field: 'Store Management, Amazon FBA & Social Growth Operations',
      badge: 'Specialized Training',
      highlights: [
        'Specialized mastery of Shopify catalog hierarchy, SEO product architecture, and Amazon Seller Central.',
        'Hands-on practical certification in YouTube Growth Mastery, VidIQ keyword mining, and high-CTR thumbnail design.',
        'Standard Operating Procedure (SOP) design for fast, mistake-free daily operational task execution.'
      ]
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Board of Intermediate and Secondary Education',
      timeline: 'Completed',
      field: 'Business Studies & Core Analytical Foundations',
      badge: 'Educational Milestone',
      highlights: [
        'Achieved outstanding academic results with distinction in accounting, business statistics, and mathematics.',
        'Developed foundational computer science, spreadsheet calculation, and English language communication skills.'
      ]
    }
  ];

  const filteredTools = toolCategory === 'all' 
    ? toolsList 
    : toolsList.filter(t => t.category === toolCategory);

  return (
    <section 
      id="skills" 
      className="relative py-24 bg-gradient-to-b from-black via-[#040810] to-black cyber-grid-bg overflow-hidden border-t border-slate-900"
    >
      {/* Ambient background glow accents */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-bold tracking-wider uppercase mb-3 shadow-[0_0_12px_rgba(0,255,255,0.2)]">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            Core Competencies & Academic Background
          </div>

          <h2 
            id="skills-section-title"
            className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4"
          >
            <span className="text-white">SKILLS, </span>
            <span className="text-cyan-400">TOOLS </span>
            <span className="text-slate-400">& </span>
            <span className="text-lime-400">EDUCATION</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            A comprehensive overview of what I do, the industry software I master daily, and the educational foundation backing my work.
          </p>
        </div>

        {/* Main Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900/90 border border-slate-700 backdrop-blur-md">
            {[
              { id: 'all', label: 'All-in-One View', icon: Layers },
              { id: 'skills', label: 'Professional Skills', icon: Wrench },
              { id: 'tools', label: 'Software & Tools', icon: Laptop },
              { id: 'education', label: 'Education & Training', icon: GraduationCap },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-3.5 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer flex items-center gap-2 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-400 to-teal-400 text-black shadow-[0_0_20px_rgba(0,255,255,0.4)]'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Section 1: Professional Skills Breakdown */}
        {(activeTab === 'all' || activeTab === 'skills') && (
          <div className="mb-20">
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-300 shadow-[0_0_12px_rgba(0,255,255,0.25)]">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-wide">Specialized Capabilities & Key Skills</h3>
                  <p className="text-xs text-slate-400">Proven execution with tested efficiency and conversion metrics</p>
                </div>
              </div>
              <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs text-slate-300 font-mono">
                16+ Core Proficiencies
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {skillCategories.map((cat, idx) => (
                <div
                  key={idx}
                  className={`p-6 sm:p-7 rounded-3xl glass-panel-3d border transition-all duration-300 flex flex-col justify-between ${
                    cat.glow === 'cyan' 
                      ? 'border-cyan-500/30 hover:border-cyan-400/60 shadow-[0_10px_35px_rgba(0,0,0,0.6)]' 
                      : 'border-lime-500/30 hover:border-lime-400/60 shadow-[0_10px_35px_rgba(0,0,0,0.6)]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border ${
                        cat.glow === 'cyan'
                          ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40'
                          : 'bg-lime-950/80 text-lime-300 border-lime-500/40'
                      }`}>
                        {cat.category}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">Verified</span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-white mb-6 leading-snug">
                      {cat.title}
                    </h4>

                    <div className="space-y-4">
                      {cat.skills.map((skill, sIdx) => (
                        <div key={sIdx} className="space-y-1.5">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-medium text-slate-200 flex items-center gap-1.5">
                              <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${
                                cat.glow === 'cyan' ? 'text-cyan-400' : 'text-lime-400'
                              }`} />
                              <span>{skill.name}</span>
                            </span>
                            <div className="flex items-center gap-2 font-mono shrink-0">
                              {skill.badge && (
                                <span className="px-1.5 py-0.2 text-[9px] rounded bg-cyan-950 text-cyan-300 border border-cyan-500/40">
                                  {skill.badge}
                                </span>
                              )}
                              <span className="text-[11px] text-slate-400">{skill.experience}</span>
                            </div>
                          </div>

                          {/* Progress Meter Bar */}
                          <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                            <motion.div 
                              className={`h-full rounded-full ${
                                cat.glow === 'cyan' 
                                  ? 'bg-gradient-to-r from-cyan-500 to-teal-400' 
                                  : 'bg-gradient-to-r from-lime-500 to-emerald-400'
                              }`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.proficiency}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: 0.05 * sIdx }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Performance Benchmark</span>
                    <span className={cat.glow === 'cyan' ? 'text-cyan-400 font-bold' : 'text-lime-400 font-bold'}>
                      Top 5% Freelance VA
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 2: Tools & Software Mastery */}
        {(activeTab === 'all' || activeTab === 'tools') && (
          <div className="mb-20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-3 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-lime-950/80 border border-lime-500/40 flex items-center justify-center text-lime-300 shadow-[0_0_12px_rgba(163,230,53,0.25)]">
                  <Laptop className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-wide">Software & Tool Stack</h3>
                  <p className="text-xs text-slate-400">Industry-grade applications I navigate with high speed and zero hand-holding</p>
                </div>
              </div>

              {/* Tool Category Filter */}
              <div className="flex flex-wrap gap-1.5">
                {['all', 'E-commerce', 'Social & Video', 'Productivity & Data', 'Design & Creative'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setToolCategory(filter)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                      toolCategory === filter
                        ? 'bg-lime-400 text-black shadow-[0_0_12px_rgba(163,230,53,0.3)]'
                        : 'bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                    }`}
                  >
                    {filter === 'all' ? 'All Tools' : filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Tools Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredTools.map((tool, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-400/50 transition-all hover:-translate-y-1 group relative overflow-hidden flex flex-col justify-between"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl group-hover:bg-cyan-500/15 transition-all" />

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                        {tool.category}
                      </span>
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${
                        tool.proficiency === 'Master'
                          ? 'bg-emerald-950 text-emerald-300 border-emerald-500/40'
                          : tool.proficiency === 'Expert'
                          ? 'bg-cyan-950 text-cyan-300 border-cyan-500/40'
                          : 'bg-amber-950 text-amber-300 border-amber-500/40'
                      }`}>
                        {tool.proficiency}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                      {tool.name}
                    </h4>

                    <p className="text-xs text-slate-400 leading-relaxed mb-3">
                      {tool.role}
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-slate-900 flex items-center justify-between text-[11px]">
                    <span className="text-slate-500">Key Focus:</span>
                    <span className="text-slate-300 font-mono font-medium">{tool.highlight}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Custom Tool Adaptability Banner */}
            <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-left">
                <div className="p-2.5 rounded-xl bg-cyan-950/80 text-cyan-300 border border-cyan-500/40 shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Using a Proprietary or Custom Internal Tool?</h4>
                  <p className="text-xs text-slate-400">I have a proven record of onboarding custom software, ERPs, and internal dashboards within 24 to 48 hours.</p>
                </div>
              </div>
              <a
                href="#contact"
                className="px-4 py-2 rounded-xl text-xs font-bold uppercase text-black btn-3d-neon shrink-0 cursor-pointer whitespace-nowrap"
              >
                Let's Discuss Your Stack
              </a>
            </div>
          </div>
        )}

        {/* Section 3: Educational Background & Certifications */}
        {(activeTab === 'all' || activeTab === 'education') && (
          <div>
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-300 shadow-[0_0_12px_rgba(0,255,255,0.25)]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-wide">Educational Background & Training</h3>
                  <p className="text-xs text-slate-400">Academic credentials and specialized professional development</p>
                </div>
              </div>
              <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs text-slate-300 font-mono">
                Verified Credentials
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {educationList.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-3xl glass-panel-3d border border-slate-800 hover:border-cyan-400/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                        {edu.badge}
                      </span>
                      <div className="flex items-center gap-1 text-[11px] text-slate-400 font-mono">
                        <Calendar className="w-3 h-3 text-cyan-400" />
                        <span>{edu.timeline}</span>
                      </div>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-white mb-1.5 leading-snug">
                      {edu.degree}
                    </h4>

                    <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-medium mb-3">
                      <Building2 className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                      <span>{edu.institution}</span>
                    </div>

                    <p className="text-xs text-slate-300 font-mono mb-4 pb-3 border-b border-slate-900">
                      Major / Focus: <span className="text-white">{edu.field}</span>
                    </p>

                    <div className="space-y-2 text-xs text-slate-300">
                      {edu.highlights.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-lime-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-[11px] text-slate-400">
                    <Award className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Academic & Practical Excellence Verified</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

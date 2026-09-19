import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Menu, 
  X, 
  ArrowUpRight, 
  ShieldCheck, 
  MessageSquare
} from 'lucide-react';
import { NAV_ITEMS, HERO_DATA } from '../data/portfolioData';

const DYNAMIC_ROLES = [
  'Virtual Assistant',
  'E-commerce Specialist',
  'Social Media VA',
  'Operations Partner'
];

interface HeaderProps {
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % DYNAMIC_ROLES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ['home', 'about', 'services', 'skills', 'portfolio', 'why-me', 'testimonials', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-black/80 backdrop-blur-xl border-b border-cyan-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)]' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Top Left: Dynamic Brand Header Badge */}
        <motion.a 
          href="#home" 
          id="header-brand-badge"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="group relative flex items-center gap-2.5 py-1.5 px-3 sm:px-3.5 rounded-2xl bg-gradient-to-r from-slate-950/95 via-slate-900/90 to-slate-950/95 border border-cyan-500/30 shadow-[0_4px_20px_rgba(0,255,255,0.15)] hover:border-cyan-400/80 hover:shadow-[0_0_25px_rgba(6,182,212,0.35)] transition-all overflow-hidden"
        >
          {/* Subtle Ambient Hover Beam */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

          {/* Mini Avatar with Live Online Ping Status */}
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl overflow-hidden border border-cyan-400/50 shadow-[0_0_12px_rgba(6,182,212,0.3)] shrink-0 bg-slate-900">
            <img 
              src={HERO_DATA.avatarImage} 
              alt="Shamim Hossen"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500" 
            />
            {/* Live Online Dot */}
            <span className="absolute bottom-0.5 right-0.5 w-2 h-2 rounded-full bg-emerald-400 border border-slate-950 shadow-[0_0_6px_#10b981]">
              <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
            </span>
          </div>

          {/* Text Details with Dynamic Cycling Role below Name */}
          <div className="flex flex-col text-left justify-center">
            <span className="font-sans font-extrabold text-sm sm:text-base text-white tracking-wide group-hover:text-cyan-300 transition-colors drop-shadow-sm leading-tight">
              SHAMIM HOSSEN
            </span>
            
            {/* Dynamic Animated Role Pill placed under the name */}
            <div className="h-5 overflow-hidden flex items-center mt-1">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ y: 7, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -7, opacity: 0 }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                  className="text-[10px] sm:text-[11px] font-mono font-medium text-cyan-300 whitespace-nowrap bg-cyan-950/70 border border-cyan-500/35 px-2 py-0.5 rounded-md shadow-[0_0_10px_rgba(6,182,212,0.15)] flex items-center gap-1.5"
                >
                  <span className="w-1 h-1 rounded-full bg-cyan-400 animate-pulse" />
                  {DYNAMIC_ROLES[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </motion.a>

        {/* Top Right: Floating 3D Navigation Buttons */}
        <nav 
          id="header-nav-desktop"
          className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_8px_20px_rgba(0,0,0,0.5)] whitespace-nowrap"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.label}
                href={item.href}
                id={`nav-link-${item.label.toLowerCase().replace(' ', '-')}`}
                className={`relative px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap flex-shrink-0 transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? 'text-cyan-300 bg-cyan-950/70 border border-cyan-400/40 shadow-[0_0_15px_rgba(0,255,255,0.25)]'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {item.label}
                {item.badge && (
                  <span className={`text-[9px] font-mono px-1.5 py-0.2 rounded-full ${
                    item.badge === 'Core'
                      ? 'bg-lime-950 text-lime-400 border border-lime-500/40'
                      : 'bg-cyan-950 text-cyan-400 border border-cyan-500/40'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </a>
            );
          })}
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <motion.button
            id="header-cta-btn"
            onClick={onOpenConsultation}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold tracking-wide text-black btn-3d-neon uppercase cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span>Free Audit</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-cyan-400 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-950/95 border-b border-cyan-500/20 backdrop-blur-2xl px-6 py-4 mt-2"
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-cyan-400 hover:bg-slate-900/80 flex items-center justify-between border border-transparent hover:border-cyan-500/30"
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                      {item.badge}
                    </span>
                  )}
                </a>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-black btn-3d-neon cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Get A Free Consultation</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

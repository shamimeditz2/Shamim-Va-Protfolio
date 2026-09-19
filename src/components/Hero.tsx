import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  ArrowRight, 
  TrendingUp, 
  CheckCircle2, 
  Zap, 
  ShoppingBag, 
  Video, 
  FileSpreadsheet,
  Award,
  ChevronDown,
  Briefcase,
  ArrowUpRight,
  MessageSquare
} from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';

interface AnimatedStatCardProps {
  label: string;
  value: string;
  index: number;
}

const AnimatedStatCard: React.FC<AnimatedStatCardProps> = ({ label, value, index }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const match = value.match(/^([^0-9.]*)([0-9,.]+)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const prefix = match[1];
    const numStr = match[2].replace(/,/g, '');
    const suffix = match[3];
    const target = parseFloat(numStr) || 0;
    const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0;
    const isComma = match[2].includes(',');

    let startTime: number | null = null;
    let animationFrameId: number;
    const duration = 1800;
    const delay = index * 120;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp + delay;
      if (timestamp < startTime) {
        animationFrameId = requestAnimationFrame(step);
        return;
      }

      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = eased * target;

      let formattedNum = '';
      if (isComma) {
        formattedNum = Math.floor(current).toLocaleString();
      } else if (decimals > 0) {
        formattedNum = current.toFixed(decimals);
      } else {
        formattedNum = Math.floor(current).toString();
      }

      setDisplayValue(`${prefix}${formattedNum}${suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [value, index]);

  const statIcons = [
    <TrendingUp key="0" className="w-3.5 h-3.5 text-cyan-400" />,
    <ShoppingBag key="1" className="w-3.5 h-3.5 text-lime-400" />,
    <Sparkles key="2" className="w-3.5 h-3.5 text-cyan-300" />,
    <CheckCircle2 key="3" className="w-3.5 h-3.5 text-lime-300" />
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: 0.2 + index * 0.1, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      whileHover={{ 
        y: -4, 
        scale: 1.03,
        transition: { duration: 0.2 } 
      }}
      whileTap={{ scale: 0.98 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative p-3 sm:p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/90 backdrop-blur-md hover:border-cyan-400/60 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_0_25px_rgba(6,182,212,0.35)] group overflow-hidden cursor-default"
    >
      {/* Top glowing edge line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-40 group-hover:opacity-100 transition-opacity" />

      {/* Shimmer light sweep */}
      <motion.div 
        className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent pointer-events-none -skew-x-12"
        initial={{ x: '-150%' }}
        animate={{ x: isHovered ? '150%' : ['-150%', '200%'] }}
        transition={{ 
          repeat: isHovered ? 0 : Infinity, 
          repeatDelay: 3.5 + index * 0.8, 
          duration: 1.2, 
          ease: 'easeInOut' 
        }}
      />

      <div className="relative z-10 flex flex-col justify-between h-full">
        <div className="flex items-center justify-between mb-1">
          <span className="font-sans font-black text-xl sm:text-2xl text-cyan-300 group-hover:text-cyan-200 transition-colors drop-shadow-[0_0_12px_rgba(6,182,212,0.35)]">
            {displayValue}
          </span>
          <div className="p-1 rounded-lg bg-cyan-950/70 border border-cyan-500/30 group-hover:border-cyan-400/60 group-hover:scale-110 transition-all">
            {statIcons[index % statIcons.length]}
          </div>
        </div>
        <div className="text-[11px] font-medium text-slate-400 group-hover:text-slate-200 tracking-wide mt-0.5 leading-tight transition-colors">
          {label}
        </div>
      </div>
    </motion.div>
  );
};

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden cyber-grid-bg"
      onMouseMove={handleMouseMove}
    >
      {/* Volumetric Neon Lighting Orbs & Depth Atmospheres */}
      <div 
        className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-cyan-500/15 blur-[120px] pointer-events-none"
        style={{
          transform: `translate(${mousePos.x * -30}px, ${mousePos.y * -30}px)`
        }}
      />
      <div 
        className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-lime-500/15 blur-[140px] pointer-events-none"
        style={{
          transform: `translate(${mousePos.x * 35}px, ${mousePos.y * 35}px)`
        }}
      />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-cyan-500/10 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Glowing Extruded 3D Typography & Copy */}
          <motion.div 
            className="lg:col-span-7 flex flex-col items-start text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Status Pill Badge (Compact) */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-cyan-400/40 shadow-[0_0_12px_rgba(0,255,255,0.2)] mb-5 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-wide text-cyan-300 uppercase">
                {HERO_DATA.availability}
              </span>
            </div>

            {/* Clean, Modern Animated Headline */}
            <h1 
              id="hero-headline"
              className="tracking-tight text-white leading-[1.2] mb-6"
            >
              {/* Name Introduction */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-slate-100 font-bold text-3xl sm:text-4xl md:text-[46px] tracking-tight mb-3 flex items-center flex-wrap gap-2"
              >
                <span>Hi, I'm</span>
                <span className="relative inline-flex items-center">
                  {/* Subtle soft backdrop ambient aura */}
                  <span className="absolute -inset-x-2 -inset-y-1 bg-cyan-500/15 rounded-xl blur-lg pointer-events-none" />
                  
                  {/* Glowing shimmering name */}
                  <span className="relative z-10 font-black tracking-wider uppercase animate-shimmer-cyan aurora-glow-cyan">
                    SHAMIM
                  </span>
                </span>
              </motion.div>

              {/* Tagline with Sophisticated Continuous Light Flow */}
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-semibold sm:font-bold leading-snug space-y-2">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-wrap items-center gap-x-2.5"
                >
                  <span className="text-white">Your Partner for</span>
                  <span className="relative inline-flex items-center group">
                    <span className="absolute -inset-x-2 -inset-y-0.5 bg-cyan-500/10 rounded-lg blur-md group-hover:bg-cyan-500/20 transition-all pointer-events-none" />
                    <span className="relative z-10 font-bold animate-shimmer-cyan aurora-glow-cyan">
                      Scaling E-commerce
                    </span>
                  </span>
                  <span className="text-slate-200">&</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="relative inline-flex items-center group">
                    <span className="absolute -inset-x-2 -inset-y-0.5 bg-lime-500/10 rounded-lg blur-md group-hover:bg-lime-500/20 transition-all pointer-events-none" />
                    <span className="relative z-10 font-bold animate-shimmer-lime aurora-glow-lime">
                      Amplifying Social Media.
                    </span>
                  </span>
                </motion.div>
              </div>
            </h1>

            {/* Subheadline (Clean white text) */}
            <p 
              id="hero-subheadline"
              className="text-base sm:text-lg md:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl mb-8"
            >
              {HERO_DATA.subheadline}
            </p>

            {/* Call To Action: Hire on Upwork & Fiverr + Explore Project */}
            <div className="space-y-3 mb-10">
              <div className="flex flex-wrap items-center gap-3.5">
                {/* Upwork Hire Button */}
                <motion.a
                  id="hero-upwork-cta"
                  href={HERO_DATA.upworkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="relative group px-6 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-extrabold tracking-wide text-white bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-400 hover:to-green-500 cursor-pointer overflow-hidden flex items-center gap-2.5 shadow-[0_0_25px_rgba(16,185,129,0.45)] border border-emerald-300/40"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
                  <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-100" />
                  <span>{HERO_DATA.ctaUpwork}</span>
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </motion.a>

                {/* Fiverr Hire Button */}
                <motion.a
                  id="hero-fiverr-cta"
                  href={HERO_DATA.fiverrUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="relative group px-6 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-extrabold tracking-wide text-black bg-gradient-to-r from-teal-300 via-cyan-400 to-emerald-300 hover:from-teal-200 hover:to-cyan-300 cursor-pointer overflow-hidden flex items-center gap-2.5 shadow-[0_0_25px_rgba(6,182,212,0.45)] border border-cyan-200/50"
                >
                  <div className="absolute inset-0 bg-white/25 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                  <span>{HERO_DATA.ctaFiverr}</span>
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </motion.a>

                {/* Explore Project Button */}
                <a
                  href="#portfolio"
                  id="hero-secondary-cta"
                  className="px-5 sm:px-6 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-bold text-slate-200 hover:text-white bg-slate-900/90 border border-slate-700/80 hover:border-cyan-400/60 hover:bg-slate-800/90 transition-all flex items-center gap-2 backdrop-blur-sm shadow-md"
                >
                  <span>{HERO_DATA.ctaSecondary}</span>
                  <ChevronDown className="w-4 h-4 text-cyan-400" />
                </a>
              </div>

              {/* Direct Consultation Link */}
              <div className="flex items-center gap-2 pt-1 pl-1">
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="text-xs text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5 group cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span>Need custom scoping? <span className="text-cyan-300 underline underline-offset-4 font-semibold">Book a free consultation directly</span></span>
                </button>
              </div>
            </div>

            {/* Live Metrics Row with Dynamic Animations */}
            <div 
              id="hero-stats-row"
              className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800/80"
            >
              {HERO_DATA.stats.map((item, idx) => (
                <AnimatedStatCard
                  key={idx}
                  index={idx}
                  label={item.label}
                  value={item.value}
                />
              ))}
            </div>

          </motion.div>

          {/* Right Column: 3D Animated Character Avatar at Futuristic Glowing Desk */}
          <motion.div 
            className="lg:col-span-5 relative flex justify-center items-center -translate-y-3 sm:-translate-y-5 lg:-translate-y-10 xl:-translate-y-14"
            initial={{ opacity: 0, scale: 0.92, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Interactive 3D Card Stage with Parallax */}
            <div 
              className="relative w-full max-w-[480px] aspect-square rounded-3xl p-3 bg-gradient-to-br from-cyan-500/20 via-slate-800/40 to-lime-500/20 border border-cyan-400/30 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(0,255,255,0.2)]"
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 10}deg) rotateX(${mousePos.y * -10}deg)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              {/* Inner Glowing Framed Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black/90 group">
                <img 
                  src={HERO_DATA.avatarImage} 
                  alt="Shamim - Virtual Assistant & Operations Specialist" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle border sheen */}
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

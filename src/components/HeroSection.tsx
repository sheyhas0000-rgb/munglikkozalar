import React from 'react';
import { Rocket, Target, BookOpen, Image as ImageIcon, Sparkles, Shield, Trophy, Flame } from 'lucide-react';
import { TabType } from './Header';

interface HeroSectionProps {
  onNavigate: (tab: TabType) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <div className="relative py-12 sm:py-20 text-center overflow-hidden">
      {/* Background Radial Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-indigo-600/20 via-violet-600/20 to-cyan-500/20 blur-[120px] pointer-events-none rounded-full -z-10" />

      {/* Futuristic Small Chip */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-tech text-indigo-300 mb-6 backdrop-blur-md shadow-xs">
        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
        <span>NEXT-GEN LITERARY COMPETITION PLATFORM</span>
        <span className="text-slate-600">·</span>
        <span className="text-amber-400">1988 CLASSIC</span>
      </div>

      {/* Main Title */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-none">
        <span className="bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
          AI ADABIYOT
        </span>{' '}
        <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(99,102,241,0.4)]">
          CHALLENGE
        </span>
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
        Hudoyberdi To‘xtaboyev asarlari bo‘yicha bilimlar bellashuvi
      </p>

      {/* The 4 Glowing Action Buttons */}
      <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-3xl mx-auto px-4">
        {/* 🚀 BOSHLASH */}
        <button
          onClick={() => onNavigate('challenge')}
          className="btn-glow-primary px-7 py-3.5 rounded-xl font-heading font-semibold text-sm sm:text-base flex items-center gap-2.5 cursor-pointer shadow-lg"
        >
          <Rocket className="w-4 h-4 text-amber-300" />
          <span>🚀 BOSHLASH</span>
        </button>

        {/* 🎯 MUSOBAQA */}
        <button
          onClick={() => onNavigate('arena')}
          className="btn-glow-cyan px-7 py-3.5 rounded-xl font-heading font-semibold text-sm sm:text-base flex items-center gap-2.5 cursor-pointer shadow-lg"
        >
          <Target className="w-4 h-4 text-white" />
          <span>🎯 MUSOBAQA</span>
        </button>

        {/* 📚 ASARLAR */}
        <button
          onClick={() => onNavigate('questions50')}
          className="px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/[0.12] hover:border-indigo-400/40 font-heading font-semibold text-sm sm:text-base transition-all duration-200 flex items-center gap-2.5 cursor-pointer shadow-md backdrop-blur-md"
        >
          <BookOpen className="w-4 h-4 text-indigo-400" />
          <span>📚 ASARLAR</span>
        </button>

        {/* 🖼️ SIRLI RASMLAR */}
        <button
          onClick={() => onNavigate('mysteryImages')}
          className="px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/[0.12] hover:border-cyan-400/40 font-heading font-semibold text-sm sm:text-base transition-all duration-200 flex items-center gap-2.5 cursor-pointer shadow-md backdrop-blur-md"
        >
          <ImageIcon className="w-4 h-4 text-cyan-400" />
          <span>🖼️ SIRLI RASMLAR</span>
        </button>
      </div>

      {/* Stats Counter Bar */}
      <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto px-4">
        <div className="glass-panel rounded-2xl p-4 border border-white/[0.06] text-center">
          <div className="text-2xl sm:text-3xl font-tech font-bold text-white">50</div>
          <div className="text-xs text-slate-400 font-medium mt-0.5">Juda Qiyin Savol</div>
        </div>

        <div className="glass-panel rounded-2xl p-4 border border-white/[0.06] text-center">
          <div className="text-2xl sm:text-3xl font-tech font-bold text-cyan-400">30</div>
          <div className="text-xs text-slate-400 font-medium mt-0.5">Sirli Rasm Prompti</div>
        </div>

        <div className="glass-panel rounded-2xl p-4 border border-white/[0.06] text-center">
          <div className="text-2xl sm:text-3xl font-tech font-bold text-amber-400">10</div>
          <div className="text-xs text-slate-400 font-medium mt-0.5">Eng Noyob Detal</div>
        </div>

        <div className="glass-panel rounded-2xl p-4 border border-white/[0.06] text-center">
          <div className="text-2xl sm:text-3xl font-tech font-bold text-violet-400">5</div>
          <div className="text-xs text-slate-400 font-medium mt-0.5">Final Boss Savoli</div>
        </div>
      </div>
    </div>
  );
};

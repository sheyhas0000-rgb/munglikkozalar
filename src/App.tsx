import React, { useState } from 'react';
import { Header, TabType } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ChallengeMode } from './components/ChallengeMode';
import { Questions50View } from './components/Questions50View';
import { Hardest10View } from './components/Hardest10View';
import { MysteryImages30View } from './components/MysteryImages30View';
import { FinalBossView } from './components/FinalBossView';
import { TournamentArena } from './components/TournamentArena';
import { BookLoreGuide } from './components/BookLoreGuide';
import { PrintHandbook } from './components/PrintHandbook';
import { Sparkles, Shield, ArrowUpRight, BookOpen, Film, Swords } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [judgeMode, setJudgeMode] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#070811] text-slate-100 flex flex-col font-sans relative selection:bg-indigo-500/30 selection:text-white">
      {/* Ambient background glow & cyber grid */}
      <div className="fixed inset-0 bg-grid-cyber pointer-events-none -z-20 opacity-60" />
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 blur-[140px] pointer-events-none -z-10 rounded-full" />
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 blur-[140px] pointer-events-none -z-10 rounded-full" />

      {/* Main Glass Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        judgeMode={judgeMode}
        setJudgeMode={setJudgeMode}
      />

      {/* Main Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* HOME VIEW: HERO + OVERVIEW */}
        {activeTab === 'home' && (
          <div className="space-y-12">
            <HeroSection onNavigate={(tab) => setActiveTab(tab)} />

            {/* Platform Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              <div
                onClick={() => setActiveTab('challenge')}
                className="glass-card-interactive rounded-2xl p-6 border border-white/[0.08] cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-white text-lg group-hover:text-amber-300 transition-colors">
                  AI Solo Challenge
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  50 ta qiyin savol bo‘yicha interaktiv test rejimi: A/B/C/D variantlari, real taymer, streak multiplikatori va reyting nishonlari.
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-tech text-amber-400">
                  <span>Sinovdan o‘tish</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

              <div
                onClick={() => setActiveTab('mysteryImages')}
                className="glass-card-interactive rounded-2xl p-6 border border-white/[0.08] cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                  <Film className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-white text-lg group-hover:text-cyan-300 transition-colors">
                  30 Ta Sirli Rasm
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Katta kinematik kadr, vizual deduksiya sensorlari va Midjourney / Imagen uchun tayyor yuqori sifatli kino-promptlar.
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-tech text-cyan-400">
                  <span>Epizodlarni topish</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

              <div
                onClick={() => setActiveTab('arena')}
                className="glass-card-interactive rounded-2xl p-6 border border-white/[0.08] cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
                  <Swords className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-white text-lg group-hover:text-indigo-300 transition-colors">
                  Turnir Arenasi
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  2 jamoa bellashuvi, jonli taymer, hisob-kitob tablo va hakamlik jurnali bilan professional olimpiada simulyatori.
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-tech text-indigo-400">
                  <span>Arenaga kirish</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SOLO CHALLENGE VIEW */}
        {activeTab === 'challenge' && (
          <ChallengeMode
            onGoToArena={() => setActiveTab('arena')}
            onGoToImages={() => setActiveTab('mysteryImages')}
          />
        )}

        {/* 50 HARD QUESTIONS VIEW */}
        {activeTab === 'questions50' && <Questions50View judgeMode={judgeMode} />}

        {/* 10 HARDEST QUESTIONS VIEW */}
        {activeTab === 'hardest10' && <Hardest10View judgeMode={judgeMode} />}

        {/* 30 MYSTERY IMAGES VIEW */}
        {activeTab === 'mysteryImages' && <MysteryImages30View judgeMode={judgeMode} />}

        {/* 5 FINAL BOSS VIEW */}
        {activeTab === 'finalBoss' && <FinalBossView judgeMode={judgeMode} />}

        {/* TOURNAMENT ARENA VIEW */}
        {activeTab === 'arena' && <TournamentArena />}

        {/* BOOK LORE GUIDE VIEW */}
        {activeTab === 'lore' && <BookLoreGuide />}

        {/* PRINT HANDBOOK VIEW */}
        {activeTab === 'print' && <PrintHandbook />}
      </main>

      {/* Footer */}
      <footer className="no-print border-t border-white/[0.06] bg-[#070811]/90 py-8 text-xs text-slate-500 mt-16 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left space-y-1">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-slate-300 font-heading font-semibold text-sm">
              <span>AI ADABIYOT PLATFORM</span>
              <span className="text-slate-600">·</span>
              <span className="text-indigo-400 font-tech text-xs">MUNGLI KO‘ZLAR (1988)</span>
            </div>
            <p className="text-slate-400 text-xs">
              O‘zbekiston xalq yozuvchisi Hudoyberdi To‘xtaboyev ijodiga bag‘ishlangan rasmiy musobaqa tizimi.
            </p>
          </div>

          <div className="flex items-center gap-3 font-tech text-xs text-slate-400">
            <span>50 SAVOL</span>
            <span>·</span>
            <span>30 RASM</span>
            <span>·</span>
            <span>10 NOYOB</span>
            <span>·</span>
            <span>5 BOSS</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

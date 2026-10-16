import React, { useState } from 'react';
import { Header, TabType } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CrosswordView } from './components/CrosswordView';
import { PhotoGalleryView } from './components/PhotoGalleryView';
import { ChallengeMode } from './components/ChallengeMode';
import { Questions50View } from './components/Questions50View';
import { Hardest10View } from './components/Hardest10View';
import { MysteryImages30View } from './components/MysteryImages30View';
import { FinalBossView } from './components/FinalBossView';
import { TournamentArena } from './components/TournamentArena';
import { BookLoreGuide } from './components/BookLoreGuide';
import { PrintHandbook } from './components/PrintHandbook';
import { Sparkles, Grid3X3, Camera, Rocket, Swords, Film, ArrowUpRight, BookOpen, Crown } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [judgeMode, setJudgeMode] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#070811] text-slate-100 flex flex-col font-sans relative selection:bg-cyan-500/30 selection:text-white">
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
        {/* HOME VIEW: HERO + COMPREHENSIVE OVERVIEW CARDS */}
        {activeTab === 'home' && (
          <div className="space-y-12">
            <HeroSection onNavigate={(tab) => setActiveTab(tab)} />

            {/* Platform Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
              {/* Card 1: Krossvord */}
              <div
                onClick={() => setActiveTab('crossword')}
                className="glass-card-interactive rounded-2xl p-6 border border-cyan-500/20 cursor-pointer group bg-gradient-to-br from-cyan-950/20 to-slate-900/60 shadow-lg"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                  <Grid3X3 className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-white text-lg group-hover:text-cyan-300 transition-colors">
                  Adabiy Krossvord
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Romanning qahramonlari, voqealari va ramzlari bo‘yicha 2 xil darajadagi interaktiv krossvord.
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-tech text-cyan-400 font-bold">
                  <span>Krossvordni yechish</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Card 2: Fotogalereya */}
              <div
                onClick={() => setActiveTab('photoGallery')}
                className="glass-card-interactive rounded-2xl p-6 border border-amber-500/20 cursor-pointer group bg-gradient-to-br from-amber-950/20 to-slate-900/60 shadow-lg"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                  <Camera className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-white text-lg group-hover:text-amber-300 transition-colors">
                  AI Fotogalereyasi
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  16 ta haqiqiy kinotematik surat, sahna tahlillari va yuqori sifatli katta ekranli ko‘rish rejimi.
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-tech text-amber-400 font-bold">
                  <span>Suratlarni ko‘rish</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Card 3: Solo Challenge */}
              <div
                onClick={() => setActiveTab('challenge')}
                className="glass-card-interactive rounded-2xl p-6 border border-emerald-500/20 cursor-pointer group bg-gradient-to-br from-emerald-950/20 to-slate-900/60 shadow-lg"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                  <Rocket className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-white text-lg group-hover:text-emerald-300 transition-colors">
                  Solo AI Test
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  50 ta qiyin savol, A/B/C/D variantlari, taymer, streak multiplikatori va Legendary nishoni.
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-tech text-emerald-400 font-bold">
                  <span>Bilimni sinash</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Card 4: Turnir Arenasi */}
              <div
                onClick={() => setActiveTab('arena')}
                className="glass-card-interactive rounded-2xl p-6 border border-indigo-500/20 cursor-pointer group bg-gradient-to-br from-indigo-950/20 to-slate-900/60 shadow-lg"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
                  <Swords className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-white text-lg group-hover:text-indigo-300 transition-colors">
                  Turnir Arenasi
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  2 jamoa bellashuvi, jonli taymer, hisob-kitob tablo va hakamlik jurnali bilan duel rejimi.
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-tech text-indigo-400 font-bold">
                  <span>Turnirni boshlash</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* KROSSVORD VIEW */}
        {activeTab === 'crossword' && <CrosswordView />}

        {/* PHOTO GALLERY VIEW */}
        {activeTab === 'photoGallery' && <PhotoGalleryView />}

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
              <span className="text-cyan-400 font-tech text-xs">MUNGLI KO‘ZLAR (1988)</span>
            </div>
            <p className="text-slate-400 text-xs">
              O‘zbekiston xalq yozuvchisi Hudoyberdi To‘xtaboyev ijodiga bag‘ishlangan rasmiy musobaqa va krossvord tizimi.
            </p>
          </div>

          <div className="flex items-center gap-3 font-tech text-xs text-slate-400">
            <span>KROSSVORD</span>
            <span>·</span>
            <span>16 AI SURAT</span>
            <span>·</span>
            <span>50 SAVOL</span>
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

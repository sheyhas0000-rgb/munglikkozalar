import React, { useState, useEffect } from 'react';
import { MYSTERY_IMAGES_30, MysteryImageItem } from '../data/mysteryImages30';
import { getGeneratedImageForId } from '../data/generatedImages';
import { Image as ImageIcon, Copy, Check, ChevronRight, ChevronLeft, Clock, Eye, Sparkles, Shuffle, Grid, Film, Search, Key } from 'lucide-react';

interface MysteryImages30ViewProps {
  judgeMode: boolean;
}

export const MysteryImages30View: React.FC<MysteryImages30ViewProps> = ({ judgeMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'cinematic' | 'grid'>('cinematic');
  const [userGuess, setUserGuess] = useState('');
  const [isRevealed, setIsRevealed] = useState(false);
  const [showTechnicalPrompt, setShowTechnicalPrompt] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(60);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [copiedPromptId, setCopiedPromptId] = useState<number | null>(null);
  const [search, setSearch] = useState('');

  const currentItem = MYSTERY_IMAGES_30[currentIndex];
  const currentImageSrc = getGeneratedImageForId(currentItem.id);

  // Timer countdown
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isTimerRunning && timerSeconds > 0) {
      timer = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isTimerRunning, timerSeconds]);

  const handleNext = () => {
    if (currentIndex + 1 < MYSTERY_IMAGES_30.length) {
      setCurrentIndex((prev) => prev + 1);
      resetState();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      resetState();
    }
  };

  const handleRandom = () => {
    const rand = Math.floor(Math.random() * MYSTERY_IMAGES_30.length);
    setCurrentIndex(rand);
    resetState();
  };

  const resetState = () => {
    setUserGuess('');
    setIsRevealed(false);
    setShowTechnicalPrompt(false);
    setTimerSeconds(60);
    setIsTimerRunning(true);
  };

  const copyPrompt = (item: MysteryImageItem) => {
    navigator.clipboard.writeText(item.prompt);
    setCopiedPromptId(item.id);
    setTimeout(() => setCopiedPromptId(null), 2000);
  };

  // Filtered list for grid mode
  const filteredList = MYSTERY_IMAGES_30.filter((item) => {
    const q = search.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.judgeAnswer.toLowerCase().includes(q) ||
      item.episode.toLowerCase().includes(q) ||
      item.keyClues.some((c) => c.toLowerCase().includes(q))
    );
  });

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Top Controller Bar */}
      <div className="glass-panel rounded-2xl p-4 sm:p-5 border border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-tech text-cyan-400 uppercase tracking-widest">
            <Film className="w-3.5 h-3.5" />
            <span>AI DA YARATILGAN SIRLI RASMLAR</span>
            <span className="text-slate-600">·</span>
            <span>30 TA EPIZOD</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-white mt-0.5">
            Sirli Rasm Challenge
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode(viewMode === 'cinematic' ? 'grid' : 'cinematic')}
            className="px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-medium text-slate-300 hover:text-white transition-all flex items-center gap-2 cursor-pointer"
          >
            {viewMode === 'cinematic' ? <Grid className="w-4 h-4 text-cyan-400" /> : <Film className="w-4 h-4 text-cyan-400" />}
            <span>{viewMode === 'cinematic' ? 'Barcha 30 Rasmni Ko‘rish' : 'Kinematik Kadr'}</span>
          </button>

          {viewMode === 'cinematic' && (
            <button
              onClick={handleRandom}
              className="px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-medium text-slate-300 hover:text-white transition-all flex items-center gap-2 cursor-pointer"
            >
              <Shuffle className="w-4 h-4 text-indigo-400" />
              <span>Tasodifiy</span>
            </button>
          )}
        </div>
      </div>

      {/* VIEW MODE 1: CINEMATIC INTERACTIVE STAGE */}
      {viewMode === 'cinematic' ? (
        <div className="space-y-6">
          {/* Header Banner */}
          <div className="flex items-center justify-between text-xs font-tech text-slate-400 px-1">
            <div className="flex items-center gap-2">
              <span className="text-cyan-400 font-bold uppercase tracking-wider">🕵️ SIRLI EPIZOD</span>
              <span>·</span>
              <span className="text-white font-tech font-semibold">#{String(currentIndex + 1).padStart(2, '0')} / 30</span>
              <span>·</span>
              <span className="text-amber-400 font-medium">{'⭐'.repeat(currentItem.difficulty)}</span>
            </div>

            {/* Timer Widget */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-xl bg-white/[0.04] border border-white/[0.08]">
              <Clock className={`w-3.5 h-3.5 ${timerSeconds <= 10 ? 'text-rose-400 animate-pulse' : 'text-cyan-400'}`} />
              <span className={`font-tech text-xs font-bold ${timerSeconds <= 10 ? 'text-rose-400 animate-pulse' : 'text-slate-200'}`}>
                {timerSeconds}s
              </span>
            </div>
          </div>

          {/* LARGE CINEMATIC FRAME WITH ACTUAL AI-GENERATED IMAGE */}
          <div className="glass-panel-elevated rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden group shadow-2xl transition-all">
            {/* Ambient Backlight Glow */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-3/4 h-48 bg-gradient-to-r from-cyan-500/15 via-indigo-500/15 to-violet-500/15 blur-3xl pointer-events-none rounded-full" />

            <div className="relative z-10 space-y-6">
              <div className="text-center space-y-1">
                <span className="text-xs uppercase font-tech tracking-widest text-indigo-300">
                  Rasmga qarab epizodni toping
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">
                  “Bu sahna qaysi voqeani anglatadi?”
                </h3>
              </div>

              {/* REAL AI-GENERATED CINEMATIC IMAGE VIEWER */}
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.15] bg-black shadow-2xl group/img">
                <img
                  src={currentImageSrc}
                  alt="Mungli ko'zlar sirli sahna"
                  className="w-full h-auto max-h-[520px] object-cover object-center transition-transform duration-700 ease-out group-hover/img:scale-[1.02]"
                />

                {/* Ambient vignette shadow gradient at bottom of image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />

                {/* Atmospheric scene title & mood pill on the image */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 text-xs">
                  <div>
                    <span className="text-[11px] font-tech text-cyan-300 uppercase tracking-widest block drop-shadow-md">
                      Kinematik Kadr #{currentItem.id}
                    </span>
                    <span className="text-white font-heading font-semibold text-sm sm:text-base drop-shadow-md">
                      {currentItem.title}
                    </span>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-slate-300 text-xs font-tech drop-shadow-md">
                    {currentItem.mood}
                  </span>
                </div>
              </div>

              {/* 3-5 Key Clues Sensors */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-2">
                <div className="flex items-center justify-between text-xs font-tech">
                  <span className="text-cyan-400 font-bold uppercase tracking-wider">
                    🧩 E’tibor Beriladigan Vizual Detallar:
                  </span>
                  <span className="text-slate-500">Raqib sezishi kerak bo‘lgan kalitlar</span>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {currentItem.keyClues.map((clue, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs text-slate-200 flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span>{clue}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* User Guess Input & Check Answer Button */}
              <div className="space-y-4 pt-1">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    value={userGuess}
                    onChange={(e) => setUserGuess(e.target.value)}
                    placeholder="O‘z taxminingizni yozing (masalan: Zufarning 'Volga'da halokati)..."
                    className="flex-1 px-4 py-3 bg-white/[0.04] border border-white/[0.1] rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') setIsRevealed(true);
                    }}
                  />
                  <button
                    onClick={() => setIsRevealed(!isRevealed)}
                    className="btn-glow-cyan px-6 py-3 rounded-xl font-heading text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    <span>{isRevealed ? 'Javobni Yashirish' : 'Hakam Javobini Ko‘rish'}</span>
                  </button>
                </div>

                {/* Revealed Answer Box */}
                {(isRevealed || judgeMode) && (
                  <div className="p-5 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 text-sm space-y-3 animate-fade-in shadow-[0_0_30px_rgba(16,185,129,0.15)]">
                    <div>
                      <div className="text-xs uppercase font-tech font-bold text-emerald-400 tracking-wider">
                        🔐 HAKAM UCHUN RASMIY JAVOB:
                      </div>
                      <p className="text-white font-medium text-base mt-1 leading-relaxed">
                        {currentItem.judgeAnswer}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-emerald-500/20 text-xs">
                      <div className="text-slate-400 font-tech uppercase tracking-wide">
                        📖 Asardagi Tegishli Epizod:
                      </div>
                      <p className="text-slate-300 mt-0.5 leading-relaxed">
                        {currentItem.episode}
                      </p>
                    </div>
                  </div>
                )}

                {/* Technical AI Prompt Toggle */}
                <div className="pt-2 text-right">
                  <button
                    onClick={() => setShowTechnicalPrompt(!showTechnicalPrompt)}
                    className="text-xs font-tech text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
                  >
                    {showTechnicalPrompt ? '− AI Promptini Yashirish' : '+ Rasm Generator Promptini Ko‘rish'}
                  </button>

                  {showTechnicalPrompt && (
                    <div className="mt-2 p-3 bg-black/50 border border-white/[0.08] rounded-xl text-left font-mono text-xs text-slate-400 relative">
                      <div className="flex items-center justify-between pb-1 border-b border-white/[0.06] mb-2">
                        <span className="text-cyan-400 text-[10px] uppercase font-tech font-bold">
                          Kadr Generator Prompti (Imagen / Midjourney)
                        </span>
                        <button
                          onClick={() => copyPrompt(currentItem)}
                          className="text-xs font-tech text-cyan-400 hover:text-cyan-300"
                        >
                          {copiedPromptId === currentItem.id ? '✓ Nusxalandi' : 'Nusxalash'}
                        </button>
                      </div>
                      <p className="select-all leading-relaxed">{currentItem.prompt}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
                <button
                  disabled={currentIndex === 0}
                  onClick={handlePrev}
                  className="px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] disabled:opacity-40 disabled:cursor-not-allowed border border-white/10 text-xs font-tech text-slate-300 hover:text-white flex items-center gap-2 cursor-pointer transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Oldingi Sahna</span>
                </button>

                <div className="text-xs font-tech text-slate-400">
                  {currentIndex + 1} / {MYSTERY_IMAGES_30.length}
                </div>

                <button
                  disabled={currentIndex === MYSTERY_IMAGES_30.length - 1}
                  onClick={handleNext}
                  className="px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] disabled:opacity-40 disabled:cursor-not-allowed border border-white/10 text-xs font-tech text-slate-300 hover:text-white flex items-center gap-2 cursor-pointer transition-all"
                >
                  <span>Keyingi Sahna</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* VIEW MODE 2: GALLERY GRID (ALL 30 CARDS WITH REAL IMAGES) */
        <div className="space-y-6">
          <div className="max-w-md relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="30 ta rasm ichidan qidirish (detal, epizod, voqea)..."
              className="w-full pl-10 pr-4 py-2.5 bg-white/[0.04] border border-white/[0.1] rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredList.map((item) => {
              const imgUrl = getGeneratedImageForId(item.id);
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    setCurrentIndex(MYSTERY_IMAGES_30.findIndex((m) => m.id === item.id));
                    setViewMode('cinematic');
                    resetState();
                  }}
                  className="glass-card-interactive rounded-2xl overflow-hidden border border-white/[0.08] cursor-pointer flex flex-col justify-between group"
                >
                  {/* Real image thumbnail */}
                  <div className="relative h-44 overflow-hidden bg-black">
                    <img
                      src={imgUrl}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070811] via-transparent to-transparent" />
                    <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-tech text-cyan-300 font-bold">
                      #{item.id} RASM
                    </div>
                    <div className="absolute top-2.5 right-2.5 text-[11px] font-tech text-amber-400 drop-shadow">
                      {'⭐'.repeat(item.difficulty)}
                    </div>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-heading font-bold text-white text-base group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h4>

                      <div className="mt-2.5 flex flex-wrap gap-1">
                        {item.keyClues.slice(0, 2).map((c, i) => (
                          <span key={i} className="text-[11px] px-2 py-0.5 rounded bg-white/[0.05] text-slate-300">
                            {c}
                          </span>
                        ))}
                        {item.keyClues.length > 2 && (
                          <span className="text-[11px] px-2 py-0.5 rounded bg-white/[0.05] text-slate-400">
                            +{item.keyClues.length - 2} detal
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-tech text-cyan-400">
                      <span>Kinematik kadrda ko‘rish</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

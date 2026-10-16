import React, { useState, useEffect } from 'react';
import { QUESTIONS_50 } from '../data/questions50';
import { HARDEST_10 } from '../data/hardest10';
import { MYSTERY_IMAGES_30 } from '../data/mysteryImages30';
import { FINAL_BOSS_5 } from '../data/finalBoss5';
import { getGeneratedImageForId } from '../data/generatedImages';
import { Swords, Play, Pause, RotateCcw, Shuffle, Clock, CheckCircle2, XCircle, Trophy, Zap, Shield } from 'lucide-react';

interface MatchLog {
  id: string;
  questionTitle: string;
  awardedTo: string;
  points: number;
  timestamp: string;
}

export const TournamentArena: React.FC = () => {
  // Teams
  const [team1Name, setTeam1Name] = useState('1-Jamoa (Zafar)');
  const [team2Name, setTeam2Name] = useState('2-Jamoa (Akbar)');
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);

  // Timer
  const [initialSeconds, setInitialSeconds] = useState(60);
  const [secondsLeft, setSecondsLeft] = useState(60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Active Card
  const [activeCategory, setActiveCategory] = useState<'50' | '10' | 'images' | 'boss'>('50');
  const [activeQuestion, setActiveQuestion] = useState<{
    type: string;
    title: string;
    text: string;
    answer: string;
    clues?: string[];
    evidence?: string;
    points: number;
    imageUrl?: string;
  } | null>(null);

  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);
  const [matchLogs, setMatchLogs] = useState<MatchLog[]>([]);

  // Timer effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isTimerRunning && secondsLeft > 0) {
      timer = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(timer);
  }, [isTimerRunning, secondsLeft]);

  const resetTimer = (sec = initialSeconds) => {
    setIsTimerRunning(false);
    setSecondsLeft(sec);
  };

  const drawRandomCard = () => {
    setIsAnswerRevealed(false);
    resetTimer(initialSeconds);

    if (activeCategory === '50') {
      const q = QUESTIONS_50[Math.floor(Math.random() * QUESTIONS_50.length)];
      setActiveQuestion({
        type: `50 Qiyin Savol #${q.id}`,
        title: q.category.toUpperCase(),
        text: q.question,
        answer: q.answer,
        evidence: q.evidence,
        points: 20,
      });
    } else if (activeCategory === '10') {
      const q = HARDEST_10[Math.floor(Math.random() * HARDEST_10.length)];
      setActiveQuestion({
        type: `10 Eng Qiyin #${q.id}`,
        title: q.category,
        text: q.question,
        answer: q.answer,
        evidence: `${q.evidence} (Maxfiy detal: ${q.secretDetail})`,
        points: 50,
      });
    } else if (activeCategory === 'images') {
      const img = MYSTERY_IMAGES_30[Math.floor(Math.random() * MYSTERY_IMAGES_30.length)];
      setActiveQuestion({
        type: `30 Sirli Rasm #${img.id}`,
        title: img.title,
        text: `🎨 VIZUAL TOPSHIRIQ: Raqib quyidagi sahna tasvirini ko‘rib asardagi qaysi epizod ekanini topishi kerak:\n\n${img.title}`,
        answer: img.judgeAnswer,
        evidence: img.episode,
        clues: img.keyClues,
        points: 30,
        imageUrl: getGeneratedImageForId(img.id),
      });
    } else {
      const boss = FINAL_BOSS_5[Math.floor(Math.random() * FINAL_BOSS_5.length)];
      setActiveQuestion({
        type: `Final Boss #${boss.id}`,
        title: boss.title,
        text: boss.question,
        answer: boss.fullMasterAnswer,
        evidence: `Asosiy talablar:\n${boss.expectedKeyPoints.join('\n')}`,
        points: 100,
      });
    }
  };

  const awardPoints = (team: 1 | 2, points: number) => {
    const timeStr = new Date().toLocaleTimeString();
    if (team === 1) {
      setScore1((prev) => prev + points);
      setMatchLogs((prev) => [
        {
          id: String(Date.now()),
          questionTitle: activeQuestion?.type || 'Savol',
          awardedTo: team1Name,
          points,
          timestamp: timeStr,
        },
        ...prev,
      ]);
    } else {
      setScore2((prev) => prev + points);
      setMatchLogs((prev) => [
        {
          id: String(Date.now()),
          questionTitle: activeQuestion?.type || 'Savol',
          awardedTo: team2Name,
          points,
          timestamp: timeStr,
        },
        ...prev,
      ]);
    }
  };

  const resetMatch = () => {
    if (window.confirm('Barcha hisob va jurnallar yangilansinmi?')) {
      setScore1(0);
      setScore2(0);
      setMatchLogs([]);
      setActiveQuestion(null);
      setIsAnswerRevealed(false);
      resetTimer();
    }
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Header Banner */}
      <div className="glass-panel rounded-2xl p-6 border border-white/[0.08] shadow-xl relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-tech text-indigo-400 uppercase tracking-widest">
              <Swords className="w-4 h-4 text-cyan-400" />
              <span>JONLI BELLASHUV SIMULYATORI</span>
              <span className="text-slate-600">·</span>
              <span>2 JAMOA DUELI</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mt-1">
              Musobaqa Arenasi
            </h2>
          </div>

          <button
            onClick={resetMatch}
            className="text-xs font-tech px-3.5 py-1.5 rounded-xl border border-white/10 hover:border-white/20 text-slate-400 hover:text-white transition-all cursor-pointer self-start sm:self-auto"
          >
            Hisobni Yangilash
          </button>
        </div>

        {/* Scoreboards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {/* Team 1 Card */}
          <div className="rounded-2xl p-5 bg-gradient-to-br from-indigo-950/40 to-slate-900/60 border border-indigo-500/30 flex items-center justify-between shadow-[0_0_25px_rgba(99,102,241,0.1)]">
            <div className="flex-1 pr-4">
              <input
                type="text"
                value={team1Name}
                onChange={(e) => setTeam1Name(e.target.value)}
                className="text-sm font-heading font-bold text-indigo-300 bg-transparent border-b border-indigo-500/30 focus:outline-none focus:border-indigo-400 w-full"
              />
              <div className="text-4xl font-tech font-black text-white mt-2">
                {score1} <span className="text-xs font-normal text-slate-500 font-sans">PTS</span>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex gap-1">
                <button onClick={() => awardPoints(1, 10)} className="px-2 py-1 rounded-md bg-white/[0.05] hover:bg-white/[0.1] text-xs font-tech text-indigo-300 cursor-pointer">+10</button>
                <button onClick={() => awardPoints(1, 20)} className="px-2 py-1 rounded-md bg-white/[0.05] hover:bg-white/[0.1] text-xs font-tech text-indigo-300 cursor-pointer">+20</button>
                <button onClick={() => awardPoints(1, 50)} className="px-2.5 py-1 rounded-md bg-indigo-600 hover:bg-indigo-500 text-xs font-tech font-bold text-white cursor-pointer">+50</button>
              </div>
              <div className="flex gap-1">
                <button onClick={() => awardPoints(1, 100)} className="px-2.5 py-1 rounded-md bg-indigo-700 hover:bg-indigo-600 text-xs font-tech font-bold text-white cursor-pointer">+100</button>
                <button onClick={() => awardPoints(1, -10)} className="px-2 py-1 rounded-md bg-rose-950/60 hover:bg-rose-900 text-xs font-tech text-rose-300 cursor-pointer">-10</button>
              </div>
            </div>
          </div>

          {/* Team 2 Card */}
          <div className="rounded-2xl p-5 bg-gradient-to-br from-emerald-950/40 to-slate-900/60 border border-emerald-500/30 flex items-center justify-between shadow-[0_0_25px_rgba(16,185,129,0.1)]">
            <div className="flex-1 pr-4">
              <input
                type="text"
                value={team2Name}
                onChange={(e) => setTeam2Name(e.target.value)}
                className="text-sm font-heading font-bold text-emerald-300 bg-transparent border-b border-emerald-500/30 focus:outline-none focus:border-emerald-400 w-full"
              />
              <div className="text-4xl font-tech font-black text-white mt-2">
                {score2} <span className="text-xs font-normal text-slate-500 font-sans">PTS</span>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex gap-1">
                <button onClick={() => awardPoints(2, 10)} className="px-2 py-1 rounded-md bg-white/[0.05] hover:bg-white/[0.1] text-xs font-tech text-emerald-300 cursor-pointer">+10</button>
                <button onClick={() => awardPoints(2, 20)} className="px-2 py-1 rounded-md bg-white/[0.05] hover:bg-white/[0.1] text-xs font-tech text-emerald-300 cursor-pointer">+20</button>
                <button onClick={() => awardPoints(2, 50)} className="px-2.5 py-1 rounded-md bg-emerald-600 hover:bg-emerald-500 text-xs font-tech font-bold text-white cursor-pointer">+50</button>
              </div>
              <div className="flex gap-1">
                <button onClick={() => awardPoints(2, 100)} className="px-2.5 py-1 rounded-md bg-emerald-700 hover:bg-emerald-600 text-xs font-tech font-bold text-white cursor-pointer">+100</button>
                <button onClick={() => awardPoints(2, -10)} className="px-2 py-1 rounded-md bg-rose-950/60 hover:bg-rose-900 text-xs font-tech text-rose-300 cursor-pointer">-10</button>
              </div>
            </div>
          </div>
        </div>

        {/* Timer Bar */}
        <div className="mt-5 pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-tech text-slate-400">JONLI TAYMER:</span>
            <div className={`px-3 py-1 rounded-lg font-tech font-bold text-sm ${
              secondsLeft <= 10 && secondsLeft > 0
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 animate-pulse'
                : 'bg-white/[0.04] text-white border border-white/[0.08]'
            }`}>
              {secondsLeft}s
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className="btn-glow-primary px-3.5 py-1.5 rounded-lg text-xs font-tech font-bold flex items-center gap-1.5 cursor-pointer"
            >
              {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isTimerRunning ? 'Pauza' : 'Boshlash'}</span>
            </button>
            <button
              onClick={() => resetTimer()}
              className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 border border-white/[0.08] cursor-pointer"
              title="Qayta o‘rnatish"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
            <div className="flex gap-1 text-xs font-tech">
              {[30, 60, 90].map((s) => (
                <button
                  key={s}
                  onClick={() => {
                    setInitialSeconds(s);
                    resetTimer(s);
                  }}
                  className={`px-2 py-1 rounded-md cursor-pointer ${
                    initialSeconds === s ? 'bg-indigo-600 text-white font-bold' : 'bg-white/[0.04] text-slate-400'
                  }`}
                >
                  {s}s
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Question Selector & Card Generator */}
      <div className="glass-panel-elevated rounded-2xl p-6 border border-white/[0.08] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-tech text-slate-400 uppercase">
              Savol Toifasi:
            </span>
            <div className="flex items-center gap-1">
              {[
                { id: '50', label: '50 Qiyin' },
                { id: '10', label: '10 Eng Qiyin' },
                { id: 'images', label: '30 Sirli Rasm' },
                { id: 'boss', label: '5 Final Boss' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as any)}
                  className={`px-3 py-1 rounded-lg text-xs font-tech transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-indigo-600 text-white font-bold shadow-xs'
                      : 'bg-white/[0.04] text-slate-400 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={drawRandomCard}
            className="btn-glow-cyan px-4 py-2 rounded-xl text-xs font-heading font-semibold flex items-center justify-center gap-2 cursor-pointer"
          >
            <Shuffle className="w-4 h-4" />
            <span>Savol Chiqarish</span>
          </button>
        </div>

        {/* Drawn Question Display */}
        {activeQuestion ? (
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center justify-between text-xs font-tech">
              <span className="text-cyan-400 font-bold uppercase">{activeQuestion.type}</span>
              <span className="px-2.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 font-bold">
                +{activeQuestion.points} BALL
              </span>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-4">
              {activeQuestion.imageUrl && (
                <div className="rounded-xl overflow-hidden border border-white/10 max-h-72 bg-black">
                  <img
                    src={activeQuestion.imageUrl}
                    alt={activeQuestion.title}
                    className="w-full h-72 object-cover object-center"
                  />
                </div>
              )}

              <h3 className="text-lg sm:text-xl font-heading font-bold text-white leading-relaxed whitespace-pre-line">
                {activeQuestion.text}
              </h3>

              {activeQuestion.clues && (
                <div className="mt-3 pt-3 border-t border-white/[0.06]">
                  <span className="text-xs font-tech text-cyan-400 uppercase block mb-1">
                    🧩 Vizual sensor detallari:
                  </span>
                  <ul className="text-xs text-slate-300 space-y-1">
                    {activeQuestion.clues.map((c, i) => (
                      <li key={i}>• {c}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Answer Control & Point Allocation */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <button
                onClick={() => setIsAnswerRevealed(!isAnswerRevealed)}
                className="px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] text-xs font-tech text-slate-200 border border-white/10 transition-all cursor-pointer"
              >
                {isAnswerRevealed ? 'Javobni Yashirish' : '🔐 To‘g‘ri Javobni Ko‘rish'}
              </button>

              <div className="flex items-center gap-2">
                <span className="text-xs font-tech text-slate-400">Ball berish:</span>
                <button
                  onClick={() => awardPoints(1, activeQuestion.points)}
                  className="px-3 py-1.5 rounded-lg bg-indigo-600/80 hover:bg-indigo-600 text-xs font-tech font-bold text-white cursor-pointer"
                >
                  ✓ {team1Name} (+{activeQuestion.points})
                </button>
                <button
                  onClick={() => awardPoints(2, activeQuestion.points)}
                  className="px-3 py-1.5 rounded-lg bg-emerald-600/80 hover:bg-emerald-600 text-xs font-tech font-bold text-white cursor-pointer"
                >
                  ✓ {team2Name} (+{activeQuestion.points})
                </button>
              </div>
            </div>

            {/* Revealed Answer Box */}
            {isAnswerRevealed && (
              <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 space-y-2 text-xs sm:text-sm animate-fade-in">
                <div>
                  <strong className="text-emerald-400 block font-tech uppercase text-xs">
                    ✅ To‘g‘ri Javob:
                  </strong>
                  <p className="text-white mt-1 leading-relaxed">
                    {activeQuestion.answer}
                  </p>
                </div>
                {activeQuestion.evidence && (
                  <div className="pt-2 border-t border-emerald-500/20 text-xs">
                    <strong className="text-slate-400 font-tech uppercase">
                      📖 Asardagi Dalil:
                    </strong>
                    <p className="text-slate-300 mt-0.5 leading-relaxed">
                      {activeQuestion.evidence}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-10 text-slate-500 text-sm font-tech">
            Raqiblarga savol berish uchun <strong>“Savol Chiqarish”</strong> tugmasini bosing.
          </div>
        )}
      </div>

      {/* Match History */}
      {matchLogs.length > 0 && (
        <div className="glass-panel rounded-2xl p-5 border border-white/[0.08]">
          <h4 className="text-xs font-tech text-slate-400 uppercase tracking-wider mb-3">
            🏆 Bellashuv Jurnali ({matchLogs.length} ta yozuv)
          </h4>
          <div className="max-h-48 overflow-y-auto space-y-2 text-xs">
            {matchLogs.map((log) => (
              <div
                key={log.id}
                className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]"
              >
                <div className="flex items-center gap-2">
                  <span className="font-heading font-bold text-white">{log.awardedTo}</span>
                  <span className="text-slate-600">·</span>
                  <span className="text-slate-400">{log.questionTitle}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-tech font-bold text-amber-400">+{log.points} PTS</span>
                  <span className="text-slate-500 font-tech text-[10px]">{log.timestamp}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

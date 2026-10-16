import React, { useState } from 'react';
import { FINAL_BOSS_5, FinalBossQuestionItem } from '../data/finalBoss5';
import { Crown, ChevronDown, ChevronUp, Copy, Check, Scale, ShieldCheck } from 'lucide-react';

interface FinalBossViewProps {
  judgeMode: boolean;
}

export const FinalBossView: React.FC<FinalBossViewProps> = ({ judgeMode }) => {
  const [revealedIds, setRevealedIds] = useState<Record<number, boolean>>({});
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const toggleReveal = (id: number) => {
    setRevealedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleCopy = (item: FinalBossQuestionItem) => {
    const text = `🏆 FINAL BOSS SAVOLI #${item.id}: ${item.title} (${item.points} BALL)\n\n❓ SAVOL:\n${item.question}\n\n🎯 KUTILGAN ASOSIY NUQTALAR:\n${item.expectedKeyPoints.join('\n')}\n\n👑 TO‘LIQ MASTER JAVOB:\n${item.fullMasterAnswer}\n\n📖 CHUQUR TAHLIL:\n${item.deepAnalysis}`;
    navigator.clipboard.writeText(text);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Intro Header */}
      <div className="glass-panel-elevated rounded-2xl p-6 sm:p-8 border border-amber-500/30 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-40 bg-amber-500/10 blur-3xl pointer-events-none rounded-full" />

        <div className="flex items-center gap-2 text-xs font-tech text-amber-400 uppercase tracking-widest mb-2">
          <Crown className="w-4 h-4 text-amber-400" />
          <span>BO‘LIM D</span>
          <span className="text-slate-600">·</span>
          <span>5 TA “FINAL BOSS” TAHLILI</span>
          <span className="text-slate-600">·</span>
          <span>100 BALLIK FINAL</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-white">
          🏆 Final Boss: Katta Tahliliy Sinov
        </h2>
        <p className="text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
          Bu savollar bir nechta epizodlarni o‘zaro bog‘lay olish, qahramonlar psixologiyasini tahlil qilish, sabab-oqibat zanjirlarini ochib berish va asar falsafasini teran his qilish qobiliyatini tekshiradi.
        </p>
      </div>

      {/* 5 Big Cards */}
      <div className="space-y-6">
        {FINAL_BOSS_5.map((item) => {
          const isRevealed = judgeMode || revealedIds[item.id];
          return (
            <div
              key={item.id}
              className="glass-card-interactive rounded-2xl p-6 sm:p-8 border border-white/[0.08] hover:border-amber-500/40"
            >
              <div className="flex items-center justify-between gap-2 text-xs font-tech text-slate-400 pb-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold uppercase">FINAL BOSS #{item.id}</span>
                  <span className="text-slate-600">·</span>
                  <span className="px-2 py-0.5 rounded bg-amber-500/15 border border-amber-500/30 text-amber-300 font-bold">
                    {item.points} PTS
                  </span>
                  <span className="text-slate-600">·</span>
                  <span className="text-slate-200">{item.title}</span>
                </div>
                <button
                  onClick={() => handleCopy(item)}
                  className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Nusxalash"
                >
                  {copiedId === item.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-tech">Nusxalandi</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="font-tech">Nusxalash</span>
                    </>
                  )}
                </button>
              </div>

              <h3 className="text-lg sm:text-xl font-heading font-bold text-white leading-relaxed mt-4">
                {item.question}
              </h3>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => toggleReveal(item.id)}
                  className="btn-glow-primary px-4 py-2 rounded-xl text-xs font-heading font-semibold flex items-center gap-2 cursor-pointer"
                >
                  {isRevealed ? (
                    <>
                      <ChevronUp className="w-4 h-4" />
                      <span>Master Javobni Yashirish</span>
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4" />
                      <span>👑 To‘liq Master Javob & Rubrika</span>
                    </>
                  )}
                </button>

                <div className="flex items-center gap-3 text-xs font-tech text-slate-400">
                  <div className="flex items-center gap-1">
                    <Scale className="w-3.5 h-3.5 text-amber-400" />
                    <span>Faktik: {item.judgeRubric.factualAccuracy}%</span>
                  </div>
                  <span>·</span>
                  <span>Psixologik: {item.judgeRubric.psychologicalDepth}%</span>
                  <span>·</span>
                  <span>Bog‘liqlik: {item.judgeRubric.episodesConnection}%</span>
                </div>
              </div>

              {isRevealed && (
                <div className="mt-5 pt-5 border-t border-white/[0.08] bg-white/[0.02] -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-6 sm:p-8 rounded-b-2xl space-y-4 animate-fade-in">
                  <div>
                    <h4 className="text-xs font-tech font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2 mb-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>Hakam Talab Qilishi Kerak Bo‘lgan 3 Ta Asosiy Nuqta:</span>
                    </h4>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300 pl-2">
                      {item.expectedKeyPoints.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-amber-400 font-bold">✓</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-white/[0.06]">
                    <h4 className="text-xs font-tech font-bold text-emerald-400 uppercase tracking-wide">
                      To‘liq Mukammal Javob (Master Answer):
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                      {item.fullMasterAnswer}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-amber-500/20 bg-amber-950/20 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-4 rounded-b-2xl">
                    <h4 className="text-xs font-tech font-bold text-amber-400 uppercase tracking-wide">
                      💡 Adabiy Falsafiy Xulosa:
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm text-amber-200/90 italic leading-relaxed">
                      {item.deepAnalysis}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

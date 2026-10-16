import React, { useState } from 'react';
import { HARDEST_10, HardestQuestionItem } from '../data/hardest10';
import { Skull, ChevronDown, ChevronUp, Copy, Check, Key } from 'lucide-react';

interface Hardest10ViewProps {
  judgeMode: boolean;
}

export const Hardest10View: React.FC<Hardest10ViewProps> = ({ judgeMode }) => {
  const [revealedIds, setRevealedIds] = useState<Record<number, boolean>>({});
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const toggleReveal = (id: number) => {
    setRevealedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleCopy = (item: HardestQuestionItem) => {
    const text = `☠️ ENG QIYIN SAVOL #${item.id}\n❓ SAVOL: ${item.question}\n\n✅ JAVOB: ${item.answer}\n\n📖 ASARDAGI DALIL: ${item.evidence}\n🔍 MAXFIY DETAL: ${item.secretDetail}\n⭐ DARAJA: 5/5 (O‘TA QIYIN)`;
    navigator.clipboard.writeText(text);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Intro Header */}
      <div className="glass-panel-elevated rounded-2xl p-6 sm:p-8 border border-rose-500/20 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-40 bg-rose-600/10 blur-3xl pointer-events-none rounded-full" />

        <div className="flex items-center gap-2 text-xs font-tech text-rose-400 uppercase tracking-widest mb-2">
          <Skull className="w-4 h-4 text-rose-400" />
          <span>BO‘LIM B</span>
          <span className="text-slate-600">·</span>
          <span>10 ENG QIYIN MIKRO-DETAL</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-white">
          ☠️ Eng Qiyin 10 Ta Savol
        </h2>
        <p className="text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
          Asarning eng chekkasida qolib ketgan, odatda eslanmaydigan mikro-tafsilotlar, maxfiy harakatlar va so‘nggi talvasalar.
        </p>
      </div>

      {/* 10 Cards */}
      <div className="space-y-4">
        {HARDEST_10.map((item) => {
          const isRevealed = judgeMode || revealedIds[item.id];
          return (
            <div
              key={item.id}
              className="glass-card-interactive rounded-2xl p-5 sm:p-6 border border-white/[0.08] hover:border-rose-500/30"
            >
              <div className="flex items-center justify-between gap-2 text-xs font-tech text-slate-400 pb-2.5 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <span className="text-rose-400 font-bold uppercase">☠️ MAXFIY #{item.id}</span>
                  <span className="text-slate-600">·</span>
                  <span className="text-slate-300">{item.category}</span>
                  <span className="text-slate-600">·</span>
                  <span className="text-rose-400 font-bold">5/5 HARD</span>
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

              <h3 className="text-base sm:text-lg font-heading font-semibold text-white leading-relaxed mt-3">
                {item.question}
              </h3>

              <div className="mt-4 flex items-center justify-between">
                <button
                  onClick={() => toggleReveal(item.id)}
                  className="flex items-center gap-1.5 text-xs font-tech font-semibold px-3 py-1.5 rounded-lg border transition-all cursor-pointer bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 border-white/[0.08]"
                >
                  {isRevealed ? (
                    <>
                      <ChevronUp className="w-3.5 h-3.5" />
                      <span>Javobni Yashirish</span>
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-3.5 h-3.5" />
                      <span>Javobni Ko‘rish</span>
                    </>
                  )}
                </button>

                <div className="flex items-center gap-1 text-xs font-tech text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
                  <Key className="w-3.5 h-3.5 text-amber-400" />
                  <span>Noyob fakt</span>
                </div>
              </div>

              {isRevealed && (
                <div className="mt-4 pt-4 border-t border-white/[0.06] bg-white/[0.02] -mx-5 -mb-5 sm:-mx-6 sm:-mb-6 p-5 sm:p-6 rounded-b-2xl space-y-3 animate-fade-in">
                  <div>
                    <span className="text-xs font-tech font-bold text-emerald-400 uppercase tracking-wide">
                      To‘g‘ri Javob:
                    </span>
                    <p className="text-slate-100 text-sm font-medium mt-1 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/[0.06]">
                    <span className="text-xs font-tech text-slate-400 uppercase tracking-wide">
                      Asardagi Dalil va Epizod:
                    </span>
                    <p className="text-slate-300 text-xs sm:text-sm mt-0.5 leading-relaxed">
                      {item.evidence}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-amber-500/20 bg-amber-950/20 -mx-5 -mb-5 sm:-mx-6 sm:-mb-6 p-4 rounded-b-2xl">
                    <span className="text-xs font-tech font-bold text-amber-400 uppercase tracking-wide">
                      🔍 Ko‘pchilik E’tibor Bermaydigan Maxfiy Detal:
                    </span>
                    <p className="text-amber-200 text-xs sm:text-sm mt-0.5 font-medium leading-relaxed">
                      {item.secretDetail}
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

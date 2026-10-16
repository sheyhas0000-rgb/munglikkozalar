import React from 'react';
import { QUESTIONS_50 } from '../data/questions50';
import { HARDEST_10 } from '../data/hardest10';
import { MYSTERY_IMAGES_30 } from '../data/mysteryImages30';
import { FINAL_BOSS_5 } from '../data/finalBoss5';
import { Printer, Download, BookOpen } from 'lucide-react';

export const PrintHandbook: React.FC = () => {
  const triggerPrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Action Header */}
      <div className="no-print glass-panel rounded-2xl p-6 border border-white/[0.08] shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-white">
            Hakam va Musobaqa Dosyesi (Export / Print)
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Barcha 50 ta qiyin savol, 10 ta maxfiy mikro-detal, 30 ta sirli rasm prompti va 5 ta Final Boss vazifalari A4 qog‘oziga yoki PDF formatiga chiqarish uchun to‘liq tayyor.
          </p>
        </div>
        <button
          onClick={triggerPrint}
          className="btn-glow-primary px-5 py-2.5 rounded-xl text-xs sm:text-sm font-heading font-semibold flex items-center gap-2 cursor-pointer self-start sm:self-auto"
        >
          <Printer className="w-4 h-4" />
          <span>Hujjatni Chop Etish / PDF</span>
        </button>
      </div>

      {/* Printable Document Container */}
      <div className="glass-panel-elevated rounded-2xl p-8 sm:p-12 border border-white/[0.08] text-slate-200 space-y-10 print:border-none print:shadow-none print:p-0 print:text-black print:bg-white">
        {/* Title Page / Header */}
        <div className="border-b border-white/[0.1] print:border-black pb-6 text-center">
          <div className="text-xs uppercase tracking-widest text-indigo-400 print:text-gray-600 font-tech font-semibold">
            Adabiy Olimpiada va Viktorinalar Rasmiy To‘plami
          </div>
          <h1 className="text-2xl sm:text-4xl font-heading font-extrabold mt-2 text-white print:text-black">
            HUDOYBERDI TO‘XTABOYEV: “MUNGLI KO‘ZLAR”
          </h1>
          <p className="text-sm text-slate-400 print:text-gray-600 mt-1">
            Ekspert Hakamlar va Musobaqa Ishtirokchilari Uchun To‘liq Dosye
          </p>
          <div className="text-xs text-slate-500 print:text-gray-500 font-tech mt-3">
            50 ta Qiyin Savol · 10 ta Maxfiy Detal · 30 ta Sirli Rasm Prompti · 5 ta Final Boss
          </div>
        </div>

        {/* Section 1: 50 Questions */}
        <div>
          <h2 className="text-lg font-heading font-bold border-b border-white/[0.1] print:border-black pb-2 mb-6 uppercase tracking-wider text-cyan-400 print:text-black">
            I QISM: 50 TA JUDA QIYIN SAVOL VA DALILLAR
          </h2>
          <div className="space-y-6">
            {QUESTIONS_50.map((item) => (
              <div key={item.id} className="pb-4 border-b border-white/[0.06] print:border-gray-300 break-inside-avoid">
                <div className="text-xs font-tech font-bold text-slate-400 print:text-gray-500 uppercase">
                  SAVOL #{item.id} · {item.category.toUpperCase()} · ⭐⭐⭐⭐⭐
                </div>
                <p className="text-base font-semibold mt-1 text-white print:text-black">
                  {item.question}
                </p>
                <div className="mt-2 text-sm text-slate-200 print:text-gray-800 bg-white/[0.03] print:bg-gray-100 p-3 rounded-xl border border-white/[0.05] print:border-gray-200">
                  <p>
                    <strong className="text-emerald-400 print:text-emerald-800">Javob:</strong> {item.answer}
                  </p>
                  <p className="mt-1 text-xs text-slate-400 print:text-gray-600">
                    <strong>Epizod/Dalil:</strong> {item.evidence}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: 10 Hardest Questions */}
        <div className="page-break-before">
          <h2 className="text-lg font-heading font-bold border-b border-white/[0.1] print:border-black pb-2 mb-6 uppercase tracking-wider text-rose-400 print:text-black">
            II QISM: ENG QIYIN 10 TA SAVOL (NOYOB TAFSILOTLAR)
          </h2>
          <div className="space-y-6">
            {HARDEST_10.map((item) => (
              <div key={item.id} className="pb-4 border-b border-white/[0.06] print:border-gray-300 break-inside-avoid">
                <div className="text-xs font-tech font-bold text-rose-400 print:text-red-700 uppercase">
                  MAXFIY SAVOL #{item.id} · {item.category}
                </div>
                <p className="text-base font-semibold mt-1 text-white print:text-black">
                  {item.question}
                </p>
                <div className="mt-2 text-sm text-slate-200 print:text-gray-800 bg-white/[0.03] print:bg-gray-100 p-3 rounded-xl border border-white/[0.05]">
                  <p>
                    <strong className="text-emerald-400 print:text-emerald-800">Javob:</strong> {item.answer}
                  </p>
                  <p className="mt-1 text-xs text-slate-400 print:text-gray-600">
                    <strong>Dalil:</strong> {item.evidence}
                  </p>
                  <p className="mt-1 text-xs text-amber-300 print:text-amber-800 font-medium">
                    <strong>Maxfiy detal:</strong> {item.secretDetail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: 30 Mystery Images */}
        <div className="page-break-before">
          <h2 className="text-lg font-heading font-bold border-b border-white/[0.1] print:border-black pb-2 mb-6 uppercase tracking-wider text-cyan-400 print:text-black">
            III QISM: 30 TA SIRLI RASM VA SI IMAGE PROMPTLARI
          </h2>
          <div className="space-y-6">
            {MYSTERY_IMAGES_30.map((item) => (
              <div key={item.id} className="pb-4 border-b border-white/[0.06] print:border-gray-300 break-inside-avoid">
                <div className="text-xs font-tech font-bold text-slate-400 uppercase">
                  SIRLI RASM #{item.id}: {item.title} (Qiyinlik: {item.difficulty}/5)
                </div>
                <div className="mt-2 p-3 bg-white/[0.03] print:bg-gray-100 rounded-xl text-xs font-mono border border-white/[0.05]">
                  <strong>SI PROMPT:</strong> {item.prompt}
                </div>
                <div className="mt-2 text-xs text-slate-300 print:text-gray-700">
                  <strong>Muhim detallar:</strong> {item.keyClues.join(' · ')}
                </div>
                <div className="mt-2 text-sm text-slate-200 print:text-gray-800 bg-emerald-950/20 print:bg-emerald-50 p-3 rounded-xl border border-emerald-500/20">
                  <p>
                    <strong className="text-emerald-400 print:text-emerald-900">Hakam uchun javob:</strong> {item.judgeAnswer}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-400 print:text-gray-600">
                    <strong>Epizod:</strong> {item.episode}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: 5 Final Boss */}
        <div className="page-break-before">
          <h2 className="text-lg font-heading font-bold border-b border-white/[0.1] print:border-black pb-2 mb-6 uppercase tracking-wider text-amber-400 print:text-black">
            IV QISM: 5 TA FINAL BOSS SAVOLI (100 BALLIK TAHLIL)
          </h2>
          <div className="space-y-8">
            {FINAL_BOSS_5.map((item) => (
              <div key={item.id} className="p-5 border border-white/[0.08] print:border-gray-300 rounded-xl break-inside-avoid space-y-3 bg-white/[0.02] print:bg-white">
                <div className="text-xs font-tech font-bold text-amber-400 uppercase">
                  FINAL BOSS #{item.id} · {item.title} (100 BALL)
                </div>
                <p className="text-lg font-heading font-bold text-white print:text-black">
                  {item.question}
                </p>
                <div className="text-xs text-slate-300 print:text-gray-700">
                  <strong>Kutilgan 3 ta asosiy nuqta:</strong>
                  <ul className="list-disc pl-5 mt-1 space-y-0.5">
                    {item.expectedKeyPoints.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>
                <div className="text-sm bg-white/[0.03] print:bg-gray-100 p-3 rounded-xl border border-white/[0.05]">
                  <p>
                    <strong className="text-white print:text-black">To‘liq Master Javob:</strong> {item.fullMasterAnswer}
                  </p>
                  <p className="mt-2 text-xs text-slate-400 print:text-gray-600 italic">
                    <strong>Falsafiy xulosa:</strong> {item.deepAnalysis}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

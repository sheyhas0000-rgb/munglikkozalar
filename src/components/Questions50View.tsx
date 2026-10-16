import React, { useState, useMemo } from 'react';
import { QUESTIONS_50, QuestionItem } from '../data/questions50';
import { Search, Shuffle, Check, Copy, ChevronDown, ChevronUp, Sparkles, Filter, BookOpen } from 'lucide-react';

interface Questions50ViewProps {
  judgeMode: boolean;
}

export const Questions50View: React.FC<Questions50ViewProps> = ({ judgeMode }) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [revealedIds, setRevealedIds] = useState<Record<number, boolean>>({});
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [randomQuestion, setRandomQuestion] = useState<QuestionItem | null>(null);

  const categories = [
    { id: 'all', label: 'Barchasi (50)' },
    { id: 'syujet', label: 'Syujet & Epizodlar' },
    { id: 'qahramonlar', label: 'Qahramonlar Ruhiyati' },
    { id: 'detallar', label: 'Mayda Detallar' },
    { id: 'sabab_oqibat', label: 'Sabab → Oqibat' },
    { id: 'sud_va_musodara', label: 'Sud & Musodara' },
    { id: 'tahliliy', label: 'Chuqur Tahliliy' },
  ];

  const filteredQuestions = useMemo(() => {
    return QUESTIONS_50.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.question.toLowerCase().includes(search.toLowerCase()) ||
        item.answer.toLowerCase().includes(search.toLowerCase()) ||
        item.evidence.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, selectedCategory]);

  const toggleReveal = (id: number) => {
    setRevealedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleCopy = (item: QuestionItem) => {
    const text = `❓ SAVOL: ${item.question}\n\n✅ JAVOB: ${item.answer}\n\n📖 DALIL / EPIZOD: ${item.evidence}\n⭐ QIYINLIK: ⭐⭐⭐⭐⭐`;
    navigator.clipboard.writeText(text);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const pickRandom = () => {
    const randomIndex = Math.floor(Math.random() * filteredQuestions.length);
    const chosen = filteredQuestions[randomIndex] || QUESTIONS_50[0];
    setRandomQuestion(chosen);
    setRevealedIds((prev) => ({ ...prev, [chosen.id]: false }));
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Intro Header */}
      <div className="glass-panel rounded-2xl p-6 border border-white/[0.08] shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-tech text-indigo-400 uppercase tracking-widest">
              <span>BO‘LIM A</span>
              <span className="text-slate-600">·</span>
              <span>50 TA QIYIN SAVOL</span>
              <span className="text-slate-600">·</span>
              <span>100% ASL MATN</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mt-1">
              Asosiy Savollar Dosyesi
            </h2>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
              Saidjon Karimov, Yoqutxon, nogiron Akbar, Zufar va Nigoraning qismati bo‘yicha chuqur adabiy tahlil savollari.
            </p>
          </div>

          <button
            onClick={pickRandom}
            className="btn-glow-primary px-4 py-2.5 rounded-xl font-heading text-xs font-semibold flex items-center gap-2 cursor-pointer self-start md:self-auto"
          >
            <Shuffle className="w-4 h-4 text-amber-300" />
            <span>Tasodifiy Savol</span>
          </button>
        </div>

        {/* Random question modal box */}
        {randomQuestion && (
          <div className="mt-5 p-5 rounded-xl bg-white/[0.03] border border-indigo-500/30 animate-fade-in">
            <div className="flex items-center justify-between">
              <span className="text-xs font-tech text-indigo-300 uppercase">
                Tasodifiy Savol #{randomQuestion.id}
              </span>
              <button
                onClick={() => setRandomQuestion(null)}
                className="text-xs text-slate-400 hover:text-white"
              >
                ✕ Yopish
              </button>
            </div>
            <p className="text-white font-heading font-semibold text-base mt-2">
              {randomQuestion.question}
            </p>
            <div className="mt-3">
              <button
                onClick={() => toggleReveal(randomQuestion.id)}
                className="text-xs font-tech px-3 py-1.5 rounded-lg bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30 border border-indigo-500/30 transition-all cursor-pointer"
              >
                {judgeMode || revealedIds[randomQuestion.id] ? 'Javobni Yashirish' : 'Javobni Ko‘rish'}
              </button>
            </div>
            {(judgeMode || revealedIds[randomQuestion.id]) && (
              <div className="mt-3 pt-3 border-t border-white/[0.08] text-xs sm:text-sm space-y-1">
                <p className="text-emerald-300">
                  <strong>Javob:</strong> {randomQuestion.answer}
                </p>
                <p className="text-slate-400 text-xs">
                  <strong>Epizod:</strong> {randomQuestion.evidence}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Filter and Search Bar */}
      <div className="glass-panel rounded-2xl p-4 border border-white/[0.08] space-y-3">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Savol matni, qahramon ismi yoki detal bo‘yicha qidiruv..."
            className="w-full pl-10 pr-4 py-2.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400"
          />
        </div>

        {/* Categories */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg font-tech transition-all whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? 'bg-indigo-600 text-white font-bold'
                    : 'bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs font-tech text-slate-500 px-1">
          <span>Topilgan savollar: {filteredQuestions.length} ta</span>
          <span>Daraja: ⭐⭐⭐⭐⭐</span>
        </div>

        {filteredQuestions.map((item) => {
          const isRevealed = judgeMode || revealedIds[item.id];
          return (
            <div
              key={item.id}
              className="glass-card-interactive rounded-2xl p-5 sm:p-6 border border-white/[0.08]"
            >
              {/* Meta */}
              <div className="flex items-center justify-between gap-2 text-xs font-tech text-slate-400 pb-2.5 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <span className="text-indigo-400 font-bold">#{item.id}-SAVOL</span>
                  <span className="text-slate-600">·</span>
                  <span className="text-slate-300 capitalize">{item.category.replace('_', ' ')}</span>
                  <span className="text-slate-600">·</span>
                  <span className="text-amber-400 tracking-wider">⭐⭐⭐⭐⭐</span>
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

              {/* Question Text */}
              <h3 className="text-base sm:text-lg font-heading font-semibold text-white leading-relaxed mt-3">
                {item.question}
              </h3>

              {item.hint && !isRevealed && (
                <p className="text-xs text-amber-300/80 italic mt-2">
                  💡 Maslahat: {item.hint}
                </p>
              )}

              {/* Toggle Button */}
              <div className="mt-4 flex items-center justify-between">
                <button
                  onClick={() => toggleReveal(item.id)}
                  className="flex items-center gap-1.5 text-xs font-tech font-semibold px-3 py-1.5 rounded-lg border transition-all cursor-pointer bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border-white/[0.08]"
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
              </div>

              {/* Revealed Answer Box */}
              {isRevealed && (
                <div className="mt-4 pt-4 border-t border-white/[0.06] bg-white/[0.02] -mx-5 -mb-5 sm:-mx-6 sm:-mb-6 p-5 sm:p-6 rounded-b-2xl space-y-3 animate-fade-in">
                  <div>
                    <div className="text-xs font-tech font-bold text-emerald-400 uppercase tracking-wide">
                      To‘g‘ri Javob:
                    </div>
                    <p className="text-slate-100 text-sm font-medium mt-1 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/[0.06]">
                    <div className="text-xs font-tech text-slate-400 uppercase tracking-wide">
                      Asardagi Dalil va Epizod:
                    </div>
                    <p className="text-slate-300 text-xs sm:text-sm mt-0.5 leading-relaxed">
                      {item.evidence}
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

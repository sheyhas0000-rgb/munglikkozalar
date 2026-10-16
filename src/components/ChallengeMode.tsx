import React, { useState, useEffect, useRef } from 'react';
import { QUESTIONS_50 } from '../data/questions50';
import { getQuizOptionsForQuestion } from '../data/quizOptions';
import { Clock, Zap, Flame, Award, ChevronRight, RotateCcw, CheckCircle2, XCircle, Trophy, Sparkles, BookOpen } from 'lucide-react';

interface ChallengeModeProps {
  onGoToArena: () => void;
  onGoToImages: () => void;
}

export const ChallengeMode: React.FC<ChallengeModeProps> = ({ onGoToArena, onGoToImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(45);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [userAnswersHistory, setUserAnswersHistory] = useState<{
    questionId: number;
    isCorrect: boolean;
    userChoice: number;
  }[]>([]);

  const totalQuestions = QUESTIONS_50.length;
  const currentQuestion = QUESTIONS_50[currentIndex];
  const { options, correctIndex } = getQuizOptionsForQuestion(currentQuestion.id, currentQuestion.answer);

  // Timer countdown
  useEffect(() => {
    if (isQuizFinished || isSubmitted) return;

    if (timeLeft <= 0) {
      // Time expired: auto-fail this question
      handleAnswerSelection(-1);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isSubmitted, isQuizFinished]);

  const handleAnswerSelection = (index: number) => {
    if (isSubmitted) return;

    setSelectedOption(index);
    setIsSubmitted(true);

    const isCorrect = index === correctIndex;
    if (isCorrect) {
      const addedPoints = 100 + streak * 20;
      setScore((prev) => prev + addedPoints);
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > maxStreak) setMaxStreak(newStreak);
      setCorrectCount((prev) => prev + 1);
    } else {
      setStreak(0);
    }

    setUserAnswersHistory((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        isCorrect,
        userChoice: index,
      },
    ]);
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < totalQuestions) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
      setTimeLeft(45);
    } else {
      setIsQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setCorrectCount(0);
    setTimeLeft(45);
    setIsQuizFinished(false);
    setUserAnswersHistory([]);
  };

  // Accuracy calculation
  const accuracy = Math.round((correctCount / (userAnswersHistory.length || 1)) * 100);

  // Rank Badge logic
  const getRankBadge = () => {
    if (correctCount >= 45) return { title: 'LEGENDARY', color: 'from-amber-400 via-yellow-300 to-amber-500', glow: 'shadow-[0_0_30px_rgba(251,191,36,0.4)]' };
    if (correctCount >= 38) return { title: 'MASTER', color: 'from-violet-400 to-indigo-400', glow: 'shadow-[0_0_30px_rgba(139,92,246,0.35)]' };
    if (correctCount >= 28) return { title: 'EXPERT', color: 'from-cyan-400 to-blue-400', glow: 'shadow-[0_0_30px_rgba(6,182,212,0.35)]' };
    return { title: 'SCHOLAR', color: 'from-emerald-400 to-teal-400', glow: 'shadow-[0_0_30px_rgba(16,185,129,0.3)]' };
  };

  const rank = getRankBadge();
  const optionLetters = ['A', 'B', 'C', 'D'];

  // FINISHED SCREEN
  if (isQuizFinished) {
    return (
      <div className="max-w-4xl mx-auto py-6 animate-fade-in">
        <div className="glass-panel-elevated rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden border border-white/10">
          {/* Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-indigo-600/20 blur-3xl pointer-events-none rounded-full" />

          {/* Trophy & Badge */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border border-white/10 mb-5 relative">
            <Trophy className="w-10 h-10 text-amber-400" />
            <div className="absolute -inset-1 rounded-2xl bg-amber-400/20 blur-md -z-10" />
          </div>

          <div className="text-xs uppercase tracking-widest text-indigo-400 font-tech font-semibold mb-1">
            Bellashuv Yakunlandi
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight mb-2">
            CHALLENGE COMPLETE
          </h2>

          {/* Rank Badge */}
          <div className="inline-block my-3">
            <span className={`px-5 py-1.5 rounded-full text-xs font-heading font-bold uppercase tracking-widest bg-gradient-to-r ${rank.color} text-slate-950 ${rank.glow}`}>
              ★ {rank.title} TIER ★
            </span>
          </div>

          {/* Big Score Display */}
          <div className="my-6">
            <div className="text-6xl sm:text-7xl font-tech font-black text-white tracking-tighter">
              {correctCount} <span className="text-2xl text-slate-500 font-normal">/ {totalQuestions}</span>
            </div>
            <div className="text-xs text-indigo-300 font-tech mt-1">
              JAMI TO‘PLANGAN BALL: <span className="font-bold text-amber-400">{score} PTS</span>
            </div>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto my-8">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] text-center">
              <div className="text-xs text-slate-400 font-medium">Aniqlik</div>
              <div className="text-2xl font-tech font-bold text-emerald-400 mt-1">{accuracy}%</div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] text-center">
              <div className="text-xs text-slate-400 font-medium">To‘g‘ri Javoblar</div>
              <div className="text-2xl font-tech font-bold text-white mt-1">{correctCount}</div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] text-center">
              <div className="text-xs text-slate-400 font-medium">Maksimal Streak</div>
              <div className="text-2xl font-tech font-bold text-amber-400 mt-1">🔥 {maxStreak}x</div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] text-center">
              <div className="text-xs text-slate-400 font-medium">Bajarilgan</div>
              <div className="text-2xl font-tech font-bold text-indigo-400 mt-1">100%</div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-white/[0.08]">
            <button
              onClick={restartQuiz}
              className="btn-glow-primary px-6 py-3 rounded-xl font-heading text-sm font-semibold flex items-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Qaytadan Boshlash</span>
            </button>
            <button
              onClick={onGoToImages}
              className="px-6 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] text-white border border-white/10 text-sm font-medium transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Sirli Rasmlarga O‘tish</span>
            </button>
            <button
              onClick={onGoToArena}
              className="px-6 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] text-white border border-white/10 text-sm font-medium transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Musobaqa Arenasi</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ACTIVE QUIZ INTERFACE
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* TOP HUD BAR */}
      <div className="glass-panel rounded-2xl p-4 sm:p-5 border border-white/[0.08] shadow-lg">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Question Index */}
          <div className="flex items-center gap-3">
            <span className="font-tech text-xs tracking-wider text-indigo-300 uppercase">
              SAVOL
            </span>
            <span className="text-xl sm:text-2xl font-tech font-bold text-white tracking-tight">
              {String(currentIndex + 1).padStart(2, '0')}{' '}
              <span className="text-xs text-slate-500 font-normal">/ {totalQuestions}</span>
            </span>
          </div>

          {/* Timer */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08]">
            <Clock className={`w-4 h-4 ${timeLeft <= 10 ? 'text-rose-400 animate-pulse' : 'text-indigo-400'}`} />
            <span className={`font-tech text-base font-bold ${timeLeft <= 10 ? 'text-rose-400 animate-pulse' : 'text-slate-200'}`}>
              {timeLeft}s
            </span>
          </div>

          {/* Streak Counter */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08]">
            <Flame className={`w-4 h-4 ${streak > 0 ? 'text-amber-400 animate-bounce' : 'text-slate-600'}`} />
            <span className="font-tech text-xs font-bold text-amber-300">
              {streak > 0 ? `${streak}x STREAK` : 'STREAK: 0'}
            </span>
          </div>

          {/* Live Score */}
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="font-tech text-lg font-extrabold text-cyan-300">
              {score} <span className="text-xs text-slate-400 font-normal">PTS</span>
            </span>
          </div>
        </div>

        {/* Dynamic Progress Bar */}
        <div className="w-full h-1.5 bg-slate-900 rounded-full mt-4 overflow-hidden border border-white/[0.04]">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 transition-all duration-300 ease-out"
            style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* CENTER LARGE GLASS CARD: QUESTION */}
      <div className="glass-panel-elevated rounded-2xl p-6 sm:p-8 border border-white/[0.1] relative">
        <div className="flex items-center justify-between text-xs text-indigo-400 font-tech mb-4 pb-3 border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 uppercase">
              Savol #{currentQuestion.id}
            </span>
            <span className="text-slate-500">·</span>
            <span className="text-slate-400 capitalize">{currentQuestion.category.replace('_', ' ')}</span>
          </div>
          <div className="text-amber-400 tracking-wider">
            ⭐⭐⭐⭐⭐
          </div>
        </div>

        {/* Question Text */}
        <h3 className="text-xl sm:text-2xl font-heading font-bold text-white leading-relaxed">
          {currentQuestion.question}
        </h3>

        {/* Multiple Choice Options A / B / C / D */}
        <div className="grid grid-cols-1 gap-3 sm:gap-4 mt-8">
          {options.map((optText, idx) => {
            const isSelected = selectedOption === idx;
            const isCorrect = idx === correctIndex;

            let cardStyle = "bg-white/[0.03] border-white/[0.08] hover:border-indigo-400/30 hover:bg-white/[0.06] text-slate-200";

            if (isSubmitted) {
              if (isCorrect) {
                cardStyle = "bg-emerald-500/15 border-emerald-500/60 text-white shadow-[0_0_25px_rgba(16,185,129,0.25)]";
              } else if (isSelected && !isCorrect) {
                cardStyle = "bg-rose-500/15 border-rose-500/60 text-white shadow-[0_0_25px_rgba(244,63,94,0.25)]";
              } else {
                cardStyle = "bg-white/[0.01] border-white/[0.04] text-slate-500 opacity-60";
              }
            } else if (isSelected) {
              cardStyle = "bg-indigo-600/20 border-indigo-400 text-white shadow-[0_0_20px_rgba(99,102,241,0.3)]";
            }

            return (
              <button
                key={idx}
                disabled={isSubmitted}
                onClick={() => handleAnswerSelection(idx)}
                className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all duration-200 flex items-start gap-4 cursor-pointer group ${cardStyle}`}
              >
                {/* Option Letter Indicator */}
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-tech font-bold text-sm shrink-0 transition-colors ${
                  isSubmitted && isCorrect
                    ? 'bg-emerald-500 text-slate-950'
                    : isSubmitted && isSelected && !isCorrect
                    ? 'bg-rose-500 text-white'
                    : isSelected
                    ? 'bg-indigo-500 text-white'
                    : 'bg-white/[0.06] text-slate-400 group-hover:text-white group-hover:bg-indigo-500/30'
                }`}>
                  {optionLetters[idx]}
                </div>

                <div className="flex-1 text-sm sm:text-base font-normal leading-relaxed">
                  {optText}
                </div>

                {isSubmitted && isCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 self-center" />
                )}
                {isSubmitted && isSelected && !isCorrect && (
                  <XCircle className="w-5 h-5 text-rose-400 shrink-0 self-center" />
                )}
              </button>
            );
          })}
        </div>

        {/* Revealed Evidence / Next Button */}
        {isSubmitted && (
          <div className="mt-8 pt-6 border-t border-white/[0.08] animate-fade-in space-y-4">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.07] text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-indigo-400 font-tech font-semibold uppercase text-xs mb-1">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Asardagi Rasmiy Dalil & Epizod:</span>
              </div>
              <p className="text-slate-300 leading-relaxed font-sans">
                {currentQuestion.evidence}
              </p>
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleNextQuestion}
                className="btn-glow-primary px-6 py-3 rounded-xl font-heading font-semibold text-sm flex items-center gap-2 cursor-pointer"
              >
                <span>{currentIndex + 1 < totalQuestions ? 'Keyingi Savol' : 'Natijalarni Ko‘rish'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

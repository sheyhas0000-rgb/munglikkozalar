import React, { useState, useEffect, useRef } from 'react';
import { CROSSWORD_LEVELS, CrosswordLevel, CrosswordWord } from '../data/crosswordData';
import { Sparkles, Trophy, RotateCcw, Lightbulb, CheckCircle2, ChevronRight, Award, HelpCircle } from 'lucide-react';

export const CrosswordView: React.FC = () => {
  const [activeLevelIndex, setActiveLevelIndex] = useState(0);
  const currentLevel = CROSSWORD_LEVELS[activeLevelIndex];

  // Grid state: 2D array of user letters
  const [userGrid, setUserGrid] = useState<string[][]>(() =>
    Array(currentLevel.rows).fill(null).map(() => Array(currentLevel.cols).fill(''))
  );

  const [selectedRow, setSelectedRow] = useState<number>(3);
  const [selectedCol, setSelectedCol] = useState<number>(2);
  const [direction, setDirection] = useState<'across' | 'down'>('across');
  const [isCompleted, setIsCompleted] = useState(false);
  const [checkStatus, setCheckStatus] = useState<'idle' | 'checked'>('idle');
  const [score, setScore] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);

  const inputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

  // Reset grid when level changes
  useEffect(() => {
    setUserGrid(Array(currentLevel.rows).fill(null).map(() => Array(currentLevel.cols).fill('')));
    const firstWord = currentLevel.words[0];
    setSelectedRow(firstWord.startRow);
    setSelectedCol(firstWord.startCol);
    setDirection(firstWord.direction);
    setIsCompleted(false);
    setCheckStatus('idle');
    setTimerSeconds(0);
  }, [activeLevelIndex]);

  // Timer
  useEffect(() => {
    if (isCompleted) return;
    const timer = setInterval(() => {
      setTimerSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [isCompleted]);

  // Build grid coordinate map for letters and cell numbers
  const cellMap = React.useMemo(() => {
    const map: { [key: string]: { char: string; number?: number; wordIds: string[] } } = {};

    currentLevel.words.forEach((w) => {
      for (let i = 0; i < w.word.length; i++) {
        const r = w.direction === 'across' ? w.startRow : w.startRow + i;
        const c = w.direction === 'across' ? w.startCol + i : w.startCol;
        const key = `${r}-${c}`;

        if (!map[key]) {
          map[key] = { char: w.word[i], wordIds: [w.id] };
        } else {
          map[key].wordIds.push(w.id);
        }

        if (i === 0) {
          map[key].number = w.number;
        }
      }
    });

    return map;
  }, [currentLevel]);

  // Find active word based on selection and direction
  const activeWord = React.useMemo(() => {
    const matchingWords = currentLevel.words.filter((w) => {
      if (w.direction !== direction) return false;
      if (direction === 'across') {
        return w.startRow === selectedRow && selectedCol >= w.startCol && selectedCol < w.startCol + w.word.length;
      } else {
        return w.startCol === selectedCol && selectedRow >= w.startRow && selectedRow < w.startRow + w.word.length;
      }
    });

    if (matchingWords.length > 0) return matchingWords[0];

    // Fallback: look for other direction on current cell
    const fallbackWords = currentLevel.words.filter((w) => {
      if (direction === 'across') {
        return w.startCol === selectedCol && selectedRow >= w.startRow && selectedRow < w.startRow + w.word.length;
      } else {
        return w.startRow === selectedRow && selectedCol >= w.startCol && selectedCol < w.startCol + w.word.length;
      }
    });

    return fallbackWords[0] || null;
  }, [currentLevel, selectedRow, selectedCol, direction]);

  // Handle cell click
  const handleCellClick = (r: number, c: number) => {
    const key = `${r}-${c}`;
    if (!cellMap[key]) return;

    if (selectedRow === r && selectedCol === c) {
      // Toggle direction on double click
      setDirection((prev) => (prev === 'across' ? 'down' : 'across'));
    } else {
      setSelectedRow(r);
      setSelectedCol(c);
      // If cell belongs only to one word, auto-select its direction
      const cellWords = currentLevel.words.filter((w) => {
        if (w.direction === 'across') {
          return w.startRow === r && c >= w.startCol && c < w.startCol + w.word.length;
        } else {
          return w.startCol === c && r >= w.startRow && r < w.startRow + w.word.length;
        }
      });
      if (cellWords.length === 1) {
        setDirection(cellWords[0].direction);
      }
    }
  };

  // Handle letter input
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, r: number, c: number) => {
    setCheckStatus('idle');

    if (e.key === 'Backspace') {
      e.preventDefault();
      const newGrid = userGrid.map((row) => [...row]);
      newGrid[r][c] = '';
      setUserGrid(newGrid);

      // Move back
      if (direction === 'across') {
        let prevCol = c - 1;
        while (prevCol >= 0 && !cellMap[`${r}-${prevCol}`]) prevCol--;
        if (prevCol >= 0 && cellMap[`${r}-${prevCol}`]) {
          setSelectedRow(r);
          setSelectedCol(prevCol);
          inputRefs.current[`${r}-${prevCol}`]?.focus();
        }
      } else {
        let prevRow = r - 1;
        while (prevRow >= 0 && !cellMap[`${prevRow}-${c}`]) prevRow--;
        if (prevRow >= 0 && cellMap[`${prevRow}-${c}`]) {
          setSelectedRow(prevRow);
          setSelectedCol(c);
          inputRefs.current[`${prevRow}-${c}`]?.focus();
        }
      }
      return;
    }

    if (e.key === 'ArrowRight' && c + 1 < currentLevel.cols) {
      if (cellMap[`${r}-${c + 1}`]) {
        setSelectedRow(r);
        setSelectedCol(c + 1);
        inputRefs.current[`${r}-${c + 1}`]?.focus();
      }
    } else if (e.key === 'ArrowLeft' && c - 1 >= 0) {
      if (cellMap[`${r}-${c - 1}`]) {
        setSelectedRow(r);
        setSelectedCol(c - 1);
        inputRefs.current[`${r}-${c - 1}`]?.focus();
      }
    } else if (e.key === 'ArrowDown' && r + 1 < currentLevel.rows) {
      if (cellMap[`${r + 1}-${c}`]) {
        setSelectedRow(r + 1);
        setSelectedCol(c);
        inputRefs.current[`${r + 1}-${c}`]?.focus();
      }
    } else if (e.key === 'ArrowUp' && r - 1 >= 0) {
      if (cellMap[`${r - 1}-${c}`]) {
        setSelectedRow(r - 1);
        setSelectedCol(c);
        inputRefs.current[`${r - 1}-${c}`]?.focus();
      }
    }

    const char = e.key.toUpperCase();
    if (/^[A-Z]$/.test(char) || char === '‘' || char === "'") {
      e.preventDefault();
      const newGrid = userGrid.map((row) => [...row]);
      newGrid[r][c] = char;
      setUserGrid(newGrid);

      // Advance to next cell in current word
      if (direction === 'across') {
        const nextCol = c + 1;
        if (nextCol < currentLevel.cols && cellMap[`${r}-${nextCol}`]) {
          setSelectedRow(r);
          setSelectedCol(nextCol);
          inputRefs.current[`${r}-${nextCol}`]?.focus();
        }
      } else {
        const nextRow = r + 1;
        if (nextRow < currentLevel.rows && cellMap[`${nextRow}-${c}`]) {
          setSelectedRow(nextRow);
          setSelectedCol(c);
          inputRefs.current[`${nextRow}-${c}`]?.focus();
        }
      }

      // Check if puzzle is fully solved
      checkAutoCompletion(newGrid);
    }
  };

  const checkAutoCompletion = (grid: string[][]) => {
    let allFilled = true;
    let allCorrect = true;

    Object.keys(cellMap).forEach((key) => {
      const [r, c] = key.split('-').map(Number);
      const userLetter = grid[r][c]?.toUpperCase();
      const targetLetter = cellMap[key].char.toUpperCase();

      if (!userLetter) allFilled = false;
      if (userLetter !== targetLetter) allCorrect = false;
    });

    if (allFilled && allCorrect) {
      setIsCompleted(true);
      setScore(100);
    }
  };

  // Clue select click
  const handleSelectWord = (w: CrosswordWord) => {
    setSelectedRow(w.startRow);
    setSelectedCol(w.startCol);
    setDirection(w.direction);
    inputRefs.current[`${w.startRow}-${w.startCol}`]?.focus();
  };

  // Hint: reveal current cell letter
  const handleHint = () => {
    const key = `${selectedRow}-${selectedCol}`;
    if (cellMap[key]) {
      const newGrid = userGrid.map((row) => [...row]);
      newGrid[selectedRow][selectedCol] = cellMap[key].char;
      setUserGrid(newGrid);
      checkAutoCompletion(newGrid);
    }
  };

  // Check answers button
  const handleCheck = () => {
    setCheckStatus('checked');
    let correct = 0;
    let total = Object.keys(cellMap).length;

    Object.keys(cellMap).forEach((key) => {
      const [r, c] = key.split('-').map(Number);
      if (userGrid[r][c]?.toUpperCase() === cellMap[key].char.toUpperCase()) {
        correct++;
      }
    });

    if (correct === total) {
      setIsCompleted(true);
      setScore(100);
    }
  };

  // Reveal all answers
  const handleRevealAll = () => {
    const newGrid = Array(currentLevel.rows).fill(null).map(() => Array(currentLevel.cols).fill(''));
    Object.keys(cellMap).forEach((key) => {
      const [r, c] = key.split('-').map(Number);
      newGrid[r][c] = cellMap[key].char;
    });
    setUserGrid(newGrid);
    setCheckStatus('checked');
    setIsCompleted(true);
  };

  // Reset
  const handleReset = () => {
    setUserGrid(Array(currentLevel.rows).fill(null).map(() => Array(currentLevel.cols).fill('')));
    setCheckStatus('idle');
    setIsCompleted(false);
  };

  // Format time mm:ss
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Check if a specific word is completed in userGrid
  const isWordSolved = (w: CrosswordWord) => {
    for (let i = 0; i < w.word.length; i++) {
      const r = w.direction === 'across' ? w.startRow : w.startRow + i;
      const c = w.direction === 'across' ? w.startCol + i : w.startCol;
      if (userGrid[r][c]?.toUpperCase() !== w.word[i].toUpperCase()) return false;
    }
    return true;
  };

  const acrossClues = currentLevel.words.filter((w) => w.direction === 'across');
  const downClues = currentLevel.words.filter((w) => w.direction === 'down');

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Top Banner */}
      <div className="glass-panel rounded-2xl p-6 border border-white/[0.08] shadow-xl relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-tech text-cyan-400 uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>INTERAKTIV ADABIY KROSSVORD</span>
              <span className="text-slate-600">·</span>
              <span>“MUNGLI KO‘ZLAR”</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white mt-1">
              Adabiy Krossvord Maydoni
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Asar mazmuni, personajlar va ramziy voqealar asosida tuzilgan krossvordni to‘ldiring. Katakchani tanlab, klaviaturadan to‘g‘ridan-to‘g‘ri harflarni kiriting.
            </p>
          </div>

          {/* Level Switcher */}
          <div className="flex gap-2 self-start sm:self-auto">
            {CROSSWORD_LEVELS.map((lvl, idx) => (
              <button
                key={lvl.id}
                onClick={() => setActiveLevelIndex(idx)}
                className={`px-3.5 py-2 rounded-xl text-xs font-tech font-bold transition-all cursor-pointer ${
                  activeLevelIndex === idx
                    ? 'btn-glow-primary'
                    : 'bg-white/[0.04] text-slate-400 hover:text-white border border-white/10'
                }`}
              >
                {idx + 1}-Daraja
              </button>
            ))}
          </div>
        </div>

        {/* Level Subtitle and Controls Bar */}
        <div className="mt-5 pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs font-tech">
          <div className="text-slate-300 font-semibold">
            {currentLevel.title}: <span className="text-slate-400 font-normal">{currentLevel.subtitle}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-cyan-400">
              ⏱ {formatTime(timerSeconds)}
            </span>
            <button
              onClick={handleHint}
              className="px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Tanlangan katakdagi harfni ochish"
            >
              <Lightbulb className="w-3.5 h-3.5" />
              <span>Harfni Ochish</span>
            </button>
            <button
              onClick={handleCheck}
              className="px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Tekshirish</span>
            </button>
            <button
              onClick={handleReset}
              className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white border border-white/10 cursor-pointer"
              title="Qayta boshlash"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Crossword Interactive Layout: Grid on Left, Clues on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT: GRID (Col 7) */}
        <div className="lg:col-span-7 glass-panel-elevated rounded-2xl p-4 sm:p-6 border border-white/[0.08] flex flex-col items-center">
          {/* Active Word Clue Bar */}
          {activeWord && (
            <div className="w-full mb-4 p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-xs sm:text-sm">
              <div className="flex items-center gap-2 font-tech font-bold text-cyan-300 uppercase text-xs mb-1">
                <span>{activeWord.direction === 'across' ? '➡️ ENIGA' : '⬇️ BO‘YIGA'} #{activeWord.number}</span>
                <span>·</span>
                <span>{activeWord.word.length} ta harf</span>
              </div>
              <p className="text-white font-medium leading-relaxed">
                {activeWord.clue}
              </p>
            </div>
          )}

          {/* Crossword Board */}
          <div className="overflow-x-auto max-w-full pb-2">
            <div
              className="grid gap-1 sm:gap-1.5 select-none"
              style={{
                gridTemplateColumns: `repeat(${currentLevel.cols}, minmax(32px, 42px))`,
              }}
            >
              {Array.from({ length: currentLevel.rows }).map((_, r) =>
                Array.from({ length: currentLevel.cols }).map((_, c) => {
                  const key = `${r}-${c}`;
                  const cellInfo = cellMap[key];
                  const isBlocked = !cellInfo;
                  const isSelectedCell = selectedRow === r && selectedCol === c;

                  // Is this cell part of the currently active highlighted word?
                  const isInActiveWord =
                    activeWord &&
                    (activeWord.direction === 'across'
                      ? activeWord.startRow === r && c >= activeWord.startCol && c < activeWord.startCol + activeWord.word.length
                      : activeWord.startCol === c && r >= activeWord.startRow && r < activeWord.startRow + activeWord.word.length);

                  // Checking status styling
                  const userChar = userGrid[r][c]?.toUpperCase();
                  const targetChar = cellInfo?.char.toUpperCase();
                  const isCheckedCorrect = checkStatus === 'checked' && userChar && userChar === targetChar;
                  const isCheckedWrong = checkStatus === 'checked' && userChar && userChar !== targetChar;

                  if (isBlocked) {
                    return (
                      <div
                        key={key}
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#06070d]/80 border border-white/[0.03]"
                      />
                    );
                  }

                  return (
                    <div
                      key={key}
                      onClick={() => handleCellClick(r, c)}
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg relative flex items-center justify-center font-tech font-bold text-base sm:text-lg transition-all duration-150 cursor-pointer ${
                        isSelectedCell
                          ? 'bg-cyan-500 text-slate-950 ring-2 ring-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.6)] font-black z-20'
                          : isInActiveWord
                          ? 'bg-cyan-950/70 text-cyan-200 border-cyan-400/50 shadow-sm'
                          : isCheckedCorrect
                          ? 'bg-emerald-950/60 border-emerald-500 text-emerald-300'
                          : isCheckedWrong
                          ? 'bg-rose-950/60 border-rose-500 text-rose-300 animate-pulse'
                          : 'bg-white/[0.04] text-white border-white/[0.12] hover:border-cyan-400/40 hover:bg-white/[0.08]'
                      } border`}
                    >
                      {/* Cell number label in top-left */}
                      {cellInfo.number && (
                        <span
                          className={`absolute top-0.5 left-1 text-[9px] font-sans font-extrabold ${
                            isSelectedCell ? 'text-slate-900' : 'text-slate-400'
                          }`}
                        >
                          {cellInfo.number}
                        </span>
                      )}

                      {/* Display user input character */}
                      <span>{userGrid[r][c] || ''}</span>

                      {/* Hidden invisible input to capture mobile/desktop keystrokes */}
                      <input
                        ref={(el) => { inputRefs.current[key] = el; }}
                        type="text"
                        maxLength={1}
                        value={userGrid[r][c] || ''}
                        onChange={() => {}}
                        onKeyDown={(e) => handleKeyDown(e, r, c)}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        autoCapitalize="characters"
                      />
                    </div>
                  );
                })
              )}
            </div>
          </div>

          <div className="text-[11px] font-tech text-slate-400 mt-4 flex items-center gap-3">
            <span>💡 Katakchani bosib harf yozing</span>
            <span>·</span>
            <span>Ikki marta bosish yo‘nalishni almashtiradi</span>
          </div>
        </div>

        {/* RIGHT: CLUES LIST (Col 5) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Across Clues */}
          <div className="glass-panel rounded-2xl p-5 border border-white/[0.08]">
            <h3 className="text-xs font-tech font-bold text-cyan-400 uppercase tracking-widest mb-3 flex items-center justify-between">
              <span>➡️ ENIGA (GORIZONTAL)</span>
              <span className="text-slate-500">{acrossClues.length} ta savol</span>
            </h3>

            <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
              {acrossClues.map((w) => {
                const isSelected = activeWord?.id === w.id;
                const solved = isWordSolved(w);
                return (
                  <button
                    key={w.id}
                    onClick={() => handleSelectWord(w)}
                    className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start gap-2.5 text-xs cursor-pointer border ${
                      isSelected
                        ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-200'
                        : 'bg-white/[0.02] border-white/[0.05] text-slate-300 hover:bg-white/[0.06] hover:text-white'
                    }`}
                  >
                    <span className="font-tech font-bold text-cyan-400 shrink-0 mt-0.5">
                      #{w.number}
                    </span>
                    <span className="flex-1 leading-relaxed">
                      {w.clue}
                    </span>
                    {solved && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 self-center" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Down Clues */}
          <div className="glass-panel rounded-2xl p-5 border border-white/[0.08]">
            <h3 className="text-xs font-tech font-bold text-indigo-400 uppercase tracking-widest mb-3 flex items-center justify-between">
              <span>⬇️ BO‘YIGA (VERTIKAL)</span>
              <span className="text-slate-500">{downClues.length} ta savol</span>
            </h3>

            <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
              {downClues.map((w) => {
                const isSelected = activeWord?.id === w.id;
                const solved = isWordSolved(w);
                return (
                  <button
                    key={w.id}
                    onClick={() => handleSelectWord(w)}
                    className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start gap-2.5 text-xs cursor-pointer border ${
                      isSelected
                        ? 'bg-indigo-500/15 border-indigo-500/40 text-indigo-200'
                        : 'bg-white/[0.02] border-white/[0.05] text-slate-300 hover:bg-white/[0.06] hover:text-white'
                    }`}
                  >
                    <span className="font-tech font-bold text-indigo-400 shrink-0 mt-0.5">
                      #{w.number}
                    </span>
                    <span className="flex-1 leading-relaxed">
                      {w.clue}
                    </span>
                    {solved && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 self-center" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Reveal All Button */}
          <button
            onClick={handleRevealAll}
            className="w-full py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-tech text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            👑 To‘liq Yechimni Ochish
          </button>
        </div>
      </div>

      {/* Completion Celebration Modal */}
      {isCompleted && (
        <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/80 via-slate-900/90 to-cyan-950/80 border border-emerald-500/40 shadow-2xl text-center animate-fade-in space-y-3">
          <div className="inline-flex p-3 rounded-full bg-emerald-500/20 text-emerald-400 mb-1">
            <Trophy className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-heading font-extrabold text-white">
            TABRIKLAYMIZ! KROSSVORD TO‘LIQ HAL ETILDI!
          </h3>
          <p className="text-sm text-slate-300 max-w-lg mx-auto">
            Siz Hudoyberdi To‘xtaboyevning “Mungli ko‘zlar” romani bo‘yicha tuzilgan krossvordni a’lo darajada yakunladingiz!
          </p>
          <div className="flex justify-center gap-4 text-xs font-tech pt-2">
            <span className="px-3 py-1 rounded-lg bg-white/[0.06] text-emerald-300">
              Vaqt: {formatTime(timerSeconds)}
            </span>
            <span className="px-3 py-1 rounded-lg bg-white/[0.06] text-amber-300">
              Ball: +{score} PTS
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

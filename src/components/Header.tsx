import React from 'react';
import { Home, Rocket, Target, BookOpen, Skull, Image as ImageIcon, Crown, Swords, Printer, BookMarked, Eye, EyeOff, Sparkles } from 'lucide-react';

export type TabType = 'home' | 'challenge' | 'questions50' | 'hardest10' | 'mysteryImages' | 'finalBoss' | 'arena' | 'lore' | 'print';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  judgeMode: boolean;
  setJudgeMode: (mode: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  judgeMode,
  setJudgeMode
}) => {
  const navItems: { id: TabType; label: string; icon: React.ReactNode; count?: number }[] = [
    { id: 'home', label: 'Bosh Sahifa', icon: <Home className="w-3.5 h-3.5" /> },
    { id: 'challenge', label: 'Challenge', icon: <Rocket className="w-3.5 h-3.5 text-amber-400" /> },
    { id: 'arena', label: 'Musobaqa Arenasi', icon: <Target className="w-3.5 h-3.5 text-cyan-400" /> },
    { id: 'mysteryImages', label: 'Sirli Rasmlar', icon: <ImageIcon className="w-3.5 h-3.5 text-cyan-300" />, count: 30 },
    { id: 'questions50', label: '50 Qiyin Savol', icon: <BookOpen className="w-3.5 h-3.5" />, count: 50 },
    { id: 'hardest10', label: '10 Eng Qiyin', icon: <Skull className="w-3.5 h-3.5 text-rose-400" />, count: 10 },
    { id: 'finalBoss', label: 'Final Boss', icon: <Crown className="w-3.5 h-3.5 text-amber-300" />, count: 5 },
    { id: 'lore', label: 'Asar Tahlili', icon: <BookMarked className="w-3.5 h-3.5" /> },
    { id: 'print', label: 'Export', icon: <Printer className="w-3.5 h-3.5" /> },
  ];

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-white/[0.08] backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Brand Logo */}
          <div
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-600 to-cyan-500 p-0.5 shadow-md shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-cyan-300 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5 font-heading font-extrabold text-white text-base tracking-tight">
                <span>AI ADABIYOT</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              </div>
              <div className="text-[10px] font-tech text-slate-400 uppercase tracking-wider">
                Mungli Ko‘zlar · 1988
              </div>
            </div>
          </div>

          {/* Right Action: Judge Mode Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setJudgeMode(!judgeMode)}
              className={`flex items-center gap-2 text-xs font-tech px-3.5 py-1.5 rounded-xl border transition-all cursor-pointer ${
                judgeMode
                  ? 'bg-amber-500/15 text-amber-300 border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                  : 'bg-white/[0.04] text-slate-400 border-white/[0.08] hover:text-white hover:bg-white/[0.08]'
              }`}
              title="Hakam rejimida hamma javoblar va maxfiy dalillar ochiq ko‘rinadi"
            >
              {judgeMode ? <Eye className="w-3.5 h-3.5 text-amber-400" /> : <EyeOff className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{judgeMode ? 'HAKAM: OCHIQ' : 'HAKAM: YASHIRIN'}</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <nav className="flex overflow-x-auto no-scrollbar border-t border-white/[0.04] -mx-4 px-4 sm:mx-0 sm:px-0 py-1.5 gap-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-white/[0.1] text-white border border-white/[0.14] shadow-sm font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
                {item.count && (
                  <span className={`text-[10px] font-tech px-1.5 py-0.2 rounded ${
                    isActive ? 'bg-indigo-500/30 text-indigo-200' : 'text-slate-500 bg-white/[0.03]'
                  }`}>
                    {item.count}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

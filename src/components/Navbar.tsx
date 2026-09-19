import React from 'react';
import { Sparkles, BookOpen, Compass, Hash, Database } from 'lucide-react';
import { PWAInstallButton } from './PWAInstallButton';

interface NavbarProps {
  activeTab: 'analisis' | 'katalog' | 'kitab' | 'abjad';
  setActiveTab: (tab: 'analisis' | 'katalog' | 'kitab' | 'abjad') => void;
  onOpenBackup?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenBackup }) => {
  return (
    <header className="border-b border-amber-900/30 bg-stone-950/90 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Title */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('analisis')}>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-600 via-amber-700 to-emerald-900 p-0.5 shadow-lg shadow-amber-950/50 flex items-center justify-center">
              <div className="w-full h-full bg-stone-950 rounded-[10px] flex items-center justify-center text-amber-400">
                <Sparkles className="w-6 h-6 animate-pulse" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-['Cinzel'] font-bold text-xl sm:text-2xl text-amber-100 tracking-wider">
                  AL-JAMAHIR
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-medium tracking-wider uppercase bg-amber-900/40 text-amber-300 border border-amber-700/50 rounded-full">
                  Kitab Al-Jawahir
                </span>
              </div>
              <p className="text-xs text-stone-400 font-['Amiri'] tracking-wide">
                كتاب الجماهر في معرفة الجواهر • Syaikh Abu Rayhan Al-Biruni
              </p>
            </div>
          </div>

          {/* Navigation Tabs & PWA Mobile Install Action */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <nav className="flex items-center space-x-1 sm:space-x-2">
              <button
                id="tab-btn-analisis"
                onClick={() => setActiveTab('analisis')}
                className={`flex items-center space-x-2 px-2.5 sm:px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  activeTab === 'analisis'
                    ? 'bg-amber-700/30 text-amber-200 border border-amber-600/50 shadow-sm shadow-amber-950/40'
                    : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900/60'
                }`}
              >
                <Compass className="w-4 h-4 text-amber-400" />
                <span>Hisab</span>
              </button>

              <button
                id="tab-btn-abjad"
                onClick={() => setActiveTab('abjad')}
                className={`flex items-center space-x-2 px-2.5 sm:px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  activeTab === 'abjad'
                    ? 'bg-amber-700/30 text-amber-200 border border-amber-600/50 shadow-sm shadow-amber-950/40'
                    : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900/60'
                }`}
                title="Tabel Lengkap 28 Huruf Abjad & Nilai Jummal"
              >
                <Hash className="w-4 h-4 text-amber-300" />
                <span>Tabel Abjad</span>
              </button>

              <button
                id="tab-btn-katalog"
                onClick={() => setActiveTab('katalog')}
                className={`flex items-center space-x-2 px-2.5 sm:px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  activeTab === 'katalog'
                    ? 'bg-amber-700/30 text-amber-200 border border-amber-600/50 shadow-sm shadow-amber-950/40'
                    : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900/60'
                }`}
              >
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span className="hidden sm:inline">Katalog</span>
              </button>

              <button
                id="tab-btn-kitab"
                onClick={() => setActiveTab('kitab')}
                className={`flex items-center space-x-2 px-2.5 sm:px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  activeTab === 'kitab'
                    ? 'bg-amber-700/30 text-amber-200 border border-amber-600/50 shadow-sm shadow-amber-950/40'
                    : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900/60'
                }`}
              >
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span className="hidden sm:inline">Kitab</span>
              </button>
            </nav>

            <div className="h-6 w-px bg-stone-800 hidden sm:block" />

            {onOpenBackup && (
              <button
                type="button"
                id="navbar-backup-btn"
                onClick={onOpenBackup}
                className="px-2.5 sm:px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 border border-amber-900/50 hover:border-amber-700/60 text-amber-300 hover:text-amber-200 text-xs font-semibold flex items-center space-x-1.5 transition-all shadow-sm active:scale-95"
                title="Cadangkan Riwayat & Data Aplikasi (Backup & Restore)"
              >
                <Database className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">Cadangkan</span>
              </button>
            )}

            <PWAInstallButton />
          </div>
        </div>
      </div>
    </header>
  );
};

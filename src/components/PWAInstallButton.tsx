import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Smartphone, Download, Share, PlusSquare, X, Sparkles } from 'lucide-react';

export const PWAInstallButton: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install, triggerHaptic } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  // If already installed, don't show the button
  if (isInstalled) {
    return null;
  }

  const handleInstall = async () => {
    triggerHaptic(25);
    if (isInstallable) {
      await install();
    } else if (isIOS) {
      setShowIOSGuide(true);
    } else {
      setShowIOSGuide(true);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleInstall}
        className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-amber-950/80 hover:bg-amber-900 border border-amber-600/50 text-amber-200 text-xs font-semibold shadow-sm transition-all active:scale-95"
        title="Pasang aplikasi ke ponsel Android / iOS"
      >
        <Smartphone className="w-3.5 h-3.5 text-amber-400" />
        <span className="hidden sm:inline">Pasang ke HP</span>
        <span className="sm:hidden">Pasang</span>
      </button>

      {/* iOS Guide Modal */}
      {showIOSGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-2xl bg-stone-900 border border-amber-800/60 p-6 shadow-2xl relative text-stone-200">
            <button
              type="button"
              onClick={() => setShowIOSGuide(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-stone-400 hover:text-white bg-stone-800/60"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-600 to-amber-900 p-2 flex items-center justify-center shadow-lg">
                <img src="/icon.svg" alt="App Icon" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-amber-100 font-['Cinzel']">
                  Pasang di Layar Utama HP
                </h3>
                <p className="text-[11px] text-stone-400">
                  {isIOS ? 'Untuk Pengguna iPhone / iPad (iOS)' : 'Untuk Pengguna Android / Browser'}
                </p>
              </div>
            </div>

            {isIOS ? (
              <div className="space-y-3 text-xs text-stone-300 bg-stone-950/60 p-3.5 rounded-xl border border-stone-800 mb-4">
                <div className="flex items-start space-x-2.5">
                  <span className="w-5 h-5 rounded-full bg-amber-950 border border-amber-600/60 text-amber-300 flex items-center justify-center text-[10px] font-bold shrink-0">
                    1
                  </span>
                  <p>
                    Buka di <strong className="text-white">Safari</strong>, lalu ketuk tombol <strong className="text-amber-300 inline-flex items-center gap-1"><Share className="w-3 h-3 inline" /> Bagikan</strong>.
                  </p>
                </div>
                <div className="flex items-start space-x-2.5">
                  <span className="w-5 h-5 rounded-full bg-amber-950 border border-amber-600/60 text-amber-300 flex items-center justify-center text-[10px] font-bold shrink-0">
                    2
                  </span>
                  <p>
                    Pilih menu <strong className="text-amber-300 inline-flex items-center gap-1"><PlusSquare className="w-3 h-3 inline" /> Tambah ke Layar Utama</strong>.
                  </p>
                </div>
                <div className="flex items-start space-x-2.5">
                  <span className="w-5 h-5 rounded-full bg-amber-950 border border-amber-600/60 text-amber-300 flex items-center justify-center text-[10px] font-bold shrink-0">
                    3
                  </span>
                  <p>
                    Ketuk <strong className="text-emerald-400">Tambah</strong> di kanan atas untuk menginstal.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-3 text-xs text-stone-300 bg-stone-950/60 p-3.5 rounded-xl border border-stone-800 mb-4">
                <p>
                  Pada browser Chrome ponsel, ketuk tombol <strong>Menu (tiga titik di kanan atas)</strong> lalu pilih <strong>"Pasang aplikasi" (Install app)</strong> atau <strong>"Tambahkan ke Layar Utama"</strong>.
                </p>
              </div>
            )}

            <button
              type="button"
              onClick={() => setShowIOSGuide(false)}
              className="w-full py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold text-xs transition-colors"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </>
  );
};

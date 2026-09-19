import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import {
  Smartphone,
  Download,
  Share,
  PlusSquare,
  CheckCircle2,
  X,
  Sparkles,
  Zap,
  Wifi,
  ShieldCheck,
  Vibrate
} from 'lucide-react';

export const PWAInstallBanner: React.FC = () => {
  const {
    isInstallable,
    isInstalled,
    isIOS,
    isAndroid,
    install,
    triggerHaptic
  } = usePWAInstall();

  const [showIOSModal, setShowIOSModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const handleInstallClick = async () => {
    triggerHaptic(30);
    if (isInstallable) {
      await install();
    } else if (isIOS) {
      setShowIOSModal(true);
    } else {
      setShowInfoModal(true);
    }
  };

  return (
    <>
      {/* Top Notification Banner (Shown when not yet dismissed and not in standalone mode) */}
      {!isInstalled && !isDismissed && (
        <div className="bg-gradient-to-r from-amber-950/80 via-emerald-950/70 to-stone-900 border-b border-amber-800/40 px-3 py-2 text-xs text-stone-200">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center space-x-2">
              <span className="p-1 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30">
                <Smartphone className="w-3.5 h-3.5" />
              </span>
              <p className="text-[11px] sm:text-xs text-stone-300">
                <strong className="text-amber-300 font-semibold">Integrasi Ponsel {isIOS ? 'iOS (iPhone/iPad)' : isAndroid ? 'Android' : 'Ponsel'}:</strong> Pasang aplikasi ini ke Layar Utama untuk akses cepat, tampilan layar penuh &amp; offline mode.
              </p>
            </div>

            <div className="flex items-center space-x-2 shrink-0">
              <button
                type="button"
                onClick={handleInstallClick}
                className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-bold text-[11px] shadow-sm transition-all active:scale-95"
              >
                <Download className="w-3 h-3" />
                <span>Pasang Aplikasi</span>
              </button>

              <button
                type="button"
                onClick={() => setIsDismissed(true)}
                className="p-1 text-stone-400 hover:text-stone-200 transition-colors"
                title="Tutup banner"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Standalone Active Badge (if already installed and open as standalone app) */}
      {isInstalled && (
        <div className="bg-emerald-950/50 border-b border-emerald-800/30 px-3 py-1 text-[11px] text-emerald-300 flex items-center justify-center space-x-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          <span>Aplikasi Terhubung Secara Penuh dalam Mode Native Perangkat</span>
        </div>
      )}

      {/* iOS Installation Instruction Modal */}
      {showIOSModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-md rounded-2xl bg-stone-900 border border-amber-800/50 p-6 shadow-2xl relative text-stone-200">
            <button
              type="button"
              onClick={() => setShowIOSModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-stone-400 hover:text-white bg-stone-800/60"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-600 to-amber-800 p-2 flex items-center justify-center shadow-lg">
                <img src="/icon.svg" alt="App Icon" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-base font-bold text-amber-100 font-['Cinzel']">
                  Pasang di iPhone / iPad
                </h3>
                <p className="text-xs text-stone-400">
                  Panduan Menambahkan ke Layar Utama iOS (PWA)
                </p>
              </div>
            </div>

            <div className="space-y-3.5 text-xs text-stone-300 my-4 bg-stone-950/60 p-4 rounded-xl border border-stone-800">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-amber-950 border border-amber-600/60 text-amber-300 flex items-center justify-center font-bold shrink-0 mt-0.5">
                  1
                </div>
                <p>
                  Buka aplikasi ini di browser <strong className="text-white">Safari</strong>, lalu ketuk tombol <strong className="text-amber-300 inline-flex items-center gap-1"><Share className="w-3 h-3 inline" /> Bagikan (Share)</strong> di bilah bawah Safari.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-amber-950 border border-amber-600/60 text-amber-300 flex items-center justify-center font-bold shrink-0 mt-0.5">
                  2
                </div>
                <p>
                  Gulir ke bawah pada menu opsi lalu pilih <strong className="text-amber-300 inline-flex items-center gap-1"><PlusSquare className="w-3 h-3 inline" /> Tambah ke Layar Utama (Add to Home Screen)</strong>.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-amber-950 border border-amber-600/60 text-amber-300 flex items-center justify-center font-bold shrink-0 mt-0.5">
                  3
                </div>
                <p>
                  Ketuk tombol <strong className="text-emerald-400">Tambah (Add)</strong> di sudut kanan atas. Ikon aplikasi <strong className="text-amber-300">Al-Jamahir</strong> akan muncul di layar iPhone/iPad Anda seperti aplikasi App Store!
                </p>
              </div>
            </div>

            <div className="p-3 bg-amber-950/30 rounded-xl border border-amber-800/40 text-[11px] text-amber-200/90 mb-5 flex items-start space-x-2">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <p>
                Setelah ditambahkan, aplikasi akan berjalan layar penuh (*fullscreen*) tanpa bilah Safari, mendukung cache offline, dan respon haptic getaran.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowIOSModal(false)}
              className="w-full py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold text-xs transition-colors"
            >
              Saya Mengerti
            </button>
          </div>
        </div>
      )}

      {/* General Device Info Modal */}
      {showInfoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-md rounded-2xl bg-stone-900 border border-amber-800/50 p-6 shadow-2xl relative text-stone-200">
            <button
              type="button"
              onClick={() => setShowInfoModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-stone-400 hover:text-white bg-stone-800/60"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-600 to-emerald-700 p-2 flex items-center justify-center shadow-lg text-white">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-amber-100 font-['Cinzel']">
                  Integrasi Perangkat Seluler
                </h3>
                <p className="text-xs text-stone-400">
                  Kemampuan Aplikasi Bawaan (Android &amp; iOS PWA)
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2.5 text-xs my-4">
              <div className="p-3 rounded-xl bg-stone-950/60 border border-stone-800 flex items-start space-x-3">
                <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-stone-200">Akses Cepat Layar Utama</h4>
                  <p className="text-stone-400 text-[11px] mt-0.5">
                    Gunakan menu browser "Pasang Aplikasi" / "Add to Home screen" untuk memasang di Android (Chrome) atau iOS (Safari).
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-stone-950/60 border border-stone-800 flex items-start space-x-3">
                <Wifi className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-stone-200">Kesiapan Luring (Offline Ready)</h4>
                  <p className="text-stone-400 text-[11px] mt-0.5">
                    Aplikasi menyimpan tabel hisab, rumus numerologi, dan katalog Al-Biruni ke dalam *Service Worker Cache* lokal ponsel.
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-stone-950/60 border border-stone-800 flex items-start space-x-3">
                <Vibrate className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-stone-200">Umpan Balik Haptic (Getaran)</h4>
                  <p className="text-stone-400 text-[11px] mt-0.5">
                    Sensasi ketukan fisik saat menghitung wirid digital dan tombol hisab pada perangkat yang didukung.
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-stone-950/60 border border-stone-800 flex items-start space-x-3">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-stone-200">Desain Responsif iOS Safe Area</h4>
                  <p className="text-stone-400 text-[11px] mt-0.5">
                    Menyesuaikan dengan Dynamic Island, takik (*notch*), dan bilah gestur bawah iPhone.
                  </p>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowInfoModal(false)}
              className="w-full py-2.5 rounded-xl bg-amber-950/80 border border-amber-700/50 hover:bg-amber-900 text-amber-200 font-semibold text-xs transition-colors"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </>
  );
};

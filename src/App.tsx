import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { NumerologyForm } from './components/NumerologyForm';
import { PrimaryGemCard } from './components/PrimaryGemCard';
import { FortuneRadar } from './components/FortuneRadar';
import { ElementAndNumerologyCard } from './components/ElementAndNumerologyCard';
import { ElementPhilosophyCard } from './components/ElementPhilosophyCard';
import { SecondaryAndIncompatibleCard } from './components/SecondaryAndIncompatibleCard';
import { AlBiruniReadingSection } from './components/AlBiruniReadingSection';
import { QuranicPrayerSyncCard } from './components/QuranicPrayerSyncCard';
import { GemstoneCatalog } from './components/GemstoneCatalog';
import { AboutAlJamahir } from './components/AboutAlJamahir';
import { AbjadTable } from './components/AbjadTable';
import { DeveloperContactCard } from './components/DeveloperContactCard';
import { PWAInstallBanner } from './components/PWAInstallBanner';
import { OfflineIndicator } from './components/OfflineIndicator';
import { PrintCertificateModal } from './components/PrintCertificateModal';
import { BackupRestoreModal } from './components/BackupRestoreModal';
import { usePWAInstall } from './hooks/usePWAInstall';
import { NumerologyAnalysis, Gemstone } from './types';
import { analyzeNameGemstoneSuitability } from './utils/numerology';
import { saveCalculation, getSavedCalculations } from './utils/backupStorage';
import { Sparkles, Copy, Check, Share2, BookOpen, Gem, ShieldAlert, Printer, Database } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'analisis' | 'katalog' | 'kitab' | 'abjad'>('analisis');
  const [analysis, setAnalysis] = useState<NumerologyAnalysis | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
  const [isBackupModalOpen, setIsBackupModalOpen] = useState(false);
  const { triggerHaptic, shareContent, canNativeShare } = usePWAInstall();

  // Load initial representative analysis on startup for immediate interactive richness
  useEffect(() => {
    const saved = getSavedCalculations();
    if (saved.length > 0 && saved[0].analysis) {
      setAnalysis(saved[0].analysis);
    } else {
      const initial = analyzeNameGemstoneSuitability('Sultan Mahmud', 'Maryam');
      setAnalysis(initial);
      saveCalculation(initial, 'Contoh Klasik Al-Biruni');
    }
  }, []);

  const handleAnalyze = async (name: string, motherName?: string) => {
    triggerHaptic(20);
    setIsLoading(true);
    let finalAnalysis: NumerologyAnalysis | null = null;
    try {
      // First try server-side endpoint
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, motherName }),
      });

      if (res.ok) {
        const data = await res.json();
        setAnalysis(data);
        finalAnalysis = data;
      } else {
        // Fallback to client calculation
        const fallback = analyzeNameGemstoneSuitability(name, motherName);
        setAnalysis(fallback);
        finalAnalysis = fallback;
      }
      triggerHaptic([25, 50, 25]);
    } catch (err) {
      console.warn('Network call failed, utilizing client-side calculation engine:', err);
      const fallback = analyzeNameGemstoneSuitability(name, motherName);
      setAnalysis(fallback);
      finalAnalysis = fallback;
      triggerHaptic([25, 50, 25]);
    } finally {
      setIsLoading(false);
      if (finalAnalysis) {
        saveCalculation(finalAnalysis);
      }
      // Smooth scroll to result
      const resultEl = document.getElementById('analysis-results-section');
      if (resultEl) {
        resultEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const getSummaryText = () => {
    if (!analysis) return '';
    return `[Hasil Analisis Permata Al-Jamahir karya Al-Biruni]
Nama Pengguna: ${analysis.inputName}${analysis.motherName ? ` (Ibu: ${analysis.motherName})` : ''}
Nilai Jummal al-Kabir: ${analysis.totalJummalKabir} (Akar Digit: ${analysis.jummalShaghir})
Unsur Dominan: ${analysis.dominantElement}
Kawkab Falak: ${analysis.dominantPlanet.arabicName} (${analysis.dominantPlanet.name})
Buruj: ${analysis.zodiacBuruj.arabicName} (${analysis.zodiacBuruj.name})
Rekomendasi Batu Utama: ${analysis.primaryGem.indonesianName} (${analysis.primaryGem.arabicName})
Logam Pengikat: ${analysis.recommendedMetal}
Posisi Jari Pemakaian: ${analysis.recommendedHandFinger}
Waktu Terbaik: ${analysis.bestDayAndHour}
Batu Pendamping: ${analysis.secondaryGem.indonesianName}

[Wasilah Ayat & Do'a Penyelaras Permata]
Ayat Al-Qur'an Sinkron: QS. ${analysis.quranicSync.primaryVerse.surahName}: ${analysis.quranicSync.primaryVerse.ayahNumber}
Asmaul Husna: ${analysis.quranicSync.asmaulHusna.latin} (${analysis.quranicSync.asmaulHusna.arabic}) - Wirid ${analysis.quranicSync.asmaulHusna.wiridCount}x
Do'a Memakai Cincin: ${analysis.quranicSync.wearingPrayer.transliteration}

Indeks Peruntungan:
- Rezeki: ${analysis.fortuneScores.rezeki}%
- Kewibawaan: ${analysis.fortuneScores.kewibawaan}%
- Ketentraman: ${analysis.fortuneScores.ketentraman}%
- Perlindungan: ${analysis.fortuneScores.perlindungan}%
- Kesehatan: ${analysis.fortuneScores.kesehatan}%`;
  };

  const handleCopySummary = () => {
    const text = getSummaryText();
    if (!text) return;
    triggerHaptic(15);
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleNativeShare = async () => {
    if (!analysis) return;
    triggerHaptic(25);
    const text = getSummaryText();
    if (canNativeShare) {
      const shared = await shareContent({
        title: `Hasil Analisis Permata ${analysis.inputName} - Al-Jamahir`,
        text: text,
      });
      if (!shared) {
        handleCopySummary();
      }
    } else {
      handleCopySummary();
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-amber-800 selection:text-amber-100 flex flex-col">
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenBackup={() => setIsBackupModalOpen(true)}
      />

      {/* PWA Mobile Integration Banner */}
      <PWAInstallBanner />

      {/* Main Container with Mobile Safe Area Support */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 pb-[calc(4rem+env(safe-area-inset-bottom))]">
        {activeTab === 'analisis' && (
          <div className="space-y-10">
            {/* Input Form Card */}
            <NumerologyForm
              onAnalyze={handleAnalyze}
              isLoading={isLoading}
              onOpenAbjadTable={() => setActiveTab('abjad')}
            />

            {/* Results Section */}
            {analysis && (
              <div id="analysis-results-section" className="space-y-8 scroll-mt-24">
                {/* Result Title Bar & Quick Actions */}
                <div className="flex flex-wrap items-center justify-between gap-4 p-4 sm:p-6 bg-stone-900/90 border border-amber-800/40 rounded-2xl backdrop-blur-md">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-950 border border-amber-600/50 flex items-center justify-center text-amber-400">
                      <Gem className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-stone-400 uppercase tracking-wider block">
                        Hasil Analisis Hisab Nama
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold font-['Cinzel'] text-amber-100 flex items-center space-x-2">
                        <span>{analysis.inputName}</span>
                        {analysis.motherName && (
                          <span className="text-xs font-normal text-stone-400">
                            (binti/bin {analysis.motherName})
                          </span>
                        )}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {/* Cetak / Simpan PDF Button */}
                    <button
                      id="print-pdf-btn"
                      type="button"
                      onClick={() => {
                        triggerHaptic(25);
                        setIsPrintModalOpen(true);
                      }}
                      className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-400 hover:to-amber-500 border border-amber-400/80 text-stone-950 text-xs font-bold flex items-center space-x-2 shadow-lg shadow-amber-950/50 transition-all active:scale-95 group"
                      title="Cetak atau Simpan PDF Sertifikat Hisab & Rekomendasi Permata Resmi"
                    >
                      <Printer className="w-4 h-4 text-stone-950 group-hover:scale-110 transition-transform" />
                      <span>Cetak / Simpan PDF</span>
                    </button>

                    {/* Native Share button for Android & iOS */}
                    <button
                      id="native-share-btn"
                      type="button"
                      onClick={handleNativeShare}
                      className="px-3.5 py-2 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-600/60 text-emerald-200 hover:text-emerald-100 text-xs font-semibold flex items-center space-x-2 transition-all active:scale-95"
                      title="Bagikan ke WhatsApp, Kontak, atau Catatan HP"
                    >
                      <Share2 className="w-4 h-4 text-emerald-400" />
                      <span className="hidden sm:inline">Bagikan ke HP</span>
                      <span className="sm:hidden">Bagikan</span>
                    </button>

                    <button
                      id="copy-summary-btn"
                      onClick={handleCopySummary}
                      className="px-3.5 py-2 rounded-xl bg-stone-950 hover:bg-stone-800 border border-stone-800 text-stone-300 hover:text-amber-200 text-xs font-medium flex items-center space-x-2 transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-400" />
                          <span className="text-emerald-400">Tersalin!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-amber-400" />
                          <span>Salin Teks</span>
                        </>
                      )}
                    </button>

                    {/* Cadangkan Data & Riwayat Button */}
                    <button
                      id="backup-data-btn"
                      type="button"
                      onClick={() => {
                        triggerHaptic(20);
                        setIsBackupModalOpen(true);
                      }}
                      className="px-3.5 py-2 rounded-xl bg-amber-950/70 hover:bg-amber-900/90 border border-amber-700/60 text-amber-200 hover:text-amber-100 text-xs font-semibold flex items-center space-x-2 transition-all active:scale-95"
                      title="Cadangkan Riwayat &amp; Data Aplikasi (Backup &amp; Restore)"
                    >
                      <Database className="w-4 h-4 text-amber-400" />
                      <span>Cadangkan Data</span>
                    </button>
                  </div>
                </div>

                {/* Primary Recommended Gemstone Card */}
                <PrimaryGemCard
                  gem={analysis.primaryGem}
                  recommendedMetal={analysis.recommendedMetal}
                  recommendedHandFinger={analysis.recommendedHandFinger}
                  bestDayAndHour={analysis.bestDayAndHour}
                />

                {/* Automatic Quranic Verse & Prayer Synchronization */}
                {analysis.quranicSync && (
                  <QuranicPrayerSyncCard
                    syncData={analysis.quranicSync}
                    gem={analysis.primaryGem}
                  />
                )}

                {/* Fortune Index Radar Meters */}
                <FortuneRadar scores={analysis.fortuneScores} gem={analysis.primaryGem} />

                {/* Elemental Balance & Abjad Table Card */}
                <ElementAndNumerologyCard
                  inputName={analysis.inputName}
                  motherName={analysis.motherName}
                  transliteratedArabic={analysis.transliteratedArabic}
                  totalJummalKabir={analysis.totalJummalKabir}
                  jummalShaghir={analysis.jummalShaghir}
                  letterBreakdown={analysis.letterBreakdown}
                  elementScores={analysis.elementScores}
                  dominantElement={analysis.dominantElement}
                  dominantPlanet={analysis.dominantPlanet}
                  zodiacBuruj={analysis.zodiacBuruj}
                  onOpenAbjadTable={() => setActiveTab('abjad')}
                />

                {/* Explanation of Elemental Nature according to Al-Biruni's Natural Philosophy */}
                <ElementPhilosophyCard
                  dominantElement={analysis.dominantElement}
                  secondaryElement={analysis.secondaryElement}
                  elementScores={analysis.elementScores}
                />

                {/* Secondary Companion & Incompatible Gems */}
                <SecondaryAndIncompatibleCard
                  secondaryGem={analysis.secondaryGem}
                  incompatibleGem={analysis.incompatibleGem}
                  onSelectGem={() => setActiveTab('katalog')}
                />

                {/* In-depth Scholarly AI Commentary (Kitab Al-Jamahir Fatwa) */}
                <AlBiruniReadingSection analysis={analysis} />

                {/* Print Certificate Banner Card */}
                <div className="bg-gradient-to-r from-amber-950/70 via-stone-900 to-emerald-950/70 border border-amber-600/50 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
                  <div className="flex items-center space-x-3.5">
                    <div className="p-3 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 shrink-0">
                      <Printer className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-['Cinzel'] font-bold text-amber-100">
                        Unduh Sertifikat &amp; Cetak Dokumen PDF
                      </h4>
                      <p className="text-xs text-stone-300 mt-0.5">
                        Dokumen resmi berformat A4 dengan stempel digital dan tanda tangan QR pengembang (Husni, S. Kom. I).
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      triggerHaptic(25);
                      setIsPrintModalOpen(true);
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 border border-amber-300 text-stone-950 text-xs font-bold flex items-center justify-center space-x-2 shadow-lg shadow-amber-950/50 transition-all active:scale-95 shrink-0"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Buka Sertifikat &amp; Cetak PDF</span>
                  </button>
                </div>

                {/* Developer Attribution & Direct Consultation */}
                <div className="pt-2">
                  <DeveloperContactCard />
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'abjad' && <AbjadTable />}

        {activeTab === 'katalog' && <GemstoneCatalog />}

        {activeTab === 'kitab' && <AboutAlJamahir />}
      </main>

      {/* Classical Academic Footer with Developer Attribution */}
      <footer className="mt-20 border-t border-stone-900 bg-stone-950/95 py-10 text-xs text-stone-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="font-['Cinzel'] font-semibold text-amber-200 text-sm mb-1">
                Permata Al-Jamahir • Kitāb al-Jamāhir fī Ma'rifat al-Jawāhir
              </p>
              <p className="text-stone-400 text-xs">
                Rujukan naskah tahqiq Syaikh Abu Rayhan Al-Biruni (362–440 H / 973–1048 M).
              </p>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-stone-300 text-xs font-['Amiri'] text-sm">
                الحكمة ضالة المؤمن أنّى وجدها فهو أحق بها
              </p>
              <p className="text-stone-400 text-[11px] mt-0.5">
                Hisab Huruf Abjad Jummal Kabir &bull; Ilmu Falakiah Klasik &bull; Mineralogi Empiris
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-stone-900 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-stone-500">
            <div className="flex items-center space-x-3 text-center sm:text-left">
              <img
                src="https://cdn.phototourl.com/free/2026-09-19-62a9d0b9-5236-4de7-9fec-7f7c76323edb.jpg"
                alt="Husni, S. Kom. I"
                referrerPolicy="no-referrer"
                className="w-7 h-7 rounded-full object-cover border border-amber-600/60 shadow-sm shrink-0"
              />
              <div>
                <strong className="text-amber-300/90 font-medium">Pengembang Aplikasi:</strong> Husni, S. Kom. I &bull; Beremi, Jagaraga, Kuripan, Lombok Barat, NTB
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://wa.me/6281915949627" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 text-stone-400 transition-colors">
                WA: +62 819-1594-9627
              </a>
              <span>&bull;</span>
              <a href="tel:+6285239153085" className="hover:text-amber-400 text-stone-400 transition-colors">
                Telp: +62 852-3915-3085
              </a>
              <span>&bull;</span>
              <button
                type="button"
                id="footer-backup-btn"
                onClick={() => setIsBackupModalOpen(true)}
                className="hover:text-amber-300 text-stone-400 underline underline-offset-2 transition-colors flex items-center space-x-1"
              >
                <Database className="w-3 h-3 text-amber-400 inline" />
                <span>Cadangkan Data</span>
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Offline Connectivity Notification */}
      <OfflineIndicator />

      {/* Print / Save PDF Certificate Modal */}
      {analysis && (
        <PrintCertificateModal
          isOpen={isPrintModalOpen}
          onClose={() => setIsPrintModalOpen(false)}
          analysis={analysis}
        />
      )}

      {/* Backup & Restore Modal */}
      <BackupRestoreModal
        isOpen={isBackupModalOpen}
        onClose={() => setIsBackupModalOpen(false)}
        onLoadAnalysis={(loaded) => {
          setAnalysis(loaded);
          setActiveTab('analisis');
          const resultEl = document.getElementById('analysis-results-section');
          if (resultEl) {
            resultEl.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />
    </div>
  );
}

import React, { useState } from 'react';
import { QuranicPrayerSync, Gemstone, SpiritualFocus } from '../types';
import {
  BookOpen,
  Sparkles,
  Copy,
  Check,
  Volume2,
  VolumeX,
  ShieldCheck,
  RotateCcw,
  Heart,
  Coins,
  Crown,
  ShieldAlert,
  Sliders,
  Clock,
  Info
} from 'lucide-react';

interface QuranicPrayerSyncCardProps {
  syncData: QuranicPrayerSync;
  gem: Gemstone;
}

export const QuranicPrayerSyncCard: React.FC<QuranicPrayerSyncCardProps> = ({ syncData, gem }) => {
  const [activeFocus, setActiveFocus] = useState<SpiritualFocus>('keseimbangan');
  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [wiridCounter, setWiridCounter] = useState(0);

  const currentVerse = syncData.focusedVerses[activeFocus] || syncData.primaryVerse;

  const handleCopy = (text: string, sectionKey: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionKey);
    setTimeout(() => {
      setCopiedSection(null);
    }, 2500);
  };

  const handleSpeak = (text: string) => {
    if (!('speechSynthesis' in window)) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ar-SA';
    utterance.rate = 0.85;

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const incrementCounter = (max: number) => {
    if (wiridCounter < max) {
      setWiridCounter((prev) => prev + 1);
      // Mobile device haptic feedback
      if (typeof window !== 'undefined' && 'vibrate' in window.navigator) {
        try {
          window.navigator.vibrate(20);
        } catch {
          // Ignore
        }
      }
    }
  };

  const resetCounter = () => {
    setWiridCounter(0);
    if (typeof window !== 'undefined' && 'vibrate' in window.navigator) {
      try {
        window.navigator.vibrate([15, 30, 15]);
      } catch {
        // Ignore
      }
    }
  };

  const focusOptions: { key: SpiritualFocus; label: string; icon: React.ReactNode; shortDesc: string }[] = [
    {
      key: 'keseimbangan',
      label: 'Nur Permata',
      icon: <Sparkles className="w-3.5 h-3.5" />,
      shortDesc: 'QS. An-Nur: 35',
    },
    {
      key: 'rezeki',
      label: 'Kelapangan Rezeki',
      icon: <Coins className="w-3.5 h-3.5" />,
      shortDesc: 'QS. Ath-Thalaq: 2-3',
    },
    {
      key: 'kewibawaan',
      label: 'Kewibawaan & Karisma',
      icon: <Crown className="w-3.5 h-3.5" />,
      shortDesc: 'QS. Al-Fath: 1-3',
    },
    {
      key: 'ketenangan',
      label: 'Ketenangan Jiwa',
      icon: <Heart className="w-3.5 h-3.5" />,
      shortDesc: 'QS. Ar-Ra\'d: 28',
    },
    {
      key: 'perlindungan',
      label: 'Benteng Tolak Bala',
      icon: <ShieldAlert className="w-3.5 h-3.5" />,
      shortDesc: 'Ayat Kursi',
    },
  ];

  return (
    <div className="bg-gradient-to-b from-stone-900 via-stone-900/95 to-amber-950/20 border border-emerald-800/40 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-md">
      {/* Decorative ambient lighting & subtle pattern */}
      <div
        className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ backgroundColor: gem.accentHex }}
      />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-5 border-b border-stone-800">
        <div className="flex items-start space-x-3.5">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-950 to-stone-950 border border-emerald-600/50 flex items-center justify-center text-emerald-400 shrink-0 shadow-lg shadow-emerald-950/50">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-800/60 mb-1">
              <ShieldCheck className="w-3 h-3" />
              <span>Sinkronisasi Do'a &amp; Ayat Al-Qur'an Otomatis</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-['Cinzel'] font-bold text-amber-100">
              Wasilah Ayat &amp; Do'a Penyelaras {gem.indonesianName}
            </h3>
            <p className="text-xs text-stone-400 mt-0.5">
              Terkoneksi otomatis dengan hisab nama <strong className="text-amber-300 font-semibold">{syncData.userName}</strong> dan watak mineral {gem.name}
            </p>
          </div>
        </div>

        {/* Schedule Badge */}
        <div className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-stone-950/80 border border-amber-900/40 text-xs text-amber-300/90 shrink-0">
          <Clock className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-[11px] font-medium max-w-[200px] truncate">{syncData.wirdSchedule}</span>
        </div>
      </div>

      {/* Focus Selection Tabs */}
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-2.5 text-xs text-stone-400 font-medium">
          <Sliders className="w-3.5 h-3.5 text-amber-400" />
          <span>Pilih Fokus Penyelarasan Hajat Rohani:</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
          {focusOptions.map((opt) => {
            const isActive = activeFocus === opt.key;
            return (
              <button
                key={opt.key}
                type="button"
                onClick={() => setActiveFocus(opt.key)}
                className={`flex flex-col items-start p-2.5 rounded-xl text-left transition-all border ${
                  isActive
                    ? 'bg-amber-950/70 border-amber-500/80 text-amber-100 shadow-md shadow-amber-950/50'
                    : 'bg-stone-950/70 border-stone-800/80 text-stone-400 hover:text-stone-200 hover:border-stone-700'
                }`}
              >
                <div className="flex items-center space-x-1.5 mb-1">
                  <span className={isActive ? 'text-amber-400' : 'text-stone-500'}>{opt.icon}</span>
                  <span className="text-xs font-semibold truncate">{opt.label}</span>
                </div>
                <span className="text-[10px] text-stone-500 truncate">{opt.shortDesc}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Quranic Verse Box */}
      <div className="bg-stone-950/90 border border-stone-800 rounded-xl p-5 sm:p-6 mb-6 relative">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-stone-800/70">
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-1 rounded bg-amber-900/40 border border-amber-600/40 text-amber-300 font-bold text-xs">
              QS. {currentVerse.surahName}: {currentVerse.ayahNumber}
            </span>
            <span className="text-xs text-stone-400 font-medium">
              Fokus: {currentVerse.focusTitle}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            {'speechSynthesis' in window && (
              <button
                type="button"
                onClick={() => handleSpeak(currentVerse.arabicText)}
                className={`p-1.5 rounded-lg border text-xs flex items-center space-x-1 transition-colors ${
                  isSpeaking
                    ? 'bg-rose-950/80 border-rose-600 text-rose-300'
                    : 'bg-stone-900 border-stone-700 text-stone-300 hover:text-amber-300 hover:border-amber-600'
                }`}
                title={isSpeaking ? 'Hentikan Audio' : 'Dengarkan Tilawah Virtual'}
              >
                {isSpeaking ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                <span className="text-[11px] hidden sm:inline">{isSpeaking ? 'Hentikan' : 'Audio'}</span>
              </button>
            )}

            <button
              type="button"
              onClick={() =>
                handleCopy(
                  `QS. ${currentVerse.surahName}: ${currentVerse.ayahNumber}\n\n${currentVerse.arabicText}\n\n${currentVerse.transliteration}\n\nArtinya:\n${currentVerse.translation}\n\nHikmah Penyelaras:\n${currentVerse.hikmahResonance}`,
                  'verse'
                )
              }
              className="p-1.5 px-2.5 rounded-lg bg-stone-900 border border-stone-700 text-stone-300 hover:text-emerald-300 hover:border-emerald-600 text-xs flex items-center space-x-1 transition-colors"
            >
              {copiedSection === 'verse' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 text-[11px]">Tersalin</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="text-[11px]">Salin Ayat</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Arabic Text */}
        <div
          dir="rtl"
          className="font-['Amiri'] text-2xl sm:text-3xl text-right leading-loose text-amber-100 font-bold mb-4 tracking-wide selection:bg-amber-900/60"
        >
          {currentVerse.arabicText}
        </div>

        {/* Transliteration */}
        <div className="mb-3 text-xs sm:text-sm text-stone-300 font-serif italic leading-relaxed bg-stone-900/50 p-3 rounded-lg border border-stone-800/60">
          <span className="text-[10px] text-amber-400/90 uppercase font-sans font-bold block mb-0.5 not-italic">
            Cara Baca (Transliterasi):
          </span>
          {currentVerse.transliteration}
        </div>

        {/* Translation */}
        <div className="text-xs sm:text-sm text-stone-300 leading-relaxed bg-stone-900/30 p-3 rounded-lg border border-stone-800/40">
          <span className="text-[10px] text-emerald-400 uppercase font-bold block mb-0.5">
            Terjemahan Makna:
          </span>
          {currentVerse.translation}
        </div>

        {/* Hikmah Resonance Box */}
        <div className="mt-3.5 p-3 rounded-lg bg-amber-950/40 border border-amber-700/40 flex items-start space-x-2.5 text-xs text-amber-200">
          <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-amber-300 font-bold uppercase text-[10px] block">
              Titik Temu Gelombang Permata {gem.indonesianName}:
            </strong>
            <p className="mt-0.5 leading-relaxed text-amber-100/90">{currentVerse.hikmahResonance}</p>
          </div>
        </div>
      </div>

      {/* Grid 2-Kolom: Asmaul Husna Sinkron & Do'a Memakai Cincin */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
        {/* Card 1: Asmaul Husna & Tasbih Digital */}
        <div className="bg-stone-950/80 border border-stone-800 rounded-xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-stone-800">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <h4 className="text-sm font-semibold text-stone-200">Asmā'ul Husnā Penyelaras Hisab</h4>
              </div>
              <span className="text-[11px] text-amber-300 px-2 py-0.5 rounded bg-amber-950 border border-amber-800/60 font-bold">
                Wirid: {syncData.asmaulHusna.wiridCount}x
              </span>
            </div>

            <div dir="rtl" className="font-['Amiri'] text-2xl text-amber-200 font-bold text-right mb-2">
              {syncData.asmaulHusna.arabic}
            </div>

            <p className="text-xs font-semibold text-stone-300 mb-1">
              {syncData.asmaulHusna.latin}
            </p>
            <p className="text-xs text-stone-400 italic mb-3">
              "{syncData.asmaulHusna.meaning}"
            </p>

            <div className="text-[11px] text-stone-400 bg-stone-900/60 p-2.5 rounded-lg border border-stone-800 mb-4">
              <strong className="text-amber-300 font-medium block mb-0.5">Rahasia Keselarasan:</strong>
              {syncData.asmaulHusna.syncReason}
            </div>
          </div>

          {/* Interactive Digital Tasbih Counter */}
          <div className="pt-3 border-t border-stone-800/70">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-stone-400 flex items-center space-x-1.5">
                <span>Penghitung Wirid Digital:</span>
              </span>
              <span className="text-sm font-bold text-amber-300 font-mono">
                {wiridCounter} / {syncData.asmaulHusna.wiridCount}
              </span>
            </div>

            {/* Progress bar */}
            <div className="w-full h-1.5 bg-stone-800 rounded-full overflow-hidden mb-3">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 transition-all duration-300"
                style={{
                  width: `${Math.min(100, (wiridCounter / syncData.asmaulHusna.wiridCount) * 100)}%`,
                }}
              />
            </div>

            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={() => incrementCounter(syncData.asmaulHusna.wiridCount)}
                className="flex-1 py-2 rounded-lg bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-600/60 text-emerald-200 font-bold text-xs flex items-center justify-center space-x-2 transition-all active:scale-[0.98]"
              >
                <span>Hitung Wirid (+1)</span>
              </button>
              <button
                type="button"
                onClick={resetCounter}
                className="p-2 rounded-lg bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-400 hover:text-stone-200 text-xs transition-colors"
                title="Reset Hitungan Wirid"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Card 2: Do'a Adab Memakai Cincin Sunnah */}
        <div className="bg-stone-950/80 border border-stone-800 rounded-xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-stone-800">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <h4 className="text-sm font-semibold text-stone-200">{syncData.wearingPrayer.title}</h4>
              </div>

              <button
                type="button"
                onClick={() =>
                  handleCopy(
                    `${syncData.wearingPrayer.title}\n\n${syncData.wearingPrayer.arabic}\n\n${syncData.wearingPrayer.transliteration}\n\nArtinya:\n${syncData.wearingPrayer.translation}\n\n(${syncData.wearingPrayer.sourceTradition})`,
                    'wearing'
                  )
                }
                className="p-1 px-2 rounded bg-stone-900 border border-stone-700 text-stone-400 hover:text-amber-300 text-xs flex items-center space-x-1 transition-colors"
              >
                {copiedSection === 'wearing' ? (
                  <Check className="w-3 h-3 text-emerald-400" />
                ) : (
                  <Copy className="w-3 h-3" />
                )}
                <span className="text-[10px]">{copiedSection === 'wearing' ? 'Tersalin' : 'Salin'}</span>
              </button>
            </div>

            <div dir="rtl" className="font-['Amiri'] text-xl sm:text-2xl text-amber-100 font-bold text-right leading-loose mb-2.5">
              {syncData.wearingPrayer.arabic}
            </div>

            <p className="text-xs text-stone-300 font-serif italic mb-2 leading-relaxed bg-stone-900/40 p-2 rounded border border-stone-800/40">
              {syncData.wearingPrayer.transliteration}
            </p>

            <p className="text-xs text-stone-300 leading-relaxed mb-3">
              <strong className="text-amber-300/90 text-[10px] block uppercase font-bold">Artinya:</strong>
              {syncData.wearingPrayer.translation}
            </p>
          </div>

          <div className="text-[10px] text-stone-500 italic bg-stone-900/30 p-2 rounded border border-stone-800/40">
            &bull; {syncData.wearingPrayer.sourceTradition}
          </div>
        </div>
      </div>

      {/* Shalawat Thibbil Qulub & Aqidah Note */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-stone-950 via-stone-900 to-stone-950 border border-stone-800 text-xs text-stone-300">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 pb-2 border-b border-stone-800">
          <div className="flex items-center space-x-2 text-amber-300 font-bold">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Shalawat Penyelaras &amp; Keberkahan Cincin (Thibbil Qulub)</span>
          </div>
          <span className="text-[11px] text-stone-400">Sunnah dibaca 11x / 33x</span>
        </div>

        <div dir="rtl" className="font-['Amiri'] text-lg sm:text-xl text-amber-200 font-bold text-right mb-2 leading-relaxed">
          {syncData.istighfarAndSalawat.salawatArabic}
        </div>

        <p className="text-[11px] text-stone-400 italic mb-2">
          {syncData.istighfarAndSalawat.salawatLatin}
        </p>

        {/* Adab & Aqidah Tauhid Guard */}
        <div className="mt-3 pt-2.5 border-t border-stone-800/80 flex items-start space-x-2 text-[11px] text-stone-400">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p>
            <strong className="text-stone-200 font-semibold">Tuntunan Tauhid:</strong> Batu permata adalah ayat kauniyah (ciptaan fisik Allah) yang berkedudukan sebagai <span className="text-amber-300">wasilah (sarana ikhtiar lahiriah)</span>. Segala ijabah, perlindungan, rezeki, dan kesembuhan hakikatnya datang mutlak dari Allah Subhanahu wa Ta'ala melalui do'a yang dipanjatkan dan ketaatan kepada syariat-Nya.
          </p>
        </div>
      </div>
    </div>
  );
};

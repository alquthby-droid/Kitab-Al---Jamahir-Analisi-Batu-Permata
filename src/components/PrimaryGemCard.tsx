import React from 'react';
import { Gemstone } from '../types';
import { Sparkles, Shield, HeartPulse, Feather, CheckCircle2, Clock, MapPin, Scale, Gem } from 'lucide-react';

interface PrimaryGemCardProps {
  gem: Gemstone;
  recommendedMetal: string;
  recommendedHandFinger: string;
  bestDayAndHour: string;
}

export const PrimaryGemCard: React.FC<PrimaryGemCardProps> = ({
  gem,
  recommendedMetal,
  recommendedHandFinger,
  bestDayAndHour,
}) => {
  return (
    <div className="bg-stone-900/90 border border-amber-800/50 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-md">
      {/* Decorative ambient color glow based on stone */}
      <div
        className="absolute -top-24 -right-24 w-80 h-80 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ backgroundColor: gem.accentHex }}
      />

      {/* Top Banner: Badges, Title & Characteristics */}
      <div className="mb-6 border-b border-stone-800/80 pb-6 relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-950/90 border border-amber-600/60 text-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Permata Utama Paling Selaras</span>
          </div>

          <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-stone-950 border border-stone-800 text-xs text-stone-300">
            <span
              className="w-3 h-3 rounded-full border border-white/30 shadow-sm"
              style={{ backgroundColor: gem.accentHex }}
            />
            <span>{gem.color}</span>
          </div>
        </div>
        
        <h3 className="text-2xl sm:text-3xl font-['Cinzel'] font-bold text-amber-100 flex items-center space-x-2">
          <span>{gem.indonesianName}</span>
        </h3>
        
        <p className="text-sm font-['Amiri'] text-amber-300/90 text-lg mt-0.5">
          {gem.arabicName} • <span className="font-sans text-xs text-stone-400">{gem.mineralName}</span>
        </p>

        {/* Quick Metrics */}
        <div className="flex flex-wrap items-center gap-2 mt-4">
          <div className="px-3 py-1.5 rounded-lg bg-stone-950/80 border border-stone-700/60 text-xs">
            <span className="text-stone-400 block text-[10px] uppercase">Unsur Thabi'ah</span>
            <span className="font-semibold text-amber-200">{gem.element}</span>
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-stone-950/80 border border-stone-700/60 text-xs">
            <span className="text-stone-400 block text-[10px] uppercase">Kawkab Naungan</span>
            <span className="font-semibold text-amber-200">{gem.planet}</span>
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-stone-950/80 border border-stone-700/60 text-xs">
            <span className="text-stone-400 block text-[10px] uppercase">Kekerasan Mohs</span>
            <span className="font-semibold text-amber-200">{gem.hardnessMohs}</span>
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-stone-950/80 border border-stone-700/60 text-xs">
            <span className="text-stone-400 block text-[10px] uppercase">Berat Jenis Al-Biruni</span>
            <span className="font-semibold text-amber-200">{gem.specificGravity.split(' ')[0]}</span>
          </div>
        </div>
      </div>

      {/* Al-Biruni's Direct Treatise Reference Box */}
      <div className="bg-gradient-to-br from-amber-950/40 via-stone-950 to-stone-950 border border-amber-700/40 rounded-xl p-5 mb-6 relative">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider flex items-center space-x-1.5">
            <Gem className="w-4 h-4 text-amber-300" />
            <span>Rujukan Kitāb al-Jamāhir fī Ma'rifat al-Jawāhir</span>
          </span>
          <span className="text-[11px] text-stone-400 italic">{gem.alBiruniChapter}</span>
        </div>
        <blockquote className="text-stone-200 text-sm sm:text-base font-serif italic leading-relaxed border-l-2 border-amber-500/70 pl-4 my-2">
          {gem.alBiruniQuote}
        </blockquote>
        <div className="mt-3 pt-3 border-t border-amber-900/30 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-400">
          <div className="flex items-center space-x-2">
            <Scale className="w-3.5 h-3.5 text-amber-400" />
            <span>
              Berat Jenis Ukur Al-Biruni: <strong className="text-amber-300">{gem.specificGravity}</strong>
            </span>
          </div>
          <div>
            Standar Modern: <span className="text-stone-300">{gem.modernSpecificGravity}</span>
          </div>
        </div>
      </div>

      {/* Rules of Wearing - Logam, Jari, dan Waktu */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-stone-950/70 border border-stone-800 rounded-xl">
          <div className="flex items-center space-x-2 text-amber-400 text-xs font-semibold uppercase mb-1">
            <Shield className="w-4 h-4 text-amber-300" />
            <span>Logam Pengikat</span>
          </div>
          <p className="text-sm text-stone-200 font-medium">{recommendedMetal}</p>
          <span className="text-[11px] text-stone-400 block mt-1">
            Sesuai anjuran Al-Biruni &amp; Sunnah
          </span>
        </div>

        <div className="p-4 bg-stone-950/70 border border-stone-800 rounded-xl">
          <div className="flex items-center space-x-2 text-amber-400 text-xs font-semibold uppercase mb-1">
            <MapPin className="w-4 h-4 text-emerald-400" />
            <span>Posisi Jari Pemakaian</span>
          </div>
          <p className="text-sm text-stone-200 font-medium">{recommendedHandFinger}</p>
          <span className="text-[11px] text-stone-400 block mt-1">
            Menyalurkan resonansi energi tubuh
          </span>
        </div>

        <div className="p-4 bg-stone-950/70 border border-stone-800 rounded-xl">
          <div className="flex items-center space-x-2 text-amber-400 text-xs font-semibold uppercase mb-1">
            <Clock className="w-4 h-4 text-sky-400" />
            <span>Waktu Terbaik Mengenakan</span>
          </div>
          <p className="text-sm text-stone-200 font-medium">{bestDayAndHour}</p>
          <span className="text-[11px] text-stone-400 block mt-1">
            Sa'ah al-Falakiyyah kawkab naungan
          </span>
        </div>
      </div>

      {/* Therapeutic & Spiritual Virtues Dual Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Spiritual & Fortune Virtues */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center space-x-1.5">
            <Feather className="w-4 h-4 text-amber-400" />
            <span>Fadilah Ruhani &amp; Penguatan Peruntungan</span>
          </h4>
          <ul className="space-y-2">
            {gem.spiritualVirtues.map((virtue, idx) => (
              <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-stone-300">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{virtue}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Therapeutic / Health Virtues recorded by Al-Biruni */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300 flex items-center space-x-1.5">
            <HeartPulse className="w-4 h-4 text-emerald-400" />
            <span>Khasiat Terapeutik &amp; Keseimbangan Tubuh</span>
          </h4>
          <ul className="space-y-2">
            {gem.therapeuticBenefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-stone-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Care Advice */}
      <div className="mt-6 pt-4 border-t border-stone-800/80 flex items-center justify-between text-xs text-stone-400">
        <div>
          <span className="text-amber-400/90 font-medium">Adab Perawatan Permata:</span> {gem.careAdvice}
        </div>
      </div>
    </div>
  );
};

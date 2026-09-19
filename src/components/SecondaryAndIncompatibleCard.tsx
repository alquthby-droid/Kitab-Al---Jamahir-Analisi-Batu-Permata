import React from 'react';
import { Gemstone } from '../types';
import { PlusCircle, AlertTriangle, ArrowRight } from 'lucide-react';

interface SecondaryAndIncompatibleCardProps {
  secondaryGem: Gemstone;
  incompatibleGem: Gemstone;
  onSelectGem: (gem: Gemstone) => void;
}

export const SecondaryAndIncompatibleCard: React.FC<SecondaryAndIncompatibleCardProps> = ({
  secondaryGem,
  incompatibleGem,
  onSelectGem,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Supportive Companion Gemstone */}
      <div className="bg-stone-900/85 border border-emerald-900/50 rounded-2xl p-6 shadow-xl backdrop-blur-sm relative overflow-hidden flex flex-col justify-between">
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-600/10 rounded-full blur-2xl pointer-events-none" />

        <div>
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/90 border border-emerald-700/60 text-emerald-300 mb-3">
            <PlusCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Batu Pendamping Harmonis (Wasīlah)</span>
          </div>

          {/* Name & Arabic */}
          <div className="mb-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-['Cinzel'] font-bold text-stone-100">
                {secondaryGem.indonesianName}
              </h4>
              <span className="text-base font-['Amiri'] text-emerald-400 font-bold">
                {secondaryGem.arabicName}
              </span>
            </div>
            <div className="inline-flex items-center space-x-1.5 text-xs text-emerald-300 mt-1">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: secondaryGem.accentHex }} />
              <span>{secondaryGem.color}</span>
            </div>
          </div>

          <p className="text-xs text-stone-300 leading-relaxed mb-4">
            Batu ini berunsur <strong className="text-emerald-300">{secondaryGem.element}</strong> yang menyempurnakan dan menyeimbangkan unsur dominan Anda. Berfungsi memperkuat ketenangan dan memicu kelancaran rezeki saat disandingkan.
          </p>

          <div className="p-3 bg-stone-950/70 border border-stone-800 rounded-lg text-xs space-y-1 mb-4">
            <div className="flex justify-between text-stone-400">
              <span>Unsur / Falak:</span>
              <span className="text-stone-200 font-medium">{secondaryGem.element} • {secondaryGem.planet}</span>
            </div>
            <div className="flex justify-between text-stone-400">
              <span>Rekomendasi Pakai:</span>
              <span className="text-stone-200 font-medium">{secondaryGem.recommendedFinger}</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onSelectGem(secondaryGem)}
          className="w-full py-2 px-3 bg-stone-950 hover:bg-emerald-950/50 border border-emerald-800/50 hover:border-emerald-600 rounded-lg text-xs font-medium text-emerald-300 flex items-center justify-center space-x-1.5 transition-all"
        >
          <span>Pelajari Khasiat &amp; Petikan Al-Jamahir</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Incompatible / Conflicting Stone */}
      <div className="bg-stone-900/85 border border-rose-900/50 rounded-2xl p-6 shadow-xl backdrop-blur-sm relative overflow-hidden flex flex-col justify-between">
        <div className="absolute top-0 right-0 w-32 h-32 bg-rose-600/10 rounded-full blur-2xl pointer-events-none" />

        <div>
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-950/90 border border-rose-700/60 text-rose-300 mb-3">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
            <span>Batu yang Perlu Dihindari (Kontraindikasi)</span>
          </div>

          {/* Name & Arabic */}
          <div className="mb-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-['Cinzel'] font-bold text-stone-100">
                {incompatibleGem.indonesianName}
              </h4>
              <span className="text-base font-['Amiri'] text-rose-400 font-bold">
                {incompatibleGem.arabicName}
              </span>
            </div>
            <div className="inline-flex items-center space-x-1.5 text-xs text-rose-300 mt-1">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: incompatibleGem.accentHex }} />
              <span>{incompatibleGem.color}</span>
            </div>
          </div>

          <p className="text-xs text-stone-300 leading-relaxed mb-4">
            Al-Biruni dan ulama hisab mengingatkan bahwa permata berunsur <strong className="text-rose-400">{incompatibleGem.element}</strong> ini memiliki polaritas berlawanan dengan unsur nama Anda. Memakainya bersamaan dikhawatirkan memicu kelelahan pikiran atau benturan temperamen.
          </p>

          <div className="p-3 bg-stone-950/70 border border-stone-800 rounded-lg text-xs space-y-1 mb-4">
            <div className="flex justify-between text-stone-400">
              <span>Sifat Polarisasi:</span>
              <span className="text-rose-300 font-medium">{incompatibleGem.element} (Berlawanan)</span>
            </div>
            <div className="flex justify-between text-stone-400">
              <span>Peringatan Al-Biruni:</span>
              <span className="text-stone-300 italic">Hindari pemakaian pada satu ikatan cincin yang sama</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onSelectGem(incompatibleGem)}
          className="w-full py-2 px-3 bg-stone-950 hover:bg-rose-950/50 border border-rose-800/50 hover:border-rose-600 rounded-lg text-xs font-medium text-rose-300 flex items-center justify-center space-x-1.5 transition-all"
        >
          <span>Detail Mineralogi {incompatibleGem.indonesianName}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

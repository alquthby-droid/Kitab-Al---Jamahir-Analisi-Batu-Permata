import React, { useState } from 'react';
import { ElementType, LetterCalculation, PlanetInfo, ZodiacBuruj } from '../types';
import { Flame, Mountain, Wind, Droplets, Orbit, Compass, ChevronDown, ChevronUp, Hash } from 'lucide-react';

interface ElementAndNumerologyCardProps {
  inputName: string;
  motherName?: string;
  transliteratedArabic: string;
  totalJummalKabir: number;
  jummalShaghir: number;
  letterBreakdown: LetterCalculation[];
  elementScores: {
    Api: number;
    Tanah: number;
    Udara: number;
    Air: number;
  };
  dominantElement: ElementType;
  dominantPlanet: PlanetInfo;
  zodiacBuruj: ZodiacBuruj;
  onOpenAbjadTable?: () => void;
}

export const ElementAndNumerologyCard: React.FC<ElementAndNumerologyCardProps> = ({
  inputName,
  motherName,
  transliteratedArabic,
  totalJummalKabir,
  jummalShaghir,
  letterBreakdown,
  elementScores,
  dominantElement,
  dominantPlanet,
  zodiacBuruj,
  onOpenAbjadTable,
}) => {
  const [showTable, setShowTable] = useState(false);

  const totalElementSum = elementScores.Api + elementScores.Tanah + elementScores.Udara + elementScores.Air || 1;

  const elementsData: Array<{
    name: ElementType;
    arabic: string;
    icon: any;
    color: string;
    score: number;
    percentage: number;
    desc: string;
  }> = [
    {
      name: 'Api',
      arabic: 'النار (Nār)',
      icon: Flame,
      color: 'from-amber-600 to-red-600 text-red-400 border-red-500/40',
      score: elementScores.Api,
      percentage: Math.round((elementScores.Api / totalElementSum) * 100),
      desc: 'Panas & Kering; melambangkan gairah, keberanian, dan daya juang.',
    },
    {
      name: 'Tanah',
      arabic: 'التراب (Turāb)',
      icon: Mountain,
      color: 'from-yellow-700 to-amber-800 text-amber-500 border-amber-600/40',
      score: elementScores.Tanah,
      percentage: Math.round((elementScores.Tanah / totalElementSum) * 100),
      desc: 'Dingin & Kering; melambangkan ketabahan, kesetiaan, dan stabilitas materi.',
    },
    {
      name: 'Udara',
      arabic: 'الهواء (Hawā’)',
      icon: Wind,
      color: 'from-sky-600 to-cyan-700 text-sky-400 border-sky-500/40',
      score: elementScores.Udara,
      percentage: Math.round((elementScores.Udara / totalElementSum) * 100),
      desc: 'Panas & Lembap; melambangkan intelektual, diplomasi, dan keluwesan.',
    },
    {
      name: 'Air',
      arabic: 'الماء (Mā’)',
      icon: Droplets,
      color: 'from-blue-600 to-teal-700 text-blue-400 border-blue-500/40',
      score: elementScores.Air,
      percentage: Math.round((elementScores.Air / totalElementSum) * 100),
      desc: 'Dingin & Lembap; melambangkan kepekaan rasa, ketenangan batin, dan intuisi.',
    },
  ];

  return (
    <div className="bg-stone-900/80 border border-amber-900/30 rounded-2xl p-6 sm:p-8 shadow-xl backdrop-blur-sm space-y-6">
      {/* Title & Core Jummal Metrics */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-800">
        <div>
          <h3 className="text-xl font-['Cinzel'] font-bold text-amber-100 flex items-center space-x-2">
            <Hash className="w-5 h-5 text-amber-400" />
            <span>Hisab Numerologi Abjad (Jummal al-Kabir)</span>
          </h3>
          <p className="text-xs text-stone-400 mt-0.5">
            Analisis perhitungan huruf nama <strong className="text-amber-200">"{inputName}"</strong>
            {motherName ? <span> binti/bin <strong className="text-amber-200">"{motherName}"</strong></span> : null}
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <div className="px-4 py-2 bg-stone-950/80 border border-amber-800/40 rounded-xl text-center">
            <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Jummal Kabir</span>
            <span className="text-xl font-bold font-mono text-amber-300">{totalJummalKabir}</span>
          </div>
          <div className="px-4 py-2 bg-stone-950/80 border border-amber-800/40 rounded-xl text-center">
            <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Akar Digit (Shaghir)</span>
            <span className="text-xl font-bold font-mono text-emerald-400">{jummalShaghir}</span>
          </div>
        </div>
      </div>

      {/* Planetary & Zodiac Corroboration */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-stone-950/60 border border-stone-800 rounded-xl flex items-start space-x-3">
          <div className="p-2.5 rounded-lg bg-amber-950/40 border border-amber-800/30 text-amber-400 text-xl font-mono">
            {dominantPlanet.symbol}
          </div>
          <div className="flex-1">
            <span className="text-[10px] uppercase tracking-wider text-amber-400 font-semibold block">
              Kawkab Naungan Falakiah
            </span>
            <h4 className="text-base font-bold text-stone-100">
              {dominantPlanet.arabicName} • {dominantPlanet.name}
            </h4>
            <p className="text-xs text-stone-300 mt-1">
              Hari Rulership: <strong className="text-amber-200">{dominantPlanet.day}</strong> • Logam: {dominantPlanet.metal}
            </p>
            <p className="text-[11px] text-stone-400 mt-0.5">
              {dominantPlanet.characteristics}
            </p>
          </div>
        </div>

        <div className="p-4 bg-stone-950/60 border border-stone-800 rounded-xl flex items-start space-x-3">
          <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-800/30 text-emerald-400">
            <Orbit className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-semibold block">
              Buruj Konstelasi Klasik
            </span>
            <h4 className="text-base font-bold text-stone-100">
              {zodiacBuruj.arabicName} • {zodiacBuruj.name}
            </h4>
            <p className="text-xs text-stone-300 mt-1">
              Unsur Buruj: <strong className="text-emerald-200">{zodiacBuruj.element}</strong> • Penguasa: {zodiacBuruj.ruler}
            </p>
            <p className="text-[11px] text-stone-400 mt-0.5">
              Rentang Kalender Falak: {zodiacBuruj.dates}
            </p>
          </div>
        </div>
      </div>

      {/* 4 Elements Progress Distribution */}
      <div>
        <h4 className="text-xs font-bold uppercase tracking-wider text-stone-300 mb-3 flex items-center space-x-2">
          <Compass className="w-4 h-4 text-amber-400" />
          <span>Distribusi Keseimbangan Empat Unsur Raga (Al-Anāṣir al-Arba'ah)</span>
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {elementsData.map((elem) => {
            const Icon = elem.icon;
            const isDominant = elem.name === dominantElement;
            return (
              <div
                key={elem.name}
                className={`p-3.5 rounded-xl border transition-all ${
                  isDominant
                    ? 'bg-stone-950/90 border-amber-500/70 shadow-md shadow-amber-950/40 ring-1 ring-amber-500/30'
                    : 'bg-stone-950/50 border-stone-800/80'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <div className={`p-1.5 rounded-md bg-stone-900 border ${elem.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-stone-200 block">{elem.name}</span>
                      <span className="text-[10px] text-stone-400 font-['Amiri']">{elem.arabic}</span>
                    </div>
                  </div>
                  <span className="text-sm font-bold font-mono text-amber-300">{elem.percentage}%</span>
                </div>
                <div className="w-full h-1.5 bg-stone-900 rounded-full overflow-hidden mb-2">
                  <div
                    className={`h-full bg-gradient-to-r ${elem.color} rounded-full`}
                    style={{ width: `${Math.min(100, Math.max(5, elem.percentage))}%` }}
                  />
                </div>
                <p className="text-[11px] text-stone-400 leading-snug">{elem.desc}</p>
                {isDominant && (
                  <span className="mt-2 inline-block px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider bg-amber-950 text-amber-300 border border-amber-800/60 rounded">
                    ★ Unsur Dominan
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Accordion Toggle for Detailed Letter Breakdown Table */}
      <div className="border-t border-stone-800 pt-4">
        <button
          type="button"
          onClick={() => setShowTable(!showTable)}
          className="w-full py-2.5 px-4 bg-stone-950 hover:bg-stone-800/80 border border-stone-800 rounded-xl text-xs font-medium text-stone-300 flex items-center justify-between transition-colors"
        >
          <span className="flex items-center space-x-2">
            <Hash className="w-4 h-4 text-amber-400" />
            <span>Lihat Rincian Bedah Huruf Abjad &amp; Nilai Jummal Tiap Karakter ({letterBreakdown.length} Huruf)</span>
          </span>
          {showTable ? <ChevronUp className="w-4 h-4 text-stone-400" /> : <ChevronDown className="w-4 h-4 text-stone-400" />}
        </button>

        {showTable && (
          <div className="mt-3 overflow-x-auto rounded-xl border border-stone-800 bg-stone-950">
            <table className="w-full text-left text-xs text-stone-300">
              <thead className="bg-stone-900 text-stone-400 border-b border-stone-800 text-[11px] uppercase tracking-wider">
                <tr>
                  <th className="py-2.5 px-3">No</th>
                  <th className="py-2.5 px-3">Karakter</th>
                  <th className="py-2.5 px-3">Aksara Hijaiyah</th>
                  <th className="py-2.5 px-3">Nama Huruf</th>
                  <th className="py-2.5 px-3">Unsur Thabi'ah</th>
                  <th className="py-2.5 px-3 text-right">Nilai Jummal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800/60">
                {letterBreakdown.map((item, idx) => (
                  <tr key={idx} className="hover:bg-stone-900/40 transition-colors">
                    <td className="py-2.5 px-3 text-stone-400">{idx + 1}</td>
                    <td className="py-2.5 px-3 font-semibold text-stone-100 uppercase">{item.char}</td>
                    <td className="py-2.5 px-3 text-lg font-['Amiri'] text-amber-300 font-bold">{item.arabicChar}</td>
                    <td className="py-2.5 px-3 text-stone-300">{item.arabicName}</td>
                    <td className="py-2.5 px-3">
                      <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-stone-900 border border-stone-700/60 text-amber-200">
                        {item.element}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 text-right font-mono font-bold text-amber-400">{item.value}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-stone-900/90 font-bold border-t border-stone-800 text-stone-200">
                <tr>
                  <td colSpan={5} className="py-2.5 px-3 text-right uppercase tracking-wider text-[11px]">
                    Total Akumulasi Jummal al-Kabir:
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono text-amber-300 text-sm">{totalJummalKabir}</td>
                </tr>
              </tfoot>
            </table>

            {onOpenAbjadTable && (
              <div className="p-3 bg-amber-950/30 border-t border-stone-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <span className="text-stone-400">
                  Ingin melihat daftar referensi 28 huruf, makhraj, dan kaidah hisab?
                </span>
                <button
                  type="button"
                  onClick={onOpenAbjadTable}
                  className="px-3 py-1.5 bg-amber-600/30 hover:bg-amber-600/50 text-amber-200 border border-amber-500/40 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-colors self-start sm:self-auto"
                >
                  <Hash className="w-3.5 h-3.5 text-amber-400" />
                  <span>Buka Tabel Abjad 28 Huruf</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

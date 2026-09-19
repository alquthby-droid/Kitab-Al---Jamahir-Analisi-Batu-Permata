import React from 'react';
import { Gemstone } from '../types';
import { Coins, Crown, ShieldCheck, Heart, Smile } from 'lucide-react';

interface FortuneRadarProps {
  scores: {
    rezeki: number;
    kewibawaan: number;
    ketentraman: number;
    perlindungan: number;
    kesehatan: number;
  };
  gem: Gemstone;
}

export const FortuneRadar: React.FC<FortuneRadarProps> = ({ scores, gem }) => {
  const metrics = [
    {
      id: 'rezeki',
      label: 'Kelapangan Rezeki & Niaga',
      score: scores.rezeki,
      icon: Coins,
      color: 'from-amber-500 to-yellow-600',
      textColor: 'text-amber-400',
      description: gem.fortuneAspects.rezeki,
    },
    {
      id: 'kewibawaan',
      label: 'Haibah & Kewibawaan Kepemimpinan',
      score: scores.kewibawaan,
      icon: Crown,
      color: 'from-rose-500 to-red-600',
      textColor: 'text-rose-400',
      description: gem.fortuneAspects.kewibawaan,
    },
    {
      id: 'ketentraman',
      label: 'Ketentraman Batin & Kejernihan Jiwa',
      score: scores.ketentraman,
      icon: Smile,
      color: 'from-teal-500 to-emerald-600',
      textColor: 'text-teal-400',
      description: gem.fortuneAspects.ketenangan,
    },
    {
      id: 'perlindungan',
      label: 'Benteng Perlindungan & Keselamatan',
      score: scores.perlindungan,
      icon: ShieldCheck,
      color: 'from-blue-500 to-indigo-600',
      textColor: 'text-blue-400',
      description: 'Menolak pandangan dengki (ain), bahaya perjalanan, dan kegelisahan malam hari.',
    },
    {
      id: 'kesehatan',
      label: 'Vitalitas Fisik & Ketahanan Tubuh',
      score: scores.kesehatan,
      icon: Heart,
      color: 'from-emerald-500 to-green-600',
      textColor: 'text-emerald-400',
      description: gem.fortuneAspects.kesehatan,
    },
  ];

  return (
    <div className="bg-stone-900/80 border border-amber-900/30 rounded-2xl p-6 sm:p-8 shadow-xl backdrop-blur-sm">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone-800">
        <div>
          <h3 className="text-xl font-['Cinzel'] font-bold text-amber-100">
            Kalkulasi Indeks Peruntungan &amp; Resonansi Permata
          </h3>
          <p className="text-xs text-stone-400 mt-0.5">
            Dihitung melalui formulasi hisab Jummal terhadap karakter mineralogi Al-Biruni
          </p>
        </div>
        <div className="hidden sm:block text-right">
          <span className="text-xs text-stone-400 block">Kecocokan Total</span>
          <span className="text-2xl font-bold text-amber-400">
            {Math.round((scores.rezeki + scores.kewibawaan + scores.ketentraman + scores.perlindungan + scores.kesehatan) / 5)}%
          </span>
        </div>
      </div>

      <div className="space-y-5">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div key={metric.id} className="bg-stone-950/60 border border-stone-800/80 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2.5">
                  <div className={`p-1.5 rounded-lg bg-stone-900 ${metric.textColor}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold text-stone-200">{metric.label}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-stone-400 font-mono">Indeks Resonansi:</span>
                  <span className={`text-base font-bold font-mono ${metric.textColor}`}>{metric.score}%</span>
                </div>
              </div>

              {/* Progress Track */}
              <div className="w-full h-2.5 bg-stone-900 rounded-full overflow-hidden mb-2.5 border border-stone-800">
                <div
                  className={`h-full bg-gradient-to-r ${metric.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${metric.score}%` }}
                />
              </div>

              {/* Contextual Description */}
              <p className="text-xs text-stone-300 leading-relaxed pl-1">
                {metric.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

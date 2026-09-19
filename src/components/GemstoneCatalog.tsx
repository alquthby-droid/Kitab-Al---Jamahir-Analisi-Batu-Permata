import React, { useState } from 'react';
import { Gemstone, ElementType } from '../types';
import { GEMSTONES_CATALOG } from '../data/gemstonesData';
import { DeveloperContactCard } from './DeveloperContactCard';
import { 
  Search, Sparkles, Scale, BookOpen, Shield, HeartPulse, X, CheckCircle2, 
  Eye, Compass, Layers, ExternalLink
} from 'lucide-react';

interface GemstoneCatalogProps {
  onSelectGemstoneForAnalysis?: (gem: Gemstone) => void;
}

export const GemstoneCatalog: React.FC<GemstoneCatalogProps> = () => {
  const [selectedElement, setSelectedElement] = useState<ElementType | 'Semua'>('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalGem, setActiveModalGem] = useState<Gemstone | null>(null);

  const filteredGems = GEMSTONES_CATALOG.filter((gem) => {
    const matchesElement = selectedElement === 'Semua' || gem.element === selectedElement;
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      gem.name.toLowerCase().includes(query) ||
      gem.indonesianName.toLowerCase().includes(query) ||
      gem.arabicName.includes(searchQuery) ||
      gem.mineralName.toLowerCase().includes(query) ||
      gem.color.toLowerCase().includes(query) ||
      gem.opticalPhenomenon.toLowerCase().includes(query) ||
      gem.visualTone.toLowerCase().includes(query);
    return matchesElement && matchesSearch;
  });

  return (
    <div className="space-y-10">
      {/* Catalog Header */}
      <div className="bg-stone-900/90 border border-amber-900/50 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-md relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-3xl relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-950/90 border border-amber-800/60 text-amber-300 text-xs font-semibold mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Katalog Permata Kitāb al-Jamāhir</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-['Cinzel'] font-bold text-amber-100 mb-2">
            Ensiklopedia Permata Kitāb al-Jamāhir fī Ma'rifat al-Jawāhir
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
            Memuat khasiat mineralogi, karakter empat unsur (Api, Tanah, Udara, Air), serta bobot jenis timbangan bejana kerucut hidrostatik Abu Rayhan Al-Biruni dari naskah klasik <em>Kitāb al-Jamāhir</em>.
          </p>
        </div>

        {/* Filter and Search Controls */}
        <div className="mt-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pt-5 border-t border-stone-800/80 relative z-10">
          {/* Element Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            {(['Semua', 'Api', 'Tanah', 'Udara', 'Air'] as const).map((elem) => (
              <button
                key={elem}
                onClick={() => setSelectedElement(elem)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedElement === elem
                    ? 'bg-amber-600 text-stone-950 font-bold shadow-md shadow-amber-950/40'
                    : 'bg-stone-950 text-stone-300 hover:bg-stone-800/80 border border-stone-800'
                }`}
              >
                {elem === 'Semua' ? 'Semua Unsur' : `Unsur ${elem}`}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari nama, warna, atau mineral..."
              className="w-full pl-9 pr-4 py-2 bg-stone-950 border border-stone-800 rounded-xl text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all"
            />
          </div>
        </div>
      </div>

      {/* Grid of Gemstones */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGems.map((gem) => (
          <div
            key={gem.id}
            onClick={() => setActiveModalGem(gem)}
            className="bg-stone-900/80 hover:bg-stone-900 border border-stone-800/90 hover:border-amber-700/60 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between group relative"
          >
            {/* Top Accent Stripe */}
            <div
              className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl transition-all group-hover:h-2"
              style={{ backgroundColor: gem.accentHex }}
            />

            <div>
              {/* Badges: Element & Hardness */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-stone-950 border border-stone-700/70 text-amber-300 shadow-sm">
                  {gem.element} • {gem.planet.split(' ')[0]}
                </span>
                <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold bg-stone-950 border border-stone-700/70 text-stone-200">
                  {gem.hardnessMohs.split(' ')[0]} Mohs
                </span>
              </div>

              {/* Title & Arabic */}
              <div className="mb-2">
                <h3 className="text-xl font-['Cinzel'] font-bold text-stone-100 group-hover:text-amber-200 transition-colors">
                  {gem.indonesianName}
                </h3>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-sm font-['Amiri'] text-amber-400 font-bold">
                    {gem.arabicName}
                  </span>
                  <span className="text-[11px] text-stone-400 font-mono">
                    {gem.mineralName}
                  </span>
                </div>
              </div>

              {/* Color & Visual Tone swatch */}
              <div className="flex items-center space-x-2 my-3 p-2 rounded-lg bg-stone-950 border border-stone-800 text-xs text-stone-300">
                <span
                  className="w-3 h-3 rounded-full shadow-sm shrink-0 border border-white/20"
                  style={{ backgroundColor: gem.accentHex }}
                />
                <span className="truncate">{gem.color}</span>
              </div>

              {/* Al-Biruni Quote Preview */}
              <p className="text-xs text-stone-300 line-clamp-3 leading-relaxed mb-4 italic border-l-2 border-amber-600/40 pl-3">
                {gem.alBiruniQuote.replace(/“|”/g, '')}
              </p>
            </div>

            {/* Card Footer */}
            <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between text-[11px] text-stone-400">
              <span className="flex items-center space-x-1">
                <Scale className="w-3.5 h-3.5 text-amber-400" />
                <span>BJ Al-Biruni: <strong className="text-stone-300">{gem.specificGravity.split(' ')[0]}</strong></span>
              </span>
              <span className="text-amber-400 group-hover:translate-x-1 transition-transform inline-flex items-center font-medium">
                Rincian &rarr;
              </span>
            </div>
          </div>
        ))}
      </div>

      {filteredGems.length === 0 && (
        <div className="text-center py-16 bg-stone-900/40 rounded-2xl border border-stone-800">
          <p className="text-stone-400 text-sm">Tidak ditemukan permata yang sesuai dengan pencarian Anda.</p>
        </div>
      )}

      {/* Developer Attribution Card on Catalog Page */}
      <DeveloperContactCard />

      {/* Gemstone Detail Modal */}
      {activeModalGem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
          <div className="bg-stone-900 border border-amber-800/70 rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setActiveModalGem(null)}
              className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-100 bg-stone-950 rounded-full border border-stone-800 transition-colors z-20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Top Accent Stripe */}
            <div
              className="h-1.5 w-full rounded-full mb-6"
              style={{ backgroundColor: activeModalGem.accentHex }}
            />

            <div className="mb-5">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-950 border border-amber-700 text-amber-300">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{activeModalGem.alBiruniChapter}</span>
                </div>
                <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-stone-950 border border-stone-800 text-xs text-stone-300">
                  <span
                    className="w-3 h-3 rounded-full border border-white/40 shadow-sm"
                    style={{ backgroundColor: activeModalGem.accentHex }}
                  />
                  <span>{activeModalGem.color}</span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-['Cinzel'] font-bold text-amber-100 mt-2">
                {activeModalGem.indonesianName}
              </h3>
              <p className="text-base font-['Amiri'] text-amber-300 mt-1">
                {activeModalGem.arabicName} • <span className="font-sans text-xs text-stone-400">{activeModalGem.mineralName}</span>
              </p>
            </div>

            {/* Optical Phenomenon Highlight Box */}
            <div className="bg-amber-950/40 border border-amber-800/60 rounded-xl p-3.5 mb-5 flex items-start space-x-3">
              <Eye className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-amber-300 uppercase tracking-wide">Karakter Optik &amp; Fenomena Visual</div>
                <div className="text-xs text-stone-200 mt-0.5 leading-relaxed">{activeModalGem.opticalPhenomenon}</div>
              </div>
            </div>

            {/* Al-Biruni Quote Box */}
            <div className="bg-stone-950 border border-amber-800/40 rounded-xl p-4 mb-5">
              <div className="text-[11px] font-semibold text-amber-400 mb-1 flex items-center space-x-1">
                <BookOpen className="w-3 h-3" />
                <span>Naskah Al-Biruni (Al-Jamahir fi Ma'rifat al-Jawahir):</span>
              </div>
              <blockquote className="text-xs sm:text-sm font-serif italic text-stone-200 leading-relaxed">
                {activeModalGem.alBiruniQuote}
              </blockquote>
            </div>

            {/* Scientific Attributes */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 text-xs">
              <div className="p-3 bg-stone-950 rounded-xl border border-stone-800">
                <span className="text-stone-400 block text-[10px] uppercase">Unsur Thabi'ah</span>
                <span className="font-bold text-amber-200">{activeModalGem.element}</span>
              </div>
              <div className="p-3 bg-stone-950 rounded-xl border border-stone-800">
                <span className="text-stone-400 block text-[10px] uppercase">Falak / Kawkab</span>
                <span className="font-bold text-amber-200">{activeModalGem.planet}</span>
              </div>
              <div className="p-3 bg-stone-950 rounded-xl border border-stone-800">
                <span className="text-stone-400 block text-[10px] uppercase">Kekerasan</span>
                <span className="font-bold text-amber-200">{activeModalGem.hardnessMohs}</span>
              </div>
              <div className="p-3 bg-stone-950 rounded-xl border border-stone-800">
                <span className="text-stone-400 block text-[10px] uppercase">Berat Jenis</span>
                <span className="font-bold text-amber-200">{activeModalGem.specificGravity.split(' ')[0]}</span>
              </div>
            </div>

            {/* Virtues */}
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="text-xs font-bold uppercase text-amber-400 flex items-center space-x-1.5 mb-2">
                  <Shield className="w-4 h-4" />
                  <span>Fadilah Ruhani &amp; Rezeki</span>
                </h4>
                <ul className="space-y-1.5">
                  {activeModalGem.spiritualVirtues.map((v, i) => (
                    <li key={i} className="text-xs text-stone-300 flex items-start space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <span>{v}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase text-emerald-400 flex items-center space-x-1.5 mb-2">
                  <HeartPulse className="w-4 h-4" />
                  <span>Khasiat Fisik &amp; Medis Tradisional</span>
                </h4>
                <ul className="space-y-1.5">
                  {activeModalGem.therapeuticBenefits.map((b, i) => (
                    <li key={i} className="text-xs text-stone-300 flex items-start space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Wearing Protocol */}
            <div className="p-4 bg-stone-950 rounded-xl border border-stone-800 text-xs text-stone-300 space-y-1.5 mb-6">
              <div><strong className="text-amber-300">Posisi Jari:</strong> {activeModalGem.recommendedFinger}</div>
              <div><strong className="text-amber-300">Logam Pengikat:</strong> {activeModalGem.suitableMetals.join(', ')}</div>
              <div><strong className="text-amber-300">Waktu Pemakaian:</strong> {activeModalGem.bestWearingDay}</div>
              <div><strong className="text-amber-300">Perawatan:</strong> {activeModalGem.careAdvice}</div>
            </div>

            <button
              onClick={() => setActiveModalGem(null)}
              className="w-full py-2.5 bg-amber-700 hover:bg-amber-600 text-amber-50 rounded-xl text-xs font-semibold shadow-lg transition-colors"
            >
              Tutup Rincian
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

import React, { useState } from 'react';
import { Sparkles, Calculator, User, Heart, ArrowRight, BookMarked, HelpCircle, Hash } from 'lucide-react';
import { isArabicText, transliterateLatinToAbjad, parseArabicAbjad } from '../utils/numerology';

interface NumerologyFormProps {
  onAnalyze: (name: string, motherName?: string) => void;
  isLoading: boolean;
  onOpenAbjadTable?: () => void;
}

const PRESET_NAMES = [
  { name: 'Sultan Mahmud', mother: 'Maryam', label: 'Sultan Mahmud' },
  { name: 'Fatimah Zahra', mother: 'Khadijah', label: 'Fatimah Zahra' },
  { name: 'Ahmad Fauzi', mother: '', label: 'Ahmad Fauzi' },
  { name: 'Siti Nurhaliza', mother: 'Aminah', label: 'Siti Nurhaliza' },
  { name: 'Budi Santoso', mother: '', label: 'Budi Santoso' },
];

export const NumerologyForm: React.FC<NumerologyFormProps> = ({ onAnalyze, isLoading, onOpenAbjadTable }) => {
  const [name, setName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [showMotherInput, setShowMotherInput] = useState(false);

  // Real-time calculation preview
  const trimmedName = name.trim();
  const isArabic = isArabicText(trimmedName);
  const livePreview = trimmedName.length > 0
    ? (isArabic ? parseArabicAbjad(trimmedName) : transliterateLatinToAbjad(trimmedName))
    : null;

  const liveJummal = livePreview
    ? livePreview.breakdown.reduce((sum, item) => sum + item.value, 0)
    : 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAnalyze(name.trim(), showMotherInput && motherName.trim() ? motherName.trim() : undefined);
  };

  const handleSelectPreset = (preset: { name: string; mother: string }) => {
    setName(preset.name);
    if (preset.mother) {
      setMotherName(preset.mother);
      setShowMotherInput(true);
    } else {
      setShowMotherInput(false);
      setMotherName('');
    }
  };

  return (
    <div className="bg-stone-900/80 border border-amber-900/40 rounded-2xl p-6 sm:p-8 shadow-xl shadow-stone-950/60 relative overflow-hidden backdrop-blur-sm">
      {/* Decorative Golden Corner Accents */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-amber-600/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-radial from-emerald-600/10 to-transparent pointer-events-none" />

      <div className="mb-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-950/70 border border-amber-800/50 text-amber-300 text-xs font-medium mb-3">
          <BookMarked className="w-3.5 h-3.5" />
          <span>Hisab al-Jummal al-Kabir &amp; Mineralogi Al-Biruni</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-['Cinzel'] font-bold text-amber-100 mb-2">
          Uji Kecocokan Batu Permata &amp; Peruntungan Nama
        </h2>
        <p className="text-sm text-stone-300 leading-relaxed max-w-3xl">
          Masukkan nama lengkap Anda untuk mengalkulasi nilai hisab numerologi Abjad (Jummal), perimbangan empat unsur raga (Api, Tanah, Udara, Air), serta menentukan batu permata yang selaras dengan getaran jiwa Anda merujuk pada kitab klasik <span className="text-amber-300 italic">Kitāb al-Jamāhir fī Ma'rifat al-Jawāhir</span> karya Syaikh Abu Rayhan Al-Biruni.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="user-name-input" className="block text-sm font-medium text-amber-200 mb-2 flex items-center justify-between">
            <span className="flex items-center space-x-1.5">
              <User className="w-4 h-4 text-amber-400" />
              <span>Nama Pengguna / Nama Lengkap</span>
            </span>
            <span className="text-xs text-stone-400">
              {isArabic ? 'Aksara Arab terdeteksi' : 'Aksara Latin (Ditransliterasi otomatis)'}
            </span>
          </label>
          <div className="relative">
            <input
              id="user-name-input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Contoh: Ahmad Syarif / Siti Nurhaliza / محمد"
              required
              className="w-full px-4 py-3.5 bg-stone-950/90 border border-stone-700/70 rounded-xl text-stone-100 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-base"
            />
          </div>
        </div>

        {/* Real-time Preview Pill */}
        {livePreview && livePreview.breakdown.length > 0 && (
          <div className="p-3.5 bg-stone-950/60 border border-amber-900/30 rounded-xl flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center space-x-2">
              <span className="text-stone-400">Transliterasi Hijaiyah:</span>
              <span className="font-['Amiri'] text-lg text-amber-300 font-bold px-2 py-0.5 bg-amber-950/50 rounded border border-amber-800/40">
                {livePreview.transliterated}
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-stone-400">
                Huruf: <strong className="text-amber-200">{livePreview.breakdown.length}</strong>
              </span>
              <span className="text-stone-400">
                Estimasi Jummal: <strong className="text-amber-400">{liveJummal}</strong>
              </span>
            </div>
          </div>
        )}

        {/* Optional Mother Name Toggle (Ism al-Umm) */}
        <div>
          <button
            type="button"
            id="toggle-mother-input"
            onClick={() => setShowMotherInput(!showMotherInput)}
            className="text-xs text-amber-400/90 hover:text-amber-300 flex items-center space-x-1.5 transition-colors focus:outline-none"
          >
            <Heart className="w-3.5 h-3.5 text-rose-400" />
            <span>
              {showMotherInput ? 'Sembunyikan Nama Ibu Kandung' : '+ Sertakan Nama Ibu Kandung (Metode Klasik Ism al-Umm untuk Akurasi Tinggi)'}
            </span>
          </button>

          {showMotherInput && (
            <div className="mt-3 p-4 bg-stone-950/50 border border-amber-900/30 rounded-xl space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="mother-name-input" className="text-xs font-medium text-amber-200 flex items-center space-x-1">
                  <span>Nama Ibu Kandung</span>
                  <span className="text-stone-400 font-normal">(Opsional)</span>
                </label>
                <div className="text-[11px] text-stone-400 flex items-center space-x-1">
                  <HelpCircle className="w-3 h-3 text-amber-400" />
                  <span>Kaidah tradisi hisab falakiah menggabungkan nama diri dan nama ibu</span>
                </div>
              </div>
              <input
                id="mother-name-input"
                type="text"
                value={motherName}
                onChange={(e) => setMotherName(e.target.value)}
                placeholder="Nama ibu kandung (Contoh: Aminah / Maryam / Rahmah)"
                className="w-full px-3.5 py-2.5 bg-stone-950 border border-stone-800 rounded-lg text-stone-200 text-sm placeholder-stone-500 focus:outline-none focus:ring-1 focus:ring-amber-500/50"
              />
            </div>
          )}
        </div>

        {/* Preset Name Chips */}
        <div>
          <div className="text-xs text-stone-400 mb-2 flex items-center space-x-1.5">
            <span>Uji Coba Cepat dengan Contoh:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {PRESET_NAMES.map((preset, idx) => (
              <button
                key={idx}
                type="button"
                id={`preset-btn-${idx}`}
                onClick={() => handleSelectPreset(preset)}
                className="px-3 py-1.5 rounded-lg text-xs bg-stone-800/80 hover:bg-amber-900/40 text-stone-300 hover:text-amber-200 border border-stone-700/60 hover:border-amber-700/50 transition-all flex items-center space-x-1"
              >
                <span>{preset.label}</span>
                {preset.mother && <span className="text-[10px] text-amber-400/80">({preset.mother})</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Submit Action Button */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <button
            type="submit"
            id="calculate-btn"
            disabled={isLoading || !name.trim()}
            className="flex-1 sm:flex-initial px-8 py-3.5 bg-gradient-to-r from-amber-600 via-amber-700 to-emerald-800 hover:from-amber-500 hover:to-emerald-700 text-amber-50 font-semibold rounded-xl shadow-lg shadow-amber-950/50 border border-amber-500/40 flex items-center justify-center space-x-3 transition-all transform active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Calculator className="w-5 h-5 animate-spin text-amber-200" />
                <span>Menghitung Hisab Jummal &amp; Mencocokkan Permata...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5 text-amber-300" />
                <span className="tracking-wide">Analisis Kecocokan Batu Permata &amp; Peruntungan</span>
                <ArrowRight className="w-4 h-4 text-amber-200" />
              </>
            )}
          </button>

          {onOpenAbjadTable && (
            <button
              type="button"
              id="open-abjad-table-btn"
              onClick={onOpenAbjadTable}
              className="px-5 py-3.5 bg-stone-950/80 hover:bg-stone-800 text-amber-300 hover:text-amber-200 border border-amber-800/60 rounded-xl text-xs font-semibold flex items-center justify-center space-x-2 transition-all active:scale-95 shrink-0"
              title="Pelajari daftar 28 huruf hijaiyah, nilai Jummal Kabir & 4 unsur alam"
            >
              <Hash className="w-4 h-4 text-amber-400" />
              <span>Lihat Tabel Abjadiyah</span>
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

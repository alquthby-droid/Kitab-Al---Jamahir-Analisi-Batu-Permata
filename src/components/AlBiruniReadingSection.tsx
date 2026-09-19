import React, { useState } from 'react';
import { NumerologyAnalysis } from '../types';
import { Sparkles, Scroll, BookOpen, Quote, RefreshCw } from 'lucide-react';

interface AlBiruniReadingSectionProps {
  analysis: NumerologyAnalysis;
}

export const AlBiruniReadingSection: React.FC<AlBiruniReadingSectionProps> = ({ analysis }) => {
  const [reading, setReading] = useState<string | null>(analysis.classicalHikmahSummary);
  const [isLoading, setIsLoading] = useState(false);
  const [hasFetchedAi, setHasFetchedAi] = useState(false);

  const fetchScholarlyAiReading = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/ai-scholarly-reading', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: analysis.inputName,
          analysisData: analysis,
        }),
      });
      const data = await response.json();
      if (data.reading) {
        setReading(data.reading);
        setHasFetchedAi(true);
      }
    } catch (err) {
      console.error('Failed to get scholarly reading:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-stone-900 via-stone-900 to-amber-950/20 border border-amber-800/50 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-md">
      {/* Subtle manuscript watermark background */}
      <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none text-amber-200">
        <Scroll className="w-64 h-64" />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-amber-900/40">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-amber-950/80 border border-amber-600/50 flex items-center justify-center text-amber-400">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-['Cinzel'] font-bold text-amber-100">
              Syarah &amp; Fatwa Hikmah Al-Biruni
            </h3>
            <p className="text-xs text-stone-400">
              Tafsir mendalam kitab Al-Jamahir terhadap peruntungan nama <span className="text-amber-300 font-semibold">{analysis.inputName}</span>
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={fetchScholarlyAiReading}
          disabled={isLoading}
          className="px-4 py-2 bg-amber-800/40 hover:bg-amber-700/60 border border-amber-600/50 text-amber-200 rounded-xl text-xs font-semibold flex items-center space-x-2 transition-all disabled:opacity-50"
        >
          {isLoading ? (
            <>
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-amber-300" />
              <span>Mentahqiq Naskah Al-Jamahir...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>{hasFetchedAi ? 'Perbarui Syarah Mendalam' : 'Konsultasi Syarah Mendalam (Gemini AI)'}</span>
            </>
          )}
        </button>
      </div>

      {/* Manuscript Reading Content */}
      <div className="bg-stone-950/70 border border-amber-900/30 rounded-xl p-5 sm:p-6 relative">
        <Quote className="w-8 h-8 text-amber-600/20 absolute top-4 left-4 pointer-events-none" />

        <div className="text-stone-200 text-sm sm:text-base leading-relaxed space-y-4 font-serif relative z-10 pl-2">
          {reading ? (
            reading.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-stone-200 leading-relaxed">
                {paragraph}
              </p>
            ))
          ) : (
            <p className="text-stone-400 italic">Memuat analisis hikmah...</p>
          )}
        </div>

        <div className="mt-4 pt-4 border-t border-amber-950 flex flex-wrap items-center justify-between text-xs text-stone-400">
          <span className="font-['Amiri'] text-amber-400/90 text-sm">
            «مَنْ عَرَفَ خَواصَّ الْجَواهِرِ زَانَتْهُ الْحِكْمَةُ وَسَلِمَ مِنَ الْغُرُورِ»
          </span>
          <span className="italic text-stone-400">
            Disarikan dari naskah Tahqiq Kitāb al-Jamāhir fī Ma'rifat al-Jawāhir
          </span>
        </div>
      </div>
    </div>
  );
};

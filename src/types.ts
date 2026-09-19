export type ElementType = 'Api' | 'Tanah' | 'Udara' | 'Air';

export interface LetterCalculation {
  char: string;
  arabicChar: string;
  arabicName: string;
  value: number;
  element: ElementType;
}

export interface PlanetInfo {
  name: string;
  latinName: string;
  arabicName: string;
  symbol: string;
  day: string;
  element: ElementType;
  metal: string;
  characteristics: string;
}

export interface ZodiacBuruj {
  name: string;
  arabicName: string;
  latinName: string;
  element: ElementType;
  ruler: string;
  dates: string;
}

export interface Gemstone {
  id: string;
  arabicName: string;
  name: string;
  indonesianName: string;
  mineralName: string;
  color: string;
  accentHex: string;
  imageUrl: string;
  visualTone: string;
  opticalPhenomenon: string;
  specimenType: string;
  bgGradient: string;
  element: ElementType;
  planet: string;
  specificGravity: string; // Al-Biruni's precise gravimetric measurement
  modernSpecificGravity: string;
  hardnessMohs: string;
  alBiruniChapter: string;
  alBiruniQuote: string;
  therapeuticBenefits: string[];
  spiritualVirtues: string[];
  fortuneAspects: {
    rezeki: string;
    kewibawaan: string;
    kesehatan: string;
    ketenangan: string;
  };
  suitableMetals: string[];
  recommendedFinger: string;
  bestWearingDay: string;
  careAdvice: string;
}

export interface GemstoneFilter {
  element?: ElementType | 'Semua';
  searchQuery?: string;
}

export type SpiritualFocus = 'keseimbangan' | 'rezeki' | 'kewibawaan' | 'ketenangan' | 'perlindungan';

export interface QuranicVerseItem {
  focusKey: SpiritualFocus;
  focusTitle: string;
  surahName: string;
  surahNumber: number;
  ayahNumber: string;
  arabicText: string;
  transliteration: string;
  translation: string;
  hikmahResonance: string;
}

export interface QuranicPrayerSync {
  userName: string;
  primaryVerse: QuranicVerseItem;
  focusedVerses: Record<SpiritualFocus, QuranicVerseItem>;
  asmaulHusna: {
    arabic: string;
    latin: string;
    meaning: string;
    wiridCount: number;
    syncReason: string;
  };
  wearingPrayer: {
    title: string;
    arabic: string;
    transliteration: string;
    translation: string;
    sourceTradition: string;
  };
  istighfarAndSalawat: {
    salawatArabic: string;
    salawatLatin: string;
    salawatMeaning: string;
    wiridRecommendation: string;
  };
  wirdSchedule: string;
}

export interface NumerologyAnalysis {
  inputName: string;
  motherName?: string;
  isArabicInput: boolean;
  transliteratedArabic: string;
  letterBreakdown: LetterCalculation[];
  totalJummalKabir: number;
  jummalShaghir: number;
  elementScores: {
    Api: number;
    Tanah: number;
    Udara: number;
    Air: number;
  };
  dominantElement: ElementType;
  secondaryElement: ElementType;
  dominantPlanet: PlanetInfo;
  zodiacBuruj: ZodiacBuruj;
  primaryGem: Gemstone;
  secondaryGem: Gemstone;
  incompatibleGem: Gemstone;
  recommendedMetal: string;
  recommendedHandFinger: string;
  bestDayAndHour: string;
  fortuneScores: {
    rezeki: number;       // 0-100
    kewibawaan: number;   // 0-100
    ketentraman: number;  // 0-100
    perlindungan: number; // 0-100
    kesehatan: number;    // 0-100
  };
  classicalHikmahSummary: string;
  quranicSync: QuranicPrayerSync;
  aiDeepReading?: string;
}

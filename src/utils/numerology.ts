import { ElementType, Gemstone, LetterCalculation, NumerologyAnalysis, PlanetInfo, ZodiacBuruj } from '../types';
import { GEMSTONES_CATALOG, PLANETS_REFERENCE, ZODIAC_BURUJ_LIST } from '../data/gemstonesData';
import { generateQuranicPrayerSync } from './quranicSync';

// Classical Abjad Table (Hisab al-Jummal al-Kabir)
interface ArabicLetterDef {
  char: string;
  name: string;
  value: number;
  element: ElementType;
}

export const ARABIC_LETTERS: Record<string, ArabicLetterDef> = {
  'ا': { char: 'ا', name: 'Alif', value: 1, element: 'Api' },
  'أ': { char: 'أ', name: 'Alif Hamzah', value: 1, element: 'Api' },
  'إ': { char: 'إ', name: 'Alif Kasrah', value: 1, element: 'Api' },
  'آ': { char: 'آ', name: 'Alif Maddah', value: 1, element: 'Api' },
  'ء': { char: 'ء', name: 'Hamzah', value: 1, element: 'Api' },
  'ب': { char: 'ب', name: 'Ba', value: 2, element: 'Tanah' },
  'ج': { char: 'ج', name: 'Jim', value: 3, element: 'Udara' },
  'د': { char: 'د', name: 'Dal', value: 4, element: 'Air' },
  'ه': { char: 'ه', name: 'Ha', value: 5, element: 'Api' },
  'ة': { char: 'ة', name: 'Ta Marbuthah', value: 400, element: 'Tanah' },
  'و': { char: 'و', name: 'Waw', value: 6, element: 'Tanah' },
  'ز': { char: 'ز', name: 'Zay', value: 7, element: 'Udara' },
  'ح': { char: 'ح', name: 'Ha (Ḥā’)', value: 8, element: 'Air' },
  'ط': { char: 'ط', name: 'Tha (Ṭā’)', value: 9, element: 'Api' },
  'ي': { char: 'ي', name: 'Ya', value: 10, element: 'Tanah' },
  'ى': { char: 'ى', name: 'Alif Maqshurah', value: 10, element: 'Tanah' },
  'ك': { char: 'ك', name: 'Kaf', value: 20, element: 'Udara' },
  'ل': { char: 'ل', name: 'Lam', value: 30, element: 'Air' },
  'م': { char: 'م', name: 'Mim', value: 40, element: 'Api' },
  'ن': { char: 'ن', name: 'Nun', value: 50, element: 'Tanah' },
  'س': { char: 'س', name: 'Sin', value: 60, element: 'Udara' },
  'ع': { char: 'ع', name: '‘Ain', value: 70, element: 'Air' },
  'ف': { char: 'ف', name: 'Fa', value: 80, element: 'Api' },
  'ص': { char: 'ص', name: 'Sad (Ṣād)', value: 90, element: 'Tanah' },
  'ق': { char: 'ق', name: 'Qaf', value: 100, element: 'Udara' },
  'ر': { char: 'ر', name: 'Ra', value: 200, element: 'Air' },
  'ش': { char: 'ش', name: 'Syin (Syīn)', value: 300, element: 'Api' },
  'ت': { char: 'ت', name: 'Ta', value: 400, element: 'Tanah' },
  'ث': { char: 'ث', name: 'Tsa (Tsā’)', value: 500, element: 'Udara' },
  'خ': { char: 'خ', name: 'Kha (Khā’)', value: 600, element: 'Air' },
  'ذ': { char: 'ذ', name: 'Dzal (Dhāl)', value: 700, element: 'Api' },
  'ض': { char: 'ض', name: 'Dhad (Ḍād)', value: 800, element: 'Tanah' },
  'ظ': { char: 'ظ', name: 'Zha (Ẓā’)', value: 900, element: 'Udara' },
  'غ': { char: 'غ', name: 'Ghain', value: 1000, element: 'Air' },
};

// Check if string contains Arabic characters
export function isArabicText(text: string): boolean {
  return /[\u0600-\u06FF]/.test(text);
}

// Convert Latin names into Arabic Abjad representation with compound sounds
export function transliterateLatinToAbjad(latin: string): { transliterated: string; breakdown: LetterCalculation[] } {
  const clean = latin.toLowerCase().trim();
  const breakdown: LetterCalculation[] = [];
  let arabicStr = '';

  let i = 0;
  while (i < clean.length) {
    const char = clean[i];
    const nextChar = i + 1 < clean.length ? clean[i + 1] : '';
    const twoChars = (char + nextChar).toLowerCase();

    // Check two-character digraphs first
    if (twoChars === 'kh') {
      breakdown.push({ char: 'kh', arabicChar: 'خ', arabicName: 'Kha (Khā’)', value: 600, element: 'Air' });
      arabicStr += 'خ';
      i += 2;
      continue;
    }
    if (twoChars === 'sy' || twoChars === 'sh') {
      breakdown.push({ char: twoChars, arabicChar: 'ش', arabicName: 'Syin (Syīn)', value: 300, element: 'Api' });
      arabicStr += 'ش';
      i += 2;
      continue;
    }
    if (twoChars === 'dz' || twoChars === 'dh') {
      breakdown.push({ char: twoChars, arabicChar: 'ذ', arabicName: 'Dzal (Dhāl)', value: 700, element: 'Api' });
      arabicStr += 'ذ';
      i += 2;
      continue;
    }
    if (twoChars === 'th' || twoChars === 'ts') {
      breakdown.push({ char: twoChars, arabicChar: 'ث', arabicName: 'Tsa (Tsā’)', value: 500, element: 'Udara' });
      arabicStr += 'ث';
      i += 2;
      continue;
    }
    if (twoChars === 'gh') {
      breakdown.push({ char: 'gh', arabicChar: 'غ', arabicName: 'Ghain', value: 1000, element: 'Air' });
      arabicStr += 'غ';
      i += 2;
      continue;
    }
    if (twoChars === 'ng') {
      breakdown.push({ char: 'n', arabicChar: 'ن', arabicName: 'Nun', value: 50, element: 'Tanah' });
      breakdown.push({ char: 'g', arabicChar: 'غ', arabicName: 'Ghain', value: 1000, element: 'Air' });
      arabicStr += 'نغ';
      i += 2;
      continue;
    }
    if (twoChars === 'ny') {
      breakdown.push({ char: 'n', arabicChar: 'ن', arabicName: 'Nun', value: 50, element: 'Tanah' });
      breakdown.push({ char: 'y', arabicChar: 'ي', arabicName: 'Ya', value: 10, element: 'Tanah' });
      arabicStr += 'ني';
      i += 2;
      continue;
    }

    // Single characters
    switch (char) {
      case 'a':
        breakdown.push({ char: 'a', arabicChar: 'ا', arabicName: 'Alif', value: 1, element: 'Api' });
        arabicStr += 'ا';
        break;
      case 'b':
        breakdown.push({ char: 'b', arabicChar: 'ب', arabicName: 'Ba', value: 2, element: 'Tanah' });
        arabicStr += 'ب';
        break;
      case 'c':
        breakdown.push({ char: 'c', arabicChar: 'ج', arabicName: 'Jim', value: 3, element: 'Udara' });
        arabicStr += 'ج';
        break;
      case 'd':
        breakdown.push({ char: 'd', arabicChar: 'د', arabicName: 'Dal', value: 4, element: 'Air' });
        arabicStr += 'د';
        break;
      case 'e':
        breakdown.push({ char: 'e', arabicChar: 'ي', arabicName: 'Ya', value: 10, element: 'Tanah' });
        arabicStr += 'ي';
        break;
      case 'f':
        breakdown.push({ char: 'f', arabicChar: 'ف', arabicName: 'Fa', value: 80, element: 'Api' });
        arabicStr += 'ف';
        break;
      case 'g':
        breakdown.push({ char: 'g', arabicChar: 'ج', arabicName: 'Jim', value: 3, element: 'Udara' });
        arabicStr += 'ج';
        break;
      case 'h':
        breakdown.push({ char: 'h', arabicChar: 'ه', arabicName: 'Ha', value: 5, element: 'Api' });
        arabicStr += 'ه';
        break;
      case 'i':
        breakdown.push({ char: 'i', arabicChar: 'ي', arabicName: 'Ya', value: 10, element: 'Tanah' });
        arabicStr += 'ي';
        break;
      case 'j':
        breakdown.push({ char: 'j', arabicChar: 'ج', arabicName: 'Jim', value: 3, element: 'Udara' });
        arabicStr += 'ج';
        break;
      case 'k':
        breakdown.push({ char: 'k', arabicChar: 'ك', arabicName: 'Kaf', value: 20, element: 'Udara' });
        arabicStr += 'ك';
        break;
      case 'l':
        breakdown.push({ char: 'l', arabicChar: 'ل', arabicName: 'Lam', value: 30, element: 'Air' });
        arabicStr += 'ل';
        break;
      case 'm':
        breakdown.push({ char: 'm', arabicChar: 'م', arabicName: 'Mim', value: 40, element: 'Api' });
        arabicStr += 'م';
        break;
      case 'n':
        breakdown.push({ char: 'n', arabicChar: 'ن', arabicName: 'Nun', value: 50, element: 'Tanah' });
        arabicStr += 'ن';
        break;
      case 'o':
        breakdown.push({ char: 'o', arabicChar: 'و', arabicName: 'Waw', value: 6, element: 'Tanah' });
        arabicStr += 'و';
        break;
      case 'p':
        breakdown.push({ char: 'p', arabicChar: 'ف', arabicName: 'Fa', value: 80, element: 'Api' });
        arabicStr += 'ف';
        break;
      case 'q':
        breakdown.push({ char: 'q', arabicChar: 'ق', arabicName: 'Qaf', value: 100, element: 'Udara' });
        arabicStr += 'ق';
        break;
      case 'r':
        breakdown.push({ char: 'r', arabicChar: 'ر', arabicName: 'Ra', value: 200, element: 'Air' });
        arabicStr += 'ر';
        break;
      case 's':
        breakdown.push({ char: 's', arabicChar: 'س', arabicName: 'Sin', value: 60, element: 'Udara' });
        arabicStr += 'س';
        break;
      case 't':
        breakdown.push({ char: 't', arabicChar: 'ت', arabicName: 'Ta', value: 400, element: 'Tanah' });
        arabicStr += 'ت';
        break;
      case 'u':
        breakdown.push({ char: 'u', arabicChar: 'و', arabicName: 'Waw', value: 6, element: 'Tanah' });
        arabicStr += 'و';
        break;
      case 'v':
        breakdown.push({ char: 'v', arabicChar: 'ف', arabicName: 'Fa', value: 80, element: 'Api' });
        arabicStr += 'ف';
        break;
      case 'w':
        breakdown.push({ char: 'w', arabicChar: 'و', arabicName: 'Waw', value: 6, element: 'Tanah' });
        arabicStr += 'و';
        break;
      case 'x':
        breakdown.push({ char: 'x', arabicChar: 'ك', arabicName: 'Kaf+Sin', value: 80, element: 'Udara' });
        arabicStr += 'كس';
        break;
      case 'y':
        breakdown.push({ char: 'y', arabicChar: 'ي', arabicName: 'Ya', value: 10, element: 'Tanah' });
        arabicStr += 'ي';
        break;
      case 'z':
        breakdown.push({ char: 'z', arabicChar: 'ز', arabicName: 'Zay', value: 7, element: 'Udara' });
        arabicStr += 'ز';
        break;
      default:
        // Ignore spaces and punctuation in Abjad hisab
        break;
    }
    i++;
  }

  return { transliterated: arabicStr, breakdown };
}

// Parse direct Arabic text
export function parseArabicAbjad(arabic: string): { transliterated: string; breakdown: LetterCalculation[] } {
  // Strip diacritics / tashkeel
  const clean = arabic.replace(/[\u064B-\u065F\u0670]/g, '').trim();
  const breakdown: LetterCalculation[] = [];
  let arabicStr = '';

  for (const char of clean) {
    if (ARABIC_LETTERS[char]) {
      const def = ARABIC_LETTERS[char];
      breakdown.push({
        char,
        arabicChar: def.char,
        arabicName: def.name,
        value: def.value,
        element: def.element
      });
      arabicStr += def.char;
    }
  }

  return { transliterated: arabicStr, breakdown };
}

// Calculate Digit Root (Jummal Shaghir) 1-9
export function calculateJummalShaghir(value: number): number {
  if (value <= 0) return 1;
  return ((value - 1) % 9) + 1;
}

// Main Numerology & Gemstone Compatibility Engine
export function analyzeNameGemstoneSuitability(
  name: string,
  motherName?: string
): NumerologyAnalysis {
  const isArabic = isArabicText(name);
  const primaryResult = isArabic ? parseArabicAbjad(name) : transliterateLatinToAbjad(name);

  let totalJummalKabir = primaryResult.breakdown.reduce((sum, item) => sum + item.value, 0);

  // If mother's name is supplied (classical Hisab method: Ism al-Syakhsh + Ism al-Umm)
  if (motherName && motherName.trim().length > 0) {
    const isMotherArabic = isArabicText(motherName);
    const motherResult = isMotherArabic
      ? parseArabicAbjad(motherName)
      : transliterateLatinToAbjad(motherName);
    const motherValue = motherResult.breakdown.reduce((sum, item) => sum + item.value, 0);
    totalJummalKabir += motherValue;
  }

  // If for any edge case value is 0 (e.g. invalid symbols), give default
  if (totalJummalKabir === 0) {
    totalJummalKabir = 110; // Default baseline
  }

  const jummalShaghir = calculateJummalShaghir(totalJummalKabir);

  // Calculate Element scores from letters
  const elementScores = {
    Api: 0,
    Tanah: 0,
    Udara: 0,
    Air: 0,
  };

  primaryResult.breakdown.forEach((item) => {
    elementScores[item.element] += item.value;
  });

  // Calculate classical modulo 4 for element confirmation
  const mod4 = totalJummalKabir % 4;
  let moduloElement: ElementType = 'Air';
  if (mod4 === 1) moduloElement = 'Api';
  else if (mod4 === 2) moduloElement = 'Tanah';
  else if (mod4 === 3) moduloElement = 'Udara';
  else moduloElement = 'Air';

  // Determine dominant element
  // Balance between letter weights and the classic total modulo
  elementScores[moduloElement] += Math.round(totalJummalKabir * 0.2);

  const sortedElements = (Object.keys(elementScores) as ElementType[]).sort(
    (a, b) => elementScores[b] - elementScores[a]
  );
  const dominantElement = sortedElements[0];
  const secondaryElement = sortedElements[1];

  // Modulo 7 for Celestial Body (Planet / Kawkab)
  const planetKeys = ['Syams', 'Qamar', 'Mirrikh', 'Utarid', 'Musytari', 'Zuhrah', 'Zuhal'];
  const mod7 = totalJummalKabir % 7;
  const planetKey = planetKeys[mod7];
  const dominantPlanet = PLANETS_REFERENCE[planetKey] || PLANETS_REFERENCE['Syams'];

  // Modulo 12 for Zodiac Buruj
  const mod12 = totalJummalKabir % 12;
  const zodiacBuruj = ZODIAC_BURUJ_LIST[mod12];

  // Select Primary Gemstone based on dominant element & planet correspondence
  const matchingGems = GEMSTONES_CATALOG.filter((gem) => {
    return gem.element === dominantElement || gem.planet.includes(dominantPlanet.name);
  });

  // Prioritize primary gem
  let primaryGem: Gemstone;
  if (matchingGems.length > 0) {
    primaryGem = matchingGems[totalJummalKabir % matchingGems.length];
  } else {
    primaryGem = GEMSTONES_CATALOG[0];
  }

  // Select Secondary Companion Gem (harmonious element: Api <-> Udara, Tanah <-> Air)
  const harmoniousElement: ElementType =
    dominantElement === 'Api' ? 'Udara' :
    dominantElement === 'Udara' ? 'Api' :
    dominantElement === 'Tanah' ? 'Air' : 'Tanah';

  const secondaryGems = GEMSTONES_CATALOG.filter(
    (gem) => gem.id !== primaryGem.id && gem.element === harmoniousElement
  );
  const secondaryGem = secondaryGems.length > 0
    ? secondaryGems[(totalJummalKabir + 3) % secondaryGems.length]
    : GEMSTONES_CATALOG.find((g) => g.id !== primaryGem.id) || GEMSTONES_CATALOG[1];

  // Select Incompatible Gemstone (Element clashes e.g., Extreme Fire vs Extreme Cold or Saturn vs Sun clash)
  const conflictingElement: ElementType =
    dominantElement === 'Api' ? 'Air' :
    dominantElement === 'Air' ? 'Api' :
    dominantElement === 'Tanah' ? 'Udara' : 'Tanah';

  const incompatibleGems = GEMSTONES_CATALOG.filter(
    (gem) => gem.id !== primaryGem.id && gem.id !== secondaryGem.id && gem.element === conflictingElement
  );
  const incompatibleGem = incompatibleGems.length > 0
    ? incompatibleGems[(totalJummalKabir + 1) % incompatibleGems.length]
    : GEMSTONES_CATALOG[GEMSTONES_CATALOG.length - 1];

  // Metal recommendation based on planet & Sunnah
  let recommendedMetal = dominantPlanet.metal;
  if (!recommendedMetal.includes('Perak')) {
    recommendedMetal = `Perak Murni (Dianjurkan Sunnah) atau ${dominantPlanet.metal}`;
  }

  // Hand & Finger placement based on Al-Biruni's gemological etiquette & Hadith
  let recommendedHandFinger = primaryGem.recommendedFinger;
  if (!recommendedHandFinger.includes('Tangan')) {
    recommendedHandFinger += ' Tangan Kanan';
  }

  // Best Day & Hour (Sa'ah al-Falakiyyah)
  const bestDayAndHour = `${dominantPlanet.day}, saat waktu fajar terbit (Sa'ah al-Ula) atau saat matahari melintas di zenit.`;

  // Deterministic Fortune Scores based on Jummal Shaghir & Element Balance
  const seed = (totalJummalKabir % 30) + 70; // Range 70-99
  const rezeki = Math.min(98, Math.max(72, ((seed * 13 + jummalShaghir * 7) % 27) + 72));
  const kewibawaan = Math.min(99, Math.max(70, ((seed * 17 + totalJummalKabir) % 29) + 71));
  const ketentraman = Math.min(97, Math.max(73, ((seed * 19 + jummalShaghir * 3) % 25) + 74));
  const perlindungan = Math.min(99, Math.max(75, ((seed * 23 + totalJummalKabir * 2) % 24) + 76));
  const kesehatan = Math.min(96, Math.max(71, ((seed * 29 + jummalShaghir * 9) % 26) + 72));

  // Classical Hikmah summary referencing Al-Biruni's Kitab Al-Jamahir
  const classicalHikmahSummary = `Berdasarkan hisab huruf al-Jummal al-Kabir, nama ini berakar pada energi unsur ${dominantElement} di bawah pengaruh naungan falak ${dominantPlanet.arabicName}. Sebagaimana dirumuskan Al-Biruni dalam Kitāb al-Jamāhir, getaran mineral ${primaryGem.indonesianName} memiliki keselarasan berat jenis (${primaryGem.specificGravity}) dan energi pendingin/penghangat yang menyempurnakan kelemahan unsur raga, memantapkan haibah (kewibawaan), dan membentengi keselamatan rezeki.`;

  // Automatic Quranic & Prayer Synchronization based on user's name & matched gemstone
  const quranicSync = generateQuranicPrayerSync(
    name,
    totalJummalKabir,
    jummalShaghir,
    dominantElement,
    dominantPlanet,
    primaryGem
  );

  return {
    inputName: name,
    motherName,
    isArabicInput: isArabic,
    transliteratedArabic: primaryResult.transliterated,
    letterBreakdown: primaryResult.breakdown,
    totalJummalKabir,
    jummalShaghir,
    elementScores,
    dominantElement,
    secondaryElement,
    dominantPlanet,
    zodiacBuruj,
    primaryGem,
    secondaryGem,
    incompatibleGem,
    recommendedMetal,
    recommendedHandFinger,
    bestDayAndHour,
    fortuneScores: {
      rezeki,
      kewibawaan,
      ketentraman,
      perlindungan,
      kesehatan,
    },
    classicalHikmahSummary,
    quranicSync,
  };
}

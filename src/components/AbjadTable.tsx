import React, { useState, useMemo } from 'react';
import { ElementType } from '../types';
import { isArabicText, transliterateLatinToAbjad, parseArabicAbjad } from '../utils/numerology';
import {
  Hash,
  Search,
  Sparkles,
  Flame,
  Droplets,
  Wind,
  Mountain,
  BookOpen,
  Calculator,
  Layers,
  Copy,
  Check,
  RotateCcw,
  Info,
  Compass
} from 'lucide-react';

export interface AbjadLetterRecord {
  order: number;
  char: string;
  nameLatin: string;
  nameArabic: string;
  mnemonicGroup: string;
  mnemonicArabic: string;
  valueKabir: number;
  valueShaghir: number;
  element: ElementType;
  maratib: 'Satuan (Āḥād)' | 'Puluhan (‘Asyarāt)' | 'Ratusan (Mi’āt)' | 'Ribuan (Ulūf)';
  makhraj: string;
  hikmah: string;
}

export const COMPLETE_ABJAD_DATA: AbjadLetterRecord[] = [
  // 1. أَبْجَدْ (Abjad)
  {
    order: 1,
    char: 'ا',
    nameLatin: 'Alif',
    nameArabic: 'أَلِف',
    mnemonicGroup: 'Abjad',
    mnemonicArabic: 'أَبْجَدْ',
    valueKabir: 1,
    valueShaghir: 1,
    element: 'Api',
    maratib: 'Satuan (Āḥād)',
    makhraj: 'Al-Jauf (Rongga Mulut & Tenggorokan)',
    hikmah: 'Simbol keesaan mutlak (Tauhid), permulaan wujud, kepemimpinan dan keteguhan tekad.',
  },
  {
    order: 2,
    char: 'ب',
    nameLatin: 'Ba',
    nameArabic: 'بَاء',
    mnemonicGroup: 'Abjad',
    mnemonicArabic: 'أَبْجَدْ',
    valueKabir: 2,
    valueShaghir: 2,
    element: 'Tanah',
    maratib: 'Satuan (Āḥād)',
    makhraj: 'Asy-Syafatain (Kedua Bibir Merapat)',
    hikmah: 'Pintu gerbang ilmu (Bismillah), wadah penciptaan, fondasi amanah dan ketabahan raga.',
  },
  {
    order: 3,
    char: 'ج',
    nameLatin: 'Jim',
    nameArabic: 'جِيم',
    mnemonicGroup: 'Abjad',
    mnemonicArabic: 'أَبْجَدْ',
    valueKabir: 3,
    valueShaghir: 3,
    element: 'Udara',
    maratib: 'Satuan (Āḥād)',
    makhraj: 'Wasath al-Lisan (Tengah Lidah)',
    hikmah: 'Keindahan (Jamal), kelapangan hati, daya cipta, serta keharmonisan dalam bersosialisasi.',
  },
  {
    order: 4,
    char: 'د',
    nameLatin: 'Dal',
    nameArabic: 'دَال',
    mnemonicGroup: 'Abjad',
    mnemonicArabic: 'أَبْجَدْ',
    valueKabir: 4,
    valueShaghir: 4,
    element: 'Air',
    maratib: 'Satuan (Āḥād)',
    makhraj: 'Tharaf al-Lisan (Ujung Lidah & Pangkal Gigi Seri Atas)',
    hikmah: 'Petunjuk (Dalil/Hidayah), kerendahan hati, sifat mengalir, dan ketenangan batin penyejuk.',
  },

  // 2. هَوَّزْ (Hawwaz)
  {
    order: 5,
    char: 'ه',
    nameLatin: 'Ha',
    nameArabic: 'هَاء',
    mnemonicGroup: 'Hawwaz',
    mnemonicArabic: 'هَوَّزْ',
    valueKabir: 5,
    valueShaghir: 5,
    element: 'Api',
    maratib: 'Satuan (Āḥād)',
    makhraj: 'Aqsha al-Halq (Pangkal Tenggorokan)',
    hikmah: 'Daya hidup (Huwiyyah), pernapasan kesadaran Ilahi, kehangatan jiwa dan energi pemurni.',
  },
  {
    order: 6,
    char: 'و',
    nameLatin: 'Waw',
    nameArabic: 'وَاو',
    mnemonicGroup: 'Hawwaz',
    mnemonicArabic: 'هَوَّزْ',
    valueKabir: 6,
    valueShaghir: 6,
    element: 'Tanah',
    maratib: 'Satuan (Āḥād)',
    makhraj: 'Asy-Syafatain (Kedua Bibir Membulat)',
    hikmah: 'Tali penghubung (Washl), cinta kasih (Wuddu), kesetiaan ikatan, dan stabilitas rezeki.',
  },
  {
    order: 7,
    char: 'ز',
    nameLatin: 'Zay',
    nameArabic: 'زَاي',
    mnemonicGroup: 'Hawwaz',
    mnemonicArabic: 'هَوَّزْ',
    valueKabir: 7,
    valueShaghir: 7,
    element: 'Udara',
    maratib: 'Satuan (Āḥād)',
    makhraj: 'Ujung Lidah & Di atas Gigi Seri Bawah',
    hikmah: 'Perhiasan (Zinah), kecerdasan tajam, keluwesan gerak, dan kejernihan intuisi pikiran.',
  },

  // 3. حُطِّي (Hutthi)
  {
    order: 8,
    char: 'ح',
    nameLatin: 'Ha (Ḥā’)',
    nameArabic: 'حَاء',
    mnemonicGroup: 'Hutthi',
    mnemonicArabic: 'حُطِّي',
    valueKabir: 8,
    valueShaghir: 8,
    element: 'Air',
    maratib: 'Satuan (Āḥād)',
    makhraj: 'Wasath al-Halq (Tengah Tenggorokan)',
    hikmah: 'Kehidupan (Hayah), kearifan hikmah, kelembutan penyembuhan, dan kejernihan air nurani.',
  },
  {
    order: 9,
    char: 'ط',
    nameLatin: 'Tha (Ṭā’)',
    nameArabic: 'طَاء',
    mnemonicGroup: 'Hutthi',
    mnemonicArabic: 'حُطِّي',
    valueKabir: 9,
    valueShaghir: 9,
    element: 'Api',
    maratib: 'Satuan (Āḥād)',
    makhraj: 'Ujung Lidah & Pangkal Gigi Seri Atas (Ithbaq)',
    hikmah: 'Kesucian (Thaharah), puncak kekuatan angka tunggal, perlindungan dan kewibawaan tinggi.',
  },
  {
    order: 10,
    char: 'ي',
    nameLatin: 'Ya',
    nameArabic: 'يَاء',
    mnemonicGroup: 'Hutthi',
    mnemonicArabic: 'حُطِّي',
    valueKabir: 10,
    valueShaghir: 1, // 1+0
    element: 'Tanah',
    maratib: 'Puluhan (‘Asyarāt)',
    makhraj: 'Wasath al-Lisan (Tengah Lidah)',
    hikmah: 'Kepastian (Yaqin), kemandirian tangan pencari nafkah, keteguhan meniti jalan kebenaran.',
  },

  // 4. كَلَمَنْ (Kaliman)
  {
    order: 11,
    char: 'ك',
    nameLatin: 'Kaf',
    nameArabic: 'كَاف',
    mnemonicGroup: 'Kaliman',
    mnemonicArabic: 'كَلَمَنْ',
    valueKabir: 20,
    valueShaghir: 2, // 2+0
    element: 'Udara',
    maratib: 'Puluhan (‘Asyarāt)',
    makhraj: 'Pangkal Lidah Bawah Pangkal Tenggorokan',
    hikmah: 'Kesempurnaan (Kamal), kata penentu (Kun), kemampuan diplomasi dan kecakapan berucap.',
  },
  {
    order: 12,
    char: 'ل',
    nameLatin: 'Lam',
    nameArabic: 'لَام',
    mnemonicGroup: 'Kaliman',
    mnemonicArabic: 'كَلَمَنْ',
    valueKabir: 30,
    valueShaghir: 3, // 3+0
    element: 'Air',
    maratib: 'Puluhan (‘Asyarāt)',
    makhraj: 'Tepi Lidah Depan Hingga Ujung',
    hikmah: 'Kelembutan kasih (Luthf), keluwesan pergaulan, kedermawanan dan penyerap kesedihan.',
  },
  {
    order: 13,
    char: 'م',
    nameLatin: 'Mim',
    nameArabic: 'مِيم',
    mnemonicGroup: 'Kaliman',
    mnemonicArabic: 'كَلَمَنْ',
    valueKabir: 40,
    valueShaghir: 4, // 4+0
    element: 'Api',
    maratib: 'Puluhan (‘Asyarāt)',
    makhraj: 'Asy-Syafatain (Kedua Bibir)',
    hikmah: 'Kemuliaan (Majd), rahasia Muhammadiah, kedewasaan rohani dan gelora pengabdian.',
  },
  {
    order: 14,
    char: 'ن',
    nameLatin: 'Nun',
    nameArabic: 'نُون',
    mnemonicGroup: 'Kaliman',
    mnemonicArabic: 'كَلَمَنْ',
    valueKabir: 50,
    valueShaghir: 5, // 5+0
    element: 'Tanah',
    maratib: 'Puluhan (‘Asyarāt)',
    makhraj: 'Ujung Lidah Di Bawah Makhraj Lam',
    hikmah: 'Cahaya penembus (Nur), tinta qalam semesta, keteguhan prinsip dan penjaga rahasia.',
  },

  // 5. سَعْفَصْ (Sa'fas)
  {
    order: 15,
    char: 'س',
    nameLatin: 'Sin',
    nameArabic: 'سِين',
    mnemonicGroup: 'Sa’fas',
    mnemonicArabic: 'سَعْفَصْ',
    valueKabir: 60,
    valueShaghir: 6, // 6+0
    element: 'Udara',
    maratib: 'Puluhan (‘Asyarāt)',
    makhraj: 'Ujung Lidah & Di atas Gigi Seri Bawah (Shafir)',
    hikmah: 'Kedamaian (Salam), rahasia batin (Sirr), kecepatan tanggap dan ketenangan di tengah badai.',
  },
  {
    order: 16,
    char: 'ع',
    nameLatin: '‘Ain',
    nameArabic: 'عَيْن',
    mnemonicGroup: 'Sa’fas',
    mnemonicArabic: 'سَعْفَصْ',
    valueKabir: 70,
    valueShaghir: 7, // 7+0
    element: 'Air',
    maratib: 'Puluhan (‘Asyarāt)',
    makhraj: 'Wasath al-Halq (Tengah Tenggorokan)',
    hikmah: 'Mata air ilmu (‘Ilm/‘Ayn), penglihatan batin (Bashirah), kelapangan memaafkan sesama.',
  },
  {
    order: 17,
    char: 'ف',
    nameLatin: 'Fa',
    nameArabic: 'فَاء',
    mnemonicGroup: 'Sa’fas',
    mnemonicArabic: 'سَعْفَصْ',
    valueKabir: 80,
    valueShaghir: 8, // 8+0
    element: 'Api',
    maratib: 'Puluhan (‘Asyarāt)',
    makhraj: 'Bibir Bawah Bagian Dalam & Ujung Gigi Seri Atas',
    hikmah: 'Kemenangan pembuka (Fath), kefasihan lisan (Fashahah), ketangkasan meraih peluang.',
  },
  {
    order: 18,
    char: 'ص',
    nameLatin: 'Sad (Ṣād)',
    nameArabic: 'صَاد',
    mnemonicGroup: 'Sa’fas',
    mnemonicArabic: 'سَعْفَصْ',
    valueKabir: 90,
    valueShaghir: 9, // 9+0
    element: 'Tanah',
    maratib: 'Puluhan (‘Asyarāt)',
    makhraj: 'Ujung Lidah & Di atas Gigi Seri Bawah (Ithbaq)',
    hikmah: 'Kesabaran baja (Shabr), ketulusan niat (Shidq), kejujuran murni dan ketahanan jiwa.',
  },

  // 6. قَرَشَتْ (Qarasyat)
  {
    order: 19,
    char: 'ق',
    nameLatin: 'Qaf',
    nameArabic: 'قَاف',
    mnemonicGroup: 'Qarasyat',
    mnemonicArabic: 'قَرَشَتْ',
    valueKabir: 100,
    valueShaghir: 1, // 1+0+0
    element: 'Udara',
    maratib: 'Ratusan (Mi’āt)',
    makhraj: 'Pangkal Lidah Paling Belakang Dekat Anak Tekak',
    hikmah: 'Kekuatan daya cipta (Qudrah), kedekatan (Qurb), keteguhan laksana gunung pembenteng.',
  },
  {
    order: 20,
    char: 'ر',
    nameLatin: 'Ra',
    nameArabic: 'رَاء',
    mnemonicGroup: 'Qarasyat',
    mnemonicArabic: 'قَرَشَتْ',
    valueKabir: 200,
    valueShaghir: 2, // 2+0+0
    element: 'Air',
    maratib: 'Ratusan (Mi’āt)',
    makhraj: 'Ujung Lidah Dekat Punggungnya (Takrir Terkontrol)',
    hikmah: 'Kasih sayang melimpah (Rahmah), keluhuran derajat (Rif’ah), dan kelapangan rezeki rezeki.',
  },
  {
    order: 21,
    char: 'ش',
    nameLatin: 'Syin (Syīn)',
    nameArabic: 'شِين',
    mnemonicGroup: 'Qarasyat',
    mnemonicArabic: 'قَرَشَتْ',
    valueKabir: 300,
    valueShaghir: 3, // 3+0+0
    element: 'Api',
    maratib: 'Ratusan (Mi’āt)',
    makhraj: 'Wasath al-Lisan (Tengah Lidah / Tafasysyi)',
    hikmah: 'Rasa syukur (Syukr), pancaran sinar kemuliaan (Syams), dan keberanian membela kebenaran.',
  },
  {
    order: 22,
    char: 'ت',
    nameLatin: 'Ta',
    nameArabic: 'تَاء',
    mnemonicGroup: 'Qarasyat',
    mnemonicArabic: 'قَرَشَتْ',
    valueKabir: 400,
    valueShaghir: 4, // 4+0+0
    element: 'Tanah',
    maratib: 'Ratusan (Mi’āt)',
    makhraj: 'Ujung Lidah & Pangkal Gigi Seri Atas (Hams)',
    hikmah: 'Ketakwaan (Taqwa), tobat penyucian diri, kehati-hatian cermat, dan ketaatan ibadah.',
  },

  // 7. ثَخَّذْ (Tsakhadz)
  {
    order: 23,
    char: 'ث',
    nameLatin: 'Tsa (Tsā’)',
    nameArabic: 'ثَاء',
    mnemonicGroup: 'Tsakhadz',
    mnemonicArabic: 'ثَخَّذْ',
    valueKabir: 500,
    valueShaghir: 5, // 5+0+0
    element: 'Udara',
    maratib: 'Ratusan (Mi’āt)',
    makhraj: 'Ujung Lidah Bertemu Ujung Gigi Seri Atas',
    hikmah: 'Keteguhan pendirian (Tsabat), pahala kebajikan (Tsawab), kekayaan ilmu dan kedermawanan.',
  },
  {
    order: 24,
    char: 'خ',
    nameLatin: 'Kha (Khā’)',
    nameArabic: 'خَاء',
    mnemonicGroup: 'Tsakhadz',
    mnemonicArabic: 'ثَخَّذْ',
    valueKabir: 600,
    valueShaghir: 6, // 6+0+0
    element: 'Air',
    maratib: 'Ratusan (Mi’āt)',
    makhraj: 'Adna al-Halq (Tenggorokan Terluar Dekat Lidah)',
    hikmah: 'Kebaikan sejati (Khayr), rasa khusyuk tawadhu, kebersihan batin dan kewaspadaan nafsu.',
  },
  {
    order: 25,
    char: 'ذ',
    nameLatin: 'Dzal (Dhāl)',
    nameArabic: 'ذَال',
    mnemonicGroup: 'Tsakhadz',
    mnemonicArabic: 'ثَخَّذْ',
    valueKabir: 700,
    valueShaghir: 7, // 7+0+0
    element: 'Api',
    maratib: 'Ratusan (Mi’āt)',
    makhraj: 'Ujung Lidah Bertemu Ujung Gigi Seri Atas',
    hikmah: 'Kecerdasan ingatan zikir (Dzikr), ketajaman logika, kecerdikan strategi dan kewibawaan.',
  },

  // 8. ضَظَغْ (Dhadzagh)
  {
    order: 26,
    char: 'ض',
    nameLatin: 'Dhad (Ḍād)',
    nameArabic: 'ضَاد',
    mnemonicGroup: 'Dhadzagh',
    mnemonicArabic: 'ضَظَغْ',
    valueKabir: 800,
    valueShaghir: 8, // 8+0+0
    element: 'Tanah',
    maratib: 'Ratusan (Mi’āt)',
    makhraj: 'Salah Satu atau Kedua Sisi Lidah Mengenai Gigi Geraham Atas (Istithalah)',
    hikmah: 'Cahaya kejelasan (Dhiya’), keistimewaan lisan Arab (Lughat al-Dhad), perlindungan kokoh.',
  },
  {
    order: 27,
    char: 'ظ',
    nameLatin: 'Zha (Ẓā’)',
    nameArabic: 'ظَاء',
    mnemonicGroup: 'Dhadzagh',
    mnemonicArabic: 'ضَظَغْ',
    valueKabir: 900,
    valueShaghir: 9, // 9+0+0
    element: 'Udara',
    maratib: 'Ratusan (Mi’āt)',
    makhraj: 'Ujung Lidah Bertemu Ujung Gigi Seri Atas (Ithbaq)',
    hikmah: 'Kemenangan mutlak (Zhafar), ketampakan kebenaran (Zhahir), kejayaan dan keadilan.',
  },
  {
    order: 28,
    char: 'غ',
    nameLatin: 'Ghain',
    nameArabic: 'غَيْن',
    mnemonicGroup: 'Dhadzagh',
    mnemonicArabic: 'ضَظَغْ',
    valueKabir: 1000,
    valueShaghir: 1, // 1+0+0+0
    element: 'Air',
    maratib: 'Ribuan (Ulūf)',
    makhraj: 'Adna al-Halq (Tenggorokan Terluar Dekat Lidah)',
    hikmah: 'Kekayaan batin & lahir (Ghina), ampunan luas (Ghufran), kecukupan rezeki dan keberkahan.',
  },
];

export const AbjadTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedElement, setSelectedElement] = useState<'Semua' | ElementType>('Semua');
  const [selectedMaratib, setSelectedMaratib] = useState<string>('Semua');
  const [testInput, setTestInput] = useState('');
  const [copiedLetter, setCopiedLetter] = useState<string | null>(null);

  // Live test calculations
  const testBreakdown = useMemo(() => {
    const clean = testInput.trim();
    if (!clean) return null;
    const isArabic = isArabicText(clean);
    const result = isArabic ? parseArabicAbjad(clean) : transliterateLatinToAbjad(clean);
    const total = result.breakdown.reduce((acc, curr) => acc + curr.value, 0);

    // Calculate element sums
    const elementScores = { Api: 0, Tanah: 0, Udara: 0, Air: 0 };
    result.breakdown.forEach((item) => {
      elementScores[item.element] += item.value;
    });

    // Root number (Jummal as-Shaghir)
    let temp = total;
    while (temp > 9) {
      temp = String(temp)
        .split('')
        .reduce((sum, d) => sum + parseInt(d, 10), 0);
    }

    return {
      clean,
      isArabic,
      transliterated: result.transliterated,
      breakdown: result.breakdown,
      total,
      shaghir: temp === 0 ? 9 : temp,
      elementScores,
    };
  }, [testInput]);

  // Filtered letters list
  const filteredLetters = useMemo(() => {
    return COMPLETE_ABJAD_DATA.filter((letter) => {
      // Element filter
      if (selectedElement !== 'Semua' && letter.element !== selectedElement) {
        return false;
      }
      // Maratib filter
      if (selectedMaratib !== 'Semua' && letter.maratib !== selectedMaratib) {
        return false;
      }
      // Search term filter
      if (searchTerm.trim()) {
        const q = searchTerm.toLowerCase().trim();
        const matchChar = letter.char.includes(q);
        const matchName = letter.nameLatin.toLowerCase().includes(q);
        const matchNameAr = letter.nameArabic.includes(q);
        const matchMnemonic = letter.mnemonicGroup.toLowerCase().includes(q) || letter.mnemonicArabic.includes(q);
        const matchValue = String(letter.valueKabir) === q;
        const matchMakhraj = letter.makhraj.toLowerCase().includes(q);
        return matchChar || matchName || matchNameAr || matchMnemonic || matchValue || matchMakhraj;
      }
      return true;
    });
  }, [searchTerm, selectedElement, selectedMaratib]);

  const handleCopyLetterInfo = (letter: AbjadLetterRecord) => {
    const text = `[HURUF ABJAD ${letter.char} - ${letter.nameLatin} (${letter.nameArabic})]
Nilai Jummal al-Kabir: ${letter.valueKabir}
Akar Digit (Shaghir): ${letter.valueShaghir}
Unsur Tabi'ah: ${letter.element}
Kelompok Kata: ${letter.mnemonicArabic} (${letter.mnemonicGroup})
Tingkatan: ${letter.maratib}
Makhraj: ${letter.makhraj}
Hikmah: ${letter.hikmah}`;

    navigator.clipboard.writeText(text);
    setCopiedLetter(letter.char);
    setTimeout(() => setCopiedLetter(null), 2000);
  };

  const getElementBadge = (el: ElementType) => {
    switch (el) {
      case 'Api':
        return 'bg-red-950/70 text-red-300 border-red-700/60';
      case 'Tanah':
        return 'bg-amber-950/70 text-amber-300 border-amber-700/60';
      case 'Udara':
        return 'bg-sky-950/70 text-sky-300 border-sky-700/60';
      case 'Air':
        return 'bg-teal-950/70 text-teal-300 border-teal-700/60';
    }
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Hero Header */}
      <div className="bg-stone-900/80 border border-amber-900/40 rounded-2xl p-6 sm:p-10 shadow-2xl backdrop-blur-sm relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-radial from-amber-600/10 via-amber-700/5 to-transparent pointer-events-none" />

        <div className="max-w-4xl relative z-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-950/80 border border-amber-800/60 text-amber-300 text-xs font-semibold mb-3">
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>Kajian Hisab Falakiah &bull; Risalah Al-Biruni</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-['Cinzel'] font-bold text-amber-100 mb-2">
            Tabel Abjadiyah (Hisāb al-Jummal al-Kabīr)
          </h2>

          <p className="font-['Amiri'] text-2xl text-amber-300/90 mb-3" dir="rtl">
            أَبْجَدْ هَوَّزْ حُطِّي كَلَمَنْ سَعْفَصْ قَرَشَتْ ثَخَّذْ ضَظَغْ
          </p>

          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-3xl">
            Tabel sistemik 28 huruf hijaiyah menurut urutan klasik <em>Abjad Masyriqiyyah</em> yang dirujuk oleh{' '}
            <strong className="text-amber-200">Abū Rayḥān al-Bīrūnī</strong> dalam Kitab <em>Al-Jamāhir</em> dan{' '}
            <em>Al-Tafhīm</em>. Setiap huruf memuat nilai numerik kuantitatif (1 hingga 1000) dan resonansi empat
            unsur alamiah (Api, Tanah, Udara, dan Air).
          </p>
        </div>
      </div>

      {/* 4 Elements Summary Banners */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Api */}
        <div className="bg-stone-900/70 border border-red-800/40 rounded-xl p-4 relative overflow-hidden shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2 text-red-400 font-bold font-['Cinzel'] text-sm">
              <Flame className="w-4 h-4" />
              <span>Huruf Api (النَّارِيَّة)</span>
            </div>
            <span className="text-xs font-mono font-bold text-red-300 bg-red-950/80 px-2 py-0.5 rounded border border-red-800/60">
              7 Huruf
            </span>
          </div>
          <p className="font-['Amiri'] text-xl text-red-200 tracking-widest my-1 text-center font-bold" dir="rtl">
            ا • ه • ط • م • ف • ش • ذ
          </p>
          <div className="flex justify-between items-center text-xs text-stone-400 mt-2 pt-2 border-t border-red-900/30">
            <span>Total Nilai: <strong className="text-red-300 font-mono">1.135</strong></span>
            <span>Mizaj: <strong className="text-stone-300">Panas-Kering</strong></span>
          </div>
        </div>

        {/* Tanah */}
        <div className="bg-stone-900/70 border border-amber-800/40 rounded-xl p-4 relative overflow-hidden shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2 text-amber-400 font-bold font-['Cinzel'] text-sm">
              <Mountain className="w-4 h-4" />
              <span>Huruf Tanah (التُّرَابِيَّة)</span>
            </div>
            <span className="text-xs font-mono font-bold text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-800/60">
              7 Huruf
            </span>
          </div>
          <p className="font-['Amiri'] text-xl text-amber-200 tracking-widest my-1 text-center font-bold" dir="rtl">
            ب • و • ي • ن • ص • ت • ض
          </p>
          <div className="flex justify-between items-center text-xs text-stone-400 mt-2 pt-2 border-t border-amber-900/30">
            <span>Total Nilai: <strong className="text-amber-300 font-mono">1.358</strong></span>
            <span>Mizaj: <strong className="text-stone-300">Dingin-Kering</strong></span>
          </div>
        </div>

        {/* Udara */}
        <div className="bg-stone-900/70 border border-sky-800/40 rounded-xl p-4 relative overflow-hidden shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2 text-sky-400 font-bold font-['Cinzel'] text-sm">
              <Wind className="w-4 h-4" />
              <span>Huruf Udara (الهَوَائِيَّة)</span>
            </div>
            <span className="text-xs font-mono font-bold text-sky-300 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-800/60">
              7 Huruf
            </span>
          </div>
          <p className="font-['Amiri'] text-xl text-sky-200 tracking-widest my-1 text-center font-bold" dir="rtl">
            ج • ز • ك • س • ق • ث • ظ
          </p>
          <div className="flex justify-between items-center text-xs text-stone-400 mt-2 pt-2 border-t border-sky-900/30">
            <span>Total Nilai: <strong className="text-sky-300 font-mono">1.590</strong></span>
            <span>Mizaj: <strong className="text-stone-300">Panas-Lembap</strong></span>
          </div>
        </div>

        {/* Air */}
        <div className="bg-stone-900/70 border border-teal-800/40 rounded-xl p-4 relative overflow-hidden shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2 text-teal-400 font-bold font-['Cinzel'] text-sm">
              <Droplets className="w-4 h-4" />
              <span>Huruf Air (المَائِيَّة)</span>
            </div>
            <span className="text-xs font-mono font-bold text-teal-300 bg-teal-950/80 px-2 py-0.5 rounded border border-teal-800/60">
              7 Huruf
            </span>
          </div>
          <p className="font-['Amiri'] text-xl text-teal-200 tracking-widest my-1 text-center font-bold" dir="rtl">
            د • ح • ل • ع • ر • خ • غ
          </p>
          <div className="flex justify-between items-center text-xs text-stone-400 mt-2 pt-2 border-t border-teal-900/30">
            <span>Total Nilai: <strong className="text-teal-300 font-mono">1.912</strong></span>
            <span>Mizaj: <strong className="text-stone-300">Dingin-Lembap</strong></span>
          </div>
        </div>
      </div>

      {/* Interactive Quick Letter / Name Tester Simulator */}
      <div className="bg-stone-900/90 border border-amber-800/50 rounded-2xl p-5 sm:p-7 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-800">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-['Cinzel'] font-bold text-amber-100">
                Simulator Uji Hisab Abjadiyah
              </h3>
              <p className="text-xs text-stone-400">
                Ketikkan kata, huruf Arab, atau nama Latin apa saja untuk membedah nilai Jummal seketika
              </p>
            </div>
          </div>

          {testInput && (
            <button
              type="button"
              onClick={() => setTestInput('')}
              className="text-xs text-stone-400 hover:text-stone-200 flex items-center space-x-1 transition-colors self-end sm:self-center"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Bersihkan</span>
            </button>
          )}
        </div>

        <div className="mt-4">
          <input
            type="text"
            value={testInput}
            onChange={(e) => setTestInput(e.target.value)}
            placeholder="Ketik kata (misal: 'Muhammad', 'Fatimah', atau 'محمد')..."
            className="w-full px-4 py-3 bg-stone-950/90 border border-amber-700/60 rounded-xl text-stone-100 placeholder-stone-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 font-sans"
          />
        </div>

        {/* Realtime Simulator Result Display */}
        {testBreakdown && (
          <div className="mt-5 p-4 rounded-xl bg-stone-950/80 border border-stone-800 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-3 border-b border-stone-800/80">
              <div>
                <span className="text-[10px] text-stone-400 uppercase font-mono block">Aksara Abjad Terurai:</span>
                <span className="font-['Amiri'] text-2xl sm:text-3xl text-amber-300 font-bold" dir="rtl">
                  {testBreakdown.transliterated}
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="px-3.5 py-1.5 rounded-lg bg-amber-950/60 border border-amber-800 text-center">
                  <span className="text-[9px] text-stone-400 uppercase block font-mono">Jummal Kabir</span>
                  <span className="text-lg font-bold font-mono text-amber-300">{testBreakdown.total}</span>
                </div>
                <div className="px-3.5 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-800 text-center">
                  <span className="text-[9px] text-stone-400 uppercase block font-mono">Akar Digit (Shaghir)</span>
                  <span className="text-lg font-bold font-mono text-emerald-300">{testBreakdown.shaghir}</span>
                </div>
              </div>
            </div>

            {/* Letter Cards Strip */}
            <div>
              <span className="text-xs text-stone-400 font-semibold block mb-2">
                Bedah Karakter Huruf:
              </span>
              <div className="flex flex-wrap gap-2">
                {testBreakdown.breakdown.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 bg-stone-900 border border-stone-800 rounded-lg px-3 py-1.5 text-xs shadow-sm"
                  >
                    <span className="font-['Amiri'] text-lg font-bold text-amber-300">{item.arabicChar}</span>
                    <span className="text-stone-300 font-medium">{item.arabicName}</span>
                    <span className="font-mono font-bold text-amber-400">+{item.value}</span>
                    <span className={`px-1.5 py-0.5 rounded text-[9px] font-semibold border ${getElementBadge(item.element)}`}>
                      {item.element}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Main Table Controls & Filters */}
      <div className="bg-stone-900/80 border border-stone-800 rounded-2xl p-5 sm:p-6 space-y-4 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari huruf, nama Latin, angka Jummal, atau makhraj..."
              className="w-full pl-10 pr-4 py-2.5 bg-stone-950 border border-stone-800 rounded-xl text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="text-stone-500 hover:text-stone-300 text-xs absolute right-3 top-1/2 -translate-y-1/2"
              >
                ✕
              </button>
            )}
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            {/* Element Filter */}
            <div className="flex items-center space-x-1 bg-stone-950 p-1 rounded-xl border border-stone-800">
              {(['Semua', 'Api', 'Tanah', 'Udara', 'Air'] as const).map((el) => (
                <button
                  key={el}
                  type="button"
                  onClick={() => setSelectedElement(el)}
                  className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                    selectedElement === el
                      ? 'bg-amber-600 text-stone-950 font-bold shadow'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  {el}
                </button>
              ))}
            </div>

            {/* Maratib Filter */}
            <select
              value={selectedMaratib}
              onChange={(e) => setSelectedMaratib(e.target.value)}
              className="px-3 py-2 bg-stone-950 border border-stone-800 rounded-xl text-stone-300 text-xs focus:outline-none focus:ring-1 focus:ring-amber-500"
            >
              <option value="Semua">Semua Tingkatan Nilai</option>
              <option value="Satuan (Āḥād)">Satuan (1 – 9)</option>
              <option value="Puluhan (‘Asyarāt)">Puluhan (10 – 90)</option>
              <option value="Ratusan (Mi’āt)">Ratusan (100 – 900)</option>
              <option value="Ribuan (Ulūf)">Ribuan (1.000)</option>
            </select>
          </div>
        </div>

        {/* Counter Results */}
        <div className="flex items-center justify-between text-xs text-stone-400 pt-1">
          <span>Menampilkan <strong className="text-amber-300 font-mono">{filteredLetters.length}</strong> dari 28 huruf hijaiyah</span>
          {(searchTerm || selectedElement !== 'Semua' || selectedMaratib !== 'Semua') && (
            <button
              type="button"
              onClick={() => {
                setSearchTerm('');
                setSelectedElement('Semua');
                setSelectedMaratib('Semua');
              }}
              className="text-amber-400 hover:underline"
            >
              Reset Semua Filter
            </button>
          )}
        </div>

        {/* The Abjad Table */}
        <div className="overflow-x-auto rounded-xl border border-stone-800 bg-stone-950 shadow-inner">
          <table className="w-full text-left text-xs text-stone-300">
            <thead className="bg-stone-900/90 text-stone-400 border-b border-stone-800 text-[11px] uppercase tracking-wider font-semibold">
              <tr>
                <th className="py-3 px-3 text-center">Urutan</th>
                <th className="py-3 px-4 text-center">Aksara</th>
                <th className="py-3 px-3">Nama Huruf</th>
                <th className="py-3 px-3 text-center">Kelompok Mnemonic</th>
                <th className="py-3 px-3 text-right">Nilai Jummal (Kabir)</th>
                <th className="py-3 px-3 text-center">Akar (Shaghir)</th>
                <th className="py-3 px-3 text-center">Unsur Thabi'ah</th>
                <th className="py-3 px-3">Tingkatan (Marātib)</th>
                <th className="py-3 px-4">Titik Artikulasi (Makhraj)</th>
                <th className="py-3 px-2 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-800/60">
              {filteredLetters.length === 0 ? (
                <tr>
                  <td colSpan={10} className="py-8 text-center text-stone-500">
                    Tidak ada huruf yang cocok dengan kriteria pencarian.
                  </td>
                </tr>
              ) : (
                filteredLetters.map((item) => {
                  const isCopied = copiedLetter === item.char;
                  return (
                    <tr
                      key={item.order}
                      className="hover:bg-stone-900/50 transition-colors group"
                    >
                      {/* Urutan */}
                      <td className="py-3 px-3 text-center text-stone-500 font-mono text-[11px]">
                        {item.order}
                      </td>

                      {/* Aksara Hijaiyah */}
                      <td className="py-3 px-4 text-center">
                        <span className="text-2xl font-['Amiri'] font-bold text-amber-300 group-hover:scale-125 transition-transform inline-block">
                          {item.char}
                        </span>
                      </td>

                      {/* Nama Huruf */}
                      <td className="py-3 px-3">
                        <div className="font-semibold text-stone-100 flex items-center space-x-1.5">
                          <span>{item.nameLatin}</span>
                          <span className="text-[11px] font-['Amiri'] text-amber-400 font-normal">
                            ({item.nameArabic})
                          </span>
                        </div>
                        <span className="text-[10px] text-stone-500 block line-clamp-1 max-w-xs">
                          {item.hikmah}
                        </span>
                      </td>

                      {/* Kelompok Mnemonic */}
                      <td className="py-3 px-3 text-center">
                        <span className="font-['Amiri'] text-sm font-bold text-stone-200 block" dir="rtl">
                          {item.mnemonicArabic}
                        </span>
                        <span className="text-[10px] text-stone-400 font-mono block">
                          {item.mnemonicGroup}
                        </span>
                      </td>

                      {/* Nilai Jummal al-Kabir */}
                      <td className="py-3 px-3 text-right font-mono font-bold text-amber-400 text-sm">
                        {item.valueKabir}
                      </td>

                      {/* Nilai Jummal as-Shaghir */}
                      <td className="py-3 px-3 text-center font-mono font-semibold text-emerald-400 text-xs">
                        {item.valueShaghir}
                      </td>

                      {/* Unsur Thabi'ah */}
                      <td className="py-3 px-3 text-center">
                        <span
                          className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold border ${getElementBadge(
                            item.element
                          )}`}
                        >
                          {item.element}
                        </span>
                      </td>

                      {/* Tingkatan Marātib */}
                      <td className="py-3 px-3 text-stone-400 text-[11px]">
                        {item.maratib}
                      </td>

                      {/* Makhraj */}
                      <td className="py-3 px-4 text-stone-300 text-[11px] max-w-xs leading-relaxed">
                        {item.makhraj}
                      </td>

                      {/* Salin info */}
                      <td className="py-3 px-2 text-center">
                        <button
                          type="button"
                          onClick={() => handleCopyLetterInfo(item)}
                          className="p-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-stone-200 transition-colors"
                          title={`Salin data lengkap huruf ${item.char}`}
                        >
                          {isCopied ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Kaidah Khusus Huruf Varian & Tajwid dalam Hisab */}
      <div className="bg-stone-900/70 border border-stone-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
        <div className="flex items-center space-x-2.5 text-amber-300 font-['Cinzel'] font-bold text-base pb-3 border-b border-stone-800">
          <Info className="w-5 h-5 text-amber-400" />
          <span>Kaidah Penanganan Aksara Varian Menurut Jumhur Ulama Hisab Falak</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs text-stone-300">
          <div className="p-4 rounded-xl bg-stone-950/60 border border-stone-800/80 space-y-2">
            <div className="flex items-center space-x-2">
              <span className="font-['Amiri'] text-xl font-bold text-amber-300">ء / أ / إ</span>
              <span className="font-bold text-stone-100">Hamzah (Semua Bentuk)</span>
            </div>
            <p className="text-stone-400 leading-relaxed">
              Dihitung bernilai <strong className="text-amber-300 font-mono">1</strong> berunsur{' '}
              <strong className="text-red-400">Api</strong> karena hakikat dasarnya mengikuti fonem Alif pokok.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-stone-950/60 border border-stone-800/80 space-y-2">
            <div className="flex items-center space-x-2">
              <span className="font-['Amiri'] text-xl font-bold text-amber-300">ة</span>
              <span className="font-bold text-stone-100">Ta' Marbuthah (Hā’ al-Ta’nīts)</span>
            </div>
            <p className="text-stone-400 leading-relaxed">
              Dalam hisab Jummal al-Kabir nama diri dihitung senilai huruf Ta' terbuka (<strong className="text-amber-300 font-mono">400</strong>, unsur <strong className="text-amber-400">Tanah</strong>).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-stone-950/60 border border-stone-800/80 space-y-2">
            <div className="flex items-center space-x-2">
              <span className="font-['Amiri'] text-xl font-bold text-amber-300">ى</span>
              <span className="font-bold text-stone-100">Alif Maqshūrah (Bentuk Ya)</span>
            </div>
            <p className="text-stone-400 leading-relaxed">
              Bila ditulis dengan bentuk Ya (seperti nama Musthafa / مصطفى), dihitung senilai{' '}
              <strong className="text-amber-300 font-mono">10</strong> (unsur <strong className="text-amber-400">Tanah</strong>) atau dinisbatkan pada Alif (1) menurut riwayat sekunder.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

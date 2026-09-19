import React, { useState } from 'react';
import { ElementType } from '../types';
import {
  Flame,
  Droplets,
  Wind,
  Mountain,
  Compass,
  BookOpen,
  Scale,
  Sparkles,
  ShieldAlert,
  Lightbulb,
  CheckCircle2,
  Layers,
  ArrowRight
} from 'lucide-react';

interface ElementPhilosophyCardProps {
  dominantElement: ElementType;
  secondaryElement?: ElementType;
  elementScores?: {
    Api: number;
    Tanah: number;
    Udara: number;
    Air: number;
  };
}

interface ElementDetail {
  type: ElementType;
  arabicName: string;
  transliteration: string;
  temperamentArabic: string;
  temperamentLatin: string;
  cosmologicalMotion: string;
  weightCategory: string;
  colorTheme: {
    badge: string;
    border: string;
    bgGlow: string;
    accentText: string;
    gradient: string;
    activeTab: string;
  };
  icon: React.ElementType;
  natureDescription: string;
  alBiruniQuote: {
    arabic: string;
    translation: string;
    source: string;
  };
  soulCharacteristics: {
    strengths: string[];
    vulnerabilities: string[];
  };
  mineralogyImpact: {
    gemstoneResonance: string;
    suitableGems: string;
    contraindicationGems: string;
    mechanism: string;
  };
  balancingAdvice: {
    dailyLife: string;
    spiritualPractice: string;
    harmonizingElement: string;
  };
}

export const ELEMENT_PHILOSOPHY_DATA: Record<ElementType, ElementDetail> = {
  Api: {
    type: 'Api',
    arabicName: 'النَّار',
    transliteration: 'An-Nār',
    temperamentArabic: 'حَارّ يَابِس',
    temperamentLatin: 'Hārr Yābis (Panas & Kering)',
    cosmologicalMotion: 'Gerak Vertikal Lurus ke Atas (Ḥarakah Mustaqīmah ilā al-A‘lā)',
    weightCategory: 'Elemen Paling Ringan Mutlak (Akhaff al-Arkān al-Muṭlaq)',
    colorTheme: {
      badge: 'bg-red-950/80 text-red-300 border-red-700/60',
      border: 'border-red-600/40',
      bgGlow: 'from-red-950/40 via-stone-900 to-amber-950/30',
      accentText: 'text-red-400',
      gradient: 'from-amber-600 via-red-600 to-rose-700',
      activeTab: 'bg-red-900/60 text-red-200 border-red-500 shadow-md shadow-red-950/50',
    },
    icon: Flame,
    natureDescription:
      'Menurut Al-Biruni dalam mukadimah Kitab Al-Jamahir dan Al-Tafhim, Api adalah daya aktif pengubah materi (quwwah muḥawwilah). Api memisahkan kotoran mineral, mematangkan bijih dalam mantel bumi, dan memberikan kilau adamantin pada permata korundum. Dalam diri manusia, Api adalah pemicu tekad baja, keberanian, dan daya juang tanpa gentar.',
    alBiruniQuote: {
      arabic: 'فَالنَّارُ لَطِيفَةُ الجَوْهَرِ، سَرِيعَةُ الحَرَكَةِ، قَاطِعَةٌ لِلْأَجْسَامِ، بِهَا تَتَمَحَّصُ المَعَادِنُ وَتَصْفُو الجَوَاهِرُ',
      translation:
        '“Maka api itu lembut substansinya, lekas gerakannya, mampu menembus benda-benda padat. Dengannya segala logam termurnikan dan segala permata mulia menampakkan kejernihannya.”',
      source: 'Kitab Al-Jamāhir fī Ma‘rifat al-Jawāhir, Fashl Fī Ṭabā’i‘ al-Ajrām',
    },
    soulCharacteristics: {
      strengths: [
        'Keberanian tinggi (Syajā‘ah) dan cepat mengambil inisiatif kepemimpinan',
        'Semangat pantang menyerah serta daya juang yang membakar keraguan',
        'Visi kepeloporan, wibawa alami, dan karisma yang menggerakkan orang lain',
        'Cepat tanggap dalam situasi krisis atau saat dibutuhkan keputusan tegas',
      ],
      vulnerabilities: [
        'Rentan tersulut amarah (Ghaḍab) dan ketidaksabaran saat menghadapi kelambanan',
        'Cenderung impulsif atau tergesa-gesa tanpa menimbang akibat jangka panjang',
        'Mudah mengalami kelelahan batin (burnout) akibat intensitas emosi yang terlalu tinggi',
      ],
    },
    mineralogyImpact: {
      gemstoneResonance:
        'Selaras dengan batu permata berstruktur korundum keras dan berindeks bias tinggi dengan warna merah membara atau hangat.',
      suitableGems: 'Yaqut Ahmar (Ruby / Merah Delima), Spinel Merah (La‘l), Garnet, dan Intan (Almās).',
      contraindicationGems: 'Batu berunsur Air kuat yang dingin-lembap (Mutiara asli/Lu’lu’) dapat meredam gairah jika dipakai bersamaan tanpa penengah.',
      mechanism:
        'Energi panas permata memperkuat sirkulasi darah vital dan mengusir lesu ruhani, menjaga gelora tekad tetap lurus.',
    },
    balancingAdvice: {
      dailyLife:
        'Hindari mengambil keputusan penting saat sedang marah. Seimbangkan kegiatan fisik yang memicu adrenalin dengan rileksasi di dekat air atau pepohonan.',
      spiritualPractice:
        'Perbanyak istighfar dan membaca Asmaul Husna “Yā Ḥalīm” (Maha Penyantun) serta berwudhu dengan air dingin saat merasakan gejolak amarah.',
      harmonizingElement: 'Air (Al-Mā’) sebagai penyejuk atau Tanah (At-Turāb) sebagai penstabil.',
    },
  },

  Air: {
    type: 'Air',
    arabicName: 'المَاء',
    transliteration: 'Al-Mā’',
    temperamentArabic: 'بَارِد رَطْب',
    temperamentLatin: 'Bārid Raṭb (Dingin & Lembap)',
    cosmologicalMotion: 'Gerak Mengalir & Mengendap Perlahan (Ḥarakah Sayyālah Munḥaṭṭah)',
    weightCategory: 'Elemen Berat Relatif (Atsqal min al-Hawā’ wa Akhaff min al-Arḍ)',
    colorTheme: {
      badge: 'bg-blue-950/80 text-blue-300 border-blue-700/60',
      border: 'border-blue-600/40',
      bgGlow: 'from-blue-950/40 via-stone-900 to-teal-950/30',
      accentText: 'text-blue-400',
      gradient: 'from-blue-600 via-cyan-600 to-teal-700',
      activeTab: 'bg-blue-900/60 text-blue-200 border-blue-500 shadow-md shadow-blue-950/50',
    },
    icon: Droplets,
    natureDescription:
      'Al-Biruni memandang Air sebagai medium kehidupan (māddat al-ḥayāh) yang lentur, cair, dan mampu meresap ke dalam celah terdalam. Dalam ranah permata, Al-Biruni menuliskan bab khusus mengenai Mutiara (Al-Lu’lu’) yang tercipta di kedalaman samudra. Watak Air membawa kelembutan budi, ketenangan batin, ketajaman firasat, dan daya penyembuhan.',
    alBiruniQuote: {
      arabic: 'وَالمَاءُ قَابِلٌ لِلصُّوَرِ، رَطْبٌ سَيَّالٌ، يُطْفِئُ حَرَارَةَ الغَضَبِ وَيَجْمَعُ شَتَاتَ الأَجْزَاءِ المُتَفَرِّقَةِ',
      translation:
        '“Dan air itu mudah menerima segala bentuk rupa, basah mengalir, memadamkan panasnya amarah serta merekatkan serpihan partikel yang terserak.”',
      source: 'Kitab Al-Jamāhir fī Ma‘rifat al-Jawāhir, Fashl fī Kawn al-Lu’lu’ wa Aṣlihi',
    },
    soulCharacteristics: {
      strengths: [
        'Kedalaman intuisi, kepekaan batin (baṣīrah), dan empati sosial yang tulus',
        'Kemampuan beradaptasi tinggi dengan berbagai watak manusia laksana air mengikuti bejana',
        'Daya peredam perselisihan, menyejukkan suasana hati orang-orang di sekitarnya',
        'Kecintaan pada kedamaian, kontemplasi spiritual, dan kejernihan nurani',
      ],
      vulnerabilities: [
        'Mudah terbawa arus perasaan (mood swing) dan rentan hanyut dalam kesedihan mendalam',
        'Cenderung ragu-ragu (waswas) dalam mengambil ketetapan tegas karena takut melukai orang lain',
        'Pasif atau menarik diri dari pergaulan saat menerima penolakan emosional',
      ],
    },
    mineralogyImpact: {
      gemstoneResonance:
        'Sangat selaras dengan permata samudra dan mineral yang memancarkan kilau lembut penyejuk mata berunsur dingin.',
      suitableGems: 'Mutiara Alami (Lu’lu’), Zamrud Sejuk (Zumurrud), Aquamarine, Pirus Persia (Fayrūzaj).',
      contraindicationGems: 'Batu berunsur Api menyala ekstrem yang memicu gejolak batin tak menentu jika tanpa penyelarasan.',
      mechanism:
        'Permata berunsur air memancarkan ketenangan batin (ithmi’nan), meredakan degup gelisah, dan menjernihkan pandangan mata dari kelelahan.',
    },
    balancingAdvice: {
      dailyLife:
        'Latihlah ketegasan berkata tidak. Buatlah batas yang jelas agar perasaan pribadi tidak terus-menerus memikul beban emosi orang lain.',
      spiritualPractice:
        'Rutin melazimkan zikir peneguh hati seperti “Yā Qayyūm” (Maha Mandiri) dan tadabbur Al-Qur’an di waktu hening sepertiga malam.',
      harmonizingElement: 'Tanah (At-Turāb) untuk membentuk wadah keteguhan atau Api (An-Nār) untuk dorongan keberanian.',
    },
  },

  Udara: {
    type: 'Udara',
    arabicName: 'الهَوَاء',
    transliteration: 'Al-Hawā’',
    temperamentArabic: 'حَارّ رَطْب',
    temperamentLatin: 'Hārr Raṭb (Panas & Lembap)',
    cosmologicalMotion: 'Gerak Ekspansif Menyebar ke Segala Arah (Ḥarakah Muntasyirah Wāsi‘ah)',
    weightCategory: 'Elemen Ringan Relatif (Akhaff min al-Mā’ wa Atsqal min an-Nār)',
    colorTheme: {
      badge: 'bg-sky-950/80 text-sky-300 border-sky-700/60',
      border: 'border-sky-600/40',
      bgGlow: 'from-sky-950/40 via-stone-900 to-cyan-950/30',
      accentText: 'text-sky-400',
      gradient: 'from-sky-600 via-indigo-600 to-cyan-700',
      activeTab: 'bg-sky-900/60 text-sky-200 border-sky-500 shadow-md shadow-sky-950/50',
    },
    icon: Wind,
    natureDescription:
      'Dalam kosmologi Al-Biruni, Udara adalah jembatan komunikasi semesta, pembawa suara, aroma, dan cahaya antar-ruang. Karakter panas-lembapnya melahirkan kecerdasan nalar, kefasihan berucap (balāghah), keluwesan pergaulan, serta imajinasi penciptaan karya ilmiah dan sastra yang tak bertepi.',
    alBiruniQuote: {
      arabic: 'وَالهَوَاءُ سَفِيرُ الأَصْوَاتِ وَحَامِلُ الرَّوَائِحِ، خَفِيفٌ سَرِيعُ النُّفُوذِ، لَا يَسْتَقِرُّ فِي مَكَانٍ وَاحِدٍ',
      translation:
        '“Dan udara itu utusan penghantar segala suara dan pembawa aroma semerbak; ringan dan lekas meresap, tiada pernah diam terpaku pada satu tempat.”',
      source: 'Kitab Al-Tafhīm li-Awā’il Sinā‘at al-Tanjīm, Bāb Fī al-Arkān al-Basīṭah',
    },
    soulCharacteristics: {
      strengths: [
        'Daya nalar analitis, kecerdasan intelektual tinggi, dan cepat menyerap ilmu baru',
        'Kecakapan diplomasi, kepandaian berkomunikasi, dan tutur kata yang memikat',
        'Daya cipta inovatif, berpikiran terbuka, dan kaya dengan gagasan-gagasan visioner',
        'Kemampuan berjejaring luas dan mencairkan suasana beku di tengah perdebatan',
      ],
      vulnerabilities: [
        'Mudah mengalami dispersi konsentrasi (tasyattut al-fikr) dan cepat merasa jenuh',
        'Terkadang terlalu banyak berteori di angan-angan namun lamban mengeksekusi di alam nyata',
        'Cenderung cemas berlebih (overthinking) memikirkan kemungkinan masa depan yang belum terjadi',
      ],
    },
    mineralogyImpact: {
      gemstoneResonance:
        'Selaras dengan batu permata yang tembus cahaya jernih, membiaskan spektrum sinar kuning keemasan atau biru cerah.',
      suitableGems: 'Topaz Emas (Yāqūt Ashfar), Safir Bening, Zircon Biru, dan Batu Akik Berurat Halus.',
      contraindicationGems: 'Batu yang terlalu pekat dan liat bila dipakai berlebihan dapat membelenggu kelincahan berpikir.',
      mechanism:
        'Membantu memusatkan gelombang pikiran, menajamkan fokus ingatan, dan membersihkan kabut keraguan mental.',
    },
    balancingAdvice: {
      dailyLife:
        'Buatlah catatan tertulis untuk mengikat ide-ide liar menjadi rencana konkret. Berlatihlah menyelesaikan satu proyek sebelum berpindah ke hal baru.',
      spiritualPractice:
        'Rutin membaca Asmaul Husna “Yā Ḥakīm” (Maha Bijaksana) serta memperbanyak tilawah Al-Qur’an secara bersuara tartil untuk melatih keteraturan napas dan pikiran.',
      harmonizingElement: 'Tanah (At-Turāb) untuk menambatkan ide ke bumi agar membuahkan hasil nyata.',
    },
  },

  Tanah: {
    type: 'Tanah',
    arabicName: 'التُّرَاب',
    transliteration: 'At-Turāb',
    temperamentArabic: 'بَارِد يَابِس',
    temperamentLatin: 'Bārid Yābis (Dingin & Kering)',
    cosmologicalMotion: 'Gerak Menuju Pusat Bumi (Ḥarakah ilā al-Markaz)',
    weightCategory: 'Elemen Paling Berat Mutlak (Atsqal al-Arkān al-Muṭlaq)',
    colorTheme: {
      badge: 'bg-amber-950/80 text-amber-300 border-amber-700/60',
      border: 'border-amber-600/40',
      bgGlow: 'from-amber-950/40 via-stone-900 to-stone-950/50',
      accentText: 'text-amber-400',
      gradient: 'from-amber-700 via-yellow-700 to-stone-800',
      activeTab: 'bg-amber-900/60 text-amber-200 border-amber-500 shadow-md shadow-amber-950/50',
    },
    icon: Mountain,
    natureDescription:
      'Bagi Al-Biruni sang ahli gravimetri mineral, Tanah (Bumi) adalah rahim sekaligus matriks induk seluruh mineral dan logam mulia. Sifat dingin-keringnya mengikat molekul, memberikan kepadatan padat, ketahanan aus, dan keabadian bentuk. Seseorang dengan unsur dominan Tanah memiliki integritas teguh, kesabaran tanpa batas, dan stabilitas rezeki.',
    alBiruniQuote: {
      arabic: 'وَالأَرْضُ مَرْكَزُ الثِّقَلِ وَمَقَرُّ الجَوَاهِرِ، صَلْبَةٌ سَاكِنَةٌ، لَا تَتَزَعْزَعُ بِعَوَاصِفِ الرِّيَاحِ، فِيهَا حِفْظُ الأَمَانَاتِ',
      translation:
        '“Dan bumi adalah pusat berat semesta dan tempat bersemayamnya segala batu permata mulia; kokoh tenang, tiada goyah diterpa badai angin, padanya tersimpan amanah.”',
      source: 'Kitab Al-Jamāhir fī Ma‘rifat al-Jawāhir, Fashl fī Ṭabī‘at al-Arḍ wa Ma‘ādinihā',
    },
    soulCharacteristics: {
      strengths: [
        'Ketabahan luar biasa (Ṣabr), kesetiaan teguh, dan memegang teguh komitmen amanah',
        'Praktis, realistis, dan cermat dalam mengelola aset, rezeki, serta urusan keluarga',
        'Menjadi pilar sandaran bagi orang lain di saat situasi kacau karena ketenangannya yang kokoh',
        'Disiplin tinggi, menghargai tradisi, dan membangun masa depan dengan fondasi yang kuat',
      ],
      vulnerabilities: [
        'Rentan terjebak dalam kekakuan (rigiditas) pikiran dan lambat menerima perubahan baru',
        'Terkadang terlalu skeptis atau menyimpan kekecewaan di dalam dada dalam waktu lama',
        'Kecenderungan menumpuk beban tanggung jawab sendirian tanpa mau membaginya',
      ],
    },
    mineralogyImpact: {
      gemstoneResonance:
        'Sangat selaras dengan batu berstruktur silika mikrokristalin padat, batu akik berlapis, giok, dan jasper bumi.',
      suitableGems: 'Batu Akik Yaman (Carnelian / ‘Aqīq), Jasper Hati Ayam (Yasyb), Jadeite, Onyx (Jaza’).',
      contraindicationGems: 'Batu yang terlalu ringan atau tidak berakar bila tidak dibarengi ikatan logam perak yang kokoh.',
      mechanism:
        'Menghubungkan gelombang tubuh dengan denyut stabilitas bumi, meneguhkan urat saraf, dan melindungi dari kegoncangan mental.',
    },
    balancingAdvice: {
      dailyLife:
        'Latihlah fleksibilitas diri dan beranilah menerima pandangan baru dari orang lain. Sisipkan waktu rekreasi santai agar raga tidak terlalu tegang bekerja.',
      spiritualPractice:
        'Perbanyak zikir “Yā Fattāḥ Yā Razzāq” untuk melancarkan pintu rezeki dan sedekah rutin untuk menjaga kelapangan serta kelembutan hati.',
      harmonizingElement: 'Air (Al-Mā’) untuk melembutkan kekakuan atau Udara (Al-Hawā’) untuk menyegarkan pikiran.',
    },
  },
};

export const ElementPhilosophyCard: React.FC<ElementPhilosophyCardProps> = ({
  dominantElement,
  secondaryElement,
  elementScores,
}) => {
  const [selectedElement, setSelectedElement] = useState<ElementType>(dominantElement);

  const currentData = ELEMENT_PHILOSOPHY_DATA[selectedElement] || ELEMENT_PHILOSOPHY_DATA['Api'];
  const CurrentIcon = currentData.icon;

  const elementKeys: ElementType[] = ['Api', 'Air', 'Udara', 'Tanah'];

  return (
    <div
      id="element-philosophy-card"
      className="bg-stone-900/90 border border-amber-800/40 rounded-2xl p-5 sm:p-8 shadow-2xl backdrop-blur-md relative overflow-hidden space-y-6"
    >
      {/* Background Decorative Ambience */}
      <div
        className={`absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br ${currentData.colorTheme.bgGlow} blur-3xl opacity-30 pointer-events-none transition-all duration-700`}
      />

      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-stone-800 relative z-10">
        <div>
          <div className="flex items-center space-x-2">
            <span className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <Compass className="w-4 h-4" />
            </span>
            <span className="text-xs uppercase font-mono tracking-widest text-amber-400 font-semibold">
              Filsafat Alam Kosmologis Al-Biruni
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-['Cinzel'] font-bold text-amber-100 mt-1">
            Penjelasan Sifat Unsur (Ṭabā’i‘ al-Arba‘ah)
          </h3>
          <p className="text-xs sm:text-sm text-stone-400 mt-0.5">
            Kajian mendalam karakteristik 4 elemen primordial menurut risalah fisika alam dan mineralogi Kitab{' '}
            <em className="text-stone-300">Al-Jamāhir</em> karya Abū Rayḥān al-Bīrūnī.
          </p>
        </div>

        {/* User Dominant Badge */}
        <div className="flex items-center space-x-3 bg-stone-950/80 border border-stone-800 rounded-xl p-2.5 sm:px-4 shrink-0 shadow-inner">
          <div className="text-right">
            <span className="text-[10px] text-stone-400 uppercase font-mono block">Unsur Dominan Anda</span>
            <span className="text-sm font-bold text-amber-200 flex items-center justify-end space-x-1">
              <span>{dominantElement}</span>
              {secondaryElement && (
                <span className="text-[11px] text-stone-400 font-normal">({secondaryElement})</span>
              )}
            </span>
          </div>
          <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300">
            <Sparkles className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Element Selector Tabs */}
      <div className="flex flex-wrap items-center gap-2 relative z-10">
        <span className="text-xs text-stone-400 font-medium mr-1 hidden sm:inline">Pilih Unsur:</span>
        {elementKeys.map((el) => {
          const isSelected = selectedElement === el;
          const isUserDominant = dominantElement === el;
          const data = ELEMENT_PHILOSOPHY_DATA[el];
          const Icon = data.icon;
          const scorePercent =
            elementScores && elementScores[el] !== undefined
              ? `${elementScores[el]} pt`
              : null;

          return (
            <button
              key={el}
              id={`tab-element-${el.toLowerCase()}`}
              type="button"
              onClick={() => setSelectedElement(el)}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all active:scale-95 ${
                isSelected
                  ? data.colorTheme.activeTab
                  : 'bg-stone-950/60 hover:bg-stone-800 text-stone-400 hover:text-stone-200 border-stone-800'
              }`}
            >
              <Icon className={`w-4 h-4 ${isSelected ? data.colorTheme.accentText : 'text-stone-400'}`} />
              <span>{el}</span>
              <span className="text-[11px] font-arabic opacity-80">{data.arabicName}</span>

              {isUserDominant && (
                <span className="ml-1 px-1.5 py-0.5 rounded text-[9px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Dominan
                </span>
              )}

              {scorePercent && (
                <span className="text-[10px] text-stone-400 font-mono opacity-80">
                  ({scorePercent})
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Main Content Area for Selected Element */}
      <div className="space-y-6 relative z-10">
        {/* Element Header Card */}
        <div
          className={`bg-stone-950/70 border ${currentData.colorTheme.border} rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-xl`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-stone-800/80">
            <div className="flex items-start space-x-3.5">
              <div
                className={`p-3 rounded-2xl bg-gradient-to-br ${currentData.colorTheme.gradient} text-white shadow-lg shrink-0`}
              >
                <CurrentIcon className="w-7 h-7" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="text-xl sm:text-2xl font-bold font-['Cinzel'] text-stone-100">
                    Unsur {currentData.type}
                  </h4>
                  <span className="font-['Amiri'] text-2xl text-amber-300 px-2">
                    {currentData.arabicName}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${currentData.colorTheme.badge}`}
                  >
                    {currentData.temperamentLatin}
                  </span>
                </div>

                <p className="text-xs text-stone-400 font-mono mt-1">
                  Mizaj Tradisi: <span className="text-stone-200">{currentData.temperamentArabic}</span> &bull;{' '}
                  {currentData.weightCategory}
                </p>
              </div>
            </div>

            {/* Cosmological Dynamic Motion */}
            <div className="bg-stone-900/90 border border-stone-800 rounded-xl p-3 text-xs lg:max-w-xs shadow-inner">
              <span className="text-[10px] text-stone-400 uppercase font-mono block">Dinamika Gerak Kosmis</span>
              <p className="font-medium text-stone-200 mt-0.5 flex items-center space-x-1.5">
                <ArrowRight className={`w-3.5 h-3.5 shrink-0 ${currentData.colorTheme.accentText}`} />
                <span>{currentData.cosmologicalMotion}</span>
              </p>
            </div>
          </div>

          {/* Philosophical Overview */}
          <div className="mt-4 pt-1">
            <p className="text-sm text-stone-300 leading-relaxed">
              {currentData.natureDescription}
            </p>
          </div>

          {/* Classical Quote from Kitab Al-Jamahir */}
          <div className="mt-4 p-4 rounded-xl bg-amber-950/20 border border-amber-800/30 space-y-2">
            <div className="flex items-center space-x-2 text-xs font-semibold text-amber-400">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Nukilan Otentik Kitab Al-Jamāhir:</span>
            </div>
            <p className="font-['Amiri'] text-lg sm:text-xl text-amber-200/90 leading-loose text-right font-medium" dir="rtl">
              {currentData.alBiruniQuote.arabic}
            </p>
            <p className="text-xs text-stone-300 italic">
              {currentData.alBiruniQuote.translation}
            </p>
            <span className="text-[10px] text-stone-400 block font-mono">
              &mdash; {currentData.alBiruniQuote.source}
            </span>
          </div>
        </div>

        {/* 2-Column Grid: Watak Jiwa & Pengaruh Mineralogi */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Kolom 1: Watak & Karakteristik Jiwa (Amzijah) */}
          <div className="bg-stone-950/60 border border-stone-800/90 rounded-2xl p-5 space-y-4 shadow-md">
            <div className="flex items-center space-x-2 pb-3 border-b border-stone-800 text-stone-200">
              <Scale className={`w-4 h-4 ${currentData.colorTheme.accentText}`} />
              <h5 className="font-['Cinzel'] font-bold text-sm text-stone-100">
                Watak Jiwa &amp; Temperamen Alami
              </h5>
            </div>

            {/* Strengths */}
            <div>
              <span className="text-xs font-semibold text-emerald-400 flex items-center space-x-1.5 mb-2">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Kekuatan Karakter Alami (Al-Faḍā’il):</span>
              </span>
              <ul className="space-y-1.5 text-xs text-stone-300">
                {currentData.soulCharacteristics.strengths.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-emerald-500 mt-0.5">&bull;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vulnerabilities */}
            <div className="pt-2 border-t border-stone-800/60">
              <span className="text-xs font-semibold text-amber-400 flex items-center space-x-1.5 mb-2">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Titik Rentan yang Perlu Diwaspadai (Al-Maḥādzīr):</span>
              </span>
              <ul className="space-y-1.5 text-xs text-stone-400">
                {currentData.soulCharacteristics.vulnerabilities.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-amber-500 mt-0.5">&bull;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Kolom 2: Interaksi Mineralogi & Batu Permata Al-Biruni */}
          <div className="bg-stone-950/60 border border-stone-800/90 rounded-2xl p-5 space-y-4 shadow-md">
            <div className="flex items-center space-x-2 pb-3 border-b border-stone-800 text-stone-200">
              <Layers className={`w-4 h-4 ${currentData.colorTheme.accentText}`} />
              <h5 className="font-['Cinzel'] font-bold text-sm text-stone-100">
                Hubungan dengan Batu Permata (Jawāhir)
              </h5>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <span className="text-stone-400 block font-semibold text-[11px] uppercase">
                  Karakter Resonansi Mineral:
                </span>
                <p className="text-stone-200 mt-0.5 leading-relaxed">
                  {currentData.mineralogyImpact.gemstoneResonance}
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-800/40">
                <span className="text-emerald-400 font-bold block text-[11px] uppercase">
                  Batu Permata Utama yang Selaras:
                </span>
                <p className="text-emerald-200 font-medium mt-0.5">
                  {currentData.mineralogyImpact.suitableGems}
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-rose-950/30 border border-rose-800/40">
                <span className="text-rose-400 font-bold block text-[11px] uppercase">
                  Catatan Batu Berlawanan Unsur:
                </span>
                <p className="text-rose-200/90 mt-0.5">
                  {currentData.mineralogyImpact.contraindicationGems}
                </p>
              </div>

              <div className="pt-1">
                <span className="text-stone-400 block font-semibold text-[11px] uppercase">
                  Mekanisme Penyelarasan Jiwa:
                </span>
                <p className="text-stone-300 mt-0.5 italic leading-relaxed">
                  "{currentData.mineralogyImpact.mechanism}"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Nasihat Penyelaras Keseharian & Amal Batin (Tawazun) */}
        <div className="bg-gradient-to-r from-amber-950/40 via-stone-900 to-stone-950 border border-amber-700/40 rounded-2xl p-5 shadow-lg space-y-3">
          <div className="flex items-center space-x-2 text-amber-300 font-['Cinzel'] font-bold text-sm pb-2 border-b border-amber-900/40">
            <Lightbulb className="w-4 h-4 text-amber-400" />
            <span>Nasihat Penyelarasan Karakter Jiwa (Tawāzun al-Mizāj)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="space-y-1 bg-stone-950/50 p-3 rounded-xl border border-stone-800">
              <span className="text-stone-400 font-semibold block text-[11px] uppercase font-mono">
                1. Keseharian &amp; Pola Tindakan
              </span>
              <p className="text-stone-300 leading-relaxed">
                {currentData.balancingAdvice.dailyLife}
              </p>
            </div>

            <div className="space-y-1 bg-stone-950/50 p-3 rounded-xl border border-stone-800">
              <span className="text-stone-400 font-semibold block text-[11px] uppercase font-mono">
                2. Wasilah Zikir &amp; Ruhiyah
              </span>
              <p className="text-stone-300 leading-relaxed">
                {currentData.balancingAdvice.spiritualPractice}
              </p>
            </div>

            <div className="space-y-1 bg-stone-950/50 p-3 rounded-xl border border-stone-800">
              <span className="text-stone-400 font-semibold block text-[11px] uppercase font-mono">
                3. Pasangan Unsur Penyeimbang
              </span>
              <p className="text-amber-200 font-semibold leading-relaxed">
                {currentData.balancingAdvice.harmonizingElement}
              </p>
              <p className="text-[11px] text-stone-400 mt-1 italic">
                Mempertahankan keseimbangan antara panas-dingin dan kering-lembap mencegah kelemahan mizaj.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import { ElementType, Gemstone, PlanetInfo, QuranicPrayerSync, QuranicVerseItem, SpiritualFocus } from '../types';

export function generateQuranicPrayerSync(
  userName: string,
  totalJummalKabir: number,
  jummalShaghir: number,
  dominantElement: ElementType,
  dominantPlanet: PlanetInfo,
  primaryGem: Gemstone
): QuranicPrayerSync {
  // 1. Asmaul Husna synchronization based on dominant element, planet, and Jummal value
  let asmaulHusna = {
    arabic: 'يَا فَتَّاحُ يَا رَزَّاقُ يَا بَاسِطُ',
    latin: 'Yā Fattāhu Yā Razzāqu Yā Bāsith',
    meaning: 'Wahai Dzat Yang Maha Membuka jalan kemudahan, Maha Pemberi Rezeki, dan Maha Melapangkan kehidupan',
    wiridCount: 114,
    syncReason: 'Menyelaraskan energi ketenangan bumi dan ikhtiar rezeki agar dilimpahi kelapangan yang berkah.',
  };

  if (dominantElement === 'Api') {
    asmaulHusna = {
      arabic: 'يَا عَزِيزُ يَا قَوِيُّ يَا مَتِينُ',
      latin: 'Yā \'Azīzu Yā Qawiyyu Yā Matīn',
      meaning: 'Wahai Dzat Yang Maha Perkasa, Maha Kuat, dan Maha Kokoh Kuasa-Nya',
      wiridCount: 66, // Sesuai adad ismu Jalālah (Allah)
      syncReason: `Menyelaraskan gelombang energi unsur Api (${primaryGem.indonesianName}) agar memancarkan haibah wibawa yang terlindung dan menundukkan fitnah permusuhan.`,
    };
  } else if (dominantElement === 'Air') {
    asmaulHusna = {
      arabic: 'يَا سَلَامُ يَا مُؤْمِنُ يَا لَطِيفُ',
      latin: 'Yā Salāmu Yā Mu\'minu Yā Lathīf',
      meaning: 'Wahai Dzat Yang Maha Mengaruniakan Kesejahteraan, Maha Memberi Keamanan, dan Maha Lembut',
      wiridCount: 129, // Adad Ya Latīf
      syncReason: `Mengharmoniskan karakter unsur Air dengan kesejukan mineral ${primaryGem.indonesianName} untuk melenyapkan kecemasan dan mengalirkan mahabbah (kasih sayang).`,
    };
  } else if (dominantElement === 'Udara') {
    asmaulHusna = {
      arabic: 'يَا عَلِيمُ يَا حَكِيمُ يَا خَبِيرُ',
      latin: 'Yā \'Alīmu Yā Hakīmu Yā Khabīr',
      meaning: 'Wahai Dzat Yang Maha Mengetahui, Maha Bijaksana, dan Maha Teliti Menyingkap Rahasia',
      wiridCount: 100,
      syncReason: `Mempertajam firasat kalbu, kecerdasan akal, dan kelancaran kalam yang selaras dengan resonansi udara dan naungan falak ${dominantPlanet.arabicName}.`,
    };
  } else {
    // Tanah
    asmaulHusna = {
      arabic: 'يَا فَتَّاحُ يَا رَزَّاقُ يَا غَنِيُّ',
      latin: 'Yā Fattāhu Yā Razzāqu Yā Ghaniyy',
      meaning: 'Wahai Dzat Yang Maha Membuka (pintu kebaikan), Maha Melimpahkan Rezeki, dan Maha Kaya Raya',
      wiridCount: 308, // Adad Ya Razzaq
      syncReason: `Mengokohkan pondasi rezeki, menstabilkan usaha, dan menjauhkan kefakiran seiring keteguhan mineral unsur Tanah ${primaryGem.indonesianName}.`,
    };
  }

  // Adjust wirid count slightly deterministically based on Jummal Shaghir if appropriate
  if (jummalShaghir % 2 === 1 && asmaulHusna.wiridCount === 100) {
    asmaulHusna.wiridCount = 99;
  }

  // 2. Curated Quranic Verses by 5 Specific Spiritual Focuses
  const focusedVerses: Record<SpiritualFocus, QuranicVerseItem> = {
    keseimbangan: {
      focusKey: 'keseimbangan',
      focusTitle: 'Keseimbangan Jiwa & Nur Permata',
      surahName: 'An-Nūr',
      surahNumber: 24,
      ayahNumber: '35',
      arabicText: 'اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ ۚ مَثَلُ نُورِهِ كَمِشْكَاةٍ فِيهَا مِصْبَاحٌ ۖ الْمِصْبَاحُ فِي زُجَاجَةٍ ۖ الزُّجَاجَةُ كَأَنَّهَا كَوْكَبٌ دُرِّيٌّ يُوقَدُ مِنْ شَجَرَةٍ مُبَارَكَةٍ زَيْتُونَةٍ لَا شَرْقِيَّةٍ وَلَا غَرْبِيَّةٍ يَكَادُ زَيْتُهَا يُضِيءُ وَلَوْ لَمْ تَمْسَسْهُ نَارٌ ۚ نُورٌ عَلَىٰ نُورٍ ۗ يَهْدِي اللَّهُ لِنُورِهِ مَنْ يَشَاءُ',
      transliteration: 'Allāhu nūrus-samāwāti wal-ardh, matsalu nūrihī kamisykātin fīhā mishbāh, al-mishbāhu fī zujājah, az-zujājatu ka-annahā kawkabun durriyyuy yūqadu min syajaratim mubārakatin zaytūnatin lā syarqiyyatiw wa lā gharbiyyah, yakādu zaytuhā yudhī\'u wa law lam tamsas-hu nār, nūrun \'alā nūr, yahdillāhu li-nūrihī may yasyā\'.',
      translation: 'Allah (pemberi) cahaya (kepada) langit dan bumi. Perumpamaan cahaya-Nya seperti sebuah lubang yang tidak tembus, yang di dalamnya ada pelita besar. Pelita itu di dalam tabung kaca, (dan) tabung kaca itu bagaikan bintang (yang berkilau) laksana permata mutiara, yang dinyalakan dengan minyak dari pohon yang diberkahi... Cahaya di atas cahaya! Allah memberi petunjuk menuju cahaya-Nya kepada siapa yang Dia kehendaki.',
      hikmahResonance: `Ayat Cahaya Agung ini disebut para ulama hikmah dan Al-Biruni sebagai rahasia pendaran mineral ("Kawkab Durriy"). Menyelaraskan seluruh getaran batin "${userName}" dengan spektrum kilau batu ${primaryGem.indonesianName}.`,
    },
    rezeki: {
      focusKey: 'rezeki',
      focusTitle: 'Kelapangan Rezeki & Kemudahan Usaha',
      surahName: 'Ath-Thalāq',
      surahNumber: 65,
      ayahNumber: '2-3',
      arabicText: 'وَمَنْ يَتَّقِ اللَّهَ يَجْعَلْ لَهُ مَخْرَجًا ۝ وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ ۚ وَمَنْ يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ ۚ إِنَّ اللَّهَ بَالِغُ أَمْرِهِ ۚ قَدْ جَعَلَ اللَّهُ لِكُلِّ شَيْءٍ قَدْرًا',
      transliteration: 'Wa may yattaqillāha yaj\'al lahū makhrajā, wa yarzuq-hu min haitsu lā yahtasib, wa may yatawakkal \'alallāhi fahuwa hasbuh, innallāha bālighu amrih, qad ja\'alallāhu likulli syay-in qadrā.',
      translation: '...Barangsiapa bertakwa kepada Allah niscaya Dia akan membukakan jalan keluar baginya, dan Dia memberinya rezeki dari arah yang tiada disangka-sangkanya. Dan barangsiapa bertawakal kepada Allah, niscaya Allah akan mencukupkan (keperluan)nya. Sesungguhnya Allah melaksanakan urusan-Nya. Sungguh, Allah telah mengadakan ketentuan bagi setiap sesuatu.',
      hikmahResonance: `Menghubungkan ikhtiar materiil cincin permata sebagai sarana tawakal agar Allah membukakan pintu rizki tak terduga dan mencukupkan segala hajat hidup "${userName}".`,
    },
    kewibawaan: {
      focusKey: 'kewibawaan',
      focusTitle: 'Kewibawaan, Karisma & Kemenangan',
      surahName: 'Al-Fath',
      surahNumber: 48,
      ayahNumber: '1-3',
      arabicText: 'إِنَّا فَتَحْنَا لَكَ فَتْحًا مُبِينًا ۝ لِيَغْفِرَ لَكَ اللَّهُ مَا تَقَدَّمَ مِنْ ذَنْبِكَ وَمَا تَأَخَّرَ وَيُتِمَّ نِعْمَتَهُ عَلَيْكَ وَيَهْدِيَكَ صِرَاطًا مُسْتَقِيمًا ۝ وَيَنْصُرَكَ اللَّهُ نَصْرًا عَزِيزًا',
      transliteration: 'Innā fatahnā laka fatham mubīnā, liyaghfira lakallāhu mā taqaddama min dzanbika wa mā ta-akh-khara wa yutimma ni\'matahū \'alayka wa yahdiyaka shirātham mustaqīmā, wa yanshurakallāhu nashran \'azīzā.',
      translation: 'Sungguh, Kami telah memberikan kepadamu kemenangan yang nyata, agar Allah mengampuni dosa-dosamu yang telah lalu dan yang akan datang serta menyempurnakan nikmat-Nya atasmu dan menunjukimu ke jalan yang lurus, dan agar Allah menolongmu dengan pertolongan yang perkasa.',
      hikmahResonance: `Memancarkan haibah (wibawa mulia) dan penerimaan (qabūl) di hadapan sesama manusia, melindungi dari tipu daya musuh, dan mengokohkan kepemimpinan.`,
    },
    ketenangan: {
      focusKey: 'ketenangan',
      focusTitle: 'Ketenangan Jiwa & Penawar Duka',
      surahName: 'Ar-Ra\'d',
      surahNumber: 13,
      ayahNumber: '28',
      arabicText: 'الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُمْ بِذِكْرِ اللَّهِ ۗ أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ',
      transliteration: 'Alladzīna āmanū wa tathma-innu qulūbuhum bi-dzikrillāh, alā bi-dzikrillāhi tathma-innul qulūb.',
      translation: '(Yaitu) orang-orang yang beriman dan hati mereka menjadi tenteram dengan mengingat Allah. Ingatlah, hanya dengan mengingat Allah hati menjadi tenteram.',
      hikmahResonance: `Menyerap sifat pendingin alami permata ${primaryGem.indonesianName} untuk menenangkan denyut nadi, melenyapkan was-was fikiran, serta menyembuhkan kegundahan hati.`,
    },
    perlindungan: {
      focusKey: 'perlindungan',
      focusTitle: 'Benteng Keselamatan & Tolak Bala',
      surahName: 'Al-Baqarah (Ayat Kursi)',
      surahNumber: 2,
      ayahNumber: '255',
      arabicText: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ',
      transliteration: 'Allāhu lā ilāha illā huwal hayyul qayyūm, lā ta\'khudzuhū sinatuw wa lā nawm, lahū mā fis-samāwāti wa mā fil-ardh, man dzalladzī yasyfa\'u \'indahū illā bi-idznih, ya\'lamu mā bayna aydīhim wa mā khalfahum, wa lā yuhīthūna bi-syay-im min \'ilmihī illā bimā syā\', wasi\'a kursiyyuhus samāwāti wal-ardh, wa lā ya-ūduhū hifzhuhumā, wa huwal \'aliyyul \'azhīm.',
      translation: 'Allah, tidak ada tuhan selain Dia. Yang Mahahidup, Yang terus-menerus mengurus (makhluk-Nya), tidak mengantuk dan tidak tidur. Milik-Nya apa yang ada di langit dan apa yang ada di bumi... Dan Dia Maha Tinggi, Maha Besar.',
      hikmahResonance: `Ayat pelindung tertinggi dari segala sengatan racun binatang, pandangan hasad ('ain), serta gangguan ghaib yang mengancam keselamatan raga "${userName}".`,
    },
  };

  // Determine Primary Verse based on dominant element and gemstone qualities
  let primaryVerse = focusedVerses.keseimbangan;
  if (dominantElement === 'Tanah') {
    primaryVerse = focusedVerses.rezeki;
  } else if (dominantElement === 'Api') {
    primaryVerse = focusedVerses.kewibawaan;
  } else if (dominantElement === 'Air') {
    primaryVerse = focusedVerses.ketenangan;
  } else {
    primaryVerse = focusedVerses.perlindungan;
  }

  // 3. Classical Ring Wearing Prayer (Do'a Memakai Cincin Permata)
  const wearingPrayer = {
    title: "Do'a Adab Memakai Cincin Permata",
    arabic: 'اللَّهُمَّ سَوِّمْنِي بِسِيمَاءِ الإِيمَانِ، وَتَوِّجْنِي بِتَاجِ الكَرَامَةِ، وَقِنِي شَرَّ مَا أَحْذَرُ وَأَخَافُ، وَاجْعَلْهُ عَوْنًا لِي عَلَى طَاعَتِكَ',
    transliteration: 'Allāhumma sawwimnī bi-sīmā-il īmān, wa tawwijnī bi-tāji-l karāmah, wa qinī syarra mā ahdzaru wa akhāf, waj\'alhu \'awnan lī \'alā thā\'atik.',
    translation: 'Ya Allah, tandailah diriku dengan tanda keimanan, mahkotailah aku dengan mahkota kemuliaan, peliharalah diriku dari keburukan apa yang aku khawatirkan dan takuti, serta jadikanlah ia (cincin wasilah ini) penolong bagiku dalam menunaikan ketaatan kepada-Mu.',
    sourceTradition: 'Diriwayatkan dalam kitab adab dan atsar salafush-shalih ketika menyematkan cincin berukir nama suci atau permata ke jari tangan.',
  };

  // 4. Salawat Thibbil Qulub (Penyelarasan & Keberkahan Fisik-Ruhani)
  const istighfarAndSalawat = {
    salawatArabic: 'اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ طِبِّ الْقُلُوبِ وَدَوَائِهَا، وَعَافِيَةِ الْأَبْدَانِ وَشِفَائِهَا، وَنُورِ الْأَبْصَارِ وَضِيَائِهَا، وَعَلَى آلِهِ وَصَحْبِهِ وَسَلِّمْ',
    salawatLatin: 'Allāhumma shalli \'alā sayyidinā Muhammadin thibbil qulūbi wa dawā-ihā, wa \'āfiyatil abdāni wa syifā-ihā, wa nūril abshāri wa dhiyā-ihā, wa \'alā ālihī wa shahbihī wa sallim.',
    salawatMeaning: 'Ya Allah, limpahkanlah shalawat dan salam atas junjungan kami Nabi Muhammad, sang penawar hati dan obatnya, penyehat badan dan penyembuhnya, serta cahaya mata dan kemilaunya, beserta keluarga dan para sahabatnya.',
    wiridRecommendation: 'Dibaca sebanyak 11x atau 33x saat pertama kali mengenakan cincin permata, lalu hembuskan lembut pada mata batu permata seraya memohon barakah semata dari Allah Subhanahu wa Ta\'ala.',
  };

  // 5. Recommended Wird Schedule
  const wirdSchedule = `Dianjurkan dibaca secara istiqamah pada waktu ${dominantPlanet.day} setelah shalat Subuh atau Maghrib, bertepatan dengan mengalirnya energi sa'ah falakiyah ${dominantPlanet.arabicName}.`;

  return {
    userName,
    primaryVerse,
    focusedVerses,
    asmaulHusna,
    wearingPrayer,
    istighfarAndSalawat,
    wirdSchedule,
  };
}

import { Gemstone, PlanetInfo, ZodiacBuruj } from '../types';

export const GEMSTONES_CATALOG: Gemstone[] = [
  {
    id: 'yaqut-ahmar',
    arabicName: 'الـيـاقـوت الأحـمـر',
    name: 'Yaqut Ahmar (Ruby / Delima Merah)',
    indonesianName: 'Batu Merah Delima (Ruby)',
    mineralName: 'Korundum Merah (Al₂O₃)',
    color: 'Merah Darah Merpati (Pigeon Blood Red)',
    accentHex: '#DC2626',
    imageUrl: 'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=900&q=80',
    visualTone: 'Merah Menyala Transparan',
    opticalPhenomenon: 'Kilau Adamantine & Fluoresensi Merah Kuat (Pigeon Blood)',
    specimenType: 'Kristal Korundum Facet Cut & Kasar Burma',
    bgGradient: 'from-red-950 via-rose-900 to-amber-950',
    element: 'Api',
    planet: 'Matahari (Asy-Syams)',
    specificGravity: '3.85 - 3.99 (Uji Hidrostatik Al-Biruni)',
    modernSpecificGravity: '3.99 - 4.02 g/cm³',
    hardnessMohs: '9 Mohs (Batu Paling Keras Kedua Setelah Intan)',
    alBiruniChapter: 'Bab 1: Fī Bayān Aṣnāf al-Yāqūt wa Faḍā’ilihi',
    alBiruniQuote: '“Yaqut adalah penghulu segala permata mulia. Kejernihannya tidak lekang oleh api, warnanya laksana bara yang hidup. Barangsiapa mengenakannya, ia menguatkan keteguhan hati, menjauhkan wabah (thaun), serta menghembuskan haibah (kewibawaan raja) di hadapan khalayak.”',
    therapeuticBenefits: [
      'Menstimulasi sirkulasi peredaran darah dan panas alami tubuh',
      'Meredakan rasa gentar, waswas, dan kecemasan hati',
      'Menjaga vitalitas fisik dan kehangatan jasmani'
    ],
    spiritualVirtues: [
      'Meningkatkan haibah (daya karisma kepemimpinan)',
      'Memberikan ketabahan menghadapi cobaan berat',
      'Menolak pandangan hasad dan pengaruh energi negatif'
    ],
    fortuneAspects: {
      rezeki: 'Membuka jalan kepemimpinan, kehormatan niaga, dan relasi berpengaruh.',
      kewibawaan: 'Sangat tinggi; disegani kawan dan lawan, meninggikan martabat.',
      kesehatan: 'Menguatkan daya tahan tubuh terhadap penyakit dingin dan lesu.',
      ketenangan: 'Membangkitkan keberanian tanpa tergesa-gesa.'
    },
    suitableMetals: ['Emas Murni (bagi wanita)', 'Perak Bersepuh Suasa', 'Perak Murni'],
    recommendedFinger: 'Jari Manis Tangan Kanan (Al-Binshir)',
    bestWearingDay: 'Ahad (Minggu) saat fajar merekah',
    careAdvice: 'Rendam sesekali dalam air mawar murni, lalu lap dengan kain sutra halus.'
  },
  {
    id: 'aqiq-yamani',
    arabicName: 'الـعـقـيـق الـيـمـانـي',
    name: "Aqiq Yamani (Carnelian / Akik Yaman)",
    indonesianName: 'Akik Yaman (Carnelian Merah/Kecokelatan)',
    mineralName: 'Kalsedon Silika Mikrokristalin (SiO₂)',
    color: 'Merah Hati, Jingga Api, Cokelat Madu',
    accentHex: '#EA580C',
    imageUrl: 'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?auto=format&fit=crop&w=900&q=80',
    visualTone: 'Jingga Kemerahan Tembus Sinar',
    opticalPhenomenon: 'Kilau Lilin (Waxy Lustre) & Translusensi Halus Khas Yaman',
    specimenType: 'Batu Akik Cabochon Kubah Oval Halus',
    bgGradient: 'from-orange-950 via-amber-900 to-stone-900',
    element: 'Tanah',
    planet: 'Mars (Al-Mirrīkh) & Merkurius',
    specificGravity: '2.60 (Uji Bejana Kerucut Al-Biruni)',
    modernSpecificGravity: '2.59 - 2.64 g/cm³',
    hardnessMohs: '6.5 - 7 Mohs',
    alBiruniChapter: 'Bab 5: Fī al-’Aqīq wa Ma’ādinihi fī al-Yaman wa Khasā’isihi',
    alBiruniQuote: '“Batu yang paling mulia dalam sunnah para nabi adalah al-Aqiq dari tanah Yaman. Al-Biruni mencatat bahwa ia dingin di lidah, menyejukkan amarah darah, dan diriwayatkan cincin berbatukan akik menepis kepapaan serta mendatangkan ketenteraman batin.”',
    therapeuticBenefits: [
      'Menstabilkan denyut nadi dan menenangkan lambung',
      'Menyejukkan inflamasi gusi dan rongga mulut jika disentuhkan',
      'Menstabilkan emosi yang meledak-ledak'
    ],
    spiritualVirtues: [
      'Batu sunnah penuh berkah pembawa keselamatan dan kemudahan urusan',
      'Menangkal kepicikan rezeki dan kerugian berniaga',
      'Membentengi dari sihir dan gangguan malam'
    ],
    fortuneAspects: {
      rezeki: 'Aliran berkah yang stabil, perlindungan dari kebangkrutan tak terduga.',
      kewibawaan: 'Kewibawaan bersahaja, dicintai keluarga dan rekan kerja.',
      kesehatan: 'Pencernaan stabil dan daya tahan urat syaraf terpelihara.',
      ketenangan: 'Sangat menyejukkan pikiran dari beban hutang dan kegelisahan.'
    },
    suitableMetals: ['Perak Murni (Sangat dianjurkan sesuai Sunnah)'],
    recommendedFinger: 'Kelingking Tangan Kanan (Al-Khinsir)',
    bestWearingDay: 'Selasa atau Kamis pagi',
    careAdvice: 'Cuci dengan air bersih mengalir dan baluri sedikit minyak zaitun murni.'
  },
  {
    id: 'zumurrud',
    arabicName: 'الـزمـرّد',
    name: 'Zumurrud (Emerald / Zamrud)',
    indonesianName: 'Batu Zamrud Hijau',
    mineralName: 'Beril Kromium (Be₃Al₂Si₆O₁₈:Cr)',
    color: 'Hijau Zamrud Segar (Vivid Emerald Green)',
    accentHex: '#059669',
    imageUrl: 'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=900&q=80',
    visualTone: 'Hijau Hutan Sejuk Berkilau',
    opticalPhenomenon: 'Kilau Kaca (Vitreous) dengan Inklusi Alami Serat Taman (Jardin)',
    specimenType: 'Kristal Heksagonal Alami & Emerald Cut Segi',
    bgGradient: 'from-emerald-950 via-teal-900 to-stone-950',
    element: 'Air',
    planet: 'Merkurius (Utārid) & Venus (Az-Zuhrah)',
    specificGravity: '2.73 (Pengukuran Al-Biruni presisi tinggi)',
    modernSpecificGravity: '2.68 - 2.78 g/cm³',
    hardnessMohs: '7.5 - 8 Mohs',
    alBiruniChapter: 'Bab 2: Fī al-Zumurrud wa Ashbāhihi wa Manāfi’ihi',
    alBiruniQuote: '“Memandang hijau zamrud menjernihkan pandangan mata yang lelah dan menyinari ruhani. Al-Biruni mengutip bahwa ia adalah penawar racun berbisa, penenang sawan dan penyakit saraf, serta menguatkan daya hapal dan kejernihan logika seorang cendekia.”',
    therapeuticBenefits: [
      'Menyegarkan mata lelah dan menyejukkan saraf optik saat dipandang',
      'Meredakan demam dalam dan mendinginkan radang empedu',
      'Meningkatkan daya konsentrasi dan memori belajar'
    ],
    spiritualVirtues: [
      'Mendatangkan ilham kecerdasan, kefasihan berucap, dan hikmah',
      'Menetralisir racun batiniah, kedengkian, dan fitnah keji',
      'Membawa kesuburan ide dan pertumbuhan kekayaan yang berkah'
    ],
    fortuneAspects: {
      rezeki: 'Kelancaran usaha intelektual, perdagangan, dan negosiasi.',
      kewibawaan: 'Wibawa intelektual, dihargai karena perkataan yang berbobot.',
      kesehatan: 'Kesehatan mata prima, syaraf rileks, tidur pulas.',
      ketenangan: 'Rasa damai alami laksana menatap rimbunnya dedaunan surga.'
    },
    suitableMetals: ['Perak Berukir', 'Emas Putih / Suasa'],
    recommendedFinger: 'Kelingking Tangan Kiri atau Jari Manis Tangan Kanan',
    bestWearingDay: 'Rabu pagi saat matahari meninggi',
    careAdvice: 'Jauhkan dari benturan keras dan panas ekstrem, bersihkan dengan minyak cedar halus.'
  },
  {
    id: 'fairuzaj',
    arabicName: 'الـفـيـروزج',
    name: 'Fairuzaj (Turquoise / Batu Pirus Neyshabur)',
    indonesianName: 'Batu Pirus (Turquoise)',
    mineralName: 'Fosfat Tembaga & Aluminium Berair',
    color: 'Biru Langit Persia (Robin Egg Blue) ke Toska',
    accentHex: '#0891B2',
    imageUrl: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=900&q=80',
    visualTone: 'Biru Toska Langit Neyshabur',
    opticalPhenomenon: 'Kilau Porselen Halus dengan Matriks Jaring Laba-laba Alami',
    specimenType: 'Pirus Neyshabur Cabochon Kubah Halus',
    bgGradient: 'from-cyan-950 via-teal-900 to-sky-950',
    element: 'Udara',
    planet: 'Venus (Az-Zuhrah) & Yupiter (Al-Musytarī)',
    specificGravity: '2.62 (Al-Biruni mencatat tambang Khorasan)',
    modernSpecificGravity: '2.60 - 2.85 g/cm³',
    hardnessMohs: '5.5 - 6 Mohs',
    alBiruniChapter: 'Bab 4: Fī al-Fayrūzaj wa Ma’dini Naysābūr wa Khowāṣihi',
    alBiruniQuote: '“Fairuzaj berasal dari kata Piroz yang bermakna Kemenangan. Al-Biruni mencatat kebiasaan para panglima memakai pirus sebelum berangkat perang agar selamat dari mara bahaya, kebal terhadap kecelakaan tunggangan, serta memperkuat pandangan bola mata saat memandang fajar.”',
    therapeuticBenefits: [
      'Menenangkan ketegangan urat leher dan pundak',
      'Meringankan gangguan pernapasan dan paru-paru',
      'Menjaga kejernihan penglihatan dari kabut mata'
    ],
    spiritualVirtues: [
      'Pertanda kemenangan dalam urusan pelik dan perkara sengketa',
      'Proteksi musafir dari kecelakaan perjalanan dan mara bahaya mendadak',
      'Menolak tatapan dengki (ain) dan menjaga kemurnian niat'
    ],
    fortuneAspects: {
      rezeki: 'Kesuksesan dalam perjalanan usaha, kemudahan lobi dan relasi baru.',
      kewibawaan: 'Karisma hangat yang disenangi kawan dan melunakkan hati penentang.',
      kesehatan: 'Kebugaran fisik selama safar dan daya adaptasi iklim.',
      ketenangan: 'Ketenangan batin menghadapi gejolak perubahan hidup.'
    },
    suitableMetals: ['Perak Murni'],
    recommendedFinger: 'Jari Manis Tangan Kanan',
    bestWearingDay: 'Jum’at saat pagi hari',
    careAdvice: 'Hindarkan dari deterjen, minyak wangi kimiawi, dan asam yang bisa mengubah warnanya.'
  },
  {
    id: 'almas',
    arabicName: 'الـمـاس',
    name: 'Almas (Diamond / Berlian Intan)',
    indonesianName: 'Batu Intan / Berlian',
    mineralName: 'Karbon Kristal Murni (C)',
    color: 'Bening Berpendar Gemerlap Cahaya Pelangi',
    accentHex: '#38BDF8',
    imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80',
    visualTone: 'Bening Kristal Kilau Prisma',
    opticalPhenomenon: 'Dispersi Prisma Spektrum Pelangi & Kilau Adamantine Maksimal',
    specimenType: 'Intan Alami Facet Cut Brilliant Segi Banyak',
    bgGradient: 'from-slate-900 via-sky-950 to-neutral-900',
    element: 'Api',
    planet: 'Venus (Az-Zuhrah) & Matahari',
    specificGravity: '3.52 (Diukur Al-Biruni dengan teliti)',
    modernSpecificGravity: '3.51 - 3.53 g/cm³',
    hardnessMohs: '10 Mohs (Paling Keras di Jagat Raya)',
    alBiruniChapter: 'Bab 3: Fī al-Almās wa Qiwam Qat’ihi li Jamī’i al-Ahjār',
    alBiruniQuote: '“Almas menaklukkan dan membelah segala jenis batu keras, namun tiada benda yang mampu menggoresnya kecuali timbal pekat. Al-Biruni melukiskan intan sebagai lambang ketegaran tekad, pemenang dalam kancah pertempuran, dan penangkal racun serta musuh yang licik.”',
    therapeuticBenefits: [
      'Menajamkan fokus kognitif dan kecerdasan analitis',
      'Memperkuat sistem imunologis dan regenerasi sel',
      'Menolak keputusasaan mental dan kelesuan batin'
    ],
    spiritualVirtues: [
      'Ketajaman intuisi dan keteguhan prinsip tak tergoyahkan',
      'Kemenangan mutlak atas musuh dan kompetisi sengit',
      'Cahaya kemuliaan batin yang menepis keraguan diri'
    ],
    fortuneAspects: {
      rezeki: 'Kemajuan karier spektakuler, kepemilikan aset bernilai tinggi.',
      kewibawaan: 'Kewibawaan tak terbantahkan, keputusan disegani.',
      kesehatan: 'Vitalitas mental tajam dan metabolisme prima.',
      ketenangan: 'Fokus baja yang tidak goyah oleh caci maki atau pujian.'
    },
    suitableMetals: ['Platina', 'Emas Putih', 'Perak Tebal'],
    recommendedFinger: 'Jari Manis Tangan Kanan',
    bestWearingDay: 'Ahad atau Jum’at',
    careAdvice: 'Bersihkan secara berkala dari minyak alami kulit dengan air hangat berbusa sabun lembut.'
  },
  {
    id: 'lulu',
    arabicName: 'الـلـؤلـؤ',
    name: 'Lu’lu’ (Natural Pearl / Mutiara Laut Alami)',
    indonesianName: 'Mutiara Laut Asli',
    mineralName: 'Kalsium Karbonat & Konkiolin Organik',
    color: 'Putih Kemilau Lembut Berpendar Sutra (Iridescent White)',
    accentHex: '#E2E8F0',
    imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80',
    visualTone: 'Putih Mutiara Berpendar Lembut',
    opticalPhenomenon: 'Pendaran Sutra Halus Alami & Lapisan Nacre Lembut (Orient)',
    specimenType: 'Mutiara Laut Alami Bulat Sempurna (Durr Maknun)',
    bgGradient: 'from-slate-900 via-zinc-800 to-blue-950',
    element: 'Air',
    planet: 'Bulan (Al-Qamar)',
    specificGravity: '2.62 - 2.75 (Timbangan Al-Biruni dari Teluk Oman)',
    modernSpecificGravity: '2.60 - 2.78 g/cm³',
    hardnessMohs: '2.5 - 4.5 Mohs',
    alBiruniChapter: 'Bab 6: Fī al-Durr wa al-Lu’lu’ wa Kayfiyyat Takawwunihi fī al-Aṣdāf',
    alBiruniQuote: '“Mutiara adalah anugerah laut yang tenang. Al-Biruni menuliskan mutiara mengobati debaran jantung (khafaqan), menyejukkan amarah darah, menghalau kesedihan melankolis, serta memancarkan keanggunan budi pekerti yang santun.”',
    therapeuticBenefits: [
      'Meredakan debar jantung yang tak beraturan (palpitasi)',
      'Menyeimbangkan cairan tubuh dan mendinginkan temperamen panas',
      'Merawat kehalusan kulit dan pancaran wajah'
    ],
    spiritualVirtues: [
      'Ketulusan jiwa, kemurnian niat, dan kejernihan nurani',
      'Mendatangkan ketenteraman dalam bahtera rumah tangga',
      'Menepis mimpi buruk dan bisikan kegelisahan'
    ],
    fortuneAspects: {
      rezeki: 'Rezeki tenteram tanpa hiruk-pikuk, berkah berkelanjutan.',
      kewibawaan: 'Karisma lembut yang menawan hati dan menenangkan situasi tegang.',
      kesehatan: 'Kestabilan emosional, tidur nyenyak, tekanan darah seimbang.',
      ketenangan: 'Tingkat ketenangan tertinggi di antara segala permata laut.'
    },
    suitableMetals: ['Perak Murni'],
    recommendedFinger: 'Kelingking Tangan Kiri atau Kanan',
    bestWearingDay: 'Senin malam atau fajar hari Senin',
    careAdvice: 'Jangan terkena parfum atau bahan asam keras; simpan terpisah di kotak berlapis beludru.'
  },
  {
    id: 'yaqut-azraq',
    arabicName: 'الـيـاقـوت الأزرق (السافير)',
    name: 'Yaqut Azraq (Blue Sapphire / Safir Nilam)',
    indonesianName: 'Batu Safir Nilam Biru',
    mineralName: 'Korundum Biru (Al₂O₃:Fe,Ti)',
    color: 'Biru Samudra Dalam Berpendar Royal Blue',
    accentHex: '#2563EB',
    imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=900&q=80',
    visualTone: 'Biru Nilam Samudra Pekat',
    opticalPhenomenon: 'Pleokroisme Kuat Biru Royal ke Biru Kehijauan & Kilau Kaca Terang',
    specimenType: 'Kristal Safir Nilam Ceylon Facet Cushion Cut',
    bgGradient: 'from-blue-950 via-indigo-950 to-slate-950',
    element: 'Udara',
    planet: 'Saturnus (Zuhal) & Yupiter',
    specificGravity: '3.98 (Uji Bejana Hidrostatik Al-Biruni)',
    modernSpecificGravity: '3.99 - 4.02 g/cm³',
    hardnessMohs: '9 Mohs',
    alBiruniChapter: 'Bab 1 Bagian II: Fī al-Yāqūt al-Azraq al-Kuhliyy',
    alBiruniQuote: '“Yaqut biru mencerminkan keluhuran langit tertinggi. Al-Biruni menguraikan bahwa permata ini melatih kesabaran seorang musafir ilmu, menajamkan firasat kebenaran, menundukkan syahwat berlebih, dan melindungi pemiliknya dari tipu muslihat kawan munafik.”',
    therapeuticBenefits: [
      'Meredakan insomnia kronis dan menyegarkan sel saraf otak',
      'Meredakan radang tenggorokan dan sistem pernapasan',
      'Mengurangi tekanan darah akibat ketegangan mental berlebih'
    ],
    spiritualVirtues: [
      'Ketajaman pandangan batin (bashirah) dan kebijaksanaan mendalam',
      'Perlindungan dari pengkhianatan dan konspirasi tersembunyi',
      'Ketenangan kontemplatif saat tafakkur dan beribadah'
    ],
    fortuneAspects: {
      rezeki: 'Kesuksesan dalam urusan hukum, akademik, pemerintahan, dan riset.',
      kewibawaan: 'Wibawa agung yang disegani dan dipercaya memegang amanah besar.',
      kesehatan: 'Ketahanan saraf dan kejernihan pikiran jangka panjang.',
      ketenangan: 'Ketenangan hening yang tak mudah digoncang provokasi.'
    },
    suitableMetals: ['Perak Murni', 'Emas Putih'],
    recommendedFinger: 'Jari Tengah (Al-Wusṭhā) atau Jari Manis',
    bestWearingDay: 'Sabtu pagi atau Kamis senja',
    careAdvice: 'Cuci dengan air bersih hangat dan seka dengan kain lembut kering.'
  },
  {
    id: 'yaqut-asfar',
    arabicName: 'الـيـاقـوت الأصـفـر',
    name: 'Yaqut Asfar (Yellow Sapphire / Safir Kuning)',
    indonesianName: 'Batu Safir Kuning (Yakut Kuning)',
    mineralName: 'Korundum Kuning Keemasan (Al₂O₃:Fe)',
    color: 'Kuning Madu Keemasan Bercahaya Cemerlang',
    accentHex: '#CA8A04',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=80',
    visualTone: 'Kuning Keemasan Madu Bening',
    opticalPhenomenon: 'Kilau Api Keemasan Gemerlap & Kejernihan Kristal Prima',
    specimenType: 'Korundum Kuning Sailan Fancy Cut Oval',
    bgGradient: 'from-yellow-950 via-amber-900 to-stone-900',
    element: 'Api',
    planet: 'Yupiter (Al-Musytarī)',
    specificGravity: '3.99 (Kerapatan korundum Al-Biruni)',
    modernSpecificGravity: '3.98 - 4.01 g/cm³',
    hardnessMohs: '9 Mohs',
    alBiruniChapter: 'Bab 1 Bagian III: Fī al-Yāqūt al-Aṣfar al-Mishmasiyy',
    alBiruniQuote: '“Yaqut kuning adalah batu kemakmuran dan keberuntungan para hakim dan ulama. Al-Biruni meriwayatkan ia membawa berkah kelapangan rezeki, menolak kesempitan hidup, mempermudah pemahaman ilmu-ilmu yang rumit, serta membangkitkan kedermawanan hati.”',
    therapeuticBenefits: [
      'Menyeimbangkan fungsi hati, empedu, dan limpa',
      'Meningkatkan keceriaan batin dan optimisme berpikir',
      'Membantu penyerapan nutrisi makanan pada tubuh'
    ],
    spiritualVirtues: [
      'Mendatangkan kemakmuran finansial dan perluasan rezeki berkah',
      'Kemudahan menuntut ilmu agama dan sains hikmah',
      'Menjauhkan kecemasan akan masa depan'
    ],
    fortuneAspects: {
      rezeki: 'Sangat cemerlang; pintu perniagaan terbuka luas, rezeki mengalir lancar.',
      kewibawaan: 'Karisma bijaksana yang dituakan dan dimintai pertimbangan.',
      kesehatan: 'Pencernaan lancar, vitalitas cerah, metabolisme seimbang.',
      ketenangan: 'Hati lapang dipenuhi prasangka baik dan optimisme.'
    },
    suitableMetals: ['Perak Bersepuh Kuning', 'Emas (untuk wanita)', 'Perak Murni'],
    recommendedFinger: 'Jari Telunjuk (As-Sabbābah) atau Jari Manis Tangan Kanan',
    bestWearingDay: 'Kamis pagi',
    careAdvice: 'Bilas dengan air mawar dan jemur sebentar di bawah sinar mentari pagi.'
  },
  {
    id: 'zabarjad',
    arabicName: 'الـزبـرجـد',
    name: 'Zabarjad (Peridot / Krisolit Hijau Emas)',
    indonesianName: 'Batu Zabarjad / Peridot',
    mineralName: 'Silikat Magnesium Besi (Mg,Fe)₂SiO₄',
    color: 'Hijau Zaitun Keemasan Berseri (Olive Golden Green)',
    accentHex: '#65A30D',
    imageUrl: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=900&q=80',
    visualTone: 'Hijau Zaitun Muda Berpendar Emas',
    opticalPhenomenon: 'Pembiasan Ganda Kuat (Birefringence) & Kilau Lemak Alami',
    specimenType: 'Kristal Olivin Pulau Zabargad Laut Merah',
    bgGradient: 'from-lime-950 via-emerald-950 to-stone-950',
    element: 'Tanah',
    planet: 'Matahari & Merkurius',
    specificGravity: '3.34 (Diuji Al-Biruni dari Pulau Zabargad Laut Merah)',
    modernSpecificGravity: '3.32 - 3.40 g/cm³',
    hardnessMohs: '6.5 - 7 Mohs',
    alBiruniChapter: 'Bab 2 Bagian II: Fī al-Zabarjad wa Furuqihi ’an al-Zumurrud',
    alBiruniQuote: '“Batu yang lahir dari pulau Laut Merah, berkilau di kegelapan malam laksana lentera. Al-Biruni menegaskan Zabarjad mengusir kegundahan jiwa, melenyapkan igauan dan rasa takut waktu malam, serta meneguhkan kesetiaan persahabatan sejati.”',
    therapeuticBenefits: [
      'Meredakan sesak napas akibat kecemasan dan stres',
      'Membersihkan energi toksik pada organ hati dan pankreas',
      'Menghilangkan kebiasaan mengigau dan insomnia'
    ],
    spiritualVirtues: [
      'Pelindung dari mimpi buruk dan rasa waswas yang tak berdasar',
      'Membangkitkan rasa syukur dan kelapangan dada',
      'Menjaga kerukunan persaudaraan dan pergaulan mulia'
    ],
    fortuneAspects: {
      rezeki: 'Kemudahan mendapatkan peluang usaha baru tanpa persaingan kotor.',
      kewibawaan: 'Sikap bersahabat yang menumbuhkan rasa percaya orang lain.',
      kesehatan: 'Peredaran napas plong, liver segar, tidur lelap.',
      ketenangan: 'Hati sejuk, bebas dari rasa iri dengki terhadap nikmat orang lain.'
    },
    suitableMetals: ['Perak Murni'],
    recommendedFinger: 'Jari Manis Tangan Kanan',
    bestWearingDay: 'Ahad atau Rabu pagi',
    careAdvice: 'Hindari larutan asam cuka atau pembersih keras, lap dengan kain flanel lembut.'
  },
  {
    id: 'lajiward',
    arabicName: 'الـلازورد (اللابيس)',
    name: 'Lajiward (Lapis Lazuli / Batu Lazurit Badakhshan)',
    indonesianName: 'Batu Lapis Lazuli Badakhshan',
    mineralName: 'Lazurit Kompleks dengan Pirit Emas (Na₈Al₆Si₆O₂₄Sₙ)',
    color: 'Biru Pekat Berbintik Emas Pirit Laksana Bintang Malam',
    accentHex: '#1D4ED8',
    imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=900&q=80',
    visualTone: 'Biru Malam Berbintik Emas Pirit',
    opticalPhenomenon: 'Matriks Lazurit Biru Pekat Bertabur Bintik Logam Pirit Emas',
    specimenType: 'Batu Lapis Asli Lembah Sar-e-Sang Badakhshan',
    bgGradient: 'from-indigo-950 via-blue-950 to-slate-950',
    element: 'Air',
    planet: 'Yupiter & Saturnus',
    specificGravity: '2.80 (Al-Biruni menganalisis batu Badakhshan)',
    modernSpecificGravity: '2.70 - 2.90 g/cm³',
    hardnessMohs: '5 - 5.5 Mohs',
    alBiruniChapter: 'Bab 7: Fī al-Lājiward wa Ma’ādinihi fī Badakhshān',
    alBiruniQuote: '“Lājiward laksana hamparan langit malam bertabur bintang pirit keemasan. Al-Biruni mencatat khasiatnya yang masyhur dalam kitab kedokteran kuno: mengikis kesedihan kronis, menguatkan kelopak mata, dan menuntun batin meraih rahasia-rahasia hikmah ketuhanan.”',
    therapeuticBenefits: [
      'Meringankan migrain, sakit kepala sebelah, dan ketegangan otak',
      'Menguatkan otot mata dan penglihatan yang rabun',
      'Menyembuhkan perasaan duka mendalam dan melankolia'
    ],
    spiritualVirtues: [
      'Membuka pemahaman metafisik, tadabbur alam, dan intuisi tajam',
      'Menjaga kebenaran kata dan keberanian menyatakan kejujuran',
      'Membentengi pikiran dari bisikan jahat dan kebingungan batin'
    ],
    fortuneAspects: {
      rezeki: 'Sukses di bidang penulisan, dakwah, keilmuan, dan mediasi diplomasi.',
      kewibawaan: 'Kharisma berwawasan luas yang dihormati di forum musyawarah.',
      kesehatan: 'Meredakan kepenatan syaraf kepala dan ketegangan indera pendengaran.',
      ketenangan: 'Ketenangan kontemplatif nan dalam laksana lautan hening.'
    },
    suitableMetals: ['Perak Murni'],
    recommendedFinger: 'Jari Manis atau Jari Tengah Tangan Kiri',
    bestWearingDay: 'Kamis malam menjelang Jum’at',
    careAdvice: 'Jangan direndam terlalu lama dalam air; cukup diseka kain katun basah lalu dikeringkan.'
  },
  {
    id: 'kahruba',
    arabicName: 'الـكـهـرمـان (الكهربا)',
    name: 'Kahruba (Amber / Ambar Fosil Getah Pohon Purba)',
    indonesianName: 'Batu Ambar Kuning Keemasan',
    mineralName: 'Resin Fosil Terpolimerisasi (C₁₀H₁₆O)',
    color: 'Kuning Madu Hangat Tembus Cahaya',
    accentHex: '#D97706',
    imageUrl: 'https://images.unsplash.com/photo-1508247967583-7d982ea01526?auto=format&fit=crop&w=900&q=80',
    visualTone: 'Kuning Madu Bening Tembus Cahaya',
    opticalPhenomenon: 'Transparansi Resin Hangat & Muatan Listrik Statis Penarik Jerami',
    specimenType: 'Getah Purba Fosil Tembus Pandang Laut Baltik',
    bgGradient: 'from-amber-950 via-yellow-950 to-orange-950',
    element: 'Udara',
    planet: 'Matahari (Asy-Syams)',
    specificGravity: '1.08 (Al-Biruni meneliti daya apung di air garam)',
    modernSpecificGravity: '1.05 - 1.10 g/cm³ (Sangat ringan)',
    hardnessMohs: '2 - 2.5 Mohs',
    alBiruniChapter: 'Bab 8: Fī al-Kahrubā wa Jadhbihi li al-Qashsh (Daya Tarik Listrik Alami)',
    alBiruniQuote: '“Kahruba dinamai oleh bangsa Persia karena sifatnya menarik jerami kering ketika digosokkan. Al-Biruni mendokumentasikan keajaiban ini secara ilmiah, seraya menyatakan bahwa aromanya yang hangat menyejukkan dada yang sesak dan mengusir demam serta racun dalam tubuh.”',
    therapeuticBenefits: [
      'Meredakan radang sendi dan rematik lewat kehangatan statis alaminya',
      'Menyejukkan pernapasan dan kelenjar tiroid',
      'Mengurangi rasa sakit gigi dan tenggorokan jika dikenakan di leher'
    ],
    spiritualVirtues: [
      'Menyerap energi negatif dari lingkungan sekitar dan mengubahnya menjadi kehangatan',
      'Membawa suasana ceria, ramah tamah, dan kelapangan pergaulan',
      'Perlindungan bagi anak-anak dan orang tua dari rasa kedinginan batin'
    ],
    fortuneAspects: {
      rezeki: 'Daya tarik dagang yang memikat pelanggan secara ramah dan bersahabat.',
      kewibawaan: 'Kewibawaan yang bersahabat dan penuh rasa aman bagi orang lain.',
      kesehatan: 'Kehangatan persendian terjaga, terhindar dari linu angin dingin.',
      ketenangan: 'Aroma dan sentuhannya yang hangat meluruhkan ketegangan hari.'
    },
    suitableMetals: ['Perak Berukir', 'Kuningan / Suasa'],
    recommendedFinger: 'Jari Telunjuk atau Jari Manis Tangan Kanan',
    bestWearingDay: 'Ahad pagi',
    careAdvice: 'Gosok perlahan dengan kain wol kering untuk membangkitkan kilau dan daya tariknya.'
  },
  {
    id: 'bajjadi',
    arabicName: 'الـبـجـادي (العقيق الأحمر/الغرانيت)',
    name: 'Bajjadi (Garnet / Biduri Delima Kemerahan)',
    indonesianName: 'Batu Garnet (Biduri Delima)',
    mineralName: 'Silikat Kompleks Almandin-Pirop (Fe₃Al₂Si₃O₁₂)',
    color: 'Merah Anggur Gelap Berpendar Membara',
    accentHex: '#991B1B',
    imageUrl: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80',
    visualTone: 'Merah Marun Anggur Membara',
    opticalPhenomenon: 'Kilau Kaca Pekat dengan Pendaran Merah Api Saat Disorot Senter',
    specimenType: 'Kristal Garnet Dodekahedron Almandin',
    bgGradient: 'from-rose-950 via-red-950 to-stone-950',
    element: 'Api',
    planet: 'Mars (Al-Mirrīkh)',
    specificGravity: '3.90 (Al-Biruni membedakannya dari Yaqut)',
    modernSpecificGravity: '3.85 - 4.20 g/cm³',
    hardnessMohs: '7 - 7.5 Mohs',
    alBiruniChapter: 'Bab 1 Bagian IV: Fī al-Bajjādī wa Shibhuhu bi al-Yāqūt',
    alBiruniQuote: '“Bajjadi memiliki kemiripan warna dengan Yaqut namun Al-Biruni membuktikan perbedaannya lewat timbangan bejana kerucut. Khasiatnya menyalakan semangat keberanian di medan juang, membakar rasa malas, dan memperteguh kesetiaan sumpah janji setia.”',
    therapeuticBenefits: [
      'Meningkatkan pembentukan sel darah merah dan stamina fisik',
      'Menghangatkan tubuh yang sering menggigil kedinginan',
      'Membangkitkan daya tahan otot dan vitalitas prima'
    ],
    spiritualVirtues: [
      'Membangkitkan tekad pantang menyerah dalam mewujudkan cita-cita besar',
      'Benteng perlindungan dari serangan mental dan pesimisme',
      'Menguatkan loyalitas dalam persahabatan dan ikatan kerja'
    ],
    fortuneAspects: {
      rezeki: 'Hasil nyata dari kerja keras dan keuletan tanpa lelah.',
      kewibawaan: 'Kharisma prajurit yang tegas, berani mengambil risiko terukur.',
      kesehatan: 'Darah lancar, stamina prima, fisik tahan banting.',
      ketenangan: 'Ketenangan berbasis kesiapan menghadapi segala rintangan.'
    },
    suitableMetals: ['Perak Murni', 'Besi Putih'],
    recommendedFinger: 'Jari Manis atau Jari Tengah Tangan Kanan',
    bestWearingDay: 'Selasa pagi',
    careAdvice: 'Cuci dengan air bersih dan keringkan di bawah angin sejuk.'
  },
  {
    id: 'billawr',
    arabicName: 'الـبـلـور (الكوارتز النقي)',
    name: 'Billawr (Clear Rock Crystal Quartz / Kristal Es Alami)',
    indonesianName: 'Batu Kuarsa Bening (Kristal Es)',
    mineralName: 'Silika Dioksida Kristalin Murni (SiO₂)',
    color: 'Bening Tembus Pandang Laksana Air Mata Air Beku',
    accentHex: '#0284C7',
    imageUrl: 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?auto=format&fit=crop&w=900&q=80',
    visualTone: 'Bening Kristal Transparan Sejuk',
    opticalPhenomenon: 'Kejernihan Sebening Es Gunung & Efek Pembiasan Lensa Alami',
    specimenType: 'Kristal Prisma Heksagonal Alami Berujung Ganda',
    bgGradient: 'from-sky-950 via-slate-900 to-zinc-950',
    element: 'Air',
    planet: 'Bulan (Al-Qamar) & Venus',
    specificGravity: '2.65 (Pengukuran presisi Al-Biruni)',
    modernSpecificGravity: '2.65 g/cm³',
    hardnessMohs: '7 Mohs',
    alBiruniChapter: 'Bab 9: Fī al-Billawr wa al-Zujāj wa Farq Ma Baynahuma',
    alBiruniQuote: '“Billawr adalah keajaiban kristal yang lahir dari dinginnya pegunungan tinggi. Al-Biruni menerangkan bahwa jika diletakkan di bawah sinar mentari, ia mampu memfokuskan cahaya hingga membakar kain tipis. Ia menyejukkan dahaga, membersihkan pikiran dari kabut syubhat, dan menolak kebohongan.”',
    therapeuticBenefits: [
      'Mendinginkan suhu tubuh tinggi saat terkena demam',
      'Meredakan rasa haus yang menyiksa dan menstabilkan kelenjar saliva',
      'Menghilangkan kepenatan mental dan mengembalikan kejernihan otak'
    ],
    spiritualVirtues: [
      'Pembersih aura batin dari kekeruhan dosa dan prasangka buruk',
      'Memperkuat kejernihan niat ibadah dan keikhlasan beramal',
      'Membentengi diri dari ilusi tipu daya duniawi'
    ],
    fortuneAspects: {
      rezeki: 'Rezeki yang halal, bersih dari syubhat, dan membawa ketenteraman batin.',
      kewibawaan: 'Kewibawaan orang jujur yang disegani karena kebenaran sikapnya.',
      kesehatan: 'Suhu tubuh seimbang, terhindar dari panas dalam menahun.',
      ketenangan: 'Ketenangan mutlak seperti cermin air yang jernih tak beriak.'
    },
    suitableMetals: ['Perak Murni'],
    recommendedFinger: 'Kelingking Tangan Kiri atau Jari Manis',
    bestWearingDay: 'Senin pagi',
    careAdvice: 'Bilas dengan air mata air pegunungan dan jemur di bawah sinar rembulan purnama.'
  },
  {
    id: 'ain-al-hirr',
    arabicName: 'عـيـن الـهـرّ',
    name: "Ain al-Hirr (Cat's Eye Chrysoberyl / Batu Mata Kucing)",
    indonesianName: 'Batu Mata Kucing (Chrysoberyl)',
    mineralName: 'Krioberil Berfenomena Chatoyancy (BeAl₂O₄)',
    color: 'Kuning Kehijauan Bergaris Cahaya Putih Membelah Lurus',
    accentHex: '#84CC16',
    imageUrl: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80',
    visualTone: 'Kuning Zaitun Bergaris Garis Tajam',
    opticalPhenomenon: 'Efek Chatoyancy Tajam: Garis Sinar Putih Berpendar Membelah Permukaan',
    specimenType: 'Chrysoberyl Cabochon Madu Susu (Milk & Honey Effect)',
    bgGradient: 'from-stone-950 via-neutral-900 to-lime-950',
    element: 'Tanah',
    planet: 'Ketuk (Simpul Selatan) & Saturnus',
    specificGravity: '3.71 (Dicatat Al-Biruni dari pulau Sailan/Sri Lanka)',
    modernSpecificGravity: '3.70 - 3.75 g/cm³',
    hardnessMohs: '8.5 Mohs',
    alBiruniChapter: 'Bab 10: Fī ’Ain al-Hirr wa Shu’ā’ihi al-Mutaḥarrik',
    alBiruniQuote: '“Dinamakan Ain al-Hirr karena memiliki garis cahaya berpendar yang bergerak mengikuti tatapan mata layaknya mata kucing di kegelapan. Al-Biruni mengagumi fenomena optiknya dan mencatat kepercayaan para saudagar bahwa batu ini melindungi simpanan harta dari pencurian dan tipuan licik.”',
    therapeuticBenefits: [
      'Menajamkan refleks indera dan koordinasi motorik',
      'Membantu menstabilkan gangguan penglihatan malam (rabun senja)',
      'Mengurangi rasa nyeri mendadak pada persendian'
    ],
    spiritualVirtues: [
      'Menyingkap tipu daya musuh yang bersembunyi di balik topeng kawan',
      'Perlindungan dari kerugian investasi mendadak dan penggelapan harta',
      'Menajamkan insting firasat terhadap bahaya yang belum nampak'
    ],
    fortuneAspects: {
      rezeki: 'Perlindungan ketat atas kekayaan yang telah diraih, aman dari pencurian.',
      kewibawaan: 'Tatapan tajam yang membuat orang berniat buruk gentar.',
      kesehatan: 'Ketahanan saraf indera dan penglihatan waspada.',
      ketenangan: 'Rasa aman karena dilindungi oleh insting kewaspadaan yang tinggi.'
    },
    suitableMetals: ['Perak Tebal'],
    recommendedFinger: 'Jari Tengah atau Jari Kelingking Tangan Kanan',
    bestWearingDay: 'Sabtu atau Selasa senja',
    careAdvice: 'Hindari benturan keras pada tepi garis mata, simpan terpisah dari batu lainnya.'
  },
  {
    id: 'marjan',
    arabicName: 'الـمـرجـان',
    name: 'Marjan (Red Coral / Karang Merah Laut Tengah)',
    indonesianName: 'Batu Karang Marjan Merah',
    mineralName: 'Karbonat Kalsium Kerangka Organik (Corallium rubrum)',
    color: 'Merah Koral Menyala Segar',
    accentHex: '#F43F5E',
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=80',
    visualTone: 'Merah Karang Laut Alami',
    opticalPhenomenon: 'Kilau Lilin Porselen Alami dengan Tekstur Struktur Karang Laut',
    specimenType: 'Batu Marjan Laut Maghribi Cabochon Halus',
    bgGradient: 'from-rose-950 via-red-900 to-stone-900',
    element: 'Air',
    planet: 'Mars (Al-Mirrīkh) & Bulan',
    specificGravity: '2.68 (Al-Biruni menganalisis hasil selaman Laut Maghribi)',
    modernSpecificGravity: '2.60 - 2.70 g/cm³',
    hardnessMohs: '3.5 Mohs',
    alBiruniChapter: 'Bab 11: Fī al-Marjān wa Kayfiyyat Qaṭ’ihi min Qa’ar al-Baḥr',
    alBiruniQuote: '“Marjan disebut dalam Al-Qur’an bersama Lu’lu’. Al-Biruni mencatat bahwa permata pohon laut ini menguatkan jantung yang rapuh, menghentikan pendarahan luka, menolak ketakutan anak-anak kecil, serta menumbuhkan keberanian lembut yang penuh kasih sayang.”',
    therapeuticBenefits: [
      'Menguatkan organ jantung dan pembuluh darah',
      'Membantu pembekuan darah dan pemulihan anemia',
      'Menenteramkan anak yang rewel atau mudah terkejut saat tidur'
    ],
    spiritualVirtues: [
      'Menebarkan rasa kasih sayang, kehangatan cinta, dan kelembutan sikap',
      'Menolak godaan hawa nafsu yang merusak kehormatan diri',
      'Melindungi dari bahaya badai dan air saat melintasi lautan'
    ],
    fortuneAspects: {
      rezeki: 'Rezeki yang membahagiakan sanak keluarga dan melimpahkan kasih sayang.',
      kewibawaan: 'Kewibawaan yang bersumber dari kasih sayang dan pengayoman.',
      kesehatan: 'Sirkulasi darah kuat dan kebugaran jantung prima.',
      ketenangan: 'Kedamaian hati yang tulus dalam merawat keluarga tercinta.'
    },
    suitableMetals: ['Perak Murni'],
    recommendedFinger: 'Jari Manis Tangan Kiri atau Kanan',
    bestWearingDay: 'Selasa atau Senin',
    careAdvice: 'Sangat sensitif terhadap asam dan bahan kimia rumah tangga; bilas air tawar dingin.'
  },
  {
    id: 'jaz-yamani',
    arabicName: 'الـجـزع الـيـمـانـي',
    name: "Jaz' Yamani (Black Onyx / Yaman Wulung)",
    indonesianName: 'Batu Yaman Wulung (Black Onyx)',
    mineralName: 'Kalsedon Silika Berpita Gelap (SiO₂)',
    color: 'Hitam Pekat Berkilau Tembus Cahaya Kemerahan di Tepi',
    accentHex: '#18181B',
    imageUrl: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=900&q=80',
    visualTone: 'Hitam Berkilau Semi Transparan',
    opticalPhenomenon: 'Permukaan Hitam Pekat Mengkilat dengan Sinar Tembus Merah Tipis di Tepian',
    specimenType: 'Kalsedon Wulung Hitam Yaman Asli Cabochon Lonjong',
    bgGradient: 'from-black via-zinc-900 to-stone-950',
    element: 'Tanah',
    planet: 'Saturnus (Zuhal)',
    specificGravity: '2.61 (Diuji Al-Biruni)',
    modernSpecificGravity: '2.58 - 2.65 g/cm³',
    hardnessMohs: '6.5 - 7 Mohs',
    alBiruniChapter: 'Bab 12: Fī al-Jaz’ wa Khuṭūṭihi wa Asrarihi',
    alBiruniQuote: '“Al-Jaz’ dari Yaman memiliki keteguhan luar biasa. Al-Biruni menguraikan bahwa batu ini melatih kesabaran seorang mukmin di tengah himpitan fitnah zaman, membumikan angan-angan kosong menjadi karya nyata, dan membentengi raga dari letih yang berkepanjangan.”',
    therapeuticBenefits: [
      'Meredakan rasa letih kronis pada tulang belakang dan sendi lutut',
      'Membantu proses detoksifikasi racun lewat sistem ekskresi',
      'Memperkokoh konsentrasi meditasi dan fokus saat bekerja berat'
    ],
    spiritualVirtues: [
      'Menjaga ketahanan mental dari keputusasaan saat menghadapi ujian berat',
      'Benteng pertahanan batin yang kokoh dari sihir dan energi gelap',
      'Melatih disiplin diri dan integritas moral yang tegak lurus'
    ],
    fortuneAspects: {
      rezeki: 'Ketahanan mengelola bisnis di masa sulit, rezeki bertahan kukuh.',
      kewibawaan: 'Wibawa hening yang menggetarkan orang zalim, penuh ketegasan.',
      kesehatan: 'Tulang dan persendian kokoh menopang aktivitas fisik berat.',
      ketenangan: 'Ketenangan batin yang mantap berakar, tak gentar badai kehidupan.'
    },
    suitableMetals: ['Perak Murni Tebal'],
    recommendedFinger: 'Jari Kelingking atau Jari Tengah Tangan Kanan',
    bestWearingDay: 'Sabtu pagi',
    careAdvice: 'Cukup seka dengan minyak kasturi murni atau minyak cendana alami.'
  }
];

export const PLANETS_REFERENCE: Record<string, PlanetInfo> = {
  Syams: {
    name: 'Matahari',
    latinName: 'Sol / Sun',
    arabicName: 'الشمس (Asy-Syams)',
    symbol: '☉',
    day: 'Ahad (Minggu)',
    element: 'Api',
    metal: 'Emas / Suasa',
    characteristics: 'Kekuasaan, kepemimpinan, daya hidup, kemuliaan, kehormatan'
  },
  Qamar: {
    name: 'Bulan',
    latinName: 'Luna / Moon',
    arabicName: 'القمر (Al-Qamar)',
    symbol: '☽',
    day: 'Itsnain (Senin)',
    element: 'Air',
    metal: 'Perak Murni',
    characteristics: 'Ketenteraman emosi, kepekaan nurani, kasih sayang, intuisi halus'
  },
  Mirrikh: {
    name: 'Mars',
    latinName: 'Mars',
    arabicName: 'المريخ (Al-Mirrīkh)',
    symbol: '♂',
    day: 'Tsulatsa (Selasa)',
    element: 'Api',
    metal: 'Besi / Baja Putih',
    characteristics: 'Keberanian, ketegasan sikap, kekuatan fisik, penakluk rintangan'
  },
  Utarid: {
    name: 'Merkurius',
    latinName: 'Mercury',
    arabicName: 'عطارد (Utārid)',
    symbol: '☿',
    day: 'Arbi’a (Rabu)',
    element: 'Udara',
    metal: 'Air Raksa / Perak Campuran',
    characteristics: 'Kecerdasan nalar, kefasihan bicara, keahlian berniaga dan berhitung'
  },
  Musytari: {
    name: 'Yupiter',
    latinName: 'Jupiter',
    arabicName: 'المشتري (Al-Musytarī)',
    symbol: '♃',
    day: 'Khamis (Kamis)',
    element: 'Air',
    metal: 'Timah Putih / Kuningan Emas',
    characteristics: 'Kelapangan rezeki, hikmah kebijaksanaan, keadilan, kemakmuran berkah'
  },
  Zuhrah: {
    name: 'Venus',
    latinName: 'Venus',
    arabicName: 'الزهرة (Az-Zuhrah)',
    symbol: '♀',
    day: 'Jumu’ah (Jum’at)',
    element: 'Tanah',
    metal: 'Tembaga Halus / Perak Halus',
    characteristics: 'Keindahan seni, daya tarik pesona, kerukunan asmara, keanggunan'
  },
  Zuhal: {
    name: 'Saturnus',
    latinName: 'Saturn',
    arabicName: 'زحل (Zuhal)',
    symbol: '♄',
    day: 'Sabt (Sabtu)',
    element: 'Tanah',
    metal: 'Timbal / Besi Hitam / Perak Tua',
    characteristics: 'Kesabaran mendalam, ketahanan batin, kehati-hatian, fondasi kokoh'
  }
};

export const ZODIAC_BURUJ_LIST: ZodiacBuruj[] = [
  { name: 'Hamal (Aries)', arabicName: 'الحمل', latinName: 'Aries', element: 'Api', ruler: 'Mars (Al-Mirrikh)', dates: '21 Mar - 19 Apr' },
  { name: 'Tsaur (Taurus)', arabicName: 'الثور', latinName: 'Taurus', element: 'Tanah', ruler: 'Venus (Az-Zuhrah)', dates: '20 Apr - 20 Mei' },
  { name: 'Jauza (Gemini)', arabicName: 'الجوزاء', latinName: 'Gemini', element: 'Udara', ruler: 'Merkurius (Utarid)', dates: '21 Mei - 20 Jun' },
  { name: 'Saratan (Cancer)', arabicName: 'السرطان', latinName: 'Cancer', element: 'Air', ruler: 'Bulan (Al-Qamar)', dates: '21 Jun - 22 Jul' },
  { name: 'Asad (Leo)', arabicName: 'الأسد', latinName: 'Leo', element: 'Api', ruler: 'Matahari (Asy-Syams)', dates: '23 Jul - 22 Agu' },
  { name: 'Sunbulah (Virgo)', arabicName: 'السنبلة', latinName: 'Virgo', element: 'Tanah', ruler: 'Merkurius (Utarid)', dates: '23 Agu - 22 Sep' },
  { name: 'Mizan (Libra)', arabicName: 'الميزان', latinName: 'Libra', element: 'Udara', ruler: 'Venus (Az-Zuhrah)', dates: '23 Sep - 22 Okt' },
  { name: 'Aqrab (Scorpio)', arabicName: 'العقرب', latinName: 'Scorpio', element: 'Air', ruler: 'Mars (Al-Mirrikh)', dates: '23 Okt - 21 Nov' },
  { name: 'Qaws (Sagittarius)', arabicName: 'القوس', latinName: 'Sagittarius', element: 'Api', ruler: 'Yupiter (Al-Musytari)', dates: '22 Nov - 21 Des' },
  { name: 'Jadyu (Capricorn)', arabicName: 'الجدي', latinName: 'Capricorn', element: 'Tanah', ruler: 'Saturnus (Zuhal)', dates: '22 Des - 19 Jan' },
  { name: 'Dalwu (Aquarius)', arabicName: 'الدلو', latinName: 'Aquarius', element: 'Udara', ruler: 'Saturnus (Zuhal)', dates: '20 Jan - 18 Feb' },
  { name: 'Hut (Pisces)', arabicName: 'الحوت', latinName: 'Pisces', element: 'Air', ruler: 'Yupiter (Al-Musytari)', dates: '19 Feb - 20 Mar' }
];

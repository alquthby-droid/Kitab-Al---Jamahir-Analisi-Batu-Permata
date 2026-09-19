import React from 'react';
import { BookOpen, Scale, Award, Globe, Compass, Sparkles } from 'lucide-react';
import { DeveloperContactCard } from './DeveloperContactCard';

export const AboutAlJamahir: React.FC = () => {
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Hero Section */}
      <div className="bg-stone-900/80 border border-amber-900/40 rounded-2xl p-6 sm:p-10 shadow-xl backdrop-blur-sm relative overflow-hidden">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-800/50 text-amber-300 text-xs font-semibold mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Mahakarya Ilmu Mineralogi Islam Abad ke-11</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-['Cinzel'] font-bold text-amber-100 mb-3">
            Kitāb al-Jamāhir fī Ma'rifat al-Jawāhir
          </h2>
          <p className="font-['Amiri'] text-xl text-amber-300/90 mb-4">
            كتاب الجماهر في معرفة الجواهر للعلامة أبي الريحان البيروني
          </p>
          <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
            Ditulis oleh polimatik agung peradaban Islam, <strong className="text-amber-200">Abu Rayhan Muhammad ibn Ahmad al-Biruni (973–1048 M)</strong>, di kota Ghazna (kini Afganistan) dan dipersembahkan kepada Sultan Mawdud ibn Mas'ud dari Dinasti Ghaznawiyah. Kitab ini diakui oleh sejarawan sains dunia sebagai risalah gemologi dan mineralogi paling komprehensif, teliti, dan berpengaruh sebelum era modern.
          </p>
        </div>
      </div>

      {/* Grid of Key Scientific Contributions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-stone-900/70 border border-stone-800 rounded-2xl space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-950/80 border border-amber-700/50 flex items-center justify-center text-amber-400">
            <Scale className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-['Cinzel'] font-bold text-stone-100">
            Penemuan Bejana Kerucut Hidrostatis
          </h3>
          <p className="text-xs text-stone-300 leading-relaxed">
            Al-Biruni menciptakan alat timbang khusus bernama <em className="text-amber-300">al-inā' al-makhrūṭī</em> (bejana kerucut pengukur massa jenis air terdesak). Tingkat ketelitian berat jenis Yaqut, Intan, Zamrud, dan Emas yang diukurnya mencapai akurasi hingga tiga desimal modern.
          </p>
        </div>

        <div className="p-6 bg-stone-900/70 border border-stone-800 rounded-2xl space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-700/50 flex items-center justify-center text-emerald-400">
            <Compass className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-['Cinzel'] font-bold text-stone-100">
            Sintesis Empiris &amp; Metafisika Huruf
          </h3>
          <p className="text-xs text-stone-300 leading-relaxed">
            Al-Biruni memisahkan takhayul palsu para penipu pasar dari hakikat energi mineral. Beliau memadukan ilmu hisab falakiah, watak empat unsur (Api, Tanah, Udara, Air), dan adab sunnah pemakaian cincin para Nabi.
          </p>
        </div>

        <div className="p-6 bg-stone-900/70 border border-stone-800 rounded-2xl space-y-3">
          <div className="w-10 h-10 rounded-xl bg-sky-950/80 border border-sky-700/50 flex items-center justify-center text-sky-400">
            <Globe className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-['Cinzel'] font-bold text-stone-100">
            Rute Perdagangan Jalur Sutra
          </h3>
          <p className="text-xs text-stone-300 leading-relaxed">
            Al-Jamahir mendokumentasikan asal-usul tambang legendaris: Yakut Sailan (Sri Lanka), Lazurit Badakhshan, Pirus Neyshabur, Intan India, Zamrud Mesir Hulu, hingga Mutiara Teluk Persia dan Karang Merah Maghribi.
          </p>
        </div>
      </div>

      {/* Methodology Section */}
      <div className="p-6 sm:p-8 bg-stone-900/60 border border-amber-900/30 rounded-2xl space-y-4">
        <h3 className="text-xl font-['Cinzel'] font-bold text-amber-200 flex items-center space-x-2">
          <Sparkles className="w-5 h-5 text-amber-400" />
          <span>Metodologi Hisab &amp; Rekomendasi Permata dalam Aplikasi Ini</span>
        </h3>
        <div className="text-xs sm:text-sm text-stone-300 leading-relaxed space-y-3">
          <p>
            Aplikasi ini mengintegrasikan kaidah <strong className="text-amber-200">Hisab al-Jummal al-Kabir</strong> (sistem nilai numerik huruf Hijaiyah Abjad yang baku sejak masa para tabiin dan ilmuwan Abbasiyah) dengan klasifikasi watak mineralogi dari <strong className="text-amber-200">Kitāb al-Jamāhir</strong>:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-300">
            <li>
              <strong className="text-amber-200">Transformasi Fonetis Huruf Nama:</strong> Tiap huruf dari nama pengguna dihitung nilai Jummal-nya dan digolongkan ke dalam 4 watak unsur (Huruf Nariyyah/Api, Turabiyyah/Tanah, Hawa'iyyah/Udara, dan Ma'iyyah/Air).
            </li>
            <li>
              <strong className="text-amber-200">Penentuan Planet (Kawkab) &amp; Konstelasi (Buruj):</strong> Total akumulasi hisab dikonversi melalui kaidah modulo falakiah untuk menentukan penguasa langit yang menaungi karakter batin Anda.
            </li>
            <li>
              <strong className="text-amber-200">Pemilihan Permata Resonansi Tertinggi:</strong> Batu permata dipilih berdasarkan kecocokan berat jenis, warna optik, serta khasiat yang dicatat Al-Biruni guna menutupi kekurangan unsur dan menstabilkan temperamen raga.
            </li>
            <li>
              <strong className="text-amber-200">Adab &amp; Sunnah Pemakaian:</strong> Memberikan panduan praktis mengenai jari pemakaian cincin (khinsir/binshir), pilihan logam pengikat (disunnahkan perak murni), serta waktu afdhal saat energi kawkab sedang memuncak.
            </li>
          </ol>
        </div>
      </div>

      {/* Developer Attribution Card */}
      <div className="pt-4">
        <DeveloperContactCard />
      </div>
    </div>
  );
};

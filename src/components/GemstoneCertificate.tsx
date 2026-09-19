import React, { useEffect, useState } from 'react';
import { NumerologyAnalysis } from '../types';
import QRCode from 'qrcode';
import {
  ShieldCheck,
  Award,
  Sparkles,
  Compass,
  CheckCircle2,
  Calendar,
  Hash,
  MapPin,
  Phone
} from 'lucide-react';

interface GemstoneCertificateProps {
  analysis: NumerologyAnalysis;
  certificateNumber?: string;
  issueDate?: string;
}

export const GemstoneCertificate: React.FC<GemstoneCertificateProps> = ({
  analysis,
  certificateNumber = `AJ-${analysis.totalJummalKabir}-${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, '0')}`,
  issueDate = new Date().toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }),
}) => {
  const [qrDataUrl, setQrDataUrl] = useState<string>('');

  const developerName = 'Husni, S. Kom. I';
  const developerRole = 'Pengembang Aplikasi & Pengkaji Hisab Falakiah Al-Jamahir';
  const developerAddress = 'Beremi, Jagaraga, Kuripan, Lombok Barat, NTB';
  const developerPhone = '+62 819-1594-9627';

  // Construct official verification URL for the QR Code
  const verificationMessage = encodeURIComponent(
    `Assalamu'alaikum Wr. Wb. Ustadz Husni, mohon verifikasi keaslian Sertifikat Permata Al-Jamahir:\n\n` +
      `No. Sertifikat: ${certificateNumber}\n` +
      `Nama Pengguna: ${analysis.inputName}${analysis.motherName ? ` (Ibu: ${analysis.motherName})` : ''}\n` +
      `Hisab Jummal: ${analysis.totalJummalKabir} (Akar: ${analysis.jummalShaghir})\n` +
      `Permata Utama: ${analysis.primaryGem.indonesianName} (${analysis.primaryGem.name})\n` +
      `Tanggal Terbit: ${issueDate}\n\n` +
      `Terima kasih.`
  );
  const qrVerificationUrl = `https://wa.me/6281915949627?text=${verificationMessage}`;

  useEffect(() => {
    QRCode.toDataURL(qrVerificationUrl, {
      width: 256,
      margin: 1,
      color: {
        dark: '#1c1917',
        light: '#ffffff',
      },
    })
      .then((url) => setQrDataUrl(url))
      .catch((err) => console.error('Failed to generate QR code', err));
  }, [qrVerificationUrl]);

  return (
    <div
      id="certificate-print-root"
      className="bg-[#fcfbf7] text-stone-900 font-serif p-6 sm:p-10 rounded-2xl border-4 border-double border-amber-700/60 shadow-2xl relative overflow-hidden max-w-4xl mx-auto selection:bg-amber-200"
      style={{
        backgroundImage:
          'radial-gradient(circle at 50% 50%, rgba(254, 243, 199, 0.3) 0%, rgba(252, 251, 247, 0.95) 100%)',
      }}
    >
      {/* Classical Ornate Corner Accents */}
      <div className="absolute top-3 left-3 w-10 h-10 border-t-2 border-l-2 border-amber-800" />
      <div className="absolute top-3 right-3 w-10 h-10 border-t-2 border-r-2 border-amber-800" />
      <div className="absolute bottom-3 left-3 w-10 h-10 border-b-2 border-l-2 border-amber-800" />
      <div className="absolute bottom-3 right-3 w-10 h-10 border-b-2 border-r-2 border-amber-800" />

      {/* Watermark Background Seal */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.035] pointer-events-none select-none">
        <div className="w-[500px] h-[500px] rounded-full border-[24px] border-amber-950 flex items-center justify-center font-['Cinzel'] font-black text-6xl text-center">
          AL-JAMAHIR
          <br />
          AL-BIRUNI
        </div>
      </div>

      {/* Header / Kop Sertifikat */}
      <div className="text-center relative z-10 pb-6 border-b-2 border-amber-900/30 mb-6">
        <p className="font-['Amiri'] text-2xl sm:text-3xl text-amber-950 font-bold mb-1 tracking-wider">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>

        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-400/80 text-amber-900 text-xs font-sans font-bold uppercase tracking-widest my-2">
          <Award className="w-4 h-4 text-amber-700" />
          <span>Syahādah Nukhbah al-Jawāhir &bull; Sertifikat Resmi</span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-['Cinzel'] font-black text-amber-950 tracking-wide mt-1">
          SERTIFIKAT HASIL HISAB &amp; KESELARASAN BATU PERMATA
        </h1>

        <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl mx-auto italic">
          Berdasarkan Naskah Klasik Kitab <em>Al-Jamāhir fī Ma'rifat al-Jawāhir</em> karya Abū Rayḥān al-Bīrūnī (362 &ndash; 440 H / 973 &ndash; 1048 M)
        </p>

        {/* Certificate Meta Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-4 pt-3 border-t border-amber-900/20 text-xs font-sans text-stone-700">
          <div className="flex items-center space-x-1.5">
            <Hash className="w-3.5 h-3.5 text-amber-800" />
            <span>Nomor Registrasi: <strong className="text-stone-900 font-mono">{certificateNumber}</strong></span>
          </div>
          <div className="flex items-center space-x-1.5">
            <Calendar className="w-3.5 h-3.5 text-amber-800" />
            <span>Tanggal Terbit: <strong className="text-stone-900">{issueDate}</strong></span>
          </div>
        </div>
      </div>

      {/* Grid 2-Kolom: Identitas Pemilik & Permata Utama */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 mb-6">
        {/* Kolom 1: Identitas & Hasil Hisab Falakiah */}
        <div className="bg-amber-50/80 border border-amber-300/80 rounded-xl p-5 shadow-sm">
          <div className="flex items-center space-x-2 pb-2.5 mb-3 border-b border-amber-300 text-amber-950 font-['Cinzel'] font-bold text-sm">
            <Compass className="w-4 h-4 text-amber-700" />
            <span>1. Identitas &amp; Hisab Abjad Al-Kabir</span>
          </div>

          <div className="space-y-2.5 text-xs text-stone-800">
            <div className="flex justify-between items-center py-1 border-b border-amber-200/60">
              <span className="text-stone-600">Nama Pemilik:</span>
              <strong className="text-sm font-sans font-bold text-amber-950">{analysis.inputName}</strong>
            </div>

            {analysis.motherName && (
              <div className="flex justify-between items-center py-1 border-b border-amber-200/60">
                <span className="text-stone-600">Nama Ibu Kandung:</span>
                <span className="font-semibold text-stone-900">{analysis.motherName}</span>
              </div>
            )}

            <div className="flex justify-between items-center py-1 border-b border-amber-200/60">
              <span className="text-stone-600">Nilai Jummal al-Kabir:</span>
              <span className="font-mono font-bold text-stone-900 bg-amber-200/60 px-2 py-0.5 rounded">
                {analysis.totalJummalKabir}
              </span>
            </div>

            <div className="flex justify-between items-center py-1 border-b border-amber-200/60">
              <span className="text-stone-600">Akar Digit (Jummal as-Shaghir):</span>
              <span className="font-mono font-bold text-amber-900">
                {analysis.jummalShaghir}
              </span>
            </div>

            <div className="flex justify-between items-center py-1 border-b border-amber-200/60">
              <span className="text-stone-600">Unsur Pokok (Thabi'ah):</span>
              <span className="font-bold text-emerald-900 px-2 py-0.5 rounded bg-emerald-100">
                {analysis.dominantElement} ({analysis.secondaryElement ? `Sekunder: ${analysis.secondaryElement}` : ''})
              </span>
            </div>

            <div className="flex justify-between items-center py-1">
              <span className="text-stone-600">Buruj &amp; Bintang Naungan:</span>
              <span className="font-semibold text-stone-900 text-right">
                {analysis.zodiacBuruj.name} &bull; {analysis.dominantPlanet.name}
              </span>
            </div>
          </div>
        </div>

        {/* Kolom 2: Batu Permata Utama Rekomendasi Al-Biruni */}
        <div className="bg-amber-50/80 border border-amber-300/80 rounded-xl p-5 shadow-sm">
          <div className="flex items-center space-x-2 pb-2.5 mb-3 border-b border-amber-300 text-amber-950 font-['Cinzel'] font-bold text-sm">
            <Sparkles className="w-4 h-4 text-amber-700" />
            <span>2. Batu Permata Utama (Nukhbah)</span>
          </div>

          <div className="space-y-2.5 text-xs text-stone-800">
            <div className="flex justify-between items-center py-1 border-b border-amber-200/60">
              <span className="text-stone-600">Nama Permata:</span>
              <strong className="text-sm font-sans font-bold text-amber-950">
                {analysis.primaryGem.indonesianName} ({analysis.primaryGem.name})
              </strong>
            </div>

            <div className="flex justify-between items-center py-1 border-b border-amber-200/60">
              <span className="text-stone-600">Sebutan Klasik Al-Biruni:</span>
              <span className="font-['Amiri'] text-base font-bold text-amber-900">
                {analysis.primaryGem.arabicName}
              </span>
            </div>

            <div className="flex justify-between items-center py-1 border-b border-amber-200/60">
              <span className="text-stone-600">Berat Jenis Al-Biruni:</span>
              <span className="font-mono font-semibold text-stone-900">
                {analysis.primaryGem.specificGravity} (Modern: {analysis.primaryGem.modernSpecificGravity})
              </span>
            </div>

            <div className="flex justify-between items-center py-1 border-b border-amber-200/60">
              <span className="text-stone-600">Kekerasan &amp; Warna:</span>
              <span className="font-semibold text-stone-900">
                {analysis.primaryGem.hardnessMohs} Mohs &bull; {analysis.primaryGem.color}
              </span>
            </div>

            <div className="flex justify-between items-center py-1 border-b border-amber-200/60">
              <span className="text-stone-600">Logam &amp; Jari Sunnah:</span>
              <span className="font-semibold text-stone-900">
                {analysis.recommendedMetal} &bull; {analysis.recommendedHandFinger}
              </span>
            </div>

            <div className="flex justify-between items-center py-1">
              <span className="text-stone-600">Waktu Utama Pemakaian:</span>
              <span className="font-semibold text-emerald-900">
                {analysis.bestDayAndHour}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Row 3: Wasilah Ayat Al-Qur'an & Asmaul Husna */}
      <div className="bg-amber-100/40 border border-amber-300 rounded-xl p-4 mb-6 relative z-10 text-xs">
        <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-amber-300/80">
          <div className="flex items-center space-x-1.5 font-['Cinzel'] font-bold text-amber-950">
            <CheckCircle2 className="w-4 h-4 text-emerald-700" />
            <span>3. Wasilah Ayat Al-Qur'an &amp; Asmā'ul Husnā Penyelaras</span>
          </div>
          <span className="text-[11px] font-sans font-semibold text-amber-800 bg-amber-200/70 px-2 py-0.5 rounded">
            Wirid: {analysis.quranicSync.asmaulHusna.wiridCount}x
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <span className="text-[11px] text-stone-500 font-sans block uppercase font-bold">Ayat Sinkron Utama:</span>
            <p className="font-semibold text-stone-900 mt-0.5">
              QS. {analysis.quranicSync.primaryVerse.surahName}: {analysis.quranicSync.primaryVerse.ayahNumber} ({analysis.quranicSync.primaryVerse.focusTitle})
            </p>
            <p className="text-[11px] text-stone-600 italic mt-1 leading-relaxed">
              "{analysis.quranicSync.primaryVerse.translation.slice(0, 140)}..."
            </p>
          </div>

          <div>
            <span className="text-[11px] text-stone-500 font-sans block uppercase font-bold">Asmaul Husna Penyelaras:</span>
            <p className="font-semibold text-stone-900 mt-0.5 flex items-center space-x-2">
              <span className="font-['Amiri'] text-base font-bold text-amber-950">{analysis.quranicSync.asmaulHusna.arabic}</span>
              <span>&mdash; {analysis.quranicSync.asmaulHusna.latin}</span>
            </p>
            <p className="text-[11px] text-stone-600 italic mt-1">
              "{analysis.quranicSync.asmaulHusna.meaning}" &bull; {analysis.quranicSync.asmaulHusna.syncReason}
            </p>
          </div>
        </div>
      </div>

      {/* Row 4: Indeks Peruntungan & Pendamping */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-6 text-center font-sans text-xs">
        <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-300">
          <span className="text-[10px] text-stone-500 block uppercase font-semibold">Rezeki</span>
          <span className="text-base font-bold text-amber-900">{analysis.fortuneScores.rezeki}%</span>
        </div>
        <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-300">
          <span className="text-[10px] text-stone-500 block uppercase font-semibold">Kewibawaan</span>
          <span className="text-base font-bold text-amber-900">{analysis.fortuneScores.kewibawaan}%</span>
        </div>
        <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-300">
          <span className="text-[10px] text-stone-500 block uppercase font-semibold">Ketentraman</span>
          <span className="text-base font-bold text-amber-900">{analysis.fortuneScores.ketentraman}%</span>
        </div>
        <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-300">
          <span className="text-[10px] text-stone-500 block uppercase font-semibold">Perlindungan</span>
          <span className="text-base font-bold text-amber-900">{analysis.fortuneScores.perlindungan}%</span>
        </div>
        <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-300 col-span-2 sm:col-span-1">
          <span className="text-[10px] text-stone-500 block uppercase font-semibold">Kesehatan</span>
          <span className="text-base font-bold text-amber-900">{analysis.fortuneScores.kesehatan}%</span>
        </div>
      </div>

      {/* Pendamping & Peringatan */}
      <div className="flex flex-col sm:flex-row justify-between gap-3 text-xs mb-8 p-3 rounded-lg bg-stone-100 border border-stone-300">
        <div>
          <span className="text-stone-500 font-semibold block text-[10px] uppercase font-sans">Batu Pendamping Selaras:</span>
          <span className="font-bold text-emerald-900">{analysis.secondaryGem.indonesianName} ({analysis.secondaryGem.name})</span>
        </div>
        <div>
          <span className="text-rose-700 font-semibold block text-[10px] uppercase font-sans">Batu Tidak Selaras (Tabrakan Unsur):</span>
          <span className="font-bold text-rose-900">{analysis.incompatibleGem.indonesianName} ({analysis.incompatibleGem.name})</span>
        </div>
      </div>

      {/* Row 5: Tanda Tangan & QR Pengembang Aplikasi */}
      <div className="pt-6 border-t-2 border-amber-900/30 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
        {/* QR Code Signature & Verification */}
        <div className="flex items-center space-x-3.5 bg-white p-3 rounded-xl border border-amber-300 shadow-sm">
          {qrDataUrl ? (
            <img
              src={qrDataUrl}
              alt="QR Code Tanda Tangan Digital Pengembang"
              className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
            />
          ) : (
            <div className="w-20 h-20 bg-stone-200 animate-pulse rounded" />
          )}

          <div className="text-left font-sans max-w-[210px]">
            <div className="inline-flex items-center space-x-1 text-[10px] font-bold text-emerald-700 uppercase bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-300 mb-1">
              <ShieldCheck className="w-3 h-3" />
              <span>QR Tanda Tangan Sah</span>
            </div>
            <p className="text-[11px] font-bold text-stone-900">
              Pindai untuk Verifikasi
            </p>
            <p className="text-[10px] text-stone-500 leading-tight mt-0.5">
              Validasi keaslian sertifikat langsung melalui kontak resmi WhatsApp pengembang.
            </p>
          </div>
        </div>

        {/* Cap Stempel Digital & Tanda Tangan Teks */}
        <div className="text-center sm:text-right font-sans">
          <p className="text-xs text-stone-600">
            Kuripan, Lombok Barat, {issueDate}
          </p>
          <p className="text-[11px] font-semibold text-stone-500 mt-0.5 uppercase tracking-wider">
            Pengembang Aplikasi &amp; Pengkaji Naskah
          </p>

          {/* Calligraphic Signature Simulation / Seal */}
          <div className="my-2 flex items-center justify-center sm:justify-end space-x-2">
            <div className="w-14 h-14 rounded-full border-2 border-dashed border-amber-700/80 p-1 flex items-center justify-center text-center text-[8px] font-serif text-amber-900 font-bold uppercase rotate-[-12deg] bg-amber-50/50 shadow-inner">
              <span>TAHQIQ RASMI<br />★ AL-JAMAHIR ★</span>
            </div>
            <div className="font-['Cinzel'] font-bold text-lg text-amber-950 border-b border-stone-800 pb-0.5 px-3">
              Husni, S. Kom. I
            </div>
          </div>

          <p className="text-xs font-bold text-stone-900">
            {developerName}
          </p>
          <p className="text-[10px] text-stone-500 flex items-center justify-center sm:justify-end space-x-1 mt-0.5">
            <MapPin className="w-3 h-3 text-emerald-600 shrink-0" />
            <span>{developerAddress}</span>
          </p>
          <p className="text-[10px] text-stone-500 flex items-center justify-center sm:justify-end space-x-1 mt-0.5">
            <Phone className="w-3 h-3 text-amber-600 shrink-0" />
            <span>WA: {developerPhone}</span>
          </p>
        </div>
      </div>

      {/* Tauhid Disclaimer */}
      <div className="mt-6 pt-3 border-t border-amber-900/20 text-center font-serif text-[10px] text-stone-500 italic">
        "Segala batu permata adalah wasilah ciptaan Allah SWT. Hakikat kemanfaatan, rezeki, dan perlindungan mutlak milik Allah Ta'ala."
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { NumerologyAnalysis } from '../types';
import { GemstoneCertificate } from './GemstoneCertificate';
import { Printer, Download, X, Copy, Check, Info, Share2 } from 'lucide-react';

interface PrintCertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  analysis: NumerologyAnalysis;
}

export const PrintCertificateModal: React.FC<PrintCertificateModalProps> = ({
  isOpen,
  onClose,
  analysis,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const certificateNumber = `AJ-${analysis.totalJummalKabir}-${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, '0')}`;
  const issueDate = new Date().toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const handlePrint = () => {
    // Mobile haptic if available
    if (typeof window !== 'undefined' && 'vibrate' in window.navigator) {
      try {
        window.navigator.vibrate(20);
      } catch {
        // Ignore
      }
    }
    // Small timeout ensures styles are fully flushed
    setTimeout(() => {
      window.print();
    }, 100);
  };

  const handleCopyText = () => {
    const text = `[SERTIFIKAT HASIL HISAB PERMATA AL-JAMAHIR]
Nomor Registrasi: ${certificateNumber}
Tanggal: ${issueDate}

Pemilik: ${analysis.inputName}${analysis.motherName ? ` (Ibu: ${analysis.motherName})` : ''}
Hisab Jummal al-Kabir: ${analysis.totalJummalKabir} (Akar: ${analysis.jummalShaghir})
Unsur Pokok: ${analysis.dominantElement}
Buruj / Bintang: ${analysis.zodiacBuruj.name} / ${analysis.dominantPlanet.name}

BATU PERMATA UTAMA (NUKHBAH):
- Nama: ${analysis.primaryGem.indonesianName} (${analysis.primaryGem.name} / ${analysis.primaryGem.arabicName})
- Berat Jenis Al-Biruni: ${analysis.primaryGem.specificGravity}
- Kekerasan: ${analysis.primaryGem.hardnessMohs} Mohs
- Logam Ikatan & Jari: ${analysis.recommendedMetal} / ${analysis.recommendedHandFinger}
- Waktu Pemakaian: ${analysis.bestDayAndHour}

WASILAH SINKRON:
- Ayat Al-Qur'an: QS. ${analysis.quranicSync.primaryVerse.surahName}: ${analysis.quranicSync.primaryVerse.ayahNumber}
- Asmaul Husna: ${analysis.quranicSync.asmaulHusna.latin} (${analysis.quranicSync.asmaulHusna.arabic}) - Wirid ${analysis.quranicSync.asmaulHusna.wiridCount}x

PENGEMBANG & VERIFIKASI QR:
- Pengembang: Husni, S. Kom. I (Beremi, Jagaraga, Kuripan, Lombok Barat, NTB)
- WhatsApp: +62 819-1594-9627`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      id="certificate-modal-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
    >
      <div className="relative w-full max-w-5xl bg-stone-900 border border-amber-600/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Header & Actions (Hidden during print) */}
        <div className="no-print p-4 sm:p-5 bg-stone-950 border-b border-amber-700/40 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300">
              <Printer className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-['Cinzel'] font-bold text-amber-100">
                Sertifikat &amp; Cetak PDF
              </h3>
              <p className="text-xs text-stone-400">
                Dilengkapi tanda tangan digital &amp; QR Code verifikasi pengembang
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center space-x-2">
            <button
              id="modal-copy-btn"
              type="button"
              onClick={handleCopyText}
              className="px-3 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 border border-stone-700 text-stone-300 text-xs font-semibold flex items-center space-x-1.5 transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Disalin</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Salin Teks</span>
                </>
              )}
            </button>

            <button
              id="modal-print-btn"
              type="button"
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 border border-amber-400/60 text-stone-950 text-xs font-bold flex items-center space-x-2 shadow-lg shadow-amber-950/40 transition-all active:scale-95"
            >
              <Printer className="w-4 h-4" />
              <span>Cetak / Simpan PDF</span>
            </button>

            <button
              id="modal-close-btn"
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 border border-stone-700 text-stone-400 hover:text-stone-100 transition-colors"
              title="Tutup Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Informative Tip Banner */}
        <div className="no-print px-4 py-2.5 bg-amber-950/70 border-b border-amber-800/40 flex items-center space-x-2 text-xs text-amber-200">
          <Info className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            <strong>Panduan Menyimpan PDF:</strong> Saat dialog cetak terbuka, pilih tujuan cetak (Destination) menjadi <strong>"Simpan sebagai PDF" (Save as PDF)</strong> lalu klik Simpan.
          </span>
        </div>

        {/* Certificate Viewable & Printable Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-stone-950/90 certificate-scroll-container">
          <div className="certificate-print-area">
            <GemstoneCertificate
              analysis={analysis}
              certificateNumber={certificateNumber}
              issueDate={issueDate}
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="no-print p-3 sm:p-4 bg-stone-950 border-t border-stone-800 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-400 shrink-0">
          <span className="text-[11px] text-stone-400">
            Format A4 Portrait &bull; Resolusi Cetak Tinggi &bull; QR Code Aktif
          </span>
          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-emerald-100 font-medium text-xs flex items-center space-x-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Unduh / Simpan PDF Sekarang</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

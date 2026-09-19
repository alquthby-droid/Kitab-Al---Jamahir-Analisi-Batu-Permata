import React, { useState, useRef, useEffect } from 'react';
import {
  X,
  Download,
  Upload,
  Database,
  Archive,
  CheckCircle2,
  AlertCircle,
  FileJson,
  Calendar,
  Trash2,
  RotateCcw,
  ExternalLink,
  Code2,
  ShieldCheck,
  HardDrive,
  Copy,
  Check,
  FolderArchive,
  Info
} from 'lucide-react';
import {
  getSavedCalculations,
  deleteCalculation,
  clearAllCalculations,
  downloadBackupFile,
  restoreFromBackupJSON,
  SavedCalculationRecord,
} from '../utils/backupStorage';
import { NumerologyAnalysis } from '../types';

interface BackupRestoreModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoadAnalysis: (analysis: NumerologyAnalysis) => void;
}

export const BackupRestoreModal: React.FC<BackupRestoreModalProps> = ({
  isOpen,
  onClose,
  onLoadAnalysis,
}) => {
  const [activeTab, setActiveTab] = useState<'data' | 'history' | 'code'>('data');
  const [records, setRecords] = useState<SavedCalculationRecord[]>([]);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [copiedCodeSnippet, setCopiedCodeSnippet] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const refreshRecords = () => {
    const list = getSavedCalculations();
    setRecords(list);
  };

  useEffect(() => {
    if (isOpen) {
      refreshRecords();
      setStatusMessage(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleDownload = () => {
    try {
      const { filename, count } = downloadBackupFile();
      setStatusMessage({
        type: 'success',
        text: `Berhasil mengunduh file cadangan "${filename}" berisi ${count} riwayat data hisab.`,
      });
      refreshRecords();
    } catch (err: any) {
      setStatusMessage({
        type: 'error',
        text: 'Gagal mengunduh file cadangan: ' + (err?.message || 'Terjadi kesalahan sistem.'),
      });
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (!content) {
        setStatusMessage({ type: 'error', text: 'File kosong atau tidak dapat dibaca.' });
        return;
      }
      const result = restoreFromBackupJSON(content);
      if (result.success) {
        setStatusMessage({
          type: 'success',
          text: `Berhasil memulihkan ${result.count} data hisab dari file cadangan ke dalam aplikasi!`,
        });
        refreshRecords();
      } else {
        setStatusMessage({
          type: 'error',
          text: result.error || 'Gagal memulihkan file cadangan.',
        });
      }
    };
    reader.onerror = () => {
      setStatusMessage({ type: 'error', text: 'Terjadi kesalahan saat membaca file.' });
    };
    reader.readAsText(file);
    // Reset file input so user can pick the same file again if desired
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDeleteRecord = (id: string, name: string) => {
    if (window.confirm(`Hapus catatan hisab untuk "${name}" dari memori lokal?`)) {
      deleteCalculation(id);
      refreshRecords();
      setStatusMessage({ type: 'success', text: `Data "${name}" telah dihapus.` });
    }
  };

  const handleClearAll = () => {
    if (records.length === 0) return;
    if (window.confirm('Apakah Anda yakin ingin mengosongkan SELURUH riwayat hisab yang tersimpan di perangkat ini?')) {
      clearAllCalculations();
      refreshRecords();
      setStatusMessage({ type: 'success', text: 'Seluruh riwayat hisab telah dikosongkan.' });
    }
  };

  const handleSelectRecord = (record: SavedCalculationRecord) => {
    onLoadAnalysis(record.analysis);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/80 backdrop-blur-md overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-stone-900 border border-amber-800/60 rounded-2xl shadow-2xl shadow-stone-950/90 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-amber-900/40 bg-stone-950/80">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-amber-950/80 border border-amber-700/60 flex items-center justify-center text-amber-400 shadow-md">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-['Cinzel'] font-bold text-lg text-amber-100 flex items-center space-x-2">
                <span>Cadangkan &amp; Pulihkan Aplikasi</span>
              </h3>
              <p className="text-xs text-stone-400">
                Backup riwayat hisab, ekspor/impor data JSON, dan arsip kode sumber
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-amber-200 hover:bg-stone-800/80 transition-colors"
            title="Tutup Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Tabs Navigation */}
        <div className="flex border-b border-stone-800 bg-stone-950/40 px-6 pt-2">
          <button
            onClick={() => {
              setActiveTab('data');
              setStatusMessage(null);
            }}
            className={`flex items-center space-x-2 px-4 py-2.5 text-xs font-semibold border-b-2 transition-all ${
              activeTab === 'data'
                ? 'border-amber-500 text-amber-300 bg-amber-950/20'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            <Archive className="w-4 h-4" />
            <span>Cadangan Data (JSON)</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('history');
              setStatusMessage(null);
            }}
            className={`flex items-center space-x-2 px-4 py-2.5 text-xs font-semibold border-b-2 transition-all ${
              activeTab === 'history'
                ? 'border-amber-500 text-amber-300 bg-amber-950/20'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Riwayat Tersimpan ({records.length})</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('code');
              setStatusMessage(null);
            }}
            className={`flex items-center space-x-2 px-4 py-2.5 text-xs font-semibold border-b-2 transition-all ${
              activeTab === 'code'
                ? 'border-amber-500 text-amber-300 bg-amber-950/20'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            <Code2 className="w-4 h-4" />
            <span>Cadangan Kode Proyek</span>
          </button>
        </div>

        {/* Status Notification */}
        {statusMessage && (
          <div
            className={`mx-6 mt-4 p-3 rounded-xl flex items-center space-x-2.5 text-xs ${
              statusMessage.type === 'success'
                ? 'bg-emerald-950/60 border border-emerald-700/60 text-emerald-200'
                : 'bg-rose-950/60 border border-rose-700/60 text-rose-200'
            }`}
          >
            {statusMessage.type === 'success' ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
            )}
            <span>{statusMessage.text}</span>
          </div>
        )}

        {/* Content Area */}
        <div className="p-6 max-h-[65vh] overflow-y-auto space-y-6 text-stone-300">
          {/* TAB 1: Cadangan Data (JSON) */}
          {activeTab === 'data' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Ekspor Cadangan */}
                <div className="p-5 rounded-xl bg-stone-950/70 border border-amber-900/40 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-amber-950/80 border border-amber-700/50 flex items-center justify-center text-amber-400 mb-3">
                      <Download className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-semibold text-amber-200 mb-1">
                      Ekspor File Cadangan (JSON)
                    </h4>
                    <p className="text-xs text-stone-400 leading-relaxed">
                      Unduh seluruh catatan riwayat hisab nama, nilai Jummal Kabir, unsur dominan, dan rekomendasi batu permata ke dalam berkas standar JSON.
                    </p>
                  </div>

                  <div className="pt-2 border-t border-stone-800/80 flex items-center justify-between">
                    <span className="text-[11px] text-stone-400">
                      Total Data: <strong className="text-amber-300 font-mono">{records.length}</strong> catatan
                    </span>
                    <button
                      type="button"
                      id="download-backup-btn"
                      onClick={handleDownload}
                      className="px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-stone-950 font-bold rounded-lg text-xs flex items-center space-x-2 shadow-md shadow-amber-950/50 transition-all active:scale-95"
                    >
                      <Download className="w-4 h-4 text-stone-950" />
                      <span>Unduh Cadangan (.json)</span>
                    </button>
                  </div>
                </div>

                {/* Pulihkan Cadangan */}
                <div className="p-5 rounded-xl bg-stone-950/70 border border-emerald-900/40 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-emerald-950/80 border border-emerald-700/50 flex items-center justify-center text-emerald-400 mb-3">
                      <Upload className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-semibold text-emerald-200 mb-1">
                      Pulihkan Data dari Berkas (Restore)
                    </h4>
                    <p className="text-xs text-stone-400 leading-relaxed">
                      Unggah file cadangan <code className="text-emerald-300 font-mono">.json</code> yang telah Anda simpan sebelumnya untuk mengembalikan riwayat perhitungan.
                    </p>
                  </div>

                  <div className="pt-2 border-t border-stone-800/80 flex items-center justify-between">
                    <input
                      type="file"
                      ref={fileInputRef}
                      accept=".json,application/json"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="upload-backup-input"
                    />
                    <span className="text-[11px] text-stone-400">Format: .json</span>
                    <button
                      type="button"
                      id="restore-backup-btn"
                      onClick={() => fileInputRef.current?.click()}
                      className="px-4 py-2 bg-emerald-950 hover:bg-emerald-900 border border-emerald-600/60 text-emerald-200 font-semibold rounded-lg text-xs flex items-center space-x-2 transition-all active:scale-95"
                    >
                      <Upload className="w-4 h-4 text-emerald-400" />
                      <span>Pilih File Cadangan</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Data Safety Info */}
              <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-800/30 flex items-start space-x-3 text-xs text-stone-300">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-semibold text-amber-200">
                    Privasi &amp; Penyimpanan Mandiri (Client-Side Privacy)
                  </p>
                  <p className="text-stone-400 leading-relaxed">
                    Aplikasi Al-Jamahir menyimpan riwayat Anda secara lokal di peramban web tanpa membagikannya ke pihak ketiga. Mencadangkan data secara berkala ke berkas JSON memastikan riwayat hisab Anda tetap aman meski memori peramban dibersihkan.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Riwayat Hisab Tersimpan */}
          {activeTab === 'history' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-amber-200">
                    Daftar Riwayat Perhitungan ({records.length})
                  </h4>
                  <p className="text-xs text-stone-400">
                    Klik pada salah satu riwayat untuk membuka kembali hasil analisis lengkap
                  </p>
                </div>
                {records.length > 0 && (
                  <button
                    type="button"
                    onClick={handleClearAll}
                    className="px-3 py-1.5 bg-rose-950/60 hover:bg-rose-900/80 border border-rose-800/60 text-rose-300 text-xs rounded-lg flex items-center space-x-1.5 transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Kosongkan Semua</span>
                  </button>
                )}
              </div>

              {records.length === 0 ? (
                <div className="p-10 text-center rounded-xl bg-stone-950/50 border border-stone-800 space-y-2">
                  <FileJson className="w-10 h-10 text-stone-600 mx-auto" />
                  <p className="text-stone-400 text-sm font-medium">
                    Belum ada riwayat hisab yang tersimpan
                  </p>
                  <p className="text-stone-500 text-xs max-w-sm mx-auto">
                    Lakukan analisis hisab pada tab "Hisab" atau pulihkan dari file cadangan JSON untuk melihat daftar di sini.
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-stone-800/80 rounded-xl bg-stone-950/70 border border-amber-900/30 overflow-hidden">
                  {records.map((rec) => (
                    <div
                      key={rec.id}
                      className="p-3.5 sm:p-4 hover:bg-stone-900/70 transition-colors flex items-center justify-between gap-3 group"
                    >
                      <div
                        className="flex-1 min-w-0 cursor-pointer"
                        onClick={() => handleSelectRecord(rec)}
                      >
                        <div className="flex items-center space-x-2">
                          <span className="font-['Cinzel'] font-bold text-amber-100 text-sm truncate">
                            {rec.name}
                          </span>
                          {rec.motherName && (
                            <span className="text-[11px] text-stone-400 truncate">
                              (binti/bin {rec.motherName})
                            </span>
                          )}
                          <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-amber-950/60 border border-amber-800/50 text-amber-300">
                            Jummal: {rec.totalJummalKabir}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 mt-1 text-xs text-stone-400">
                          <span className="text-emerald-300 font-medium">
                            {rec.primaryGemName}
                          </span>
                          <span>•</span>
                          <span className="text-stone-400">Unsur: {rec.dominantElement}</span>
                          <span>•</span>
                          <span className="text-stone-500 text-[11px]">{rec.formattedDate}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 shrink-0">
                        <button
                          type="button"
                          onClick={() => handleSelectRecord(rec)}
                          className="px-3 py-1.5 bg-amber-700/30 hover:bg-amber-600/40 text-amber-200 border border-amber-600/40 text-xs rounded-lg flex items-center space-x-1 transition-colors"
                          title="Buka Analisis Ini"
                        >
                          <RotateCcw className="w-3 h-3" />
                          <span>Buka</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteRecord(rec.id, rec.name)}
                          className="p-1.5 text-stone-500 hover:text-rose-400 hover:bg-rose-950/40 rounded-lg transition-colors"
                          title="Hapus Catatan Ini"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: Cadangan Kode Proyek */}
          {activeTab === 'code' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-800/40 text-xs leading-relaxed space-y-2">
                <div className="flex items-center space-x-2 text-amber-300 font-semibold">
                  <FolderArchive className="w-4 h-4" />
                  <span>Petunjuk Mencadangkan Kode Sumber Aplikasi (AI Studio)</span>
                </div>
                <p className="text-stone-300">
                  Aplikasi Al-Jamahir ini dibangun di lingkungan <strong>Google AI Studio Build</strong>. Anda dapat mengamankan seluruh kode sumber, konfigurasi, dan aset proyek dengan salah satu cara berikut:
                </p>
              </div>

              <div className="space-y-4">
                {/* Opsi 1: Download ZIP */}
                <div className="p-4 rounded-xl bg-stone-950/70 border border-stone-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-amber-200 flex items-center space-x-2">
                      <Download className="w-4 h-4 text-amber-400" />
                      <span>1. Unduh Arsip ZIP (Download ZIP)</span>
                    </span>
                    <span className="px-2 py-0.5 text-[10px] uppercase font-mono bg-stone-800 text-stone-300 rounded">
                      Disarankan
                    </span>
                  </div>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    Klik ikon titik tiga atau menu <strong>Settings / Bagikan</strong> di pojok kanan atas layar antarmuka Google AI Studio, lalu pilih <strong>"Export to ZIP"</strong> atau <strong>"Download project"</strong>. Berkas ZIP akan berisi seluruh kode TypeScript, React, Tailwind, ikon, dan berkas konfigurasi.
                  </p>
                </div>

                {/* Opsi 2: Ekspor ke GitHub */}
                <div className="p-4 rounded-xl bg-stone-950/70 border border-stone-800 space-y-2">
                  <span className="text-sm font-bold text-emerald-200 flex items-center space-x-2">
                    <Code2 className="w-4 h-4 text-emerald-400" />
                    <span>2. Sinkronkan ke Repositori GitHub</span>
                  </span>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    Melalui menu pengaturan AI Studio, Anda dapat menautkan akun GitHub Anda dan memilih <strong>"Export to GitHub"</strong>. Semua riwayat *commit* dan struktur kode akan tersimpan rapi di repositori publik/privat Anda.
                  </p>
                </div>

                {/* Opsi 3: Deploy ke Cloud Run */}
                <div className="p-4 rounded-xl bg-stone-950/70 border border-stone-800 space-y-2">
                  <span className="text-sm font-bold text-amber-200 flex items-center space-x-2">
                    <HardDrive className="w-4 h-4 text-amber-400" />
                    <span>3. Publikasikan Permanen ke Google Cloud Run</span>
                  </span>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    Gunakan tombol <strong>Deploy</strong> di bilah atas AI Studio untuk men-deploy aplikasi secara otomatis ke Google Cloud Run sebagai layanan web kontainer yang dapat diakses 24/7 di seluruh dunia.
                  </p>
                </div>
              </div>

              {/* Rincian Berkas Kunci */}
              <div className="p-4 rounded-xl bg-stone-950/50 border border-stone-800 space-y-2 text-xs">
                <span className="font-semibold text-stone-200 block">
                  Struktur Berkas Utama Aplikasi:
                </span>
                <ul className="list-disc list-inside space-y-1 text-stone-400 font-mono text-[11px]">
                  <li><span className="text-amber-300">src/utils/numerology.ts</span>: Mesin hisab Jummal &amp; penentuan permata</li>
                  <li><span className="text-amber-300">src/data/gemstonesData.ts</span>: Katalog 16 batu permata &amp; data Al-Biruni</li>
                  <li><span className="text-amber-300">src/components/</span>: Komponen UI, sertifikat PDF, dan tabel Abjad</li>
                  <li><span className="text-amber-300">package.json</span>: Dependensi Express, React, Lucide, Tailwind</li>
                  <li><span className="text-amber-300">metadata.json</span>: Metadata proyek &amp; izin platform AI Studio</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-stone-800 bg-stone-950/90 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center space-x-2 text-stone-400">
            <Info className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Format cadangan data kompatibel penuh dengan semua peramban modern.</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 font-medium rounded-lg transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

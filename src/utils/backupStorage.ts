import { NumerologyAnalysis } from '../types';

export interface SavedCalculationRecord {
  id: string;
  timestamp: number;
  formattedDate: string;
  name: string;
  motherName?: string;
  primaryGemName: string;
  dominantElement: string;
  totalJummalKabir: number;
  analysis: NumerologyAnalysis;
  notes?: string;
}

export interface AppBackupPayload {
  app: 'Al-Jamahir';
  version: string;
  exportDate: string;
  exportTimestamp: number;
  recordsCount: number;
  records: SavedCalculationRecord[];
  metadata: {
    source: string;
    bookReference: string;
    author: string;
  };
}

const STORAGE_KEY = 'aljamahir_saved_calculations_v1';

export function getSavedCalculations(): SavedCalculationRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed;
    }
    return [];
  } catch (err) {
    console.error('Gagal membaca riwayat hisab lokal:', err);
    return [];
  }
}

export function saveCalculation(analysis: NumerologyAnalysis, notes?: string): SavedCalculationRecord {
  const records = getSavedCalculations();
  const id = `calc_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const now = new Date();
  
  const record: SavedCalculationRecord = {
    id,
    timestamp: now.getTime(),
    formattedDate: now.toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }),
    name: analysis.inputName,
    motherName: analysis.motherName,
    primaryGemName: analysis.primaryGem.name,
    dominantElement: analysis.dominantElement,
    totalJummalKabir: analysis.totalJummalKabir,
    analysis,
    notes: notes || '',
  };

  // Check if identical name calculation already exists recently (within 24h), replace or prepend
  const filtered = records.filter(r => !(r.name.toLowerCase() === record.name.toLowerCase() && (r.motherName || '') === (record.motherName || '')));
  const updated = [record, ...filtered].slice(0, 50); // keep up to 50 records
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Gagal menyimpan riwayat hisab ke localStorage:', err);
  }
  return record;
}

export function deleteCalculation(id: string): void {
  try {
    const records = getSavedCalculations();
    const updated = records.filter(r => r.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Gagal menghapus riwayat hisab:', err);
  }
}

export function clearAllCalculations(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.error('Gagal mengosongkan riwayat hisab:', err);
  }
}

export function generateBackupPayload(): AppBackupPayload {
  const records = getSavedCalculations();
  const now = new Date();
  return {
    app: 'Al-Jamahir',
    version: '1.2.0',
    exportDate: now.toISOString(),
    exportTimestamp: now.getTime(),
    recordsCount: records.length,
    records,
    metadata: {
      source: 'Al-Jamahir Numerology & Gemstone App',
      bookReference: 'Kitab al-Jamahir fi Ma\'rifat al-Jawahir',
      author: 'Abu Rayhan Al-Biruni',
    },
  };
}

export function downloadBackupFile(): { filename: string; count: number } {
  const payload = generateBackupPayload();
  const jsonStr = JSON.stringify(payload, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const dateStr = new Date().toISOString().slice(0, 10);
  const filename = `al-jamahir-backup-${dateStr}.json`;

  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);

  return { filename, count: payload.recordsCount };
}

export function restoreFromBackupJSON(jsonString: string): { success: boolean; count: number; error?: string } {
  try {
    const parsed = JSON.parse(jsonString);
    if (!parsed || typeof parsed !== 'object') {
      return { success: false, count: 0, error: 'Format file tidak valid (bukan JSON object).' };
    }

    // Determine records array
    let recordsToImport: SavedCalculationRecord[] = [];
    if (Array.isArray(parsed.records)) {
      recordsToImport = parsed.records;
    } else if (Array.isArray(parsed)) {
      recordsToImport = parsed;
    } else {
      return { success: false, count: 0, error: 'Data cadangan tidak memuat daftar riwayat yang sesuai.' };
    }

    // Validate essential fields
    const validRecords = recordsToImport.filter(
      r => r && typeof r.name === 'string' && r.analysis && r.analysis.primaryGem
    );

    if (validRecords.length === 0) {
      return { success: false, count: 0, error: 'Tidak ditemukan data hisab yang valid dalam file cadangan.' };
    }

    const currentRecords = getSavedCalculations();
    const existingIds = new Set(currentRecords.map(r => r.id));
    const merged = [...currentRecords];

    for (const rec of validRecords) {
      if (!existingIds.has(rec.id)) {
        merged.push(rec);
        existingIds.add(rec.id);
      }
    }

    // Sort descending by timestamp
    merged.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
    const limited = merged.slice(0, 100);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(limited));
    return { success: true, count: validRecords.length };
  } catch (err: any) {
    return { success: false, count: 0, error: err?.message || 'Gagal memproses file JSON cadangan.' };
  }
}

import express from 'express';
import path from 'path';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';
import { GEMSTONES_CATALOG, PLANETS_REFERENCE, ZODIAC_BURUJ_LIST } from './src/data/gemstonesData';
import { analyzeNameGemstoneSuitability } from './src/utils/numerology';

dotenv.config();

let aiClient: GoogleGenAI | null = null;

function getAiClient(): GoogleGenAI | null {
  if (!process.env.GEMINI_API_KEY) {
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }
  return aiClient;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', service: 'Al-Jamahir Gemstone Fortune Service' });
  });

  // Get full gemstone catalog from Kitab Al-Jamahir
  app.get('/api/gemstones', (req, res) => {
    res.json({
      title: "Katalog Permata Kitāb al-Jamāhir fī Ma'rifat al-Jawāhir",
      author: 'Abu Rayhan Muhammad ibn Ahmad al-Biruni (973–1048 M)',
      gemstones: GEMSTONES_CATALOG,
    });
  });

  // Calculate numerology and gemstone match
  app.post('/api/analyze', (req, res) => {
    try {
      const { name, motherName } = req.body;
      if (!name || typeof name !== 'string' || name.trim().length === 0) {
        return res.status(400).json({ error: 'Nama tidak boleh kosong.' });
      }

      const analysis = analyzeNameGemstoneSuitability(name.trim(), motherName?.trim());
      return res.json(analysis);
    } catch (err: any) {
      console.error('Error in /api/analyze:', err);
      return res.status(500).json({ error: 'Gagal melakukan analisis numerologi nama.' });
    }
  });

  // Optional AI Deep Consultation grounded in Al-Biruni's Kitab Al-Jamahir
  app.post('/api/ai-scholarly-reading', async (req, res) => {
    try {
      const { name, analysisData } = req.body;
      if (!name) {
        return res.status(400).json({ error: 'Nama diperlukan untuk pembacaan Al-Biruni.' });
      }

      const ai = getAiClient();
      if (!ai) {
        // High quality fallback without AI key
        return res.json({
          source: 'classical_fallback',
          reading: `Berdasarkan kaidah Kitāb al-Jamāhir fī Ma'rifat al-Jawāhir karya Syaikh Abu Rayhan Al-Biruni, paduan hisab Jummal untuk nama "${name}" menghimpun keluhuran unsur ${analysisData?.dominantElement || 'alami'}. Permata ${analysisData?.primaryGem?.name || 'pilihan'} memiliki kecocokan gelombang mineralogi dengan karakter batin Anda. Memakainya pada ${analysisData?.recommendedHandFinger || 'jari yang disunnahkan'} insyaAllah mengokohkan haibah (kewibawaan), menghindarkan waswas, dan menarik keberkahan rezeki yang melimpah.`,
        });
      }

      const prompt = `Anda adalah seorang ahli gemologi Islam klasik dan pensyarah kitab agung "Kitāb al-Jamāhir fī Ma'rifat al-Jawāhir" (كتاب الجماهر في معرفة الجواهر) karya Abu Rayhan Al-Biruni (abad ke-11 M).

Pengguna telah dianalisis berdasarkan hisab Abjad / Jummal Kabir dengan data berikut:
- Nama Pengguna: ${name}
- Total Nilai Jummal Kabir: ${analysisData?.totalJummalKabir}
- Akar Digit (Jummal Shaghir): ${analysisData?.jummalShaghir}
- Unsur Dominan: ${analysisData?.dominantElement} (Didampingi: ${analysisData?.secondaryElement})
- Kawkab / Planet Naungan: ${analysisData?.dominantPlanet?.arabicName} (${analysisData?.dominantPlanet?.name})
- Buruj Falak: ${analysisData?.zodiacBuruj?.arabicName} (${analysisData?.zodiacBuruj?.name})
- Permata Utama Rekomendasi: ${analysisData?.primaryGem?.name} (${analysisData?.primaryGem?.indonesianName})
- Kutipan Al-Biruni untuk batu ini: ${analysisData?.primaryGem?.alBiruniQuote}
- Berat Jenis Al-Biruni: ${analysisData?.primaryGem?.specificGravity}
- Logam Ikatan: ${analysisData?.recommendedMetal}
- Posisi Jari: ${analysisData?.recommendedHandFinger}
- Ayat Al-Qur'an Sinkron: QS. ${analysisData?.quranicSync?.primaryVerse?.surahName}: ${analysisData?.quranicSync?.primaryVerse?.ayahNumber} (${analysisData?.quranicSync?.primaryVerse?.focusTitle})
- Asmaul Husna Penyelaras: ${analysisData?.quranicSync?.asmaulHusna?.latin} (Adad Wirid: ${analysisData?.quranicSync?.asmaulHusna?.wiridCount}x)

Tugas Anda:
Berikan uraian mendalam (3-4 paragraf yang anggun, berbobot, ilmiah, dan sarat hikmah Al-Biruni) dalam Bahasa Indonesia:
1. Analisis getaran karakter nama pengguna dari perspektif Thabi'at al-Huruf (sifat huruf) dan korelasi unsur fisika-metafisik Al-Biruni.
2. Penjelasan mengapa batu ${analysisData?.primaryGem?.indonesianName} paling cocok dipakai dan bagaimana sifat fisik batunya (berat jenis, ketahanan api/benturan, pancaran warna) beresonansi memperkuat peruntungan (rezeki, kewibawaan kepemimpinan, dan ketenangan jiwa).
3. Nasihat adab pemakaian cincin permata menurut tradisi Al-Biruni dan Sunnah, serta bagaimana wasilah ayat Al-Qur'an dan Asmaul Husna yang tersinkronisasi memperkuat keteguhan iman dan tauhid pemakainya.

Gunakan gaya bahasa santun, berwibawa, ilmiah khas ilmuwan peradaban emas Islam, dan inspiratif.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
      });

      return res.json({
        source: 'gemini_ai',
        reading: response.text || 'Gagal menghasilkan tafsir.',
      });
    } catch (error: any) {
      console.error('Error generating AI scholarly reading:', error);
      return res.json({
        source: 'error_fallback',
        reading: `Analisis Al-Biruni menegaskan bahwa keselarasan nama dan permata ${req.body?.analysisData?.primaryGem?.indonesianName || 'pilihan'} memberikan perisai spiritual dan resonansi energi positif yang membuka pintu kelancaran ikhtiar Anda.`,
      });
    }
  });

  // Vite middleware for development vs static build for production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Al-Jamahir Gemstone server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});

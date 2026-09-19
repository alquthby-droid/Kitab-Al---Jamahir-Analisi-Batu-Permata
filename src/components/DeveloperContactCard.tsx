import React from 'react';
import { User, Phone, MessageCircle, MapPin, ShieldCheck, ExternalLink, Sparkles } from 'lucide-react';

export const DeveloperContactCard: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-stone-900 via-stone-900 to-amber-950/40 border border-amber-800/50 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-md">
      {/* Decorative ambient flare */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
        {/* Profile Info */}
        <div className="flex items-start space-x-4 sm:space-x-5">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-amber-600 via-amber-700 to-emerald-700 p-0.5 shadow-xl shadow-amber-950/70 shrink-0 group">
            <img
              src="https://cdn.phototourl.com/free/2026-09-19-62a9d0b9-5236-4de7-9fec-7f7c76323edb.jpg"
              alt="Husni, S. Kom. I - Pengembang Aplikasi"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-[14px]"
            />
            <div className="absolute -bottom-1 -right-1 bg-emerald-950 border border-emerald-500 rounded-full p-0.5 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-950/90 border border-amber-600/60 text-amber-300">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Pengembang Aplikasi Resmi</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-['Cinzel'] font-bold text-amber-100">
              Husni, S. Kom. I
            </h3>
            <div className="flex items-center space-x-1.5 text-xs text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Beremi, Jagaraga, Kuripan, Lombok Barat, NTB</span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed max-w-xl">
              Konsultasi Hisab Falakiah Nama, Penyelarasan Batu Permata Sesuai Sunnah &amp; Kajian Naskah Tahqiq Kitab Al-Jamāhir karya Abu Rayhan Al-Biruni.
            </p>
          </div>
        </div>

        {/* Action Contact Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
          {/* WhatsApp 1 */}
          <a
            href="https://wa.me/6281915949627?text=Assalamu%27alaikum%20Ustadz%20Husni,%20saya%20ingin%20konsultasi%20hisab%20nama%20dan%20batu%20permata%20Al-Jamahir."
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-emerald-800/80 hover:bg-emerald-700 border border-emerald-500/60 text-emerald-100 text-xs font-semibold flex items-center justify-center space-x-2 shadow-lg shadow-emerald-950/40 transition-all active:scale-95 group"
          >
            <MessageCircle className="w-4 h-4 text-emerald-300 group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <span className="block text-[10px] text-emerald-300/80 uppercase font-bold">WhatsApp Utama</span>
              <span>+62 819-1594-9627</span>
            </div>
          </a>

          {/* WhatsApp / Telp 2 */}
          <a
            href="https://wa.me/6285239153085?text=Assalamu%27alaikum%20Ustadz%20Husni,%20saya%20ingin%20konsultasi%20hisab%20nama%20dan%20batu%20permata%20Al-Jamahir."
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-amber-800/80 hover:bg-amber-700 border border-amber-500/60 text-amber-100 text-xs font-semibold flex items-center justify-center space-x-2 shadow-lg shadow-amber-950/40 transition-all active:scale-95 group"
          >
            <Phone className="w-4 h-4 text-amber-300 group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <span className="block text-[10px] text-amber-300/80 uppercase font-bold">WhatsApp / Telp</span>
              <span>+62 852-3915-3085</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

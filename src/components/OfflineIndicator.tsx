import React from 'react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import { WifiOff } from 'lucide-react';

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 flex items-center space-x-2.5 rounded-xl bg-amber-950/95 border border-amber-600/80 px-3.5 py-2 text-xs font-medium text-amber-200 shadow-2xl backdrop-blur-md animate-bounce">
      <WifiOff className="w-4 h-4 text-amber-400 shrink-0" />
      <span>Mode Luring Aktif &mdash; Data hisab kitab Al-Biruni tetap dapat diakses tanpa koneksi internet.</span>
    </div>
  );
};

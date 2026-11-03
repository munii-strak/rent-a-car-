import React from 'react';
import { MessageSquare } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Support chat" className="fixed bottom-6 right-6 z-40">
      <a
        href="https://wa.me/923008479211?text=Hello%20SkyKey%20Vorsteiner%20Rentals,%20I%20would%20like%20to%20inquire%20about%20vehicle%20availability"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full shadow-[0_6px_25px_rgba(16,185,129,0.5)] transition-all duration-300 active:scale-95"
        aria-label="Chat with us on WhatsApp"
      >
        {/* Pulsing Outer Ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 animate-ping pointer-events-none"></span>

        <MessageSquare className="w-7 h-7 relative z-10 fill-current" />

        {/* Hover Tooltip */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 px-3.5 py-1.5 bg-[#0e121a] text-white text-xs font-semibold rounded-lg border border-white/10 shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Instant WhatsApp Support • +92 300 847-9211
        </span>
      </a>
    </aside>
  );
};

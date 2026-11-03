import React from 'react';
import { PhoneCall, Mail, MessageSquare } from 'lucide-react';

export const ContactStrip: React.FC = () => {
  return (
    <section className="w-full py-10 bg-[#080a0e] relative">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto bg-[#10141e]/90 border border-white/10 rounded-2xl p-3 sm:p-4 backdrop-blur-md shadow-2xl">
          {/* Card 1: Call */}
          <a
            href="tel:+923008479211"
            className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-[0_4px_16px_rgba(37,99,235,0.4)] group-hover:scale-105 transition-transform">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-mono font-bold tracking-[0.2em] text-blue-400 uppercase">
                CALL US 24/7 (PAKISTAN)
              </p>
              <p className="text-sm sm:text-base font-bold text-white font-mono mt-0.5">
                +92 (300) 847-9211
              </p>
            </div>
          </a>

          {/* Card 2: Email */}
          <a
            href="mailto:info@skykey.pk"
            className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all group border-t md:border-t-0 md:border-l border-white/10"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-[0_4px_16px_rgba(37,99,235,0.4)] group-hover:scale-105 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-mono font-bold tracking-[0.2em] text-blue-400 uppercase">
                EMAIL US
              </p>
              <p className="text-sm sm:text-base font-bold text-white font-mono mt-0.5">
                info@skykey.pk
              </p>
            </div>
          </a>

          {/* Card 3: WhatsApp */}
          <a
            href="https://wa.me/923008479211"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all group border-t md:border-t-0 md:border-l border-white/10"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-[0_4px_16px_rgba(5,150,105,0.4)] group-hover:scale-105 transition-transform">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-mono font-bold tracking-[0.2em] text-emerald-400 uppercase">
                NEED HELP?
              </p>
              <p className="text-sm sm:text-base font-bold text-white mt-0.5">
                Chat with us on WhatsApp
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

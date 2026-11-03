import React from 'react';
import { Play, ArrowRight, ChevronDown } from 'lucide-react';

interface HeroProps {
  onConfigureClick: () => void;
  onWatchFilmClick: () => void;
  onDiscoverClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onConfigureClick,
  onWatchFilmClick,
  onDiscoverClick,
}) => {
  return (
    <section className="relative w-full min-h-[720px] lg:min-h-[820px] flex flex-col justify-between overflow-hidden bg-[#0a0c10]">
      {/* Background Hero Image extracted directly from user screenshot */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/extracted/hero_full.png"
          alt="Vorsteiner 500 High-Performance Vehicle"
          className="w-full h-full object-cover object-center lg:object-[center_35%]"
          referrerPolicy="no-referrer"
        />
        {/* Subtle optical dark gradient to ensure high readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090c]/90 via-[#07090c]/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d11] via-transparent to-black/30"></div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-[1520px] w-full mx-auto px-6 sm:px-8 pt-16 sm:pt-24 lg:pt-32">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-blue-500 inline-block"></span>
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-slate-300 uppercase">
              INTRODUCING THE ALL NEW
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 uppercase drop-shadow-md">
            VORSTEINER 500
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl font-normal text-slate-300 tracking-wide mb-10">
            Engineered in Germany. <span className="text-white font-medium">Driven by Precision.</span>
          </p>

          {/* Technical Specs */}
          <div className="flex items-center gap-6 sm:gap-10 py-4 border-t border-b border-white/15 max-w-lg mb-10 backdrop-blur-xs">
            <div>
              <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-slate-400">
                POWER
              </p>
              <p className="text-xl sm:text-2xl font-bold tracking-tight text-white font-mono tabular-nums">
                620 <span className="text-xs font-semibold text-blue-400">HP</span>
              </p>
            </div>

            <div className="w-[1px] h-8 bg-white/15"></div>

            <div>
              <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-slate-400">
                0-100 KM/H
              </p>
              <p className="text-xl sm:text-2xl font-bold tracking-tight text-white font-mono tabular-nums">
                3.2 <span className="text-xs font-semibold text-blue-400">S</span>
              </p>
            </div>

            <div className="w-[1px] h-8 bg-white/15"></div>

            <div>
              <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-slate-400">
                TOP SPEED
              </p>
              <p className="text-xl sm:text-2xl font-bold tracking-tight text-white font-mono tabular-nums">
                325 <span className="text-xs font-semibold text-blue-400">KM/H</span>
              </p>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              onClick={onConfigureClick}
              className="px-7 py-3.5 bg-blue-600 hover:bg-blue-500 active:scale-95 text-white text-xs sm:text-sm font-bold tracking-[0.18em] uppercase rounded-sm transition-all duration-200 flex items-center gap-3 shadow-[0_6px_24px_rgba(37,99,235,0.4)] cursor-pointer"
            >
              <span>CONFIGURE YOUR 500</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onWatchFilmClick}
              className="px-6 py-3.5 bg-black/40 hover:bg-black/60 active:scale-95 text-slate-200 hover:text-white text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase rounded-sm border border-white/20 hover:border-white/40 transition-all duration-200 flex items-center gap-3 backdrop-blur-md cursor-pointer"
            >
              <div className="w-6 h-6 rounded-full border border-white/40 flex items-center justify-center bg-white/5">
                <Play className="w-3 h-3 fill-current ml-0.5 text-white" />
              </div>
              <span>WATCH FILM</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Bottom Telemetry Status Strip */}
      <div className="relative z-10 w-full border-t border-white/10 bg-[#07090c]/80 backdrop-blur-md py-4 mt-16">
        <div className="max-w-[1520px] mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-medium tracking-[0.15em] text-slate-400 uppercase">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
              <span className="text-slate-300 font-semibold">2026 ORDER BOOKS OPEN</span>
            </div>
            <span className="text-slate-600 hidden sm:inline">·</span>
            <div className="hidden sm:block text-slate-400 font-mono">
              NÜRBURGRING LAP: <span className="text-white font-semibold">7:18.4</span>
            </div>
          </div>

          <button
            onClick={onDiscoverClick}
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors cursor-pointer group"
          >
            <span>DISCOVER CRAFTSMANSHIP</span>
            <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center group-hover:border-blue-400 group-hover:text-blue-400 transition-colors">
              <ChevronDown className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

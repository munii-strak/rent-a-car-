import React from 'react';
import { SILHOUETTES } from '../data';
import { Silhouette } from '../types';
import { SlidersHorizontal, ArrowRight, Check } from 'lucide-react';

interface BodyStyleSelectorProps {
  selectedSilhouette: Silhouette;
  onSelectSilhouette: (s: Silhouette) => void;
  onContinue: () => void;
}

export const BodyStyleSelector: React.FC<BodyStyleSelectorProps> = ({
  selectedSilhouette,
  onSelectSilhouette,
  onContinue,
}) => {
  return (
    <section id="engineering" className="w-full py-20 bg-[#0a0c10] border-b border-white/5 relative">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-[0.25em] text-blue-500 uppercase mb-3">
            STEP 01 — CHOOSE YOUR SILHOUETTE
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase mb-4">
            SELECT A BODY STYLE
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Every Vorsteiner is built around your driving style.
          </p>
        </div>

        {/* 6 Silhouette Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-12">
          {SILHOUETTES.map((s) => {
            const isSelected = selectedSilhouette.id === s.id;
            return (
              <div
                key={s.id}
                onClick={() => onSelectSilhouette(s)}
                className={`group relative rounded-xl p-5 cursor-pointer transition-all duration-300 flex flex-col justify-between min-h-[290px] border ${
                  isSelected
                    ? 'bg-[#121620] border-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.25)] ring-1 ring-blue-500'
                    : 'bg-[#0e1117] border-white/10 hover:border-white/25 hover:bg-[#11151e]'
                }`}
              >
                {/* Top Row: Doors/Seats & Radio Circle */}
                <div className="flex items-center justify-between text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                  <span>{s.badge}</span>
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'border-blue-500 bg-blue-600 text-white'
                        : 'border-white/20 group-hover:border-white/40'
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                </div>

                {/* Car Silhouette Image Graphic */}
                <div className="my-auto py-6 flex items-center justify-center">
                  <img
                    src={s.image}
                    alt={s.name}
                    className="w-full max-h-[140px] object-contain transition-transform duration-300 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Bottom Row: Name and Starting Price */}
                <div className="pt-4 border-t border-white/10">
                  <p className="text-sm font-bold tracking-wider text-white uppercase group-hover:text-blue-400 transition-colors">
                    {s.name}
                  </p>
                  <p className="text-[11px] font-mono tracking-tight text-slate-400">
                    {s.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Bar */}
        <div className="max-w-4xl mx-auto bg-[#10141d] border border-white/10 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-4 text-left">
            <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
              <SlidersHorizontal className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold tracking-wide text-white uppercase">
                SELECTED: {selectedSilhouette.name} SILHOUETTE
              </p>
              <p className="text-xs text-slate-400">
                {selectedSilhouette.badge} • {selectedSilhouette.hp} • {selectedSilhouette.price}
              </p>
            </div>
          </div>

          <button
            onClick={onContinue}
            className="w-full sm:w-auto px-7 py-3 bg-blue-600 hover:bg-blue-500 active:scale-95 text-white text-xs font-bold tracking-[0.2em] uppercase rounded-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(37,99,235,0.3)] shrink-0 cursor-pointer"
          >
            <span>CONTINUE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { AIRPORT_LOCATIONS } from '../data';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { AirportLocation } from '../types';

interface AirportLocationsProps {
  onSelectAirport: (loc: AirportLocation) => void;
  onViewAllAirports: () => void;
}

export const AirportLocations: React.FC<AirportLocationsProps> = ({
  onSelectAirport,
  onViewAllAirports,
}) => {
  return (
    <section id="locations" className="w-full py-24 bg-[#080a0e] border-b border-white/5 relative">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-blue-400 uppercase bg-blue-950/60 border border-blue-800/40 px-3 py-1 rounded-full mb-3 inline-block">
              OUR AIRPORT LOCATIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-1">
              We're Where You Land
            </h2>
          </div>

          <button
            onClick={onViewAllAirports}
            className="px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 hover:text-white text-xs font-bold tracking-[0.18em] uppercase rounded-lg transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>View All Locations</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 5 Airport Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {AIRPORT_LOCATIONS.map((loc) => (
            <div
              key={loc.id}
              onClick={() => onSelectAirport(loc)}
              className="group relative rounded-2xl overflow-hidden bg-[#10141d] border border-white/10 hover:border-blue-500/50 cursor-pointer shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              {/* Photo Area */}
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <img
                  src={loc.image}
                  alt={loc.city}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10141d] via-transparent to-transparent opacity-80"></div>
              </div>

              {/* Bottom Card Info */}
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                    {loc.city}
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {loc.terminal}
                  </p>
                </div>

                <div className="w-8 h-8 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-all shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

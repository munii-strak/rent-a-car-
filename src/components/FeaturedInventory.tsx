import React, { useState } from 'react';
import { INVENTORY } from '../data';
import { InventoryVehicle } from '../types';
import { Heart, ArrowRight, Gauge, Cog } from 'lucide-react';

interface FeaturedInventoryProps {
  onVehicleSelect: (v: InventoryVehicle) => void;
  onViewAllClick: () => void;
}

type CategoryFilter = 'all' | 'sedans' | 'suvs' | 'trucks' | 'coupes' | 'hybrids';

export const FeaturedInventory: React.FC<FeaturedInventoryProps> = ({
  onVehicleSelect,
  onViewAllClick,
}) => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');
  const [favorites, setFavorites] = useState<Record<string, boolean>>({
    'rav4-2023': false,
    'accord-2022': false,
    'f150-2021': false,
    'camaro-2023': false,
  });

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredVehicles = INVENTORY.filter((v) => {
    if (activeFilter === 'all') return true;
    return v.category === activeFilter;
  });

  const filterTabs: { id: CategoryFilter; label: string }[] = [
    { id: 'all', label: 'ALL VEHICLES' },
    { id: 'sedans', label: 'SEDANS' },
    { id: 'suvs', label: 'SUVS' },
    { id: 'trucks', label: 'TRUCKS' },
    { id: 'coupes', label: 'COUPES' },
    { id: 'hybrids', label: 'HYBRIDS' },
  ];

  return (
    <section className="w-full py-24 bg-[#080a0e] relative border-b border-white/5">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-blue-500 inline-block"></span>
            <span className="text-xs font-bold tracking-[0.25em] text-white uppercase">
              FEATURED INVENTORY
            </span>
            <span className="w-8 h-[2px] bg-blue-500 inline-block"></span>
          </div>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Explore our certified pre-owned collection, handpicked and rigorously inspected for supreme performance.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 sm:gap-8 border-b border-white/10 pb-4 mb-14 overflow-x-auto no-scrollbar">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`text-xs sm:text-sm font-bold tracking-[0.18em] uppercase py-2 px-3 transition-colors relative whitespace-nowrap cursor-pointer ${
                  isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab.label}
                {isActive && (
                  <span className="absolute bottom-[-17px] left-0 w-full h-[3px] bg-blue-600 rounded-full shadow-[0_0_8px_rgba(37,99,235,0.8)]"></span>
                )}
              </button>
            );
          })}
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {filteredVehicles.map((car) => {
            const isFav = favorites[car.id];
            return (
              <div
                key={car.id}
                onClick={() => onVehicleSelect(car)}
                className="group bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between cursor-pointer transition-transform duration-300 hover:-translate-y-1.5"
              >
                {/* Image Container with Yellow Year Badge & Heart */}
                <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />

                  {/* Yellow Year Pill Badge */}
                  <div className="absolute top-3 left-3 bg-[#f59e0b] text-slate-950 text-xs font-extrabold px-3 py-1 rounded-md shadow-md tracking-wider">
                    {car.year}
                  </div>

                  {/* Favorite Heart Button */}
                  <button
                    onClick={(e) => toggleFavorite(car.id, e)}
                    className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-red-500 flex items-center justify-center shadow-md transition-all active:scale-90"
                    aria-label="Add to favorites"
                  >
                    <Heart
                      className={`w-4 h-4 transition-colors ${
                        isFav ? 'fill-red-500 text-red-500' : 'text-slate-500'
                      }`}
                    />
                  </button>
                </div>

                {/* Card Content Area */}
                <div className="p-6 flex-1 flex flex-col justify-between text-left bg-white">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight mb-3">
                      {car.name}
                    </h3>

                    {/* Specs Row */}
                    <div className="flex items-center gap-4 text-xs text-slate-500 font-medium mb-5">
                      <div className="flex items-center gap-1.5">
                        <Gauge className="w-3.5 h-3.5 text-slate-400" />
                        <span>{car.mileage}</span>
                      </div>
                      <span className="text-slate-300">·</span>
                      <div className="flex items-center gap-1.5">
                        <Cog className="w-3.5 h-3.5 text-slate-400" />
                        <span>{car.transmission}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <p className="text-xl font-extrabold text-slate-900 tracking-tight font-mono">
                        {car.price}
                      </p>
                    </div>

                    <div className="flex items-center gap-1 text-xs font-bold text-[#d97706] hover:text-[#b45309] tracking-wider uppercase">
                      <span>VIEW DETAILS</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Inventory Button */}
        <div className="text-center">
          <button
            onClick={onViewAllClick}
            className="px-8 py-3.5 bg-[#0f131a] hover:bg-[#151b26] text-white text-xs font-bold tracking-[0.2em] uppercase rounded-sm border border-white/15 hover:border-white/30 transition-all duration-200 inline-flex items-center gap-3 cursor-pointer shadow-lg"
          >
            <span>VIEW ALL INVENTORY</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

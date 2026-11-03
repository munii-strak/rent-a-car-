import React from 'react';
import { Search, Calendar, Plane, Car } from 'lucide-react';

export const ProcessSteps: React.FC = () => {
  const steps = [
    {
      num: 1,
      icon: Search,
      title: 'Search',
      desc: 'Enter your city, dates, and vehicle.',
    },
    {
      num: 2,
      icon: Calendar,
      title: 'Book',
      desc: 'Reserve your car online in minutes.',
    },
    {
      num: 3,
      icon: Plane,
      title: 'Pick Up',
      desc: 'Collect your car from the airport or your doorstep.',
    },
    {
      num: 4,
      icon: Car,
      title: 'Enjoy the Ride',
      desc: 'Experience frictionless car rental across Pakistan with guaranteed reservations in minutes.',
    },
  ];

  return (
    <section className="w-full py-24 bg-[#0a0c10] border-b border-white/5 relative">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[11px] font-mono font-bold tracking-[0.25em] text-blue-500 uppercase mb-3">
            SIMPLE 4-STEP PROCESS
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Renting a Car is Easy
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Experience frictionless car rental across Pakistan with guaranteed reservations in minutes.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.num}
                className="bg-[#0e1219] border border-white/10 rounded-2xl p-7 flex flex-col items-center text-center shadow-lg hover:border-blue-500/30 hover:bg-[#111622] transition-all group"
              >
                {/* Circular Icon with Blue Accent */}
                <div className="w-14 h-14 rounded-full bg-[#141b29] border border-blue-500/30 flex items-center justify-center text-blue-400 mb-5 group-hover:scale-110 group-hover:border-blue-500 transition-all shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Step Pill */}
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-400 bg-blue-950/60 border border-blue-800/40 px-2.5 py-0.5 rounded-full mb-3">
                  STEP {s.num}
                </span>

                {/* Title */}
                <h3 className="text-base font-bold text-white mb-2">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

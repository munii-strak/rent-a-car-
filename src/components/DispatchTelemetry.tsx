import React from 'react';
import { Car, ShieldCheck, Key, BarChart3 } from 'lucide-react';

export const DispatchTelemetry: React.FC = () => {
  return (
    <section className="w-full py-20 bg-[#090b0f] text-slate-100 border-b border-white/5 relative">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-8">
        {/* Banner with Metropolitan Matrix Dispatch */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 mb-14 shadow-2xl">
          <img
            src="/assets/extracted/dispatch_hub_banner.png"
            alt="Centralized Logistics and Real-Time Telemetry Dispatch Hub"
            className="w-full h-auto min-h-[220px] object-cover"
            referrerPolicy="no-referrer"
          />

          {/* Bottom Bar Info Overlay on the Banner */}
          <div className="bg-[#0c0f15]/95 border-t border-white/10 px-6 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold tracking-[0.25em] text-blue-400 uppercase mb-1 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                24/7 OPERATIONS HUB • LAHORE / KARACHI / ISLAMABAD
              </p>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">
                Centralized Logistics & Real-Time Telemetry Dispatch
              </h3>
            </div>

            <div className="flex items-center gap-8 text-right font-mono">
              <div>
                <p className="text-[10px] uppercase text-slate-400 font-semibold tracking-wider">
                  TELEMETRY SYNC
                </p>
                <p className="text-xs sm:text-sm font-bold text-emerald-400">
                  99.98% <span className="text-[10px] text-slate-400 font-sans">LIVE</span>
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase text-slate-400 font-semibold tracking-wider">
                  AVG DISPATCH
                </p>
                <p className="text-xs sm:text-sm font-bold text-blue-400">
                  14 <span className="text-[10px] text-slate-400 font-sans">MINS</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Stats Metric Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pb-16 border-b border-white/10">
          {/* Stat 1 */}
          <div className="border-l-2 border-white/10 pl-5">
            <div className="flex items-center justify-between mb-2">
              <Car className="w-4 h-4 text-slate-400" />
              <span className="text-[11px] font-mono font-semibold text-emerald-400">
                +12% VELOCITY
              </span>
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              250 +
            </p>
            <p className="text-[11px] font-bold tracking-[0.18em] text-slate-400 uppercase mt-1">
              TOTAL CARS IN FLEET
            </p>
          </div>

          {/* Stat 2 */}
          <div className="border-l-2 border-white/10 pl-5">
            <div className="flex items-center justify-between mb-2">
              <ShieldCheck className="w-4 h-4 text-slate-400" />
              <span className="text-[11px] font-mono font-semibold text-blue-400">
                LIVE DISPATCH
              </span>
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              184 <span className="text-sm font-sans font-semibold text-slate-400">VEH</span>
            </p>
            <p className="text-[11px] font-bold tracking-[0.18em] text-slate-400 uppercase mt-1">
              CARS AVAILABLE NOW
            </p>
          </div>

          {/* Stat 3 */}
          <div className="border-l-2 border-white/10 pl-5">
            <div className="flex items-center justify-between mb-2">
              <Key className="w-4 h-4 text-slate-400" />
              <span className="text-[11px] font-mono font-semibold text-emerald-400">
                +18% TODAY
              </span>
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              66 <span className="text-sm font-sans font-semibold text-slate-400">SLOTS</span>
            </p>
            <p className="text-[11px] font-bold tracking-[0.18em] text-slate-400 uppercase mt-1">
              CARS RENTED TODAY
            </p>
          </div>

          {/* Stat 4 */}
          <div className="border-l-2 border-white/10 pl-5">
            <div className="flex items-center justify-between mb-2">
              <BarChart3 className="w-4 h-4 text-slate-400" />
              <span className="text-[11px] font-mono font-semibold text-blue-400">
                Q3 RECORD
              </span>
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              PKR 4.2 M
            </p>
            <p className="text-[11px] font-bold tracking-[0.18em] text-slate-400 uppercase mt-1">
              MONTHLY REVENUE
            </p>
          </div>
        </div>

        {/* Gauge Telemetry & Reliability Index */}
        <div className="pt-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-14">
            <div>
              <p className="text-[10px] font-mono font-semibold tracking-[0.25em] text-slate-400 uppercase">
                GAUGE_TELEMETRY // RELIABILITY INDEX
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                Operational Excellence
              </h3>
            </div>

            <p className="text-xs font-mono font-semibold text-slate-400 tracking-wider uppercase">
              Q3 AUDIT CERTIFICATION <span className="text-white font-bold">99.4%</span>
            </p>
          </div>

          {/* 4 Circular Percentage Gauges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Gauge 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-32 h-32 flex items-center justify-center mb-5">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#171d29"
                    strokeWidth="6"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#ffffff"
                    strokeWidth="6"
                    strokeDasharray="251.2"
                    strokeDashoffset={251.2 * (1 - 0.98)}
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute text-xl font-extrabold font-mono text-white">
                  98%
                </span>
              </div>
              <p className="text-xs font-bold tracking-[0.18em] text-white uppercase mb-1">
                CUSTOMER SATISFACTION
              </p>
              <p className="text-xs text-slate-400">4,800+ reviews validated</p>
            </div>

            {/* Gauge 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-32 h-32 flex items-center justify-center mb-5">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#171d29"
                    strokeWidth="6"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#ffffff"
                    strokeWidth="6"
                    strokeDasharray="251.2"
                    strokeDashoffset={251.2 * (1 - 0.99)}
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute text-xl font-extrabold font-mono text-white">
                  99%
                </span>
              </div>
              <p className="text-xs font-bold tracking-[0.18em] text-white uppercase mb-1">
                ON-TIME DELIVERY
              </p>
              <p className="text-xs text-slate-400">Doorstep dispatch SLAs</p>
            </div>

            {/* Gauge 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-32 h-32 flex items-center justify-center mb-5">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#171d29"
                    strokeWidth="6"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#ffffff"
                    strokeWidth="6"
                    strokeDasharray="251.2"
                    strokeDashoffset={251.2 * (1 - 0.74)}
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute text-xl font-extrabold font-mono text-white">
                  74%
                </span>
              </div>
              <p className="text-xs font-bold tracking-[0.18em] text-white uppercase mb-1">
                FLEET UTILIZATION
              </p>
              <p className="text-xs text-slate-400">Asset turnover pacing</p>
            </div>

            {/* Gauge 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-32 h-32 flex items-center justify-center mb-5">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#171d29"
                    strokeWidth="6"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#ffffff"
                    strokeWidth="6"
                    strokeDasharray="251.2"
                    strokeDashoffset={251.2 * (1 - 0.86)}
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute text-xl font-extrabold font-mono text-white">
                  86%
                </span>
              </div>
              <p className="text-xs font-bold tracking-[0.18em] text-white uppercase mb-1">
                REPEAT CLIENTELE
              </p>
              <p className="text-xs text-slate-400">Corporate retainers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { InventoryVehicle, Silhouette, AirportLocation, BookingSubmission } from '../types';
import { X, Check, ArrowRight, ShieldCheck, MapPin, Gauge, Fuel, Cog, Phone, MessageSquare, Play, Sparkles } from 'lucide-react';

interface VehicleDetailModalProps {
  vehicle: InventoryVehicle | null;
  onClose: () => void;
  onReserve: (vehicleName: string) => void;
}

export const VehicleDetailModal: React.FC<VehicleDetailModalProps> = ({
  vehicle,
  onClose,
  onReserve,
}) => {
  if (!vehicle) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl bg-[#0f131b] border border-white/15 rounded-2xl overflow-hidden shadow-2xl">
        {/* Header Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Column: Photo */}
          <div className="relative bg-slate-900 min-h-[260px] md:min-h-full">
            <img
              src={vehicle.image}
              alt={vehicle.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 bg-[#f59e0b] text-slate-950 text-xs font-black px-3 py-1 rounded shadow">
              {vehicle.year}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f131b] via-transparent to-transparent md:hidden"></div>
          </div>

          {/* Right Column: Specs & Actions */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <p className="text-[10px] font-mono font-bold tracking-widest text-blue-400 uppercase mb-1">
                CERTIFIED PRE-OWNED INVENTORY
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {vehicle.name}
              </h3>
              <p className="text-2xl font-black text-white font-mono mb-6">
                {vehicle.price}{' '}
                <span className="text-xs font-normal text-slate-400 font-sans">
                  / All-Inclusive Drive Away
                </span>
              </p>

              {/* Spec Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6 text-xs">
                <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                  <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                    <Gauge className="w-3.5 h-3.5" />
                    <span>Odometer</span>
                  </div>
                  <p className="font-semibold text-white">{vehicle.mileage}</p>
                </div>

                <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                  <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                    <Cog className="w-3.5 h-3.5" />
                    <span>Transmission</span>
                  </div>
                  <p className="font-semibold text-white">{vehicle.transmission}</p>
                </div>

                <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                  <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                    <Fuel className="w-3.5 h-3.5" />
                    <span>Powertrain</span>
                  </div>
                  <p className="font-semibold text-white">{vehicle.fuel}</p>
                </div>

                <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                  <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Inspection</span>
                  </div>
                  <p className="font-semibold text-emerald-400">180-Point Passed</p>
                </div>
              </div>

              {/* Features list */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Key Specifications
                </p>
                <div className="space-y-1.5">
                  {vehicle.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onReserve(vehicle.name);
              }}
              className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold tracking-[0.2em] uppercase rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <span>Reserve This Exact Vehicle</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ConfiguratorModalProps {
  silhouette: Silhouette;
  isOpen: boolean;
  onClose: () => void;
  onLockReservation: (details: string) => void;
}

export const ConfiguratorModal: React.FC<ConfiguratorModalProps> = ({
  silhouette,
  isOpen,
  onClose,
  onLockReservation,
}) => {
  const [color, setColor] = useState('Frozen Deep Grey');
  const [aeroPack, setAeroPack] = useState('Stage 2 Vorsteiner Carbon Aero');

  if (!isOpen) return null;

  const colors = [
    { name: 'Frozen Deep Grey', hex: '#374151' },
    { name: 'Isle of Man Green', hex: '#064e3b' },
    { name: 'Alpine White', hex: '#f8fafc' },
    { name: 'Carbon Black Metallic', hex: '#111827' },
  ];

  const aeroPacks = [
    { name: 'Stage 1 Carbon Aero', desc: 'Front splitter + rear ducktail spoiler' },
    { name: 'Stage 2 Vorsteiner Carbon Aero', desc: 'Full dry carbon diffuser, vented hood & side blades' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#0f131a] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl text-left">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-blue-400 uppercase">
            VORSTEINER BESPOKE ATELIER
          </span>
        </div>

        <h3 className="text-2xl font-bold text-white mb-1 uppercase">
          Configure Your {silhouette.name}
        </h3>
        <p className="text-xs text-slate-400 mb-6">
          {silhouette.badge} • {silhouette.hp} • {silhouette.acceleration} 0-100 km/h • {silhouette.price}
        </p>

        {/* Silhouette Visual */}
        <div className="w-full h-40 bg-[#141924] border border-white/5 rounded-xl flex items-center justify-center p-4 mb-6">
          <img
            src={silhouette.image}
            alt={silhouette.name}
            className="max-h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Color Choice */}
        <div className="mb-6">
          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
            Exterior Finish: <span className="text-blue-400 font-normal">{color}</span>
          </label>
          <div className="flex items-center gap-3">
            {colors.map((c) => (
              <button
                key={c.name}
                onClick={() => setColor(c.name)}
                className={`w-10 h-10 rounded-full border-2 transition-all flex items-center justify-center cursor-pointer ${
                  color === c.name ? 'border-blue-500 scale-110 shadow-lg' : 'border-white/20 hover:border-white/40'
                }`}
                style={{ backgroundColor: c.hex }}
                title={c.name}
              >
                {color === c.name && <Check className="w-4 h-4 text-white drop-shadow" />}
              </button>
            ))}
          </div>
        </div>

        {/* Aero Package */}
        <div className="mb-8">
          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
            Aerodynamic Specification
          </label>
          <div className="space-y-2">
            {aeroPacks.map((pack) => (
              <div
                key={pack.name}
                onClick={() => setAeroPack(pack.name)}
                className={`p-3.5 rounded-lg border cursor-pointer transition-all ${
                  aeroPack === pack.name
                    ? 'bg-blue-600/10 border-blue-500 text-white'
                    : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/25'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-wide">{pack.name}</span>
                  {aeroPack === pack.name && <Check className="w-4 h-4 text-blue-400" />}
                </div>
                <p className="text-[11px] text-slate-400 mt-0.5">{pack.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => onLockReservation(`${silhouette.name} (${color}, ${aeroPack})`)}
            className="flex-1 py-3.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold tracking-[0.2em] uppercase rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            <span>Proceed to Reservation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl bg-[#090b0f] border border-white/15 rounded-2xl overflow-hidden shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
          <img
            src="/assets/extracted/hero_full.png"
            alt="Vorsteiner Film Background"
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-radial from-transparent to-black/80"></div>

          <div className="relative z-10 text-center max-w-lg px-6">
            <div className="w-16 h-16 rounded-full bg-blue-600/90 text-white flex items-center justify-center mx-auto mb-4 shadow-[0_0_25px_rgba(37,99,235,0.8)] animate-pulse">
              <Play className="w-7 h-7 fill-current ml-1" />
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white uppercase mb-2">
              Vorsteiner 500: Nürburgring Nordschleife Shakedown
            </h3>
            <p className="text-xs text-slate-300 font-mono">
              OFFICIAL 7:18.4 PRODUCTION LAP RECORD • 4K HDR • BINAURAL V8 SOUND
            </p>
          </div>
        </div>

        <div className="p-4 bg-[#0d1017] border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
          <span className="font-mono">Chapter 01: Aero Dynamics & Precision Downforce</span>
          <span className="text-blue-400 font-semibold font-mono">2026 World Premiere</span>
        </div>
      </div>
    </div>
  );
};

interface AirportModalProps {
  location: AirportLocation | null;
  onClose: () => void;
  onBookAirport: (airportName: string) => void;
}

export const AirportModal: React.FC<AirportModalProps> = ({
  location,
  onClose,
  onBookAirport,
}) => {
  if (!location) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#0e121a] border border-white/15 rounded-2xl overflow-hidden shadow-2xl text-left">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/60 text-slate-300 hover:text-white flex items-center justify-center cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="relative w-full h-48">
          <img
            src={location.image}
            alt={location.city}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e121a] via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-6">
            <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded font-mono">
              AIRPORT HUB {location.code}
            </span>
            <h3 className="text-2xl font-bold text-white mt-1">{location.city}</h3>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-center gap-3 text-xs text-slate-300">
            <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
            <span>Terminal: <strong>{location.terminal}</strong> (Curbside Bay A1-A6)</span>
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Fleet Status: <strong>{location.carsAvailable} Vehicles Pre-Staged & Sanitized</strong></span>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-xs text-slate-300 space-y-2">
            <p className="font-semibold text-white">Curbside Handover Guarantee:</p>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Upon touchdown, your driver or smart key digital beacon will meet you directly at the international arrival exit curb. Average clearance time is under 2 minutes.
            </p>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={() => {
                onClose();
                onBookAirport(location.city);
              }}
              className="flex-1 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold tracking-wider uppercase rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Book Curbside at {location.code}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface SuccessModalProps {
  booking: BookingSubmission | null;
  onClose: () => void;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({ booking, onClose }) => {
  if (!booking) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-md bg-[#0f141f] border border-blue-500/40 rounded-2xl p-6 sm:p-8 text-center shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-4">
          <ShieldCheck className="w-8 h-8" />
        </div>

        <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-blue-400 uppercase">
          RESERVATION DISPATCH CONFIRMED
        </span>

        <h3 className="text-2xl font-bold text-white mt-1 mb-2">
          Vehicle Locked Successfully!
        </h3>

        <p className="text-xs text-slate-300 mb-6 leading-relaxed">
          Thank you, <strong className="text-white">{booking.fullName}</strong>. Your reservation for{' '}
          <strong className="text-blue-400">{booking.vehicleClass}</strong> from{' '}
          <span className="font-mono text-white">{booking.pickupDate}</span> to{' '}
          <span className="font-mono text-white">{booking.returnDate}</span> has been logged in our dispatch matrix.
        </p>

        <div className="bg-[#141a27] border border-white/10 rounded-xl p-4 text-left text-xs mb-6 space-y-2 font-mono">
          <div className="flex justify-between">
            <span className="text-slate-400">Confirmation Ref:</span>
            <span className="text-white font-bold">SKY-VOR-{Math.floor(1000 + Math.random() * 9000)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Contact:</span>
            <span className="text-white">{booking.phone}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Dispatch Response:</span>
            <span className="text-emerald-400 font-bold">&lt; 14 Mins SLA</span>
          </div>
        </div>

        <div className="space-y-3">
          <a
            href={`https://wa.me/923008479211?text=Hello%20SkyKey%20Rentals,%20I%20have%20submitted%20a%20reservation%20for%20${encodeURIComponent(booking.vehicleClass)}%20for%20${booking.pickupDate}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold tracking-wider uppercase rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Connect on WhatsApp</span>
          </a>

          <button
            onClick={onClose}
            className="w-full py-2.5 bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold rounded-lg transition-all cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

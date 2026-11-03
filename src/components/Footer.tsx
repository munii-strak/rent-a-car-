import React from 'react';
import { Key, Globe, Facebook, Instagram, Youtube, MapPin, Phone, Smartphone, MessageCircle, Shield, User } from 'lucide-react';

interface FooterProps {
  onBookNowClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBookNowClick }) => {
  return (
    <footer id="about" className="w-full bg-[#07090c] text-slate-400 border-t border-white/5">
      {/* Upper Main Footer: SkyKey Rentals Pakistan */}
      <div className="max-w-[1520px] mx-auto px-6 sm:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                <Key className="w-5 h-5" />
              </div>
              <div className="leading-none">
                <span className="text-xl font-bold tracking-tight text-white block">
                  SkyKey Rentals
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Premium car rental service across Pakistan with comfort, reliability, and guaranteed rates.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-blue-600 hover:text-white flex items-center justify-center text-slate-400 transition-colors"
                aria-label="Website"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-blue-600 hover:text-white flex items-center justify-center text-slate-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-blue-600 hover:text-white flex items-center justify-center text-slate-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-blue-600 hover:text-white flex items-center justify-center text-slate-400 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 1: COMPANY */}
          <div>
            <h4 className="text-xs font-mono font-bold tracking-[0.2em] text-white uppercase mb-5">
              COMPANY
            </h4>
            <ul className="space-y-3 text-xs">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Col 2: INFORMATION */}
          <div>
            <h4 className="text-xs font-mono font-bold tracking-[0.2em] text-white uppercase mb-5">
              INFORMATION
            </h4>
            <ul className="space-y-3 text-xs">
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Rental Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sitemap</a></li>
            </ul>
          </div>

          {/* Col 3: SERVICES */}
          <div>
            <h4 className="text-xs font-mono font-bold tracking-[0.2em] text-white uppercase mb-5">
              SERVICES
            </h4>
            <ul className="space-y-3 text-xs">
              <li><a href="#" className="hover:text-white transition-colors">Airport Pickup & Drop</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Self-Drive Cars</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Car with Driver</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Wedding Luxury Fleet</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Long-Term Rentals</a></li>
            </ul>
          </div>

          {/* Col 4: CONTACT */}
          <div>
            <h4 className="text-xs font-mono font-bold tracking-[0.2em] text-white uppercase mb-5">
              CONTACT
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>Suite 402, Gulberg III, Lahore, Pakistan</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                <a href="tel:+924235789000" className="hover:text-white transition-colors font-mono">
                  +92 (42) 3578-9000
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Smartphone className="w-4 h-4 text-blue-500 shrink-0" />
                <a href="tel:+923008479211" className="hover:text-white transition-colors font-mono">
                  +92 (300) 847-9211
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="https://wa.me/923008479211" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 text-emerald-400 transition-colors">
                  WhatsApp Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Mid-tier copyright line */}
        <div className="pt-12 mt-12 border-t border-white/5 text-center text-xs text-slate-500">
          <p>© 2026 SkyKey Rentals Pakistan. All rights reserved. Prices quoted in PKR (Rs.).</p>
        </div>
      </div>

      {/* Lower Bar: SkyKey Executive Fleet Management Strip */}
      <div className="bg-[#050608] border-t border-white/10 pt-10 pb-12">
        <div className="max-w-[1520px] mx-auto px-6 sm:px-8">
          {/* Header row with logo, nav links, and call button */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Key className="w-4 h-4" />
              </div>
              <div className="leading-tight">
                <span className="text-sm font-bold text-white tracking-wide block">
                  SkyKey
                </span>
                <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase block">
                  EXECUTIVE RENTALS
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-xs font-semibold tracking-wider text-slate-300">
              <a href="#engineering" className="hover:text-blue-400 transition-colors">Vehicles</a>
              <a href="#how-it-works" className="hover:text-blue-400 transition-colors">How It Works</a>
              <a href="#locations" className="hover:text-blue-400 transition-colors">Locations</a>
              <a href="#about" className="hover:text-blue-400 transition-colors">Reviews</a>
              <a href="#reserve" className="hover:text-blue-400 transition-colors">Deals</a>
              <a href="#about" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-300">
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>+1 (888) 759-7625</span>
              </div>
              <button
                onClick={onBookNowClick}
                className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold tracking-wider uppercase rounded-md transition-all cursor-pointer"
              >
                Book Now
              </button>
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-slate-400">
                <User className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Sub-grid with technical airport fleet features */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8 border-b border-white/10 text-xs text-slate-400">
            <div>
              <p className="leading-relaxed mb-4">
                Aerodynamic airport fleet solutions engineered exclusively for executive punctuality, seamless digital clearance, and corporate transit convenience.
              </p>
              <div className="flex flex-wrap gap-2 text-[10px] font-mono">
                <span className="bg-white/5 px-2 py-0.5 rounded border border-white/10 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  Direct Gate Dispatch
                </span>
                <span className="bg-white/5 px-2 py-0.5 rounded border border-white/10 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  Contactless Key Sync
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <p className="hover:text-white cursor-pointer">Executive Sedans</p>
              <p className="hover:text-white cursor-pointer">Chauffeured SUVs</p>
              <p className="hover:text-white cursor-pointer">Zero-Emission EVs</p>
              <p className="hover:text-white cursor-pointer">Airport Terminal Hubs</p>
              <p className="hover:text-white cursor-pointer">Corporate Flight Tier</p>
            </div>

            <div className="space-y-2">
              <p className="hover:text-white cursor-pointer">Digital Key Access</p>
              <p className="hover:text-white cursor-pointer">Terminal Bay Locator</p>
              <p className="hover:text-white cursor-pointer">Flight Status Sync</p>
              <p className="hover:text-white cursor-pointer">Executive Endorsements</p>
              <p className="hover:text-white cursor-pointer">Corporate Portal</p>
            </div>

            <div className="space-y-2">
              <p className="text-white font-mono font-bold">+1 (888) 759-7625</p>
              <p className="text-slate-400">24/7 Corporate Flight Desk</p>
              <p className="hover:text-white cursor-pointer">Terminal Assistance</p>
              <p className="hover:text-white cursor-pointer">Rental FAQ</p>
              <p className="hover:text-white cursor-pointer">Master Agreement</p>
            </div>
          </div>

          {/* Legal bottom row */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
            <p>© 2026 SkyKey Rentals Global Inc. Precision Airport Mobility. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-slate-300">Privacy Policy</a>
              <a href="#" className="hover:text-slate-300">Terms of Service</a>
              <a href="#" className="hover:text-slate-300">Security & Compliance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

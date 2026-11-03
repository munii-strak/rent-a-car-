import React, { useState } from 'react';
import { Shield, DollarSign, Smartphone, MapPin, ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';
import { BookingSubmission } from '../types';

interface BookingFormProps {
  onSuccess: (data: BookingSubmission) => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState<BookingSubmission>({
    fullName: 'John Smith',
    email: 'john@example.com',
    phone: '+92 300 0000000',
    vehicleClass: 'Executive Sedan — Vorsteiner 500',
    pickupDate: '2026-11-04',
    returnDate: '2026-11-07',
    isHuman: true,
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onSuccess(formData);
    }, 700);
  };

  return (
    <section id="reserve" className="w-full py-24 bg-[#080a0e] border-b border-white/5 relative">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Info & Trust Points */}
          <div className="lg:col-span-5 text-left">
            <p className="text-[11px] font-mono font-bold tracking-[0.25em] text-blue-500 uppercase mb-3">
              READY FOR DEPARTURE
            </p>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
              Lock Your Vehicle <span className="text-blue-500">Now</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-10">
              Fill out what you're looking for and we'll confirm availability within the hour. Your exact model, reserved, no counter, no wait.
            </p>

            {/* Feature 1 */}
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white tracking-wide">
                    Guaranteed Vehicle
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    The exact car you pick is the car you drive
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                  <DollarSign className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white tracking-wide">
                    Upfront Pricing
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    No hidden fees, ever. The price you see is final.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white tracking-wide">
                    Digital Key Access
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Unlock with your phone, no counter, no queue
                  </p>
                </div>
              </div>
            </div>

            {/* Airport Terminal Curbside Dispatch Card */}
            <div className="bg-[#11151f] border border-white/10 rounded-xl p-4 flex items-center gap-3.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <p className="text-xs text-slate-300 leading-snug">
                Instant terminal curbside dispatch available at{' '}
                <strong className="text-white">Karachi (KHI)</strong>,{' '}
                <strong className="text-white">Lahore (LHE)</strong>, and{' '}
                <strong className="text-white">Islamabad (ISB)</strong> airports.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0f131a] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#161b24] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    placeholder="John Smith"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#161b24] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#161b24] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono"
                    placeholder="+92 300 0000000"
                  />
                </div>

                {/* Preferred Vehicle Class */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Preferred Vehicle Class
                  </label>
                  <select
                    value={formData.vehicleClass}
                    onChange={(e) => setFormData({ ...formData, vehicleClass: e.target.value })}
                    className="w-full bg-[#161b24] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all cursor-pointer"
                  >
                    <option value="Executive Sedan — Vorsteiner 500">Executive Sedan — Vorsteiner 500</option>
                    <option value="Luxury Performance Coupe — Vorsteiner 500 Coupe">Luxury Performance Coupe — Vorsteiner 500 Coupe</option>
                    <option value="Prestige SUV 7-Seat — Toyota RAV4 / Land Cruiser">Prestige SUV 7-Seat — Toyota RAV4 / Land Cruiser</option>
                    <option value="Executive Sedan — Honda Accord EX">Executive Sedan — Honda Accord EX</option>
                    <option value="Crew Cab Performance Truck — Ford F-150 XLT">Crew Cab Performance Truck — Ford F-150 XLT</option>
                    <option value="American Muscle Coupe — Chevrolet Camaro LT">American Muscle Coupe — Chevrolet Camaro LT</option>
                  </select>
                </div>

                {/* Pickup & Return Dates */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                      Pickup Date
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.pickupDate}
                      onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                      className="w-full bg-[#161b24] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                      Return Date
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.returnDate}
                      onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
                      className="w-full bg-[#161b24] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono"
                    />
                  </div>
                </div>

                {/* Human Verification Box (reCAPTCHA style) */}
                <div className="bg-[#141822] border border-white/10 rounded-lg p-3.5 flex items-center justify-between">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.isHuman}
                      onChange={(e) => setFormData({ ...formData, isHuman: e.target.checked })}
                      className="w-5 h-5 rounded border-white/20 bg-[#1e2430] text-blue-600 focus:ring-blue-500 cursor-pointer"
                    />
                    <span className="text-xs text-slate-300 font-medium">Verify you are human</span>
                  </label>
                  <div className="flex flex-col items-center text-[10px] text-slate-500">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Security Pass</span>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-blue-600 hover:bg-blue-500 active:scale-[0.99] text-white text-xs sm:text-sm font-bold tracking-[0.2em] uppercase rounded-lg transition-all duration-200 flex items-center justify-center gap-3 shadow-[0_6px_24px_rgba(37,99,235,0.4)] cursor-pointer"
                >
                  <span>{loading ? 'Confirming Availability...' : 'Lock Your Vehicle Now'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Subtext info & WhatsApp Link */}
                <div className="text-center pt-2 text-xs text-slate-400">
                  <p>
                    No payment required to submit. We'll respond within 60 minutes.
                  </p>
                  <p className="mt-1">
                    Prefer WhatsApp?{' '}
                    <a
                      href="https://wa.me/923008479211"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 underline font-semibold inline-flex items-center gap-1"
                    >
                      <span>Message us</span>
                      <MessageSquare className="w-3 h-3" />
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

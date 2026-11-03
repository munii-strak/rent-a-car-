import React from 'react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: 1,
      title: 'SEARCH',
      desc: 'Browse our certified performance inventory with high-grade filters and verified specs.',
      image: '/assets/extracted/step1_search_art.png',
    },
    {
      num: 2,
      title: 'SELECT',
      desc: 'Choose your ideal machine, body style, powertrain, and flexible delivery hub.',
      image: '/assets/extracted/step2_select_art.png',
    },
    {
      num: 3,
      title: 'BOOK',
      desc: 'Digital signature, contactless instant key dispatch, and hit the open road.',
      image: '/assets/extracted/step3_book_art.png',
    },
  ];

  return (
    <section id="how-it-works" className="w-full py-28 bg-[#090b10] border-b border-white/5 relative">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-8">
        {/* Title Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[11px] font-mono font-bold tracking-[0.25em] text-slate-500 uppercase mb-2">
            SEARCH • SELECT • BOOK
          </p>

          <h2 className="text-4xl sm:text-6xl font-light text-white mb-4">
            How it <span className="font-serif-accent italic font-normal text-blue-500">Works</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-400">
            Experience seamless luxury acquisition in three frictionless steps engineered for precision and peace of mind.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-[#0f131b] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center shadow-xl group hover:border-blue-500/40 hover:bg-[#121722] transition-all duration-300"
            >
              {/* Vector Illustration Container */}
              <div className="w-full h-56 flex items-center justify-center mb-8 overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Number Badge & Title */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shadow-[0_0_12px_rgba(37,99,235,0.6)]">
                  {step.num}
                </div>
                <h3 className="text-base font-bold tracking-[0.18em] text-white uppercase">
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xs">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

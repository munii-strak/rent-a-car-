import React, { useState, useEffect, useRef } from 'react';
import { TESTIMONIALS as INITIAL_TESTIMONIALS } from '../data';
import { Testimonial } from '../types';
import { Star, ChevronLeft, ChevronRight, PlusCircle, MessageSquareQuote, Check } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(INITIAL_TESTIMONIALS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Form state for adding new comment/review
  const [newName, setNewName] = useState('');
  const [newLocation, setNewLocation] = useState('Lahore Airport');
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [submittedFeedback, setSubmittedFeedback] = useState(false);

  // Determine how many cards to show per slide
  // Desktop: 3 cards, Tablet: 2 cards, Mobile: 1 card
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - cardsPerView);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  // Auto-play sliding comments every 5 seconds unless paused
  useEffect(() => {
    if (isPaused || isAddModalOpen) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, isAddModalOpen, maxIndex]);

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newComment.trim()) return;

    const newTestimonial: Testimonial = {
      id: `review-${Date.now()}`,
      name: newName.trim(),
      role: 'Verified Renter',
      location: newLocation,
      avatar: '/assets/extracted/avatar_ahmed.png',
      content: `“${newComment.trim().replace(/^["“]|["”]$/g, '')}”`,
      rating: newRating,
    };

    setTestimonials((prev) => [newTestimonial, ...prev]);
    setCurrentIndex(0);
    setSubmittedFeedback(true);
    setTimeout(() => {
      setSubmittedFeedback(false);
      setIsAddModalOpen(false);
      setNewName('');
      setNewComment('');
    }, 1500);
  };

  // Number of indicator dots (pages)
  const totalPages = maxIndex + 1;

  return (
    <section
      className="w-full py-24 bg-[#090b0f] border-b border-white/5 relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1520px] mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[11px] font-mono font-bold tracking-[0.25em] text-blue-500 uppercase mb-3">
            WHAT OUR CUSTOMERS SAY
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Trusted by Travelers Across Pakistan
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Read verified reviews from business executives and travelers across Pakistan.
          </p>
        </div>

        {/* Carousel Viewport Container */}
        <div className="relative max-w-6xl mx-auto mb-12 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
            }}
          >
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="shrink-0 px-3 sm:px-4"
                style={{ width: `${100 / cardsPerView}%` }}
              >
                <div className="h-full bg-[#0e1219] border border-white/10 rounded-2xl p-7 flex flex-col justify-between shadow-xl relative group hover:border-blue-500/30 hover:bg-[#111622] transition-all duration-300 min-h-[300px]">
                  <div>
                    {/* 5 Stars and Quote Mark 99 */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-1 text-amber-400">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-2xl font-serif text-slate-600 select-none font-bold">
                        ”
                      </span>
                    </div>

                    {/* Review Text */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-8">
                      {t.content}
                    </p>
                  </div>

                  {/* User Profile Footer */}
                  <div className="pt-5 border-t border-white/10 flex items-center gap-3.5">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-11 h-11 rounded-full object-cover border-2 border-blue-500/40 shadow-sm shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-white tracking-wide">
                        {t.name}
                      </h4>
                      <p className="text-[11px] text-slate-400 flex items-center gap-1.5 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block"></span>
                        <span>{t.role}</span>
                        <span>•</span>
                        <span>{t.location}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Controls & Pagination Dots */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <div className="flex items-center gap-4">
            <button
              onClick={prevSlide}
              className="w-9 h-9 rounded-full border border-white/15 bg-white/5 hover:bg-blue-600 hover:border-blue-500 flex items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer shadow-md active:scale-95"
              aria-label="Previous comment slide"
              title="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Clickable Dynamic Dots */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx
                      ? 'w-7 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]'
                      : 'w-2 bg-slate-600 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                  title={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-9 h-9 rounded-full border border-white/15 bg-white/5 hover:bg-blue-600 hover:border-blue-500 flex items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer shadow-md active:scale-95"
              aria-label="Next comment slide"
              title="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Add Review / Comment Button */}
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white transition-all cursor-pointer"
          >
            <PlusCircle className="w-4 h-4 text-blue-400" />
            <span>Write a Comment / Review</span>
          </button>
        </div>
      </div>

      {/* Add Comment Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-lg bg-[#0e121a] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl text-left">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquareQuote className="w-5 h-5 text-blue-400" />
              <span className="text-[10px] font-mono font-bold tracking-widest text-blue-400 uppercase">
                COMMUNITY FEEDBACK
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-1">
              Share Your Rental Experience
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Your comment will be verified and published to the live testimonials matrix.
            </p>

            {submittedFeedback ? (
              <div className="py-8 text-center text-emerald-400 flex flex-col items-center">
                <Check className="w-12 h-12 mb-3 bg-emerald-500/10 p-2 rounded-full border border-emerald-500/30" />
                <p className="font-bold text-sm">Thank you for your feedback!</p>
                <p className="text-xs text-slate-400 mt-1">Your comment is now live in the slider.</p>
              </div>
            ) : (
              <form onSubmit={handleAddComment} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="e.g. Tariq Mehmood"
                    className="w-full bg-[#151a24] border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Pickup Location / Airport
                  </label>
                  <select
                    value={newLocation}
                    onChange={(e) => setNewLocation(e.target.value)}
                    className="w-full bg-[#151a24] border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500 cursor-pointer"
                  >
                    <option value="Lahore Airport (LHE)">Lahore Airport (LHE)</option>
                    <option value="Karachi Hub (KHI)">Karachi Hub (KHI)</option>
                    <option value="Islamabad Airport (ISB)">Islamabad Airport (ISB)</option>
                    <option value="Faisalabad 24/7 Hub">Faisalabad 24/7 Hub</option>
                    <option value="Peshawar Bacha Khan Hub">Peshawar Bacha Khan Hub</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Rating (Stars)
                  </label>
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewRating(star)}
                        className="cursor-pointer p-1"
                      >
                        <Star
                          className={`w-5 h-5 ${
                            star <= newRating
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-slate-600'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Your Comment / Review
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Share your experience regarding car cleanliness, pickup speed, staff courtesy..."
                    className="w-full bg-[#151a24] border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold tracking-wider uppercase rounded-lg transition-all cursor-pointer"
                  >
                    Post Comment
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsAddModalOpen(false)}
                    className="px-4 py-3 bg-white/5 hover:bg-white/10 text-slate-400 text-xs rounded-lg transition-all cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

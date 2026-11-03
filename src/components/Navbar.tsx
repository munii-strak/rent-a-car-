import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onReserveClick: () => void;
  onExploreModels: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onReserveClick, onExploreModels }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0b0d11]/85 backdrop-blur-md border-b border-white/5 transition-all">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
        {/* Brand Zone */}
        <div className="flex items-center gap-2">
          <a href="#" className="flex items-center gap-2 group">
            <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-[0.22em] text-white group-hover:text-blue-400 transition-colors uppercase">
              Vorsteiner
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)] inline-block"></span>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-10 text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-300">
          <button 
            onClick={onExploreModels} 
            className="hover:text-blue-400 transition-colors cursor-pointer"
          >
            Models
          </button>
          <a href="#engineering" className="hover:text-blue-400 transition-colors">
            Engineering
          </a>
          <a href="#how-it-works" className="hover:text-blue-400 transition-colors">
            Experience
          </a>
          <a href="#locations" className="hover:text-blue-400 transition-colors">
            Ownership
          </a>
          <a href="#about" className="hover:text-blue-400 transition-colors">
            About
          </a>
        </nav>

        {/* Right Action Zone */}
        <div className="flex items-center gap-4">
          <button
            onClick={onReserveClick}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 active:scale-95 text-white text-[11px] font-bold tracking-[0.2em] uppercase rounded-sm transition-all duration-200 shadow-[0_4px_16px_rgba(37,99,235,0.35)] cursor-pointer"
          >
            Reserve
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white lg:hidden transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e1117] border-b border-white/10 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-4 text-xs font-semibold tracking-[0.2em] uppercase text-slate-300">
            <button
              onClick={() => {
                onExploreModels();
                setMobileMenuOpen(false);
              }}
              className="text-left hover:text-blue-400 transition-colors py-2"
            >
              Models
            </button>
            <a
              href="#engineering"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-blue-400 transition-colors py-2"
            >
              Engineering
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-blue-400 transition-colors py-2"
            >
              Experience
            </a>
            <a
              href="#locations"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-blue-400 transition-colors py-2"
            >
              Ownership
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-blue-400 transition-colors py-2"
            >
              About
            </a>
            <button
              onClick={() => {
                onReserveClick();
                setMobileMenuOpen(false);
              }}
              className="w-full text-center py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold tracking-[0.2em] uppercase rounded-sm transition-all"
            >
              Lock Vehicle Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

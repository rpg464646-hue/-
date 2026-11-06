import React, { useState } from 'react';
import { Menu, X, CalendarCheck } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'tables', label: '即時桌況' },
    { id: 'matchmaking', label: '揪牌大廳' },
    { id: 'calculator', label: '台數試算' },
    { id: 'menu', label: '雀友特饌' },
    { id: 'pricing', label: '收費規範' },
    { id: 'about', label: '會館位置' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-stone-950/90 backdrop-blur-md border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single element) */}
        <a 
          href="#" 
          className="font-serif-tc text-2xl font-bold tracking-tight text-amber-50 hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
        >
          天和閣精品雀莊
        </a>

        {/* Zone 2: Single-line navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-300">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 text-stone-300 ${
                  isActive 
                    ? 'border-amber-500 text-amber-400 font-semibold' 
                    : 'border-transparent hover:text-white hover:border-stone-500'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenBooking}
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-stone-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg shadow-md transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            <CalendarCheck className="w-4 h-4 text-stone-950" />
            <span>預約包廂</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-400 hover:text-white rounded-lg focus:outline-none"
            aria-label="開啟選單"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-900 border-b border-stone-800 px-5 py-4 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="block w-full text-left py-2 px-3 text-base font-medium text-stone-300 hover:text-amber-400 hover:bg-stone-800/60 rounded-md"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 text-center text-sm font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-lg"
            >
              立即預約包廂
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

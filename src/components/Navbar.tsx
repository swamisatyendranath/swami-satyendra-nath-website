import React, { useState } from 'react';
import { Menu, X, Phone, MessageCircle, Globe } from 'lucide-react';
import { Language, CONTACT_INFO } from '../data/content';
import { TempleBell } from './TempleDecorations';

interface NavbarProps {
  currentLang: Language;
  onToggleLang: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentLang, onToggleLang }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', labelHi: 'गृह', labelEn: 'Home' },
    { href: '#tantric-pooja', labelHi: 'तांत्रिक पूजा व समाधान', labelEn: 'Tantric Puja' },
    { href: '#about', labelHi: 'साधक परिचय', labelEn: 'About' },
    { href: '#gallery', labelHi: 'साधना दर्शन', labelEn: 'Gallery' },
    { href: '#rituals', labelHi: 'वैदिक अनुष्ठान', labelEn: 'Rituals' },
    { href: '#videos', labelHi: 'फेसबुक वीडियो व प्रवचन', labelEn: 'Facebook Videos' },
    { href: '#contact', labelHi: 'सम्पर्क', labelEn: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-neutral-800 shadow-2xl shadow-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-20">
          {/* Zone 1: Single Text Element Wordmark with Temple Bell */}
          <div className="flex items-center gap-3 shrink-0">
            <TempleBell size={36} className="hidden sm:inline-flex" />
            <a
              href="#home"
              className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-amber-200 hover:text-amber-100 transition-colors whitespace-nowrap shrink-0 font-cinzel flex items-center gap-1.5"
            >
              <span className="text-amber-400">॥</span>
              <span>{currentLang === 'hi' ? 'स्वामी सत्येन्द्र नाथ जी' : 'Swami Satyendra Nath'}</span>
              <span className="text-amber-400">॥</span>
            </a>
          </div>

          {/* Zone 2: Concise Single-Line Nav Links */}
          <nav className="hidden xl:flex items-center gap-5 text-xs lg:text-sm font-medium text-amber-100/85">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-amber-400/60 font-devanagari"
              >
                {currentLang === 'hi' ? link.labelHi : link.labelEn}
              </a>
            ))}
          </nav>

          {/* Zone 3: WhatsApp Action & Language Switcher */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Language Switch */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-[#141414] border border-neutral-700 hover:border-amber-400 text-amber-200 hover:text-amber-100 text-xs font-medium transition-all shadow-sm"
              title={currentLang === 'hi' ? 'Switch to English' : 'हिन्दी में बदलें'}
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span className="whitespace-nowrap font-sans font-semibold">
                {currentLang === 'hi' ? 'EN' : 'हिन्दी'}
              </span>
            </button>

            {/* Direct WhatsApp Callout: 8800460088 */}
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md shadow-emerald-950/60 transition-all whitespace-nowrap shrink-0 border border-emerald-400/40"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>{CONTACT_INFO.phoneDisplay}</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-md text-amber-200 hover:text-amber-100 hover:bg-[#1A1A1A] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0D0D0D] border-b border-neutral-800 px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-neutral-800">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-xs sm:text-sm font-medium text-amber-100/90 hover:bg-[#1A1A1A] hover:text-amber-300 transition-colors"
              >
                {currentLang === 'hi' ? link.labelHi : link.labelEn}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-[#141414] border border-amber-600/60 text-amber-200 font-medium text-xs sm:text-sm"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{`कॉल करें: ${CONTACT_INFO.phoneDisplay}`}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

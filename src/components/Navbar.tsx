
import React, { useState } from 'react';
import { Menu, X, Phone, MessageCircle, Globe } from 'lucide-react';
import { Language, CONTACT_INFO } from '../data/content';
import { TempleBell } from './TempleDecorations';

interface NavbarProps {
  currentLang: Language;
  onToggleLang: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onToggleLang,
}) => {
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

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#080706]/95 backdrop-blur-xl border-b border-amber-500/30 shadow-lg shadow-black/40">
      <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-8">
        <div className="min-h-[68px] sm:min-h-[78px] flex items-center justify-between gap-2 sm:gap-4">

          {/* Logo and Name */}
          <a
            href="#home"
            onClick={closeMenu}
            className="flex items-center gap-2 min-w-0"
          >
            <TempleBell
              size={34}
              className="hidden sm:inline-flex text-amber-400 shrink-0"
            />
            <span className="text-amber-400 text-sm sm:text-lg">॥</span>
            <span className="font-bold text-amber-100 text-sm sm:text-lg md:text-xl leading-tight whitespace-nowrap">
              {currentLang === 'hi'
                ? 'स्वामी सत्येन्द्र नाथ जी'
                : 'Swami Satyendra Nath'}
            </span>
            <span className="text-amber-400 text-sm sm:text-lg">॥</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-4 2xl:gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-amber-100/85 hover:text-amber-300 text-sm transition-colors whitespace-nowrap py-2 border-b border-transparent hover:border-amber-400"
              >
                {currentLang === 'hi' ? link.labelHi : link.labelEn}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 shrink-0">

            {/* Language */}
            <button
              type="button"
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-2.5 py-2 rounded-lg border border-amber-500/30 bg-amber-950/30 text-amber-200 hover:bg-amber-900/40 transition-colors text-xs sm:text-sm"
              aria-label="Change language"
            >
              <Globe className="w-4 h-4 text-amber-400" />
              <span>{currentLang === 'hi' ? 'EN' : 'हिन्दी'}</span>
            </button>

            {/* WhatsApp */}
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp पर संपर्क करें"
              className="flex items-center justify-center gap-2 w-10 h-10 sm:w-auto sm:px-4 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white border border-emerald-400/40 shadow-md transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="hidden sm:inline text-sm font-semibold">
                WhatsApp
              </span>
            </a>

            {/* Mobile Menu */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-amber-500/30 bg-amber-950/30 text-amber-200 hover:bg-amber-900/40"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen
                ? <X className="w-6 h-6" />
                : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#100D09] border-t border-amber-500/20 shadow-2xl">
          <nav className="max-w-7xl mx-auto px-3 sm:px-5 py-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="flex items-center px-4 py-3 rounded-lg text-sm sm:text-base text-amber-100/90 bg-white/[0.03] border border-white/5 hover:border-amber-500/40 hover:bg-amber-900/20 transition-colors"
                >
                  {currentLang === 'hi' ? link.labelHi : link.labelEn}
                </a>
              ))}
            </div>

            <a
              href={`tel:${CONTACT_INFO.phone}`}
              onClick={closeMenu}
              className="mt-4 flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-amber-700/20 border border-amber-500/40 text-amber-200 font-semibold text-sm"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              कॉल करें: {CONTACT_INFO.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};


import React from 'react';
import { ArrowUp, MapPin, MessageCircle, Phone, Mail, Facebook } from 'lucide-react';
import { Language, CONTACT_INFO } from '../data/content';
import { DiyaLamp, SacredLotus } from './TempleDecorations';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-amber-200/80 border-t border-neutral-900 pt-16 pb-24 sm:pb-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Shanti Mantra Inscription Box */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-[#0A0A0A] border border-neutral-800 text-center relative overflow-hidden">
          <div className="flex items-center justify-center gap-4 mb-3">
            <DiyaLamp size="sm" />
            <span className="text-amber-400 font-bold font-cinzel text-sm">॥ वैदिक एवं अघोर शान्ति पाठ ॥</span>
            <DiyaLamp size="sm" />
          </div>

          <p className="text-xs sm:text-sm font-devanagari text-amber-200/90 leading-relaxed max-w-2xl mx-auto">
            ॐ द्यौः शान्तिरन्तरिक्षं शान्तिः पृथिवी शान्तिरापः शान्तिरोषधयः शान्तिः ।<br />
            वनस्पतयः शान्तिर्विश्वेदेवाः शान्तिर्ब्रह्म शान्तिः सर्वं शान्तिः शान्तिरेव शान्तिः सा मा शान्तिरेधि ॥
          </p>
          <p className="text-xs text-amber-400 font-medium mt-2">
            ॥ ॐ शान्तिः शान्तिः शान्तिः • ॐ नमः शिवाय ॥
          </p>
        </div>

        {/* 3-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-neutral-900">
          {/* Col 1: Identity & Dedication */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <SacredLotus size={32} />
              <h3 className="text-lg font-bold font-heading text-amber-100">
                {currentLang === 'hi' ? 'स्वामी सत्येन्द्र नाथ जी' : 'Swami Satyendra Nath Ji'}
              </h3>
            </div>
            <p className="text-xs text-amber-300/80 leading-relaxed font-devanagari">
              {currentLang === 'hi'
                ? 'अघोर एवं तांत्रिक पूजा, महाकाली-भैरव साधना, दुर्गा सप्तशती एवं वैदिक अनुष्ठानों द्वारा जीवन की गंभीर समस्याओं का निवारण।'
                : 'Aghor and Tantric master dedicated to spiritual remedies, Durga Saptashati, and Vedic invocations.'}
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-400/90 pt-1">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{CONTACT_INFO.locationsHi}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-amber-400 font-cinzel font-semibold">
              {currentLang === 'hi' ? 'महत्वपूर्ण अनुभाग' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-2 text-xs font-devanagari">
              <li>
                <a href="#home" className="hover:text-amber-300 transition-colors">
                  {currentLang === 'hi' ? 'मुख्य पृष्ठ (Home)' : 'Home'}
                </a>
              </li>
              <li>
                <a href="#tantric-pooja" className="hover:text-amber-300 transition-colors">
                  {currentLang === 'hi' ? 'तांत्रिक पूजा एवं समाधान' : 'Tantric Puja & Solutions'}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-300 transition-colors">
                  {currentLang === 'hi' ? 'साधक परिचय व तपोभूमि' : 'About Swami Ji'}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-300 transition-colors">
                  {currentLang === 'hi' ? 'तपस्या एवं साधना दर्शन' : 'Sadhana Photo Gallery'}
                </a>
              </li>
              <li>
                <a href="#rituals" className="hover:text-amber-300 transition-colors">
                  {currentLang === 'hi' ? 'वैदिक अनुष्ठान व महायज्ञ' : 'Vedic Rituals'}
                </a>
              </li>
              <li>
                <a href="#videos" className="hover:text-amber-300 transition-colors">
                  {currentLang === 'hi' ? 'मेरे फेसबुक वीडियो एवं धार्मिक प्रवचन' : 'My Facebook Videos & Religious Discourses'}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-300 transition-colors">
                  {currentLang === 'hi' ? 'सम्पर्क एवं मार्गदर्शन' : 'Contact Swami Ji'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-amber-400 font-cinzel font-semibold">
              {currentLang === 'hi' ? 'सीधा संपर्क सूत्र' : 'Direct Helpline'}
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-emerald-300 hover:underline font-semibold"
                >
                  WhatsApp: {CONTACT_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="font-mono text-amber-200 hover:underline">
                  कॉल: {CONTACT_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Facebook className="w-4 h-4 text-blue-400" />
                <a
                  href={CONTACT_INFO.facebookPageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:underline"
                >
                  फेसबुक प्रोफाइल (Facebook Profile)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="font-mono text-amber-300 hover:underline">
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>
            <p className="text-[11px] text-amber-400/60 pt-2">
              {currentLang === 'hi'
                ? 'परामर्श समय: प्रातः ९:०० से रात्रि ९:०० बजे तक'
                : 'Hours: 9:00 AM – 9:00 PM IST'}
            </p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-amber-400/60 font-devanagari">
          <p>
            © {new Date().getFullYear()} स्वामी सत्येन्द्र नाथ जी । दिल्ली • हरिद्वार • काशी ।
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141414] hover:bg-[#202020] text-amber-300 border border-neutral-800 text-xs transition-colors cursor-pointer"
          >
            <span>{currentLang === 'hi' ? 'शीर्ष पर जाएं' : 'Back to Top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

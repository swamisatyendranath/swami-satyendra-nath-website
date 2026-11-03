import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TantricServices } from './components/TantricServices';
import { About } from './components/About';
import { PhotoGallery } from './components/PhotoGallery';
import { TantraKnowledge } from './components/TantraKnowledge';
import { PujaRituals } from './components/PujaRituals';
import { VideosSection } from './components/VideosSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Language, CONTACT_INFO } from './data/content';
import { MessageCircle, Phone } from 'lucide-react';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('hi');

  const toggleLanguage = () => {
    setCurrentLang((prev) => (prev === 'hi' ? 'en' : 'hi'));
  };

  return (
    <div className="min-h-screen bg-black text-[#F3E8D0] selection:bg-[#B91C1C] selection:text-[#FDE047] flex flex-col font-devanagari relative">
      {/* Top Navigation */}
      <Navbar currentLang={currentLang} onToggleLang={toggleLanguage} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 1. Hero Section with Real Photos of Swami Ji & Blazing Havan */}
        <Hero currentLang={currentLang} />

        {/* 2. Core Tantric Puja & Problem Resolution Section (Court case, divorce, marital, vashikaran, etc.) */}
        <TantricServices currentLang={currentLang} />

        {/* 3. About Section with Tapobhoomi in Delhi, Haridwar & Kashi */}
        <About currentLang={currentLang} />

        {/* 4. Sacred Photo Gallery (All 8 real photos of Swami Ji, Tapasya & Deities) */}
        <PhotoGallery currentLang={currentLang} />

        {/* 5. Authentic Tantra Knowledge & Philosophy */}
        <TantraKnowledge currentLang={currentLang} />

        {/* 6. Puja, Path & Mahayajnas (Durga Saptashati, Chandi, Rudrabhishek) */}
        <PujaRituals currentLang={currentLang} />

        {/* 7. Videos Section */}
        <VideosSection currentLang={currentLang} />

        {/* 8. Contact Section (Direct WhatsApp & Phone) */}
        <Contact currentLang={currentLang} />
      </main>

      {/* Footer */}
      <Footer currentLang={currentLang} />

      {/* Mobile Sticky Quick Action Bar (Direct WhatsApp & Call) */}
      <aside
        aria-label="Quick contact"
        className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-md border-t border-neutral-800 p-2.5 flex items-center justify-around gap-2 shadow-2xl"
      >
        <a
          href={CONTACT_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-emerald-600 text-white font-bold text-xs shadow-md border border-emerald-400/50"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>WhatsApp 8800460088</span>
        </a>
        <a
          href={`tel:${CONTACT_INFO.phone}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-neutral-900 text-amber-200 font-bold text-xs shadow-md border border-neutral-700"
        >
          <Phone className="w-4 h-4 text-amber-400" />
          <span>कॉल करें</span>
        </a>
      </aside>
    </div>
  );
}

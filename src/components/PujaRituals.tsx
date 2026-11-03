import React, { useState } from 'react';
import { Flame, Sparkles, Droplets, Sun, CircleDot, Mountain, Check, Info, MessageCircle } from 'lucide-react';
import { Language, ritualsData, RitualItem, IMAGES, CONTACT_INFO } from '../data/content';
import { TempleDivider } from './TempleDecorations';

interface RitualsProps {
  currentLang: Language;
}

export const PujaRituals: React.FC<RitualsProps> = ({ currentLang }) => {
  const [selectedRitual, setSelectedRitual] = useState<RitualItem | null>(null);

  // Map ritual cards to authentic visual images provided by the user
  const getRitualImage = (id: string) => {
    switch (id) {
      case 'durga-saptashati':
      case 'chandi-path':
      case 'navratri-puja':
        return IMAGES.deviDurgaMaa;
      case 'rudrabhishek':
        return IMAGES.bhagwanShiva;
      case 'havan-yajna':
        return IMAGES.swamiTantricAgni;
      case 'graha-shanti':
      default:
        return IMAGES.himalayanKedarnath;
    }
  };

  return (
    <section id="rituals" className="py-20 px-4 sm:px-6 lg:px-8 bg-black border-b border-neutral-800 relative">
      <div className="max-w-7xl mx-auto">
        <TempleDivider title={currentLang === 'hi' ? 'वैदिक एवं तांत्रिक अनुष्ठान' : 'Vedic & Tantric Rituals'} />

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#141414] border border-amber-600/40 text-amber-300 text-xs font-semibold mb-3">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>{currentLang === 'hi' ? 'शास्त्रोक्त विधान' : 'Scriptural Invocations'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-gold-gradient">
            {currentLang === 'hi'
              ? 'प्रमुख पूजा, पाठ एवं महायज्ञ'
              : 'Sacred Pujas, Recitations & Mahayajnas'}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-amber-200/80 leading-relaxed font-devanagari">
            {currentLang === 'hi'
              ? 'दुर्गा सप्तशती, शतचंडी, रुद्राभिषेक एवं तांत्रिक महायज्ञ—स्वामी जी के पावन सानिध्य में दिल्ली, हरिद्वार एवं काशी में सम्पन्न।'
              : 'Sacred ceremonies conducted in strict accordance with Vedic & Agamic canons across Delhi, Haridwar, and Kashi.'}
          </p>
        </div>

        {/* Rituals Grid with Real Deity & Sacred Fire Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ritualsData.map((ritual) => {
            const cardImg = getRitualImage(ritual.id);
            return (
              <div
                key={ritual.id}
                className="rounded-2xl bg-gradient-to-b from-[#0F0F0F] to-[#080808] border border-neutral-800 hover:border-amber-400/80 transition-all duration-300 overflow-hidden shadow-xl flex flex-col justify-between group"
              >
                <div>
                  {/* Photo Header */}
                  <div className="relative h-48 overflow-hidden bg-black">
                    <img
                      src={cardImg}
                      alt={ritual.titleHi}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-black/40 to-transparent" />

                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-sm border border-neutral-700 text-[11px] font-semibold text-amber-300">
                      {ritual.sanskritName.split(' ')[0]}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-amber-100 font-heading mb-1 group-hover:text-amber-200 transition-colors">
                      {currentLang === 'hi' ? ritual.titleHi : ritual.titleEn}
                    </h3>
                    <p className="text-xs text-amber-400/90 font-medium mb-3 italic">
                      {currentLang === 'hi' ? ritual.taglineHi : ritual.taglineEn}
                    </p>

                    <p className="text-xs sm:text-sm text-amber-200/80 leading-relaxed mb-4">
                      {currentLang === 'hi' ? ritual.descriptionHi : ritual.descriptionEn}
                    </p>

                    {/* Significance */}
                    <div className="p-3 rounded-lg bg-[#141414] border border-neutral-800 mb-4">
                      <span className="text-[11px] font-semibold text-amber-300 block mb-1">
                        {currentLang === 'hi' ? 'शास्त्रोक्त फल व महत्व:' : 'Spiritual Significance:'}
                      </span>
                      <p className="text-xs text-amber-100/75 leading-relaxed">
                        {currentLang === 'hi' ? ritual.significanceHi : ritual.significanceEn}
                      </p>
                    </div>

                    {/* Key Elements */}
                    <div className="space-y-1.5 pt-2 border-t border-neutral-800">
                      <span className="text-[11px] font-semibold text-amber-400/90 uppercase tracking-wider block">
                        {currentLang === 'hi' ? 'अनुष्ठान के प्रमुख अंग:' : 'Key Ceremonial Rites:'}
                      </span>
                      {(currentLang === 'hi' ? ritual.keyElementsHi : ritual.keyElementsEn).map((elem, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-amber-200/80">
                          <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>{elem}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer with Modal & WhatsApp Consultation */}
                <div className="p-6 pt-0">
                  <div className="pt-3 border-t border-neutral-800 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSelectedRitual(ritual)}
                      className="inline-flex items-center gap-1.5 text-xs text-amber-300 hover:text-amber-100 font-semibold transition-colors cursor-pointer"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>{currentLang === 'hi' ? 'विस्तृत विधान' : 'Detailed Vidhan'}</span>
                    </button>

                    <a
                      href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                        `प्रणाम स्वामी जी, मैं "${ritual.titleHi}" के सम्बन्ध में मार्गदर्शन चाहता हूँ।`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-800/80 hover:bg-emerald-700 text-white text-[11px] font-semibold border border-emerald-600/50"
                    >
                      <MessageCircle className="w-3 h-3" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for detailed view */}
        {selectedRitual && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in">
            <div className="relative max-w-2xl w-full rounded-2xl bg-[#0D0D0D] border border-neutral-700 p-6 sm:p-8 shadow-2xl text-amber-100 max-h-[90vh] overflow-y-auto">
              <div className="flex items-start justify-between gap-4 mb-4 border-b border-neutral-800 pb-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-amber-400 font-cinzel">
                    {selectedRitual.sanskritName}
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-gold-gradient mt-1">
                    {currentLang === 'hi' ? selectedRitual.titleHi : selectedRitual.titleEn}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedRitual(null)}
                  className="p-1.5 rounded-lg text-amber-400 hover:text-white bg-[#1A1A1A] hover:bg-[#262626] transition-colors"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-amber-200/90 font-devanagari">
                <p>{currentLang === 'hi' ? selectedRitual.descriptionHi : selectedRitual.descriptionEn}</p>

                <div className="p-4 rounded-xl bg-[#141414] border border-neutral-800">
                  <h4 className="font-semibold text-amber-300 mb-2">
                    {currentLang === 'hi' ? 'शास्त्रोक्त आधार एवं फल:' : 'Scriptural Reference & Fruit:'}
                  </h4>
                  <p>{currentLang === 'hi' ? selectedRitual.significanceHi : selectedRitual.significanceEn}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-amber-300 mb-2">
                    {currentLang === 'hi' ? 'अनुष्ठान के अनिवार्य अंग:' : 'Core Requirements & Steps:'}
                  </h4>
                  <ul className="space-y-1.5 pl-4 list-disc text-amber-200/80">
                    {(currentLang === 'hi' ? selectedRitual.keyElementsHi : selectedRitual.keyElementsEn).map((el, i) => (
                      <li key={i}>{el}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 rounded-lg bg-[#080808] border border-neutral-800 text-xs text-amber-400/80">
                  {currentLang === 'hi'
                    ? `स्वामी जी से सीधे संपर्क हेतु व्हाट्सएप करें: ${CONTACT_INFO.phoneDisplay} (दिल्ली, हरिद्वार, काशी)`
                    : `Direct spiritual consultation on WhatsApp: ${CONTACT_INFO.phoneDisplay} (Delhi, Haridwar, Kashi)`}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800 flex justify-end gap-3">
                <a
                  href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
                    `प्रणाम स्वामी जी, मैं "${selectedRitual.titleHi}" के सम्बन्ध में मार्गदर्शन चाहता हूँ।`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold"
                >
                  व्हाट्सएप पर पूछें
                </a>
                <button
                  onClick={() => setSelectedRitual(null)}
                  className="px-5 py-2 rounded-lg bg-[#1A1A1A] hover:bg-[#262626] text-amber-200 text-xs font-semibold border border-neutral-700"
                >
                  {currentLang === 'hi' ? 'बंद करें' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

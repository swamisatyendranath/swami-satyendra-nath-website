import React from 'react';
import { MessageCircle, Phone, MapPin, Flame, Shield, Sparkles } from 'lucide-react';
import { Language, CONTACT_INFO, IMAGES } from '../data/content';
import { DiyaLamp, TempleBell, SriYantraEmblem } from './TempleDecorations';

interface HeroProps {
  currentLang: Language;
}

export const Hero: React.FC<HeroProps> = ({ currentLang }) => {
  const whatsappUrl = `${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
    'प्रणाम स्वामी जी, मैं आपकी तांत्रिक पूजा एवं अनुष्ठान सम्बन्धी सहायता हेतु संपर्क कर रहा हूँ।'
  )}`;

  return (
    <section
      id="home"
      className="relative min-h-[96vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-12 overflow-hidden bg-temple-pattern border-b border-neutral-800"
    >
      {/* Mystical Aghor Smoke & Fiery Amber Halos */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[500px] rounded-full bg-gradient-to-b from-red-950/20 via-amber-700/5 to-transparent blur-3xl pointer-events-none" />

      {/* Hanging Temple Bells */}
      <div className="absolute top-4 left-4 sm:left-12 z-20 hidden sm:block">
        <TempleBell size={56} interactive={true} />
      </div>
      <div className="absolute top-4 right-4 sm:right-12 z-20 hidden sm:block">
        <TempleBell size={56} interactive={true} />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Top Sacred Shloka & Locations Strip */}
        <div className="flex flex-col items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0D0D0D] border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-devanagari tracking-wide shadow-lg">
            <span className="text-amber-400">॥</span>
            <span>ॐ क्रीं कालिकायै नमः • ॐ नमः शिवाय</span>
            <span className="text-amber-400">॥</span>
          </div>

          <div className="flex items-center gap-2 text-xs text-amber-400/90 font-medium">
            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>{currentLang === 'hi' ? CONTACT_INFO.locationsHi : CONTACT_INFO.locationsEn}</span>
          </div>
        </div>

        {/* 2-Column Hero: Left Swami Ji Image & Blazing Havan, Right Title & Problem Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Visual Sanctum with Real Photos of Swami Ji */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
              {/* Outer Glowing Red-Gold Aura */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-red-700/40 via-amber-500/40 to-red-800/40 opacity-50 blur-lg" />

              {/* Main Portrait Container */}
              <div className="relative rounded-2xl overflow-hidden bg-[#0A0A0A] border-2 border-amber-500/60 shadow-2xl">
                <img
                  src={IMAGES.swamiPortrait}
                  alt="स्वामी सत्येन्द्र नाथ जी - तांत्रिक साधक"
                  referrerPolicy="no-referrer"
                  className="w-full h-[400px] sm:h-[460px] object-cover object-top filter contrast-105"
                />

                {/* Overlaid Sacred Label */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 text-center">
                  <h3 className="text-lg font-bold font-heading text-amber-200">
                    {currentLang === 'hi' ? 'स्वामी सत्येन्द्र नाथ जी' : 'Swami Satyendra Nath Ji'}
                  </h3>
                  <p className="text-xs text-amber-400/90 font-medium">
                    {currentLang === 'hi'
                      ? 'अघोर एवं तांत्रिक पूजा मर्मज्ञ • दिल्ली, हरिद्वार, काशी'
                      : 'Aghor & Tantric Puja Specialist • Delhi, Haridwar, Kashi'}
                  </p>
                </div>
              </div>

              {/* Inset Circular Floating Badge: Blazing Sacred Havan */}
              <div className="absolute -bottom-5 -right-4 w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-amber-400 overflow-hidden shadow-2xl bg-black">
                <img
                  src={IMAGES.swamiTantricAgni}
                  alt="प्रचण्ड तांत्रिक हवन"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Small Diya on Left Bottom */}
              <div className="absolute -bottom-3 -left-3">
                <DiyaLamp size="sm" showOfferingInteraction={true} />
              </div>
            </div>
          </div>

          {/* Right Column: Hero Headline, Core Tantric Specialties, Direct WhatsApp */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#121212] border border-amber-600/40 text-amber-300 text-xs font-semibold tracking-wider uppercase">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span>
                {currentLang === 'hi'
                  ? 'प्राचीन अघोर एवं तांत्रिक समाधान'
                  : 'Ancient Aghor & Tantric Solutions'}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-heading text-gold-gradient leading-tight">
              {currentLang === 'hi' ? 'स्वामी सत्येन्द्र नाथ जी' : 'Swami Satyendra Nath Ji'}
            </h1>

            <h2 className="text-xl sm:text-2xl font-bold text-amber-300 font-cinzel">
              {currentLang === 'hi'
                ? 'अघोर एवं तांत्रिक पूजा • वैदिक अनुष्ठान'
                : 'Aghor & Tantric Puja • Vedic Rituals'}
            </h2>

            <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed font-devanagari max-w-2xl">
              {currentLang === 'hi'
                ? 'जीवन की जटिल एवं असाध्य समस्याओं का अघोर तांत्रिक क्रियाओं, महाकाली-भैरव साधना एवं वैदिक मन्त्रों द्वारा निश्चित समाधान।'
                : 'Decisive spiritual resolutions for critical life disputes through authentic Aghor Tantra, Mahakali-Bhairav sadhana, and Vedic rites.'}
            </p>

            {/* Core Tantric Work Chips / Highlights (Requested in Prompt) */}
            <div className="p-4 rounded-xl bg-[#0D0D0D]/90 border border-neutral-800 shadow-inner">
              <span className="text-xs font-bold text-amber-400 block mb-2 font-heading">
                {currentLang === 'hi'
                  ? 'मुख्य तांत्रिक कार्य एवं समाधान क्षेत्र:'
                  : 'Key Tantric Services & Problem Areas:'}
              </span>

              <div className="flex flex-wrap gap-2 text-xs">
                {[
                  'कोर्ट कचहरी व मुकदमा',
                  'तलाक (Divorce) समस्या',
                  'पति-पत्नी अनबन व क्लेश',
                  'सात्विक वशीकरण',
                  'भूत-प्रेत व ऊपरी बाधा',
                  'गृह क्लेश शांति',
                  'थर्ड पार्टी (सौतन) से मुक्ति',
                  'निःसंतान दंपत्तियों का निवारण',
                ].map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-[#171717] border border-neutral-800 text-amber-200 font-medium"
                  >
                    • {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Action Buttons with User's Number: 8800460088 */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-sm shadow-xl shadow-emerald-950/70 transition-all border border-emerald-400/50"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>
                  {currentLang === 'hi'
                    ? `व्हाट्सएप पर बात करें (${CONTACT_INFO.phoneDisplay})`
                    : `WhatsApp Chat (${CONTACT_INFO.phoneDisplay})`}
                </span>
              </a>

              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#141414] hover:bg-[#202020] text-amber-200 font-semibold text-sm border border-neutral-700 hover:border-amber-500/60 shadow-md transition-all"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>{CONTACT_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Notice */}
            <p className="text-xs text-amber-300/70 pt-1">
              {currentLang === 'hi'
                ? '॥ दिल्ली • हरिद्वार गंगा तट • काशी मणिकर्णिका महाश्मशान ॥'
                : '॥ Delhi • Haridwar Ganga Bank • Kashi Manikarnika Mahashmashan ॥'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { MessageCircle, Phone, Mail, MapPin, Clock, ShieldCheck, HeartHandshake, Flame } from 'lucide-react';
import { Language, CONTACT_INFO } from '../data/content';
import { TempleDivider, DiyaLamp, SacredLotus } from './TempleDecorations';

interface ContactProps {
  currentLang: Language;
}

export const Contact: React.FC<ContactProps> = ({ currentLang }) => {
  const whatsappUrl = `${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
    currentLang === 'hi'
      ? 'प्रणाम स्वामी जी, मैं आपकी तांत्रिक पूजा, अनुष्ठान एवं समस्या निवारण हेतु मार्गदर्शन चाहता हूँ।'
      : 'Pranam Swami Ji, I seek your guidance regarding Tantric puja, anushthan and problem resolution.'
  )}`;

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050505] border-b border-neutral-800 relative">
      <div className="max-w-7xl mx-auto">
        <TempleDivider title={currentLang === 'hi' ? 'सम्पर्क एवं मार्गदर्शन' : 'Contact Swami Ji'} />

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#141414] border border-amber-600/40 text-amber-300 text-xs font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>{currentLang === 'hi' ? CONTACT_INFO.locationsHi : CONTACT_INFO.locationsEn}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-gold-gradient">
            {currentLang === 'hi'
              ? 'स्वामी सत्येन्द्र नाथ जी से सीधा संपर्क'
              : 'Direct Contact with Swami Satyendra Nath Ji'}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-amber-200/80 leading-relaxed font-devanagari">
            {currentLang === 'hi'
              ? 'कोर्ट केस, तलाक, पति-पत्नी विवाद, वशीकरण, भूत-प्रेत बाधा, गृह क्लेश, थर्ड पार्टी एवं संतान समस्या हेतु सीधे व्हाट्सएप अथवा फोन पर संवाद करें।'
              : 'Direct connection via WhatsApp or phone for court cases, divorce, relationship strife, negative entities, and progeny blessings.'}
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct WhatsApp & Call Action Blocks */}
          <div className="lg:col-span-7 space-y-6">
            {/* WhatsApp Hero Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#062415]/70 via-[#0A0A0A] to-[#050505] border-2 border-emerald-500/70 shadow-2xl relative overflow-hidden">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3.5 rounded-xl bg-emerald-600/30 border border-emerald-400/60 text-emerald-400">
                    <MessageCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-emerald-200 font-heading">
                      {currentLang === 'hi' ? 'व्हाट्सएप संवाद (WhatsApp)' : 'WhatsApp Consultation'}
                    </h3>
                    <p className="text-xs text-emerald-300/90 font-mono font-semibold tracking-wider">
                      {CONTACT_INFO.phoneDisplay}
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed mb-6 font-devanagari">
                {currentLang === 'hi'
                  ? 'अपनी समस्या (कोर्ट केस, पति-पत्नी विवाद, तलाक, ऊपरी बाधा, गृह क्लेश, थर्ड पार्टी या संतान समस्या) का विवरण लिखकर व्हाट्सएप करें। स्वामी जी द्वारा शास्त्रीय मार्गदर्शन दिया जाएगा।'
                  : 'Message directly describing your situation. Swami Ji provides personal spiritual and Agamic guidance.'}
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-sm shadow-xl shadow-emerald-950/70 transition-all border border-emerald-300/50"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>
                  {currentLang === 'hi'
                    ? `व्हाट्सएप पर संदेश भेजें (${CONTACT_INFO.phoneDisplay})`
                    : `Chat on WhatsApp (${CONTACT_INFO.phoneDisplay})`}
                </span>
              </a>
            </div>

            {/* Direct Phone Call Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#1C1405]/60 via-[#0D0D0D] to-[#050505] border-2 border-amber-600/60 shadow-xl">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3.5 rounded-xl bg-amber-700/30 border border-amber-500/60 text-amber-400">
                    <Phone className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-amber-200 font-heading">
                      {currentLang === 'hi' ? 'सीधा दूरभाष (Direct Call)' : 'Telephone Call'}
                    </h3>
                    <p className="text-xs text-amber-300/90 font-mono font-bold tracking-wider">
                      {CONTACT_INFO.phoneDisplay}
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-amber-100/80 leading-relaxed mb-6 font-devanagari">
                {currentLang === 'hi'
                  ? 'सीधे दूरभाष पर संवाद करने के लिए नीचे दिए गए बटन पर स्पर्श करें। यदि स्वामी जी साधना अथवा हवन में हों, तो कृपया व्हाट्सएप पर संदेश छोड़ दें।'
                  : 'Call Swami Ji directly. If in ongoing fire sadhana or japa, please leave a message on WhatsApp.'}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-bold text-sm shadow-md transition-all border border-amber-300"
                >
                  <Phone className="w-4 h-4 fill-stone-950" />
                  <span>{currentLang === 'hi' ? 'अभी कॉल करें' : 'Call Now'}</span>
                </a>

                <div className="flex items-center gap-2 text-xs text-amber-300/80 font-medium">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>
                    {currentLang === 'hi'
                      ? 'कॉलिंग समय: प्रातः ९:०० से रात्रि ९:००'
                      : 'Calling Hours: 9:00 AM – 9:00 PM IST'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Delhi, Haridwar & Kashi Tapasthali Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#0D0D0D] border border-neutral-800 space-y-5">
              <h4 className="text-lg font-bold text-amber-200 font-heading border-b border-neutral-800 pb-3 flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-400" />
                <span>{currentLang === 'hi' ? 'साधना एवं निवास केंद्र' : 'Centres of Sadhana'}</span>
              </h4>

              {/* 3 Pilgrimage Centers */}
              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-[#141414] border border-neutral-800">
                  <span className="text-xs font-bold text-amber-300 block mb-1">
                    १. दिल्ली (Delhi)
                  </span>
                  <p className="text-xs text-amber-200/80 leading-relaxed font-devanagari">
                    {currentLang === 'hi'
                      ? 'राष्ट्रीय राजधानी क्षेत्र में भक्तों एवं साधकों के लिए प्रत्यक्ष परामर्श एवं तांत्रिक अनुष्ठान केंद्र।'
                      : 'Consultation and Tantric rites center in the National Capital Region.'}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#141414] border border-neutral-800">
                  <span className="text-xs font-bold text-amber-300 block mb-1">
                    २. हरिद्वार (Haridwar)
                  </span>
                  <p className="text-xs text-amber-200/80 leading-relaxed font-devanagari">
                    {currentLang === 'hi'
                      ? 'माँ गंगा के पावन तट पर अरण्य साधना, धूनी अनुष्ठान एवं पितृ-शान्ति महायज्ञ।'
                      : 'Ganga shore sanctuary for unbroken dhuni fire, forest tapasya, and ancestral rites.'}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#141414] border border-neutral-800">
                  <span className="text-xs font-bold text-amber-300 block mb-1">
                    ३. काशी - वाराणसी (Kashi)
                  </span>
                  <p className="text-xs text-amber-200/80 leading-relaxed font-devanagari">
                    {currentLang === 'hi'
                      ? 'मणिकर्णिका महाश्मशान, बाबा विश्वनाथ एवं काल भैरव की पावन नगरी में अघोर क्रियाएं।'
                      : 'Manikarnika Mahashmashan, Lord Vishwanath & Kaal Bhairav Aghor rites.'}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="pt-3 border-t border-neutral-800 flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <span className="text-[11px] text-amber-400/80 block">
                    {currentLang === 'hi' ? 'आधिकारिक ईमेल:' : 'Official Email:'}
                  </span>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-xs font-mono text-amber-100 hover:text-amber-300 underline"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Respectful Guidance */}
            <div className="p-5 rounded-2xl bg-[#0A0A0A] border border-neutral-800">
              <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold mb-2">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>{currentLang === 'hi' ? 'गोपनीयता एवं मर्यादा' : 'Privacy & Integrity'}</span>
              </div>
              <p className="text-xs text-amber-200/75 leading-relaxed font-devanagari">
                {currentLang === 'hi'
                  ? 'स्वामी जी के साथ आपकी हर समस्या एवं चर्चा पूर्णतः गोपनीय रखी जाती है। किसी भी प्रकार के अनुचित प्रपंच या झूठे दावों से रहित प्रत्यक्ष समाधान।'
                  : 'All consultations with Swami Ji remain strictly confidential. Grounded, authentic Aghor spiritual intervention.'}
              </p>
            </div>

            <div className="flex justify-center pt-2">
              <DiyaLamp size="sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

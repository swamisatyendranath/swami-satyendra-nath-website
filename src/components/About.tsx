import React from 'react';
import { Shield, MapPin, Flame, BookOpen, Compass, CheckCircle } from 'lucide-react';
import { Language, CONTACT_INFO, IMAGES } from '../data/content';
import { DiyaLamp, TempleDivider } from './TempleDecorations';

interface AboutProps {
  currentLang: Language;
}

export const About: React.FC<AboutProps> = ({ currentLang }) => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black border-b border-neutral-800 relative">
      <div className="max-w-7xl mx-auto">
        <TempleDivider title={currentLang === 'hi' ? 'साधक परिचय एवं तपोभूमि' : 'About & Sacred Tapobhoomi'} />

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#141414] border border-amber-600/40 text-amber-300 text-xs font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>{currentLang === 'hi' ? CONTACT_INFO.locationsHi : CONTACT_INFO.locationsEn}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-gold-gradient">
            {currentLang === 'hi'
              ? 'आदरणीय स्वामी सत्येन्द्र नाथ जी का जीवन व साधना'
              : 'Revered Swami Satyendra Nath Ji: Life & Sadhana'}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-amber-200/80 leading-relaxed font-devanagari">
            {currentLang === 'hi'
              ? 'दिल्ली, हरिद्वार गंगा तट एवं काशी महाश्मशान की पवित्र भूमि पर अघोर, तंत्र एवं वैदिक अनुष्ठानों के निष्ठावान साधक।'
              : 'An esteemed Aghor practitioner who has dedicated his life to intense tapasya across Delhi, Haridwar, and Kashi.'}
          </p>
        </div>

        {/* 2-Column Split: Visual Tapasya Montage + Deep Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: 2 Real Photos Montage */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Top Photo: Forest Bhasma Samadhi */}
            <div className="rounded-2xl overflow-hidden bg-[#0D0D0D] border-2 border-neutral-800 shadow-2xl relative group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={IMAGES.swamiForestSamadhi}
                  alt="स्वामी सत्येन्द्र नाथ जी - अरण्य भस्म समाधि"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-[#0A0A0A] border-t border-neutral-800">
                <span className="text-xs font-bold text-amber-300 block font-heading">
                  {currentLang === 'hi'
                    ? 'गहन अरण्य में भस्म समाधि एवं मौन तपस्या'
                    : 'Bhasma Samadhi & Solitary Forest Penance'}
                </span>
                <p className="text-[11px] text-amber-200/70 mt-1">
                  {currentLang === 'hi'
                    ? 'शरीर पर पवित्र भस्म लेपन कर एकाग्र चित्त से की जाने वाली अघोर शिव-साधना।'
                    : 'Intense Shiva-sadhana through sacred bhasma ritual and unwavering internal concentration.'}
                </p>
              </div>
            </div>

            {/* Bottom Photo: Riverbank Dhuni Penance */}
            <div className="rounded-2xl overflow-hidden bg-[#0D0D0D] border-2 border-neutral-800 shadow-2xl relative group">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={IMAGES.swamiRiverDhuni}
                  alt="पवित्र नदी तट पर अखण्ड धूनी अनुष्ठान"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-[#0A0A0A] border-t border-neutral-800 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-amber-300 block font-heading">
                    {currentLang === 'hi'
                      ? 'हरिद्वार गंगा तट पर अखण्ड धूनी साधना'
                      : 'Unbroken Dhuni Penance on Holy Riverbank'}
                  </span>
                  <p className="text-[11px] text-amber-200/70 mt-0.5">
                    {currentLang === 'hi' ? 'अग्नि के सम्मुख कठिन तपस्या' : 'Sacred fire communion in nature'}
                  </p>
                </div>
                <DiyaLamp size="sm" />
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Authentic Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 text-amber-100/90">
            <div className="space-y-4 text-sm sm:text-base leading-relaxed font-devanagari">
              <p>
                {currentLang === 'hi' ? (
                  <>
                    <strong className="text-amber-300 font-semibold text-lg">स्वामी सत्येन्द्र नाथ जी</strong>{' '}
                    प्राचीन अघोर एवं तांत्रिक परम्परा के उच्च कोटि के साधक हैं। उनका साधना काल और निवास मुख्यतः तीन महातीर्थों—{' '}
                    <span className="text-amber-300 font-bold">दिल्ली, हरिद्वार (माँ गंगा के पावन तट) एवं काशी (मणिकर्णिका महाश्मशान व अघोर पीठ)</span>{' '}
                    में निरंतर चलता है।
                  </>
                ) : (
                  <>
                    <strong className="text-amber-300 font-semibold text-lg">Swami Satyendra Nath Ji</strong>{' '}
                    is an authentic practitioner of the ancient Aghor and Tantric lineages. His life and spiritual work are rooted in three major holy centers—{' '}
                    <span className="text-amber-300 font-bold">Delhi, Haridwar (banks of holy Ganga), and sacred Kashi (Manikarnika Mahashmashan)</span>.
                  </>
                )}
              </p>

              <p>
                {currentLang === 'hi' ? (
                  <>
                    स्वामी जी का मुख्य कार्यक्षेत्र <span className="text-amber-300 font-semibold">तांत्रिक पूजा एवं असाध्य समस्याओं का निवारण</span> है। 
                    अघोर विद्या के अनुसार जीवन में जब सामान्य उपायों और दवाइयों से मार्ग नहीं मिलता, तब महाकाली, भैरव एवं बगलामुखी तंत्र की गूढ़ शक्तियों से रक्षा एवं कल्याण प्राप्त होता है।
                  </>
                ) : (
                  <>
                    Swami Ji specializes primarily in <span className="text-amber-300 font-semibold">Tantric Puja and the resolution of stubborn life tribulations</span>. 
                    According to Agamic sciences, when ordinary remedies fail, the potent invocations of Mahakali, Bhairav, and Maa Baglamukhi cut through severe obstacles.
                  </>
                )}
              </p>

              {/* Special Mention of Core Areas */}
              <div className="p-4 rounded-xl bg-[#0D0D0D] border border-neutral-800 space-y-2">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                  {currentLang === 'hi'
                    ? 'स्वामी जी द्वारा प्रमुख रूप से किए जाने वाले कार्य:'
                    : 'Primary Specializations:'}
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-amber-100/90">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>कोर्ट कचहरी व झूठे मुकदमों में विजय</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>तलाक (Divorce) की समस्या व निवारण</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>पति-पत्नी अनबन व वैवाहिक क्लेश शांति</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>सात्विक वशीकरण व सम्मोहन अनुष्ठान</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>भूत-प्रेत, ऊपरी बाधा व किया-कराया काटना</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>गृह क्लेश व पारिवारिक शांति विधान</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>रिश्ते में थर्ड पार्टी (सौतन) से मुक्ति</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>निःसंतान दंपत्तियों के लिए संतान प्राप्ति अनुष्ठान</span>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-amber-200/80">
                {currentLang === 'hi'
                  ? 'स्वामी जी प्रत्येक व्यक्ति की समस्या को एकांत में सुनकर उनकी जन्म-कुंडली, छाया एवं ऊर्जा का विश्लेषण करते हैं तथा उसी अनुसार निश्चित तांत्रिक संकल्प लेते हैं।'
                  : 'Swami Ji listens attentively to each seeker, examining planetary influences and subtle energies before taking a consecrated Tantric sankalpa.'}
              </p>
            </div>

            {/* Direct Contact Button */}
            <div className="pt-4 border-t border-amber-900/60 flex flex-wrap items-center gap-4">
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-colors"
              >
                <span>{currentLang === 'hi' ? 'स्वामी जी से व्हाट्सएप पर संपर्क करें' : 'Contact on WhatsApp'}</span>
              </a>

              <span className="text-xs text-amber-400 font-mono font-semibold">
                दूरभाष: {CONTACT_INFO.phoneDisplay}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

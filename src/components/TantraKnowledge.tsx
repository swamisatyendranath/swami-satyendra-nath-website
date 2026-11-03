import React, { useState } from 'react';
import { Eye, ShieldAlert, Sparkles, BookOpen, Compass, CheckCircle2, XCircle } from 'lucide-react';
import { Language, tantraPrinciples } from '../data/content';
import { TempleDivider, SriYantraEmblem } from './TempleDecorations';

interface TantraProps {
  currentLang: Language;
}

export const TantraKnowledge: React.FC<TantraProps> = ({ currentLang }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const mythsVsReality = [
    {
      mythHi: 'भ्रम: तंत्र किसी पर अनुचित प्रभाव, वशीकरण या चमत्कार का नाम है।',
      mythEn: 'Myth: Tantra is about magic tricks, hypnotism, or subjugating others.',
      realityHi: 'तथ्य: आगम शास्त्रों के अनुसार तंत्र आत्म-संयम, चेतना के विस्तार और ईश्वर से एकाकार होने की वैज्ञानिक साधना है। दूसरों को हानि पहुँचाने वाले विचार तंत्र-विरोधी हैं।',
      realityEn: 'Fact: Scriptural Tantra is an internal science of mind-transcendence, meditation, and communion with the Divine. Harmful intentions run completely contrary to spiritual Tantra.',
    },
    {
      mythHi: 'भ्रम: तंत्र में नियमों और शुद्धि की आवश्यकता नहीं होती।',
      mythEn: 'Myth: Tantra bypasses moral codes and internal purification.',
      realityHi: 'तथ्य: तंत्र साधना में यम, नियम, सत्य, ब्रह्मचर्य और मनसा-वाचा-कर्मणा सात्विक पवित्रता का कड़ाई से पालन आवश्यक होता है। बिना आत्म-शुद्धि के कोई सिद्धि संभव नहीं।',
      realityEn: 'Fact: Tantra mandates strict ethical discipline, non-injury, truthfulness, and mental purity. Without inner cleanliness, true spiritual attainment cannot occur.',
    },
    {
      mythHi: 'भ्रम: कोई भी व्यक्ति किसी पुस्तक या इंटरनेट से पढ़कर तंत्र प्रयोग कर सकता है।',
      mythEn: 'Myth: Anyone can experiment with Tantra casually from books or the internet.',
      realityHi: 'तथ्य: तंत्र एक प्रत्यक्ष मार्ग है जिसके लिए सिद्ध गुरु का मार्गदर्शन, वैदिक दीक्षा और निरंतर निगरानी अनिवार्य है। अधूरा ज्ञान अनिष्टकारी हो सकता है।',
      realityEn: 'Fact: Tantra is a guided experiential lineage requiring qualified Guru initiation (Diksha) and steady guidance. Superficial experiments are strictly discouraged.',
    },
  ];

  return (
    <section id="tantra" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050505] border-b border-neutral-800 relative">
      <div className="max-w-6xl mx-auto">
        <TempleDivider title={currentLang === 'hi' ? 'आगम एवं तंत्र दर्शन' : 'Agama & Tantra Tradition'} />

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-cinzel font-semibold">
            ॥ तत्त्वज्ञान विमर्श ॥
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gold-gradient mt-2">
            {currentLang === 'hi'
              ? 'तंत्र: चेतना के विस्तार की विशुद्ध वैदिक परंपरा'
              : 'Tantra: The Sacred Science of Consciousness'}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-amber-200/80 leading-relaxed font-devanagari">
            {currentLang === 'hi'
              ? 'अंधविश्वास और काल्पनिक दावों से परे—जानिए सनातन आगम तंत्र का वास्तविक दार्शनिक और आध्यात्मिक स्वरूप।'
              : 'Beyond superstition and sensational falsehoods—exploring the authentic philosophical depth of Agamic Tantra.'}
          </p>
        </div>

        {/* Classical Shloka Definition Card */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0F0F0F] via-[#171717] to-[#0F0F0F] border border-amber-600/40 shadow-xl text-center relative overflow-hidden">
          <div className="absolute top-2 right-4 opacity-10 pointer-events-none">
            <SriYantraEmblem size={120} />
          </div>

          <p className="text-base sm:text-xl font-devanagari font-semibold text-amber-200 leading-relaxed max-w-3xl mx-auto">
            « तनोति विपुलानर्थान् तत्त्वज्ञानसमन्वितान् ।<br className="hidden sm:inline" />
            त्राणं च कुरुते यस्मात् तन्त्रमित्यभिधीयते ॥ »
          </p>
          <div className="h-[1px] w-24 bg-amber-500/50 mx-auto my-3" />
          <p className="text-xs sm:text-sm text-amber-300/80 max-w-2xl mx-auto italic font-serif">
            {currentLang === 'hi'
              ? 'अर्थात्: जो शास्त्र तत्त्वज्ञान से युक्त परम सत्य का विस्तार (तनोति) करता है और अज्ञान एवं कष्टों से रक्षा (त्राणं) करता है, वही वास्तविक तंत्र कहलाता है।'
              : 'Meaning: That which expands (tanoti) profound wisdom of Ultimate Reality and provides divine liberation/protection (trana) from spiritual ignorance is truly known as Tantra.'}
          </p>
        </div>

        {/* 6 Core Principles Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {tantraPrinciples.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-[#0D0D0D] border border-neutral-800 hover:border-amber-500/70 transition-all duration-300 shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-cinzel font-bold text-amber-400">
                    {String(index + 1).padStart(2, '0')}.
                  </span>
                  <h3 className="text-base font-bold text-amber-100 font-heading">
                    {currentLang === 'hi' ? item.titleHi : item.titleEn}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-amber-200/75 leading-relaxed">
                  {currentLang === 'hi' ? item.descHi : item.descEn}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center justify-between text-[11px] text-amber-400/80">
                <span>{currentLang === 'hi' ? 'शास्त्रोक्त आधार' : 'Scriptural Base'}</span>
                <span className="text-amber-500">॥ शुभम् ॥</span>
              </div>
            </div>
          ))}
        </div>

        {/* Truth vs Myths Comparison: Grounded, Honest, Devotional */}
        <div className="rounded-2xl bg-[#0A0A0A] border border-neutral-800 p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <ShieldAlert className="w-5 h-5 text-amber-400" />
            <h3 className="text-xl font-bold font-heading text-amber-200">
              {currentLang === 'hi'
                ? 'स्पष्ट उद्घोष: अंधविश्वास एवं भ्रांतियों का खंडन'
                : 'Ethical Declaration: Dispelling Myths & Misconceptions'}
            </h3>
          </div>

          <div className="space-y-4">
            {mythsVsReality.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-xl bg-[#121212] border border-neutral-800"
              >
                <div className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold text-rose-400 block mb-1">
                      {currentLang === 'hi' ? 'प्रचलित भ्रांति' : 'Common Fallacy'}
                    </span>
                    <p className="text-xs sm:text-sm text-amber-100/70 leading-relaxed">
                      {currentLang === 'hi' ? item.mythHi : item.mythEn}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 border-t md:border-t-0 md:border-l border-neutral-800 pt-3 md:pt-0 md:pl-4">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold text-emerald-400 block mb-1">
                      {currentLang === 'hi' ? 'शास्त्रसम्मत सत्य' : 'Scriptural Reality'}
                    </span>
                    <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed">
                      {currentLang === 'hi' ? item.realityHi : item.realityEn}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Swami Ji Commitment */}
          <div className="mt-6 pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-amber-300/80">
            <p>
              {currentLang === 'hi'
                ? 'स्वामी जी किसी भी प्रकार के अनैतिक या गैर-शास्त्रीय कार्यों में विश्वास नहीं रखते।'
                : 'Swami Ji strictly does not entertain unscriptural or unethical practices.'}
            </p>
            <span className="px-3 py-1 rounded bg-[#171717] border border-neutral-700 text-amber-300 font-medium">
              {currentLang === 'hi' ? 'केवल सात्विक अनुष्ठान' : 'Strictly Sattvic Only'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

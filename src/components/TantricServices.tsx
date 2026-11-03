import React from 'react';
import {
  HeartCrack,
  ShieldAlert,
  UserX,
  Sparkles,
  Scale,
  Ghost,
  Home,
  Baby,
  MessageCircle,
  Phone,
  Flame,
  CheckCircle,
} from 'lucide-react';
import { Language, tantricSpecialties, TantricServiceItem, CONTACT_INFO, IMAGES } from '../data/content';
import { TempleDivider, DiyaLamp } from './TempleDecorations';

interface TantricServicesProps {
  currentLang: Language;
}

export const TantricServices: React.FC<TantricServicesProps> = ({ currentLang }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'heart-crack':
        return <HeartCrack className="w-5 h-5 text-amber-400" />;
      case 'shield-alert':
        return <ShieldAlert className="w-5 h-5 text-amber-400" />;
      case 'user-x':
        return <UserX className="w-5 h-5 text-amber-400" />;
      case 'sparkles':
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'scale':
        return <Scale className="w-5 h-5 text-amber-400" />;
      case 'ghost':
        return <Ghost className="w-5 h-5 text-amber-400" />;
      case 'home':
        return <Home className="w-5 h-5 text-amber-400" />;
      case 'baby':
        return <Baby className="w-5 h-5 text-amber-400" />;
      default:
        return <Flame className="w-5 h-5 text-amber-400" />;
    }
  };

  const getWhatsAppLinkForIssue = (title: string) => {
    const text = `प्रणाम स्वामी सत्येन्द्र नाथ जी, मैं "${title}" के समाधान हेतु आपसे मार्गदर्शन चाहता हूँ।`;
    return `${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="tantric-pooja" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050505] border-b border-neutral-800 relative">
      <div className="max-w-7xl mx-auto">
        <TempleDivider title={currentLang === 'hi' ? 'तांत्रिक पूजा एवं समाधान' : 'Tantric Puja & Remedies'} />

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#141414] border border-amber-600/40 text-amber-300 text-xs font-semibold mb-3">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>{currentLang === 'hi' ? 'अघोर एवं तांत्रिक विशेषज्ञ' : 'Aghor & Tantric Authority'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-gold-gradient">
            {currentLang === 'hi'
              ? 'मुख्य तांत्रिक कार्य एवं समस्या समाधान'
              : 'Tantric Pujas & Problem Resolution'}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-amber-200/85 leading-relaxed font-devanagari">
            {currentLang === 'hi'
              ? 'स्वामी सत्येन्द्र नाथ जी द्वारा अघोर, श्मशान भैरव एवं महाकाली तंत्र की गुप्त विद्याओं द्वारा पारिवारिक, वैवाहिक एवं अदालती बाधाओं का अचूक निवारण किया जाता है।'
              : 'Specialized Tantric invocations, Smashan Bhairav and Mahakali sadhana to resolve critical personal, legal, and familial disputes.'}
          </p>
        </div>

        {/* Tantric Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tantricSpecialties.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-gradient-to-b from-[#0F0F0F] to-[#080808] border border-neutral-800 hover:border-amber-400/80 transition-all duration-300 p-6 flex flex-col justify-between shadow-xl relative group hover:-translate-y-1"
            >
              <div>
                {/* Header Badge & Icon */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#171717] border border-amber-600/40 group-hover:border-amber-400 transition-colors">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#141414] border border-neutral-700 text-amber-300">
                    {currentLang === 'hi' ? item.badgeHi : item.badgeEn}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-amber-100 font-heading mb-1 group-hover:text-amber-200 transition-colors">
                  {currentLang === 'hi' ? item.titleHi : item.titleEn}
                </h3>
                <p className="text-xs text-amber-400 font-medium mb-3 italic">
                  {currentLang === 'hi' ? item.subtitleHi : item.subtitleEn}
                </p>

                {/* Description */}
                <p className="text-xs text-amber-200/75 leading-relaxed mb-4">
                  {currentLang === 'hi' ? item.descriptionHi : item.descriptionEn}
                </p>

                {/* Tantric Remedy / Solution */}
                <div className="p-3 rounded-lg bg-[#121212] border border-neutral-800 mb-4">
                  <span className="text-[11px] font-semibold text-amber-300 block mb-1">
                    {currentLang === 'hi' ? 'तांत्रिक समाधान विधान:' : 'Prescribed Remedy:'}
                  </span>
                  <p className="text-xs text-amber-100/90 leading-relaxed">
                    {currentLang === 'hi' ? item.solutionHi : item.solutionEn}
                  </p>
                </div>
              </div>

              {/* Action: Direct WhatsApp consultation for this specific issue */}
              <div className="pt-3 border-t border-neutral-800">
                <a
                  href={getWhatsAppLinkForIssue(item.titleHi)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-emerald-800/80 hover:bg-emerald-700 text-white text-xs font-semibold shadow-md transition-colors border border-emerald-600/50"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{currentLang === 'hi' ? 'व्हाट्सएप पर समाधान पूछें' : 'Consult on WhatsApp'}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Callout: Tapasya & Ashram Credentials */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0F0F0F] via-[#171717] to-[#0F0F0F] border border-amber-600/50 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2 text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-amber-100">
                {currentLang === 'hi'
                  ? 'दिल्ली, हरिद्वार एवं काशी में प्रत्यक्ष साधना एवं परामर्श'
                  : 'Direct Presence across Delhi, Haridwar, & Sacred Kashi'}
              </h3>
              <p className="text-xs sm:text-sm text-amber-200/85 leading-relaxed">
                {currentLang === 'hi'
                  ? 'स्वामी सत्येन्द्र नाथ जी इन तीनों पावन तीर्थों में निरंतर साधना, धूनी एवं अघोर अनुष्ठान करते हैं। यदि आप किसी जटिल समस्या से त्रस्त हैं, तो सीधे व्हाट्सएप या फोन पर संपर्क करें।'
                  : 'Swami Satyendra Nath Ji maintains unbroken Dhuni and Aghor rituals across these pilgrimage hubs. Connect directly via WhatsApp or telephone.'}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-3">
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg transition-all border border-emerald-400"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{CONTACT_INFO.phoneDisplay}</span>
              </a>

              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#141414] hover:bg-[#202020] text-amber-200 font-semibold text-xs border border-neutral-700 hover:border-amber-500/60 shadow-md transition-all"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>{currentLang === 'hi' ? 'सीधा कॉल करें' : 'Call Swami Ji'}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

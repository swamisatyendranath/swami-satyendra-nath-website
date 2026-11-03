import React, { useState } from 'react';
import { Eye, X, ZoomIn, Sparkles } from 'lucide-react';
import { Language, IMAGES } from '../data/content';
import { TempleDivider } from './TempleDecorations';

interface PhotoItem {
  src: string;
  titleHi: string;
  titleEn: string;
  descHi: string;
  descEn: string;
  locationHi: string;
  locationEn: string;
  category: 'swami' | 'tapasya' | 'deity' | 'tirtha';
}

export const PhotoGallery: React.FC<{ currentLang: Language }> = ({ currentLang }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  const galleryItems: PhotoItem[] = [
    {
      src: IMAGES.swamiPortrait,
      titleHi: 'स्वामी सत्येन्द्र नाथ जी - अघोर तांत्रिक स्वरूप',
      titleEn: 'Swami Satyendra Nath Ji - Aghor Tantric Form',
      descHi: 'अघोर परम्परा के सिद्ध तांत्रिक साधक, रुद्राक्ष माला, कौड़ी एवं दिव्य दंड धारण किए हुए।',
      descEn: 'Aghor Tantric master adorned with sacred rudraksha, cowries, and ascetic staff.',
      locationHi: 'दिल्ली / हरिद्वार / काशी',
      locationEn: 'Delhi / Haridwar / Kashi',
      category: 'swami',
    },
    {
      src: IMAGES.swamiTantricAgni,
      titleHi: 'प्रचण्ड तांत्रिक हवन एवं अग्नि अनुष्ठान',
      titleEn: 'Blazing Tantric Havan & Fire Anushthan',
      descHi: 'गगनचुम्बी पवित्र अग्नि ज्वालाओं के सम्मुख महाकाली एवं भैरव सिद्धि अनुष्ठान।',
      descEn: 'Conducted before sacred soaring flames of Aghor Havan invoke Mahakali & Bhairav.',
      locationHi: 'साधना कुटीर',
      locationEn: 'Sadhana Kutir',
      category: 'tapasya',
    },
    {
      src: IMAGES.swamiForestSamadhi,
      titleHi: 'गहन अरण्य में भस्म समाधि तपस्या',
      titleEn: 'Bhasma Samadhi Penance in Deep Forest',
      descHi: 'वन क्षेत्र में संपूर्ण शरीर पर भस्म लेपन कर शांत एवं निस्पृह भाव से समाधिस्थ स्वामी जी।',
      descEn: 'Swami Ji immersed in tranquil Bhasma samadhi in isolated dense forest lands.',
      locationHi: 'अरण्य तपोभूमि',
      locationEn: 'Forest Sanctuary',
      category: 'tapasya',
    },
    {
      src: IMAGES.swamiRiverDhuni,
      titleHi: 'पवित्र नदी तट पर अखण्ड धूनी एवं अनुष्ठान',
      titleEn: 'Unbroken Dhuni Penance on Sacred Riverbank',
      descHi: 'पहाड़ी घाटी व पवित्र नदी के तट पर एकांत साधना एवं अघोर क्रियाओं का पावन दृश्य।',
      descEn: 'Solitary spiritual austerities on the pebbled riverbank with consecrated sacred fire.',
      locationHi: 'हरिद्वार गंगा तट',
      locationEn: 'Haridwar Ganga Shore',
      category: 'tapasya',
    },
    {
      src: IMAGES.kashiManikarnika,
      titleHi: 'काशी मणिकर्णिका महाश्मशान - अनादि अग्नि',
      titleEn: 'Kashi Manikarnika Mahashmashan - Eternal Fires',
      descHi: 'बाबा विश्वनाथ की काशी में अखंड जलती महाश्मशान की अग्नि, जहाँ अघोर साधना फलीभूत होती है।',
      descEn: 'The primordial burning ghat of Kashi where eternal flames dissolve all illusions.',
      locationHi: 'काशी (वाराणसी)',
      locationEn: 'Kashi (Varanasi)',
      category: 'tirtha',
    },
    {
      src: IMAGES.deviDurgaMaa,
      titleHi: 'माँ जगदम्बा नवदुर्गा - अमोघ शक्ति स्वरूप',
      titleEn: 'Maa Jagadamba Navadurga - Divine Feminine',
      descHi: 'सिंहवाहिनी माँ दुर्गा अपने नौ स्वरूपों में ब्रह्माण्ड को अभय एवं सुरक्षा प्रदान करती हैं।',
      descEn: 'Mother Durga mounted on the lion surrounded by the nine divine manifestations.',
      locationHi: 'आराध्य देवी',
      locationEn: 'Presiding Goddess',
      category: 'deity',
    },
    {
      src: IMAGES.bhagwanShiva,
      titleHi: 'देवाधिदेव महादेव शिव - आदिगुरु एवं तंत्रेश्वर',
      titleEn: 'Bhagwan Shiva - Supreme Lord of Tantra',
      descHi: 'त्रिशूलधारी, नागभूषण, भस्म रमे महादेव शिव—जिनकी कृपा से समस्त सिद्धियां सुलभ होती हैं।',
      descEn: 'Lord Shiva with glowing crescent moon and Trishul, the source of all Agamas.',
      locationHi: 'महाकाल पीठ',
      locationEn: 'Mahakal Sanctuary',
      category: 'deity',
    },
    {
      src: IMAGES.himalayanKedarnath,
      titleHi: 'श्री केदारनाथ ज्योतिर्लिंग - हिमालय धाम',
      titleEn: 'Sri Kedarnath Jyotirlinga - Himalayan Sanctuary',
      descHi: 'बर्फ से ढके हिमालय शिखरों के सम्मुख विराजमान पवित्र ज्योतिर्लिंग एवं गूंजते ॐ नमः शिवाय।',
      descEn: 'Sacred Jyotirlinga sanctum flanked by snow-capped peaks and flowing Himalayan waters.',
      locationHi: 'केदारनाथ धाम',
      locationEn: 'Kedarnath Himalayas',
      category: 'tirtha',
    },
  ];

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050505] border-b border-neutral-800 relative">
      <div className="max-w-7xl mx-auto">
        <TempleDivider title={currentLang === 'hi' ? 'तपस्या एवं साधना दर्शन' : 'Sacred Tapasya Gallery'} />

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#141414] border border-amber-600/40 text-amber-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{currentLang === 'hi' ? 'प्रत्यक्ष साधना प्रमाण' : 'Authentic Sadhana Glimpses'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-gold-gradient">
            {currentLang === 'hi'
              ? 'स्वामी जी की तपस्या एवं आराध्य देव दर्शन'
              : 'Glimpses of Tapasya & Presiding Deities'}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-amber-200/80 leading-relaxed font-devanagari">
            {currentLang === 'hi'
              ? 'दिल्ली, हरिद्वार गंगा तट एवं काशी महाश्मशान में सम्पन्न अघोर साधना, धूनी एवं आराध्य देवी-देवताओं के दुर्लभ छायाचित्र।'
              : 'Authentic photographs of Swami Ji during rigorous penance, dhuni havan, and the presiding deities across Delhi, Haridwar, and Kashi.'}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedPhoto(item)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-[#0D0D0D] border border-neutral-800 hover:border-amber-400 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-black">
                <img
                  src={item.src}
                  alt={currentLang === 'hi' ? item.titleHi : item.titleEn}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95 group-hover:brightness-105"
                />

                {/* Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Zoom Icon Hint */}
                <div className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-amber-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4" />
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-0 inset-x-0 p-4">
                  <span className="text-[10px] uppercase tracking-widest text-amber-400 font-semibold block mb-1">
                    {currentLang === 'hi' ? item.locationHi : item.locationEn}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold font-heading text-amber-100 line-clamp-2 leading-snug">
                    {currentLang === 'hi' ? item.titleHi : item.titleEn}
                  </h3>
                </div>
              </div>

              <div className="p-3 bg-[#080808] border-t border-neutral-900 flex items-center justify-between text-xs text-amber-300/80">
                <span className="line-clamp-1 text-[11px]">
                  {currentLang === 'hi' ? item.descHi : item.descEn}
                </span>
                <Eye className="w-3.5 h-3.5 text-amber-400 shrink-0 ml-2" />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
            <div className="relative max-w-4xl w-full rounded-2xl bg-[#0D0D0D] border border-neutral-700 p-4 sm:p-6 shadow-2xl text-amber-100 max-h-[95vh] overflow-y-auto">
              <div className="flex items-start justify-between gap-4 mb-4 border-b border-neutral-800 pb-3">
                <div>
                  <span className="text-xs uppercase tracking-widest text-amber-400 font-cinzel">
                    {currentLang === 'hi' ? selectedPhoto.locationHi : selectedPhoto.locationEn}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-gold-gradient mt-1">
                    {currentLang === 'hi' ? selectedPhoto.titleHi : selectedPhoto.titleEn}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="p-2 rounded-lg text-amber-400 hover:text-white bg-[#1A1A1A] hover:bg-[#262626] transition-colors"
                  aria-label="Close photo preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Full Image Presentation */}
              <div className="relative rounded-xl overflow-hidden bg-black border border-neutral-800 max-h-[65vh] flex items-center justify-center">
                <img
                  src={selectedPhoto.src}
                  alt={currentLang === 'hi' ? selectedPhoto.titleHi : selectedPhoto.titleEn}
                  referrerPolicy="no-referrer"
                  className="max-h-[65vh] w-auto max-w-full object-contain"
                />
              </div>

              <p className="mt-4 text-xs sm:text-sm text-amber-200/90 leading-relaxed font-devanagari">
                {currentLang === 'hi' ? selectedPhoto.descHi : selectedPhoto.descEn}
              </p>

              <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center justify-between text-xs text-amber-400/80">
                <span>॥ श्री महाकाल भैरवाय नमः ॥</span>
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="px-4 py-1.5 rounded-lg bg-[#1A1A1A] hover:bg-[#262626] text-amber-200 border border-neutral-700"
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

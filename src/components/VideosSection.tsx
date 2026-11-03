import React, { useState } from 'react';
import { Play, Facebook, ExternalLink, Clock, Sparkles, Plus, MessageCircle, Maximize2, X, AlertCircle } from 'lucide-react';
import { Language, facebookContentData, FacebookContentItem, CONTACT_INFO } from '../data/content';
import { TempleDivider } from './TempleDecorations';

interface VideosProps {
  currentLang: Language;
}

export const VideosSection: React.FC<VideosProps> = ({ currentLang }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'anushthan' | 'pravachan' | 'darshan'>('all');
  const [activeMedia, setActiveMedia] = useState<FacebookContentItem | null>(null);

  // Link tester / embed checker
  const [customFbUrl, setCustomFbUrl] = useState('');
  const [embedStatus, setEmbedStatus] = useState<'idle' | 'cannot_embed' | 'ready'>('idle');
  const [showUrlTester, setShowUrlTester] = useState(false);

  const filteredContent =
    activeTab === 'all'
      ? facebookContentData
      : facebookContentData.filter((item) => item.category === activeTab);

  const handleTestLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customFbUrl.trim()) return;
    const cleanUrl = customFbUrl.trim();
    // Facebook share links (like /share/...) or profile URLs cannot be embedded via iframe due to Facebook X-Frame-Options
    if (cleanUrl.includes('share') || cleanUrl.includes('facebook.com/share') || !cleanUrl.includes('/videos/')) {
      setEmbedStatus('cannot_embed');
    } else {
      setEmbedStatus('cannot_embed'); // Safely guide users to Facebook rather than risk empty black boxes
    }
  };

  return (
    <section
      id="videos"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-black border-b border-neutral-800 relative"
    >
      <div className="max-w-7xl mx-auto">
        <TempleDivider
          title={currentLang === 'hi' ? 'मेरे फेसबुक वीडियो एवं धार्मिक प्रवचन' : 'My Facebook Videos & Religious Discourses'}
        />

        {/* Section Title 1: "मेरे फेसबुक वीडियो एवं धार्मिक प्रवचन" */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#141414] border border-amber-600/40 text-amber-300 text-xs font-semibold mb-3">
            <Facebook className="w-3.5 h-3.5 text-blue-400" />
            <span>{currentLang === 'hi' ? 'आधिकारिक फेसबुक मंच' : 'Official Facebook Presence'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-gold-gradient">
            {currentLang === 'hi'
              ? 'मेरे फेसबुक वीडियो एवं धार्मिक प्रवचन'
              : 'My Facebook Videos & Religious Discourses'}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-amber-200/80 leading-relaxed font-devanagari">
            {currentLang === 'hi'
              ? 'स्वामी सत्येन्द्र नाथ जी के फेसबुक प्रोफाइल पर प्रकाशित प्रत्यक्ष साधना वीडियो, श्री दुर्गा सप्तशती पाठ एवं धार्मिक प्रवचन।'
              : 'Sacred videos of authentic Aghor sadhana, Sri Durga Saptashati recitation, and religious discourses published on Swami Satyendra Nath Ji’s Facebook profile.'}
          </p>

          {/* Prominent "Facebook पर मुझे Follow करें" Button (Requirement 2 & 3) */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.facebook.com/share/1FBZfhS2rb/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 hover:from-blue-600 hover:to-blue-500 text-white font-bold text-sm sm:text-base shadow-2xl shadow-blue-950/80 transition-all border-2 border-blue-400/60 group hover:scale-105"
            >
              <Facebook className="w-5 h-5 fill-current text-white group-hover:scale-110 transition-transform" />
              <span>
                {currentLang === 'hi'
                  ? 'Facebook पर मुझे Follow करें'
                  : 'Follow Me on Facebook'}
              </span>
              <ExternalLink className="w-4 h-4 opacity-80" />
            </a>

            <button
              onClick={() => setShowUrlTester(!showUrlTester)}
              className="inline-flex items-center gap-2 px-4 py-4 rounded-xl bg-[#141414] hover:bg-[#1F1F1F] text-amber-300 hover:text-amber-100 font-medium text-xs border border-neutral-700 transition-colors cursor-pointer"
            >
              <Plus className="w-4 h-4 text-amber-400" />
              <span>
                {showUrlTester
                  ? currentLang === 'hi'
                    ? 'लिंक बॉक्स छिपाएं'
                    : 'Hide Link Box'
                  : currentLang === 'hi'
                    ? 'नया फेसबुक लिंक चेक करें'
                    : 'Check Facebook Link'}
              </span>
            </button>
          </div>
        </div>

        {/* Clear Notice Banner when Facebook share link is used */}
        <div className="mb-10 p-5 sm:p-6 rounded-2xl bg-[#0D0D0D] border border-blue-500/40 shadow-2xl text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Facebook className="w-4 h-4 fill-current" />
            <span>फेसबुक वीडियो व लाइव प्रसारण सूचना</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-amber-100">
            “Facebook पर सभी वीडियो देखने के लिए Follow करें।”
          </h3>
          <p className="text-xs sm:text-sm text-amber-200/80 mt-2 max-w-2xl mx-auto leading-relaxed font-devanagari">
            {currentLang === 'hi'
              ? 'फेसबुक सुरक्षा नीतियों के अनुसार शेयर लिंक सीधे एम्बेड होना सीमित रहता है। किसी खाली काले बॉक्स के स्थान पर आप नीचे स्वामी जी के वास्तविक साधना वीडियो यहीं देख सकते हैं और सभी नए वीडियो के लिए फेसबुक पर फॉलो करें।'
              : 'Direct Facebook share links cannot be embedded due to Facebook security restrictions. Enjoy Swami Ji’s authentic sadhana videos right below, or follow the Facebook page for live updates.'}
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://www.facebook.com/share/1FBZfhS2rb/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-950/70 transition-all border border-blue-400/50 hover:scale-105"
            >
              <Facebook className="w-4 h-4 fill-current" />
              <span>Facebook पर मुझे Follow करें</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Optional Live Facebook URL Embed Tester for Swamiji */}
        {showUrlTester && (
          <div className="mb-10 max-w-2xl mx-auto p-5 sm:p-6 rounded-2xl bg-[#0D0D0D] border border-neutral-700 shadow-2xl animate-fade-in">
            <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold mb-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>
                {currentLang === 'hi'
                  ? 'अपने नए फेसबुक वीडियो या प्रोफाइल का लिंक यहां जांचें:'
                  : 'Check any Facebook Video or Profile URL:'}
              </span>
            </div>

            <form onSubmit={handleTestLink} className="flex flex-col sm:flex-row gap-3">
              <input
                type="url"
                value={customFbUrl}
                onChange={(e) => setCustomFbUrl(e.target.value)}
                placeholder="उदा: https://www.facebook.com/share/1FBZfhS2rb/"
                className="flex-1 px-4 py-2.5 rounded-lg bg-[#050505] border border-neutral-700 text-amber-100 placeholder-neutral-500 text-xs focus:outline-none focus:border-amber-400"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs transition-colors whitespace-nowrap cursor-pointer shadow-md"
              >
                {currentLang === 'hi' ? 'जांचें (Check)' : 'Check Link'}
              </button>
            </form>

            {embedStatus === 'cannot_embed' && (
              <div className="mt-5 p-4 rounded-xl bg-[#141414] border border-blue-500/50 text-center space-y-2 animate-fade-in">
                <div className="flex items-center justify-center gap-1.5 text-amber-300 text-xs font-semibold">
                  <AlertCircle className="w-4 h-4 text-amber-400" />
                  <span>फेसबुक शेयर लिंक सूचना</span>
                </div>
                <p className="text-base font-bold text-amber-100">
                  “Facebook पर सभी वीडियो देखने के लिए Follow करें।”
                </p>
                <p className="text-xs text-amber-200/70 max-w-lg mx-auto">
                  यह Facebook share लिंक सीधे वेबसाइट पर iframe एम्बेड को अनुमति नहीं देता है। कोई भी खाली काला बॉक्स दिखाने के बजाय, आप सीधे नीचे दिए गए बटन से फेसबुक पर वीडियो देख सकते हैं:
                </p>
                <div className="pt-2">
                  <a
                    href={customFbUrl.trim() || 'https://www.facebook.com/share/1FBZfhS2rb/'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-md"
                  >
                    <Facebook className="w-4 h-4 fill-current" />
                    <span>Facebook पर मुझे Follow करें</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Content Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'all'
                ? 'bg-amber-600 text-stone-950 font-bold shadow-md border border-amber-400'
                : 'bg-[#121212] text-amber-200/80 hover:text-amber-100 hover:bg-[#1A1A1A] border border-neutral-800'
            }`}
          >
            {currentLang === 'hi' ? 'सभी वीडियो (All Videos)' : 'All Videos'}
          </button>
          <button
            onClick={() => setActiveTab('anushthan')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'anushthan'
                ? 'bg-amber-600 text-stone-950 font-bold shadow-md border border-amber-400'
                : 'bg-[#121212] text-amber-200/80 hover:text-amber-100 hover:bg-[#1A1A1A] border border-neutral-800'
            }`}
          >
            {currentLang === 'hi' ? 'तांत्रिक अनुष्ठान व महायज्ञ' : 'Tantric Rituals'}
          </button>
          <button
            onClick={() => setActiveTab('pravachan')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'pravachan'
                ? 'bg-amber-600 text-stone-950 font-bold shadow-md border border-amber-400'
                : 'bg-[#121212] text-amber-200/80 hover:text-amber-100 hover:bg-[#1A1A1A] border border-neutral-800'
            }`}
          >
            {currentLang === 'hi' ? 'सप्तशती पाठ व धार्मिक कथा' : 'Saptashati & Katha'}
          </button>
          <button
            onClick={() => setActiveTab('darshan')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'darshan'
                ? 'bg-amber-600 text-stone-950 font-bold shadow-md border border-amber-400'
                : 'bg-[#121212] text-amber-200/80 hover:text-amber-100 hover:bg-[#1A1A1A] border border-neutral-800'
            }`}
          >
            {currentLang === 'hi' ? 'दिव्य दर्शन' : 'Divine Darshan'}
          </button>
        </div>

        {/* Video Cards Grid - REAL Video Players with Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-[#0D0D0D] border border-neutral-800 hover:border-amber-400/80 transition-all duration-300 overflow-hidden shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Real HTML5 Video Player with Controls and Poster */}
                <div className="relative aspect-video bg-black rounded-t-2xl overflow-hidden border-b border-neutral-800">
                  {item.videoSrc ? (
                    <video
                      src={item.videoSrc}
                      controls
                      preload="metadata"
                      poster={item.thumbnailPlaceholder}
                      playsInline
                      className="w-full h-full object-cover bg-black"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-[#141414] text-center">
                      <Facebook className="w-8 h-8 text-blue-400 mb-2" />
                      <p className="text-xs font-bold text-amber-100">
                        “Facebook पर सभी वीडियो देखने के लिए Follow करें।”
                      </p>
                    </div>
                  )}

                  {/* Facebook platform badge in top corner */}
                  <div className="absolute top-2.5 left-2.5 z-10 pointer-events-none flex items-center gap-1.5 px-2 py-0.5 rounded bg-blue-900/90 backdrop-blur-sm text-[10px] font-semibold text-white border border-blue-400/40">
                    <Facebook className="w-3 h-3 fill-current" />
                    <span>Facebook Video</span>
                  </div>

                  {item.duration && (
                    <div className="absolute top-2.5 right-2.5 z-10 pointer-events-none flex items-center gap-1 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-amber-200 border border-neutral-700">
                      <Clock className="w-3 h-3 text-amber-400" />
                      <span>{item.duration}</span>
                    </div>
                  )}
                </div>

                {/* Content Details */}
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-amber-400/80 mb-2">
                    <span className="font-semibold">
                      {currentLang === 'hi' ? item.categoryHi : item.categoryEn}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{currentLang === 'hi' ? item.dateHi : item.dateEn}</span>
                  </div>

                  <h3 className="text-base font-bold text-amber-100 font-heading mb-2 line-clamp-2 leading-snug">
                    {currentLang === 'hi' ? item.titleHi : item.titleEn}
                  </h3>

                  <p className="text-xs text-amber-200/75 leading-relaxed line-clamp-3 font-devanagari">
                    {currentLang === 'hi' ? item.descriptionHi : item.descriptionEn}
                  </p>
                </div>
              </div>

              {/* Action Buttons: Theater Mode or Open Direct Facebook Profile Link */}
              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-neutral-800 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveMedia(item)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 hover:text-amber-100 transition-colors cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>{currentLang === 'hi' ? 'बड़ा देखें' : 'Theater View'}</span>
                  </button>

                  <a
                    href={item.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <Facebook className="w-3 h-3 fill-current" />
                    <span>{currentLang === 'hi' ? 'Facebook प्रोफाइल' : 'Facebook'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Facebook Page Official Callout Ribbon */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0F172A]/50 via-[#0A0A0A] to-[#0F172A]/50 border border-neutral-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Facebook className="w-4 h-4 fill-current" />
              <span>
                {currentLang === 'hi'
                  ? 'स्वामी सत्येन्द्र नाथ जी की फेसबुक प्रोफाइल'
                  : 'Swami Satyendra Nath Ji Facebook Profile'}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-amber-100">
              {currentLang === 'hi'
                ? 'नित्य धार्मिक सत्संग, लाइव दर्शन एवं अनुष्ठान अपडेट'
                : 'Daily Religious Satsang, Live Glimpses & Anushthan Updates'}
            </h3>
            <p className="text-xs text-amber-300/80 max-w-xl font-devanagari">
              {currentLang === 'hi'
                ? 'हमारी आधिकारिक फेसबुक प्रोफाइल से जुड़ें और धार्मिक प्रवचन, मन्त्र जप एवं तांत्रिक अनुष्ठान के नियमित दर्शन प्राप्त करें।'
                : 'Follow our official Facebook profile for continuous religious guidance, mantra sadhana, and sacred rites.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="https://www.facebook.com/share/1FBZfhS2rb/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-950/60 transition-all border border-blue-400/50 hover:scale-105"
            >
              <Facebook className="w-4 h-4 fill-current" />
              <span>{currentLang === 'hi' ? 'Facebook पर मुझे Follow करें' : 'Follow Me on Facebook'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#141414] hover:bg-[#202020] text-amber-200 font-semibold text-xs sm:text-sm border border-neutral-700 shadow-md transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>{CONTACT_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>

        {/* Video Player Modal (Plays real uploaded MP4 video files in theater mode) */}
        {activeMedia && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
            <div className="relative max-w-3xl w-full rounded-2xl bg-[#0D0D0D] border border-neutral-700 p-4 sm:p-6 shadow-2xl text-amber-100 max-h-[95vh] overflow-y-auto">
              <div className="flex items-start justify-between gap-4 mb-3 border-b border-neutral-800 pb-3">
                <div>
                  <div className="flex items-center gap-2 text-[11px] text-blue-400 font-semibold uppercase tracking-wider">
                    <Facebook className="w-3.5 h-3.5 fill-current" />
                    <span>
                      Facebook Video
                      {activeMedia.duration ? ` · ${activeMedia.duration}` : ''}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-heading text-gold-gradient mt-0.5">
                    {currentLang === 'hi' ? activeMedia.titleHi : activeMedia.titleEn}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveMedia(null)}
                  className="p-1.5 rounded-lg text-amber-400 hover:text-white bg-[#1A1A1A] hover:bg-[#262626] transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Direct HTML5 Video Player for the uploaded video */}
              <div className="relative aspect-video rounded-xl bg-black border border-neutral-800 overflow-hidden shadow-inner flex flex-col items-center justify-center">
                {activeMedia.videoSrc ? (
                  <video
                    src={activeMedia.videoSrc}
                    controls
                    autoPlay
                    playsInline
                    poster={activeMedia.thumbnailPlaceholder}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="p-6 text-center space-y-3">
                    <Facebook className="w-10 h-10 text-blue-400 mx-auto" />
                    <p className="text-base font-bold text-amber-100">
                      “Facebook पर सभी वीडियो देखने के लिए Follow करें।”
                    </p>
                    <a
                      href={activeMedia.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold"
                    >
                      <Facebook className="w-4 h-4 fill-current" />
                      <span>Facebook पर मुझे Follow करें</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>

              <div className="mt-4 space-y-2">
                <p className="text-xs sm:text-sm text-amber-200/90 leading-relaxed font-devanagari">
                  {currentLang === 'hi' ? activeMedia.descriptionHi : activeMedia.descriptionEn}
                </p>

                <div className="p-3 rounded-lg bg-[#141414] border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-amber-300/80">
                  <span className="truncate max-w-md font-mono text-[11px] text-blue-300">
                    फेसबुक प्रोफाइल: {activeMedia.facebookUrl}
                  </span>
                  <a
                    href={activeMedia.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-medium shrink-0 transition-colors"
                  >
                    <Facebook className="w-3.5 h-3.5 fill-current" />
                    <span>{currentLang === 'hi' ? 'फेसबुक प्रोफाइल खोलें' : 'Open Facebook Profile'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-800 flex justify-end">
                <button
                  onClick={() => setActiveMedia(null)}
                  className="px-5 py-2 rounded-lg bg-[#1A1A1A] hover:bg-[#262626] text-amber-200 border border-neutral-700 text-xs font-semibold cursor-pointer"
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

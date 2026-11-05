export type Language = 'hi' | 'en';

export const CONTACT_INFO = {
  phone: '+918800460088',
  phoneDisplay: '+91 88004 60088',
  whatsappUrl: 'https://wa.me/918800460088',
  email: 'swamisatyendranath@gmail.com',
  facebookPageUrl: 'https://www.facebook.com/share/1FBZfhS2rb/', // Swami Ji's official Facebook profile
  locationsHi: 'दिल्ली • हरिद्वार • काशी (वाराणसी)',
  locationsEn: 'Delhi • Haridwar • Kashi (Varanasi)',
  tapasthaliDetailsHi: 'स्वामी जी की मुख्य साधना एवं निवास स्थली दिल्ली, हरिद्वार (माँ गंगा तट) एवं काशी (मणिकर्णिका व अघोर पीठ) में स्थित है।',
  tapasthaliDetailsEn: 'Swami Ji resides and conducts sacred tantric sadhana across Delhi, Haridwar (Ganga bank), and Kashi (Manikarnika & Aghor Peeth).',
};

// Base URL helper for GitHub Pages compatibility (https://swamisatyendranath.github.io/swami-satyendra-nath-website/)
const baseUrl = '/';

export const getAssetUrl = (path: string): string => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  return `${baseUrl}${path.replace(/^\//, '')}`;
};

export const getAssetUrl = (path: string): string => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  return `${baseUrl}${path.replace(/^\//, '')}`;
};

export const IMAGES = {
  swamiPortrait: getAssetUrl('assets/aistudio/WhatsApp_Image_2026-10-29_at_00.18.45_f20e48ad.jpeg'),
  swamiForestSamadhi: getAssetUrl('assets/aistudio/WhatsApp_Image_2024-05-31_at_22.26.15_9d33ae92.jpeg'),
  swamiRiverDhuni: getAssetUrl('assets/aistudio/WhatsApp_Image_2024-05-31_at_22.26.07_bac920cb.jpeg'),
  swamiTantricAgni: getAssetUrl('assets/aistudio/WhatsApp_Image_2024-05-31_at_22.02.59_40e0061d.jpeg'),
  kashiManikarnika: getAssetUrl('assets/aistudio/1-1_16d33cb2.jpg'),
  himalayanKedarnath: getAssetUrl('assets/aistudio/fd57701fa6b13e69e646c7bbd476cb79_95d2b031.jpg'),
  deviDurgaMaa: getAssetUrl('assets/aistudio/83d53c68f9d34d4d54972bcbb875dd55_b3884bbb.jpg'),
  bhagwanShiva: getAssetUrl('assets/aistudio/4ca3e3e74ad39c62f844db1b7326df3b_01330475.jpg'),
};

export interface TantricServiceItem {
  id: string;
  titleHi: string;
  titleEn: string;
  subtitleHi: string;
  subtitleEn: string;
  descriptionHi: string;
  descriptionEn: string;
  solutionHi: string;
  solutionEn: string;
  iconName: string;
  badgeHi: string;
  badgeEn: string;
}

export const tantricSpecialties: TantricServiceItem[] = [
  {
    id: 'husband-wife-problem',
    titleHi: 'पति-पत्नी अनबन व वैवाहिक क्लेश',
    titleEn: 'Husband-Wife Disputes & Marital Harmony',
    subtitleHi: 'पारिवारिक प्रेम की पुनर्स्थापना एवं मानसिक दूरियों का अंत',
    subtitleEn: 'Restoring mutual love and removing bitter misunderstandings',
    descriptionHi: 'दाम्पत्य जीवन में बिना कारण होने वाले झगड़े, अविश्वास, क्रोध और अलगाव की स्थिति को तांत्रिक एवं वैदिक कामेश्वरी-महागौरी अनुष्ठान द्वारा शांत किया जाता है।',
    descriptionEn: 'Resolving chronic marital conflict, unexplained emotional distance, anger, and suspicion through authentic Tantric and Gauri-Shankar sadhana.',
    solutionHi: 'गौरी-शंकर सम्पुट पाठ, काम कला यन्त्र स्थापना एवं दाम्पत्य सौहार्द आहुति।',
    solutionEn: 'Gauri-Shankar Samputa recitation, Kaam-Kala Yantra consecration, and harmony oblations.',
    iconName: 'heart-crack',
    badgeHi: 'दाम्पत्य सुरक्षा',
    badgeEn: 'Marital Peace',
  },
  {
    id: 'divorce-problem',
    titleHi: 'तलाक (Divorce) समस्या व समाधान',
    titleEn: 'Divorce Prevention & Reconciliation',
    subtitleHi: 'टूटते हुए वैवाहिक रिश्तों को बचाने का शास्त्रीय तांत्रिक उपाय',
    subtitleEn: 'Spiritual intervention to avert broken marriages and separation',
    descriptionHi: 'यदि विवाह तलाक की कगार पर पहुंच चुका हो, न्यायालय में केस चल रहा हो या दोनों पक्षों में संवाद पूरी तरह बंद हो गया हो, तो विशेष तांत्रिक संकल्प से रिश्ते को नई दिशा दी जाती है।',
    descriptionEn: 'When marriage is on the verge of divorce or legal separation, targeted Tantric invocations help soften harsh enmity and reopen positive communication.',
    solutionHi: 'विद्वेषण शमन अनुष्ठान, आकर्षण होम एवं कुलदेवी का विशेष आशीर्वाद।',
    solutionEn: 'Hostility pacification rituals, Akarshana Havan, and ancestral deity blessings.',
    iconName: 'shield-alert',
    badgeHi: 'रिश्ता रक्षा',
    badgeEn: 'Family Rescue',
  },
  {
    id: 'third-party-relation',
    titleHi: 'रिश्ते में थर्ड पार्टी (सौतन) से मुक्ति',
    titleEn: 'Third-Party Interference & Sautan Removal',
    subtitleHi: 'जीवनसाथी के जीवन में किसी तीसरे व्यक्ति के अनुचित प्रभाव का अंत',
    subtitleEn: 'Ending unwanted external influence disruptive to your relationship',
    descriptionHi: 'यदि आपके पति या पत्नी किसी तीसरे व्यक्ति के बहकावे, वशीकरण या अनुचित आकर्षण में आकर घर-परिवार को नष्ट कर रहे हों, तो उच्चाटन एवं शोधन क्रिया द्वारा मुक्ति दिलाई जाती है।',
    descriptionEn: 'If a spouse has fallen under the deceptive manipulation or toxic sway of an outside individual, specialized Tantric Shodhana clears the negative bond.',
    solutionHi: 'उच्चाटन व सम्मोहन विच्छेद तांत्रिक क्रिया, सुरक्षित एवं सात्विक संकल्प।',
    solutionEn: 'Severing deceptive toxic ties through Tantric Shodhana and sacred Sankalpa.',
    iconName: 'user-x',
    badgeHi: 'बंधन मुक्ति',
    badgeEn: 'Separation',
  },
  {
    id: 'vashikaran-anushthan',
    titleHi: 'सात्विक वशीकरण एवं सम्मोहन अनुष्ठान',
    titleEn: 'Authentic Vashikaran & Akarshana Rituals',
    subtitleHi: 'भटके हुए प्रियजन को धर्म-मार्ग एवं परिवार की ओर वापस लाना',
    subtitleEn: 'Reconciling alienated loved ones through pure Agamic vibration',
    descriptionHi: 'तांत्रिक शास्त्रों में वशीकरण का अर्थ किसी का बुरा करना नहीं, बल्कि रूठे हुए जीवनसाथी, भटके हुए संतान अथवा पारिवारिक जनों के मन में आपके प्रति प्रेम व सद्भाव जागृत करना है।',
    descriptionEn: 'In Agamic scriptures, Vashikaran is the science of harmonizing discordant minds and restoring righteous affection in an alienated partner or child.',
    solutionHi: 'त्रैलोक्य मोहन यन्त्र, कामाख्या देवी मन्त्र जप एवं सिद्ध गुटिका धारण।',
    solutionEn: 'Trailokya Mohan Yantra, Kamakhya Devi mantra japa, and consecrated talisman.',
    iconName: 'sparkles',
    badgeHi: 'आकर्षण एवं प्रेम',
    badgeEn: 'Reconciliation',
  },
  {
    id: 'court-cases',
    titleHi: 'कोर्ट कचहरी व मुकदमा निवारण',
    titleEn: 'Court Cases & Legal Dispute Remedies',
    subtitleHi: 'झूठे मुकदमों, पुलिस केस एवं न्याय सम्बन्धी अवरोधों से विजय',
    subtitleEn: 'Victory over false litigations, property disputes and legal hurdles',
    descriptionHi: 'लंबे समय से चल रहे कोर्ट केस, जमीन-जायदाद के विवाद या झूठे मुकदमों में फंसाए जाने पर माँ पीताम्बरा बगलामुखी अनुष्ठान द्वारा विरोधी की वाणी व कुचेष्टाओं का स्तंभन किया जाता है।',
    descriptionEn: 'For stubborn court cases, property disputes, or false legal traps, Maa Baglamukhi Tantra is performed to immobilize opponent conspiracies and secure rightful truth.',
    solutionHi: 'माँ बगलामुखी हल्दी होम, शत्रु स्तंभन अनुष्ठान एवं अमोघ विजय संकल्प।',
    solutionEn: 'Maa Baglamukhi turmeric Havan, Stambhana rite, and victory Sankalpa.',
    iconName: 'scale',
    badgeHi: 'मुकदमा विजय',
    badgeEn: 'Legal Victory',
  },
  {
    id: 'bhoot-pret-badha',
    titleHi: 'भूत-प्रेत, ऊपरी बाधा व नजर दोष निवारण',
    titleEn: 'Removal of Bhoot-Pret, Evil Eye & Negative Entities',
    subtitleHi: 'अघोर तांत्रिक क्रियाओं द्वारा काली ताकतों एवं प्रेत बाधा से पूर्ण मुक्ति',
    subtitleEn: 'Complete eradication of demonic disturbances, black energy, and hexes',
    descriptionHi: 'अचानक स्वास्थ्य बिगड़ना, घर में अजीब आवाजें, कारोबार ठप होना, या किसी के द्वारा किया-कराया तंत्र प्रयोग। स्वामी जी श्मशान भैरव एवं महाकाली साधना से इसे जड़ से समाप्त करते हैं।',
    descriptionEn: 'Sudden inexplicable illness, eerie domestic occurrences, business collapse, or malicious hexes. Destroyed at the root via Smashan Bhairav & Mahakali rituals.',
    solutionHi: 'श्मशान भैरव कीलन, महाकाली खड्ग बन्धन, भस्म एवं रक्षा कवच निर्माण।',
    solutionEn: 'Smashan Bhairav nail-binding, Mahakali Kavach, consecrated Bhasma & amulet.',
    iconName: 'ghost',
    badgeHi: 'अघोर रक्षा कवच',
    badgeEn: 'Aghor Shield',
  },
  {
    id: 'grah-kalesh',
    titleHi: 'गृह क्लेश एवं पारिवारिक कलह शांति',
    titleEn: 'Grah Kalesh & Domestic Turmoil Peace',
    subtitleHi: 'घर में शांति, सुख, समृद्धि एवं सकारात्मक ऊर्जा का वास',
    subtitleEn: 'Banishing chronic family fighting and inviting Lakshmi-Shanti',
    descriptionHi: 'जिस घर में हर दिन बिना बात के झगड़े होते हों, वहां लक्ष्मी का वास नहीं रहता। वास्तु दोष, पितृ दोष अथवा अनिष्टकारी शक्तियों का निष्कासन कर घर में मंगल ऊर्जा स्थापित की जाती है।',
    descriptionEn: 'Homes plagued by constant turmoil lose prosperity and peace. Through Vastu Purusha invocation and Pitra purification, auspicious vibrations are revived.',
    solutionHi: 'वास्तु कीलन, धूमावती-भैरव शुद्धि होम एवं सम्पूर्ण गृह रक्षा रेखांकन।',
    solutionEn: 'Vastu nail-protection, Dhumavati-Bhairav cleansing fire, and home perimeter seal.',
    iconName: 'home',
    badgeHi: 'पारिवारिक शांति',
    badgeEn: 'Domestic Peace',
  },
  {
    id: 'nisantan-dampati',
    titleHi: 'निःसंतान दंपत्तियों के लिए संतान प्राप्ति अनुष्ठान',
    titleEn: 'Nisantan Dampatiyon ka Nivaran (Childless Couples)',
    subtitleHi: 'वंश वृद्धि, गर्भ रक्षा एवं संतान सुख हेतु वैदिक-तांत्रिक उपाय',
    subtitleEn: 'Sacred blessings and Tantric rites for conceiving healthy progeny',
    descriptionHi: 'चिकित्सीय उपचार के उपरांत भी संतान सुख से वंचित दंपत्तियों के लिए कुल दोष, पितृ शाप, अथवा ग्रह बाधा का निवारण कर गोपाल सन्तान एवं षष्ठी देवी का अनुष्ठान किया जाता है।',
    descriptionEn: 'For couples struggling with fertility despite medical attempts, addressing subtle karmic blocks, Pitra Dosha, and invoking Santana Gopala & Shashthi Devi.',
    solutionHi: 'सन्तान गोपाल मन्त्र सम्पुट, नागबली-नारायणबली एवं कामधेनु अर्चन।',
    solutionEn: 'Santana Gopala Samputa, Narayanabali ritual, and Kamadhenu archana.',
    iconName: 'baby',
    badgeHi: 'वंश वृद्धि',
    badgeEn: 'Progeny Blessing',
  },
];

export interface FacebookContentItem {
  id: string;
  type: 'video' | 'post';
  titleHi: string;
  titleEn: string;
  category: 'anushthan' | 'pravachan' | 'sadhana' | 'darshan';
  categoryHi: string;
  categoryEn: string;
  duration?: string;
  videoSrc?: string; // Direct path to uploaded video file in /assets/aistudio/
  facebookUrl: string; // Swami Ji's Facebook profile or video URL
  embedUrl?: string; // Optional Facebook plugin embed URL
  descriptionHi: string;
  descriptionEn: string;
  dateHi: string;
  dateEn: string;
  thumbnailPlaceholder?: string;
}

export const facebookContentData: FacebookContentItem[] = [
  {
    id: 'fb-vid-1',
    type: 'video',
    titleHi: 'महाचण्डी तांत्रिक अनुष्ठान, त्रिशूल अर्चन एवं अग्नि सेवा',
    titleEn: 'Maha Chandi Tantric Ritual, Trishul Archana & Sacred Fire',
    category: 'anushthan',
    categoryHi: 'तांत्रिक अनुष्ठान',
    categoryEn: 'Tantric Ritual',
    duration: '01:07',
    videoSrc: getAssetUrl('assets/aistudio/WhatsApp_Video_2026-07-11_at_2.02.12_AM_7626c383.mp4'),
    facebookUrl: 'https://www.facebook.com/share/1FBZfhS2rb/',
    descriptionHi: 'स्वामी सत्येन्द्र नाथ जी द्वारा प्राचीन मन्दिर गर्भगृह में सम्पन्न महाचण्डी हवन, त्रिशूल पर पुष्पमाला अर्पण एवं मन्त्रोच्चार सहित अघोर साधना।',
    descriptionEn: 'Sacred visual recording of Swami Satyendra Nath Ji performing Maha Chandi tantric havan, trishul archana and mantra chanting inside the temple sanctum.',
    dateHi: 'प्रत्यक्ष साधना वीडियो',
    dateEn: 'Authentic Sadhana Video',
    thumbnailPlaceholder: getAssetUrl('assets/aistudio/WhatsApp_Image_2024-05-31_at_22.02.59_40e0061d.jpeg'),
  },
  {
    id: 'fb-vid-2',
    type: 'video',
    titleHi: 'श्री दुर्गा सप्तशती - प्रथम अध्याय: मधु-कैटभ वध',
    titleEn: 'Sri Durga Saptashati - Chapter 1: Madhu-Kaitabh Vadh',
    category: 'pravachan',
    categoryHi: 'सप्तशती पाठ',
    categoryEn: 'Saptashati Path',
    duration: '00:07',
    videoSrc: getAssetUrl('assets/aistudio/17bbeee4-7529-4a8b-ac9c-0cf0f86961f1_87662e19.mp4'),
    facebookUrl: 'https://www.facebook.com/share/1FBZfhS2rb/',
    descriptionHi: 'प्रस्तुति: स्वामी सत्येन्द्र नाथ जी। श्री दुर्गा सप्तशती प्रथम अध्याय (मधु-कैटभ वध - प्रथम चरित्र) का पावन पाठ एवं आध्यात्मिक प्रस्तुति।',
    descriptionEn: 'Presented by Swami Satyendra Nath Ji: Chanting and spiritual presentation of Sri Durga Saptashati Chapter 1 (Madhu-Kaitabh Vadh).',
    dateHi: 'आधिकारिक फेसबुक वीडियो',
    dateEn: 'Official Facebook Video',
    thumbnailPlaceholder: getAssetUrl('assets/aistudio/WhatsApp_Image_2026-10-29_at_00.18.45_f20e48ad.jpeg'),
  },
  {
    id: 'fb-vid-3',
    type: 'video',
    titleHi: 'श्री दुर्गा सप्तशती - माँ भगवती की अद्भुत और दिव्य महागाथा',
    titleEn: 'Sri Durga Saptashati - Divine Mahagatha of Devi Bhagwati',
    category: 'anushthan',
    categoryHi: 'धार्मिक महागाथा',
    categoryEn: 'Sacred Saga',
    duration: '00:07',
    videoSrc: getAssetUrl('assets/aistudio/12ed595c-99da-4242-a61a-3446de4cbbab_084e4421.mp4'),
    facebookUrl: 'https://www.facebook.com/share/1FBZfhS2rb/',
    descriptionHi: 'तेरह अध्यायों में समाहित माँ की अनंत शक्ति—श्रद्धा और भक्ति के साथ देखिए श्री दुर्गा सप्तशती। प्रस्तुति: स्वामी सत्येन्द्र नाथ जी।',
    descriptionEn: 'Embodying the infinite divine energy across 13 sacred chapters—witness Sri Durga Saptashati presented by Swami Satyendra Nath Ji.',
    dateHi: 'आधिकारिक फेसबुक वीडियो',
    dateEn: 'Official Facebook Video',
    thumbnailPlaceholder: getAssetUrl('assets/aistudio/83d53c68f9d34d4d54972bcbb875dd55_b3884bbb.jpg'),
  },
  {
    id: 'fb-vid-4',
    type: 'video',
    titleHi: 'माँ दुर्गा का दिव्य प्राकट्य और महिषासुर की कथा',
    titleEn: 'Divine Appearance of Maa Durga & Mahishasura Katha',
    category: 'pravachan',
    categoryHi: 'धार्मिक कथा',
    categoryEn: 'Religious Katha',
    duration: '00:09',
    videoSrc: getAssetUrl('assets/aistudio/c9c7fc14-7b2f-4d36-8a78-b8b08f19c6ad_728779ef.mp4'),
    facebookUrl: 'https://www.facebook.com/share/1FBZfhS2rb/',
    descriptionHi: 'माँ दुर्गा के प्राकट्य और महिषासुर मर्दिनी स्वरूप की पावन धार्मिक कथा एवं दिव्य दर्शन। हमारे फेसबुक पेज से अवश्य जुड़े रहें।',
    descriptionEn: 'The divine descent of Mother Durga and the narrative of Mahishasura Mardini. Stay connected with Swami Ji on Facebook.',
    dateHi: 'धार्मिक कथा श्रृंखला',
    dateEn: 'Religious Katha Series',
    thumbnailPlaceholder: getAssetUrl('assets/aistudio/83d53c68f9d34d4d54972bcbb875dd55_b3884bbb.jpg'),
  },
  {
    id: 'fb-vid-5',
    type: 'video',
    titleHi: 'सिंहवाहिनी माँ दुर्गा - अलौकिक ज्योतिर्मय दर्शन एवं पुष्प वर्षा',
    titleEn: 'Maa Durga Riding Lion - Radiant Divine Blessing',
    category: 'darshan',
    categoryHi: 'दिव्य दर्शन',
    categoryEn: 'Divine Darshan',
    duration: '00:10',
    videoSrc: getAssetUrl('assets/aistudio/1f770df1-778f-4866-863a-9e1d08810c4b_47910022.mp4'),
    facebookUrl: 'https://www.facebook.com/share/1FBZfhS2rb/',
    descriptionHi: 'स्वर्ण प्रभा से आलोकित माँ जगदम्बा के अष्टभुजा स्वरूप के अलौकिक दर्शन एवं पुष्प वृष्टि—भक्तों के कल्याणार्थ फेसबुक पर प्रकाशित।',
    descriptionEn: 'Divine golden radiance of Mother Jagadamba bestowing fearless blessings upon devotees, published on Facebook.',
    dateHi: 'फेसबुक दिव्य दर्शन',
    dateEn: 'Facebook Divine Darshan',
    thumbnailPlaceholder: getAssetUrl('assets/aistudio/83d53c68f9d34d4d54972bcbb875dd55_b3884bbb.jpg'),
  },
  {
    id: 'fb-vid-6',
    type: 'video',
    titleHi: 'माँ जगदम्बा नवदुर्गा - सर्वकल्याणकारी प्राकट्य दर्शन',
    titleEn: 'Maa Navadurga Universal Blessing & Grace',
    category: 'darshan',
    categoryHi: 'दिव्य दर्शन',
    categoryEn: 'Divine Darshan',
    duration: '00:09',
    videoSrc: getAssetUrl('assets/aistudio/3048b2c9-4895-4186-935b-e0479c834774_686db27e.mp4'),
    facebookUrl: 'https://www.facebook.com/share/1FBZfhS2rb/',
    descriptionHi: 'समस्त ब्रह्माण्ड को अभय प्रदान करने वाली सिंहवाहिनी माँ दुर्गा और नवदुर्गा स्वरूपों का अलौकिक दर्शन।',
    descriptionEn: 'The celestial manifestation of the Nine Durgas showering grace and removing all fears from the cosmos.',
    dateHi: 'फेसबुक दिव्य दर्शन',
    dateEn: 'Facebook Divine Darshan',
    thumbnailPlaceholder: getAssetUrl('assets/aistudio/83d53c68f9d34d4d54972bcbb875dd55_b3884bbb.jpg'),
  },
];

// Backward-compatible alias
export const videosData = facebookContentData;
export type VideoItem = FacebookContentItem;

export interface RitualItem {
  id: string;
  titleHi: string;
  titleEn: string;
  sanskritName: string;
  taglineHi: string;
  taglineEn: string;
  descriptionHi: string;
  descriptionEn: string;
  significanceHi: string;
  significanceEn: string;
  keyElementsHi: string[];
  keyElementsEn: string[];
  icon: string;
}

export const ritualsData: RitualItem[] = [
  {
    id: 'durga-saptashati',
    titleHi: 'दुर्गा सप्तशती पाठ',
    titleEn: 'Durga Saptashati Path',
    sanskritName: 'श्री दुर्गा सप्तशती (देवी माहात्म्यम्)',
    taglineHi: 'मार्कण्डेय पुराण अंतर्गत ७०० दिव्य मन्त्रों का सस्वर पारायण',
    taglineEn: 'Chanting of 700 sacred mantras from Markandeya Purana',
    descriptionHi: 'माँ जगदम्बा की असीम कृपा, भय मुक्ति और आत्मिक शक्ति की जागृति हेतु दुर्गा सप्तशती का विधिवत सम्पुट पाठ अत्यंत फलदायी माना जाता है। इसमें कवच, अर्गला, कीलक, प्रधानिक रहस्य तथा तीनों चरित्रों का शास्त्रसम्मत विधि से पाठ किया जाता है।',
    descriptionEn: 'The systematic recitation of Sri Durga Saptashati invokes divine feminine grace, dissolves inner and outer impediments, and bestows profound spiritual equanimity. Conducted with traditional Kavach, Argala, Kilak, and pristine Nyasa.',
    significanceHi: 'महाकाली, महालक्ष्मी और महासरस्वती के त्रिगुणात्मक स्वरूप की आराधना। संकट, अज्ञात भय और नकारात्मक ऊर्जा का निवारण।',
    significanceEn: 'Worship of the threefold supreme mother: Mahakali, Mahalakshmi, and Mahasaraswati. Dissolution of existential obstacles and distress.',
    keyElementsHi: ['शास्त्रोक्त संपुट विधान', 'वैदिक न्यास एवं अर्गला-कीलक', 'सिद्ध कुंजिका स्तोत्र पाठ', 'आरती एवं क्षमा प्रार्थना'],
    keyElementsEn: ['Traditional Samputa recitation', 'Vedic Nyasa and Shodashopachara', 'Siddha Kunjika Stotram', 'Aarti & Kshama Prarthana'],
    icon: 'flame',
  },
  {
    id: 'chandi-path',
    titleHi: 'चंडी पाठ एवं शतचंडी',
    titleEn: 'Chandi Path & Shata Chandi',
    sanskritName: 'श्री शतचंडी महायज्ञ विधान',
    taglineHi: 'दैवीय ऊर्जा की प्रतिष्ठा एवं सार्वभौमिक कल्याण हेतु महाअनुष्ठान',
    taglineEn: 'Grand sacred invocation for spiritual upliftment and divine shield',
    descriptionHi: 'चंडी पाठ अत्यंत तेजस्वी एवं शक्तिशाली अनुष्ठान है। विषम परिस्थितियों, कुल रक्षा तथा सर्वतोमुखी शांति हेतु चंडी एवं शतचंडी अनुष्ठान विद्वान ब्राह्मणों के साथ पूर्ण सात्विक एवं एकाग्र चित्त से संपन्न कराया जाता है।',
    descriptionEn: 'The Chandi Path is an exceptionally potent devotional sadhana. Undertaken with rigorous ascetic discipline, it generates profound positive spiritual vibrations for the protection of home, lineage, and spiritual elevation.',
    significanceHi: 'समस्त ग्रहों के अनिष्ट प्रभाव का शमन और भगवती चंडिका का साक्षात् कृपा-कवच।',
    significanceEn: 'Alleviation of planetary afflictions and seeking the sovereign benevolent sanctuary of Devi Chandika.',
    keyElementsHi: ['१०८ आवृत्ति संकल्प', 'घट स्थापना व अखंड ज्योति', 'शताहुति हवनात्मक पूर्णाहुति', 'कन्या एवं बटुक पूजन'],
    keyElementsEn: ['Consecrated sankalpa', 'Kalash Sthapana & Akhand Diya', 'Sacred 108 oblation Purnahuti', 'Kanya and Batuk Pujan'],
    icon: 'sparkles',
  },
  {
    id: 'navratri-puja',
    titleHi: 'नवरात्रि विशेष अनुष्ठान',
    titleEn: 'Navratri Sacred Anushthan',
    sanskritName: 'शारदीय एवं वासंतिक नवरात्र साधना',
    taglineHi: 'नौ दिनों की अखंड साधना, जप, तपस्या एवं शक्ति आराधना',
    taglineEn: 'Nine sacred nights of unbroken spiritual devotion, japa, and penance',
    descriptionHi: 'नवरात्रि का काल आध्यात्मिक उन्नति के लिए सर्वोत्तम माना गया है। प्रतिपदा से नवमी पर्यंत अखंड दीप प्रज्वलन, दुर्गा पाठ, प्रतिदिन विशिष्ट नैवेद्य और कन्या पूजन के साथ यह अनुष्ठान अत्यंत निष्ठा से कराया जाता है।',
    descriptionEn: 'Navratri is the quintessential seasonal juncture for inward elevation. From Pratipada to Navami, unbroken oil lamps, continuous japa, disciplined fasting, and sacred maiden veneration are strictly maintained.',
    significanceHi: 'नवदुर्गा के नौ स्वरूपों (शैलपुत्री से सिद्धिदात्री) का आशीर्वाद एवं मन की शुद्धि।',
    significanceEn: 'Invoking the blessings of the Nine Forms of Divine Mother (Shailaputri to Siddhidatri) and internal purification.',
    keyElementsHi: ['कलश स्थापना व जवारे रोपण', 'प्रतिदिन विशेष देवी अर्चन', 'सप्तशती पाठ व नर्वाण जप', 'महानवमी हवन व कन्या भोज'],
    keyElementsEn: ['Kalash Sthapana & holy barley', 'Daily Shodashopachara Puja', 'Navarna Mantra Japa', 'Maha Navami Havan & Feast'],
    icon: 'sun',
  },
  {
    id: 'rudrabhishek',
    titleHi: 'रुद्राभिषेक एवं महारुद्र',
    titleEn: 'Rudrabhishek & Maharudra',
    sanskritName: 'श्री रुद्राष्टाध्यायी एवं महारुद्र अभिषेक',
    taglineHi: 'देवाधिदेव महादेव शिव का वेद मन्त्रों द्वारा पंचामृत अभिषेक',
    taglineEn: 'Sacred Vedic Panchamrita abhisheka of Lord Shiva with Vedic chants',
    descriptionHi: 'शुक्ल यजुर्वेदीय रुद्राष्टाध्यायी के चमकम-नमकम् मंत्रों के सस्वर घोष के साथ शिवलिंग का गंगाजल, गाय के कच्चे दूध, मधु, घी, शर्करा और गन्ने के रस से निरंतर अभिषेक किया जाता है। यह समस्त क्लेशों का नाश करने वाला है।',
    descriptionEn: 'Revered as the ultimate Vedic rite for peace, health, and liberation. Performed using continuous pouring of consecrated water, cow milk, honey, ghee, and sacred juices along with Namakam-Chamakam Vedic intonations.',
    significanceHi: 'कालसर्प, मानसिक तनाव, असाध्य कष्टों का निवारण एवं महादेव शिव का सान्निध्य।',
    significanceEn: 'Peace of mind, eradication of past karmic weight, vitality, and abiding communion with Supreme Shiva.',
    keyElementsHi: ['एकादश रुद्राभिषेक विधान', 'बिल्वपत्र अर्चन व भस्म लेपन', 'महामृत्युंजय मंत्र सम्पुट', 'कपूर आरती व शिव स्तुति'],
    keyElementsEn: ['Ekadasha Rudra protocol', 'Bilva leaf archana & sacred vibhuti', 'Mahamrityunjaya Samputa', 'Camphor Aarti & Shiv Stuti'],
    icon: 'droplets',
  },
  {
    id: 'havan-yajna',
    titleHi: 'वैदिक व तांत्रिक हवन महायज्ञ',
    titleEn: 'Vedic & Tantric Havan Mahayajna',
    sanskritName: 'अग्निहोत्र एवं अघोर होम परम्परा',
    taglineHi: 'पवित्र अग्नि के माध्यम से वातावरण शुद्धि और देव शक्तियों का आह्वान',
    taglineEn: 'Environmental sanctification and divine oblations through sacred fire',
    descriptionHi: 'यज्ञ भारतीय संस्कृति का मूल प्राण है। शास्त्रसम्मत समिधा (पलाश, आम, शमी), शुद्ध गाय का घी, गुग्गल, लोबान और दुर्लभ औषधियों से सुवासित हविष्य द्वारा अग्निदेव को आहुतियां अर्पित की जाती हैं, जिससे घर और मन दोनों शुद्ध होते हैं।',
    descriptionEn: 'The consecrated Vedic fire (Agni) serves as the divine messenger between humankind and the cosmos. Performed with unadulterated cow ghee, medicinal herbs, guggal, and sacred woods to cleanse the home atmosphere and consciousness.',
    significanceHi: 'वास्तु दोष निवारण, दैविक कृपा, नकारात्मक तरंगों का शमन एवं पर्यावरण शुद्धि।',
    significanceEn: 'Neutralizing subtle environmental negativity, blessing the household, and restoring natural cosmic harmony.',
    keyElementsHi: ['वेदी निर्माण एवं रेखांकन', 'अग्नि मन्थन व संस्कार', 'गायत्री व महामृत्युंजय आहुति', 'वसोर्धारा व पूर्णाहुति'],
    keyElementsEn: ['Geometric Vedi consecration', 'Agni Prana-Pratishtha', 'Gayatri & Vedic oblations', 'Vasordhara & Purnahuti'],
    icon: 'mountain',
  },
  {
    id: 'graha-shanti',
    titleHi: 'नवग्रह शांति एवं दोष निवारण',
    titleEn: 'Navagraha Shanti & Dosha Nivaran',
    sanskritName: 'नवग्रह मण्डल अर्चा एवं होम विधान',
    taglineHi: 'सूर्य से केतु पर्यंत नव ग्रहों के अशुभ प्रभाव को शांत करने का वैदिक उपाय',
    taglineEn: 'Vedic harmony for planetary influences from Surya to Ketu',
    descriptionHi: 'जन्मपत्रिका में स्थित ग्रहों की प्रतिकूल दशा के कारण जीवन में आने वाले अवरोधों को शांत करने हेतु नवग्रह मण्डल का निर्माण कर प्रत्येक ग्रह के अधिदेवता एवं प्रत्यधिदेवता का विधिवत पूजन व हवन किया जाता है।',
    descriptionEn: 'When planetary transitions cause turbulence in health, relations, or career, the Navagraha rite harmonizes these celestial energies through specific Vedic mantras, consecrated grains, and charity.',
    significanceHi: 'शनि की साढ़े साती, राहु-केतु पीड़ा, मांगलिक दोष एवं पितृ दोष में विशेष शांति।',
    significanceEn: 'Remedies for Saturn transitions, Rahu-Ketu periods, and balancing astrological afflictions.',
    keyElementsHi: ['नवग्रह यन्त्र व मण्डल पूजन', 'ग्रह बीज मन्त्रों का सवा लाख जप', 'ग्रह समिधा द्वारा विशिष्ट हवन', 'शास्त्रोक्त दान संकल्प'],
    keyElementsEn: ['Navagraha mandala archana', 'Prescribed Vedic seed mantra japa', 'Planetary samidha oblations', 'Sattvic Daana guidance'],
    icon: 'circle-dot',
  },
];

export const tantraPrinciples = [
  {
    titleHi: 'आगम शास्त्र का मूल आधार',
    titleEn: 'Agama Shastra Foundations',
    descHi: 'तंत्र कोई आधुनिक विचार नहीं, बल्कि वेदों के समकक्ष अति प्राचीन आगम परम्परा है। यह व्यावहारिक साधना और प्रत्यक्ष अनुभव की विज्ञान-सम्मत पद्धति है।',
    descEn: 'Tantra is not a modern cult, but an ancient lineage rooted in the Agama scriptures—emphasizing direct experiential realization.',
    icon: 'book-open',
  },
  {
    titleHi: 'चेतना का विस्तार (तनोति विपुलानर्थान्)',
    titleEn: 'Expansion of Consciousness',
    descHi: 'शब्द "तंत्र" दो धातुओं से मिलकर बना है - "तन्" (विस्तार करना) और "त्रा" (मुक्ति या रक्षा करना)। अर्थात जो अज्ञान से मुक्त कर चेतना को विराट बनाए वही तंत्र है।',
    descEn: 'Derived from roots Tan (to expand) and Tra (to liberate), Tantra literally signifies the expansion of human consciousness beyond worldly limitations.',
    icon: 'eye',
  },
  {
    titleHi: 'शिव एवं शक्ति का अद्वैत सामंजस्य',
    titleEn: 'Harmony of Shiva & Shakti',
    descHi: 'शिव शांत चेतना हैं और शक्ति गतिशील ऊर्जा। दोनों का सामंजस्य ही सृष्टि और साधना का रहस्य है। तंत्र में प्रकृति और पुरुष का सम्मान है।',
    descEn: 'Shiva is pure unmanifest awareness; Shakti is dynamic cosmic force. Tantra teaches reverence for both spirit and cosmic matter.',
    icon: 'sun',
  },
  {
    titleHi: 'सत्य एवं निष्ठा: कोई अंधविश्वास नहीं',
    titleEn: 'Authenticity & Zero Superstition',
    descHi: 'हम किसी भी प्रकार के चमत्कार, वशीकरण, अंधविश्वास या अनुचित दावों का पूर्णतः विरोध करते हैं। वास्तविक तंत्र केवल आत्म-शुद्धि, मन्त्र और ईश्वर-समर्पण है।',
    descEn: 'We strictly reject any claims of sensationalism, occult coercion, or magical shortcuts. True Tantra is pure spiritual discipline, virtue, and surrender.',
    icon: 'shield-check',
  },
  {
    titleHi: 'मन्त्र, यन्त्र और तन्त्र का संतुलन',
    titleEn: 'Trinity of Mantra, Yantra & Tantra',
    descHi: 'मन्त्र सूक्ष्म ध्वनि तरंग है, यन्त्र ज्यामितीय दिव्य ऊर्जा क्षेत्र है, और तन्त्र उस ऊर्जा को जीवन में प्रवाहित करने की विधा है।',
    descEn: 'Mantra is the primordial sonic vibration, Yantra is the sacred geometric vessel, and Tantra is the experiential discipline uniting both.',
    icon: 'sparkles',
  },
  {
    titleHi: 'गुरु-शिष्य परम्परा एवं सात्विक जीवन',
    titleEn: 'Guru Parampara & Sattvic Life',
    descHi: 'तंत्र विद्या बिना योग्य मार्गदर्शन और पवित्र आचरण के सिद्ध नहीं होती। इसमें यम-नियम, सदाचार और संयम का पालन अनिवार्य है।',
    descEn: 'Agamic wisdom demands authentic lineage guidance, clean sattvic conduct, moral restraint, and continuous humility.',
    icon: 'award',
  },
];

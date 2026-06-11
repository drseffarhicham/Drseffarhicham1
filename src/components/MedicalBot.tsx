import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, Bot, Clock, MapPin, Stethoscope, FileText,
  Droplets, RefreshCw, CreditCard, HeartPulse,
  Baby, Microscope, Scissors, Languages,
} from 'lucide-react';

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────
type Lang = 'fr' | 'ar';

interface FaqItem {
  icon: React.ElementType;
  question: string;
  answer: string;
  type?: 'whatsapp' | 'maps';
  phone?: string;
  url?: string;
}

interface Message {
  type: 'bot' | 'user';
  content: 'text' | 'whatsapp' | 'maps';
  text: string;
  time: string;
  phone?: string;
  url?: string;
}

// ─────────────────────────────────────────────
// Données FAQ bilingues
// ─────────────────────────────────────────────
const faqData: Record<Lang, FaqItem[]> = {
  fr: [
    {
      icon: Clock,
      question: "Horaires d'ouverture",
      answer: "Le cabinet est ouvert du Lundi au Vendredi de 08h30 à 16h00, et le Samedi de 08h30 à 12h30. Fermé le Dimanche."
    },
    {
      icon: Bot,
      question: "Prendre rendez-vous",
      type: 'whatsapp',
      phone: "0668628626",
      answer: "whatsapp"
    },
    {
      icon: MapPin,
      question: "Localisation",
      type: 'maps',
      url: "https://maps.google.com/?q=Espace+Dubai+Inezgane+Gynécologue+Seffar",
      answer: "maps"
    },
    {
      icon: Stethoscope,
      question: "Spécialités",
      answer: "Le Dr Seffar Hicham est spécialisé en Gynécologie-Obstétrique : chirurgie gynécologique et mammaire (laparoscopie, hystéroscopie, chirurgie du sein), traitement des cancers gynécologiques et mammaires, suivi de grossesse, échographie 3D/4D et bilan de fertilité."
    },
    {
      icon: Baby,
      question: "Suivi de grossesse",
      answer: "Suivi complet de la grossesse avec 7 consultations prénatales, échographies régulières (1er, 2ème et 3ème trimestres), surveillance de la tension et dépistage du diabète gestationnel."
    },
    {
      icon: FileText,
      question: "1ère consultation",
      answer: "Pour votre première consultation, pensez à apporter vos bilans biologiques antérieurs, vos échographies, et si vous êtes enceinte, votre carnet de maternité."
    },
    {
      icon: Microscope,
      question: "Échographie 3D/4D",
      answer: "Notre cabinet est équipé d'un échographe Voluson de dernière génération (3D/4D + Doppler couleur). Zéro radiation, images HD en temps réel pour un suivi prénatal précis."
    },
    {
      icon: Droplets,
      question: "Troubles du cycle",
      answer: "Prise en charge des règles douloureuses, irrégulières, du syndrome prémenstruel, de l'endométriose et des troubles hormonaux (SOPK, hypothyroïdie…)."
    },
    {
      icon: Scissors,
      question: "Chirurgie mini-invasive",
      answer: "Le Dr Seffar pratique la laparoscopie (cœlioscopie) et l'hystéroscopie : petites cicatrices, moins de douleur et récupération rapide. Traitement des kystes, fibromes, polypes et infertilité."
    },
    {
      icon: RefreshCw,
      question: "Contraception",
      answer: "Conseil personnalisé sur toutes les méthodes contraceptives : pilule, DIU hormonal/cuivre, implant. Consultation de suivi annuel incluse."
    },
    {
      icon: HeartPulse,
      question: "Ménopause",
      answer: "Bilan ménopause, traitement des bouffées de chaleur et symptômes, traitement hormonal substitutif (selon antécédents), prévention de l'ostéoporose et suivi gynécologique annuel."
    },
    {
      icon: CreditCard,
      question: "Tarifs & contact",
      answer: "Pour toute information sur les tarifs et les rendez-vous, contactez le cabinet au 05 28 33 55 66. Cabinet situé Espace Dubai, 2ème étage, n°212, Inezgane 80100."
    },
    {
      icon: Microscope,
      question: "Dépistage des cancers",
      answer: "Le Dr Seffar assure le dépistage et le traitement des cancers gynécologiques (col de l'utérus, endomètre, ovaires) et du cancer du sein. Frottis cervico-utérin, colposcopie, biopsies et prise en charge oncologique complète."
    },
  ],
  ar: [
    {
      icon: Clock,
      question: "أوقات العمل",
      answer: "العيادة مفتوحة من الاثنين إلى الجمعة من 08:30 إلى 16:00، والسبت من 08:30 إلى 12:30. مغلقة يوم الأحد."
    },
    {
      icon: Bot,
      question: "حجز موعد",
      type: 'whatsapp',
      phone: "0668628626",
      answer: "whatsapp"
    },
    {
      icon: MapPin,
      question: "الموقع",
      type: 'maps',
      url: "https://maps.google.com/?q=Espace+Dubai+Inezgane+Gynécologue+Seffar",
      answer: "maps"
    },
    {
      icon: Stethoscope,
      question: "التخصصات",
      answer: "الدكتور الصفار هشام متخصص في أمراض النساء والتوليد: الجراحة النسائية والثدي (تنظير البطن، تنظير الرحم، جراحة الثدي)، علاج السرطانات النسائية وسرطان الثدي، متابعة الحمل، السونار ثلاثي الأبعاد وتقييم الخصوبة."
    },
    {
      icon: Baby,
      question: "متابعة الحمل",
      answer: "متابعة كاملة للحمل مع 7 فحوصات أساسية، سونار منتظم (الأشهر الثلاثة الأولى والثانية والثالثة)، مراقبة ضغط الدم وكشف سكري الحمل."
    },
    {
      icon: FileText,
      question: "أول زيارة",
      answer: "للزيارة الأولى، احضري معك نتائج التحاليل السابقة، صور السونار، وإذا كنت حاملاً، دفتر متابعة الحمل."
    },
    {
      icon: Microscope,
      question: "السونار 3D/4D",
      answer: "العيادة مجهزة بجهاز Voluson أحدث جيل (ثلاثي/رباعي الأبعاد + دوبلر ملون). صفر إشعاع، صور HD في الوقت الحقيقي لمتابعة دقيقة وآمنة."
    },
    {
      icon: Droplets,
      question: "اضطرابات الدورة",
      answer: "التكفل بآلام الدورة، الدورات غير المنتظمة، متلازمة ما قبل الحيض، بطانة الرحم المهاجرة والاضطرابات الهرمونية (تكيس المبايض، قصور الغدة الدرقية...)."
    },
    {
      icon: Scissors,
      question: "الجراحة طفيفة التوغل",
      answer: "الدكتور الصفار يمارس تنظير البطن والرحم: ندبات صغيرة، ألم أقل وتعافي سريع. علاج الأكياس، الأورام الليفية، الزوائد اللحمية والعقم."
    },
    {
      icon: RefreshCw,
      question: "منع الحمل",
      answer: "نصيحة شخصية حول وسائل منع الحمل: الحبوب، اللولب الهرموني/النحاسي، الغرسة. متابعة سنوية مدرجة."
    },
    {
      icon: HeartPulse,
      question: "سن الأمل",
      answer: "تقييم سن الأمل، علاج الهبات الساخنة والأعراض، العلاج الهرموني التعويضي (حسب السوابق)، الوقاية من هشاشة العظام ومتابعة نسائية سنوية."
    },
    {
      icon: CreditCard,
      question: "التعريفات والاتصال",
      answer: "لأي معلومات حول التعريفات والمواعيد، اتصلي على 05 28 33 55 66. العيادة في فضاء دبي، الطابق الثاني، رقم 212، إنزكان 80100."
    },
    {
      icon: Microscope,
      question: "الكشف المبكر عن السرطان",
      answer: "الدكتور الصفار يتكفل بالكشف المبكر وعلاج السرطانات النسائية (عنق الرحم، بطانة الرحم، المبايض) وسرطان الثدي. مسحة عنق الرحم، تنظير عنق الرحم، الخزعات ومتابعة أورامية كاملة."
    },
  ]
};

// ─────────────────────────────────────────────
// UI Labels bilingues
// ─────────────────────────────────────────────
const ui = {
  fr: {
    greeting: "Bonjour ! Je suis l'assistant du Dr Seffar Hicham, gynécologue-obstétricien à Inezgane. Comment puis-je vous aider ?",
    online: "En ligne",
    title: "Assistant Médical",
    faq_label: "Questions fréquentes",
    footer: "Réponses automatiques · Dr Seffar Hicham — Gynécologie Obstétrique · Inezgane",
    whatsapp_text: (phone: string) => `Contactez-nous directement sur numero 0528335566 ou sur WhatsApp  ${phone} :`,
    whatsapp_btn: "Ouvrir WhatsApp",
    maps_text: "Voici l'adresse du cabinet du Dr Seffar Hicham à Inezgane :",
    maps_btn: "Voir sur Google Maps",
    lang_prompt: "Choisissez votre langue / اختر لغتك",
    choose_fr: "Français",
    choose_ar: "العربية",
  },
  ar: {
    greeting: "مرحباً! أنا مساعد الدكتور الصفار هشام، أخصائي أمراض النساء والتوليد بإنزكان. كيف يمكنني مساعدتك؟",
    online: "متاح",
    title: "المساعد الطبي",
    faq_label: "الأسئلة الشائعة",
    footer: "ردود تلقائية · د. هشام الصفار — أمراض النساء والتوليد · إنزكان",
    whatsapp_text: (phone: string) => `تواصلي معنا مباشرة على واتساب على الرقم ${phone} :`,
    whatsapp_btn: "فتح واتساب",
    maps_text: "إليك عنوان عيادة الدكتور الصفار هشام بإنزكان :",
    maps_btn: "عرض على خرائط جوجل",
    lang_prompt: "Choisissez votre langue / اختر لغتك",
    choose_fr: "Français",
    choose_ar: "العربية",
  }
};

// ─────────────────────────────────────────────
// Composant principal
// ─────────────────────────────────────────────
const MedicalBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState<Lang | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Initialiser le bot après sélection de langue
  const handleLangSelect = (selectedLang: Lang) => {
    setLang(selectedLang);
    setMessages([
      {
        type: 'bot',
        content: 'text',
        text: ui[selectedLang].greeting,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  const handleQuestionClick = (faq: FaqItem) => {
    if (!lang) return;
    const userMsg: Message = {
      type: 'user',
      content: 'text',
      text: faq.question,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);

      let botMsg: Message = {
        type: 'bot',
        content: 'text',
        text: '',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      if (faq.type === 'whatsapp') {
        botMsg.content = 'whatsapp';
        botMsg.phone = faq.phone;
        botMsg.text = ui[lang].whatsapp_text(faq.phone || '');
      } else if (faq.type === 'maps') {
        botMsg.content = 'maps';
        botMsg.url = faq.url;
        botMsg.text = ui[lang].maps_text;
      } else {
        botMsg.content = 'text';
        botMsg.text = faq.answer;
      }

      setMessages(prev => [...prev, botMsg]);
    }, 1200);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
    // Reset si on réouvre et qu'on veut rechoisir la langue
  };

  const resetLang = () => {
    setLang(null);
    setMessages([]);
  };

  const renderMessage = (msg: Message, currentLang: Lang) => {
    const isRtl = currentLang === 'ar';

    if (msg.content === 'whatsapp') {
      return (
        <div>
          <p className="text-sm mb-2">{msg.text}</p>
          <a
            href={`https://wa.me/212${(msg.phone || '').replace(/^0/, '')}?text=${encodeURIComponent(
              currentLang === 'ar'
                ? 'مرحباً دكتور هشام الصفار، أودّ حجز موعد في عيادتكم.'
                : 'Bonjour Dr Seffar Hicham, je souhaite prendre un rendez-vous à votre cabinet.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-xl text-sm font-semibold transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-white" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.123 1.532 5.856L.057 23.882a.5.5 0 0 0 .61.61l6.052-1.475A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.933 0-3.741-.524-5.293-1.433l-.379-.226-3.932.957.974-3.912-.247-.394A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            {ui[currentLang].whatsapp_btn}
          </a>
        </div>
      );
    }

    if (msg.content === 'maps') {
      return (
        <div>
          <p className="text-sm mb-2">{msg.text}</p>
          <a
            href={msg.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-clinic-green-500 hover:bg-clinic-green-600 text-white rounded-xl text-sm font-semibold transition-colors"
          >
            <MapPin className="w-4 h-4" />
            {ui[currentLang].maps_btn}
          </a>
        </div>
      );
    }

    return <p className={`text-sm leading-relaxed ${isRtl ? 'text-right' : 'text-left'}`}>{msg.text}</p>;
  };

  const currentUi = lang ? ui[lang] : ui['fr'];
  const isRtlChat = lang === 'ar';

  return (
    <div className="fixed bottom-5 right-4 md:bottom-8 md:right-8 z-[100]">
      {/* ── Bouton flottant ── */}
      <button
        onClick={isOpen ? handleClose : handleOpen}
        className="relative group active:scale-95 transition-all duration-200"
        aria-label="Assistant médical"
      >
        <motion.div
          animate={!isOpen ? { scale: [1, 1.25, 1], opacity: [0.25, 0, 0.25] } : {}}
          transition={{ duration: 2.2, repeat: Infinity }}
          className="absolute inset-0 bg-clinic-green-500 rounded-full"
        />
        <div
          className={`relative w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300
            ${isOpen ? 'bg-gray-800 rotate-90' : 'bg-clinic-green-500'}`}
        >
          {isOpen
            ? <X className="w-8 h-8 text-white" />
            : <Bot className="w-8 h-8 text-white" />
          }
        </div>
        {!isOpen && (
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-xl shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block border border-clinic-green-100">
            <p className="text-sm font-bold text-clinic-green-700">Besoin d'aide ? / هل تحتاجين مساعدة؟</p>
          </div>
        )}
      </button>

      {/* ── Fenêtre de chat ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="absolute bottom-20 right-0 w-[calc(100vw-2rem)] max-w-[420px] bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden border border-gray-100"
            style={{ maxHeight: 'min(88vh, 680px)' }}
            dir={isRtlChat ? 'rtl' : 'ltr'}
          >
            {/* ── Header ── */}
            <div className="p-5 bg-gradient-to-r from-clinic-green-600 to-clinic-green-500 text-white flex-shrink-0">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md ring-2 ring-white/30">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base">{currentUi.title}</h4>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
                      <span className="text-xs opacity-80 font-medium">{currentUi.online}</span>
                    </div>
                  </div>
                </div>
                {/* Bouton changer de langue */}
                {lang && (
                  <button
                    onClick={resetLang}
                    title="Changer de langue / تغيير اللغة"
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-xl text-xs font-semibold transition-colors backdrop-blur-sm"
                  >
                    <Languages className="w-3.5 h-3.5" />
                    {lang === 'fr' ? 'AR' : 'FR'}
                  </button>
                )}
              </div>
              {/* Sous-titre docteur */}
              <div className="mt-2.5 px-3 py-1.5 bg-white/10 rounded-xl inline-flex items-center gap-2 backdrop-blur-sm">
                <span className="text-[11px] opacity-90 font-medium">Dr Seffar Hicham · Gynécologue-Obstétricien · Inezgane</span>
              </div>
            </div>

            {/* ── Sélecteur de langue (si pas encore choisi) ── */}
            {!lang && (
              <div className="flex flex-col items-center justify-center gap-5 py-10 px-6 bg-gradient-to-b from-clinic-green-50 to-white flex-1">
                <div className="w-16 h-16 bg-clinic-green-100 rounded-2xl flex items-center justify-center">
                  <Languages className="w-8 h-8 text-clinic-green-600" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-700 mb-1">Choisissez votre langue</p>
                  <p className="text-sm font-semibold text-gray-700">اختر لغتك</p>
                </div>
                <div className="flex gap-4 w-full max-w-xs">
                  <button
                    onClick={() => handleLangSelect('fr')}
                    className="flex-1 flex flex-col items-center gap-2 px-4 py-4 bg-white hover:bg-clinic-green-50 border-2 border-gray-200 hover:border-clinic-green-400 rounded-2xl font-bold text-gray-700 hover:text-clinic-green-700 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    <span className="text-2xl">🇫🇷</span>
                    <span className="text-sm">Français</span>
                  </button>
                  <button
                    onClick={() => handleLangSelect('ar')}
                    className="flex-1 flex flex-col items-center gap-2 px-4 py-4 bg-white hover:bg-clinic-green-50 border-2 border-gray-200 hover:border-clinic-green-400 rounded-2xl font-bold text-gray-700 hover:text-clinic-green-700 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    <span className="text-2xl">🇲🇦</span>
                    <span className="text-sm">العربية</span>
                  </button>
                </div>
              </div>
            )}

            {/* ── Zone messages ── */}
            {lang && (
              <>
                <div
                  className="overflow-y-auto p-4 space-y-3 bg-[#f5f5f0]"
                  style={{ maxHeight: 'clamp(120px, 28vh, 260px)', minHeight: '80px' }}
                >
                  {messages.map((msg, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: msg.type === 'bot' ? -10 : 10, y: 4 }}
                      animate={{ opacity: 1, x: 0, y: 0 }}
                      transition={{ duration: 0.25 }}
                      className={`flex ${msg.type === 'bot' ? (isRtlChat ? 'justify-end' : 'justify-start') : (isRtlChat ? 'justify-start' : 'justify-end')}`}
                    >
                      <div
                        className={`max-w-[85%] px-4 py-3 rounded-2xl shadow-sm ${msg.type === 'bot'
                          ? `bg-white text-gray-800 ${isRtlChat ? 'rounded-tr-none' : 'rounded-tl-none'}`
                          : `bg-clinic-green-500 text-white ${isRtlChat ? 'rounded-tl-none' : 'rounded-tr-none'}`
                          }`}
                      >
                        {renderMessage(msg, lang)}
                        <div className={`text-[10px] mt-1.5 opacity-40 ${isRtlChat ? 'text-right' : 'text-left'}`} dir="ltr">
                          {msg.time}
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Indicateur "en train d'écrire" */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className={`flex ${isRtlChat ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`bg-white px-4 py-3 rounded-2xl ${isRtlChat ? 'rounded-tr-none' : 'rounded-tl-none'} shadow-sm`}>
                        <div className="flex gap-1 items-center">
                          {[0, 0.2, 0.4].map((delay, i) => (
                            <motion.span
                              key={i}
                              animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
                              transition={{ repeat: Infinity, duration: 0.9, delay }}
                              className="w-1.5 h-1.5 bg-clinic-green-400 rounded-full block"
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* ── Grille FAQ ── */}
                <div
                  className="flex-shrink-0 bg-white border-t border-gray-100 p-3 md:p-4 overflow-y-auto"
                  style={{ height: '175px', overflowY: 'auto' }}
                >
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-2 md:mb-3 px-1">
                    {currentUi.faq_label}
                  </p>
                  <div className="grid grid-cols-2 gap-1.5 md:gap-2">
                    {faqData[lang].map((faq, idx) => {
                      const Icon = faq.icon;
                      return (
                        <button
                          key={idx}
                          onClick={() => handleQuestionClick(faq)}
                          disabled={isTyping}
                          className="flex items-center gap-2 px-2.5 py-2 md:px-3 md:py-2.5 bg-gray-50 hover:bg-clinic-green-50 active:bg-clinic-green-100 border border-gray-100 hover:border-clinic-green-200 rounded-xl text-start transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0 text-gray-400 group-hover:text-clinic-green-600 transition-colors" />
                          <span className="text-[10px] md:text-[11px] font-semibold text-gray-700 group-hover:text-clinic-green-700 leading-tight transition-colors">
                            {faq.question}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* ── Footer ── */}
                <div className="flex-shrink-0 py-2.5 px-4 bg-white border-t border-gray-100">
                  <p className="text-[10px] text-center text-gray-400" dir="ltr">
                    {currentUi.footer}
                  </p>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MedicalBot;
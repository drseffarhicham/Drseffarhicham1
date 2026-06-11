import { Award, Bed, Users, Stethoscope, GraduationCap, Building2, Sparkles, CheckCircle, Globe, Play } from 'lucide-react';
import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const galleryData = [
    {
      id: 1,
      image: "img1.jpg",
      alt: t('about.gallery_items.accueil.title'),
      title: t('about.gallery_items.accueil.title'),
      icon: Building2,
      desc: t('about.gallery_items.accueil.desc'),
      gradient: "from-clinic-green-900/90",
      textColor: "text-clinic-green-50"
    },
    {
      id: 2,
      image: "img2.jpg",
      alt: t('about.gallery_items.confort.title'),
      title: t('about.gallery_items.confort.title'),
      icon: Users,
      desc: t('about.gallery_items.confort.desc'),
      gradient: "from-clinic-pink-900/90",
      textColor: "text-clinic-pink-50"
    },
    {
      id: 3,
      image: "IMG5.jpg",
      alt: t('about.gallery_items.soin.title'),
      title: t('about.gallery_items.soin.title'),
      icon: Bed,
      desc: t('about.gallery_items.soin.desc'),
      gradient: "from-gray-900/90",
      textColor: "text-gray-200"
    },
    {
      id: 4,
      image: "IMG3.jpg",
      alt: t('about.gallery_items.techno.title'),
      title: t('about.gallery_items.techno.title'),
      icon: Sparkles,
      desc: t('about.gallery_items.techno.desc'),
      gradient: "from-clinic-green-900/90",
      textColor: "text-clinic-green-50"
    },
    {
      id: 5,
      image: "IMG4.jpg",
      alt: t('about.gallery_items.expertise.title'),
      title: t('about.gallery_items.expertise.title'),
      icon: Award,
      desc: t('about.gallery_items.expertise.desc'),
      gradient: "from-gray-900/90",
      textColor: "text-gray-200"
    }
  ];

  const handleCardClick = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <section id="apropos" className="py-20 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête avec animation */}
        <div className="text-center mb-20 relative">
          <div className="inline-block">
            <Sparkles className="h-8 w-8 text-clinic-pink-500 absolute -top-6 -start-8 animate-pulse" />
            <Sparkles className="h-6 w-6 text-clinic-green-500 absolute -top-4 -end-6 animate-pulse" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-clinic-green-700 via-clinic-pink-600 to-clinic-green-700 bg-clip-text text-transparent mb-6 px-2">
              {t('about.title')}
            </h2>
          </div>
          <div className="w-32 h-1.5 bg-gradient-to-r from-clinic-green-500 via-clinic-pink-500 to-clinic-green-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Parcours et Formation - Design amélioré */}
        <div className="grid lg:grid-cols-[45fr_55fr] gap-12 items-start mb-12">
          {/* Colonne gauche - Parcours */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-clinic-green-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-clinic-green-500 to-clinic-green-700 p-4 rounded-2xl shadow-lg">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">{t('about.pro_title')}</h3>
              </div>

              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {t('about.pro_desc')}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-xl border-s-8 border-clinic-pink-500 hover:shadow-2xl transition-all duration-300">
              <div className="flex flex-col xs:flex-row items-center xs:items-start gap-4 sm:gap-5 text-center xs:text-start">
                <div className="bg-gradient-to-br from-clinic-pink-100 to-clinic-pink-200 p-3 sm:p-4 rounded-2xl shrink-0 shadow-inner">
                  <Globe className="h-8 w-8 sm:h-10 sm:w-10 text-clinic-pink-500" />
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{t('about.intl_title')}</h4>
                  <ul className="text-gray-700 leading-relaxed text-sm sm:text-base list-disc list-inside space-y-1 text-start">
                    {(t('about.intl_list', { returnObjects: true }) as string[]).map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne droite - Valeurs */}
          <div className="space-y-6">
            {/* Formation et Expertise */}
            <div className="grid gap-4 sm:gap-6">
              <div className="bg-gradient-to-br from-clinic-green-200 to-white rounded-3xl p-5 sm:p-6 border-2 border-clinic-green-200 hover:border-clinic-green-400 transition-all duration-300">
                <div className="flex flex-col xs:flex-row items-center xs:items-start gap-3 sm:gap-4 text-center xs:text-start">
                  <div className="bg-white p-2 sm:p-3 rounded-xl shadow-md">
                    <GraduationCap className="h-6 w-6 sm:h-7 sm:w-7 text-clinic-green-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg sm:text-xl text-gray-900 mb-3">{t('about.formation_title')}</h4>
                    <ul className="space-y-3">
                      {(t('about.formation_list', { returnObjects: true }) as string[]).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm sm:text-base text-start">
                          <CheckCircle className="h-5 w-5 text-clinic-green-500 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-clinic-pink-200 to-white rounded-3xl p-5 sm:p-6 border-2 border-clinic-pink-200 hover:border-clinic-pink-400 transition-all duration-300">
              <div className="flex flex-col xs:flex-row items-center xs:items-start gap-3 sm:gap-4 text-center xs:text-start">
                <div className="bg-white p-2 sm:p-3 rounded-xl shadow-md">
                  <Stethoscope className="h-6 w-6 sm:h-7 sm:w-7 text-clinic-pink-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg sm:text-xl text-gray-900 mb-2">{t('about.expertises_title')}</h4>
                  <ul className="text-gray-700 text-sm sm:text-base space-y-2 mt-3 inline-block text-start">
                    {(t('about.expertises_list', { returnObjects: true }) as string[]).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-clinic-pink-500 rounded-full mt-2 shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Vidéo - Nouveau */}
        <div id="visite-video" className="mb-24">
          <div className="text-center mb-12">
            <span className="bg-clinic-green-100 text-clinic-green-700 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block tracking-widest uppercase">
              {t('about.video_badge')}
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t('about.video_title_start')} <span className="text-clinic-green-700">{t('about.video_title_highlight')}</span> {t('about.video_title_end')}
            </h3>
            <div className="w-24 h-1.5 bg-gradient-to-r from-clinic-green-500 to-clinic-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto px-4">
            <div
              className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-gray-900 group cursor-pointer"
              onClick={toggleVideo}
            >
              <video
                ref={videoRef}
                className={`w-full h-full object-cover transition-opacity duration-700 ${isPlaying ? 'opacity-100' : 'opacity-60 group-hover:opacity-80'}`}
                poster="img2.jpg"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                controls={isPlaying}
              >
                <source src="cabinet.mp4" type="video/mp4" />
                {t('about.video_error')}
              </video>

              {/* Overlay Play Button - Hidden when playing */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <div className="w-20 h-20 bg-clinic-green-500/90 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-sm border-2 border-white/30">
                    <Play className="h-8 w-8 text-white fill-white ms-1" />
                  </div>
                </div>
              )}

              {/* Glass Info Card - Hidden when playing */}
              {!isPlaying && (
                <div className="absolute bottom-6 start-6 end-6 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-4 text-white hidden md:block">
                  <p className="font-medium text-lg">{t('about.video_card_title')}</p>
                  <p className="text-sm opacity-80">{t('about.video_card_desc')}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Section Cabinet - Design "Expanding Gallery" */}
        <div id="cabinet-modern" className="mb-0">
          <div className="text-center mb-16 relative px-4">
            <span className="bg-clinic-pink-100 text-clinic-pink-700 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block tracking-widest uppercase">
              {t('about.gallery_badge')}
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 px-2">
              {t('about.gallery_title_start')} <span className="text-clinic-green-700 italic">{t('about.gallery_title_highlight')}</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('about.gallery_desc')}
              {/* Texte différent selon mobile/desktop */}
              <span className="md:hidden block mt-2 text-sm font-semibold text-clinic-green-700">
                {t('about.gallery_mobile_hint')}
              </span>
              <span className="hidden md:block">
                {t('about.gallery_desktop_hint')}
              </span>
            </p>
          </div>

          {/* Galerie Accordéon - Horizontal sur Desktop, Vertical sur Mobile */}
          <div className="flex flex-col md:flex-row h-[600px] md:h-[380px] gap-3 px-2 md:px-0">

            {galleryData.map((item, index) => (
              <div
                key={item.id}
                onClick={() => handleCardClick(index)}
                className={`group relative transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer
                  ${activeCard === index ? 'flex-[3] grow-[3]' : 'flex-1'}
                  md:flex-1 md:hover:flex-[2.5] md:hover:grow-[2.5]
                `}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-black/10 transition-opacity
                  ${activeCard === index ? 'opacity-30' : 'opacity-0 md:group-hover:opacity-10'}
                `}></div>

                <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end">
                  <div className={`transition-all duration-500 transform
                    ${activeCard === index ? 'translate-y-0' : 'translate-y-0'}
                  `}>
                    <div className={`inline-flex items-center gap-3 p-2 pe-4 bg-black/40 border border-white/30 rounded-2xl shadow-xl transition-all duration-500
                      ${activeCard === index ? 'bg-clinic-green-600/90 border-clinic-green-400' : ''}
                    `}>
                      <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center shadow-inner">
                        <item.icon className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="text-white text-base md:text-lg font-bold tracking-tight">{item.title}</h4>
                    </div>

                    <p className={`${item.textColor} text-sm mt-4 bg-black/60 p-4 rounded-2xl border border-white/10 transition-all duration-500 leading-relaxed
                      ${activeCard === index ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95 h-0 overflow-hidden mt-0 p-0 border-0'}
                      md:group-hover:opacity-100 md:group-hover:translate-y-0 md:group-hover:scale-100 md:group-hover:h-auto md:group-hover:mt-4 md:group-hover:p-4 md:group-hover:border
                    `}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}

          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-500 italic flex items-center justify-center gap-2">
              {/* <CheckCircle className="h-4 w-4 text-green-500" /> */}
              {t('about.standards')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

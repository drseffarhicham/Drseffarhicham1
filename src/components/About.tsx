import { Award, Bed, Users, Stethoscope, GraduationCap, Building2, Sparkles, CheckCircle, Globe, Play } from 'lucide-react';
import { useState, useRef } from 'react';

export default function About() {
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
      alt: "L'Entrée",
      title: "L'Accueil",
      icon: Building2,
      desc: "Un espace lumineux et apaisant dès votre arrivée, conçu pour réduire votre stress et vous mettre en confiance.",
      gradient: "from-clinic-green-900/90",
      textColor: "text-clinic-green-50"
    },
    {
      id: 2,
      image: "img2.jpg",
      alt: "Salle d'attente",
      title: "Confort",
      icon: Users,
      desc: "Une salle d'attente pensée comme un salon, avec des assises confortables et une ambiance zen.",
      gradient: "from-clinic-pink-900/90",
      textColor: "text-clinic-pink-50"
    },
    {
      id: 3,
      image: "IMG5.jpg",
      alt: "Salle de soin",
      title: "Salle de soin",
      icon: Bed,
      desc: "Un espace moderne et équipé pour assurer vos soins dans un cadre confortable et sécurisé.",
      gradient: "from-gray-900/90",
      textColor: "text-gray-200"
    },

    {
      id: 4,
      image: "IMG3.jpg",
      alt: "Échographie",
      title: "Technologie",
      icon: Sparkles,
      desc: "Équipé d’échographie 3D et de monitoring fœtal et maternel pour un suivi prénatal précis et sécurisé.",
      gradient: "from-clinic-green-900/90",
      textColor: "text-clinic-green-50"
    },
    {
      id: 5,
      image: "IMG4.jpg",
      alt: "Bureau Médical",
      title: "Expertise",
      icon: Award,
      desc: "Chaque détail de notre structure a été pensé pour vous offrir les meilleurs soins dans les meilleures conditions.",
      gradient: "from-gray-900/90",
      textColor: "text-gray-200"
    }
  ];

  const handleCardClick = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <section id="apropos" className="pt-20 pb-0 bg-gradient-to-b from-white via-clinic-green-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête avec animation */}
        <div className="text-center mb-20 relative">
          <div className="inline-block">
            <Sparkles className="h-8 w-8 text-clinic-pink-500 absolute -top-6 -left-8 animate-pulse" />
            <Sparkles className="h-6 w-6 text-clinic-green-500 absolute -top-4 -right-6 animate-pulse" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-clinic-green-700 via-clinic-pink-600 to-clinic-green-700 bg-clip-text text-transparent mb-6 px-2">
              À propos du Dr Seffar Hicham
            </h2>
          </div>
          <div className="w-32 h-1.5 bg-gradient-to-r from-clinic-green-500 via-clinic-pink-500 to-clinic-green-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Votre gynécologue-obstétricien de confiance à Inezgane
          </p>
        </div>

        {/* Parcours et Formation - Design amélioré */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          {/* Colonne gauche - Parcours */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-clinic-green-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-clinic-green-500 to-clinic-green-700 p-4 rounded-2xl shadow-lg">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">Parcours professionnel</h3>
              </div>

              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Le Dr Hicham Seffar place au cœur de sa pratique la sécurité, la précision diagnostique, les
                  techniques modernes moins invasives et l’accompagnement humain personnalisé. Il s’engage à
                  offrir aux patientes d’Inezgane et de la région des soins de haute qualité, inspirés des standards
                  internationaux.                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-xl border-l-8 border-clinic-pink-500 hover:shadow-2xl transition-all duration-300">
              <div className="flex flex-col xs:flex-row items-center xs:items-start gap-4 sm:gap-5 text-center xs:text-left">
                <div className="bg-gradient-to-br from-clinic-pink-100 to-clinic-pink-200 p-3 sm:p-4 rounded-2xl shrink-0 shadow-inner">
                  <Globe className="h-8 w-8 sm:h-10 sm:w-10 text-clinic-pink-500" />
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Expérience Internationale  Hôpital Universitaire ERASME (Bruxelles) </h4>
                  <ul className="text-gray-700 leading-relaxed text-sm sm:text-base list-disc list-inside space-y-1 text-left">
                    <li>Gardes obstétricales</li>
                    <li>Césariennes et accouchements instrumentaux</li>
                    <li>Prise en charge de grossesses à risque</li>
                    <li>Gestion des urgences gynécologiques</li>
                    <li>Réalisation d’échographies obstétricales</li>
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
                <div className="flex flex-col xs:flex-row items-center xs:items-start gap-3 sm:gap-4 text-center xs:text-left">
                  <div className="bg-white p-2 sm:p-3 rounded-xl shadow-md">
                    <GraduationCap className="h-6 w-6 sm:h-7 sm:w-7 text-clinic-green-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg sm:text-xl text-gray-900 mb-3">Formation & Diplômes</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-gray-700 text-sm sm:text-base text-left">
                        <CheckCircle className="h-5 w-5 text-clinic-green-500 mt-0.5 flex-shrink-0" />
                        <span>Diplôme de Spécialité en Gynécologie-Obstétrique – Université Mohammed V, Rabat</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-700 text-sm sm:text-base text-left">
                        <CheckCircle className="h-5 w-5 text-clinic-green-500 mt-0.5 flex-shrink-0" />
                        <span>Diplôme Universitaire en Diagnostic et Chirurgie du Cancer du Sein (Mention Bien) – Université Hassan II, Casablanca</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-700 text-sm sm:text-base text-left">
                        <CheckCircle className="h-5 w-5 text-clinic-green-500 mt-0.5 flex-shrink-0" />
                        <span>Mastère Spécialisé en Chirurgie Mini-invasive en Gynécologie – TECH Global University, Andorre</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-700 text-sm sm:text-base text-left">
                        <CheckCircle className="h-5 w-5 text-clinic-green-500 mt-0.5 flex-shrink-0" />
                        <span>Certificat Universitaire de Formation Médicale Spécialisée en Gynécologie-Obstétrique – Université Libre de Bruxelles, Belgique</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-700 text-sm sm:text-base text-left">
                        <CheckCircle className="h-5 w-5 text-clinic-green-500 mt-0.5 flex-shrink-0" />
                        <span>Accréditation en Échographie Obstétricale et Gynécologique – Université Catholique de Liège, Belgique</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-clinic-pink-200 to-white rounded-3xl p-5 sm:p-6 border-2 border-clinic-pink-200 hover:border-clinic-pink-400 transition-all duration-300">
              <div className="flex flex-col xs:flex-row items-center xs:items-start gap-3 sm:gap-4 text-center xs:text-left">
                <div className="bg-white p-2 sm:p-3 rounded-xl shadow-md">
                  <Stethoscope className="h-6 w-6 sm:h-7 sm:w-7 text-clinic-pink-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg sm:text-xl text-gray-900 mb-2">Expertises</h4>
                  <ul className="text-gray-700 text-sm sm:text-base space-y-2 mt-3 inline-block text-left">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-clinic-pink-500 rounded-full mt-2 shrink-0"></div>
                      <span>Suivi de grossesse</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-clinic-pink-500 rounded-full mt-2 shrink-0"></div>
                      <span>Échographie obstétricale et gynécologique</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-clinic-pink-500 rounded-full mt-2 shrink-0"></div>
                      <span>Chirurgie gynécologique</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-clinic-pink-500 rounded-full mt-2 shrink-0"></div>
                      <span>Hystéroscopie</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-clinic-pink-500 rounded-full mt-2 shrink-0"></div>
                      <span>Chirurgie mammaire</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-clinic-pink-500 rounded-full mt-2 shrink-0"></div>
                      <span>Chirurgie vaginale</span>
                    </li>
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
              Expérience Immersive
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Visite <span className="text-clinic-green-700">Virtuelle</span> du Cabinet
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
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>

              {/* Overlay Play Button - Hidden when playing */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <div className="w-20 h-20 bg-clinic-green-500/90 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-sm border-2 border-white/30">
                    <Play className="h-8 w-8 text-white fill-white ml-1" />
                  </div>
                </div>
              )}

              {/* Glass Info Card - Hidden when playing */}
              {!isPlaying && (
                <div className="absolute bottom-6 left-6 right-6 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-4 text-white hidden md:block">
                  <p className="font-medium text-lg">Découvrez nos installations modernes</p>
                  <p className="text-sm opacity-80">Un environnement conçu pour votre confort et votre sécurité.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Section Cabinet - Design "Expanding Gallery" */}
        <div id="cabinet-modern" className="mb-0">
          <div className="text-center mb-16 relative px-4">
            <span className="bg-clinic-pink-100 text-clinic-pink-700 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block tracking-widest uppercase">
              Visite Guidée
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 px-2">
              L'Excellence au service de votre <span className="text-clinic-green-700 italic">Santé</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nous avons conçu chaque espace pour qu'il soit à la fois fonctionnel, rassurant et chaleureux.
              {/* Texte différent selon mobile/desktop */}
              <span className="md:hidden block mt-2 text-sm font-semibold text-clinic-green-700">
                (Cliquez sur les photos pour voir les détails)
              </span>
              <span className="hidden md:block">
                Survolez les images pour découvrir notre univers.
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
                <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} via-transparent to-transparent transition-opacity
                  ${activeCard === index ? 'opacity-80' : 'opacity-60'}
                  md:opacity-60 md:group-hover:opacity-80
                `}></div>

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col justify-end">
                  <div className={`transform transition-transform duration-500
                    ${activeCard === index ? 'translate-y-0' : 'translate-y-8'}
                    md:translate-y-8 md:group-hover:translate-y-0
                  `}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="text-white text-xl md:text-2xl font-bold">{item.title}</h4>
                    </div>
                    <p className={`${item.textColor} text-sm md:text-base transition-opacity duration-500 delay-100 leading-relaxed max-w-md
                      ${activeCard === index ? 'opacity-100' : 'opacity-0'}
                      md:opacity-0 md:group-hover:opacity-100
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
              Cabinet conforme aux normes sanitaires internationales
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Stethoscope, Baby, Heart, Users, Shield, Award, Activity, Sparkles, Phone,Clock, CheckCircle, Microscope, Calendar, Star } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Stethoscope,
      title: "Consultations gynécologiques",
      description: "Examens de routine, dépistage et prévention des pathologies gynécologiques avec une approche personnalisée.",
      details: [
        "Examen clinique complet",
        "Frottis de dépistage",
        "Prévention cancer sein/col",
        "Suivi annuel personnalisé"
      ],
    },
    {
      icon: Baby,
      title: "Suivi de grossesse",
      description: "Accompagnement complet pendant toute la grossesse avec des consultations régulières et une préparation à l'accouchement.",
      details: [
        "7 consultations obligatoires",
        "Surveillance échographique",
        "Préparation à la naissance",
        "Suivi post-natal inclus"
      ],
    },
    {
      icon: Heart,
      title: "Échographies",
      description: "Échographies obstétricales (2D, 3D) et gynécologiques avec un équipement moderne de haute précision.",
      details: [
        "Échographie 2D/3D",
        "Doppler couleur",
        "Échographie de datation",
        "Morphologique détaillée"
      ],
    },
    {
      icon: Users,
      title: "Bilan de fertilité",
      description: "Évaluation complète de la fertilité et accompagnement personnalisé pour les couples désireux d'avoir un enfant.",
      details: [
        "Bilan hormonal complet",
        "Suivi de l'ovulation",
        "Spermogramme orienté",
        "Conseils personnalisés"
      ],
    },
    {
      icon: Shield,
      title: "Dépistage & traitement",
      description: "Dépistage précoce et traitement des pathologies gynécologiques (infections, fibromes, kystes, etc.).",
      details: [
        "Dépistage IST",
        "Traitement infections",
        "Prise en charge fibromes",
        "Suivi kystes ovariens"
      ],
    },
    {
      icon: Activity,
      title: "Contraception",
      description: "Conseils personnalisés et suivi pour choisir la méthode contraceptive la plus adaptée à votre situation.",
      details: [
        "Pilule contraceptive",
        "DIU hormonal/cuivre",
        "Implant contraceptif",
        "Contraception d'urgence"
      ],
    },
    {
      icon: Sparkles,
      title: "Suivi ménopause",
      description: "Accompagnement et traitements pour gérer les symptômes de la ménopause et maintenir votre qualité de vie.",
      details: [
        "Bilan ménopause",
        "Traitement symptômes",
        "Prévention ostéoporose",
        "Conseils bien-être"
      ],
    },
    {
      icon: Award,
      title: "Santé hormonale",
      description: "Diagnostic et traitement des troubles hormonaux avec une approche globale de votre santé.",
      details: [
        "Syndrome ovaires polykystiques",
        "Troubles thyroïdiens",
        "Dérèglements cycles",
        "Traitements hormonaux"
      ],
    }
  ];

  const equipment = [
    {
      name: "Échographe haute résolution",
      features: ["Technologie 3D", "Évaluation du flux sanguin", "Sonde endovaginale"]
    },
    {
      name: "Salle d'examen",
      features: ["Matériel stérile", "Confort optimal", "Intimité respectée"]
    },

  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête enrichie */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-white border border-clinic-pink-200 text-clinic-pink-600 rounded-full text-sm font-medium mb-6 shadow-sm">
            <Star className="h-4 w-4 mr-2 fill-clinic-pink-400 text-clinic-pink-400" />
            Excellence Médicale
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos Services <span className="text-clinic-green-700">Spécialisés</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-clinic-green-500 to-clinic-pink-500 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Une prise en charge complète et personnalisée pour chaque étape de votre vie de femme, 
            de l'adolescence à la ménopause, avec des technologies de pointe et une écoute attentive.
          </p>
        </div>

        {/* Grille des services enrichie */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 group ${
                  index % 2 === 0 ? 'border-clinic-green-500' : 'border-clinic-pink-500'
                }`}
              >
                <div className={`w-16 h-16 bg-white border rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform ${
                  index % 2 === 0 ? 'border-clinic-green-100' : 'border-clinic-pink-100'
                }`}>
                  <Icon className={`h-8 w-8 ${
                    index % 2 === 0 ? 'text-clinic-green-700' : 'text-clinic-pink-500'
                  }`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-5 leading-relaxed">
                  {service.description}
                </p>

                {/* Détails spécifiques */}
                <div className="space-y-3 mb-5">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className={`h-4 w-4 mt-0.5 mr-3 flex-shrink-0 ${
                        index % 2 === 0 ? 'text-clinic-green-500' : 'text-clinic-pink-400'
                      }`} />
                      <span className="text-sm text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Informations pratiques */}
          
              </div>
            );
          })}
        </div>

        {/* Section équipement enrichie */}
        <div className="mt-20 bg-white rounded-3xl p-10 shadow-xl border border-clinic-green-100">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Un Cabinet <span className="text-clinic-green-700">Moderne</span> et <span className="text-clinic-pink-500">Équipé</span>
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Pour votre confort et la précision du diagnostic, nous investissons dans les dernières technologies médicales
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {equipment.map((item, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto mb-4 border transition-colors ${
                  index % 2 === 0 ? 'border-clinic-green-100 hover:border-clinic-green-300' : 'border-clinic-pink-100 hover:border-clinic-pink-300'
                }`}>
                  <Microscope className={`h-10 w-10 ${
                    index % 2 === 0 ? 'text-clinic-green-700' : 'text-clinic-pink-500'
                  }`} />
                </div>
                <h4 className="font-bold text-gray-900 mb-3 text-lg">{item.name}</h4>
                <div className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center text-sm text-gray-600">
                      <div className={`w-2 h-2 rounded-full mr-2 ${
                        index % 2 === 0 ? 'bg-clinic-green-500' : 'bg-clinic-pink-400'
                      }`}></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-clinic-green-100">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Prise de rendez-vous simplifiée</h4>
                <p className="text-gray-600 mb-8 mt-4 leading-relaxed text-base md:text-lg">
                  Réservez votre consultation en ligne facilement, choisissez le créneau qui vous convient 
                  et recevez un rappel par SMS. Urgences gynécologiques prises en charge rapidement.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <div className="flex items-center px-4 py-2 bg-white border border-clinic-green-300 text-clinic-green-700 rounded-full text-sm font-semibold">
                    <Calendar className="h-4 w-4 mr-2" />
                    RDV sous 24h
                  </div>
                  <div className="flex items-center px-4 py-2 bg-white border border-clinic-pink-300 text-clinic-pink-700 rounded-full text-sm font-semibold">
                    <Clock className="h-4 w-4 mr-2" />
                    Urgences prioritaires
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="hidden md:inline-flex items-center justify-center w-24 h-24 bg-white border-2 border-clinic-green-500 rounded-3xl mb-6 shadow-lg">
                  <Calendar className="h-12 w-12 text-clinic-green-500" />
                </div>
                <a
                  href="tel:0528335566"
                  className="w-full sm:w-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 bg-clinic-green-500 text-white px-6 md:px-10 py-5 md:py-6 rounded-2xl font-bold hover:bg-clinic-green-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-center"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="h-6 w-6 animate-pulse" />
                    <span className="text-lg">Prendre RDV</span>
                  </div>
                  <span className="hidden sm:inline opacity-50">|</span>
                  <span className="text-xl md:text-2xl tracking-tight">0528 33 55 66</span>
                </a>
                <p className="mt-4 text-gray-500 text-sm italic">Appel direct pour une prise en charge immédiate</p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
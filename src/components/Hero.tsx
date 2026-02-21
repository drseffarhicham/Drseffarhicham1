import { Phone, MapPin, Calendar, Star, Award, Clock, Shield } from 'lucide-react';

interface HeroProps {
  scrollToSection: (id: string) => void;
}


export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section id="accueil" className="pt-20 min-h-[calc(100vh-4rem)] md:min-h-screen flex items-center bg-gradient-to-br from-clinic-green-200 via-white to-clinic-pink-200 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-20">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-clinic-green-100 text-clinic-green-700 rounded-full text-sm font-medium">
                Gynécologue Obstétricien
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-clinic-pink-100 text-clinic-pink-700 rounded-full text-sm font-medium">
                🌸 Spécialiste à Inezgane
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
                <Star className="h-4 w-4 mr-1 fill-current" />
                4.9/5
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight break-words text-center md:text-left">
              Votre Santé <span className="text-clinic-green-700">Féminine</span> entre de Bonnes Mains
            </h1>

            <p className="text-base md:text-xl text-gray-600 mb-6 leading-relaxed text-justify">
              Le <strong>Dr Seffar Hicham</strong>, est spécialiste en gynécologie-obstétrique. Son parcours associe formation
              hospitalo-universitaire au Maroc et une année complète de formation clinique à l’Hôpital
              Universitaire ERASME - Université Libre de Bruxelles (Belgique), avec un engagement constant
              dans la formation continue internationale.
            </p>

            <div className="bg-white rounded-2xl p-5 md:p-6 mb-8 shadow-lg border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4 text-base md:text-lg">Domaines d'expertise :</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-sm">
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-clinic-green-500 rounded-full mr-2 md:mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Chirurgie gynécologique mini-invasive</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-clinic-pink-500 rounded-full mr-2 md:mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Hystéroscopie diagnostique et opératoire</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-clinic-green-500 rounded-full mr-2 md:mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Chirurgie mammaire et oncoplastie mammaire</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-clinic-pink-500 rounded-full mr-2 md:mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Suivi de grossesse et grossesses à risque</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-clinic-green-500 rounded-full mr-2 md:mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Échographie obstétricale avancée</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-clinic-pink-500 rounded-full mr-2 md:mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Morphologie fœtale</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-clinic-green-500 rounded-full mr-2 md:mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Bilan initial et accompagnement en fertilité</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-clinic-pink-500 rounded-full mr-2 md:mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Orientation vers centres spécialisés en assistance médicale à la procréation si nécessaire</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={() => scrollToSection('contact')}
                className="flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-clinic-green-500 text-white rounded-lg font-semibold hover:bg-clinic-green-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm md:text-base"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Prendre rendez-vous
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="px-6 md:px-8 py-3 md:py-4 bg-white text-clinic-green-700 border-2 border-clinic-green-500 rounded-lg font-semibold hover:bg-clinic-green-50 transition text-sm md:text-base"
              >
                Découvrir nos services
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 text-gray-600 pt-6 border-t border-gray-200">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-clinic-green-500 mr-2" />
                <div>
                  <span className="font-medium block">0528 33 55 66</span>
                  <span className="text-sm text-gray-500">
                    Lun - Ven : 08h30 - 16h00 | Sam : 08h30 - 12h30
                  </span>
                </div>
              </div>

              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-clinic-pink-500 mr-2 flex-shrink-0" />
                <div>
                  <span className="font-medium block">Inezgane, Maroc</span>
                  <span className="text-base sm:text-sm text-gray-500">Accès facile, parking disponible</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative order-1 md:order-2 w-full max-w-xl mx-auto">
            {/* Geometric Background Shapes */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-clinic-green-50 rounded-full blur-3xl opacity-60 animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-clinic-pink-50 rounded-full blur-3xl opacity-60 animate-pulse delay-700"></div>
            </div>

            <div className="grid grid-cols-12 gap-3 sm:gap-4">
              {/* Main Image Card - Bento Style */}
              <div className="col-span-12 sm:col-span-9 relative">
                <div className="aspect-[4/5] rounded-[2rem] sm:rounded-[2.5rem] bg-gray-100 overflow-hidden shadow-2xl border-4 border-white relative group">
                  <img
                    src="profile.jpg"
                    alt="Dr Seffar Hicham - Gynécologue Obstétricien à Inezgane"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Glass Card Overlay for Name */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/60 backdrop-blur-xl border border-white/30 rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-lg text-center">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">Dr Seffar Hicham</h3>
                    <p className="text-clinic-green-700 text-[10px] sm:text-xs font-bold uppercase tracking-wider mt-0.5 sm:mt-1">Gynécologue Obstétricien à Inezgane</p>
                  </div>
                </div>
              </div>

              {/* Stats Bento Column */}
              <div className="col-span-12 sm:col-span-3 grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-4">
                {/* Expérience */}
                <div className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-5 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 text-center flex flex-col justify-center">
                  <div className="mx-auto w-10 h-10 sm:w-12 sm:h-12 mb-2 sm:mb-3 rounded-full bg-clinic-green-50 flex items-center justify-center">
                    <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-clinic-green-600" />
                  </div>
                  <p className="text-xl sm:text-2xl font-black text-gray-900">15+</p>
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-500">Expérience</p>
                </div>

                {/* Expert */}
                <div className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-5 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 text-center flex flex-col justify-center">
                  <div className="mx-auto w-10 h-10 sm:w-12 sm:h-12 mb-2 sm:mb-3 rounded-full bg-clinic-pink-50 flex items-center justify-center">
                    <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-clinic-pink-600" />
                  </div>
                  <p className="text-base sm:text-lg font-extrabold text-gray-900">Expert</p>
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-clinic-pink-500">Certifié</p>
                </div>

                {/* Confidentialité - Spans full width on mobile grid if needed, otherwise stacks */}
                <div className="col-span-2 sm:col-span-1 bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-5 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 text-center flex flex-row sm:flex-col items-center justify-center gap-3 sm:gap-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 sm:mb-3 rounded-full bg-amber-50 flex items-center justify-center">
                    <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-amber-600" />
                  </div>
                  <div className="text-left sm:text-center">
                    <p className="text-sm sm:text-base font-extrabold text-gray-900 leading-none">Confidentialité</p>
                    <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-600 mt-1">Assurée</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

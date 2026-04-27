import { Phone, Calendar, Star, Clock, Shield, Heart, Award, Stethoscope, Activity, Baby, HeartHandshake, MessageSquare, Instagram, Facebook, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center bg-slate-50 overflow-hidden pt-16 lg:pt-0">

      {/* Animated Medical Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Floating Icons */}
        <Heart className="absolute top-[15%] left-[8%] w-12 h-12 md:w-16 md:h-16 text-clinic-pink-300/40 animate-float-slow" />
        <Baby className="absolute top-[25%] left-[45%] w-16 h-16 md:w-24 md:h-24 text-clinic-green-300/30 animate-float-slower" />
        <Stethoscope className="absolute bottom-[25%] left-[12%] w-16 h-16 md:w-20 md:h-20 text-blue-300/30 animate-float-slow" style={{ animationDelay: '2s' }} />
        <Activity className="absolute top-[10%] right-[35%] w-12 h-12 md:w-16 md:h-16 text-clinic-green-300/40 animate-float-slower" style={{ animationDelay: '1s' }} />
        
        {/* Soft Abstract Blobs */}
        <div className="absolute -left-[10%] top-[20%] w-[50vw] md:w-[30vw] aspect-square bg-clinic-pink-200/30 rounded-full blur-[80px] animate-float-slower mix-blend-multiply"></div>
        <div className="absolute right-[20%] -top-[10%] w-[40vw] md:w-[25vw] aspect-square bg-clinic-green-200/30 rounded-full blur-[80px] animate-float-slow mix-blend-multiply" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Cinematic Background Integration */}
      <div className="absolute inset-0 z-0 hidden lg:block pointer-events-none">
        <div className="absolute bottom-0 right-0 w-full lg:w-[48%] h-[90%]">
          <div className="absolute inset-0 hidden lg:block"></div>
          <img
            src="profile.png"
            alt="Dr Seffar Hicham Background"
            className="w-full h-full object-contain object-[center_bottom] opacity-100 animate-in fade-in duration-1000"
          />
        </div>
      </div>

      {/* Background Decor for Mobile */}
      <div className="absolute top-0 right-0 w-full h-[50%] bg-gradient-to-b from-clinic-green-50/30 to-transparent -z-10 lg:hidden"></div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 z-10">
        <div className="flex flex-col lg:flex-row items-center">

          <div className="w-full lg:w-[60%] flex flex-col space-y-8">

            {/* Top Badges - Order 1 */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start order-1">
              <div className="inline-flex items-center px-4 py-2 bg-white border border-clinic-green-100 text-clinic-green-700 rounded-full text-xs sm:text-sm font-semibold shadow-sm hover:shadow-md transition cursor-default">
                <Stethoscope className="h-4 w-4 mr-2" />
                Gynécologue Obstétricien
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-white border border-clinic-pink-100 text-clinic-pink-700 rounded-full text-xs sm:text-sm font-semibold shadow-sm hover:shadow-md transition cursor-default">
                🌸 Spécialiste à Inezgane
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-xs sm:text-sm font-bold shadow-sm">
                <Star className="h-4 w-4 mr-1.5 fill-current" />
                4.9/5
              </div>
            </div>

            {/* Title & Intro - Order 2 */}
            <div className="text-center lg:text-left space-y-6 order-2">
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-black text-gray-900 leading-[1.1] tracking-tight">
                Votre Santé <span className="text-clinic-green-700">Féminine</span> entre de Bonnes Mains
              </h1>
            </div>

            {/* Mobile Image - Order 3 (Sans cadre) */}
            <div className="lg:hidden w-full max-w-[320px] mx-auto order-3 -mt-4 mb-2">
              <img 
                src="profile.png" 
                alt="Dr Seffar Hicham" 
                className="w-full h-auto object-contain scale-110 drop-shadow-[0_20px_30px_rgba(0,0,0,0.1)]" 
              />
            </div>

            {/* Mobile Doctor Name - Order 4 */}
            <div className="lg:hidden text-center space-y-1 order-4">
              <h2 className="text-2xl font-black text-gray-900">Dr Seffar Hicham</h2>
              <p className="text-clinic-green-700 font-bold text-sm uppercase tracking-widest">Gynécologue Obstétricien à Inezgane</p>
            </div>

            {/* Mobile Badges Grid - Order 5 (Clones of desktop badges) */}
            <div className="lg:hidden grid grid-cols-2 gap-3 order-5 pt-4">
              {[
                { icon: Baby, title: "Suivi", sub: "Personnalisé", color: "text-blue-600", bg: "bg-blue-50" },
                { icon: Shield, title: "Secret", sub: "Médical", color: "text-amber-600", bg: "bg-amber-50" },
                { icon: Activity, title: "Expertise", sub: "Pointue", color: "text-clinic-green-600", bg: "bg-clinic-green-50" },
                { icon: HeartHandshake, title: "Écoute", sub: "Patiente", color: "text-clinic-pink-600", bg: "bg-clinic-pink-50" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/90 backdrop-blur-sm p-3 rounded-2xl border border-white shadow-sm flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-xl ${item.bg} flex items-center justify-center shrink-0`}>
                    <item.icon className={`w-4 h-4 ${item.color}`} />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-black text-gray-900 leading-tight">{item.title}</p>
                    <p className="text-[7px] font-bold text-gray-400 uppercase tracking-wider">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Paragraph - Order 6 */}
            <div className="order-6">
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-justify">
                Le <strong>Dr Seffar Hicham</strong>, est spécialiste en gynécologie-obstétrique. Son parcours associe formation hospitalo-universitaire au Maroc et une année complète de formation clinique à l’Hôpital Universitaire ERASME - Université Libre de Bruxelles (Belgique), avec un engagement constant dans la formation continue internationale
              </p>
            </div>

            {/* Domaines d'expertise - Order 7 */}
            <div className="bg-white/80 backdrop-blur-sm p-5 sm:p-6 rounded-2xl border border-white/50 shadow-xl shadow-clinic-green-900/5 max-w-3xl order-7">
              <div className="flex items-center gap-2 mb-5">
                <div className="p-1.5 bg-clinic-green-100 rounded-xl">
                  <Award className="w-4 h-4 text-clinic-green-700" />
                </div>
                <h3 className="font-bold text-gray-800 text-sm uppercase tracking-wider">Domaines d'expertise</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {[
                  "Chirurgie gynécologique mini-invasive",
                  "Hystéroscopie diagnostique et opératoire",
                  "Chirurgie mammaire et oncoplastie",
                  "Suivi de grossesse et grossesses à risque",
                  "Échographie obstétricale avancée",
                  "Morphologie fœtale",
                  "Bilan et accompagnement en fertilité",
                  "Orientation vers des centres spécialisés en AMP",
                  "Chirurgie vaginale (Prolapsus, Esthétique)"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-clinic-green-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* CTA & Contact Info - Order 8 */}
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-6 order-8">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto flex items-center justify-center px-10 py-5 bg-[#1a2332] text-white rounded-2xl font-bold hover:bg-clinic-green-700 transition shadow-2xl shadow-gray-200 group"
              >
                Prendre rendez-vous
                <Calendar className="w-5 h-5 ml-3 group-hover:rotate-12 transition-transform" />
              </button>
              <div className="flex flex-col items-center sm:items-start group cursor-pointer" onClick={() => window.location.href = 'tel:0528335566'}>
                <div className="flex items-center text-clinic-green-700 font-black text-2xl transition-transform group-hover:scale-105">
                  <Phone className="w-6 h-6 mr-3" />
                  05 28 33 55 66
                </div>
                <p className="text-[11px] text-gray-400 font-bold uppercase tracking-[0.2em] pl-9">Inezgane, Maroc</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* RIGHT SIDE FLOATING UI - Optimized Desktop Only */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-50">
        {[
          { icon: MessageSquare, color: "hover:bg-clinic-green-600", label: "Avis",href:"https://g.page/r/6877469326759728/review" },
          { icon: Instagram, color: "hover:bg-pink-600", label: "Insta",href:"https://www.instagram.com/dr_seffar_hicham/" },
          { icon: Facebook, color: "hover:bg-blue-600", label: "FB",href:"https://web.facebook.com/Drseffarhicham/?_rdc=1&_rdr" }
        ].map((social, i) => (
          <div key={i} className={`w-11 h-11 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer border border-gray-100 text-gray-400 hover:text-white transition-all transform hover:scale-110 ${social.color}`}>
            <social.icon className="w-5 h-5" />
          </div>
        ))}
      </div>

      {/* BOTTOM RIGHT UNIFIED BADGES - CENTERED UNDER IMAGE ZONE */}
      <div className="absolute bottom-6 right-0 w-[48%] hidden lg:flex flex-col items-center gap-2 z-50">
        
        {/* First Line - 3 Badges */}
        <div className="flex gap-2 justify-center items-center">
          {[
            { icon: Baby, title: "Suivi", sub: "Personnalisé", color: "text-blue-600", bg: "bg-blue-50" },
            { icon: Shield, title: "Secret", sub: "Médical", color: "text-amber-600", bg: "bg-amber-50" },
            { icon: Activity, title: "Expertise", sub: "Pointue", color: "text-clinic-green-600", bg: "bg-clinic-green-50" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/95 backdrop-blur-md p-1.5 px-3 rounded-xl border border-white shadow-xl flex items-center gap-3 min-w-[120px] group cursor-default hover:scale-105 transition-transform">
              <div className={`w-8 h-8 rounded-full ${item.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                <item.icon className={`w-4 h-4 ${item.color}`} />
              </div>
              <div className="text-left">
                <p className="text-[11px] font-black text-gray-900 leading-tight">{item.title}</p>
                <p className="text-[8px] font-bold text-gray-400 uppercase tracking-wider">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Second Line - 2 Badges */}
        <div className="flex gap-2 justify-center items-center">
          {[
            { icon: HeartHandshake, title: "Écoute", sub: "Patiente", color: "text-clinic-pink-600", bg: "bg-clinic-pink-50" },
            { icon: Clock, title: "15+ ans", sub: "Expérience", color: "text-clinic-pink-600", bg: "bg-clinic-pink-50" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/95 backdrop-blur-md p-1.5 px-3 rounded-xl border border-white shadow-xl flex items-center gap-3 min-w-[120px] group cursor-default hover:scale-105 transition-transform">
              <div className={`w-8 h-8 rounded-full ${item.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                <item.icon className={`w-4 h-4 ${item.color}`} />
              </div>
              <div className="text-left">
                <p className="text-[11px] font-black text-gray-900 leading-tight">{item.title}</p>
                <p className="text-[8px] font-bold text-gray-400 uppercase tracking-wider">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
import { Phone, Calendar, Star, Clock, Shield, Heart, Award, Stethoscope, Activity, Baby, HeartHandshake, MessageSquare, Instagram, Facebook, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  const { t } = useTranslation();

  return (
    // <section id="accueil" className="relative min-h-screen flex items-center bg-transparent overflow-hidden pt-16 lg:pt-0">
          <section id="accueil" className="relative min-h-screen flex items-center bg-slate-50 overflow-hidden pt-16 lg:pt-0">

      {/* Animated Medical Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Floating Icons */}
        <Heart className="absolute top-[15%] start-[8%] w-12 h-12 md:w-16 md:h-16 text-clinic-pink-300/40 animate-float-slow" />
        <Baby className="absolute top-[25%] start-[45%] w-16 h-16 md:w-24 md:h-24 text-clinic-green-300/30 animate-float-slower" />
        <Stethoscope className="absolute bottom-[25%] start-[12%] w-16 h-16 md:w-20 md:h-20 text-blue-300/30 animate-float-slow" style={{ animationDelay: '2s' }} />
        <Activity className="absolute top-[10%] end-[35%] w-12 h-12 md:w-16 md:h-16 text-clinic-green-300/40 animate-float-slower" style={{ animationDelay: '1s' }} />
        
        {/* Soft Abstract Blobs */}
        <div className="absolute -start-[10%] top-[20%] w-[50vw] md:w-[30vw] aspect-square bg-clinic-pink-200/30 rounded-full blur-[80px] animate-float-slower mix-blend-multiply"></div>
        <div className="absolute end-[20%] -top-[10%] w-[40vw] md:w-[25vw] aspect-square bg-clinic-green-200/30 rounded-full blur-[80px] animate-float-slow mix-blend-multiply" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Cinematic Background Integration */}
      <div className="absolute inset-0 z-0 hidden lg:block pointer-events-none">
        <div className="absolute bottom-0 end-0 w-full lg:w-[48%] h-[90%]">
          <div className="absolute inset-0 hidden lg:block"></div>
          <img
            src="profile.jpg"
            alt={t('hero.doctor_name')}
            className="w-full h-full object-contain object-[center_bottom] ..."
            // style={{
            //   maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
            //   WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
            // }}
            style={{
              maskImage: 'radial-gradient(ellipse 80% 85% at center, black 35%, transparent 60%)',
              WebkitMaskImage: 'radial-gradient(ellipse 90% 85% at center, black 35%, transparent 60%)'
            }}

          />

        </div>
      </div>

      {/* Background Decor for Mobile */}
      <div className="absolute top-0 end-0 w-full h-[50%] bg-gradient-to-b from-clinic-green-50/30 to-transparent -z-10 lg:hidden"></div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 z-10">
        <div className="flex flex-col lg:flex-row items-center">

          <div className="w-full lg:w-[60%] flex flex-col space-y-8">

            {/* Top Badges - Order 1 */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start order-1">
              <div className="inline-flex items-center px-4 py-2 bg-white border border-clinic-green-100 text-clinic-green-700 rounded-full text-xs sm:text-sm font-semibold shadow-sm hover:shadow-md transition cursor-default">
                <Stethoscope className="h-4 w-4 me-2" />
                {t('hero.specialty')}
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-white border border-clinic-pink-100 text-clinic-pink-700 rounded-full text-xs sm:text-sm font-semibold shadow-sm hover:shadow-md transition cursor-default">
                {t('hero.location_badge')}
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-xs sm:text-sm font-bold shadow-sm">
                <Star className="h-4 w-4 me-1.5 fill-current" />
                {t('hero.rating')}
              </div>
            </div>

            {/* Title & Intro - Order 2 */}
            <div className="text-center lg:text-start space-y-6 order-2">
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-black text-gray-900 leading-[1.1] tracking-tight">
                {t('hero.title_start')} <span className="text-clinic-green-700">{t('hero.title_highlight')}</span> {t('hero.title_end')}
              </h1>
            </div>

            {/* Mobile Image - Order 3 (Sans cadre) */}
            <div className="lg:hidden w-full max-w-[320px] mx-auto order-3 -mt-4 mb-2">
        <img 
  src="profile.jpeg" 
  alt={t('hero.doctor_name')}
  className="w-full h-auto object-contain scale-110 ..." 
  style={{
    maskImage: 'radial-gradient(ellipse 95% 90% at center, black 35%, transparent 60%)',
    WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at center, black 35%, transparent 70%)'
  }}
/>

            </div>

            {/* Mobile Doctor Name - Order 4 */}
            <div className="lg:hidden text-center space-y-1 order-4">
              <h2 className="text-2xl font-black text-gray-900">{t('hero.doctor_name')}</h2>
              <p className="text-clinic-green-700 font-bold text-sm uppercase tracking-widest">{t('hero.doctor_subtitle')}</p>
            </div>

            {/* Mobile Badges Grid - Order 5 (Clones of desktop badges) */}
            <div className="lg:hidden grid grid-cols-2 gap-3 order-5 pt-4">
              {[
                { icon: Baby, title: t('hero.badges.suivi.title'), sub: t('hero.badges.suivi.sub'), color: "text-blue-600", bg: "bg-blue-50" },
                { icon: Shield, title: t('hero.badges.secret.title'), sub: t('hero.badges.secret.sub'), color: "text-amber-600", bg: "bg-amber-50" },
                { icon: Activity, title: t('hero.badges.expertise.title'), sub: t('hero.badges.expertise.sub'), color: "text-clinic-green-600", bg: "bg-clinic-green-50" },
                { icon: HeartHandshake, title: t('hero.badges.ecoute.title'), sub: t('hero.badges.ecoute.sub'), color: "text-clinic-pink-600", bg: "bg-clinic-pink-50" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/90 backdrop-blur-sm p-3 rounded-2xl border border-white shadow-sm flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-xl ${item.bg} flex items-center justify-center shrink-0`}>
                    <item.icon className={`w-4 h-4 ${item.color}`} />
                  </div>
                  <div className="text-start">
                    <p className="text-[10px] font-black text-gray-900 leading-tight">{item.title}</p>
                    <p className="text-[7px] font-bold text-gray-400 uppercase tracking-wider">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Paragraph - Order 6 */}
            <div className="order-6">
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-justify">
                {t('hero.description')}
              </p>
            </div>

            {/* Domaines d'expertise - Order 7 */}
            <div className="bg-white/80 backdrop-blur-sm p-5 sm:p-6 rounded-2xl border border-white/50 shadow-xl shadow-clinic-green-900/5 max-w-3xl order-7">
              <div className="flex items-center gap-2 mb-5">
                <div className="p-1.5 bg-clinic-green-100 rounded-xl">
                  <Award className="w-4 h-4 text-clinic-green-700" />
                </div>
                <h3 className="font-bold text-gray-800 text-sm uppercase tracking-wider">{t('hero.expertise_title')}</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {(t('hero.expertise_list', { returnObjects: true }) as string[]).map((item, idx) => (
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
                {t('hero.cta_button')}
                <Calendar className="w-5 h-5 ms-3 group-hover:rotate-12 transition-transform" />
              </button>
              <div className="flex flex-col items-center sm:items-start group cursor-pointer" onClick={() => window.location.href = 'tel:0528335566'}>
                <div className="flex items-center text-clinic-green-700 font-black text-2xl transition-transform group-hover:scale-105">
                  <Phone className="w-6 h-6 me-3" />
                  <span dir="ltr">{t('hero.phone')}</span>
                </div>
                <p className="text-[11px] text-gray-400 font-bold uppercase tracking-[0.2em] ps-9">{t('hero.city')}</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* RIGHT SIDE FLOATING UI - Optimized Desktop Only */}
      <div className="absolute end-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-50">
        {[
          { icon: MessageSquare, color: "hover:bg-clinic-green-600", label: t('hero.floating.avis'), href: "https://www.google.com/maps/place/Dr+Hicham+Seffar+%E2%80%93+Gyn%C3%A9cologue+Obst%C3%A9tricien+%D8%A7%D9%84%D8%AF%D9%83%D8%AA%D9%88%D8%B1+%D8%A7%D9%84%D8%B5%D9%81%D8%A7%D8%B1+%D9%87%D8%B4%D8%A7%D9%85+%E2%80%93+%D8%B7%D8%A8%D9%8A%D8%A8+%D9%86%D8%B3%D8%A7%D8%A1+%D9%88+%D9%88%D9%84%D8%A7%D8%AF%D8%A9%E2%80%AD/@30.3615185,-9.5308819,938m/data=!3m1!1e3!4m18!1m9!3m8!1s0xdb3c7a9daadde7d:0xc8d9db784ad3be51!2zRHIgSGljaGFtIFNlZmZhciDigJMgR3luw6ljb2xvZ3VlIE9ic3TDqXRyaWNpZW4g2KfZhNiv2YPYqtmI2LEg2KfZhNi12YHYp9ixINmH2LTYp9mFIOKAkyDYt9io2YrYqCDZhtiz2KfYoSDZiCDZiNmE2KfYr9ip!8m2!3d30.3615873!4d-9.5308842!9m1!1b1!16s%2Fg%2F11ssl8n0bs!3m7!1s0xdb3c7a9daadde7d:0xc8d9db784ad3be51!8m2!3d30.3615873!4d-9.5308842!9m1!1b1!16s%2Fg%2F11ssl8n0bs?hl=fr&entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D" },
          { icon: Instagram, color: "hover:bg-pink-600", label: t('hero.floating.insta'), href: "https://www.instagram.com/dr_seffar_hicham/" },
          { icon: Facebook, color: "hover:bg-blue-600", label: t('hero.floating.fb'), href: "https://web.facebook.com/Drseffarhicham/?_rdc=1&_rdr" }
        ].map((social, i) => (
          <a
            key={i}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-11 h-11 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer border border-gray-100 text-gray-400 hover:text-white transition-all transform hover:scale-110 ${social.color}`}
            title={social.label}
          >
            <social.icon className="w-5 h-5" />
          </a>
        ))}
      </div>

      {/* BOTTOM RIGHT UNIFIED BADGES - CENTERED UNDER IMAGE ZONE */}
      <div className="absolute bottom-6 end-0 w-[48%] hidden lg:flex flex-col items-center gap-2 z-50">
        
        {/* First Line - 3 Badges */}
        <div className="flex gap-2 justify-center items-center">
          {[
            { icon: Baby, title: t('hero.badges.suivi.title'), sub: t('hero.badges.suivi.sub'), color: "text-blue-600", bg: "bg-blue-50" },
            { icon: Shield, title: t('hero.badges.secret.title'), sub: t('hero.badges.secret.sub'), color: "text-amber-600", bg: "bg-amber-50" },
            { icon: Activity, title: t('hero.badges.expertise.title'), sub: t('hero.badges.expertise.sub'), color: "text-clinic-green-600", bg: "bg-clinic-green-50" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/95 backdrop-blur-md p-1 px-3 rounded-xl border border-white shadow-xl flex items-center gap-3 min-w-[130px] group cursor-default hover:scale-105 transition-transform">
              <div className={`w-10 h-10 rounded-full ${item.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                <item.icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <div className="text-start">
                <p className="text-[13px] font-black text-gray-900 leading-tight">{item.title}</p>
                <p className="text-[9.5px] font-bold text-gray-400 uppercase tracking-wider">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Second Line - 2 Badges */}
        <div className="flex gap-2 justify-center items-center">
          {[
            { icon: HeartHandshake, title: t('hero.badges.ecoute.title'), sub: t('hero.badges.ecoute.sub'), color: "text-clinic-pink-600", bg: "bg-clinic-pink-50" },
            { icon: Clock, title: t('hero.badges.experience.title'), sub: t('hero.badges.experience.sub'), color: "text-clinic-pink-600", bg: "bg-clinic-pink-50" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/95 backdrop-blur-md p-1 px-3 rounded-xl border border-white shadow-xl flex items-center gap-3 min-w-[130px] group cursor-default hover:scale-105 transition-transform">
              <div className={`w-10 h-10 rounded-full ${item.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                <item.icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <div className="text-start">
                <p className="text-[13px] font-black text-gray-900 leading-tight">{item.title}</p>
                <p className="text-[9.5px] font-bold text-gray-400 uppercase tracking-wider">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}


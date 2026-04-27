import { Stethoscope, Baby, Heart, Users, Shield, Award, Activity, Sparkles, Phone, Clock, CheckCircle,  Calendar, Star, Scissors, Eye, Scan, Droplet, Target, Zap, Activity as ActivityIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: Stethoscope,
      title: t('services.items.0.title'),
      description: t('services.items.0.description'),
      details: t('services.items.0.details', { returnObjects: true }) as string[],
    },
    {
      icon: Baby,
      title: t('services.items.1.title'),
      description: t('services.items.1.description'),
      details: t('services.items.1.details', { returnObjects: true }) as string[],
    },
    {
      icon: Scan,
      title: t('services.items.2.title'),
      description: t('services.items.2.description'),
      details: t('services.items.2.details', { returnObjects: true }) as string[],
    },
    {
      icon: Users,
      title: t('services.items.3.title'),
      description: t('services.items.3.description'),
      details: t('services.items.3.details', { returnObjects: true }) as string[],
    },
    {
      icon: Scissors,
      title: t('services.items.4.title'),
      description: t('services.items.4.description'),
      details: t('services.items.4.details', { returnObjects: true }) as string[],
    },
    {
      icon: Eye,
      title: t('services.items.5.title'),
      description: t('services.items.5.description'),
      details: t('services.items.5.details', { returnObjects: true }) as string[],
    },
    {
      icon: Shield,
      title: t('services.items.6.title'),
      description: t('services.items.6.description'),
      details: t('services.items.6.details', { returnObjects: true }) as string[],
    },
    {
      icon: Scissors,
      title: t('services.items.7.title'),
      description: t('services.items.7.description'),
      details: t('services.items.7.details', { returnObjects: true }) as string[],
    },
    {
      icon: Sparkles,
      title: t('services.items.8.title'),
      description: t('services.items.8.description'),
      details: t('services.items.8.details', { returnObjects: true }) as string[],
    },
    {
      icon: Award,
      title: t('services.items.9.title'),
      description: t('services.items.9.description'),
      details: t('services.items.9.details', { returnObjects: true }) as string[],
    },
    {
      icon: Activity,
      title: t('services.items.10.title'),
      description: t('services.items.10.description'),
      details: t('services.items.10.details', { returnObjects: true }) as string[],
    }
  ];

  const ultrasoundImages = [
    {
      title: t('services.ultrasound_images.0.title'),
      description: t('services.ultrasound_images.0.description'),
      icon: Scan,
      color: "from-clinic-green-500 to-clinic-green-600",
      img: "ECHO1.png"
    },
    {
      title: t('services.ultrasound_images.1.title'),
      description: t('services.ultrasound_images.1.description'),
      icon: Droplet,
      color: "from-clinic-pink-500 to-clinic-pink-600",
      img: "ECHO2.png"
    },
    {
      title: t('services.ultrasound_images.2.title'),
      description: t('services.ultrasound_images.2.description'),
      icon: ActivityIcon,
      color: "from-clinic-green-500 to-clinic-pink-500",
      img: "ECHO3.png"
    },
    {
      title: t('services.ultrasound_images.3.title'),
      description: t('services.ultrasound_images.3.description'),
      icon: Heart,
      color: "from-clinic-green-600 to-clinic-green-700",
      img: "ECHO4.png"
    }
  ];

  return (
    <section id="services" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-white border border-clinic-pink-200 text-clinic-pink-600 rounded-full text-sm font-medium mb-6 shadow-sm">
            <Star className="h-4 w-4 me-2 fill-clinic-pink-400 text-clinic-pink-400" />
            {t('services.badge')}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('services.title_start')} <span className="text-clinic-green-700">{t('services.title_highlight')}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-clinic-green-500 to-clinic-pink-500 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Grille des services */}
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 group w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] min-h-[350px] flex flex-col ${
                  index % 2 === 0 ? 'border-clinic-green-500' : 'border-clinic-pink-500'
                }`}
              >
                <div className={`w-16 h-16 bg-white border rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform ${
                  index % 2 === 0 ? 'border-clinic-green-100' : 'border-clinic-pink-100'
                }`}>
                  <Icon className={`h-8 w-8 ${index % 2 === 0 ? 'text-clinic-green-700' : 'text-clinic-pink-500'}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">{service.title}</h3>
                <p className="text-gray-600 mb-5 leading-relaxed">{service.description}</p>
                <div className="space-y-3 mb-5">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className={`h-4 w-4 mt-0.5 me-3 flex-shrink-0 ${
                        index % 2 === 0 ? 'text-clinic-green-500' : 'text-clinic-pink-400'
                      }`} />
                      <span className="text-sm text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* SECTION ÉCHographie 3D/4D & DOPPLER COULEUR - MODERN BENTO GRID REDESIGN */}
        <div className="mt-32 relative">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-clinic-green-500 to-clinic-green-600 text-white rounded-full text-sm font-bold mb-6 shadow-lg shadow-clinic-green-500/30">
              <Zap className="h-4 w-4" />
              {t('services.equipment_badge')}
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
              {t('services.equipment_title_start')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-clinic-green-600 to-clinic-pink-500">{t('services.equipment_title_highlight')}</span>
            </h3>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              {t('services.equipment_subtitle')}
            </p>
          </div>

          {/* Interactive Bento Grid Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Main Feature - Spans 8 cols */}
            <div className="md:col-span-8 group relative rounded-3xl overflow-hidden shadow-2xl bg-[#0a0f1c] aspect-[4/3] md:aspect-auto md:h-[320px]">
              {/* Animated abstract background */}
              <div className="absolute inset-0 overflow-hidden">
                 <div className="absolute top-[-20%] start-[-10%] w-[60%] h-[150%] bg-clinic-green-500/20 blur-[100px] rounded-full animate-float-slow"></div>
                 <div className="absolute bottom-[-20%] end-[-10%] w-[60%] h-[150%] bg-clinic-pink-500/20 blur-[100px] rounded-full animate-float-slower"></div>
              </div>
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjxwb2x5Z29uIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIiBwb2ludHM9IjQgMCA4IDQgNCA4IDAgNCIvPjwvc3ZnPg==')] opacity-20"></div>
              
              <div className="relative z-20 h-full flex flex-col justify-center p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                   <div className="bg-clinic-green-500/20 border border-clinic-green-500/50 text-clinic-green-400 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md">{t('services.equipment_features_badge1')}</div>
                   <div className="bg-clinic-pink-500/20 border border-clinic-pink-500/50 text-clinic-pink-400 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md">{t('services.equipment_features_badge2')}</div>
                </div>
                <h4 className="text-2xl md:text-4xl font-bold text-white mb-2 leading-tight">
                  {t('services.equipment_features_title_start')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-clinic-green-400 to-clinic-pink-400">{t('services.equipment_features_title_highlight')}</span>
                </h4>
                <p className="text-gray-300 max-w-2xl text-sm md:text-base font-light leading-relaxed mb-4">
                  {t('services.equipment_features_desc')}
                </p>
                <div className="flex flex-wrap gap-4 md:gap-8 text-gray-300 font-medium text-xs">
                   <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-clinic-green-500" /> {t('services.equipment_features_check1')}</div>
                   <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-clinic-pink-500" /> {t('services.equipment_features_check2')}</div>
                </div>
              </div>
            </div>

            {/* Stats Sidebar - Spans 4 cols */}
            <div className="md:col-span-4 flex flex-col gap-4">
               <div className="bg-gradient-to-br from-clinic-green-500 to-clinic-green-700 rounded-3xl p-5 text-white shadow-xl flex-1 flex flex-col justify-center relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                  <div className="absolute top-0 end-0 w-24 h-24 bg-white opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                  <Target className="w-8 h-8 mb-2 opacity-90 text-green-100" />
                  <div className="text-4xl md:text-5xl font-black mb-1 tracking-tighter">+98%</div>
                  <div className="text-green-50 font-semibold text-base">{t('services.stats_accuracy_title')}</div>
               </div>
               
               <div className="bg-gradient-to-br from-clinic-pink-500 to-clinic-pink-700 rounded-3xl p-5 text-white shadow-xl flex-1 flex flex-col justify-center relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                  <div className="absolute bottom-0 start-0 w-24 h-24 bg-white opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                  <Clock className="w-8 h-8 mb-2 opacity-90 text-pink-100" />
                  <div className="text-4xl md:text-5xl font-black mb-1 tracking-tighter">&lt;15 <span className="text-2xl">{t('services.stats_speed_sub')}</span></div>
                  <div className="text-pink-50 font-semibold text-base">{t('services.stats_speed_title')}</div>
               </div>
            </div>
            
            {/* 4 Ultrasound Modalities - each spans 3 cols */}
            {ultrasoundImages.map((img, idx) => {
              const IconImg = img.icon;
              return (
                <div key={idx} className="col-span-1 sm:col-span-6 lg:col-span-3 group relative rounded-3xl overflow-hidden bg-white shadow-xl hover:shadow-clinic-green-500/20 transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-clinic-green-500/50 flex flex-col">
                   <div className="aspect-square relative overflow-hidden bg-[#050505] flex items-center justify-center p-2">
                     {/* The Ultrasound Image - Fully Visible, No Zoom */}
                     {img.img ? (
                       <img src={img.img} alt={img.title} className="w-full h-full object-contain" />
                     ) : (
                       <div className={`absolute inset-0 bg-gradient-to-br ${img.color} opacity-30`}></div>
                     )}
                     
                     {/* Icon Badge */}
                     <div className="absolute top-2 end-2 bg-black/60 backdrop-blur-md p-2 rounded-xl border border-white/10 z-10">
                       <IconImg className="w-4 h-4 text-white" />
                     </div>
                   </div>
                   
                   {/* Text Content - Below Image - Attractive Design */}
                   <div className="p-5 bg-white flex-grow border-t border-gray-50 flex flex-col">
                     <div className="flex items-center gap-2 mb-2">
                       <div className="w-2 h-2 rounded-full bg-clinic-green-500 animate-pulse"></div>
                       <h5 className="text-gray-900 font-bold text-base leading-tight group-hover:text-clinic-green-600 transition-colors tracking-tight">{img.title}</h5>
                     </div>
                     <p className="text-gray-600 text-sm font-medium leading-relaxed mb-4 line-clamp-2">{img.description}</p>
                   </div>
                </div>
              );
            })}

          </div>
        </div>

        {/* Section prise de rendez-vous */}
        <div className="mt-16 bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-clinic-green-100">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{t('services.appointment_title')}</h4>
              <p className="text-gray-600 mb-8 mt-4 leading-relaxed text-base md:text-lg">
                {t('services.appointment_desc')}
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="flex items-center justify-center w-full sm:w-auto px-4 py-2 bg-white border border-clinic-green-300 text-clinic-green-700 rounded-full text-sm font-semibold">
                  <Calendar className="h-4 w-4 me-2" />
                  {t('services.appointment_badge1')}
                </div>
                <div className="flex items-center justify-center w-full sm:w-auto px-4 py-2 bg-white border border-clinic-pink-300 text-clinic-pink-700 rounded-full text-sm font-semibold">
                  <Clock className="h-4 w-4 me-2" />
                  {t('services.appointment_badge2')}
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
                  <span className="text-lg"> {t('services.appointment_cta')}</span>
                </div>
                <span className="hidden sm:inline opacity-50">|</span>
                <span className="text-xl md:text-2xl tracking-tight" dir="ltr">0528 33 55 66</span>
              </a>
              <p className="mt-4 text-gray-500 text-sm italic">{t('services.appointment_footer')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
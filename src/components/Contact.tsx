import { Phone, Clock, MessageCircle, Zap, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-clinic-green-200">
            <Zap className="h-4 w-4 text-clinic-green-500 me-2" />
            {t('contact.badge')}
          </div>
          <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('contact.title_start')} <span className="text-clinic-green-700">{t('contact.title_highlight')}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-clinic-green-500 to-clinic-pink-500 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Section Gauche - Horaires et Infos */}
          <div className="lg:col-span-1 space-y-6">
            {/* Carte Horaires détaillés */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-s-4 border-clinic-green-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Clock className="h-5 w-5 text-clinic-green-500 me-2" />
                {t('contact.hours_title')}
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">{t('footer.days_week')}</span>
                  <span className="bg-clinic-green-100 text-clinic-green-700 px-3 py-1 rounded-full text-sm font-semibold" dir="ltr">
                    08h30 - 16h00
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">{t('footer.day_sat')}</span>
                  <span className="bg-clinic-green-100 text-clinic-green-700 px-3 py-1 rounded-full text-sm font-semibold" dir="ltr">
                    08h30 - 12h30
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">{t('footer.day_sun')}</span>
                  <span className="bg-clinic-pink-100 text-clinic-pink-700 px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wider text-[10px]">
                    {t('footer.closed')}
                  </span>
                </div>
              </div>
            </div>

            {/* Carte Réseaux Sociaux */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-s-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('contact.follow_us')}</h3>
              <div className="space-y-3">
                <a
                  href="https://web.facebook.com/Drseffarhicham/?_rdc=1&_rdr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition group"
                >
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Facebook className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Facebook</p>
                    <p className="text-sm text-gray-600">{t('common.doctor_name')}</p>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/dr_seffar_hicham/?hl=fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-clinic-pink-50 rounded-xl hover:bg-clinic-pink-100 transition group"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-clinic-pink-500 rounded-lg flex items-center justify-center">
                    <Instagram className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Instagram</p>
                    <p className="text-sm text-gray-600">@dr_seffar_hicham</p>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/hicham-seffar-2510ab29/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition group"
                >
                  <div className="w-10 h-10 bg-[#0077b5] rounded-lg flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">LinkedIn</p>
                    <p className="text-sm text-gray-600">Hicham Seffar</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Section Droite - Carte et Actions */}
          <div className="lg:col-span-2 space-y-6">
            {/* Carte Google Maps */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-clinic-green-50 to-clinic-pink-50 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{t('contact.our_office')}</h3>
                    <p className="text-gray-600 text-sm">{t('contact.address_full')}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-clinic-green-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-clinic-pink-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-clinic-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3439.423188582962!2d-9.533456800000001!3d30.361523099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3c7a9daadde7d%3A0xc8d9db784ad3be51!2sCabinet+Dr+Seffar+Hicham!5e0!3m2!1sfr!2sma!4v1739353900000!5m2!1sfr!2sma"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation du Cabinet Dr Seffar Hicham à Inezgane"
              ></iframe>
            </div>

            {/* Actions Rapides */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-clinic-green-500 to-clinic-green-700 rounded-2xl p-6 text-white">
                <h4 className="font-bold text-lg mb-3">📞 {t('contact.call_now')}</h4>
                <p className="text-sm opacity-90 mb-4">{t('contact.call_sub')}</p>
                <a
                  href="tel:0528335566"
                  className="inline-flex items-center justify-center w-full bg-white text-clinic-green-700 py-3 rounded-xl font-bold hover:bg-gray-100 transition"
                >
                  <Phone className="h-5 w-5 me-2" />
                  <span dir="ltr">0528 33 55 66</span>
                </a>
              </div>

              <div className="bg-gradient-to-br from-clinic-pink-500 to-clinic-pink-500 rounded-2xl p-6 text-white">
                <h4 className="font-bold text-lg mb-3">💬 {t('contact.send_message')}</h4>
                <p className="text-sm opacity-90 mb-4">{t('contact.send_sub')}</p>
                <a
                  href="https://wa.me/212668628626"
                  className="inline-flex items-center justify-center w-full bg-white text-clinic-pink-500 py-3 rounded-xl font-bold hover:bg-gray-100 transition"
                >
                  <MessageCircle className="h-5 w-5 me-2" />
                  <span dir="ltr">0668 62 86 26</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

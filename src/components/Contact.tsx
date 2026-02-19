import { Phone, Clock, MessageCircle, Zap, Facebook, Instagram, Linkedin } from 'lucide-react';


export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-clinic-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-clinic-green-200">
            <Zap className="h-4 w-4 text-clinic-green-500 mr-2" />
            Contact Direct
          </div>
          <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4">
            Comment nous <span className="text-clinic-green-700">contacter</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-clinic-green-500 to-clinic-pink-500 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Choisissez la méthode qui vous convient le mieux pour prendre rendez-vous
          </p>
        </div>

        {/* Cartes de contact principales */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8 px-4">
          {/* Carte Téléphone Fixe */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-clinic-green-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-clinic-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Téléphone Fixe</h3>
            <div className="space-y-1">
              <a href="tel:0528335566" className="text-2xl sm:text-3xl font-bold text-clinic-green-700 hover:text-clinic-green-800 transition block">
                0528 33 55 66
              </a>
              <p className="text-sm text-gray-500 font-medium italic">Lun-Ven: 8h30-16h</p>
              <p className="text-sm text-gray-500 font-medium italic">Samedi: 08h30 - 12h30</p>
            </div>

          </div>

          {/* Carte Mobile & WhatsApp */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-clinic-pink-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-clinic-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <MessageCircle className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Mobile & WhatsApp</h3>
            <div className="space-y-1">
              <a
                href="https://wa.me/212668628626"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl sm:text-3xl font-bold text-clinic-pink-500 hover:text-clinic-pink-600 transition block"
              >
                0668 62 86 26
              </a>
              <p className="text-sm text-gray-500 font-medium italic font-bold">Appels et messages WhatsApp</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Section Gauche - Horaires et Infos */}
          <div className="lg:col-span-1 space-y-6">
            {/* Carte Horaires détaillés */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-clinic-green-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Clock className="h-5 w-5 text-clinic-green-500 mr-2" />
                Horaires d'ouverture
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Lundi - Vendredi</span>
                  <span className="bg-clinic-green-100 text-clinic-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    08h30 - 16h00
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Samedi</span>
                  <span className="bg-clinic-green-100 text-clinic-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    08h30 - 12h30
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">Dimanche</span>
                  <span className="bg-clinic-pink-100 text-clinic-pink-700 px-3 py-1 rounded-full text-sm font-semibold">
                    Fermé
                  </span>
                </div>
              </div>
            </div>

            {/* Carte Réseaux Sociaux */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Suivez-nous</h3>
              <div className="space-y-3">
                <a
                  href="https://web.facebook.com/Drseffarhicham/?_rdc=1&_rdr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition group"
                >
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Facebook className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Facebook</p>
                    <p className="text-sm text-gray-600">Dr Seffar Hicham</p>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/dr_seffar_hicham/?hl=fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-clinic-pink-50 rounded-xl hover:bg-clinic-pink-100 transition group"
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
                  className="flex items-center space-x-3 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition group"
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
                    <h3 className="text-xl font-bold text-gray-900">Notre Cabinet</h3>
                    <p className="text-gray-600 text-sm">Espace Dubai, 2eme ETG, 212, immeuble k, Av. des Forces Armées Royales, Inezgane 80100</p>
                  </div>
                  <div className="flex items-center space-x-2">
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
                <h4 className="font-bold text-lg mb-3">📞 Appeler maintenant</h4>
                <p className="text-sm opacity-90 mb-4">Pour un rendez-vous rapide</p>
                <a
                  href="tel:0528335566"
                  className="inline-flex items-center justify-center w-full bg-white text-clinic-green-700 py-3 rounded-xl font-bold hover:bg-gray-100 transition"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  0528 33 55 66
                </a>
              </div>

              <div className="bg-gradient-to-br from-clinic-pink-500 to-clinic-pink-500 rounded-2xl p-6 text-white">
                <h4 className="font-bold text-lg mb-3">💬 Envoyer message</h4>
                <p className="text-sm opacity-90 mb-4">WhatsApp ou SMS</p>
                <a
                  href="tel:0668628626"
                  className="inline-flex items-center justify-center w-full bg-white text-clinic-pink-500 py-3 rounded-xl font-bold hover:bg-gray-100 transition"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  0668 62 86 26
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

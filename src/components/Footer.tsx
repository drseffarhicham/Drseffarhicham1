import { Phone, MapPin, Mail, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0b1120] text-white pt-20 pb-10 relative overflow-hidden">
      {/* Decorative background flare */}
      {/* Decorative background flare */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-clinic-green-500/10 rounded-full blur-[120px] -mr-48 -mt-24 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Colonne 1 - Logo et description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img src="/logo.png" alt="Dr Seffar Hicham Logo" className="h-14 w-auto object-contain bg-white rounded-xl p-1 shadow-sm" />
              </div>
              <div>
                <span className="text-2xl font-bold block tracking-tight">Dr Seffar Hicham</span>
                <span className="text-clinic-green-400 text-xs font-semibold tracking-wider uppercase">Gynécologue Obstétricien</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed text-base">
              Votre santé féminine mérite une expertise de haut niveau. Le Dr Seffar Hicham vous accompagne avec bienveillance à Inezgane.
            </p>
            
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://web.facebook.com/Drseffarhicham/?_rdc=1&_rdr" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white/5 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 group border border-white/10"
              >
                <Facebook className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://www.instagram.com/dr_seffar_hicham/?hl=fr" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white/5 hover:bg-gradient-to-br hover:from-purple-600 hover:to-clinic-pink-500 rounded-xl flex items-center justify-center transition-all duration-300 group border border-white/10"
              >
                <Instagram className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Colonne 2 - Navigation rapide */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-white flex items-center">
              <span className="w-8 h-[2px] bg-clinic-green-500 mr-3"></span>
              Plan du site
            </h4>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-y-4 gap-x-4 text-gray-400">
              {[
                { id: 'accueil', name: 'Accueil' },
                { id: 'apropos', name: 'À propos' },
                { id: 'services', name: 'Services' },
                { id: 'temoignages', name: 'Témoignages' },
                { id: 'articles', name: 'Articles' },
                { id: 'contact', name: 'Contact' }
              ].map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="hover:text-clinic-green-400 transition-colors flex items-center group text-sm md:text-base">
                    <span className="h-[1px] w-0 group-hover:w-4 bg-clinic-green-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 - Contact direct */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-white flex items-center">
              <span className="w-8 h-[2px] bg-clinic-pink-500 mr-3"></span>
              Contact
            </h4>
            <div className="space-y-6">
              <div className="flex gap-4 group">
                <div className="w-10 h-10 bg-clinic-green-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-clinic-green-500 transition-colors duration-300">
                  <Phone className="h-5 w-5 text-clinic-green-500 group-hover:text-white" />
                </div>
                <div>
                  <a href="tel:0528335566" className="block text-gray-300 hover:text-clinic-green-400 font-bold transition-colors">0528 33 55 66</a>
                  <a href="https://wa.me/212668628626" className="block text-gray-400 hover:text-clinic-pink-400 text-sm mt-1 transition-colors">0668 62 86 26 (WhatsApp)</a>
                </div>
              </div>
              
              <div className="flex gap-4 group">
                <div className="w-10 h-10 bg-clinic-pink-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-clinic-pink-500 transition-colors duration-300">
                  <Mail className="h-5 w-5 text-clinic-pink-500 group-hover:text-white" />
                </div>
                <a href="mailto:drseffarhicham@gmail.com" className="text-gray-300 hover:text-clinic-green-400 text-sm break-all pt-2 transition-colors">
                  drseffarhicham@gmail.com
                </a>
              </div>
              
              <div className="flex gap-4 group">
                <div className="w-10 h-10 bg-clinic-green-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-clinic-green-500 transition-colors duration-300">
                  <MapPin className="h-5 w-5 text-clinic-green-500 group-hover:text-white" />
                </div>
                <div className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  <p>Espace Dubai, 2ème étage, n°212</p>
                  <p>Inzegane 80100, Maroc</p>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne 4 - Horaires */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-white flex items-center">
              <span className="w-8 h-[2px] bg-amber-500 mr-3"></span>
              Horaires
            </h4>
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Lun - Ven</span>
                <span className="text-clinic-green-400 font-bold">08:30 - 16:00</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Samedi</span>
                <span className="text-clinic-green-400 font-bold">08:30 - 12:30</span>
              </div>
              <div className="h-[1px] bg-white/10 w-full"></div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Dimanche</span>
                <span className="text-clinic-pink-500 font-bold uppercase tracking-widest text-[10px]">Fermé</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section inférieure - Copyright et Mentions */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm text-center md:text-left order-2 md:order-1">
            &copy; {new Date().getFullYear()} Cabinet Médical Dr Seffar Hicham. <br className="md:hidden" />
            Tous droits réservés.
          </p>
          
          {/* <div className="flex flex-wrap justify-center gap-6 text-xs font-medium text-gray-500 order-1 md:order-2">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <span className="hidden md:inline text-white/10">|</span>
            <a href="#" className="hover:text-white transition-colors">Politique de Cookies</a>
            <span className="hidden md:inline text-white/10">|</span>
            <span className="text-clinic-green-500/50">Santé Féminine & Obstétrique</span>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
import { useState } from 'react';
import { Menu, X, Home, User, Stethoscope, MessageCircle, BookOpen, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

interface NavigationProps {
  scrollToSection: (id: string) => void;
}

export default function Navigation({ scrollToSection }: NavigationProps) {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  const menuItems = [
    { id: 'accueil', label: t('nav.accueil'), icon: Home },
    { id: 'apropos', label: t('nav.apropos'), icon: User },
    { id: 'services', label: t('nav.services'), icon: Stethoscope },
    { id: 'temoignages', label: t('nav.temoignages'), icon: MessageCircle },
    { id: 'articles', label: t('nav.articles'), icon: BookOpen },
    { id: 'contact', label: t('nav.contact'), icon: Phone }
  ];

  return (
    <div className="fixed w-full z-50">
      {/* Barre de navigation principale */}
      <nav className="w-full bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <img src="/logo.webp" alt="Dr Seffar Hicham Logo" className="h-16 w-auto object-contain" />
              </div>
              <div>
                <span className="text-lg sm:text-xl font-bold text-gray-900 block leading-tight">{t('common.doctor_name')}</span>
                <span className="text-xs text-clinic-green-700 font-medium">{t('common.specialty')}</span>
              </div>
            </div>

            {/* Navigation Desktop */}
            <div className="hidden md:flex gap-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleScroll(item.id)}
                    className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-clinic-green-700 transition-all duration-200 font-medium rounded-lg hover:bg-clinic-green-50 group"
                  >
                    <Icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
              <div className="flex items-center ms-2 border-s border-gray-100 ps-2">
                <LanguageSelector />
              </div>
            </div>

            {/* Bouton Menu Mobile */}
            <button
              className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-clinic-green-50 hover:text-clinic-green-700 transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-3 space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleScroll(item.id)}
                    className="flex items-center gap-3 w-full text-start px-3 py-3 text-gray-700 hover:bg-clinic-green-50 hover:text-clinic-green-700 rounded-xl transition-all duration-200 group"
                  >
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-clinic-green-100 group-hover:text-clinic-green-700 transition">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="px-4 py-3 border-t border-gray-100 bg-gray-50 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone className="h-4 w-4 text-clinic-green-700" />
                <span dir="ltr">0528 33 55 66</span>
              </div>
              <LanguageSelector />
            </div>
          </div>
        )}
      </nav>

      {/* ── Barre d'action rapide ── */}
      <div className="w-full shadow-md">
        <div className="max-w-7xl mx-auto">
          <div className="flex w-full">

            {/* Appeler */}
            <a
              href="tel:0528335566"
              id="action-bar-call"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-clinic-pink-400 text-white font-semibold text-sm hover:bg-clinic-pink-500 active:bg-clinic-pink-600 transition-colors duration-200 group"
            >
              <Phone className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
              <span className="hidden xs:inline">Appeler</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/212668628626"
              id="action-bar-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-clinic-green-700 text-white font-semibold text-sm hover:bg-clinic-green-800 active:bg-clinic-green-900 transition-colors duration-200 group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 group-hover:scale-110 transition-transform duration-200">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              <span className="hidden xs:inline">WhatsApp</span>
            </a>

            {/* Itinéraire */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Dr+Seffar+Hicham+Gynécologue+Agadir"
              id="action-bar-directions"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-clinic-pink-400 text-white font-semibold text-sm hover:bg-clinic-pink-500 active:bg-clinic-pink-600 transition-colors duration-200 group"
            >
              <MapPin className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
              <span className="hidden xs:inline">Itinéraire</span>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}
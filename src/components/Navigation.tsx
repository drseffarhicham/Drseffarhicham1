import { useState } from 'react';
import { Menu, X, Home, User, Stethoscope, MessageCircle, BookOpen, Phone } from 'lucide-react';
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
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <img src="/logo.png" alt="Dr Seffar Hicham Logo" className="h-16 w-auto object-contain" />
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
  );
}
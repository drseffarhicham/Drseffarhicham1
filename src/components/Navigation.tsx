import { useState } from 'react';
import { Menu, X, Home, User, Stethoscope, MessageCircle, BookOpen, Phone } from 'lucide-react';
import LanguageSelector from './LanguageSelector';

interface NavigationProps {
  scrollToSection: (id: string) => void;
}

export default function Navigation({ scrollToSection }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  const menuItems = [
    { id: 'accueil', label: 'Accueil', icon: Home },
    { id: 'apropos', label: 'À propos', icon: User },
    { id: 'services', label: 'Services', icon: Stethoscope },
    { id: 'temoignages', label: 'Témoignages', icon: MessageCircle },
    { id: 'articles', label: 'Articles', icon: BookOpen },
    { id: 'contact', label: 'Contact', icon: Phone }
  ];

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img src="/logo.png" alt="Dr Seffar Hicham Logo" className="h-16 w-auto object-contain" />
            </div>
            <div>
              <span className="text-lg sm:text-xl font-bold text-gray-900 block leading-tight">Dr Seffar Hicham</span>
              <span className="text-xs text-clinic-green-700 font-medium">Gynécologue Obstétricien</span>
            </div>
          </div>

          {/* Navigation Desktop */}
          <div className="hidden md:flex space-x-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-clinic-green-700 transition-all duration-200 font-medium rounded-lg hover:bg-clinic-green-50 group"
                >
                  <Icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  <span>{item.label}</span>
                </button>
              );
            })}
            <div className="flex items-center ml-2 border-l border-gray-100 pl-2">
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
                  className="flex items-center space-x-3 w-full text-left px-3 py-3 text-gray-700 hover:bg-clinic-green-50 hover:text-clinic-green-700 rounded-xl transition-all duration-200 group"
                >
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-clinic-green-100 group-hover:text-clinic-green-700 transition">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
          
          {/* Info supplémentaire mobile */}
          <div className="px-4 py-3 border-t border-gray-100 bg-gray-50 flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="h-4 w-4 text-clinic-green-700" />
              <span>0528 33 55 66</span>
            </div>
            <LanguageSelector />
          </div>
        </div>
      )}
    </nav>
  );
}
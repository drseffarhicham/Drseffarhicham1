import { useState, useEffect } from 'react';
import { Globe, ChevronDown } from 'lucide-react';

const languages = [
  { code: 'fr', label: 'FR', name: 'Français', flag: 'https://flagcdn.com/w20/fr.png' },
  { code: 'en', label: 'EN', name: 'English', flag: 'https://flagcdn.com/w20/gb.png' },
  { code: 'ar', label: 'AR', name: 'العربية', flag: 'https://flagcdn.com/w20/ma.png' }
];

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('fr');

  useEffect(() => {
    // Prevent multiple scripts
    if (!document.getElementById('google-translate-script')) {
      const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'fr',
            includedLanguages: 'ar,fr,en',
            autoDisplay: false,
          },
          'google_translate_element'
        );
      };

      window.googleTranslateElementInit = googleTranslateElementInit;

      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const changeLanguage = (langCode: string) => {
    setCurrentLang(langCode);
    setIsOpen(false);

    // Set RTL for Arabic
    if (langCode === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = langCode;
    }

    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event('change'));
    }
  };

  const currentLanguage = languages.find(l => l.code === currentLang) || languages[0];

  return (
    <div className="relative inline-block text-left ml-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-gray-50 hover:bg-clinic-green-50 text-gray-700 hover:text-clinic-green-700 transition-all duration-300 border border-transparent hover:border-clinic-green-100 group"
      >
        <Globe className="h-4 w-4 text-clinic-green-700 group-hover:rotate-12 transition-transform" />
        <span className="font-bold text-xs tracking-wider uppercase">{currentLanguage.label}</span>
        <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="absolute right-0 mt-2 w-48 bg-white/95 backdrop-blur-md border border-gray-100 rounded-2xl shadow-xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="py-1">
              <div className="px-4 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-50">
                Choisir la langue
              </div>
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`flex items-center justify-between w-full px-4 py-3 text-sm transition-colors duration-200 ${
                    currentLang === lang.code 
                    ? 'bg-clinic-green-50 text-clinic-green-700' 
                    : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <img src={lang.flag} alt={lang.name} className="w-5 h-3.5 object-cover rounded shadow-sm" />
                    <span className="font-medium">{lang.name}</span>
                  </div>
                  {currentLang === lang.code && (
                    <div className="w-1.5 h-1.5 rounded-full bg-clinic-green-500 shadow-[0_0_8px_rgba(0,150,119,0.5)]"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Hidden Translate Element required by Google */}
      <div id="google_translate_element" className="absolute opacity-0 pointer-events-none -z-10 h-0 w-0"></div>
    </div>
  );
}

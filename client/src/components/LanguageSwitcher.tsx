import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "en", label: t("language.en"), flag: "🇺🇸" },
    { code: "fr", label: t("language.fr"), flag: "🇫🇷" },
    { code: "ar", label: t("language.ar"), flag: "🇸🇦" }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    document.documentElement.dir = languageCode === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = languageCode;
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  // Set initial document direction based on language
  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="relative" ref={wrapperRef}>
      <button 
        onClick={toggleDropdown} 
        className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>{currentLanguage.flag}</span>
        <span className="hidden sm:block">{currentLanguage.label}</span>
        <i className={`fas fa-chevron-down text-xs transition-transform ${isOpen ? 'rotate-180' : ''}`}></i>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 py-2 bg-white dark:bg-gray-900 rounded-md shadow-lg z-50 ring-1 ring-black ring-opacity-5 focus:outline-none">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              className={`flex items-center gap-3 w-full text-left px-4 py-2 text-sm ${
                i18n.language === language.code 
                  ? 'bg-primary/10 text-primary' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <span>{language.flag}</span>
              <span>{language.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
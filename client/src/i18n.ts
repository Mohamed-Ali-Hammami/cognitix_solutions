import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import locale files
import enTranslation from './locales/en.json';
import deTranslation from './locales/de.json';
import frTranslation from './locales/fr.json';
import arTranslation from './locales/ar.json';

// Set up i18next configurations
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      de: {
        translation: deTranslation
      },
      fr: {
        translation: frTranslation
      },
      ar: {
        translation: arTranslation
      }
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    react: {
      useSuspense: false, // Prevents warning during development
    },
  });

// Set initial HTML language attribute based on the selected language
document.documentElement.lang = i18n.language;

// Set initial text direction (LTR for English, French, German, RTL for Arabic)
document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';

export default i18n;
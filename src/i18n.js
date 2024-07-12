import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en/translation.json';
import arTranslations from './locales/ar/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      ar: {
        translation: arTranslations,
      },
    },
    lng: 'en', // Set the default language here
    fallbackLng: 'en', // Fallback language if a translation key is missing
    interpolation: {
      escapeValue: false, // React already escapes strings
    },
  });

export default i18n;

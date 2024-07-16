import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en/translation.json';
import ruTranslation from './locales/ru/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      EN: {
        translation: enTranslation,
      },
      RU: {
        translation: ruTranslation,
      },
    },
    lng: 'EN',
    fallbackLng: 'EN',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

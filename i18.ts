import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

// Import translation files
import translationEN from "./src/locales/en/translation.json";
import translationRU from "./src/locales/ru/translation.json";
import translationUz from "./src/locales/uz/translation.json";

// The translations
const resources = {
  en: {
    translation: translationEN
  },
  ru: {
    translation: translationRU
  },
  uz: {
    translation: translationUz
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    lng: localStorage.getItem("lng") || "ru",
    debug: true,
    interpolation: {
      escapeValue: false // React already safes from xss
    }
  });

export default i18n;

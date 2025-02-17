import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locale/en.json";
import ar from "./locale/no.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    ar: {
      translation: ar,
    },
  },
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

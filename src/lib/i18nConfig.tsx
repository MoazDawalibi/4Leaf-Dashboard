import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationAR from "../translate/ar.json";

const resources = {
  ar: {
    translation: translationAR,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ar", // Set the default language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

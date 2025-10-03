import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import pt from "./locales/pt.json";
import en from "./locales/en.json";
import br from "./locales/br.json";

i18n.use(initReactI18next).init({
  lng: "pt", // idioma padrão
  fallbackLng: "pt",
  resources: {
    pt: { translation: pt },
    en: { translation: en },
    br: { translation: br },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

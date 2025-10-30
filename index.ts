import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";

import en from "@/components/src/i18n/locales/en.json";
import pt from "@/components/src/i18n/locales/pt.json";
import fr from "@/components/src/i18n/locales/fr.json";

i18n
    .use(initReactI18next)
    .init({
        compatibilityJSON: "v4",
        lng: Localization.getLocales()[0].languageCode || "en",
        fallbackLng: "en",
        resources: {
            en: { translation: en },
            pt: { translation: pt },
            fr: { translation: fr },
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;

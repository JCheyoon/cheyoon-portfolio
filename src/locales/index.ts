import i18n, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en.json";
import ko from "./ko.json";

const resources: Resource = {
  en: {
    translation: en,
  },
  ko: {
    translation: ko,
  },
};
i18n.use(initReactI18next).init({
  resources,
  lng: "ko", // initial language
  fallbackLng: {
    "en-US": ["en"],
    default: ["ko"],
  },
  debug: true,
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});
export default i18n;

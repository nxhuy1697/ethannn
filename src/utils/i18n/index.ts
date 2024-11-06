import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enLang from "./locales/en/en.json";

import viLang from "./locales/vi/vi.json";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
// const resources = {
//   en: {
//     translation: enLang
//   },
//   vi:{
//     translation: viLang
//   }
// };

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: enLang
      },
      vi:{
        translation: viLang
      }
    },
    // fallbackLng: 'en',   
    lng: "vi", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    // fallbackLng sử dụng khi định nghĩa lang bị sai sẽ về mặc định hoặc backup (ví dụ ở đây là "en")
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;
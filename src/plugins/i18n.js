import Vue from "vue";
import VueI18n from "vue-i18n";
import en from "../language/en";
import vi from "../language/vi";

Vue.use(VueI18n);

const messages = {
  en: en,
  vi: vi,
};

const i18n = new VueI18n({
  locale: localStorage.getItem("language") || "en", // set locale
  fallbackLocale: localStorage.getItem("language") || "en", // set fallback locale
  messages, // set locale messages
});

export default i18n;

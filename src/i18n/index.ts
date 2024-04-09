import { createI18n } from 'vue-i18n'
import vi from '@/i18n/locales/vi.json'

export default createI18n({
  locale: import.meta.env.VITE_DEFAULT_LOCALE,
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  legacy: false,
  messages: {
    vi,
  },
})

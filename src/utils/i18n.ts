import i18n from '@/i18n'
import { nextTick } from 'vue'
import type {
  NavigationGuardNext,
  RouteLocationNormalized,
  RouteLocationRaw,
} from 'vue-router'
import type { ELocale } from '@/constants/locale'

export const I18nUtils = {
  get supportedLocales() {
    return import.meta.env.VITE_SUPPORTED_LOCALES.split(',')
  },

  isLocaleSupported(locale: string | null): boolean {
    if (!locale) return false
    return I18nUtils.supportedLocales.includes(locale)
  },

  getUserLocale() {
    const locale =
      window.navigator.language ||
      window.navigator.userLanguage ||
      I18nUtils.defaultLocale
    return {
      locale: locale,
      localeNoRegion: locale.split('-')[0],
    }
  },

  get defaultLocale() {
    return import.meta.env.VITE_DEFAULT_LOCALE
  },

  guessDefaultLocale() {
    const userPersistedLocale = I18nUtils.getPersistedLocale()
    if (userPersistedLocale) {
      return userPersistedLocale
    }
    const userPreferredLocale = I18nUtils.getUserLocale()
    if (I18nUtils.isLocaleSupported(userPreferredLocale.locale)) {
      return userPreferredLocale.locale
    }
    if (I18nUtils.isLocaleSupported(userPreferredLocale.localeNoRegion)) {
      return userPreferredLocale.localeNoRegion
    }

    return I18nUtils.defaultLocale
  },

  async loadLocaleMessages(locale: ELocale) {
    // @ts-ignore
    if (!i18n.global.availableLocales.includes(locale)) {
      const messages = await import(`@/i18n/locales/${locale}.json`)
      i18n.global.setLocaleMessage(locale, messages.default)
    }
    return nextTick()
  },

  getPersistedLocale(): string | null {
    const persistedLocale = localStorage.getItem('user-locale')
    if (I18nUtils.isLocaleSupported(persistedLocale)) {
      return persistedLocale
    } else {
      return null
    }
  },

  get currentLocale() {
    return i18n.global.locale.value as ELocale
  },

  set currentLocale(newLocale: ELocale) {
    // @ts-ignore
    i18n.global.locale.value = newLocale
  },

  async switchLanguage(newLocale: ELocale) {
    await I18nUtils.loadLocaleMessages(newLocale)
    I18nUtils.currentLocale = newLocale
    document?.querySelector('html')?.setAttribute('lang', newLocale)
    localStorage.setItem('user-locale', newLocale)
  },

  async routeMiddleware(
    to: RouteLocationNormalized,
    _from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) {
    const paramLocale = to.params.locale as ELocale
    if (!paramLocale || !I18nUtils.isLocaleSupported(paramLocale)) {
      return next(I18nUtils.guessDefaultLocale())
    }
    await I18nUtils.switchLanguage(paramLocale)
    return next()
  },

  i18nRouteByName(to: RouteLocationNormalized) {
    return {
      ...to,
      params: {
        locale: I18nUtils.currentLocale,
        ...to.params,
      },
    }
  },

  i18nRouteByPath(to: RouteLocationRaw) {
    return `/${I18nUtils.currentLocale}${to}`
  },
}

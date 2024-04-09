interface ImportMetaEnv {
  readonly VITE_APP_NAME: string
  readonly VITE_DMS_API: string
  readonly VITE_UPLOAD_API: string
  readonly VITE_DEFAULT_LOCALE: string
  readonly VITE_FALLBACK_LOCALE: string
  readonly VITE_SUPPORTED_LOCALES: string
  // Tuanba:6-3-2024: Soha CMS
  readonly VITE_SOHA_API: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

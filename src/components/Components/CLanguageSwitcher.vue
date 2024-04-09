<template>
  <select @change="switchLanguage">
    <option
      v-for="sLocale in supportedLocales"
      :key="sLocale.value"
      :value="sLocale.value"
      :selected="locale === sLocale.value"
    >
      {{ sLocale.label }}
    </option>
  </select>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { I18nUtils } from '@/utils'
import { UseDmsRouter } from '@/composables'
import { ELocale } from '@/constants'

const { locale } = useI18n()
const router = UseDmsRouter()
const supportedLocales = [
  {
    label: 'Vi',
    value: ELocale.vi,
  },
  {
    label: 'En',
    value: ELocale.en,
  },
]
const switchLanguage = async (event: Event) => {
  if (!event) return
  const target = event.target as HTMLInputElement
  const newLocale = target.value as ELocale
  await I18nUtils.switchLanguage(newLocale)
  try {
    await router.replace({ params: { locale: newLocale } })
  } catch (e) {
    await router.replaceByPath('/')
  }
}
</script>

import type { Directive } from 'vue'

export const uppercase: Directive = {
  mounted(el) {
    el.addEventListener('input', (e: { target: HTMLInputElement }) => {
      const target = e.target as HTMLInputElement
      target.value = target.value.toUpperCase()
    })
  },
}
export const uppercaseTrim: Directive = {
  mounted(el) {
    el.addEventListener('input', (e: { target: HTMLInputElement }) => {
      const target = e.target as HTMLInputElement
      target.value = target.value.toUpperCase().trim().replace(/\s/g, '')
    })
  },
}

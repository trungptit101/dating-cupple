<template>
  <svg :id="'barcode-' + props.id"></svg>
</template>

<script lang="ts" setup>
import JsBarcode from 'jsbarcode'
import { nextTick, watch } from 'vue'

type PropType = {
  height?: number
  value: string | number | null
  fontSize?: number
  background?: string
  lineColor?: string
  displayValue?: boolean
  id: string | number
}
const props = withDefaults(defineProps<PropType>(), {
  height: 30,
  value: '',
  fontSize: 10,
  background: 'transparent',
  lineColor: '#000000',
  displayValue: true,
  id: '',
})
watch(
  () => props.value,
  async (val) => {
    if (val) {
      await nextTick()
      JsBarcode(`#barcode-${props.id}`, val.toString(), {
        height: props.height,
        fontSize: props.fontSize,
        background: props.background,
        lineColor: props.lineColor,
        displayValue: props.displayValue,
        margin: 0,
        width: 1,
      })
    }
  },
  {
    immediate: true,
  }
)
// onMounted(() => {
//   if (value.value) {
//     JsBarcode(`#barcode-${props.id}`, value.value.toString(), {
//       height: props.height,
//       fontSize: props.fontSize,
//       background: props.background,
//       lineColor: props.lineColor,
//       displayValue: props.displayValue,
//       margin: 0,
//       width: 1,
//     })
//   }
// })
</script>

<style scoped lang="scss"></style>

<template>
  <el-date-picker
    :disabled="props.disabled"
    v-model="model"
    type="daterange"
    :range-separator="props.rangeSeparator"
    :start-placeholder="props.startPlaceholder"
    :end-placeholder="props.endPlaceholder"
    :format="VI_DATE_FORMAT"
    clearable
  />
</template>

<script lang="ts" setup>
import { VI_DATE_FORMAT } from '@/constants'
import { computed } from 'vue'
import { formatViDate, formatViDateElementPlus } from '@/utils'

type PropType = {
  disabled?: boolean
  from?: string | null
  to?: string | null
  startPlaceholder?: string
  endPlaceholder?: string
  rangeSeparator?: string
}
const props = withDefaults(defineProps<PropType>(), {
  disabled: false,
  from: null,
  to: null,
  startPlaceholder: 'Từ',
  endPlaceholder: 'đến',
  rangeSeparator: '~',
})
const emit = defineEmits<{
  (e: 'update:from', value: string | null): void
  (e: 'update:to', value: string | null): void
}>()
const model = computed({
  get() {
    return [
      formatViDateElementPlus(props.from),
      formatViDateElementPlus(props.to),
    ]
  },
  set(newValue: string[] | null) {
    if (!newValue) {
      emit('update:from', null)
      emit('update:to', null)
    } else {
      const _from = formatViDate(newValue[0])
      const _to = formatViDate(newValue[1])
      emit('update:from', _from)
      emit('update:to', _to)
    }
  },
})
// const onChange = () => {
//   if (!model.value) {
//     emit('update:from', null)
//     emit('update:to', null)
//   } else {
//     const _from = formatViDate(model.value[0])
//     const _to = formatViDate(model.value[1])
//     emit('update:from', _from)
//     emit('update:to', _to)
//   }
// }
</script>

<style scoped lang="scss"></style>

<template>
  <el-date-picker
    :disabled="props.disabled"
    v-model="model"
    type="date"
    :placeholder="props.placeholder"
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
  placeholder?: string
}
const props = withDefaults(defineProps<PropType>(), {
  disabled: false,
  from: null,
  placeholder: 'Vui lòng chọn',
})
const emit = defineEmits<{
  (e: 'update:from', value: string | null): void
}>()
const model = computed({
  get() {
    return formatViDateElementPlus(props.from)
  },
  set(newValue: string | null) {
    if (!newValue) {
      emit('update:from', null)
    } else {
      const _from = formatViDate(newValue)
      emit('update:from', _from)
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

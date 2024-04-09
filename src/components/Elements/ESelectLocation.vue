<template>
  <el-select
    :model-value="props.modelValue"
    @change="onChange"
    :placeholder="placeholder"
    clearable
    class="e-select"
    loading-text="Đang tải..."
    no-match-text="Không có dữ liệu"
    no-data-text="Không có dữ liệu"
  >
    <el-option
      v-for="location in props.items"
      :key="location.id"
      :value="location.id"
      :label="location.name"
    />
  </el-select>
</template>

<script lang="ts" setup>
import type { ILocationItem } from '@/types/location'

type PropType = {
  disabled?: boolean
  modelValue: number | null | string
  placeholder?: string
  items: ILocationItem[]
}
const props = withDefaults(defineProps<PropType>(), {
  disabled: false,
  modelValue: null,
  placeholder: '',
  items: () => [],
})
const emit = defineEmits<{
  (e: 'update:modelValue', value: number | string | null): void
  (e: 'change', value: number | string | null): void
}>()
const onChange = (e: number | string | null) => {
  emit('update:modelValue', e)
  emit('change', e)
}
</script>

<style scoped lang="scss">
.e-select {
  width: 100%;
}
</style>

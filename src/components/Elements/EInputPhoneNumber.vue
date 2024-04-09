<template>
  <el-input
    :model-value="props.modelValue"
    :placeholder="props.placeholder"
    :disabled="props.disabled"
    @input="onInput"
  >
    <template #prepend v-if="$slots.prepend">
      <slot name="prepend" />
    </template>
    <template #append v-if="$slots.append">
      <slot name="append" />
    </template>
    <template #prefix v-if="$slots.prefix">
      <slot name="prefix" />
    </template>
  </el-input>
</template>

<script lang="ts" setup>
type PropType = {
  modelValue?: null | string
  disabled?: boolean
  placeholder?: string
}
const props = withDefaults(defineProps<PropType>(), {
  modelValue: null,
  disabled: false,
  placeholder: '',
})
const emit = defineEmits<{
  (e: 'update:modelValue', value: string | null): void
  (e: 'change', value: string | null): void
}>()
const isNumber = (value: string) => {
  return /\d/.test(value)
}
const onInput = (e: string) => {
  if (e && !isNumber(e)) return
  emit('update:modelValue', e.trim() || '')
}
</script>

<style scoped></style>

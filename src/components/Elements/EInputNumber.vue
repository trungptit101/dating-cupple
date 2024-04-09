<template>
  <el-input
    :model-value="props.modelValue"
    :placeholder="props.placeholder"
    :disabled="props.disabled"
    type="number"
    @input="onInput"
  >
    <template #prepend v-if="$slots.prepend">
      <slot name="prepend" />
    </template>
    <template #append v-if="$slots.append">
      <slot name="append" />
    </template>
  </el-input>
</template>

<script lang="ts" setup>
type PropType = {
  modelValue?: number | null | string
  disabled?: boolean
  placeholder?: string
  min?: number | null
  max?: number | null
}
const props = withDefaults(defineProps<PropType>(), {
  modelValue: null,
  disabled: false,
  placeholder: '',
  min: null,
  max: null,
})
const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number | null): void
  (e: 'change', value: string | number | null): void
}>()
const onInput = (e: string) => {
  emit('update:modelValue', e === null || e === '' ? null : Math.abs(Number(e)))
}
</script>

<style scoped></style>

<template>
  <el-select
    :model-value="props.modelValue"
    :placeholder="placeholder"
    :disabled="props.disabled"
    :multiple="props.multiple"
    :filterable="props.filterable"
    :remote="props.remote"
    :loading="props.loading"
    :clearable="props.clearable"
    :reserve-keyword="props.reserveKeyword"
    :remote-show-suffix="props.remoteShowSuffix"
    :remote-method="remoteMethod"
    loading-text="Đang tải..."
    no-match-text="Không có dữ liệu"
    no-data-text="Không có dữ liệu"
    @change="onChange"
    class="e-select__select"
  >
    <el-option
      v-for="(item, index) in props.items"
      :key="index"
      :label="item[props.itemLabel]"
      :value="item[props.itemValue]"
      class="e-select__option"
      :style="styleOption"
    />
  </el-select>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

type PropType<ItemType> = {
  items: Array<ItemType>
  modelValue?: string | number | null
  itemLabel: string
  itemValue: string
  disabled?: boolean
  placeholder?: string
  multiple?: boolean
  filterable?: boolean
  remote?: boolean
  remoteShowSuffix?: boolean
  reserveKeyword?: boolean
  loading?: boolean
  clearable?: boolean
  remoteMethod?: Function
  maxWidth?: string
}
const props = withDefaults(defineProps<PropType<Object>>(), {
  items: () => [],
  modelValue: null,
  itemLabel: '',
  itemValue: '',
  disabled: false,
  placeholder: '',
  multiple: false,
  filterable: false,
  remote: false,
  remoteShowSuffix: false,
  reserveKeyword: false,
  loading: false,
  clearable: true,
  remoteMethod: () => {},
  maxWidth: 'unset',
})
const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number | null): void
  (e: 'change', value: string | number | null): void
}>()
const onChange = (e: string | number | null) => {
  emit('update:modelValue', e)
  emit('change', e)
}
const styleOption = computed(() => ({
  maxWidth: props.maxWidth,
}))
</script>

<style scoped lang="scss"></style>

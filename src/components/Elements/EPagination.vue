<template>
  <el-pagination
    :current-page="props.currentPage"
    :page-size="props.pageSize"
    :page-sizes="PageSizesPagination"
    :disabled="props.disabled"
    layout="prev, pager, next, sizes"
    :total="props.total"
    background
    @size-change="onChangeSize"
    @current-change="onChangeCurrent"
  />
</template>

<script lang="ts" setup>
import { PageSize, PageSizesPagination } from '@/constants'

type PropType = {
  disabled?: boolean
  total: number
  currentPage: number
  pageSize: number
}
const props = withDefaults(defineProps<PropType>(), {
  disabled: false,
  total: 0,
  currentPage: 1,
  pageSize: PageSize,
})
const emit = defineEmits<{
  (e: 'size-change', value?: number): void
  (e: 'update:pageSize', value?: number): void
  (e: 'current-change', value?: number): void
  (e: 'update:currentPage', value?: number): void
}>()
const onChangeSize = (e: number) => {
  emit('update:pageSize', e)
  emit('size-change', e)
}
const onChangeCurrent = (e: number) => {
  emit('update:currentPage', e)
  emit('current-change', e)
}
</script>

<style scoped lang="scss"></style>

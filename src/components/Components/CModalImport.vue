<template>
  <el-dialog
    v-model="visible"
    :width="cWidth"
    :show-close="false"
    :before-close="close"
    center
    class="mdl"
  >
    <div class="mdl__content">
      <div class="mdl__title d-flex align-items-center justify-between mb-24">
        <span>Import file</span
        ><el-button type="info" @click="onDownloadTemplate">
          <i class="icon-import mr-8"></i>
          <span>Tải file mẫu</span>
        </el-button>
      </div>
      <div class="mdl__upload">
        <e-upload-area-local
          :format="EFileType.document"
          @change="onUploadFile"
          :multiple="cMultiple"
        />
      </div>
      <div v-if="files?.length" class="mdl__files">
        <div
          v-for="(file, index) in files"
          :key="index"
          class="mdl__files__item d-flex align-items-center justify-center"
        >
          <i class="icon-document-1 mr-8"></i>
          <span class="mr-10">{{ file.name }}</span>
          <img
            src="@/assets/svgs/remove.svg"
            alt=""
            @click="onRemoveFile(index)"
          />
        </div>
      </div>
    </div>
    <template #footer>
      <span class="d-flex align-items-center justify-center">
        <el-button @click="close" class="mdl__btn">Huỷ bỏ</el-button>
        <el-button
          type="primary"
          class="mdl__btn"
          @click="confirm"
          :disabled="!files?.length"
          :loading="loading"
        >
          Lưu lại
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { EUploadAreaLocal } from '@/components/Elements'
import { EFileType } from '@/constants'

type ArgType = {
  template: string
  width?: string
  multiple?: boolean
}
const cWidth = ref<string>('700px')
const cTemplate = ref<string>('')
const cMultiple = ref<boolean>(false)
const visible = ref<boolean>(false)
const files = ref<File[]>([])
const loading = ref<boolean>(false)
const emit = defineEmits<{
  (e: 'confirm', data: File[]): void
}>()
const close = () => {
  visible.value = false
  cTemplate.value = ''
  cWidth.value = ''
  cMultiple.value = false
  files.value = []
  loading.value = false
}
const open = ({ template, width, multiple }: ArgType) => {
  visible.value = true
  cTemplate.value = template
  cWidth.value = width || '700px'
  cMultiple.value = multiple || false
}
const changeLoading = (val: boolean) => {
  loading.value = val
}
const onUploadFile = (e: File) => {
  if (cMultiple?.value) {
    files.value.push(e)
  } else {
    files.value[0] = e
  }
}
const onDownloadTemplate = () => {
  window.location.href = cTemplate.value
}
const onRemoveFile = (index: number) => {
  if (cMultiple?.value) {
    files.value.splice(index, 1)
    files.value = [...files.value]
  } else {
    files.value = []
  }
}
const confirm = () => {
  emit('confirm', files.value)
}
defineExpose<{
  open: (arg: ArgType) => void
  confirm: () => void
  close: () => void
  changeLoading: (val: boolean) => void
}>({
  open,
  confirm,
  close,
  changeLoading,
})
</script>

<style scoped lang="scss">
.mdl {
  &__title {
    color: var(--text-primary);
    font-size: 24px;
    font-weight: 600;
    text-align: center;
  }
  &__content {
    margin-top: -34px;
  }
  &__btn {
    width: 200px;
  }
  &__files {
    margin-top: 16px;
    &__item {
      width: fit-content;
      background-color: var(--background-secondary);
      padding: 8px;
      border-radius: 8px;
      margin-bottom: 8px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>

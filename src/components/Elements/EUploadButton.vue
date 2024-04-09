<template>
  <div>
    <input
      type="file"
      ref="uploadRef"
      hidden
      :multiple="multiple"
      @change="onUpload"
    />
    <div
      class="uploader d-inline-flex justify-center align-items-center rounded-sm flex-col"
      :style="style"
      @click="onTrigger"
    >
      <i class="icon-export-2"></i>
      <span v-if="props.title">{{ props.title }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import type { IUploadResponse } from '@/types/upload'
import {
  formatFileNameBeforeUpload,
  validateFileSize,
  validateFileType,
} from '@/utils'
import { ElNotification } from 'element-plus'
import UploadService from '@/services/UploadService'
import { EFileType } from '@/constants'

const uploadRef = ref<HTMLInputElement>()
const props = withDefaults(
  defineProps<{
    multiple?: boolean
    size?: string
    title?: string
    format?: EFileType
  }>(),
  {
    multiple: false,
    size: '80px',
    title: '',
    format: EFileType.image,
  }
)
const style = computed(() => {
  return {
    width: props.size,
    height: props.size,
  }
})
const emit = defineEmits<{
  (e: 'change', data: IUploadResponse): void
}>()
const onTrigger = () => {
  uploadRef.value?.click()
}
const onUpload = (event: Event) => {
  if (!event) return
  const target = event.target as HTMLInputElement
  if (target && target.files) {
    if (props.multiple) {
      for (const file of Array.from(target.files)) {
        uploadFile(file)
      }
    } else {
      uploadFile(target.files[0])
    }
  }
}
const uploadFile = async (file: File) => {
  if (!file) return
  const formData = new FormData()
  const fileName = formatFileNameBeforeUpload(file.name)
  formData.append('content', file, fileName)
  if (!validateFileType(file, props.format)) {
    return ElNotification({
      title: 'Định dạng không đúng',
      message: 'Xin vui lòng thử lại',
      type: 'error',
    })
  }
  if (!validateFileSize(file)) {
    return ElNotification({
      title: 'Dung lượng không vượt quá 5Mb',
      message: 'Xin vui lòng thử lại',
      type: 'error',
    })
  }
  try {
    const { status, data } = await UploadService.upload(formData)
    if (status === 200) {
      emit('change', data)
    }
  } catch (e) {
    console.log(e)
  } finally {
    const value = uploadRef.value
    if (value && value.value) {
      value.value = ''
    }
  }
}
</script>

<style scoped lang="scss">
.uploader {
  color: var(--text-secondary);
  cursor: pointer;
  background-color: var(--background-secondary);
  i {
    font-size: 24px;
  }
  span {
    font-size: 14px;
  }
}
</style>

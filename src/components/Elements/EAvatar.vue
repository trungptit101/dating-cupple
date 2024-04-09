<template>
  <div>
    <input type="file" ref="uploadRef" hidden @change="onUpload" />
    <div
      class="uploader d-inline-flex justify-center align-items-center rounded-full relative"
      :style="style"
    >
      <img v-if="props.modelValue" :src="props.modelValue" alt="" />
      <img v-else src="@/assets/svgs/avatar-blank.svg" alt="" />
      <div
        class="uploader__ref d-flex align-items-center justify-center"
        @click="onTrigger"
      >
        <i class="icon-camera" />
      </div>
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
    modelValue: null | string
    size?: string
  }>(),
  {
    size: '80px',
    modelValue: '',
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
  (e: 'update:modelValue', url: string): void
}>()
const onTrigger = () => {
  uploadRef.value?.click()
}
const onUpload = (event: Event) => {
  if (!event) return
  const target = event.target as HTMLInputElement
  if (target && target.files) {
    uploadFile(target.files[0])
  }
}
const uploadFile = async (file: File) => {
  if (!file) return
  const formData = new FormData()
  const fileName = formatFileNameBeforeUpload(file.name)
  formData.append('content', file, fileName)
  if (!validateFileType(file, EFileType.image)) {
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
      emit('update:modelValue', data.url)
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
  border-radius: 50%;
  overflow: hidden;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  i {
    font-size: 24px;
  }
  &__ref {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    background: rgba(55, 73, 87, 0.5);
    height: 36px;
    color: var(--text-primary-reverse);
  }
}
</style>

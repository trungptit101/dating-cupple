<template>
  <el-upload
    class="uploader"
    drag
    :multiple="props.multiple"
    :http-request="onUpload"
    :show-file-list="false"
  >
    <img src="@/assets/svgs/documents.svg" />
    <div class="uploader__text mt-16 mb-16">Kéo thả file của bạn hoặc</div>
    <div class="uploader__btn d-flex align-items-center justify-center">
      <el-button type="primary">Chọn tệp tin</el-button>
    </div>
  </el-upload>
</template>

<script lang="ts" setup>
import type { IUploadResponse } from '@/types/upload'
import {
  formatFileNameBeforeUpload,
  validateFileSize,
  validateFileType,
} from '@/utils'
import { EFileType } from '@/constants'
import { ElNotification } from 'element-plus'
import type { UploadRequestOptions } from 'element-plus'
import UploadService from '@/services/UploadService'

const props = withDefaults(
  defineProps<{
    multiple?: boolean
    format?: EFileType
  }>(),
  {
    multiple: true,
    format: EFileType.image,
  }
)
const emit = defineEmits<{
  (e: 'change', data: IUploadResponse): void
}>()
const onUpload = (event: UploadRequestOptions) => {
  if (!event) return
  uploadFile(event.file)
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
  }
}
</script>

<style scoped lang="scss">
.uploader {
  &__text {
    color: var(--text-primary);
    font-size: 14px;
  }
}
</style>

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
      <div class="mdl__title">{{ cTitle }}</div>
      <div
        v-if="cType === EModalConfirmType.delete"
        class="mdl__icon mdl__icon--delete d-flex align-items-center justify-center rounded-full"
      >
        <i class="icon-trash-2"></i>
      </div>
      <div v-if="cMessage" class="mdl__description" v-html="cMessage"></div>
    </div>
    <template #footer>
      <span class="d-flex align-items-center justify-center">
        <el-button @click="actionClose" class="mdl__btn">Huỷ bỏ</el-button>
        <el-button type="primary" class="mdl__btn" @click="confirm">
          Xác nhận
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { EModalConfirmType } from '@/constants'

type ArgType = {
  id: number | string | null
  title: string
  width?: string
  message: string
  type?: EModalConfirmType
}
const emit = defineEmits<{
  (e: 'confirm', value: number | string | null): void
  (e: 'close', value: number | string | null): void
}>()
const visible = ref<boolean>(false)
const cId = ref<number | string | null>(null)
const cTitle = ref<string>('')
const cMessage = ref<string>('')
const cWidth = ref<string>('700px')
const cType = ref<EModalConfirmType>(EModalConfirmType.delete)
const actionClose = () => {
  close()
  closeEvent()
}
const close = () => {
  visible.value = false
  cId.value = null
  cTitle.value = ''
  cMessage.value = ''
  cWidth.value = ''
}
const closeEvent = () => {
  console.log(1111222)
  emit('close', null)
}
const open = ({ id, title, message, width, type }: ArgType) => {
  visible.value = true
  cId.value = id || null
  cTitle.value = title || ''
  cMessage.value = message || ''
  cWidth.value = width || '700px'
  cType.value = type || EModalConfirmType.delete
}
const confirm = () => {
  emit('confirm', cId.value || null)
}
defineExpose<{
  open: (arg: ArgType) => void
  confirm: () => void
  close: () => void
  closeEvent: () => void
}>({
  open,
  confirm,
  close,
  closeEvent,
})
</script>

<style scoped lang="scss">
.mdl {
  &__title {
    color: var(--text-primary);
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    margin: 0 0 32px 0;
  }
  &__icon {
    width: 80px;
    height: 80px;
    margin: auto;
    color: var(--text-primary-reverse);
    &--delete {
      background-color: var(--danger);
      border: 5px solid var(--danger-10);
    }
    i {
      font-size: 44px;
    }
  }
  &__content {
    margin-top: -34px;
  }
  &__description {
    text-align: center;
    color: var(--text-primary);
    margin-top: 16px;
  }
  &__btn {
    width: 200px;
  }
}
</style>

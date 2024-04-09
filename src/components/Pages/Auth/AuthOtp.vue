<template>
  <div class="form p-32">
    <div class="form__back mb-16">
      <i class="icon-Arrow-Left" @click="() => emit('back')" />
    </div>
    <div class="form__title mb-8">Nhập mã OTP</div>
    <div class="form__description mb-24">
      Mã xác nhận OTP đã được gửi đến số điện thoại
      <span class="form__phone">{{ props.phone }}</span>
    </div>
    <div
      class="form__otp d-flex align-items-center justify-between mb-24"
      ref="otpRef"
    >
      <input
        type="text"
        class="form__otp__item d-flex align-items-center justify-center"
        v-for="(el, ind) in digits"
        :key="el + ind"
        v-model="digits[ind]"
        :autofocus="ind === 0"
        :placeholder="ind + 1"
        maxlength="1"
        @keydown="handleKeyDown($event, ind)"
      />
    </div>
    <div class="d-flex align-items-center justify-between">
      <span class="form__phone form__resend">Gửi lại</span>
      <el-button
        class="form__btn"
        type="primary"
        @click="onSubmit"
        :disabled="!isFullDigit"
        >Tiếp theo</el-button
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import UserService from '@/services/UserService'
import { U3001 } from '@/constants'
import { ElNotification } from 'element-plus'
type PropType = {
  count?: number
  phone: string | null
  token: string | null
}
const props = withDefaults(defineProps<PropType>(), {
  count: 4,
  phone: null,
  token: null,
})
const emit = defineEmits<{
  (e: 'back'): void
  (e: 'submit', id: number): void
}>()
const digits = ref<string[]>([])
const otpRef = ref()
for (let i = 0; i < props.count; i++) {
  digits.value[i] = ''
}
const handleKeyDown = (event: KeyboardEvent, index: number) => {
  if (
    event.key !== 'Tab' &&
    event.key !== 'ArrowRight' &&
    event.key !== 'ArrowLeft'
  ) {
    event.preventDefault()
  }
  if (event.key === 'Backspace') {
    digits.value[index] = ''

    if (index !== 0) {
      otpRef.value.children[index - 1].focus()
    }
    return
  }
  if (new RegExp('^([0-9])$').test(event.key)) {
    digits.value[index] = event.key
    if (index !== props.count - 1) {
      otpRef.value.children[index + 1].focus()
    }
  }
}
const isFullDigit = computed(() => {
  for (const elem of digits.value) {
    if (elem === null || elem === '') {
      return false
    }
  }
  return true
})
const onSubmit = async () => {
  try {
    const { statusCode, data } = await UserService.sendOtpIcheckAccount({
      token: props.token || '',
      otp: digits.value.join(''),
    })
    if (statusCode === U3001) {
      return ElNotification({
        message: 'OTP không chính xác',
        type: 'error',
      })
    }
    if (statusCode === '200') {
      return emit('submit', data.appUserId)
    }
  } catch (e) {
    console.log(e)
  }
}
</script>

<style scoped lang="scss">
.form {
  &__phone {
    color: var(--primary);
  }
  &__resend {
    font-weight: 600;
    cursor: pointer;
  }
  &__back {
    font-size: 50px;
    i {
      cursor: pointer;
    }
  }
  &__otp {
    &__item {
      width: 66px;
      height: 80px;
      border-radius: 6px;
      border: 1px solid var(--line-primary);
      font-size: 32px;
      color: var(--text-primary);
      line-height: 120%;
      text-align: center;
    }
  }
  color: var(--text-primary);
  &__title {
    font-size: 24px;
    font-weight: 600;
    line-height: 120%;
  }
  &__description {
    color: var(--text-secondary);
  }
  &__btn {
    height: 56px;
    width: 250px;
    font-size: 16px;
    font-weight: 600;
  }
}
</style>

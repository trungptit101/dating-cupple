<template>
  <div class="form p-32">
    <img src="@/assets/svgs/dms-by-icheck.svg" alt="" class="mb-24" />
    <div class="form__title mb-4">Đăng ký tài khoản iCheck</div>
    <div class="form__description mb-24">
      Vui lòng cung cấp các thông tin dưới đây để đăng ký tài khoản
    </div>
    <el-form ref="formRef" :model="form" :rules="rules" label-position="top">
      <el-form-item label="Quốc gia" required class="mb-16">
        <div
          class="form__country d-flex justify-start align-items-center w-full"
        >
          Việt Nam
        </div>
      </el-form-item>
      <el-form-item
        label="Số điện thoại"
        required
        class="mb-16"
        prop="phoneNumber"
      >
        <e-input-phone-number
          placeholder="Nhập số điện thoại"
          v-model="form.phoneNumber"
        >
          <template #prepend>
            <img src="@/assets/svgs/flag-vn.svg" alt="" />
            <span class="ml-8">+84</span>
          </template>
        </e-input-phone-number>
      </el-form-item>
      <el-form-item label="Mật khẩu" required class="mb-16" prop="password">
        <el-input
          type="password"
          placeholder="Mật khẩu"
          v-model="form.password"
          show-password
        />
      </el-form-item>
      <el-form-item
        label="Nhập lại mật khẩu"
        required
        class="mb-24"
        prop="confirmPassword"
      >
        <el-input
          type="password"
          placeholder="Mật khẩu"
          v-model="form.confirmPassword"
          show-password
        />
      </el-form-item>
    </el-form>
    <el-button
      type="primary"
      class="mb-24 w-full form__btn"
      @click="onSubmit(formRef)"
      :loading="loading"
      >Đăng ký</el-button
    >
    <div class="form__note">
      Bạn đã có tài khoản iCheck?
      <span class="form__redirect" @click="onNav">Đăng nhập</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { EInputPhoneNumber } from '@/components/Elements'
import type { IRegisterIcheckPayload } from '@/types/auth'
import { rulePassword, rulePhoneNumber } from '@/utils'
import type { FormInstance } from 'element-plus'
import UserService from '@/services/UserService'
import { U3000 } from '@/constants'
import { ElNotification } from 'element-plus'
const formRef = ref<FormInstance>()
const form = ref<IRegisterIcheckPayload>({
  password: '',
  confirmPassword: '',
  phoneNumber: '',
})
import { UseDmsRouter } from '@/composables'

const loading = ref<boolean>(false)
const router = UseDmsRouter()
const emit = defineEmits<{
  (
    e: 'submit',
    payload: {
      phone: string
      token: string
    }
  ): void
}>()
const validateConfirmPassword = (
  rule: Function,
  value: string,
  callback: Function
) => {
  if (value === '') {
    callback(new Error('Nhập lại mật khẩu là bắt buộc'))
  } else if (value !== form.value.password) {
    callback(new Error('Mật khẩu không khớp'))
  } else {
    callback()
  }
}
const rules = ref({
  phoneNumber: [
    rulePhoneNumber({
      required: true,
      trigger: 'change',
    }),
  ],
  password: [
    rulePassword({
      required: true,
      trigger: 'change',
    }),
  ],
  confirmPassword: [
    {
      required: true,
      validator: validateConfirmPassword,
      trigger: 'change',
    },
  ],
})
const onSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid: boolean) => {
    if (valid) {
      loading.value = true
      try {
        const { statusCode, data } = await UserService.createIcheckAccount(
          form.value
        )
        if (statusCode === U3000) {
          return ElNotification({
            message: 'Số điện thoại này đã đăng ký tài khoản iCheck',
            type: 'error',
          })
        }
        if (statusCode === '200') {
          return emit('submit', {
            phone: form.value.phoneNumber || '',
            token: data.token || '',
          })
        }
      } catch (e) {
        console.log(e)
      } finally {
        loading.value = false
      }
    }
  })
}
const onNav = () => {
  return router.pushByPath('/auth/login')
}
</script>

<style scoped lang="scss">
.form {
  color: var(--text-primary);
  &__title {
    font-size: 24px;
    font-weight: 600;
    line-height: 120%;
  }
  &__description {
    color: var(--text-secondary);
    font-size: 14px;
  }
  &__country {
    height: 40px;
    border: 1px solid var(--line-primary);
    border-radius: 8px;
    padding: 14px 12px;
  }
  &__note {
    font-size: 14px;
    color: var(--text-secondary);
  }
  &__redirect {
    color: var(--primary);
    cursor: pointer;
  }
  &__btn {
    height: 56px;
    font-size: 16px;
  }
  &__error {
    color: var(--danger);
    font-size: 14px;
    margin: -8px 0 16px;
  }
}
</style>

<template>
  <div class="form p-32">
    <img src="@/assets/images/arrow-left.png" alt="" class="mb-24" />
    <div class="form__title mb-24">Đăng ký</div>
    <el-form ref="formRef" :model="form" :rules="rules" label-position="top">
      <el-form-item required class="mb-18" prop="fullName">
        <e-input-text placeholder="Họ và tên" v-model="form.fullName">
          <template #prefix>
            <i class="icon-lock" />
          </template>
        </e-input-text>
      </el-form-item>
      <el-form-item required class="mb-24" prop="email">
        <e-input-text placeholder="Email" v-model="form.email">
          <template #prefix>
            <i class="icon-lock" />
          </template>
        </e-input-text>
      </el-form-item>
      <el-select
        style="width: 100%"
        class="mb-24"
        placeholder="Đối tượng áp dụng"
        v-model="form.role"
      >
        <el-option label="Quản lý" value="manager"></el-option>
        <el-option label="Nhân viên" value="staff"></el-option>
      </el-select>
      <el-form-item required class="mb-24" prop="password">
        <el-input
          type="password"
          placeholder="Mật khẩu"
          v-model="form.password"
          show-password
        >
          <template #prefix>
            <i class="icon-lock" />
          </template>
        </el-input>
      </el-form-item>
    </el-form>
    <el-button
      type="primary"
      class="mb-24 w-full form__btn"
      @click="onSubmit(formRef)"
      :loading="loading"
      >Đăng ký
    </el-button>
    <div class="form__note">
      Bạn đã có tài khoản iCheck?
      <span class="form__redirect" @click="onNav">Đăng nhập</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import EInputText from '@/components/Elements/EInputText.vue'
import type { IRegisterFormSoha } from '@/types/auth'
import { rulePassword, rulePhoneNumber } from '@/utils'
import type { FormInstance } from 'element-plus'
import UserService from '@/services/UserService'
import { U3000 } from '@/constants'
import { ElNotification } from 'element-plus'

const formRef = ref<FormInstance>()
const form = ref<IRegisterFormSoha>({
  email: '',
  fullName: '',
  phone: '',
  role: '',
  status: 'ACTIVE',
  password: '',
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

const rules = ref({
  fullName: [
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

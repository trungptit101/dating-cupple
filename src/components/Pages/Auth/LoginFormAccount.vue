<template>
  <div class="form p-32">
    <div class="form__container" style="text-align: center">
      <img src="@/assets/images/soha_icon.png" alt="" class="mb-24"/>
      <div class="form__title mb-24">Đăng nhập</div>
      <p class="text">
        Chào mừng bạn đến với <span class="text__brand"> SOHA EXPRESS</span>
      </p>
    </div>
    <el-form ref="formRef" :model="form" :rules="rules" label-position="top">
      <el-form-item required class="mb-24" prop="email">
        <e-input-phone-number
            placeholder="Nhập số điện thoại"
            v-model="form.email"
        >
          <template #prefix>
            <i class="icon-mobile"/>
          </template>
        </e-input-phone-number>
      </el-form-item>
      <el-form-item required class="mb-18" prop="password">
        <el-input
            type="password"
            placeholder="Mật khẩu"
            v-model="form.password"
            show-password
        >
          <template #prefix>
            <i class="icon-lock"/>
          </template>
        </el-input>
      </el-form-item>
      <el-button
          class="form__btn w-full mt-24"
          type="primary"
          @click="onSubmit(formRef)"
      >Đăng nhập
      </el-button
      >
    </el-form>
  </div>
  <div
      class="footer d-flex align-items-center justify-between"
      style="background-color: #f3f4f5"
  >
    <p class="">
      Bạn chưa có tài khoản?<span
        style="color: #dc3545; cursor: pointer"
        @click="onRegister()"
    >
        Đăng ký</span
    >
    </p>
    <span class="form__link">Quên mật khẩu</span>
  </div>
</template>

<script lang="ts" setup>

import {EInputPhoneNumber} from '@/components/Elements'
import {ref} from 'vue'
import {notifyEl, ruleRequired} from '@/utils'
import {UseDmsRouter} from '@/composables'
import type {FormInstance} from 'element-plus'
import {notify, rulePassword} from '@/utils'
import UserSohaService from "@/services/UserSohaService";
import {CookieService} from '@/services/Base/CookieService'


const formRef = ref<FormInstance>()
const router = UseDmsRouter()
const cookieService = new CookieService()
const rules = ref({
  email: [
    ruleRequired({
      required: true,
      trigger: 'change',
      message: 'Số đện thoại hoặc email là bắt buộc',
    }),
  ],
  password: [
    rulePassword({
      required: true,
      trigger: 'change',
    }),
  ],
})

const form = ref({
  email: '',
  password: '',
})
const loading = ref<boolean>(false)
const onRegister = () => {
  return router.pushByPath('/auth/register')
}
const onSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  form.value = {
    ...form.value,
    email: form.value.email.trim(),
  }
  await formEl.validate(async (valid: boolean) => {
    if (valid) {
      try {
        loading.value = true
        const payload = {
          username: form.value.email,
          password: form.value.password,
        }
        const {code, data, message} = await UserSohaService.login(payload)
        console.log(code, data, message)
        if (code === '200') {
          cookieService.setToken(data.token)
          notify({
            code,
            message: 'Đăng nhập thành công',
          })
          return await router.pushByPath('/dashboard')
        } else {
          return notify({
            code,
            message: message,
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
</script>

<style scoped lang="scss">
.form {
  color: var(--text-primary);

  &__container {
    margin-bottom: 24px;
    text-align: center;

    .text {
      &__brand {
        color: var(--primary);
        font-weight: 600;
        font-size: 16px;
      }
    }
  }

  &__title {
    font-size: 24px;
    font-weight: 600;
    line-height: 120%;
  }

  &__description {
    color: var(--text-secondary);
    font-size: 14px;
  }

  &__link {
    color: var(--primary);
    font-size: 14px;
    cursor: pointer;
  }

  &__btn {
    height: 56px;
    font-size: 16px;
  }

  :deep(.el-input-group__prepend) {
    --el-fill-color-light: #ffffff;
    font-size: 18px;
    border-right: 0;
    width: 28px;
  }
}

.footer {
  background-color: #f3f4f5;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  padding: 25px;
}
</style>

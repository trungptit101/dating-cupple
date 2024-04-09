<template>
  <el-dialog
    v-model="visible"
    width="700px"
    :show-close="false"
    :before-close="close"
    center
    class="mdl"
  >
    <div class="mdl__content">
      <div class="mdl__title">Thêm nhà sản xuất</div>
      <el-form ref="formRef" :model="form" :rules="rules" label-position="top">
        <el-form-item
          label="Tên nhà sản xuất"
          required
          class="mb-16"
          prop="name"
        >
          <el-input v-model="form.name" placeholder="Nhập tên nhà sản xuất" />
        </el-form-item>
        <div class="d-flex align-items-center justify-between mb-16">
          <el-form-item
            label="Mã số thuế"
            required
            class="mdl__item"
            prop="tax"
          >
            <el-input v-model="form.tax" placeholder="Nhập mã số thuế" />
          </el-form-item>
          <el-form-item
            label="Số điện thoại"
            class="mdl__item"
            prop="phoneNumber"
          >
            <e-input-phone-number
              v-model="form.phoneNumber"
              placeholder="Nhập số điện thoại"
            />
          </el-form-item>
        </div>
        <div class="d-flex align-items-center justify-between mb-16">
          <el-form-item
            label="Tỉnh thành"
            required
            class="mdl__item"
            prop="cityId"
          >
            <e-select-location
              placeholder="Vui lòng chọn"
              :items="useLocation.listProvinces.value"
              v-model="form.cityId"
              @change="onChangeCityId"
            />
          </el-form-item>
          <el-form-item
            label="Quận huyện"
            required
            class="mdl__item"
            prop="districtId"
          >
            <e-select-location
              placeholder="Vui lòng chọn"
              :items="useLocation.listDistricts.value"
              v-model="form.districtId"
              @change="onChangeDistrictId"
            />
          </el-form-item>
        </div>
        <div class="d-flex align-items-center justify-between mb-16">
          <el-form-item
            label="Phường xã"
            required
            class="mdl__item"
            prop="wardId"
          >
            <e-select-location
              placeholder="Vui lòng chọn"
              :items="useLocation.listWards.value"
              v-model="form.wardId"
            />
          </el-form-item>
          <el-form-item
            label="Địa chỉ"
            required
            class="mdl__item"
            prop="address"
          >
            <el-input v-model="form.address" placeholder="Nhập địa chỉ" />
          </el-form-item>
        </div>
      </el-form>
    </div>
    <template #footer>
      <span class="d-flex align-items-center justify-center">
        <el-button @click="close" class="mdl__btn">Huỷ bỏ</el-button>
        <el-button
          type="primary"
          class="mdl__btn"
          @click="onSubmit(formRef)"
          :loading="loading"
        >
          Xác nhận
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { IManufacturerPayload } from '@/types/manufacturer'
import { ruleEmail, rulePhoneNumber, ruleRequired, ruleWebsite } from '@/utils'
import UseLocation from '@/composables/useLocation'
import { EInputPhoneNumber, ESelectLocation } from '@/components/Elements'
import { ElNotification } from 'element-plus'
import ManufacturerService from '@/services/ManufacturerService'
import { E2002, S001 } from '@/constants'
import type { FormInstance } from 'element-plus'

const useLocation = UseLocation()
const visible = ref<boolean>(false)
const formRef = ref<FormInstance>()
const form = ref<IManufacturerPayload>({
  name: '',
  phoneNumber: '',
  tax: '',
  cityId: null,
  districtId: null,
  wardId: null,
  address: '',
})
const loading = ref<boolean>(false)
const rules = ref({
  name: [
    ruleRequired({
      required: true,
      message: 'Tên nhà sản xuất là bắt buộc',
      trigger: 'change',
    }),
  ],
  cityId: [
    ruleRequired({
      required: true,
      message: 'Tỉnh thành là bắt buộc',
      trigger: 'change',
    }),
  ],
  districtId: [
    ruleRequired({
      required: true,
      message: 'Quận huyện là bắt buộc',
      trigger: 'change',
    }),
  ],
  wardId: [
    ruleRequired({
      required: true,
      message: 'Phường xã là bắt buộc',
      trigger: 'change',
    }),
  ],
  address: [
    ruleRequired({
      required: true,
      message: 'Địa chỉ là bắt buộc',
      trigger: 'change',
    }),
  ],
  email: [
    ruleEmail({
      required: false,
      trigger: 'change',
    }),
  ],
  website: [
    ruleWebsite({
      required: false,
      trigger: 'change',
    }),
  ],
  tax: [
    ruleRequired({
      required: true,
      message: 'Mã số thuế là bắt buộc',
      trigger: 'change',
    }),
  ],
  phoneNumber: [
    rulePhoneNumber({
      required: false,
      trigger: 'change',
    }),
  ],
})
const emit = defineEmits<{
  (e: 'success', id: number): void
}>()
const close = () => {
  visible.value = false
  formRef?.value?.resetFields()
}
const open = async () => {
  visible.value = true
  await useLocation.getListProvinces()
}
const onChangeCityId = (id: number) => {
  useLocation.changeProvinceId(id)
  form.value.districtId = null
  form.value.wardId = null
}
const onChangeDistrictId = (id: number) => {
  useLocation.changeDistrictId(id)
  form.value.wardId = null
}
const onSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid: boolean) => {
    if (valid) {
      try {
        loading.value = true
        const payload: IManufacturerPayload = {
          ...form.value,
          name: form.value.name.trim(),
          tax: form.value?.tax?.trim(),
          phoneNumber: form.value.phoneNumber?.trim(),
          address: form.value.address.trim(),
        }
        const { code, message, data } = await ManufacturerService.create(
          payload
        )
        if (code === S001) {
          ElNotification({
            message: 'Thêm mới thành công',
            type: 'success',
          })
          close()
          return emit('success', data.id || 0)
        } else if (code === E2002) {
          return ElNotification({
            message: 'Mã số thuế đã tồn tại',
            type: 'error',
          })
        } else {
          ElNotification({
            message,
            type: 'error',
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
defineExpose<{
  open: () => void
  close: () => void
}>({
  open,
  close,
})
</script>

<style scoped lang="scss">
.mdl {
  &__title {
    color: var(--text-primary);
    font-size: 24px;
    font-weight: 700;
    text-align: left;
    margin: 0 0 32px 0;
  }
  &__content {
    margin-top: -34px;
  }
  &__btn {
    width: 200px;
  }
  &__item {
    width: 100%;
    &:first-child {
      margin-right: 16px;
    }
  }
}
</style>

<template>
  <c-page-container class="form" :title="title">
    <el-form ref="formRef" :model="form" :rules="rules" label-position="top">
      <el-row :gutter="30">
        <el-col :xs="24" :lg="16">
          <c-card-container>
            <el-form-item
              label="Tên nhà sản xuất"
              required
              class="mb-16"
              prop="name"
            >
              <el-input
                v-model="form.name"
                placeholder="Nhập tên nhà sản xuất"
              />
            </el-form-item>
            <div class="d-flex align-items-center justify-between mb-16">
              <el-form-item
                label="Mã số thuế"
                required
                class="form__item"
                prop="tax"
              >
                <el-input v-model="form.tax" placeholder="Nhập mã số thuế" />
              </el-form-item>
              <el-form-item label="Email" class="form__item" prop="email">
                <el-input v-model="form.email" placeholder="Nhập email" />
              </el-form-item>
            </div>
            <div class="d-flex align-items-center justify-between mb-16">
              <el-form-item
                label="Số điện thoại"
                class="form__item"
                prop="phoneNumber"
              >
                <e-input-phone-number
                  v-model="form.phoneNumber"
                  placeholder="Nhập số điện thoại"
                />
              </el-form-item>
              <el-form-item label="Website" class="form__item" prop="website">
                <el-input v-model="form.website" placeholder="Nhập website" />
              </el-form-item>
            </div>
            <div class="d-flex align-items-center justify-between mb-16">
              <el-form-item
                label="Tỉnh thành"
                required
                class="form__item"
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
                class="form__item"
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
                class="form__item"
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
                class="form__item"
                prop="address"
              >
                <el-input v-model="form.address" placeholder="Nhập địa chỉ" />
              </el-form-item>
            </div>
            <el-form-item label="Mô tả" class="form__item">
              <e-editor v-model="form.descriptions" placeholder="Nhập mô tả" />
            </el-form-item>
          </c-card-container>
          <div
            class="form__actions d-flex justify-end align-items-center mt-16"
          >
            <el-button
              class="form__actions__btn form__actions__btn--cancel"
              @click="router.pushByPath('/manufacturers')"
              >Hủy bỏ</el-button
            >
            <el-button
              class="form__actions__btn"
              type="primary"
              @click="onSubmit(formRef)"
              :loading="loading"
              >Lưu lại</el-button
            >
          </div>
        </el-col>
      </el-row>
    </el-form>
  </c-page-container>
</template>

<script lang="ts" setup>
import { CPageContainer, CCardContainer } from '@/components/Components'
import type { FormInstance } from 'element-plus'
import { UseDmsRouter } from '@/composables'
import { onMounted, ref } from 'vue'
import {
  ESelectLocation,
  EInputPhoneNumber,
  EEditor,
} from '@/components/Elements'
import UseLocation from '@/composables/useLocation'
import type {
  IManufacturerItem,
  IManufacturerPayload,
} from '@/types/manufacturer'
import ManufacturerService from '@/services/ManufacturerService'
import { E2002, S001 } from '@/constants'
import { ElNotification } from 'element-plus'
import { useRoute } from 'vue-router'
import { ruleEmail, rulePhoneNumber, ruleRequired, ruleWebsite } from '@/utils'

const router = UseDmsRouter()
const route = useRoute()
const formRef = ref<FormInstance>()
const useLocation = UseLocation()
const form = ref<IManufacturerPayload>({
  name: '',
  tax: '',
  email: '',
  phoneNumber: '',
  website: '',
  descriptions: '',
  cityId: null,
  districtId: null,
  wardId: null,
  address: '',
})
const id = ref<string | null>(
  route.params.id ? route.params.id.toString() : null
)
const title: string = id.value
  ? 'Cập nhật nhà sản xuất'
  : 'Thêm mới nhà sản xuất'

const rules = ref({
  name: [
    ruleRequired({
      required: true,
      message: 'Tên nhà sản xuất là bắt buộc',
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
  phoneNumber: [
    rulePhoneNumber({
      required: false,
      trigger: 'change',
    }),
  ],
})
const loading = ref<boolean>(false)
onMounted(async () => {
  await useLocation.getListProvinces()
  if (id.value) {
    await getDetail(id.value)
  }
})
const onChangeCityId = (id: number) => {
  useLocation.changeProvinceId(id)
  form.value.districtId = null
  form.value.wardId = null
}
const onChangeDistrictId = (id: number) => {
  useLocation.changeDistrictId(id)
  form.value.wardId = null
}
const getDetail = async (id: string) => {
  const { code, data } = await ManufacturerService.getDetail(id)
  if (code === S001) {
    fillForm(data)
  }
}
const fillForm = (data: IManufacturerItem) => {
  form.value = {
    name: data.name || '',
    tax: data.tax || '',
    email: data.email || '',
    phoneNumber: data.phoneNumber || '',
    website: data.website || '',
    descriptions: data.descriptions || '',
    cityId: data.cityId || null,
    districtId: data.districtId || null,
    wardId: data.wardId || null,
    address: data.address || '',
  }
  if (data.cityId) {
    useLocation.getListDistricts(data.cityId)
  }
  if (data.districtId) {
    useLocation.getListWards(data.districtId)
  }
}
const onSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  form.value = {
    ...form.value,
    name: form.value.name.trim(),
    tax: form.value?.tax?.trim(),
    email: form.value.email?.trim(),
    website: form.value.website?.trim(),
    phoneNumber: form.value.phoneNumber?.trim(),
    address: form.value.address.trim(),
  }
  await formEl.validate(async (valid: boolean) => {
    if (valid) {
      try {
        loading.value = true
        const successMessage = id.value
          ? 'Cập nhật thành công'
          : 'Thêm mới thành công'
        const { code, message } = id.value
          ? await ManufacturerService.update(Number(id.value), form.value)
          : await ManufacturerService.create(form.value)
        if (code === S001) {
          ElNotification({
            message: successMessage,
            type: 'success',
          })
          return router.pushByPath('/manufacturers')
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
</script>

<style scoped lang="scss">
.form {
  &__item {
    width: 100%;
    &:first-child {
      margin-right: 16px;
    }
  }
  &__actions {
    &__btn {
      width: 200px;
      &--cancel {
        color: var(--text-primary-reverse);
        background-color: var(--line-primary);
      }
    }
  }
}
</style>

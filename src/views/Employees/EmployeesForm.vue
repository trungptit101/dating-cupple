<template>
  <c-page-container class="form" title="">
    <el-form ref="formRef" :model="form" :rules="rules" label-position="top">
      <el-row :gutter="30">
        <el-col :xs="24" :md="16">
          <c-card-container title="Thông tin chung" class="mb-16 h-full">
            <el-form-item
              label="Tên kho hàng"
              required
              class="mb-16"
              prop="name"
            >
              <el-input v-model="form.name" placeholder="Nhập tên kho hàng" />
            </el-form-item>
            <!--            v-uppercase-trim-->
            <el-form-item label="Mã kho" class="mb-16" prop="code">
              <el-input
                v-model="form.code"
                placeholder="Nhập mã kho hàng"
                :maxlength="256"
                v-uppercase-trim
              />
            </el-form-item>
            <el-form-item
              required
              label="Loại kho"
              class="mb-16"
              prop="warehouseTypeId"
            >
              <e-select
                :items="state.warehouseTypeList"
                :remote="true"
                :filterable="true"
                :reserve-keyword="true"
                :remote-show-suffix="true"
                :loading="loadingSelectwarehouseTypeList"
                :remoteMethod="fetchSelectWarehouseType"
                item-value="value"
                item-label="label"
                v-model="form.warehouseTypeId"
                class="w-full"
                placeholder="Vui lòng chọn"
              />
            </el-form-item>
            <div class="d-flex align-items-center justify-between mb-16">
              <el-form-item
                label="Tỉnh thành"
                required
                class="pr-8 flex-50"
                prop="provinceId"
              >
                <e-select-location
                  placeholder="Vui lòng chọn"
                  :items="useLocation.listProvinces.value"
                  v-model="form.provinceId"
                  @change="onChangeCityId"
                />
              </el-form-item>
              <el-form-item
                label="Quận huyện"
                required
                class="flex-50"
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
                class="pr-8 flex-50"
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
                class="flex-50"
                prop="address"
              >
                <el-input v-model="form.address" placeholder="Nhập địa chỉ" />
              </el-form-item>
            </div>
            <el-form-item
              required
              label="Người phụ trách"
              class="mb-16"
              prop="persionInChargeId"
            >
              <e-select
                :items="state.staffList"
                :remote="true"
                :filterable="true"
                :reserve-keyword="true"
                :remote-show-suffix="true"
                :loading="loadingSelectStaffList"
                :remoteMethod="fetchSelectStaff"
                item-value="value"
                item-label="label"
                v-model="form.persionInChargeId"
                class="w-full"
                placeholder="Vui lòng chọn"
              />
            </el-form-item>
            <el-form-item label="Mô tả kho hàng" class="form__item">
              <e-editor v-model="form.description" placeholder="Nhập mô tả" />
            </el-form-item>
          </c-card-container>
        </el-col>
        <el-col :xs="24" :md="8">
          <c-card-container title="Ảnh kho hàng" class="mb-16 h-full">
            <div
              v-show="form?.images?.length"
              class="form__images d-flex align-items-center justify-start flex-wrap"
            >
              <e-img
                v-for="(img, index) in form?.images"
                :src="img"
                :key="index"
                :index="index"
                size="80px"
                show-remove
                class="mr-16 mb-8"
                radius="6px"
                @remove="onRemoveImage"
              />
              <e-upload-button
                :multiple="true"
                @change="onChangeUploadImage"
                title="Tải lên"
              />
            </div>
            <e-upload-area
              v-show="!form?.images?.length"
              @change="onChangeUploadImage"
            />
          </c-card-container>
        </el-col>
      </el-row>
    </el-form>
    <div class="form__actions d-flex justify-end align-items-center mt-16">
      <el-button
        class="form__actions__btn form__actions__btn--cancel"
        @click="router.pushByPath('/warehouse')"
        >Hủy bỏ
      </el-button>
      <el-button
        class="form__actions__btn"
        type="primary"
        @click="onSubmit(formRef)"
        :loading="loading"
        >Lưu lại
      </el-button>
    </div>
  </c-page-container>
</template>

<script lang="ts" setup>
import { CPageContainer, CCardContainer } from '@/components/Components'
import type { FormInstance } from 'element-plus'

import { onMounted, reactive, ref } from 'vue'
import ESelect from '@/components/Elements/ESelect.vue'
import EUploadButton from '@/components/Elements/EUploadButton.vue'
import EUploadArea from '@/components/Elements/EUploadArea.vue'
import { UseDmsRouter } from '@/composables'
import { S001 } from '@/constants'
import { ElNotification } from 'element-plus'
import type {
  DataTypeForm,
  IWarehousePayload,
  IWarehouseResponseDetail,
} from '@/types/warehouse'
import BaseService from '@/services/Base/BaseService'
import type { IWarehouseTypeSelectList, IStaffSelectList } from '@/types/base'
import { ruleRequired, ruleRequiredTrim } from '@/utils'
import type { IUploadResponse } from '@/types/upload'
import { useRoute } from 'vue-router'
import EImg from '@/components/Elements/EImg.vue'
import WarehouseService from '@/services/WarehouseService'
import ESelectLocation from '@/components/Elements/ESelectLocation.vue'
import UseLocation from '@/composables/useLocation'
import EEditor from '@/components/Elements/EEditor.vue'

const router = UseDmsRouter()
const route = useRoute()
const useLocation = UseLocation()

const formRef = ref<FormInstance>()
const form = ref<IWarehouseResponseDetail>({
  images: [],
  name: '',
  code: '',
  warehouseTypeId: null,
  warehouseType: '',
  persionInChargeId: null,
  persionIncharge: '',
  status: null,
  createdAt: '',
  updatedAt: '',
  provinceId: null,
  districtId: null,
  wardId: null,
  address: '',
  description: '',
})
const rules = ref({
  name: [
    ruleRequiredTrim({
      required: true,
      message: 'Tên kho hàng là bắt buộc',
      trigger: 'change',
    }),
  ],
  warehouseTypeId: [
    ruleRequired({
      required: true,
      message: 'Loại kho là bắt buộc',
      trigger: 'change',
    }),
  ],
  provinceId: [
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
    ruleRequiredTrim({
      required: true,
      message: 'Địa chỉ là bắt buộc',
      trigger: 'change',
    }),
  ],
  persionInChargeId: [
    ruleRequired({
      required: true,
      message: 'Người phụ trách là bắt buộc',
      trigger: 'change',
    }),
  ],
})

const loading = ref<boolean>(false)
const loadingSelectStaffList = ref<boolean>(false)
const loadingSelectwarehouseTypeList = ref<boolean>(false)
const state = reactive<DataTypeForm>({
  unitList: [],
  warehouseTypeList: [],
  staffList: [],
  weightUnitList: [],
})

const WarehouseTypeQuery = ref<IWarehouseTypeSelectList>({
  page: 1,
  pageSize: 10,
  key: '',
  status: null,
})
const staffQuery = ref<IStaffSelectList>({
  page: 1,
  pageSize: 10,
  key: '',
  status: null,
})
const id = ref<string | null>(
  route.params.id ? route.params.id.toString() : null
)
const type = ref<string | null>(
  route.path.split('/')[route.path.split('/').length - 2]
)
onMounted(async () => {
  await Promise.all([useLocation.getListProvinces()])

  if (id.value) {
    await getDetail(id.value)
  } else {
    await Promise.all([fetchSelectWarehouseType(), fetchSelectStaff()])
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
  const { code, data } = await WarehouseService.getDetail(id)
  if (code === S001) {
    fillForm(data)
  }
}
const fillForm = async (data: IWarehouseResponseDetail) => {
  await Promise.all([
    fetchSelectWarehouseType(data.warehouseType),
    fetchSelectStaff(data.persionIncharge),
  ])

  form.value = {
    images: data.images || [],
    name: data.name || '',
    code: data.code || '',
    warehouseTypeId: data.warehouseTypeId || null,
    warehouseType: data.warehouseType || '',
    persionInChargeId: data.persionInChargeId || null,
    persionIncharge: data.persionIncharge || '',
    status: data.status || null,
    createdAt: data.createdAt || '',
    updatedAt: data.updatedAt || '',
    provinceId: data.provinceId || null,
    districtId: data.districtId || null,
    wardId: data.wardId || null,
    address: data.address || '',
    description: data.description || '',
  }
  if (data.provinceId) {
    useLocation.getListDistricts(data.provinceId)
  }
  if (data.districtId) {
    useLocation.getListWards(data.districtId)
  }
}
const onChangeUploadImage = (e: IUploadResponse) => {
  form.value.images?.push(e.url)
}
const onRemoveImage = (index: number) => {
  form.value.images?.splice(index, 1)
}
const fetchSelectStaff = async (query?: string | null) => {
  try {
    loadingSelectStaffList.value = true
    staffQuery.value.key = query ? query.trim() : ''

    const { code, data } = await BaseService.getListStaff(staffQuery.value)
    if (code === S001) {
      state.staffList = data.items
      loadingSelectStaffList.value = false
    }
  } catch (e) {
    loadingSelectStaffList.value = false
  }
}
const fetchSelectWarehouseType = async (query?: string | null) => {
  try {
    loadingSelectwarehouseTypeList.value = true
    WarehouseTypeQuery.value.key = query ? query.trim() : ''

    const { code, data } = await BaseService.getListWarehouseType(
      WarehouseTypeQuery.value
    )
    if (code === S001) {
      state.warehouseTypeList = data.items
      loadingSelectwarehouseTypeList.value = false
    }
  } catch (e) {
    loadingSelectwarehouseTypeList.value = false
  }
}
const onSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid: boolean) => {
    if (valid) {
      try {
        console.log(111, form.value)
        // return
        const payload: IWarehousePayload = {
          ...form.value,
          name: form.value.name ? form.value.name.trim() : '',
          code: form.value.code
            ? form.value.code.toUpperCase().trim().replace(/\s/g, '')
            : '',
          address: form.value.address ? form.value.address.trim() : '',
        }
        console.log(222, payload)
        loading.value = true
        let successMessage = ''
        if (id.value) {
          successMessage = 'Cập nhật thành công'
        }
        if (!id.value) {
          successMessage = 'Thêm mới thành công'
        }
        if (id.value && type.value === 'coppy') {
          successMessage = 'Nhân bản thành công'
        }
        const { code, message } =
          id.value && type.value !== 'coppy'
            ? await WarehouseService.update(Number(id.value), payload)
            : await WarehouseService.create(payload)
        if (code === S001) {
          ElNotification({
            message: successMessage,
            type: 'success',
          })
          return router.pushByPath('/warehouse')
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
  .el-collapse {
    --el-collapse-header-height: 68px;
  }

  :deep(.el-form-item__label) {
    @include ellipsis(1);
  }

  &__ecommerce {
    &__remove {
      padding-top: 30px;
    }
  }

  &__collapse {
    &__item {
      border-radius: 6px;
      overflow: hidden;
    }

    &__title {
      font-weight: 600;
      font-size: 20px;
      color: var(--text-primary);
      padding: 0 24px;
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

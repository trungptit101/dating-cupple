<template>
  <c-page-container class="form" title="">
    <el-form ref="formRef" :model="form" :rules="rules" label-position="top">
      <el-row :gutter="30">
        <el-col :xs="24" :md="16">
          <c-card-container title="Thông tin chung" class="mb-16 h-full">
            <el-form-item
              label="Tên lô hàng"
              required
              class="mb-16"
              prop="name"
            >
              <el-input v-model="form.name" placeholder="Nhập tên lô hàng" />
            </el-form-item>
            <el-form-item label="Mã lô hàng" class="mb-16" prop="code">
              <el-input
                v-model="form.code"
                :maxlength="256"
                v-uppercase-trim
                placeholder="Nhập mã lô hàng"
              />
            </el-form-item>
            <el-form-item
              required
              label="Loại lô hàng"
              class="mb-16"
              prop="shipmentTypeId"
            >
              <e-select
                :items="state.shipmentTypeList"
                :remote="true"
                :filterable="true"
                :reserve-keyword="true"
                :remote-show-suffix="true"
                :loading="loadingSelectShipmentTypeList"
                :remoteMethod="fetchSelectShipmentType"
                item-value="value"
                item-label="label"
                v-model="form.shipmentTypeId"
                class="w-full"
                placeholder="Vui lòng chọn"
              />
            </el-form-item>
            <el-form-item
              required
              label="Sản phẩm"
              class="mb-16"
              prop="productId"
            >
              <e-select
                :items="state.productList"
                :remote="true"
                :filterable="true"
                :reserve-keyword="true"
                :remote-show-suffix="true"
                :loading="loadingSelectProductList"
                :remoteMethod="fetchSelectProduct"
                item-value="value"
                item-label="label"
                v-model="form.productId"
                class="w-full"
                placeholder="Vui lòng chọn"
                @change="changeSelectProduct"
              />
            </el-form-item>
            <!--            <el-form-item label="Nhà sản xuất" class="mb-16"  prop="manuFacturerId">-->
            <!--              <el-input v-model="form.manuFacturerId" placeholder="Nhập nhà sản xuất"/>-->
            <!--            </el-form-item>-->
            <div class="d-flex align-items-center justify-between mb-16">
              <el-form-item
                label="Ngày sản xuất"
                class="pr-8 flex-50"
                prop="produceTime"
              >
                <e-date-picker
                  class="w-full"
                  v-model:from="form.produceTime"
                  type="date"
                  placeholder="Vui lòng chọn"
                />
              </el-form-item>
              <el-form-item
                label="Hạn sử dụng"
                class="flex-50"
                prop="expiryDate"
              >
                <e-date-picker
                  class="w-full"
                  v-model:from="form.expiryDate"
                  type="date"
                  placeholder="Vui lòng chọn"
                />
              </el-form-item>
            </div>
            <div class="d-flex align-items-center justify-between mb-16">
              <el-form-item
                label="Khối lượng"
                class="pr-8 flex-50"
                prop="weight"
              >
                <e-input-number
                  v-model="form.weight"
                  placeholder="Nhập khối lượng"
                >
                  <template #append>
                    <e-select
                      :clearable="false"
                      :items="state.weightUnitList"
                      item-value="value"
                      item-label="description"
                      v-model="form.weightUnit"
                      style="width: 80px"
                    />
                  </template>
                </e-input-number>
              </el-form-item>
              <el-form-item label="Số lượng" class="flex-50" prop="quantity">
                <e-input-number
                  v-model="form.quantity"
                  placeholder="Nhập số lượng"
                >
                  <template #append>
                    {{ form.quantityUnit }}
                    <!--                    <e-select-->
                    <!--                      :items="state.unitList"-->
                    <!--                      item-value="value"-->
                    <!--                      item-label="description"-->
                    <!--                      v-model="form.quantityUnit"-->
                    <!--                      :clearable="false"-->
                    <!--                      style="width: 80px"-->
                    <!--                    />-->
                  </template>
                </e-input-number>
              </el-form-item>
            </div>
          </c-card-container>
        </el-col>
        <el-col :xs="24" :md="8">
          <c-card-container title="Ảnh lô hàng" class="mb-16 h-full">
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
        @click="router.pushByPath('/consignments')"
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
  IConsignmentsPayload,
  IConsignmentsResponseDetail,
} from '@/types/consignments'
import BaseService from '@/services/Base/BaseService'
import type { IShipmentTypeSelectList, IProductSelectList } from '@/types/base'
import { ruleRequired, ruleRequiredTrim } from '@/utils'
import type { IUploadResponse } from '@/types/upload'
import { useRoute } from 'vue-router'
import ConsignmentsService from '@/services/ConsignmentsService'
import EDatePicker from '@/components/Elements/EDatePicker.vue'
import EImg from '@/components/Elements/EImg.vue'
import EInputNumber from '@/components/Elements/EInputNumber.vue'

const router = UseDmsRouter()
const route = useRoute()

const formRef = ref<FormInstance>()
const form = ref<IConsignmentsResponseDetail>({
  name: '',
  code: '',
  images: [],
  shipmentTypeId: null,
  productId: null,
  // manuFacturerId: null,
  weight: null,
  quantity: null,
  quantityUnit: '',
  weightUnit: 'g',
  produceTime: '',
  expiryDate: '',
})
const rules = ref({
  name: [
    ruleRequiredTrim({
      required: true,
      message: 'Tên lô hàng là bắt buộc',
      trigger: 'change',
    }),
  ],
  shipmentTypeId: [
    ruleRequired({
      required: true,
      message: 'Loại lô hàng là bắt buộc',
      trigger: 'change',
    }),
  ],
  productId: [
    ruleRequired({
      required: true,
      message: 'Sản phẩm là bắt buộc',
      trigger: 'change',
    }),
  ],
})

const loading = ref<boolean>(false)
const loadingSelectProductList = ref<boolean>(false)
const loadingSelectShipmentTypeList = ref<boolean>(false)
const state = reactive<DataTypeForm>({
  unitList: [],
  shipmentTypeList: [],
  productList: [],
  weightUnitList: [],
})
// const unitQuery = ref<IUnitSelectList>({
//   page: 1,
//   pageSize: 10,
//   key: '',
// })
const shipmentTypeQuery = ref<IShipmentTypeSelectList>({
  page: 1,
  pageSize: 10,
  key: '',
})
const productQuery = ref<IProductSelectList>({
  page: 1,
  pageSize: 10,
  keyword: '',
})
const id = ref<string | null>(
  route.params.id ? route.params.id.toString() : null
)
const type = ref<string | null>(
  route.path.split('/')[route.path.split('/').length - 2]
)
onMounted(async () => {
  await Promise.all([fetchSelectUnit(), fetchSelectShipmentType()])

  if (id.value) {
    await getDetail(id.value)
  } else {
    await fetchSelectProduct()
  }
})

const getDetail = async (id: string) => {
  const { code, data } = await ConsignmentsService.getDetail(id)
  if (code === S001) {
    fillForm(data)
  }
}
const fillForm = async (data: IConsignmentsResponseDetail) => {
  await fetchSelectProduct(data.productName)

  form.value = {
    name: data.name || '',
    code: data.code || '',
    images: data.images || [],
    shipmentTypeId: data.shipmentTypeId || null,
    productId: data.productId || null,
    // manuFacturerId: null,
    weight: data.weight || null,
    quantity: data.quantity || null,
    quantityUnit: data.quantityUnit || null,
    weightUnit: data.weightUnit || null,
    produceTime: data.produceTime || '',
    expiryDate: data.expiryDate || '',
  }
}
const onChangeUploadImage = (e: IUploadResponse) => {
  form.value.images?.push(e.url)
}
const onRemoveImage = (index: number) => {
  form.value.images?.splice(index, 1)
}
const fetchSelectProduct = async (query?: string | null) => {
  try {
    loadingSelectProductList.value = true
    productQuery.value.keyword = query ? query.trim() : ''

    const { code, data } = await BaseService.getListProduct(productQuery.value)
    if (code === S001) {
      state.productList = data.items
      loadingSelectProductList.value = false
    }
  } catch (e) {
    loadingSelectProductList.value = false

    // ElNotification({
    //   message: 'Có lỗi xảy ra',
    //   type: 'error',
    // })
  }
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const changeSelectProduct = (e: number) => {
  state.productList.map((val) => {
    if (val.value === e) {
      // fakeArr.value.push(val)
      form.value.quantityUnit = val.data.unit
    }
  })
  // unit.value = dataProduct.data.unit
}
const fetchSelectShipmentType = async (query?: string) => {
  try {
    loadingSelectShipmentTypeList.value = true
    shipmentTypeQuery.value.key = query ? query.trim() : ''

    const { code, data } = await BaseService.getListShipmentType(
      shipmentTypeQuery.value
    )
    if (code === S001) {
      state.shipmentTypeList = data.items
      loadingSelectShipmentTypeList.value = false
    }
  } catch (e) {
    loadingSelectShipmentTypeList.value = false
    // ElNotification({
    //   message: 'Có lỗi xảy ra',
    //   type: 'error',
    // })
  }
}
const fetchSelectUnit = async () => {
  try {
    const { code, data } = await BaseService.getUnits('PRODUCT_UNIT')
    if (code === S001) {
      state.unitList = data.UNIT
      state.weightUnitList = data.WEIGHT_UNIT
      console.log('data', state.unitList)

      // state.unitList = {
      //   ...data,
      //   ECOMMERCE: data.ECOMMERCE.map((item) => ({
      //     ...item,
      //     value: Number(item.value),
      //   })),
      // }
    }
  } catch (e) {
    // ElNotification({
    //   message: 'Có lỗi xảy ra',
    //   type: 'error',
    // })
  }
}
const onSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid: boolean) => {
    if (valid) {
      try {
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
        const payload: IConsignmentsPayload = {
          ...form.value,
          name: form.value.name ? form.value.name.trim() : '',
          code: form.value.code
            ? form.value.code.toUpperCase().trim().replace(/\s/g, '')
            : '',
        }
        const { code, message } =
          id.value && type.value !== 'coppy'
            ? await ConsignmentsService.update(Number(id.value), payload)
            : await ConsignmentsService.create(payload)
        if (code === S001) {
          ElNotification({
            message: successMessage,
            type: 'success',
          })
          return router.pushByPath('/consignments')
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

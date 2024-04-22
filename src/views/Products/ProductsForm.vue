<template>
  <c-page-container
    class="form"
    :title="id ? 'Cập nhật sản phẩm' : 'Thêm sản phẩm mới'"
  >
    <el-form ref="formRef" :model="form" :rules="rules" label-position="top">
      <el-row :gutter="30">
        <el-col :xs="24" :md="12">
          <c-card-container title="Thông tin chung" class="mb-16">
            <el-form-item
              label="Tên sản phẩm"
              required
              class="mb-16"
              prop="name"
            >
              <el-input
                v-model="form.name"
                placeholder="Nhập tên sản phẩm"
                maxlength="256"
              />
            </el-form-item>
            <el-form-item label="Mã sản phẩm" class="mb-16">
              <el-input
                v-model="form.barcode"
                placeholder="Nhập mã sản phẩm"
                maxlength="256"
              />
            </el-form-item>
            <el-form-item
              label="Giá niêm yết"
              required
              class="mb-16"
              prop="price"
            >
              <e-input-number
                v-model="form.price"
                placeholder="Nhập giá niêm yết"
              >
                <template #append>
                  <e-select
                    :items="listUnit?.PRICE"
                    item-value="value"
                    item-label="description"
                    v-model="form.priceUnit"
                    :clearable="false"
                    style="width: 80px"
                  />
                </template>
              </e-input-number>
            </el-form-item>
            <el-form-item label="Xuất xứ" class="mb-16">
              <el-input
                v-model="form.origin"
                placeholder="Nhập xuất xứ"
                maxlength="256"
              />
            </el-form-item>
            <div class="d-flex align-items-end justify-between mb-16">
              <el-form-item label="Nhà sản xuất" class="mr-8 w-full">
                <e-select
                  :items="listManufacturers"
                  item-value="value"
                  item-label="label"
                  v-model="form.manufacturerId"
                  class="w-full"
                  placeholder="Vui lòng chọn"
                  max-width="620px"
                />
              </el-form-item>
              <el-button type="primary" @click="onAddManufacturer">
                <i class="icon-add-3"></i>
                <span>Thêm</span>
              </el-button>
            </div>
            <el-form-item label="Thương hiệu" class="mb-16">
              <el-input
                v-model="form.brand"
                placeholder="Nhập thương hiệu"
                maxlength="256"
              />
            </el-form-item>
            <el-form-item label="Hạn sử dụng">
              <e-input-number
                v-model="form.expiryDate"
                placeholder="Nhập hạn sử dụng"
              >
                <template #append><div style="width: 40px">Năm</div></template>
              </e-input-number>
            </el-form-item>
          </c-card-container>
          <c-card-container title="Cấu hình link bán hàng" class="mb-16">
            <div
              v-for="(item, index) in form.ecommerces"
              :key="index"
              class="d-flex align-items-center justify-between form__ecommerce mb-16"
            >
              <div class="mr-12">
                <img
                  v-if="item.type === 1"
                  class="form__ecommerce__logo"
                  src="@/assets/images/tiki.png"
                  alt=""
                />
                <img
                  v-if="item.type === 2"
                  class="form__ecommerce__logo"
                  src="@/assets/images/lazada.png"
                  alt=""
                />
                <img
                  v-if="item.type === 3"
                  class="form__ecommerce__logo"
                  src="@/assets/images/shopee.png"
                  alt=""
                />
                <img
                  v-if="item.type === 4"
                  class="form__ecommerce__logo"
                  src="@/assets/images/sendo.png"
                  alt=""
                />
                <div v-if="item.type === 0">
                  <e-img
                    v-if="item.logo"
                    class="form__ecommerce__logo"
                    :src="item.logo"
                    size="65px"
                    show-remove
                    @remove="onRemoveEcommerceLogo($event, index)"
                  />
                  <e-upload-button
                    v-else
                    @change="onChangeEcommerceImage($event, index)"
                    size="65px"
                  />
                </div>
              </div>
              <el-form-item label="Sàn TMĐT" required class="mr-12">
                <e-select
                  :items="listUnit?.ECOMMERCE"
                  item-value="value"
                  item-label="description"
                  v-model="item.type"
                  class="w-full"
                  placeholder="Vui lòng chọn"
                  :clearable="false"
                  @change="onChangeEcommerceType($event, index)"
                />
              </el-form-item>
              <el-form-item
                label="Tên sàn"
                required
                class="mr-12"
                :prop="'ecommerces.' + index + '.name'"
                :rules="
                  ruleRequired({
                    required: true,
                    message: 'Tên sàn là bắt buộc',
                    trigger: 'change',
                  })
                "
              >
                <el-input
                  v-model="item.name"
                  placeholder="Nhập tên"
                  :disabled="item.type > 0"
                  maxlength="256"
                />
              </el-form-item>
              <el-form-item
                label="Link đích"
                required
                class="mr-12"
                :prop="'ecommerces.' + index + '.link'"
                :rules="
                  ruleWebsite({
                    required: true,
                  })
                "
              >
                <el-input v-model="item.link" placeholder="Nhập link" />
              </el-form-item>
              <el-form-item label="Giá niêm yết" class="mr-12">
                <e-input-number v-model="item.price" placeholder="Nhập giá" />
              </el-form-item>
              <div class="form__ecommerce__remove">
                <img
                  @click="onRemoveEcommerce(index)"
                  src="@/assets/svgs/remove.svg"
                  alt=""
                />
              </div>
            </div>
            <div class="pt-8">
              <el-button type="primary" @click="onAddEcommerce">
                <i class="icon-add-3" />
                <span>Thêm mới</span>
              </el-button>
            </div>
          </c-card-container>
          <el-collapse
            class="form__collapse"
            v-model="activeCollapse"
            accordion
          >
            <el-collapse-item class="form__collapse__item mb-16" name="1">
              <template #title>
                <div class="form__collapse__title">Mô tả sản phẩm</div>
              </template>
              <div class="pl-24 pr-24">
                <el-form-item class="mb-16">
                  <el-input
                    v-model="form.productInfo.description"
                    placeholder="Nhập mô tả ngắn gọn về sản phẩm"
                    maxlength="256"
                  />
                </el-form-item>
                <el-form-item class="mb-8">
                  <div
                    class="d-flex align-items-center justify-start flex-wrap"
                  >
                    <e-img
                      v-for="(img, index) in form?.productInfo?.images"
                      :index="index"
                      :key="index"
                      :src="img"
                      show-remove
                      size="80px"
                      class="mr-16 mb-8"
                      radius="6px"
                      @remove="onRemoveProductImage"
                    />
                    <e-upload-button
                      @change="onChangeProductImage"
                      title="Tải lên"
                      class="mb-8"
                      multiple
                    />
                  </div>
                </el-form-item>
                <el-form-item>
                  <e-editor v-model="form.productInfo.detail" />
                </el-form-item>
              </div>
            </el-collapse-item>
            <el-collapse-item class="form__collapse__item mb-16" name="2">
              <template #title>
                <div class="form__collapse__title">
                  Giới thiệu doanh nghiệp sở hữu
                </div>
              </template>
              <div class="pl-24 pr-24">
                <el-form-item class="mb-16">
                  <el-input
                    v-model="form.businessInfo.description"
                    placeholder="Nhập mô tả ngắn gọn về doanh nghiệp sở hữu"
                    maxlength="256"
                  />
                </el-form-item>
                <el-form-item class="mb-16">
                  <div
                    class="d-flex align-items-center justify-start flex-wrap"
                  >
                    <e-img
                      v-for="(img, index) in form?.businessInfo?.images"
                      :index="index"
                      :key="index"
                      :src="img"
                      show-remove
                      size="80px"
                      class="mr-16 mb-8"
                      radius="6px"
                      @remove="onRemoveBusinessImage"
                    />
                    <e-upload-button
                      @change="onChangeBusinessImage"
                      title="Tải lên"
                      class="mb-8"
                      multiple
                    />
                  </div>
                </el-form-item>
                <el-form-item>
                  <e-editor v-model="form.businessInfo.detail" />
                </el-form-item>
              </div>
            </el-collapse-item>
            <el-collapse-item class="form__collapse__item mb-16" name="3">
              <template #title>
                <div class="form__collapse__title">
                  Dấu hiệu phân biệt thật giả
                </div>
              </template>
              <div class="pl-24 pr-24">
                <el-form-item class="mb-16">
                  <el-input
                    v-model="form.verifiedInfo.description"
                    placeholder="Nhập mô tả ngắn gọn về dấu hiệu"
                    maxlength="256"
                  />
                </el-form-item>
                <el-form-item class="mb-16">
                  <div
                    class="d-flex align-items-center justify-start flex-wrap"
                  >
                    <e-img
                      v-for="(img, index) in form?.verifiedInfo?.images"
                      :index="index"
                      :key="index"
                      :src="img"
                      show-remove
                      size="80px"
                      class="mr-16 mb-8"
                      radius="6px"
                      @remove="onRemoveVerifyImage"
                    />
                    <e-upload-button
                      @change="onChangeVerifyImage"
                      title="Tải lên"
                      class="mb-8"
                      multiple
                    />
                  </div>
                </el-form-item>
                <el-form-item>
                  <e-editor v-model="form.verifiedInfo.detail" />
                </el-form-item>
              </div>
            </el-collapse-item>
          </el-collapse>
        </el-col>
        <el-col :xs="24" :md="12">
          <c-card-container title="Thuộc tính sản phẩm" class="mb-16">
            <div class="d-flex align-items-center justify-between mb-16">
              <el-form-item label="Đơn vị" class="w-full">
                <e-select
                  :items="listUnit?.UNIT"
                  item-value="value"
                  item-label="description"
                  v-model="form.unit"
                  placeholder="Vui lòng chọn"
                  class="w-full"
                />
              </el-form-item>
              <el-form-item label="Khối lượng" class="ml-8 mr-8 w-full">
                <e-input-number v-model="form.weight" placeholder="Nhập...">
                  <template #append><div style="width: 10px">g</div></template>
                </e-input-number>
              </el-form-item>
              <el-form-item label="Dung tích" class="w-full">
                <e-input-number v-model="form.capacity" placeholder="Nhập...">
                  <template #append><div style="width: 16px">ml</div></template>
                </e-input-number>
              </el-form-item>
            </div>
            <div class="d-flex align-items-center justify-between mb-16">
              <el-form-item label="Chiều cao" class="w-full">
                <e-input-number v-model="form.height" placeholder="Nhập...">
                  <template #append><div style="width: 16px">cm</div></template>
                </e-input-number>
              </el-form-item>
              <el-form-item label="Chiều rộng" class="ml-8 mr-8 w-full">
                <e-input-number v-model="form.width" placeholder="Nhập...">
                  <template #append><div style="width: 16px">cm</div></template>
                </e-input-number>
              </el-form-item>
              <el-form-item label="Chiều dài" class="w-full">
                <e-input-number v-model="form.length" placeholder="Nhập...">
                  <template #append><div style="width: 16px">cm</div></template>
                </e-input-number>
              </el-form-item>
            </div>
            <el-form-item label="Cách thức đóng gói">
              <div
                class="d-flex align-items-center justify-between w-full mb-16"
              >
                <e-input-number
                  v-model="form.packageNumber"
                  placeholder="Số lượng"
                  class="w-full"
                />
                <div class="ml-16 mr-16">/</div>
                <e-select
                  :items="listUnit?.PACKAGE_UNIT"
                  item-value="value"
                  item-label="description"
                  v-model="form.packageMethod"
                  :clearable="false"
                  class="w-full"
                  placeholder="Phương thức"
                />
              </div>
            </el-form-item>
            <el-form-item label="Màu sắc">
              <el-input
                v-model="form.color"
                placeholder="Nhập màu sắc"
                maxlength="256"
              />
            </el-form-item>
          </c-card-container>
          <c-card-container title="Ảnh sản phẩm" class="mb-16">
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
                multiple
                @change="onChangeUploadImage"
                title="Tải lên"
                class="mb-8"
              />
            </div>
            <e-upload-area
              v-show="!form?.images?.length"
              @change="onChangeUploadImage"
            />
          </c-card-container>
          <c-card-container title="Thêm thuộc tính" class="mb-16">
            <div class="d-flex align-items-center justify-between mb-16">
              <e-select
                :items="listAttribute"
                item-value="id"
                item-label="name"
                class="w-full mr-8"
                placeholder="Vui lòng chọn"
                @change="onChangeAttribute"
              />
              <el-button type="primary">
                <i class="icon-add-3"></i>
              </el-button>
            </div>
            <div class="d-flex align-items-center justify-between w-full mb-16">
              <el-collapse
                class="form__collapse w-full"
                v-model="activeAttribute"
                accordion
              >
                <div
                  class="d-flex w-full align-items-start justify-between"
                  v-for="(item, index) in listSelectedAttribute"
                  :key="index"
                >
                  <el-collapse-item
                    class="form__collapse__item form__collapse__item--attribute mb-16 w-full"
                    :name="index"
                  >
                    <template #title>
                      <div class="form__attribute__title">{{ item.name }}</div>
                    </template>
                    <el-form-item>
                      <el-input
                        v-if="
                          item.frontEndInput === EAttributeInputType.text ||
                          item.frontEndInput === EAttributeInputType.textarea
                        "
                        :placeholder="item?.name"
                        :type="item.frontEndInput"
                        v-model="item.attribute.value"
                        maxlength="256"
                      />
                      <e-input-number
                        class="w-full"
                        v-if="
                          item.frontEndInput === EAttributeInputType.number ||
                          item.frontEndInput === EAttributeInputType.integer
                        "
                        :placeholder="item?.name"
                        v-model="item.attribute.value"
                      />
                      <el-date-picker
                        v-if="item.frontEndInput === EAttributeInputType.date"
                        v-model="item.attribute.value"
                        type="date"
                        :placeholder="item?.name"
                        :format="VI_DATE_FORMAT"
                        class="w-full"
                      />
                      <e-select
                        v-if="
                          item.frontEndInput === EAttributeInputType.select ||
                          item.frontEndInput === EAttributeInputType.multiselect
                        "
                        :multiple="
                          item.frontEndInput === EAttributeInputType.multiselect
                        "
                        :items="item.items"
                        item-label="label"
                        item-value="value"
                        v-model="item.attribute.value"
                        :placeholder="item?.name"
                        class="w-full"
                      />
                      <e-editor
                        v-if="
                          item.frontEndInput === EAttributeInputType.htmleditor
                        "
                        v-model="item.attribute.value"
                        :placeholder="item?.name"
                        class="w-full"
                      />
                      <div
                        v-if="
                          item.frontEndInput === EAttributeInputType.boolean
                        "
                        class="d-flex align-items-start justify-between w-full"
                      >
                        <span class="mr-16">{{ item?.name }}</span>
                        <el-switch
                          class="mt-2"
                          v-model="item.attribute.value"
                        />
                      </div>
                      <div
                        v-if="
                          item.frontEndInput === EAttributeInputType.imageSingle
                        "
                        class="d-flex align-items-center justify-start flex-wrap mt-8"
                      >
                        <e-img
                          v-if="item.attribute?.value"
                          :src="item.attribute?.value?.toString()"
                          size="80px"
                          show-remove
                          class="mr-16"
                          radius="6px"
                          @remove="onRemoveAttributeImageSingle($event, index)"
                        />
                        <e-upload-button
                          @change="onChangeAttributeImageSingle($event, index)"
                          title="Tải lên"
                        />
                      </div>
                      <div
                        v-if="item.frontEndInput === EAttributeInputType.image"
                        class="d-flex align-items-center justify-start flex-wrap mt-8"
                      >
                        <e-img
                          v-for="(img, iIndex) in item.attribute?.value"
                          :index="iIndex"
                          :key="item.attribute?.id + '-' + iIndex"
                          :src="img"
                          size="80px"
                          show-remove
                          class="mr-16 mb-8"
                          radius="6px"
                          @remove="
                            onRemoveAttributeImages($event, index, iIndex)
                          "
                        />
                        <e-upload-button
                          @change="onChangeAttributeImages($event, index)"
                          title="Tải lên"
                          class="mb-8"
                          multiple
                        />
                      </div>
                      <div
                        v-if="item.frontEndInput === EAttributeInputType.video"
                        class="d-flex align-items-center justify-start flex-wrap mt-8"
                      >
                        <e-video
                          v-for="(vid, iIndex) in item.attribute?.value"
                          :index="iIndex"
                          :key="item.attribute?.id + '-' + iIndex"
                          :src="vid"
                          show-remove
                          class="form__attribute__video mb-8"
                          radius="6px"
                          @remove="
                            onRemoveAttributeImages($event, index, iIndex)
                          "
                          :object-fit="EObjectFit.contain"
                        />
                        <e-upload-button
                          @change="onChangeAttributeImages($event, index)"
                          title="Tải lên"
                          class="mb-8"
                          multiple
                          :format="EFileType.video"
                        />
                      </div>
                      <div
                        v-if="item.frontEndInput === EAttributeInputType.group"
                      >
                        <el-input
                          class="mb-16"
                          v-model="item.attribute.value.description"
                          placeholder="Nhập..."
                          maxlength="256"
                        />
                        <div
                          class="d-flex align-items-center justify-start flex-wrap mb-8"
                        >
                          <e-img
                            v-for="(img, iIndex) in item.attribute?.value
                              ?.images"
                            :index="index"
                            :key="iIndex"
                            :src="img"
                            show-remove
                            size="80px"
                            class="mr-16 mb-8"
                            radius="6px"
                            @remove="
                              onRemoveAttributeGroupImages(
                                $event,
                                index,
                                iIndex
                              )
                            "
                          />
                          <e-upload-button
                            @change="
                              onChangeAttributeGroupImages($event, index)
                            "
                            title="Tải lên"
                            class="mb-8"
                            multiple
                          />
                        </div>
                        <e-editor v-model="item.attribute.value.detail" />
                      </div>
                    </el-form-item>
                  </el-collapse-item>
                  <div
                    class="d-flex align-items-center justify-center ml-8 form__attribute__remove"
                  >
                    <img
                      src="@/assets/svgs/remove.svg"
                      alt=""
                      class="mt-8"
                      @click="onRemoveAttribute(index)"
                    />
                  </div>
                </div>
              </el-collapse>
            </div>
          </c-card-container>
        </el-col>
      </el-row>
      <div class="form__actions d-flex align-items-center justify-end mt-16">
        <el-button class="form__actions__btn mr-16" @click="onBack"
          >Huỷ bỏ</el-button
        >
        <el-button
          class="form__actions__btn"
          type="primary"
          @click="onSave(formRef)"
          :loading="loading"
          >Lưu lại</el-button
        >
      </div>
    </el-form>
  </c-page-container>

  <products-add-manufacturer
    @success="onAddManufacturerSuccess"
    ref="productsAddManufacturerRef"
  />
</template>

<script lang="ts" setup>
import { CCardContainer, CPageContainer } from '@/components/Components'
import type { FormInstance } from 'element-plus'
import { ElNotification } from 'element-plus'
import { onMounted, ref } from 'vue'
import {
  EEditor,
  EImg,
  EInputNumber,
  ESelect,
  EUploadArea,
  EUploadButton,
  EVideo,
} from '@/components/Elements'
import type {
  IProductExtraInfo,
  IProductItem,
  IProductPayload,
  IProductUnit,
} from '@/types/product'
import ProductService from '@/services/ProductService'
import {
  EAttributeInputType,
  EFileType,
  EObjectFit,
  S001,
  VI_DATE_FORMAT,
} from '@/constants'
import type { IUploadResponse } from '@/types/upload'
import type {
  IAttribute,
  IManufacturerSelectItem,
  ISelectedAttribute,
} from '@/types/base'
import BaseService from '@/services/Base/BaseService'
import { UseDmsRouter } from '@/composables'
import { ruleRequired, ruleWebsite } from '@/utils'
import { useRoute } from 'vue-router'
import ProductsAddManufacturer from '@/components/Pages/Products/ProductsAddManufacturer.vue'

const formRef = ref<FormInstance>()
const listSelectedAttribute = ref<ISelectedAttribute[]>([])
const loading = ref<boolean>(false)
const router = UseDmsRouter()
const listManufacturers = ref<IManufacturerSelectItem[]>([])
const route = useRoute()
const id = ref<string | null>(
  route.params.id ? route.params.id.toString() : null
)
const productsAddManufacturerRef =
  ref<InstanceType<typeof ProductsAddManufacturer>>()
const form = ref<IProductPayload>({
  name: '',
  barcode: '',
  price: null,
  priceUnit: 'VND',
  origin: '',
  manufacturerId: null,
  brand: '',
  expiryDate: null,
  unit: null,
  weight: null,
  weightUnit: 'g',
  capacity: null,
  capacityUnit: 'ml',
  height: null,
  heightUnit: 'cm',
  width: null,
  widthUnit: 'cm',
  length: null,
  lengthUnit: 'cm',
  packageNumber: null,
  packageMethod: null,
  color: '',
  images: [],
  ecommerces: [
    {
      logo: '',
      type: 0,
      name: '',
      link: '',
      price: null,
    },
  ],
  productInfo: {
    detail: '',
    description: '',
    images: [],
  },
  businessInfo: {
    detail: '',
    description: '',
    images: [],
  },
  verifiedInfo: {
    detail: '',
    description: '',
    images: [],
  },
})
const rules = ref({
  name: [
    ruleRequired({
      required: true,
      message: 'Tên sản phẩm là bắt buộc',
      trigger: 'change',
    }),
  ],
  price: [
    ruleRequired({
      required: true,
      message: 'Giá niêm yết là bắt buộc',
      trigger: 'change',
    }),
  ],
})
const activeCollapse = ref('1')
const activeAttribute = ref<number | null>(null)
const onAddEcommerce = () => {
  form.value.ecommerces.push({
    logo: '',
    type: 0,
    name: '',
    link: '',
    price: null,
  })
}
const listUnit = ref<IProductUnit>()
const listAttribute = ref<IAttribute[]>()
const getListUnit = async () => {
  try {
    const { code, data } = await BaseService.getUnits('PRODUCT_UNIT')
    if (code === S001) {
      listUnit.value = {
        ...data,
        ECOMMERCE: data.ECOMMERCE.map((item) => ({
          ...item,
          value: Number(item.value),
        })),
      }
    }
  } catch (e) {
    console.log(e)
  }
}
const getDetail = async (id: string) => {
  const { code, data } = await ProductService.getDetail(id)
  if (code === S001) {
    fillForm(data)
  }
}
const fillForm = (data: IProductItem) => {
  form.value = {
    name: data.name || '',
    barcode: data.barcode || '',
    price: data.price || null,
    priceUnit: data.priceUnit || 'VND',
    origin: data.origin || '',
    manufacturerId: data.manufacturerId || null,
    brand: data.brand || '',
    expiryDate: data.expiryDate || null,
    unit: data.unit || null,
    weight: data.weight || null,
    weightUnit: data.weightUnit || 'g',
    capacity: data.capacity || null,
    capacityUnit: data.capacityUnit || 'ml',
    height: data.height || null,
    heightUnit: data.heightUnit || 'cm',
    width: data.width || null,
    widthUnit: data.widthUnit || 'cm',
    length: data.length || null,
    lengthUnit: data.lengthUnit || 'cm',
    packageNumber: data.packageNumber || null,
    packageMethod: data.packageMethod || null,
    color: data.color || '',
    images: data.images || [],
    ecommerces: data.ecommerces || [],
    productInfo: data.productInfo || {
      detail: '',
      description: '',
      images: [],
    },
    businessInfo: data.businessInfo || {
      detail: '',
      description: '',
      images: [],
    },
    verifiedInfo: data.verifiedInfo || {
      detail: '',
      description: '',
      images: [],
    },
  }
  listSelectedAttribute.value = data.productExtends?.length
    ? data.productExtends.map((item) => {
        const itemConfig = item.config
        const itemInputType = itemConfig?.frontEndInput
        let tmpItem: ISelectedAttribute = {
          name: itemConfig?.name,
          frontEndInput: itemInputType,
          items: itemConfig?.items || [],
        }
        switch (itemInputType) {
          case EAttributeInputType.number:
          case EAttributeInputType.integer:
          case EAttributeInputType.select:
            tmpItem.attribute = {
              id: itemConfig?.id || null,
              value: Number(JSON.parse(item.value as string)),
            }
            break
          case EAttributeInputType.group:
            tmpItem.attribute = {
              id: itemConfig?.id || null,
              value: {
                description: JSON.parse(item.value as string).description,
                detail: JSON.parse(item.value as string).detail,
                images: JSON.parse(item.value as string).images,
              },
            }
            break
          case EAttributeInputType.boolean:
            tmpItem.attribute = {
              id: itemConfig?.id || null,
              value: JSON.parse(item.value as string),
            }
            break
          default:
            tmpItem.attribute = {
              id: itemConfig?.id || null,
              value: JSON.parse(item.value as string) || '',
            }
            break
        }
        return tmpItem
      })
    : []
  console.log(listSelectedAttribute.value)
}
const onChangeUploadImage = (e: IUploadResponse) => {
  form.value.images.push(e.url)
  form.value.images = [...form.value.images]
}
const onRemoveImage = (index: number) => {
  form.value.images.splice(index, 1)
  form.value.images = [...form.value.images]
}
const onChangeProductImage = (e: IUploadResponse) => {
  form.value.productInfo.images.push(e.url)
  form.value.productInfo.images = [...form.value.productInfo.images]
}
const onChangeBusinessImage = (e: IUploadResponse) => {
  form.value.businessInfo.images.push(e.url)
  form.value.businessInfo.images = [...form.value.businessInfo.images]
}
const onChangeVerifyImage = (e: IUploadResponse) => {
  form.value.verifiedInfo.images.push(e.url)
  form.value.verifiedInfo.images = [...form.value.verifiedInfo.images]
}
const onChangeEcommerceImage = (e: IUploadResponse, index: number) => {
  form.value.ecommerces[index].logo = e.url
}
const onChangeEcommerceType = (val: number, index: number) => {
  switch (val) {
    case 1:
      form.value.ecommerces[index].name = 'Tiki'
      break
    case 2:
      form.value.ecommerces[index].name = 'Lazada'
      break
    case 3:
      form.value.ecommerces[index].name = 'Shopee'
      break
    case 4:
      form.value.ecommerces[index].name = 'Sendo'
      break
    case 0:
      form.value.ecommerces[index].name = ''
      break
  }
}
const onRemoveBusinessImage = (e: number) => {
  form.value.businessInfo.images.splice(e, 1)
  form.value.businessInfo.images = [...form.value.businessInfo.images]
}
const onRemoveProductImage = (e: number) => {
  form.value.productInfo.images.splice(e, 1)
  form.value.productInfo.images = [...form.value.productInfo.images]
}
const onRemoveVerifyImage = (e: number) => {
  form.value.verifiedInfo.images.splice(e, 1)
  form.value.verifiedInfo.images = [...form.value.verifiedInfo.images]
}
const onRemoveEcommerce = (e: number) => {
  form.value.ecommerces.splice(e, 1)
}
const onRemoveEcommerceLogo = (_: number, index: number) => {
  form.value.ecommerces[index].logo = ''
}
const getListAttributes = async () => {
  try {
    const { code, data } = await BaseService.getListAttributes()
    if (code === S001) {
      listAttribute.value = data.filter(
        (item) => item.frontEndInput !== EAttributeInputType.ecommerce
      )
    }
  } catch (e) {
    console.log(e)
  }
}
const getListManufacturers = async () => {
  try {
    const { code, data } = await BaseService.getListManufacturer({
      keyword: '',
      page: 1,
      pageSize: 100,
    })
    if (code === S001) {
      listManufacturers.value = data.items
    }
  } catch (e) {
    console.log(e)
  }
}
const onChangeAttribute = (e: number) => {
  const existAttribute = listAttribute.value?.find((item) => item.id === e)
  if (existAttribute) {
    let tmpAttr = {
      name: existAttribute.name,
      frontEndInput: existAttribute.frontEndInput,
      attribute: {
        id: existAttribute.id,
        value:
          existAttribute.frontEndInput === EAttributeInputType.htmleditor ||
          existAttribute.frontEndInput === EAttributeInputType.text ||
          existAttribute.frontEndInput === EAttributeInputType.textarea
            ? ''
            : existAttribute.frontEndInput === EAttributeInputType.image ||
              existAttribute.frontEndInput === EAttributeInputType.video ||
              existAttribute.frontEndInput === EAttributeInputType.multiselect
            ? []
            : existAttribute.frontEndInput === EAttributeInputType.group
            ? {
                description: '',
                images: [],
                detail: '',
              }
            : null,
      },
    }
    listSelectedAttribute.value.push(tmpAttr)
  }
}
const onRemoveAttribute = (e: number) => {
  listSelectedAttribute.value.splice(e, 1)
}
const onChangeAttributeImageSingle = (e: IUploadResponse, index: number) => {
  const attributeChangeItem = listSelectedAttribute.value[index].attribute
  if (attributeChangeItem) {
    attributeChangeItem.value = e.url
  }
}
const onAddManufacturerSuccess = async (id: number) => {
  await getListManufacturers()
  form.value.manufacturerId = id
}
const onChangeAttributeImages = (e: IUploadResponse, index: number) => {
  const attributeChangeItem = listSelectedAttribute.value[index].attribute
  if (attributeChangeItem) {
    ;(attributeChangeItem?.value as string[]).push(e.url)
  }
}
const onRemoveAttributeImageSingle = (_: number, index: number) => {
  const attributeChangeItem = listSelectedAttribute.value[index].attribute
  if (attributeChangeItem) {
    attributeChangeItem.value = ''
  }
}
const onRemoveAttributeImages = (_: number, index: number, iIndex: number) => {
  const attributeChangeItem = listSelectedAttribute.value[index].attribute
  if (attributeChangeItem) {
    ;(attributeChangeItem?.value as string[]).splice(iIndex, 1)
  }
}
const onRemoveAttributeGroupImages = (
  _: number,
  index: number,
  iIndex: number
) => {
  const attributeChangeItem = listSelectedAttribute.value[index].attribute
    ?.value as IProductExtraInfo
  if (attributeChangeItem) {
    attributeChangeItem?.images.splice(iIndex, 1)
  }
}
const onChangeAttributeGroupImages = (e: IUploadResponse, index: number) => {
  const attributeChangeItem = listSelectedAttribute.value[index].attribute
    ?.value as IProductExtraInfo
  if (attributeChangeItem) {
    attributeChangeItem.images.push(e.url)
  }
}
const onBack = () => {
  router.pushByPath('/products')
}
const onSave = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  form.value = {
    ...form.value,
    name: form.value.name.trim(),
    barcode: form.value.barcode.trim(),
    origin: form.value.origin.trim(),
    brand: form.value.brand.trim(),
    color: form.value.color.trim(),
    ecommerces: form.value.ecommerces.map((item) => ({
      ...item,
      name: item.name.trim(),
      link: item.link.trim(),
    })),
    productExtends: [],
  }
  await formEl.validate(async (valid: boolean) => {
    if (valid) {
      const payload: IProductPayload = {
        ...form.value,
        productExtends: [],
      }
      for (let key of listSelectedAttribute.value) {
        let tmpValue = key.attribute?.value
        if (
          [
            EAttributeInputType.text,
            EAttributeInputType.textarea,
            EAttributeInputType.htmleditor,
          ].includes(key.frontEndInput as EAttributeInputType)
        ) {
          tmpValue = (tmpValue as string).trim()
        }
        if (key.frontEndInput === EAttributeInputType.group) {
          tmpValue = {
            ...(tmpValue as IProductExtraInfo),
            detail: (tmpValue as IProductExtraInfo).detail.trim(),
            description: (tmpValue as IProductExtraInfo).description.trim(),
          }
        }
        payload.productExtends?.push({
          attributeId: key.attribute?.id || undefined,
          value: key.attribute?.value ? JSON.stringify(tmpValue) : null,
        })
      }
      loading.value = true
      try {
        const successMessage = id.value
          ? 'Cập nhật thành công'
          : 'Thêm mới thành công'
        const { code, message } = id.value
          ? await ProductService.update(Number(id.value), payload)
          : await ProductService.create(payload)
        if (code === S001) {
          ElNotification({
            message: successMessage,
            type: 'success',
          })
          return router.pushByPath('/products')
        } else {
          return ElNotification({
            message,
            type: 'error',
          })
        }
      } catch (e) {
        console.log(e)
      } finally {
        loading.value = false
      }
    } else {
      console.log(listSelectedAttribute.value)
    }
  })
}
const onAddManufacturer = () => {
  productsAddManufacturerRef.value.open()
}
onMounted(async () => {
  await Promise.all([
    getListUnit(),
    getListAttributes(),
    getListManufacturers(),
  ])
  if (id.value) {
    await getDetail(id.value)
  }
})
</script>

<style scoped lang="scss">
.form {
  .el-collapse {
    --el-collapse-header-height: 68px;
  }
  :deep(.el-form-item__label),
  :deep(.el-form-item__error) {
  }
  &__ecommerce {
    &__remove {
      padding-top: 30px;
    }
    &__logo {
      width: 65px;
      height: 65px;
      border-radius: 8px;
    }
  }
  &__collapse {
    &__item {
      border-radius: 6px;
      overflow: hidden;
      &--attribute {
        border: 1px solid var(--line-primary);
        padding: 0 24px;
      }
    }
    &__title {
      font-weight: 600;
      font-size: 20px;
      color: var(--text-primary);
      padding: 0 24px;
    }
  }
  &__attribute {
    &__title {
      font-size: 20px;
      color: var(--text-primary);
      font-weight: 600;
    }
    &__remove {
      width: 54px;
      min-width: 54px;
      img {
        cursor: pointer;
      }
    }
    &__video {
      width: calc(100% - 24px);
      max-height: 240px;
    }
  }
  &__actions {
    &__btn {
      width: 200px;
    }
  }
}
</style>

<template>
  <c-page-container class="detail">
    <el-row :gutter="30">
      <el-col :xs="24" :md="24" :lg="18">
        <c-card-container class="mb-16">
          <div
            class="detail__container d-flex align-items-start justify-start w-full"
          >
            <div class="detail__carousel">
              <c-slide-carousel :images="detail?.images" />
            </div>
            <div class="detail__content p-8 w-full">
              <div class="detail__title mb-8">
                {{ detail?.name }}
              </div>
              <div
                class="detail__row d-flex align-items-start justify-start mb-24"
              >
                <div
                  class="detail__row__label d-flex align-items-center justify-start"
                >
                  <i class="icon-Clock mr-6" />
                  <span>{{ detail?.updatedAt }}</span>
                </div>
                <div
                  class="detail__row__value d-flex align-items-center justify-start detail__row__value--created-by"
                >
                  <i class="icon-frame-4 mr-6" />
                  <span>{{ detail?.createdByName }}</span>
                </div>
              </div>
              <div
                v-if="detail?.barcode"
                class="detail__row d-flex align-items-start justify-start mb-8"
              >
                <div class="detail__row__label">
                  <span>Mã vạch</span>
                </div>
                <div class="detail__row__value">
                  <span>{{ detail?.barcode }}</span>
                </div>
              </div>
              <div
                class="detail__row d-flex align-items-start justify-start mb-8"
              >
                <div class="detail__row__label">
                  <span>Giá niêm yết</span>
                </div>
                <div class="detail__row__value">
                  <span
                    >{{ formatNumberWithCommas(detail?.price) }} &nbsp;{{
                      detail?.priceUnit
                    }}</span
                  >
                </div>
              </div>
              <div
                v-if="detail?.origin"
                class="detail__row d-flex align-items-start justify-start mb-8"
              >
                <div class="detail__row__label">
                  <span>Xuất xứ</span>
                </div>
                <div class="detail__row__value">
                  <span>{{ detail?.origin }}</span>
                </div>
              </div>
              <div
                v-if="detail?.manufacturerName"
                class="detail__row d-flex align-items-start justify-start mb-8"
              >
                <div class="detail__row__label">
                  <span>Nhà sản xuất</span>
                </div>
                <div class="detail__row__value">
                  <span>{{ detail?.manufacturerName }}</span>
                </div>
              </div>
              <div
                v-if="detail?.brand"
                class="detail__row d-flex align-items-start justify-start mb-24"
              >
                <div class="detail__row__label">
                  <span>Thương hiệu</span>
                </div>
                <div class="detail__row__value">
                  <span>{{ detail?.brand }}</span>
                </div>
              </div>
              <div
                v-if="isShowProductInfo"
                class="detail__row d-flex align-items-start justify-start"
              >
                <div class="detail__row__label detail__row__label--bold">
                  <span>Mô tả chi tiết</span>
                </div>
                <div class="detail__row__value">
                  <div
                    v-if="detail?.productInfo?.images?.length"
                    class="detail__row__images d-flex align-items-center justify-start flex-wrap"
                  >
                    <e-img
                      v-for="(img, index) in detail?.productInfo?.images"
                      :key="index"
                      alt=""
                      :src="img"
                      size="80px"
                      radius="6px"
                      class="mr-8 mb-8"
                    />
                  </div>
                  <div
                    v-if="detail?.productInfo?.description"
                    class="detail__row__description mb-8"
                  >
                    {{ detail?.productInfo?.description }}
                  </div>
                  <div
                    v-if="detail?.productInfo?.detail"
                    class="detail__row__detail"
                    v-html="detail?.productInfo?.detail"
                  />
                </div>
              </div>
              <template v-if="isShowBusinessInfo">
                <div class="detail__divider"></div>
                <div class="detail__row d-flex align-items-start justify-start">
                  <div class="detail__row__label detail__row__label--bold">
                    <span>Giới thiệu doanh nghiệp sở hữu</span>
                  </div>
                  <div class="detail__row__value">
                    <div
                      v-if="detail?.businessInfo?.images?.length"
                      class="detail__row__images d-flex align-items-center justify-start flex-wrap"
                    >
                      <e-img
                        v-for="(img, index) in detail?.businessInfo?.images"
                        :key="index"
                        alt=""
                        :src="img"
                        size="80px"
                        radius="6px"
                        class="mr-8 mb-8"
                      />
                    </div>
                    <div
                      v-if="detail?.businessInfo?.description"
                      class="detail__row__description mb-8"
                    >
                      {{ detail?.businessInfo?.description }}
                    </div>
                    <div
                      v-if="detail?.businessInfo?.detail"
                      class="detail__row__detail"
                      v-html="detail?.businessInfo?.detail"
                    />
                  </div>
                </div>
              </template>
              <template v-if="isShowVerifiedInfo">
                <div class="detail__divider"></div>
                <div class="detail__row d-flex align-items-start justify-start">
                  <div class="detail__row__label detail__row__label--bold">
                    <span>Dấu hiệu phân biệt thật giả</span>
                  </div>
                  <div class="detail__row__value">
                    <div
                      v-if="detail?.verifiedInfo?.images?.length"
                      class="detail__row__images d-flex align-items-center justify-start flex-wrap"
                    >
                      <e-img
                        v-for="(img, index) in detail?.verifiedInfo?.images"
                        :key="index"
                        alt=""
                        :src="img"
                        size="80px"
                        radius="6px"
                        class="mr-8 mb-8"
                      />
                    </div>
                    <div
                      v-if="detail?.verifiedInfo?.description"
                      class="detail__row__description mb-8"
                    >
                      {{ detail?.verifiedInfo?.description }}
                    </div>
                    <div
                      v-if="detail?.verifiedInfo?.detail"
                      class="detail__row__detail"
                      v-html="detail?.verifiedInfo?.detail"
                    />
                  </div>
                </div>
              </template>
              <template v-if="isShowAttribute">
                <div class="detail__divider"></div>
                <div class="detail__row d-flex align-items-start justify-start">
                  <div class="detail__row__label detail__row__label--bold">
                    <span>Thuộc tính sản phẩm</span>
                  </div>
                  <div class="detail__row__value w-full">
                    <div
                      class="detail__row__value__attribute d-flex align-items-center justify-start flex-wrap"
                    >
                      <div
                        v-if="detail?.unit"
                        class="detail__row__value__attribute__item d-flex align-items-center justify-between"
                      >
                        <span class="detail__row__value__attribute__item__label"
                          >Đơn vị</span
                        >
                        <span>{{ detail?.unit }}</span>
                      </div>
                      <div
                        v-if="detail?.width"
                        class="detail__row__value__attribute__item d-flex align-items-center justify-between"
                      >
                        <span class="detail__row__value__attribute__item__label"
                          >Chiều rộng</span
                        >
                        <span
                          >{{ detail?.width }}&nbsp;{{
                            detail?.widthUnit
                          }}</span
                        >
                      </div>
                      <div
                        v-if="detail?.weight"
                        class="detail__row__value__attribute__item d-flex align-items-center justify-between"
                      >
                        <span class="detail__row__value__attribute__item__label"
                          >Khối lượng</span
                        >
                        <span
                          >{{ detail?.weight }}&nbsp;{{
                            detail?.weightUnit
                          }}</span
                        >
                      </div>
                      <div
                        v-if="detail?.length"
                        class="detail__row__value__attribute__item d-flex align-items-center justify-between"
                      >
                        <span class="detail__row__value__attribute__item__label"
                          >Chiều dài</span
                        >
                        <span
                          >{{ detail?.length }}&nbsp;{{
                            detail?.lengthUnit
                          }}</span
                        >
                      </div>
                      <div
                        v-if="detail?.capacity"
                        class="detail__row__value__attribute__item d-flex align-items-center justify-between"
                      >
                        <span class="detail__row__value__attribute__item__label"
                          >Dung tích</span
                        >
                        <span
                          >{{ detail?.capacity }}&nbsp;{{
                            detail?.capacityUnit
                          }}</span
                        >
                      </div>
                      <div
                        v-if="detail?.packageNumber"
                        class="detail__row__value__attribute__item d-flex align-items-center justify-between"
                      >
                        <span class="detail__row__value__attribute__item__label"
                          >Cách thức đóng gói</span
                        >
                        <span
                          >{{ detail?.packageNumber }}&nbsp;{{
                            detail?.packageMethod
                          }}</span
                        >
                      </div>
                      <div
                        v-if="detail?.height"
                        class="detail__row__value__attribute__item d-flex align-items-center justify-between"
                      >
                        <span class="detail__row__value__attribute__item__label"
                          >Chiều cao</span
                        >
                        <span
                          >{{ detail?.height }}&nbsp;{{
                            detail?.heightUnit
                          }}</span
                        >
                      </div>
                      <div
                        v-if="detail?.color"
                        class="detail__row__value__attribute__item d-flex align-items-center justify-between"
                      >
                        <span class="detail__row__value__attribute__item__label"
                          >Màu sắc</span
                        >
                        <span>{{ detail?.color }}</span>
                      </div>
                    </div>
                    <template v-if="detail?.productExtends?.length">
                      <ul
                        class="detail__row__value__dynamic__attribute d-flex align-items-center justify-start flex-wrap"
                      >
                        <li
                          v-for="(item, index) in detail?.productExtends"
                          :key="index"
                          class="detail__row__value__dynamic__attribute__item mb-24"
                        >
                          <div
                            class="detail__row__value__dynamic__attribute__item__wrap"
                            v-if="isShowAttributeDynamic(item)"
                          >
                            <div
                              class="detail__row__value__attribute__item__label detail__row__value__dynamic__attribute__label mb-8"
                            >
                              {{ item.config?.name }}
                            </div>
                            <div
                              class="detail__row__value__dynamic__attribute__content"
                              v-if="
                                item.config?.frontEndInput ===
                                EAttributeInputType.group
                              "
                            >
                              <div
                                v-if="item.value?.images?.length"
                                class="d-flex flex-wrap align-items-center justify-start"
                              >
                                <e-img
                                  v-for="(img, eIndex) in item.value?.images"
                                  :src="img"
                                  :key="eIndex"
                                  size="60px"
                                  radius="6px"
                                  class="mr-8 mb-8"
                                />
                              </div>
                              <div class="mb-8" v-if="item.value?.description">
                                <b>{{ item.value?.description }}</b>
                              </div>
                              <div
                                v-if="item.value?.detail"
                                v-html="item.value?.detail"
                              ></div>
                            </div>
                            <div
                              class="detail__row__value__dynamic__attribute__content"
                              v-else-if="
                                item.config?.frontEndInput ===
                                EAttributeInputType.boolean
                              "
                            >
                              <el-switch :model-value="item?.value" />
                            </div>
                            <div
                              class="detail__row__value__dynamic__attribute__content"
                              v-else-if="
                                item.config?.frontEndInput ===
                                  EAttributeInputType.number ||
                                item.config?.frontEndInput ===
                                  EAttributeInputType.integer
                              "
                            >
                              {{ formatNumberWithCommas(item.value) }}
                            </div>
                            <div
                              class="detail__row__value__dynamic__attribute__content"
                              v-else-if="
                                item.config?.frontEndInput ===
                                EAttributeInputType.imageSingle
                              "
                            >
                              <e-img
                                :src="item.value"
                                size="80px"
                                radius="6px"
                              />
                            </div>
                            <div
                              class="detail__row__value__dynamic__attribute__content"
                              v-else-if="
                                item.config?.frontEndInput ===
                                EAttributeInputType.image
                              "
                            >
                              <div
                                class="d-flex flex-wrap align-items-center justify-start"
                              >
                                <e-img
                                  v-for="(img, eIndex) in item.value"
                                  :src="img"
                                  :key="eIndex"
                                  size="60px"
                                  radius="6px"
                                  class="mr-8 mb-8"
                                />
                              </div>
                            </div>
                            <div
                              class="detail__row__value__dynamic__attribute__content"
                              v-else-if="
                                item.config?.frontEndInput ===
                                EAttributeInputType.video
                              "
                            >
                              <div
                                class="d-flex flex-wrap align-items-center justify-start"
                              >
                                <e-video
                                  v-for="(img, eIndex) in item.value"
                                  :src="img"
                                  :key="eIndex"
                                  radius="6px"
                                  class="mb-8 detail__row__value__dynamic__attribute__content__video"
                                  object-fit="contain"
                                />
                              </div>
                            </div>
                            <div
                              class="detail__row__value__dynamic__attribute__content"
                              v-else
                            >
                              {{ item.value }}
                            </div>
                          </div>
                        </li>
                      </ul>
                    </template>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </c-card-container>
        <div class="d-flex align-items-center justify-end">
          <el-button class="detail__btn" @click="onBack">Đóng</el-button>
        </div>
      </el-col>
    </el-row>
  </c-page-container>
</template>

<script lang="ts" setup>
import {
  CPageContainer,
  CCardContainer,
  CSlideCarousel,
} from '@/components/Components'
import { computed, onMounted, ref } from 'vue'
import type {
  IProductExtendPayload,
  IProductExtraInfo,
  IProductItem,
} from '@/types/product'
import { useRoute } from 'vue-router'
import ProductService from '@/services/ProductService'
import { EAttributeInputType, S001 } from '@/constants'
import { formatNumberWithCommas } from '@/utils/string'
import EImg from '@/components/Elements/EImg.vue'
import EVideo from '@/components/Elements/EVideo.vue'
import { UseDmsRouter } from '@/composables'

const detail = ref<IProductItem | null>(null)
const route = useRoute()
const router = UseDmsRouter()
const fetchDetail = async (id: string) => {
  try {
    const { code, data } = await ProductService.getDetail(id)
    if (code === S001) {
      detail.value = {
        ...data,
        productExtends:
          data.productExtends?.map((item) => ({
            ...item,
            value: JSON.parse(item.value as string),
          })) || [],
      }
    }
  } catch (e) {
    console.log(e)
  }
}
const isShowProductInfo = computed(
  () =>
    detail.value?.productInfo?.images?.length ||
    detail.value?.productInfo?.description ||
    detail.value?.productInfo?.detail
)
const isShowBusinessInfo = computed(
  () =>
    detail.value?.businessInfo?.images?.length ||
    detail.value?.businessInfo?.description ||
    detail.value?.businessInfo?.detail
)
const isShowVerifiedInfo = computed(
  () =>
    detail.value?.verifiedInfo?.images?.length ||
    detail.value?.verifiedInfo?.description ||
    detail.value?.verifiedInfo?.detail
)
const isShowAttribute = computed(() => {
  const detailValue = detail.value
  return (
    detailValue?.unit ||
    detailValue?.weight ||
    detailValue?.capacity ||
    detailValue?.height ||
    detailValue?.width ||
    detailValue?.length ||
    detailValue?.packageNumber ||
    detailValue?.color ||
    detailValue?.productExtends?.length
  )
})
const isShowAttributeDynamic = computed(() => {
  return (item: IProductExtendPayload) => {
    let output = false
    switch (item.config?.frontEndInput) {
      case EAttributeInputType.text:
      case EAttributeInputType.textarea:
      case EAttributeInputType.htmleditor:
      case EAttributeInputType.date:
      case EAttributeInputType.number:
      case EAttributeInputType.integer:
      case EAttributeInputType.imageSingle:
      case EAttributeInputType.select:
        output = !!item.value?.toString() || false
        break
      case EAttributeInputType.group:
        output =
          !!(item.value as IProductExtraInfo).description ||
          !!(item.value as IProductExtraInfo).detail ||
          !!(item.value as IProductExtraInfo).images?.length ||
          false
        break
      case EAttributeInputType.image:
      case EAttributeInputType.video:
      case EAttributeInputType.document:
      case EAttributeInputType.multiselect:
        output = !!(item.value as string[])?.length || false
        break
      case EAttributeInputType.boolean:
        output = true
        break
    }
    return output
  }
})
const onBack = () => {
  router.pushByPath('/products')
}
onMounted(async () => {
  if (route.params.id) {
    await fetchDetail(route.params.id.toString())
  }
})
</script>

<style scoped lang="scss">
.detail {
  &__btn {
    width: 200px;
  }
  &__carousel {
    width: 35%;
    min-width: 35%;
  }
  &__content {
    color: var(--text-primary);
    font-size: 14px;
    margin-left: 32px;
  }
  &__title {
    font-size: 24px;
    font-weight: 600;
  }
  &__divider {
    height: 1px;
    width: 100%;
    background: var(--line-primary);
    margin: 24px 0;
  }
  &__row {
    &__label {
      color: var(--text-secondary);
      width: 175px;
      min-width: 175px;
      margin-right: 30px;
      line-height: 140%;
      &--bold {
        font-size: 18px;
        font-weight: 600;
        color: var(--text-primary);
      }
    }
    &__value {
      line-height: 120%;
      &--created-by {
        color: var(--text-secondary);
      }
      &__attribute {
        row-gap: 8px;
        column-gap: 24px;
        &__item {
          width: calc(50% - 12px);
          &__label {
            color: var(--text-secondary);
            line-height: 120%;
            &--dynamic {
              color: var(--text-primary);
            }
          }
        }
      }
      &__dynamic__attribute {
        padding-left: 0;
        margin-top: 32px;
        &__item {
          word-break: break-word;
          width: 100%;
          &__wrap {
          }
        }
        &__label {
          color: var(--text-secondary);
        }
        &__content {
          &__video {
            width: calc(100% - 24px);
            max-height: 240px;
          }
        }
      }
    }
    &__description {
      font-size: 16px;
      font-weight: 600;
    }
    &__detail {
      word-break: break-word;
    }
  }
}
</style>

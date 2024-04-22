<template>
  <c-page-container class="product" title="">
    <div class="product__content p-16 rounded-sm">
      <el-row :gutter="30">
        <el-col :xs="24" :md="10">
          <c-slide-carousel :images="form.images"></c-slide-carousel>
        </el-col>
        <el-col :xs="24" :md="14">
          <h3 class="baseDescriptions__title">{{ form.name }}</h3>

          <div class="baseDescriptions">
            <div class="baseDescriptions__flex">
              <div class="baseDescriptions__label">
                <h4><i class="icon-clock-1 mr-5"></i>{{ form.createdAt }}</h4>
              </div>
              <div class="baseDescriptions__content">
                <h4><i class="icon-frame-4 mr-5"></i>{{ form.userName }}</h4>
              </div>
            </div>
            <div class="baseDescriptions__flex" v-if="form.code">
              <div class="baseDescriptions__label">
                <p>Mã lô</p>
              </div>
              <div class="baseDescriptions__content">
                <p class="baseDescriptions__label__ellipsis">{{ form.code }}</p>
              </div>
            </div>
            <div class="baseDescriptions__flex" v-if="form.shipmentTypeName">
              <div class="baseDescriptions__label">
                <p>Loại lô</p>
              </div>
              <div class="baseDescriptions__content">
                <p>{{ form.shipmentTypeName }}</p>
              </div>
            </div>
            <div class="baseDescriptions__flex" v-if="form.productName">
              <div class="baseDescriptions__label">
                <p>Sản phẩm</p>
              </div>
              <div class="baseDescriptions__content">
                <p class="baseDescriptions__content__blue">
                  {{ form.productName }}
                </p>
              </div>
            </div>
            <div class="baseDescriptions__flex" v-if="form.manufacturerName">
              <div class="baseDescriptions__label">
                <p>Nhà sản xuất</p>
              </div>
              <div class="baseDescriptions__content">
                <p>
                  {{ form.manufacturerName }}
                </p>
              </div>
            </div>
            <div class="baseDescriptions__flex" v-if="form.produceTime">
              <div class="baseDescriptions__label">
                <p>Ngày sản xuất</p>
              </div>
              <div class="baseDescriptions__content">
                <p>{{ form.produceTime }}</p>
              </div>
            </div>
            <div class="baseDescriptions__flex" v-if="form.expiryDate">
              <div class="baseDescriptions__label">
                <p>Hạn sử dụng</p>
              </div>
              <div class="baseDescriptions__content">
                <p>{{ form.expiryDate }}</p>
              </div>
            </div>
            <div class="baseDescriptions__flex" v-if="form.quantity">
              <div class="baseDescriptions__label">
                <p>Số lượng</p>
              </div>
              <div class="baseDescriptions__content">
                <p>{{ form.quantity }}</p>
              </div>
            </div>
            <div class="baseDescriptions__flex" v-if="form.weight">
              <div class="baseDescriptions__label">
                <p>Khối lượng</p>
              </div>
              <div class="baseDescriptions__content">
                <p>{{ form.weight }} g</p>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="form__actions d-flex justify-end align-items-center mt-16">
      <el-button
        class="form__actions__btn form__actions__btn--cancel"
        @click="router.pushByPath('/consignments')"
        >Đóng
      </el-button>
    </div>
  </c-page-container>
</template>

<script lang="ts" setup>
import { CPageContainer, CSlideCarousel } from '@/components/Components'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import ConsignmentsService from '@/services/ConsignmentsService'
import { S001 } from '@/constants'
import type { IConsignmentsResponseDetail } from '@/types/consignments'
import { UseDmsRouter } from '@/composables'
const router = UseDmsRouter()
const route = useRoute()

onMounted(async () => {
  if (route.params.id) {
    await getDetail(route.params.id.toString())
  }
})
const form = ref<IConsignmentsResponseDetail>({})

const getDetail = async (id: string) => {
  try {
    const { code, data } = await ConsignmentsService.getDetail(id)
    if (code === S001) {
      form.value = data
    }
  } catch (e) {
    console.log(111, e)
  }
}
</script>

<style scoped lang="scss">
.product {
  &__title {
    font-size: 18px;
    font-weight: 700;
    color: var(--text-primary);
  }

  &__content {
    background-color: var(--background-primary);
  }

  &__filter {
    :deep(.product__filter__item--daterange) {
      width: 340px;
      max-width: 340px;
    }

    &__item {
      max-width: 300px;
      width: 300px;
    }
  }
}

.baseDescriptions {
  &__flex {
    display: flex;
    //align-items: center;
    margin-bottom: 15px;
  }

  &__title {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    color: #374957;
    margin-bottom: 10px;
    margin-top: 20px;
  }

  &__label {
    width: 200px;
    flex: 0 0 200px;
    &__ellipsis {
      word-break: break-word;
    }
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      color: #5f7d95;
    }
  }

  &__content {
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      color: #374957;
    }

    &__blue {
      color: #1d80dd !important;
      cursor: pointer;
    }
  }

  h4 {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #5f7d95;
    margin-bottom: 30px;
  }

  i {
    font-size: 16px;
    position: relative;
    top: 1px;
  }
}
.form {
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

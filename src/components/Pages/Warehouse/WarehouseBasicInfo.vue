<template>
  <div class="p-16">
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
              <h4>
                <i class="icon-frame-4 mr-5"></i>{{ form.createdByUserName }}
              </h4>
            </div>
          </div>
          <div class="baseDescriptions__flex" v-if="form.code">
            <div class="baseDescriptions__label">
              <p>Mã kho</p>
            </div>
            <div class="baseDescriptions__content">
              <p class="baseDescriptions__label__ellipsis">{{ form.code }}</p>
            </div>
          </div>
          <div class="baseDescriptions__flex" v-if="form.warehouseType">
            <div class="baseDescriptions__label">
              <p>Loại kho</p>
            </div>
            <div class="baseDescriptions__content">
              <p>{{ form.warehouseType }}</p>
            </div>
          </div>
          <div class="baseDescriptions__flex" v-if="form.address">
            <div class="baseDescriptions__label">
              <p>Địa chỉ</p>
            </div>
            <div class="baseDescriptions__content">
              <p>
                {{ form.address }}
              </p>
            </div>
          </div>
          <div class="baseDescriptions__flex" v-if="form.persionIncharge">
            <div class="baseDescriptions__label">
              <p>Người phụ trách</p>
            </div>
            <div class="baseDescriptions__content">
              <p>
                {{ form.persionIncharge }}
              </p>
            </div>
          </div>
          <br />
          <div class="baseDescriptions__flex" v-if="form.description">
            <div class="baseDescriptions__label">
              <h3>Mô tả chi tiết</h3>
            </div>
            <div class="baseDescriptions__content">
              <p v-html="form.description"></p>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { CSlideCarousel } from '@/components/Components'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { S001 } from '@/constants'
import WarehouseService from '@/services/WarehouseService'
import type { IWarehouseResponseDetail } from '@/types/warehouse'
const route = useRoute()

onMounted(async () => {
  if (route.params.id) {
    await getDetail(route.params.id.toString())
  }
})
const form = ref<IWarehouseResponseDetail>({})

const getDetail = async (id: string) => {
  try {
    const { code, data } = await WarehouseService.getDetail(id)
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
    color: var(--text-primary);
    margin-bottom: 10px;
    margin-top: 20px;
  }

  &__label {
    width: 200px;
    flex: 0 0 200px;
    &__ellipsis {
      word-break: break-word;
      @include ellipsis(1);
    }
    h3 {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      color: var(--text-primary);
    }
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      color: var(--gray);
    }
  }

  &__content {
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      color: var(--text-primary);
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
    color: var(--gray);
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

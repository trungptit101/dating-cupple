<template>
  <c-page-container class="product" title="">
    <div class="product__content rounded-sm tabCustom">
      <el-tabs
        type="border-card"
        class="demo-tabs rounded-sm"
        v-model="activeName"
      >
        <el-tab-pane label="Thông tin cơ bản" name="first">
          <div class="p-16">
            <warehouse-basic-info
              v-if="activeName === 'first'"
            ></warehouse-basic-info>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Tồn kho theo sản phẩm" name="second">
          <warehouse-inventory-product
            v-if="activeName === 'second'"
          ></warehouse-inventory-product>
        </el-tab-pane>
        <el-tab-pane label="Tồn kho theo lô hàng" name="third">
          <warehouse-inventory-consignment
            v-if="activeName === 'third'"
          ></warehouse-inventory-consignment>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div
      class="form__actions d-flex justify-end align-items-center mt-16"
      v-if="activeName === 'first'"
    >
      <el-button
        class="form__actions__btn form__actions__btn--cancel"
        @click="router.pushByPath('/warehouse')"
        >Đóng
      </el-button>
    </div>
  </c-page-container>
</template>

<script lang="ts" setup>
import { CPageContainer } from '@/components/Components'
import { ref } from 'vue'
// import { useRoute } from 'vue-router'
// import { S001 } from '@/constants'
import { UseDmsRouter } from '@/composables'
// import WarehouseService from '@/services/WarehouseService'
// import type { IWarehouseResponseDetail } from '@/types/warehouse'
import WarehouseBasicInfo from '@/components/Pages/Warehouse/WarehouseBasicInfo.vue'
import WarehouseInventoryProduct from '@/components/Pages/Warehouse/WarehouseInventoryProduct.vue'
import WarehouseInventoryConsignment from '@/components/Pages/Warehouse/WarehouseInventoryConsignment.vue'
// import WarehouseInventoryProduct from '@/components/Pages/Warehouse/WarehouseInventoryProduct.vue'
const router = UseDmsRouter()
const activeName = ref('first')
// const route = useRoute()
//
// onMounted(async () => {
//   if (route.params.id) {
//     await getDetail(route.params.id.toString())
//   }
// })
// const form = ref<IWarehouseResponseDetail>({})
//
// const getDetail = async (id: string) => {
//   try {
//     const { code, data } = await WarehouseService.getDetail(id)
//     if (code === S001) {
//       form.value = data
//     }
//   } catch (e) {
//     console.log(111, e)
//   }
// }
</script>

<style scoped lang="scss">
.product {
  &__content {
    background-color: var(--background-primary);
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

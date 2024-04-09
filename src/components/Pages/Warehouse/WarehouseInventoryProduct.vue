<template>
  <div class="tbl">
    <!--    @selection-change="handleSelectionChange"-->
    <div class="d-flex justify-between">
      <div
        class="product__filter d-flex align-items-center justify-start flex-wrap"
      >
        <e-select
          :items="productList"
          :remote="true"
          :filterable="true"
          :reserve-keyword="true"
          :remote-show-suffix="true"
          :loading="loadingSelectProductList"
          :remoteMethod="fetchSelectProduct"
          item-value="value"
          item-label="label"
          v-model="filter.productId"
          class="product__filter__item mr-8 mb-8"
          placeholder="Nhập tên hoặc mã sản phẩm"
          maxWidth="300px"
        />
        <el-button type="primary" @click="onSearch" class="mb-8">
          <i class="icon-Search" />
        </el-button>
        <el-button class="mb-8" @click="onReset">
          <i class="icon-Resset" />
        </el-button>
      </div>

      <el-button type="info" @click="exportExcel">
        <i class="icon-export-2 mr-4"></i>
        <span>Export</span>
      </el-button>
    </div>

    <el-table
      v-loading="loading"
      :data="listData"
      class="tbl__table"
      ref="multipleTableRef"
      row-key="id"
    >
      <!--      <el-table-column type="selection" width="55" :reserve-selection="true" />-->
      <!--      <el-table-column prop="id" label="ID" width="100" align="center" />-->
      <el-table-column
        prop="productImage"
        label="Ảnh"
        width="205"
        align="center"
      >
        <template #default="{ row }">
          <e-img
            v-if="row.productImage"
            class="form__ecommerce__logo"
            :src="row.productImage"
            size="65px"
          />
        </template>
      </el-table-column>
      <el-table-column
        prop="productName"
        label="Tên sản phẩm"
        min-width="240"
        align="left"
        header-align="center"
      />
      <el-table-column
        prop="barcode"
        label="Mã vạch"
        width="205"
        align="center"
      >
        <template #default="scope">
          <c-barcode
            v-if="scope.row.barcode"
            :value="scope.row.barcode"
            :id="scope.$index"
          />
        </template>
      </el-table-column>
      <el-table-column
        prop="brand"
        label="Thương hiệu"
        width="205"
        align="center"
      />
      <el-table-column
        prop="quantity"
        label="Số lượng tồn"
        width="205"
        align="center"
      />
      <el-table-column
        prop="quantityUnit"
        label="Đơn vị"
        width="205"
        align="center"
      />
    </el-table>
    <div class="d-flex align-items-center justify-end mt-16">
      <e-pagination
        v-model:current-page="filter.page"
        v-model:page-size="filter.pageSize"
        :total="totals"
        @current-change="fetchListData"
        @size-change="onSearch"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { S001 } from '@/constants'
import { ElNotification } from 'element-plus'
import EImg from '@/components/Elements/EImg.vue'
import EPagination from '@/components/Elements/EPagination.vue'
import type { IWarehouseInventoryProductQuery } from '@/types/warehouse'
import ESelect from '@/components/Elements/ESelect.vue'
import BaseService from '@/services/Base/BaseService'
import type { IProductSelectList } from '@/types/base'
import WarehouseService from '@/services/WarehouseService'
import { exportFileExcel } from '@/utils'
import { useRoute } from 'vue-router'
import CBarcode from '@/components/Components/CBarcode.vue'
/*<=========define==========>*/
const filter = ref<IWarehouseInventoryProductQuery>({
  page: 1,
  pageSize: 10,
  productId: null,
  warehouseId: null,
})
const productQuery = ref<IProductSelectList>({
  page: 1,
  pageSize: 10,
  keyword: '',
})
const loadingSelectProductList = ref<boolean>(false)
const productList = ref<object[]>([])
const listData = ref<object[]>([])
const totals = ref<number>(0)
const loading = ref(false)
const route = useRoute()

/*<=========end define==========>*/
onMounted(async () => {
  if (route.params.id) {
    filter.value.warehouseId = Number(route.params.id)
  }
  await Promise.all([fetchListData(), fetchSelectProduct()])
})
const onSearch = () => {
  filter.value.page = 1
  fetchListData()
}
const onReset = () => {
  filter.value = {
    page: 1,
    pageSize: filter.value.pageSize,
    productId: null,
    warehouseId: Number(route.params.id),
  }
  fetchListData()
}
const fetchListData = async () => {
  try {
    loading.value = true
    const { code, data } = await WarehouseService.getListProductInventory(
      filter.value
    )
    if (code === S001) {
      listData.value = data.items
      totals.value = data.totalElement
      loading.value = false
    }
  } catch (e) {
    loading.value = false
    ElNotification({
      message: 'Có lỗi xảy ra',
      type: 'error',
    })
  }
}

const fetchSelectProduct = async (query?: string) => {
  try {
    loadingSelectProductList.value = true
    productQuery.value.keyword = query ? query.trim() : ''

    const { code, data } = await BaseService.getListProduct(productQuery.value)
    if (code === S001) {
      productList.value = data.items
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
const exportExcel = async () => {
  try {
    const data = await WarehouseService.exportInventoryProduct(filter.value)
    if (data) {
      exportFileExcel(data, 'Danh sách tồn kho theo sản phẩm')
    }
  } catch (e) {
    ElNotification({
      message: 'Có lỗi xảy ra',
      type: 'error',
    })
  }
}
</script>

<style scoped lang="scss">
.tbl {
  &__table {
    width: 100%;
  }
}
.tag {
  &__action {
    padding: 5px;
    border-radius: 6px;

    &__red {
      background-color: var(--danger-10);
      span {
        color: var(--danger);
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
      }
    }
    &__green {
      background-color: var(--green);
      span {
        color: var(--secondary);
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
      }
    }
  }
}
</style>

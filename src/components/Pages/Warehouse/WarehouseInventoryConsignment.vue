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
        <e-select
          :items="shipmentList"
          :remote="true"
          :filterable="true"
          :reserve-keyword="true"
          :remote-show-suffix="true"
          :loading="loadingSelectShipmentList"
          :remoteMethod="fetchSelectShipment"
          item-value="value"
          item-label="label"
          v-model="filter.shipmentId"
          class="product__filter__item mr-8 mb-8"
          placeholder="Nhập tên hoặc lô hàng"
          maxWidth="300px"
        />
        <el-button type="primary" @click="onSearch" class="mb-8">
          <i class="icon-Search" />
        </el-button>
        <el-button class="mb-8" @click="onReset">
          <i class="icon-Resset" />
        </el-button>
      </div>
      <div>
        <el-button type="primary" @click="warehouse">
          <i class="icon-add-3 mr-4"></i>
          <span>Thêm mới</span>
        </el-button>
        <el-button type="info" @click="exportExcel">
          <i class="icon-export-2 mr-4"></i>
          <span>Export</span>
        </el-button>
      </div>
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
        prop="shipmentName"
        label="Tên lô hàng"
        width="205"
        align="center"
      />
      <el-table-column
        prop="shipmentCode"
        label="Mã lô hàng"
        width="205"
        align="center"
      />
      <el-table-column
        prop="expiryDate"
        label="Hạn sử dụng"
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
      <el-table-column
        fixed="right"
        prop="action"
        label="Hành động"
        width="205"
        align="center"
      >
        <template #default="{ row }">
          <div class="d-flex align-items-center justify-center">
            <el-tooltip content="Chi tiết">
              <div
                @click="onDetail(row)"
                class="btn__action btn__action--yellow d-flex justify-center align-items-center mr-8"
              >
                <i class="icon-eye-2"></i>
              </div>
            </el-tooltip>
          </div>
        </template>
      </el-table-column>
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
  <c-modal-table-multiselect
    ref="modalMultiselectRef"
    @search="warehouse"
    @confirm="onConfirmWarehouse"
  >
    <el-table-column type="selection" width="55" :reserve-selection="true" />
    <el-table-column prop="image" label="Ảnh" width="100" align="center">
      <template #default="{ row }">
        <e-img
          v-if="row.image"
          class="form__ecommerce__logo"
          :src="row.image"
          size="65px"
        />
      </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="Tên lô hàng"
      min-width="200"
      align="center"
    />
    <el-table-column
      prop="code"
      label="Mã lô hàng"
      width="150"
      align="center"
    />
    <el-table-column
      prop="shipmentType"
      label="Loại lô hàng"
      width="150"
      align="center"
    />
  </c-modal-table-multiselect>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'
import { S001 } from '@/constants'
import { ElNotification } from 'element-plus'
import EImg from '@/components/Elements/EImg.vue'
import EPagination from '@/components/Elements/EPagination.vue'
import type {
  IWarehouseInventoryShipmentItem,
  IWarehouseInventoryShipmentQuery,
  IWarehousesShipmentsItem,
} from '@/types/warehouse'
import ESelect from '@/components/Elements/ESelect.vue'
import BaseService from '@/services/Base/BaseService'
import type { IProductSelectList, IShipmentSelectList } from '@/types/base'
import WarehouseService from '@/services/WarehouseService'
import { exportFileExcel } from '@/utils'
import CModalTableMultiselect from '@/components/Components/CModalTableMultiselect.vue'

import { useRoute } from 'vue-router'
import { UseDmsRouter } from '@/composables'
import CBarcode from '@/components/Components/CBarcode.vue'
/*<=========define==========>*/
const filter = ref<IWarehouseInventoryShipmentQuery>({
  page: 1,
  pageSize: 10,
  productId: null,
  warehouseId: null,
  shipmentId: null,
})
const productQuery = ref<IProductSelectList>({
  page: 1,
  pageSize: 10,
  keyword: '',
})
const shipmentQuery = ref<IShipmentSelectList>({
  page: 1,
  pageSize: 10,
  key: '',
})
const loadingSelectProductList = ref<boolean>(false)
const loadingSelectShipmentList = ref<boolean>(false)
const productList = ref<object[]>([])
const shipmentList = ref<object[]>([])
const listData = ref<object[]>([])
const totals = ref<number>(0)
const loading = ref(false)
const route = useRoute()
const router = UseDmsRouter()

/*<=========end define==========>*/
onMounted(async () => {
  if (route.params.id) {
    filter.value.warehouseId = Number(route.params.id)
  }
  await Promise.all([
    fetchListData(),
    fetchSelectProduct(),
    fetchSelectShipment(),
  ])
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
    shipmentId: null,
    warehouseId: Number(route.params.id),
  }
  fetchListData()
}
const fetchListData = async () => {
  try {
    loading.value = true
    const { code, data } = await WarehouseService.getListShipmentInventory(
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
const fetchSelectShipment = async (query?: string) => {
  try {
    loadingSelectShipmentList.value = true
    shipmentQuery.value.key = query ? query.trim() : ''

    const { code, data } = await BaseService.getListShipment(
      shipmentQuery.value
    )
    if (code === S001) {
      shipmentList.value = data.items
      loadingSelectShipmentList.value = false
    }
  } catch (e) {
    loadingSelectShipmentList.value = false

    // ElNotification({
    //   message: 'Có lỗi xảy ra',
    //   type: 'error',
    // })
  }
}
const exportExcel = async () => {
  try {
    const data = await WarehouseService.exportInventoryConsignment(filter.value)
    if (data) {
      exportFileExcel(data, 'Danh sách tồn kho theo lô hàng')
    }
  } catch (e) {
    ElNotification({
      message: 'Có lỗi xảy ra',
      type: 'error',
    })
  }
}
const onDetail = (e: IWarehouseInventoryShipmentItem) => {
  router.pushByPath(`/consignments/detail/${e.shipmentId}`)
}
/*<=========warehouse==========>*/
const modalMultiselectRef = ref()
const filterMultiselect = reactive({
  page: 1,
  pageSize: 10,
  key: null,
})
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const warehouse = async () => {
  try {
    // modalMultiselectRef.value.filter.key = filterMultiselect.key

    filterMultiselect.page = modalMultiselectRef.value.filter?.page
    filterMultiselect.key = modalMultiselectRef.value.filter?.key
    modalMultiselectRef.value.filter.pageSize = filterMultiselect.pageSize

    modalMultiselectRef.value.changeLoading(true)
    const { code, data } = await WarehouseService.getListWarehousesShipments(
      filterMultiselect
    )
    if (code === S001) {
      modalMultiselectRef.value.open({
        dataList: [],
        title: `Nhập kho hàng`,
        titleSearch: `Nhập tên hoặc mã lô hàng`,
        titleSubmit: `Nhập kho`,
        width: `800px`,
        modalList: data.items,
        totals: data.totalElement,
      })
      modalMultiselectRef.value.changeLoading(false)
    }
  } catch (e) {
    modalMultiselectRef.value.changeLoading(false)

    ElNotification({
      message: 'Có lỗi xảy ra',
      type: 'error',
    })
  }
}
const onConfirmWarehouse = async (obj: {
  childrenList: object[]
  parentList: object[]
}) => {
  try {
    let shipmentIds: number[] = []
    obj.childrenList.map((res: IWarehousesShipmentsItem) => {
      shipmentIds.push(Number(res?.id))
    })
    let payload = {
      warehouseId: Number(route.params.id),
      shipmentIds: shipmentIds,
    }
    console.log('obj', obj.childrenList)
    const { code } = await WarehouseService.receipt(payload)
    if (code === S001) {
      ElNotification({
        message: 'Nhập kho lô hàng thành công',
        type: 'success',
      })
      filter.value.page = 1
      fetchListData()
      return modalMultiselectRef.value.close()
    }
  } catch (e) {
    console.log(e)
  }
}
/*<=========end warehouse==========>*/
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

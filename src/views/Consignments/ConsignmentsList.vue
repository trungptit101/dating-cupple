<template>
  <c-page-container class="product" title="Danh sách lô hàng">
    <div class="product__content p-16 rounded-sm">
      <div
        class="product__filter d-flex align-items-center justify-start flex-wrap"
      >
        <el-input
          class="product__filter__item mr-8 mb-8"
          v-model="filter.key"
          placeholder="Tên hoặc mã lô hàng"
        >
          <template #prefix>
            <i class="product__filter__item__icon icon-Search" />
          </template>
        </el-input>
        <e-select
          :items="state.shipmentTypeList"
          item-value="value"
          item-label="label"
          v-model="filter.shipmentTypeId"
          class="product__filter__item mr-8 mb-8"
          placeholder="Loại lô"
          maxWidth="300px"
          :remote="true"
          :filterable="true"
          :reserve-keyword="true"
          :remote-show-suffix="true"
          :loading="loadingSelectShipmentTypeList"
          :remoteMethod="fetchSelectShipmentType"
        />

        <e-select
          :items="state.warehouseList"
          item-value="value"
          item-label="label"
          v-model="filter.warehouseId"
          class="product__filter__item mr-8 mb-8"
          placeholder="Kho hàng"
          maxWidth="300px"
          :remote="true"
          :filterable="true"
          :reserve-keyword="true"
          :remote-show-suffix="true"
          :loading="loadingSelectWarehouseList"
          :remoteMethod="fetchSelectWarehouse"
        />
        <e-select
          :items="state.manuFacturerList"
          item-value="value"
          item-label="label"
          v-model="filter.manuFacturerId"
          class="product__filter__item mr-8 mb-8"
          placeholder="Nhà sản xuất"
          maxWidth="300px"
          :remote="true"
          :filterable="true"
          :reserve-keyword="true"
          :remote-show-suffix="true"
          :loading="loadingSelectManufacturerList"
          :remoteMethod="fetchSelectManufacturer"
        />
        <e-date-range-picker
          class="product__filter__item product__filter__item--daterange mr-8 mb-8"
          v-model:from="filter.expiryTimeStart"
          v-model:to="filter.expiryTimeEnd"
          type="daterange"
          range-separator="~"
          start-placeholder="Hạn sử dung: Từ"
          end-placeholder="Đến"
        />

        <e-date-range-picker
          class="product__filter__item product__filter__item--daterange mr-8 mb-8"
          v-model:from="filter.createdAtStart"
          v-model:to="filter.createdAtEnd"
          type="daterange"
          range-separator="~"
          start-placeholder="Ngày tạo: Từ"
          end-placeholder="Đến"
        />

        <e-select
          :items="state.staffList"
          item-value="value"
          item-label="label"
          v-model="filter.userCreatedId"
          class="product__filter__item mr-8 mb-8"
          placeholder="Người tạo"
          maxWidth="300px"
          :remote="true"
          :filterable="true"
          :reserve-keyword="true"
          :remote-show-suffix="true"
          :loading="loadingSelectStaffList"
          :remoteMethod="fetchSelectStaff"
        />
        <e-date-range-picker
          class="product__filter__item product__filter__item--daterange mr-8 mb-8"
          v-model:from="filter.updateedAtStart"
          v-model:to="filter.updateedAtEnd"
          type="daterange"
          range-separator="~"
          start-placeholder="Ngày cập nhật: Từ"
          end-placeholder="Đến"
        />

        <el-button type="primary" @click="onSearch" class="mb-8">
          <i class="icon-Search" />
        </el-button>
        <el-button class="mb-8" @click="onReset">
          <i class="icon-Resset" />
        </el-button>
      </div>
      <div class="d-flex align-items-center justify-start mt-4 mb-32">
        <el-button
          type="primary"
          @click="router.pushByPath('/consignments/form')"
        >
          <i class="icon-add-3 mr-4"></i>
          <span>Thêm mới</span>
        </el-button>
        <el-button type="info" @click="exportExcel">
          <i class="icon-export-2 mr-4"></i>
          <span>Export</span>
        </el-button>
        <!--        <el-button-->
        <!--          @click="warehouse"-->
        <!--          type="info"-->
        <!--          :disabled="multipleSelection.length === 0"-->
        <!--        >-->
        <!--          <i class="icon-house-2 mr-4"></i>-->
        <!--          <span>Nhập kho</span>-->
        <!--        </el-button>-->
      </div>
      <consignments-table
        ref="consignmentsTableRef"
        :items="state.listData"
        @select="selectConsignmentsTable"
        @refresh="fetchListData"
      />
      <div class="d-flex align-items-center justify-end mt-16">
        <e-pagination
          v-model:current-page="filter.page"
          v-model:page-size="filter.pageSize"
          :total="state.totals"
          @current-change="fetchListData"
          @size-change="onSearch"
        />
      </div>
    </div>
  </c-page-container>
  <!--  <c-modal-table-multiselect-->
  <!--    ref="modalMultiselectRef"-->
  <!--    @search="warehouse"-->
  <!--    @confirm="onConfirmWarehouse"-->
  <!--  >-->
  <!--    <el-table-column type="selection" width="55" :reserve-selection="true" />-->
  <!--    <el-table-column prop="image" label="Ảnh" width="100" align="center">-->
  <!--      <template #default="{ row }">-->
  <!--        <e-img-->
  <!--          v-if="row.image"-->
  <!--          class="form__ecommerce__logo"-->
  <!--          :src="row.image"-->
  <!--          size="65px"-->
  <!--        />-->
  <!--      </template>-->
  <!--    </el-table-column>-->
  <!--    <el-table-column-->
  <!--      prop="name"-->
  <!--      label="Tên kho hàng"-->
  <!--      min-width="200"-->
  <!--      align="center"-->
  <!--    />-->
  <!--    <el-table-column-->
  <!--      prop="code"-->
  <!--      label="Mã kho hàng"-->
  <!--      width="150"-->
  <!--      align="center"-->
  <!--    />-->
  <!--    <el-table-column-->
  <!--      prop="shipmentType"-->
  <!--      label="Trạng thái"-->
  <!--      width="150"-->
  <!--      align="center"-->
  <!--    />-->
  <!--  </c-modal-table-multiselect>-->
</template>

<script lang="ts" setup>
import ConsignmentsTable from '@/components/Pages/Consignments/ConsignmentsTable.vue'
import EPagination from '@/components/Elements/EPagination.vue'
import { onMounted, reactive, ref } from 'vue'
import { UseDmsRouter } from '@/composables'
import { CPageContainer } from '@/components/Components'
import ConsignmentsService from '@/services/ConsignmentsService'
import BaseService from '@/services/Base/BaseService'
import { S001 } from '@/constants'
import { ElNotification } from 'element-plus'
import type {
  IShipmentTypeSelectList,
  IWarehouseSelectList,
  IManufacturerSelectList,
  IStaffSelectList,
} from '@/types/base'
import type { DataType } from '@/types/consignments'
import type {
  IConsignmentsQuery,
  IConsignmentsItem,
} from '@/types/consignments'
import ESelect from '@/components/Elements/ESelect.vue'
import EDateRangePicker from '@/components/Elements/EDateRangePicker.vue'
import { exportFileExcel } from '@/utils'
/*<=========define==========>*/

const router = UseDmsRouter()
const consignmentsTableRef = ref()

const filter = ref<IConsignmentsQuery>({
  page: 1,
  pageSize: 10,
  key: null,
  shipmentTypeId: null,
  status: null,
  warehouseId: null,
  manuFacturerId: null,
  expiryTimeStart: null,
  expiryTimeEnd: null,
  createdAtStart: null,
  createdAtEnd: null,
  updateedAtStart: null,
  updateedAtEnd: null,
  userCreatedId: null,
})
const shipmentTypeQuery = ref<IShipmentTypeSelectList>({
  page: 1,
  pageSize: 10,
  key: '',
})
const WarehouseQuery = ref<IWarehouseSelectList>({
  page: 1,
  pageSize: 10,
  key: '',
  status: null,
})
const StaffQuery = ref<IStaffSelectList>({
  page: 1,
  pageSize: 10,
  key: '',
  status: null,
})
const ManufacturerQuery = ref<IManufacturerSelectList>({
  page: 1,
  pageSize: 10,
  keyword: '',
})
const state = reactive<DataType>({
  staffList: [],
  shipmentTypeList: [],
  warehouseList: [],
  manuFacturerList: [],
  listData: [],
  totals: 0,
})
/*<=========end define==========>*/

onMounted(async () => {
  await Promise.all([
    fetchListData(),
    fetchSelectStaff(),
    fetchSelectShipmentType(),
    fetchSelectWarehouse(),
    fetchSelectManufacturer(),
  ])
})

/*<=========fetch==========>*/
const onReset = () => {
  filter.value = {
    page: 1,
    pageSize: filter.value.pageSize,
    key: null,
    shipmentTypeId: null,
    status: null,
    warehouseId: null,
    manuFacturerId: null,
    expiryTimeStart: null,
    expiryTimeEnd: null,
    createdAtStart: null,
    createdAtEnd: null,
    updateedAtStart: null,
    updateedAtEnd: null,
    userCreatedId: null,
  }
  fetchListData()
}
const onSearch = () => {
  filter.value.page = 1
  fetchListData()
}
const fetchListData = async () => {
  try {
    const payload: IConsignmentsQuery = {
      ...filter.value,
      key: filter.value.key ? filter.value.key.trim() : '',
    }
    consignmentsTableRef.value.changeLoading(true)
    const { code, data } = await ConsignmentsService.getList(payload)
    if (code === S001) {
      state.listData = data.items
      state.totals = data.totalElement
      consignmentsTableRef.value.changeLoading(false)
    }
  } catch (e) {
    consignmentsTableRef.value.changeLoading(false)

    ElNotification({
      message: 'Có lỗi xảy ra',
      type: 'error',
    })
  }
}
const loadingSelectShipmentTypeList = ref<boolean>(false)
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
  }
}
const loadingSelectManufacturerList = ref<boolean>(false)

const fetchSelectManufacturer = async (query?: string) => {
  try {
    loadingSelectManufacturerList.value = true
    ManufacturerQuery.value.keyword = query ? query.trim() : ''
    const { code, data } = await BaseService.getListManufacturer(
      ManufacturerQuery.value
    )
    if (code === S001) {
      state.manuFacturerList = data.items
      loadingSelectManufacturerList.value = false
    }
  } catch (e) {
    loadingSelectManufacturerList.value = false
  }
}
const loadingSelectWarehouseList = ref<boolean>(false)

const fetchSelectWarehouse = async (query?: string) => {
  try {
    loadingSelectWarehouseList.value = true
    WarehouseQuery.value.key = query ? query.trim() : ''
    const { code, data } = await BaseService.getListWarehouse(
      WarehouseQuery.value
    )
    if (code === S001) {
      state.warehouseList = data.items
      loadingSelectWarehouseList.value = false

      // console.log('state.data', data.items)
      // listData.value = data.items
      // totals.value = data.totalElement
    }
  } catch (e) {
    loadingSelectWarehouseList.value = false

    // ElNotification({
    //   message: 'Có lỗi xảy ra',
    //   type: 'error',
    // })
  }
}
const loadingSelectStaffList = ref<boolean>(false)

const fetchSelectStaff = async (query?: string) => {
  try {
    loadingSelectStaffList.value = true
    StaffQuery.value.key = query ? query.trim() : ''
    const { code, data } = await BaseService.getListStaff(StaffQuery.value)
    if (code === S001) {
      state.staffList = data.items
      loadingSelectStaffList.value = false

      // console.log('state.data', data.items)
      // listData.value = data.items
      // totals.value = data.totalElement
    }
  } catch (e) {
    loadingSelectStaffList.value = false

    // ElNotification({
    //   message: 'Có lỗi xảy ra',
    //   type: 'error',
    // })
  }
}

/*<=========end fetch==========>*/
/*<=========multiple Select table==========>*/
const multipleSelection = ref<IConsignmentsItem[]>([])
const selectConsignmentsTable = (event: IConsignmentsItem[]) => {
  multipleSelection.value = event
  console.log('event', multipleSelection.value)
}
/*<=========end multiple Select table==========>*/
/*<=========warehouse==========>*/
const modalMultiselectRef = ref()
const nameData = ref<Array<string | null | undefined>>([])
const filterMultiselect = reactive({
  page: 1,
  pageSize: 10,
  key: null,
})
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const warehouse = async () => {
  try {
    if (multipleSelection.value.length === 0) {
      ElNotification({
        message: 'Bạn chưa chọn lô hàng',
        type: 'error',
      })
      return
    }
    nameData.value = []
    multipleSelection.value.map((e: IConsignmentsItem) => {
      nameData.value.push(e?.name)
    })
    // modalMultiselectRef.value.filter.key = filterMultiselect.key

    filterMultiselect.page = modalMultiselectRef.value.filter?.page
    filterMultiselect.key = modalMultiselectRef.value.filter?.key
    modalMultiselectRef.value.filter.pageSize = filterMultiselect.pageSize

    modalMultiselectRef.value.changeLoading(true)
    const { code, data } = await ConsignmentsService.getList(filterMultiselect)
    if (code === S001) {
      modalMultiselectRef.value.open({
        dataList: multipleSelection.value,
        title: `Nhập kho lô hàng: ${nameData.value.join(', ')}`,
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
// const onConfirmWarehouse = async (id: number) => {
//   try {
//     const { code } = await ConsignmentsService.delete(id)
//     if (code === S001) {
//       ElNotification({
//         message: 'Nhập kho lô hàng thành công',
//         type: 'success',
//       })
//       filter.value.page = 1
//       fetchListData()
//       return modalMultiselectRef.value.close()
//     }
//   } catch (e) {
//     console.log(e)
//   }
// }
const exportExcel = async () => {
  try {
    const data = await ConsignmentsService.export(filter.value)
    if (data) {
      exportFileExcel(data, 'Danh sách lô hàng')
    }
  } catch (e) {
    ElNotification({
      message: 'Có lỗi xảy ra',
      type: 'error',
    })
  }
}
/*<=========end warehouse==========>*/
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
</style>

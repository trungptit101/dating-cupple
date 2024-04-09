<template>
  <c-page-container class="product" title="Danh sách nhân viên">
    <div class="product__content p-16 rounded-sm">
      <div
        class="product__filter d-flex align-items-center justify-start flex-wrap"
      >
        <el-input
          class="product__filter__item mr-8 mb-8"
          v-model="filter.key"
          placeholder="Tên nhân viên, mã NV, SĐT"
        >
          <template #prefix>
            <i class="product__filter__item__icon icon-Search" />
          </template>
        </el-input>
        <e-select
          :items="state.warehouseTypeList"
          item-value="value"
          item-label="label"
          v-model="filter.warehouseTypeId"
          class="product__filter__item mr-8 mb-8"
          placeholder="Phòng ban"
          maxWidth="300px"
          :remote="true"
          :filterable="true"
          :reserve-keyword="true"
          :remote-show-suffix="true"
          :loading="loadingSelectWarehouseType"
          :remoteMethod="fetchSelectWarehouseType"
        />
        <e-select
          :items="state.statusList"
          item-value="value"
          item-label="label"
          v-model="filter.status"
          class="product__filter__item mr-8 mb-8"
          placeholder="Trạng thái"
          maxWidth="300px"
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
        <e-date-range-picker
          class="product__filter__item product__filter__item--daterange mr-8 mb-8"
          v-model:from="filter.updateedAtStart"
          v-model:to="filter.updateedAtEnd"
          type="daterange"
          range-separator="~"
          start-placeholder="Ngày bắt đầu HĐ: Từ"
          end-placeholder="Đến"
        />
        <e-date-range-picker
          class="product__filter__item product__filter__item--daterange mr-8 mb-8"
          v-model:from="filter.updateedAtStart"
          v-model:to="filter.updateedAtEnd"
          type="daterange"
          range-separator="~"
          start-placeholder="Ngày kết thúc HĐ: Từ"
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
        <el-button type="primary" @click="router.pushByPath('/warehouse/form')">
          <i class="icon-add-3 mr-4"></i>
          <span>Thêm mới</span>
        </el-button>
        <el-button type="info" @click="onImport">
          <i class="icon-import mr-4"></i>
          <span>Import</span>
        </el-button>
        <el-button type="info" @click="exportExcel">
          <i class="icon-export-2 mr-4"></i>
          <span>Export</span>
        </el-button>
        <el-button
          type="primary"
          @click="onConfirm"
          :disabled="multipleSelection.length === 0"
        >
          <span>Kích hoạt</span>
        </el-button>
        <el-button
          type="danger"
          @click="onConfirm"
          :disabled="multipleSelection.length === 0"
        >
          <span>Khóa tài khoản</span>
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
      <!--      @select="selectConsignmentsTable"-->
      <employees-table
        ref="employeesTableRef"
        :items="state.listData"
        @refresh="fetchListData"
        @select="selectConsignmentsTable"
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
  <c-modal-import ref="modalImportRef" @confirm="onConfirmImport" />
  <c-modal-confirm ref="modalConfirmRef" @confirm="onConfirmModal" />
</template>

<script lang="ts" setup>
// import ConsignmentsTable from '@/components/Pages/Consignments/ConsignmentsTable.vue'
import EPagination from '@/components/Elements/EPagination.vue'
import { onMounted, reactive, ref } from 'vue'
import { UseDmsRouter } from '@/composables'
import {
  CModalConfirm,
  CModalImport,
  CPageContainer,
} from '@/components/Components'
// import ConsignmentsService from '@/services/ConsignmentsService'
import BaseService from '@/services/Base/BaseService'
import { S001 } from '@/constants'
import { ElNotification } from 'element-plus'
import type {
  // IShipmentTypeSelectList,
  // IWarehouseSelectList,
  // IManufacturerSelectList,
  IStaffSelectList,
  IWarehouseTypeSelectList,
} from '@/types/base'
import type { DataType, IWarehouseQuery } from '@/types/warehouse'
import ESelect from '@/components/Elements/ESelect.vue'
import EDateRangePicker from '@/components/Elements/EDateRangePicker.vue'
// import { exportFileExcel } from '@/utils'
import WarehouseService from '@/services/WarehouseService'
import ProductService from '@/services/ProductService'
import { exportFileExcel } from '@/utils'
import EmployeesTable from '@/components/Pages/Employees/EmployeesTable.vue'
import type { IConsignmentsItem } from '@/types/consignments'
import ConsignmentsService from '@/services/ConsignmentsService'
/*<=========define==========>*/

const router = UseDmsRouter()
const employeesTableRef = ref()

const filter = ref<IWarehouseQuery>({
  page: 1,
  pageSize: 10,
  key: null,
  warehouseTypeId: null,
  status: null,
  createdAtStart: null,
  createdAtEnd: null,
  updateedAtStart: null,
  updateedAtEnd: null,
  persionInChargeId: null,
})
// const shipmentTypeQuery = ref<IShipmentTypeSelectList>({
//   page: 1,
//   pageSize: 10,
//   key: '',
// })
const WarehouseTypeQuery = ref<IWarehouseTypeSelectList>({
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
// const ManufacturerQuery = ref<IManufacturerSelectList>({
//   page: 1,
//   pageSize: 10,
//   keyword: '',
// })
const state = reactive<DataType>({
  staffList: [],
  warehouseTypeList: [],
  statusList: [
    {
      value: 1,
      label: 'Hoạt động',
    },
    {
      value: 2,
      label: 'Ngừng hoạt động',
    },
  ],
  // shipmentTypeList: [],
  // warehouseList: [],
  // manuFacturerList: [],
  listData: [],
  totals: 0,
})
const emit = defineEmits<{
  (e: 'refresh'): void
}>()
/*<=========end define==========>*/

onMounted(async () => {
  await Promise.all([
    fetchListData(),
    fetchSelectWarehouseType(),
    fetchSelectStaff(),
  ])
  // await fetchSelectShipmentType()
  // await fetchSelectWarehouse()
  // await fetchSelectManufacturer()
})

/*<=========fetch==========>*/
const onReset = () => {
  filter.value = {
    page: 1,
    pageSize: filter.value.pageSize,
    key: null,
    warehouseTypeId: null,
    status: null,
    createdAtStart: null,
    createdAtEnd: null,
    updateedAtStart: null,
    updateedAtEnd: null,
    persionInChargeId: null,
  }
  fetchListData()
}
const onSearch = () => {
  filter.value.page = 1
  fetchListData()
}
const fetchListData = async () => {
  try {
    const payload: IWarehouseQuery = {
      ...filter.value,
      key: filter.value.key ? filter.value.key.trim() : '',
    }
    employeesTableRef.value.changeLoading(true)
    const { code, data } = await WarehouseService.getList(payload)
    if (code === S001) {
      state.listData = data.items
      state.totals = data.totalElement
      employeesTableRef.value.changeLoading(false)
    }
  } catch (e) {
    employeesTableRef.value.changeLoading(false)

    ElNotification({
      message: 'Có lỗi xảy ra',
      type: 'error',
    })
  }
}
// const loadingSelectShipmentTypeList = ref<boolean>(false)
// const fetchSelectShipmentType = async (query?: string) => {
//   try {
//     loadingSelectShipmentTypeList.value = true
//     shipmentTypeQuery.value.key = query ? query : ''
//
//     const { code, data } = await BaseService.getListShipmentType(
//       shipmentTypeQuery.value
//     )
//     if (code === S001) {
//       state.shipmentTypeList = data.items
//       loadingSelectShipmentTypeList.value = false
//     }
//   } catch (e) {
//     loadingSelectShipmentTypeList.value = false
//   }
// }
// const loadingSelectManufacturerList = ref<boolean>(false)
//
// const fetchSelectManufacturer = async (query?: string) => {
//   try {
//     loadingSelectManufacturerList.value = true
//     ManufacturerQuery.value.keyword = query ? query : ''
//     const { code, data } = await BaseService.getListManufacturer(
//       ManufacturerQuery.value
//     )
//     if (code === S001) {
//       state.manuFacturerList = data.items
//       loadingSelectManufacturerList.value = false
//     }
//   } catch (e) {
//     loadingSelectManufacturerList.value = false
//   }
// }
// const loadingSelectWarehouseList = ref<boolean>(false)
//
// const fetchSelectWarehouse = async (query?: string) => {
//   try {
//     loadingSelectWarehouseList.value = true
//     WarehouseQuery.value.key = query ? query : ''
//     const { code, data } = await BaseService.getListWarehouse(
//       WarehouseQuery.value
//     )
//     if (code === S001) {
//       state.warehouseList = data.items
//       loadingSelectWarehouseList.value = false
//
//       // console.log('state.data', data.items)
//       // listData.value = data.items
//       // totals.value = data.totalElement
//     }
//   } catch (e) {
//     loadingSelectWarehouseList.value = false
//
//     // ElNotification({
//     //   message: 'Có lỗi xảy ra',
//     //   type: 'error',
//     // })
//   }
// }
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
const loadingSelectWarehouseType = ref<boolean>(false)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const fetchSelectWarehouseType = async (query?: string) => {
  try {
    loadingSelectWarehouseType.value = true
    WarehouseTypeQuery.value.key = query ? query.trim() : ''
    const { code, data } = await BaseService.getListWarehouseType(
      WarehouseTypeQuery.value
    )
    if (code === S001) {
      state.warehouseTypeList = data.items
      loadingSelectWarehouseType.value = false

      // console.log('state.data', data.items)
      // listData.value = data.items
      // totals.value = data.totalElement
    }
  } catch (e) {
    loadingSelectWarehouseType.value = false

    // ElNotification({
    //   message: 'Có lỗi xảy ra',
    //   type: 'error',
    // })
  }
}
/*<=========end fetch==========>*/
/*<=========multiple Select table==========>*/
/*<=========multiple Select table==========>*/
const multipleSelection = ref<IConsignmentsItem[]>([])
const selectConsignmentsTable = (event: IConsignmentsItem[]) => {
  multipleSelection.value = event
  console.log('event', multipleSelection.value)
}
/*<=========end multiple Select table==========>*/
/*<=========end multiple Select table==========>*/
/*<=========Import==========>*/
const modalImportRef = ref<InstanceType<typeof CModalImport>>()

const onImport = () => {
  modalImportRef.value.open({
    template:
      'https://assets.icheck.vn/application/2023/app/3/8/3527ce664af73dd7b7ef6501933fa63e.xlsx',
  })
}
const onConfirmImport = async (data: File[]) => {
  try {
    modalImportRef.value?.changeLoading(true)
    const formData = new FormData()
    formData.append('file', data[0], data[0].name)
    const { code } = await ProductService.import(formData)
    if (code === S001) {
      ElNotification({
        message: 'Import nhân viên thành công',
        type: 'success',
      })
      modalImportRef.value?.close()
      await onReset()
    } else {
      ElNotification({
        title: 'Có lỗi xảy ra',
        message: 'Vui lòng thử lại',
        type: 'error',
      })
    }
  } catch (e) {
    console.log(e)
  } finally {
    modalImportRef.value?.changeLoading(false)
  }
}

/*<=========end Import==========>*/
/*<=========export==========>*/
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
/*<=========end export==========>*/
/*<=========delete==========>*/
const modalConfirmRef = ref<InstanceType<typeof CModalConfirm>>(null)
const onConfirm = (e: IConsignmentsItem) => {
  modalConfirmRef.value.open({
    id: e.id,
    title: 'Xoá lô hàng',
    message: `Bạn có chắc chắn muốn xóa lô hàng <b>${e.name}</b> không?`,
  })
}

const onConfirmModal = async (id: number) => {
  try {
    const { code } = await ConsignmentsService.delete(id)
    if (code === S001) {
      ElNotification({
        message: 'Xoá lô hàng thành công',
        type: 'success',
      })
      emit('refresh')
      return modalConfirmRef.value.close()
    }
  } catch (e) {
    console.log(e)
  }
}
/*<=========end delete==========>*/
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

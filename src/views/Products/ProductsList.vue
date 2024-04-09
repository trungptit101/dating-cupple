<template>
  <c-page-container class="product" title="Danh sách sản phẩm">
    <div class="product__content p-16 rounded-sm">
      <div
        class="product__filter d-flex align-items-center justify-start flex-wrap"
      >
        <el-input
          class="product__filter__item mr-8 mb-8"
          v-model="filter.keyword"
          placeholder="Tên hoặc mã sản phẩm"
        >
          <template #prefix>
            <i class="product__filter__item__icon icon-Search" />
          </template>
        </el-input>
        <el-input
          class="product__filter__item mr-8 mb-8"
          v-model="filter.brand"
          placeholder="Thương hiệu"
        />
        <e-date-range-picker
          class="product__filter__item product__filter__item--daterange mr-8 mb-8"
          v-model:from="filter.createdFrom"
          v-model:to="filter.createdTo"
          type="daterange"
          range-separator="~"
          start-placeholder="Ngày tạo: Từ"
          end-placeholder="Đến"
        />
        <e-date-range-picker
          class="product__filter__item product__filter__item--daterange mr-8 mb-8"
          v-model:from="filter.updatedFrom"
          v-model:to="filter.updatedTo"
          type="daterange"
          range-separator="~"
          start-placeholder="Ngày cập nhật: Từ"
          end-placeholder="Đến"
        />
        <el-button type="primary" class="mb-8" @click="onSearch">
          <i class="icon-Search" />
        </el-button>
        <el-button class="mb-8" @click="onReset">
          <i class="icon-Resset" />
        </el-button>
      </div>
      <div class="d-flex align-items-center justify-start mt-4 mb-32">
        <el-button type="primary" @click="router.pushByPath('/products/form')">
          <i class="icon-add-3 mr-4"></i>
          <span>Thêm mới</span>
        </el-button>
        <el-button type="info" @click="onImport">
          <i class="icon-import mr-4"></i>
          <span>Import</span>
        </el-button>
        <el-button type="info" @click="onExport">
          <i class="icon-export-2 mr-4"></i>
          <span>Export</span>
        </el-button>
      </div>
      <products-table :items="listData" @refresh="fetchListData" />
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
  </c-page-container>
  <c-modal-import ref="modalImportRef" @confirm="onConfirmImport" />
</template>

<script lang="ts" setup>
import ProductsTable from '@/components/Pages/Products/ProductsTable.vue'
import { EPagination, EDateRangePicker } from '@/components/Elements'
import type { IProductFilter, IProductItem } from '@/types/product'
import { onMounted, ref } from 'vue'
import { UseDmsRouter } from '@/composables'
import { CPageContainer, CModalImport } from '@/components/Components'
import { PageSize, S001 } from '@/constants'
import { ElNotification } from 'element-plus'
import ProductService from '@/services/ProductService'
import { exportFileExcel } from '@/utils'

const router = UseDmsRouter()
const listData = ref<IProductItem[]>([])
const modalImportRef = ref<InstanceType<typeof CModalImport>>()
const filter = ref<IProductFilter>({
  page: 1,
  pageSize: PageSize,
  keyword: '',
  brand: '',
  createdFrom: '',
  createdTo: '',
  updatedFrom: '',
  updatedTo: '',
})
const totals = ref<number>(0)
const fetchListData = async () => {
  try {
    const { code, data } = await ProductService.getList(filter.value)
    if (code === S001) {
      if (code === S001) {
        listData.value = data.items
        totals.value = data.totalElement
      }
    }
  } catch (e) {
    ElNotification({
      message: 'Có lỗi xảy ra',
      type: 'error',
    })
  }
}
const onExport = async () => {
  try {
    const result = await ProductService.export(filter.value)
    return exportFileExcel(result, 'Danh sách sản phẩm')
  } catch (e) {
    console.log(e)
    ElNotification({
      message: 'Có lỗi xảy ra',
      type: 'error',
    })
  }
}
const onImport = () => {
  modalImportRef.value.open({
    template:
      'https://assets.icheck.vn/application/2023/app/3/8/3527ce664af73dd7b7ef6501933fa63e.xlsx',
  })
}
const onSearch = () => {
  filter.value.page = 1
  fetchListData()
}
const onConfirmImport = async (data: File[]) => {
  try {
    modalImportRef.value?.changeLoading(true)
    const formData = new FormData()
    formData.append('file', data[0], data[0].name)
    const { code } = await ProductService.import(formData)
    if (code === S001) {
      ElNotification({
        message: 'Import sản phẩm thành công',
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
const onReset = () => {
  filter.value = {
    page: 1,
    pageSize: filter.value.pageSize,
    keyword: '',
    brand: '',
    createdFrom: null,
    createdTo: null,
    updatedFrom: null,
    updatedTo: null,
  }
  fetchListData()
}
onMounted(async () => {
  await fetchListData()
})
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

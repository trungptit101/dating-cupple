<template>
  <c-page-container class="manu" title="Danh sách nhà sản xuất">
    <div class="manu__content p-16 rounded-sm">
      <div
        class="manu__filter d-flex align-items-center justify-between mb-24 flex-wrap"
      >
        <div class="d-flex align-items-center justify-start flex-wrap">
          <el-input
            class="manu__filter__item mr-8 mb-8"
            v-model="filter.keyword"
            placeholder="Tên nhà sản xuất"
          >
            <template #prefix>
              <i class="manu__filter__item__icon icon-Search" />
            </template>
          </el-input>
          <e-input-phone-number
            class="manu__filter__item mr-8 mb-8"
            v-model="filter.phoneNumber"
            placeholder="Số điện thoại"
          />
          <e-date-range-picker
            class="manu__filter__item manu__filter__item--daterange mr-8 mb-8"
            v-model:from="filter.createdFrom"
            v-model:to="filter.createdTo"
            type="daterange"
            range-separator="~"
            start-placeholder="Ngày tạo: Từ"
            end-placeholder="Đến"
          />
          <e-date-range-picker
            class="manu__filter__item manu__filter__item--daterange mr-8 mb-8"
            v-model:from="filter.updatedFrom"
            v-model:to="filter.updatedTo"
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
        <el-button
          class="mb-8"
          type="primary"
          @click="router.pushByPath('/manufacturers/form')"
        >
          <i class="icon-add-3 mr-4"></i>
          <span>Thêm mới</span>
        </el-button>
      </div>
      <manufacturers-table :items="listData" @refresh="fetchListData" />
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
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { UseDmsRouter } from '@/composables'
import { CPageContainer } from '@/components/Components'
import type {
  IManufacturerItem,
  IManufacturerQuery,
} from '@/types/manufacturer'
import ManufacturerService from '@/services/ManufacturerService'
import { PageSize, S001 } from '@/constants'
import { ElNotification } from 'element-plus'
import { EDateRangePicker, EPagination } from '@/components/Elements'
import ManufacturersTable from '@/components/Pages/Manufacturers/ManufacturersTable.vue'
import EInputPhoneNumber from '@/components/Elements/EInputPhoneNumber.vue'

const router = UseDmsRouter()
const filter = ref<IManufacturerQuery>({
  page: 1,
  pageSize: PageSize,
  keyword: '',
  phoneNumber: '',
  createdFrom: null,
  createdTo: null,
  updatedFrom: null,
  updatedTo: null,
})
const listData = ref<IManufacturerItem[]>([])
const totals = ref<number>(0)
onMounted(async () => {
  await fetchListData()
})
const fetchListData = async () => {
  try {
    const _filter: IManufacturerQuery = {
      ...filter.value,
      keyword: filter.value.keyword?.trim(),
      phoneNumber: filter.value.phoneNumber?.toString().trim(),
    }
    const { code, data } = await ManufacturerService.getList(_filter)
    if (code === S001) {
      listData.value = data.items
      totals.value = data.totalElement
    }
  } catch (e) {
    console.log(e)
    ElNotification({
      message: 'Có lỗi xảy ra',
      type: 'error',
    })
  }
}
const onSearch = () => {
  filter.value.page = 1
  fetchListData()
}
const onReset = () => {
  filter.value = {
    page: 1,
    pageSize: filter.value.pageSize,
    keyword: '',
    phoneNumber: '',
    createdFrom: null,
    createdTo: null,
    updatedFrom: null,
    updatedTo: null,
  }
  fetchListData()
}
</script>

<style scoped lang="scss">
.manu {
  &__title {
    font-size: 18px;
    font-weight: 700;
    color: var(--text-primary);
  }
  &__content {
    background-color: var(--background-primary);
  }
  &__filter {
    :deep(.manu__filter__item--daterange) {
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

<template>
  <el-dialog
    v-model="visible"
    :width="cWidth"
    :show-close="false"
    :before-close="close"
    center
    class="mdl"
  >
    <div class="mdl__content">
      <div class="mdl__title">{{ cTitle }}</div>
      <el-input
        class="product__filter__item mb-12"
        v-model="filter.key"
        :placeholder="cTitleSearch"
        @input="searchTable"
      >
        <template #prefix>
          <i class="product__filter__item__icon icon-Search" />
        </template>
      </el-input>
      <div class="tbl">
        <el-table
          v-loading="loading"
          :data="cModalList"
          class="tbl__table"
          ref="multipleTableRef"
          @selection-change="handleSelectionChange"
          row-key="id"
        >
          <slot />
        </el-table>
        <div class="d-flex align-items-center justify-end mt-16">
          <e-pagination
            v-model:current-page="filter.page"
            v-model:page-size="filter.pageSize"
            :total="cTotals"
            @current-change="fetchListData"
            @size-change="onSearch"
          />
        </div>
      </div>
    </div>
    <template #footer>
      <span class="d-flex align-items-center justify-center">
        <el-button @click="close" class="mdl__btn">Huỷ bỏ</el-button>
        <el-button type="primary" class="mdl__btn" @click="confirm">
          {{ cTitleSubmit }}
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { EModalConfirmType } from '@/constants'
import type { IConsignmentsItem } from '@/types/consignments'
import EPagination from '@/components/Elements/EPagination.vue'

type ArgType = {
  dataList: Array<number | string | null>
  title: string
  titleSubmit: string
  titleSearch: string
  width?: string
  message: string
  type?: EModalConfirmType
  modalList: object[]
  totals: number
}
const emit = defineEmits<{
  (e: 'confirm', value: object): void
  (e: 'search', value: boolean | null): void
}>()
const visible = ref<boolean>(false)
const cDataList = ref<Array<number | string | null>>([])
const cTitle = ref<string>('')
const cTitleSubmit = ref<string>('')
const cTitleSearch = ref<string>('')
const cMessage = ref<string>('')
const cWidth = ref<string>('700px')
const cType = ref<EModalConfirmType>(EModalConfirmType.delete)
const cModalList = ref<object[]>([])
const cTotals = ref<number>(0)
const filter = ref({
  page: 1,
  pageSize: 10,
  key: null,
})

onMounted(async () => {})
const close = () => {
  visible.value = false
  cDataList.value = []
  cTitle.value = ''
  cMessage.value = ''
  cWidth.value = ''
  cModalList.value = []
  cTotals.value = 0
}
const open = ({
  dataList,
  title,
  titleSubmit,
  titleSearch,
  message,
  width,
  type,
  modalList,
  totals,
}: ArgType) => {
  visible.value = true
  cDataList.value = dataList
  cTitle.value = title || ''
  cTitleSubmit.value = titleSubmit || ''
  cTitleSearch.value = titleSearch || ''
  cMessage.value = message || ''
  cWidth.value = width || '700px'
  cType.value = type || EModalConfirmType.delete
  cModalList.value = modalList || []
  cTotals.value = totals || 0
}
const confirm = () => {
  console.log(' cDataList.value', cDataList.value)
  console.log('multipleSelection.value', multipleSelection.value)
  emit('confirm', {
    parentList: cDataList.value,
    childrenList: multipleSelection.value,
  })
}

const onSearch = () => {
  filter.value.page = 1
  fetchListData()
}
const fetchListData = () => {
  // console.log('filter',filter.value)
  emit('search', true)
}
/*<=========search==========>*/

const timeout = ref()

const searchTable = () => {
  try {
    if (timeout.value) {
      clearTimeout(timeout.value)
      timeout.value = null
    }
    timeout.value = setTimeout(() => {
      fetchListData()
    }, 500)
  } catch (error) {
    console.log('error', error)
  }
}
/*<=========end search==========>*/

/*<=========loading==========>*/
const loading = ref(false)
const changeLoading = (e: boolean) => {
  loading.value = e
}
/*<=========end delete==========>*/
/*<=========multiple Select table==========>*/

const multipleTableRef = ref()
const multipleSelection = ref<IConsignmentsItem[]>([])
const handleSelectionChange = (val: IConsignmentsItem[]) => {
  // console.log('val',val)
  multipleSelection.value = val
}
/*<=========end multiple Select table==========>*/
defineExpose({
  filter,
  open,
  confirm,
  close,
  changeLoading,
})
</script>

<style scoped lang="scss">
.mdl {
  &__title {
    @include ellipsis(2);
    color: var(--text-primary);
    font-size: 24px;
    font-weight: 700;
    text-align: left;
    margin: 0 0 32px 0;
  }
  &__icon {
    width: 80px;
    height: 80px;
    margin: auto;
    color: var(--text-primary-reverse);
    &--delete {
      background-color: var(--danger);
      border: 5px solid var(--danger-10);
    }
    i {
      font-size: 44px;
    }
  }
  &__content {
    margin-top: -34px;
  }
  &__description {
    text-align: center;
    color: var(--text-primary);
    margin-top: 16px;
  }
  &__btn {
    width: 200px;
  }
}
</style>

<template>
  <div class="tbl">
    <!--    @selection-change="handleSelectionChange"-->
    <el-table
      v-loading="loading"
      :data="props.items"
      class="tbl__table"
      ref="multipleTableRef"
      row-key="id"
    >
      <!--      <el-table-column type="selection" width="55" :reserve-selection="true" />-->
      <el-table-column prop="id" label="ID" width="100" align="center" />
      <el-table-column prop="image" label="Ảnh" width="205" align="center">
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
        min-width="240"
        align="left"
        header-align="center"
      />
      <el-table-column
        prop="code"
        label="Mã lô hàng"
        width="205"
        align="center"
      />
      <el-table-column
        prop="shipmentType"
        label="Loại lô hàng"
        width="205"
        align="center"
      />
      <el-table-column
        prop="manufacturerName"
        label="Nhà sản xuất"
        width="205"
        align="center"
      />
      <el-table-column
        prop="produceTime"
        label="Ngày sản xuất"
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
        prop="warehouseName"
        label="Kho hàng"
        width="205"
        align="center"
      />
      <el-table-column
        prop="userName"
        label="Người tạo"
        width="205"
        align="center"
      />
      <!--      <el-table-column-->
      <!--          prop="createdBy"-->
      <!--          label="Người tạo"-->
      <!--          width="205"-->
      <!--          align="center"-->
      <!--      >-->
      <!--        <template #default="{ row }">-->
      <!--          <span>{{ row.createdByName || '-' }}</span>-->
      <!--        </template>-->
      <!--      </el-table-column>-->
      <el-table-column
        prop="createdAt"
        label="Ngày tạo"
        width="205"
        align="center"
      />
      <el-table-column
        prop="updatedAt"
        label="Ngày cập nhật"
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
            <el-tooltip content="Xoá">
              <div
                class="btn__action btn__action--red d-flex justify-center align-items-center"
                @click="onRemove(row)"
              >
                <i class="icon-Trash"></i>
              </div>
            </el-tooltip>
            <el-tooltip content="Chỉnh sửa">
              <div
                class="btn__action btn__action--blue d-flex justify-center align-items-center"
                @click="onEdit(row)"
              >
                <i class="icon-Edit"></i>
              </div>
            </el-tooltip>
            <el-tooltip content="Chi tiết">
              <div
                class="btn__action btn__action--yellow d-flex justify-center align-items-center mr-8"
                @click="onDetail(row)"
              >
                <i class="icon-eye-2"></i>
              </div>
            </el-tooltip>
            <el-tooltip content="Nhân bản">
              <div
                class="btn__action btn__action--gray d-flex justify-center align-items-center"
                @click="onCoppy(row)"
              >
                <i class="icon-Copy"></i>
              </div>
            </el-tooltip>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>

  <c-modal-confirm ref="modalConfirmRef" @confirm="onConfirmDelete" />
</template>

<script lang="ts" setup>
import { UseDmsRouter } from '@/composables'
import { CModalConfirm } from '@/components/Components'
import { ref } from 'vue'
import { S001 } from '@/constants'
import { ElNotification } from 'element-plus'
import ConsignmentsService from '@/services/ConsignmentsService'
import type { IConsignmentsItem } from '@/types/consignments'
import EImg from '@/components/Elements/EImg.vue'
/*<=========define==========>*/
type PropType = {
  items?: IConsignmentsItem[]
}

const router = UseDmsRouter()
const props = withDefaults(defineProps<PropType>(), {
  items: () => [],
})
const emit = defineEmits<{
  (e: 'refresh'): void
  (e: 'select', value?: object[]): void
}>()

/*<=========end define==========>*/
/*<=========loading==========>*/
const loading = ref(false)
const changeLoading = (e: boolean) => {
  loading.value = e
}
/*<=========end delete==========>*/
/*<=========multiple Select table==========>*/

const multipleTableRef = ref()
// const handleSelectionChange = (val: IConsignmentsItem[]) => {
//   emit('select', val)
// }

/*<=========end multiple Select table==========>*/

/*<=========delete==========>*/
const modalConfirmRef = ref<InstanceType<typeof CModalConfirm>>(null)
const onRemove = (e: IConsignmentsItem) => {
  modalConfirmRef.value.open({
    id: e.id,
    title: 'Xoá lô hàng',
    message: `Bạn có chắc chắn muốn xóa lô hàng <b>${e.name}</b> không?`,
  })
}

const onConfirmDelete = async (id: number) => {
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

const onEdit = (e: IConsignmentsItem) => {
  router.pushByPath(`/consignments/form/${e.id}`)
}
const onDetail = (e: IConsignmentsItem) => {
  router.pushByPath(`/consignments/detail/${e.id}`)
}

const onCoppy = (e: IConsignmentsItem) => {
  router.pushByPath(`/consignments/coppy/${e.id}`)
}

defineExpose({
  changeLoading,
})
</script>

<style scoped lang="scss">
.tbl {
  &__table {
    width: 100%;
  }
}
</style>

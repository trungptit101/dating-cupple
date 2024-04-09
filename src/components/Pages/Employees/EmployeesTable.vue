<template>
  <div class="tbl">
    <el-table
      v-loading="loading"
      :data="props.items"
      class="tbl__table"
      ref="multipleTableRef"
      row-key="id"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" :reserve-selection="true" />
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
        label="Tên kho hàng"
        min-width="240"
        align="left"
        header-align="center"
      />
      <el-table-column prop="code" label="Mã kho" width="205" align="center" />
      <el-table-column
        prop="warehouseType"
        label="Loại kho"
        width="205"
        align="center"
      />
      <el-table-column
        prop="status"
        label="Trạng thái"
        width="205"
        align="center"
      >
        <template #default="{ row }">
          <div class="tag__action tag__action__red" v-if="row.status === 2">
            <span>Ngừng hoạt động</span>
          </div>
          <div class="tag__action tag__action__green" v-if="row.status === 1">
            <span> Hoạt động</span>
          </div>
        </template>
      </el-table-column>
      <!--      <el-table-column-->
      <!--        prop="produceTime"-->
      <!--        label="Ngày sản xuất"-->
      <!--        width="205"-->
      <!--        align="center"-->
      <!--      />-->
      <!--      <el-table-column-->
      <!--        prop="expiryDate"-->
      <!--        label="Hạn sử dụng"-->
      <!--        width="205"-->
      <!--        align="center"-->
      <!--      />-->
      <!--      <el-table-column-->
      <!--        prop="warehouseName"-->
      <!--        label="Kho hàng"-->
      <!--        width="205"-->
      <!--        align="center"-->
      <!--      />-->
      <el-table-column
        prop="persionInCharge"
        label="Người phụ trách"
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
            <el-tooltip content="Phân quyền">
              <div
                class="btn__action btn__action--gray d-flex justify-center align-items-center mr-8"
                @click="onDetail(row)"
              >
                <i class="icon-setting-2"></i>
              </div>
            </el-tooltip>
            <el-tooltip
              :content="`${switchBtn ? 'Hoạt động' : 'Ngừng hoạt động'}`"
              placement="bottom"
            >
              <el-switch
                @click="onSwitch(row)"
                v-model="switchBtn"
                style="--el-switch-on-color: #13ce66"
              />
            </el-tooltip>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>

  <!--  <c-modal-confirm ref="modalConfirmRef" @confirm="onConfirmDelete" />-->
  <c-modal-confirm
    ref="modalConfirmSwitchRef"
    @confirm="onConfirmSwitch"
    @close="onCloseSwitch"
  />
</template>

<script lang="ts" setup>
import { UseDmsRouter } from '@/composables'
import { CModalConfirm } from '@/components/Components'
import { ref } from 'vue'
import { S001 } from '@/constants'
import { ElNotification } from 'element-plus'
import EImg from '@/components/Elements/EImg.vue'
import WarehouseService from '@/services/WarehouseService'
import type { IWarehouseItem } from '@/types/warehouse'
/*<=========define==========>*/
type PropType = {
  items?: IWarehouseItem[]
}
const switchBtn = ref(false)

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
const handleSelectionChange = (val: IWarehouseItem[]) => {
  emit('select', val)
}

/*<=========end multiple Select table==========>*/

/*<=========delete==========>*/
// const modalConfirmRef = ref<InstanceType<typeof CModalConfirm>>(null)
// const onRemove = (e: IWarehouseItem) => {
//   modalConfirmRef.value.open({
//     id: e.id,
//     title: 'Xoá kho hàng',
//     message: `Bạn có chắc chắn muốn xóa kho hàng <b>${e.name}</b> không?`,
//   })
// }
// const onConfirmDelete = async (id: number) => {
//   try {
//     const { code } = await WarehouseService.delete(id)
//     if (code === S001) {
//       ElNotification({
//         message: 'Xoá kho hàng thành công',
//         type: 'success',
//       })
//       emit('refresh')
//       return modalConfirmRef.value.close()
//     }
//   } catch (e) {
//     console.log(e)
//   }
// }

/*<=========end delete==========>*/
/*<=========switch==========>*/
const modalConfirmSwitchRef = ref<InstanceType<typeof CModalConfirm>>(null)
const onSwitch = (e: IWarehouseItem) => {
  modalConfirmSwitchRef.value.open({
    id: e.id,
    title: `${!switchBtn.value ? 'Hủy kích hoạt' : 'Kích hoạt'} kho hàng`,
    message: `Bạn có chắc chắn muốn ${
      !switchBtn.value ? 'hủy kích hoạt' : 'kích hoạt'
    } kho hàng <b>${e.name}</b> không?`,
  })
}

const onConfirmSwitch = async (id: number) => {
  try {
    const { code } = await WarehouseService.delete(id)
    if (code === S001) {
      ElNotification({
        message: `${
          !switchBtn.value ? 'Hủy kích hoạt' : 'Kích hoạt'
        } kho hàng thành công`,
        type: 'success',
      })
      emit('refresh')
      return modalConfirmSwitchRef.value.close()
    }
  } catch (e) {
    console.log(e)
  }
}
const onCloseSwitch = () => {
  switchBtn.value = !switchBtn.value
}
/*<=========end switch==========>*/

const onEdit = (e: IWarehouseItem) => {
  router.pushByPath(`/warehouse/form/${e.id}`)
}
const onDetail = (e: IWarehouseItem) => {
  router.pushByPath(`/warehouse/detail/${e.id}`)
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

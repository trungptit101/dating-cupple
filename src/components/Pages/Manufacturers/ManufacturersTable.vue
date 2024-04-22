<template>
  <div class="tbl">
    <el-table :data="props.items" class="tbl__table">
      <el-table-column prop="id" label="ID" width="100" align="center" />
      <el-table-column
        prop="name"
        label="Tên nhà sản xuất"
        min-width="240"
        align="left"
        header-align="center"
      >
        <template #default="{ row }">
          <span class="tbl__ellipse-3" :title="row.name">{{ row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="Địa chỉ"
        width="205"
        align="left"
        header-align="center"
      >
        <template #default="{ row }">
          <span class="tbl__ellipse-3" :title="row.address">{{
            getFullAddress({
              address: row.address,
              ward: row.wardName,
              district: row.districtName,
              province: row.cityName,
            })
          }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="phoneNumber"
        label="Số điện thoại"
        width="205"
        align="center"
      />
      <el-table-column
        prop="createdBy"
        label="Người tạo"
        width="205"
        align="center"
      >
        <template #default="{ row }">
          <span class="tbl__ellipse-1">{{ row.createdByName || '-' }}</span>
        </template>
      </el-table-column>
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
                class="tbl__action btn__action--red d-flex justify-center align-items-center"
                @click="onRemove(row)"
              >
                <i class="icon-Trash"></i>
              </div>
            </el-tooltip>
            <el-tooltip content="Chỉnh sửa">
              <div
                class="tbl__action btn__action--blue d-flex justify-center align-items-center"
                @click="onEdit(row)"
              >
                <i class="icon-Edit"></i>
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
import type { IManufacturerItem } from '@/types/manufacturer'
import { UseDmsRouter } from '@/composables'
import { CModalConfirm } from '@/components/Components'
import { ref } from 'vue'
import ManufacturerService from '@/services/ManufacturerService'
import { S001 } from '@/constants'
import { ElNotification } from 'element-plus'
import { getFullAddress } from '@/utils/string'

type PropType = {
  items?: IManufacturerItem[]
}
const router = UseDmsRouter()
const props = withDefaults(defineProps<PropType>(), {
  items: () => [],
})
const emit = defineEmits<{
  (e: 'refresh'): void
}>()
const modalConfirmRef = ref<InstanceType<typeof CModalConfirm>>(null)
const onRemove = (e: IManufacturerItem) => {
  modalConfirmRef.value.open({
    id: e.id,
    title: 'Xoá nhà sản xuất',
    message: `Bạn có chắc chắn muốn xóa nhà sản xuất <b>${e.name}</b> không?`,
  })
}
const onEdit = (e: IManufacturerItem) => {
  router.pushByPath(`/manufacturers/form/${e.id}`)
}
const onConfirmDelete = async (id: number) => {
  try {
    const { code } = await ManufacturerService.delete(id)
    if (code === S001) {
      ElNotification({
        message: 'Xoá nhà sản xuất thành công',
        type: 'success',
      })
      emit('refresh')
      return modalConfirmRef.value.close()
    }
  } catch (e) {
    console.log(e)
  }
}
</script>

<style scoped lang="scss">
.tbl {
  &__table {
    width: 100%;
    * {
      word-break: break-word;
    }
  }
  &__ellipse-3 {
  }
  &__ellipse-1 {
  }
}
</style>

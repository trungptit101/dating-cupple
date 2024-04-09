<template>
  <div class="tbl">
    <el-table :data="props.items" class="tbl__table">
      <el-table-column prop="id" label="ID" width="100" align="center" />
      <el-table-column prop="image" label="Ảnh" width="90" align="center">
        <template #default="{ row }">
          <e-img
            :src="row.images[0]"
            size="60px"
            radius="8px"
            :object-fit="EObjectFit.contain"
          />
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="Tên sản phẩm"
        min-width="240"
        align="left"
        header-align="center"
      />
      <el-table-column
        prop="barcode"
        label="Mã vạch"
        width="200"
        align="center"
      >
        <template #default="{ row }">
          <c-barcode v-if="row.barcode" :value="row.barcode" :id="row.id" />
        </template>
      </el-table-column>
      <el-table-column
        prop="price"
        label="Giá niêm yết"
        width="165"
        align="center"
      >
        <template #default="{ row }">
          <span
            >{{ formatNumberWithCommas(row.price) || '-' }}
            {{ row.priceUnit }}</span
          >
        </template>
      </el-table-column>
      <el-table-column
        prop="brand"
        label="Thương hiệu"
        width="165"
        align="center"
      >
        <template #default="{ row }">
          <span
            class="tbl__item--created-by"
            :class="{ empty: !!!row.brand }"
            :title="row.brand"
            >{{ row.brand || 'Đang cập nhật' }}</span
          >
        </template>
      </el-table-column>
      <el-table-column
        prop="createdBy"
        label="Người tạo"
        width="205"
        align="center"
      >
        <template #default="{ row }">
          <span class="tbl__item--created-by" :title="row.createdByName">{{
            row.createdByName || '-'
          }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="createdAtStr"
        label="Ngày tạo"
        width="205"
        align="center"
      />
      <el-table-column
        prop="updatedAtStr"
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
            <el-tooltip content="Xem chi tiết">
              <div
                class="tbl__action btn__action--yellow d-flex justify-center align-items-center"
                @click="onDetail(row)"
              >
                <i class="icon-eye-2"></i>
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
import type { IProductItem } from '@/types/product'
import { UseDmsRouter } from '@/composables'
import { formatNumberWithCommas } from '@/utils/string'
import { EImg } from '@/components/Elements'
import { EObjectFit, S001 } from '@/constants'
import { CBarcode, CModalConfirm } from '@/components/Components'
import { ref } from 'vue'
import { ElNotification } from 'element-plus'
import ProductService from '@/services/ProductService'

type PropType = {
  items?: IProductItem[]
}
const modalConfirmRef = ref<InstanceType<typeof CModalConfirm>>(null)
const router = UseDmsRouter()
const props = withDefaults(defineProps<PropType>(), {
  items: () => [],
})
const emit = defineEmits<{
  (e: 'refresh'): void
}>()
const onRemove = (e: IProductItem) => {
  modalConfirmRef.value.open({
    id: e.id,
    title: 'Xoá sản phẩm',
    message: `Bạn có chắc chắn muốn xóa sản phẩm <b>${e.name}</b> không?`,
  })
}
const onConfirmDelete = async (id: number) => {
  try {
    const { code } = await ProductService.delete(id)
    if (code === S001) {
      ElNotification({
        message: 'Xoá sản phẩm thành công',
        type: 'success',
      })
      emit('refresh')
      return modalConfirmRef.value.close()
    }
  } catch (e) {
    console.log(e)
  }
}
const onEdit = (e: IProductItem) => {
  router.pushByPath(`/products/form/${e.id}`)
}
const onDetail = (e: IProductItem) => {
  router.pushByPath(`/products/${e.id}`)
}
</script>

<style scoped lang="scss">
.tbl {
  &__item {
    &--created-by {
      @include ellipsis(1);
      &.empty {
        color: var(--text-muted);
        font-style: italic;
      }
    }
  }
}
</style>

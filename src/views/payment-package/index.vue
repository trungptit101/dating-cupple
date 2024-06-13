<template>
  <div class="app-container">
    <el-row class="flex items-center">
      <el-col :span="12">
        <h2>{{ $t("List Payment Packages") }}</h2>
      </el-col>
      <el-col :span="12">
        <div class="text-right">
          <el-button type="primary" size="medium" @click="addItem">{{
            $t("Add")
          }}</el-button>
        </div>
      </el-col>
    </el-row>
    <el-table
      v-loading="loading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column
        class-name="package-col"
        align="center"
        :label="$t('No')"
        width="95"
      >
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column class-name="package-col" :label="$t('Months')">
        <template slot-scope="scope">
          {{ scope.row.months }}
        </template>
      </el-table-column>
      <el-table-column
        class-name="package-col"
        :label="$t('Price VNĐ')"
        align="center"
      >
        <template slot-scope="scope">
          <span>{{
            Number(scope.row.price_vnpay).toLocaleString("en-US", {
              style: "currency",
              currency: "VND",
            })
          }}</span>
        </template>
      </el-table-column>
      <el-table-column
        class-name="package-col"
        :label="$t('Price USD')"
        align="center"
      >
        <template slot-scope="scope">
          <span>{{
            Number(scope.row.price_paypal).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })
          }}</span>
        </template>
      </el-table-column>
      <el-table-column
        class-name="package-col"
        :label="$t('Gender')"
        align="center"
      >
        <template slot-scope="scope">
          <span :class="scope.row.gender">{{ $t(scope.row.gender) }}</span>
        </template>
      </el-table-column>
      <el-table-column
        class-name="package-col"
        :label="$t('Action')"
        width="110"
        align="center"
      >
        <template slot-scope="scope">
          <el-tooltip
            class="item"
            effect="dark"
            :content="$t('Edit')"
            placement="top"
          >
            <el-button
              type="primary"
              icon="el-icon-edit"
              size="mini"
              circle
              @click="editItem(scope.row, scope.row.id)"
            ></el-button>
          </el-tooltip>
          <el-tooltip
            class="item"
            effect="dark"
            :content="$t('Delete')"
            placement="top"
          >
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="mini"
              circle
              @click="deleteItem(scope.row.id)"
            ></el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      :title="itemId == null ? $t('Add Package') : $t('Edit Package')"
      :visible.sync="isPackageDetail"
    >
      <PackageDetail
        v-if="isPackageDetail"
        @closeCreateDialog="closeCreateDialog"
        @closeDialog="closeDialog"
        :formData="formData"
        :id="itemId"
      />
    </el-dialog>
  </div>
</template>

<script>
import { getAllPaymentPackage, deletePackage } from "@/api/payment-package";
import PackageDetail from "./PackageDetail.vue";
import { Message } from "element-ui";

export default {
  components: { PackageDetail },
  data() {
    return {
      list: null,
      loading: false,
      isPackageDetail: false,
      itemId: null,
      formData: {},
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.loading = true;
      getAllPaymentPackage()
        .then((response) => {
          this.list = response.data;
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },
    deleteItem(id) {
      this.$confirm(this.$t("Are you sure to delete this payment package?"))
        .then((_) => {
          deletePackage(id).then((res) => {
            Message({
              message: res.message,
              type: "success",
              duration: 1000,
            });
            this.getList();
          });
        })
        .catch((_) => {});
    },
    closeCreateDialog() {
      this.isPackageDetail = false;
      this.getList();
    },
    addItem() {
      this.formData = {};
      this.isPackageDetail = true;
      this.itemId = null;
    },
    editItem(form, id) {
      this.isPackageDetail = true;
      this.itemId = id;
      this.formData = JSON.parse(JSON.stringify(form));
    },
    closeDialog() {
      this.isPackageDetail = false;
    },
  },
};
</script>
<style lang="scss">
.package-col {
  font-weight: 600;
}
.male {
  font-weight: 600;
  color: #67c23a;
}
.female {
  font-weight: 600;
  color: #f56c6c;
}
</style>

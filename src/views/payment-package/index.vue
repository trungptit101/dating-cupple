<template>
  <div class="app-container">
    <el-row class="flex items-center">
      <el-col :span="12">
        <h2>List Payment Packages</h2>
      </el-col>
      <el-col :span="12">
        <div class="text-right">
          <el-button type="primary" size="medium" @click="addItem"
            >Add</el-button
          >
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
      <el-table-column align="center" label="No" width="95">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column label="Months">
        <template slot-scope="scope">
          {{ scope.row.months }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="Price" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.price }}</span>
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="Unit" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.unit }}</span>
        </template>
      </el-table-column>
      <el-table-column
        class-name="status-col"
        label="Action"
        width="110"
        align="center"
      >
        <template slot-scope="scope">
          <el-tooltip class="item" effect="dark" content="Edit" placement="top">
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
            content="Delete"
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
      :title="itemId == null ? 'Add Package' : 'Edit Package'"
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
      this.$confirm("Are you sure to delete this payment package?")
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

<template>
  <div class="app-container">
    <el-row class="flex items-center">
      <el-col :span="12">
        <h2>List Candidates</h2>
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
      <el-table-column label="Name">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="Email" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.email }}</span>
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="Gender" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.gender }}</span>
        </template>
      </el-table-column>
      <el-table-column
        class-name="status-col"
        label="Looking Gender"
        align="center"
      >
        <template slot-scope="scope">
          <span>{{ scope.row.lookingGender }}</span>
        </template>
      </el-table-column>
      <el-table-column
        class-name="status-col"
        label="Action"
        width="110"
        align="center"
      >
        <template slot-scope="scope">
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
    <div class="text-center" style="padding: 20px 0">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="page"
        :page-sizes="[20, 30, 40, 50]"
        :page-size="perPage"
        layout="total, sizes, prev, pager, next"
        :total="totalCount"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getListCandidate, deleteCandidate } from "@/api/user";
import { Message } from "element-ui";

export default {
  components: {},
  data() {
    return {
      list: null,
      loading: false,
      itemId: null,
      formData: {},
      totalCount: 0,
      page: 1,
      perPage: 20,
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.loading = true;
      const params = {
        page: this.page,
        perPage: this.perPage,
      };
      getListCandidate(params)
        .then((response) => {
          this.list = response.data.data;
          this.totalCount = response.data.total;
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },
    deleteItem(id) {
      this.$confirm("Are you sure to delete this candidate?")
        .then((_) => {
          deleteCandidate(id).then((res) => {
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
    handleSizeChange(val) {
      this.perPage = val;
      this.getList();
    },
    handleCurrentChange(val) {
      this.page = val;
      this.getList();
    },
  },
};
</script>

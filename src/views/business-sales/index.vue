<template>
  <div class="app-container">
    <el-row class="flex items-center">
      <el-col :span="12">
        <h2>List Candidates</h2>
      </el-col>
      <el-col :span="12">
        <div class="text-right">
          <el-button type="primary" size="medium" @click="addQuestion"
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
          <el-tooltip class="item" effect="dark" content="Edit" placement="top">
            <el-button
              type="primary"
              icon="el-icon-edit"
              size="mini"
              circle
              @click="editQuestion(scope.row, scope.row.id)"
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
import { getListCandidate } from "@/api/user";
import { Message } from "element-ui";

export default {
  components: {},
  filters: {
    statusFilter(status) {
      const statusMap = {
        1: "only 1 answer",
        2: "mutiple answers",
        3: "Break screen",
        4: "Enter answer",
      };
      return statusMap[status];
    },
  },
  data() {
    return {
      list: null,
      loading: false,
      isQuestionDetail: false,
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
    getListOptions(answerStr) {
      if (!answerStr) return [];
      return JSON.parse(answerStr) || [];
    },
    getList() {
      this.loading = true;
      const params = {
        page: this.page,
        perPage: this.perPage,
      };
      getListCandidate(params).then((response) => {
        this.list = response.data.data;
        this.totalCount = response.data.total;
        this.loading = false;
      });
    },
    handleSizeChange(val) {
      this.perPage = val;
      this.getList();
    },
    handleCurrentChange(val) {
      this.page = val;
      this.getList();
    },

    deleteItem(id) {
      this.$confirm("Are you sure to delete this question?")
        .then((_) => {
          deleteQuestion(id).then((res) => {
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
      this.isQuestionDetail = false;
      this.getList();
    },
    addQuestion() {
      this.formData = {};
      this.isQuestionDetail = true;
      this.itemId = null;
    },
    editQuestion(form, id) {
      this.isQuestionDetail = true;
      this.itemId = id;
      this.formData = JSON.parse(JSON.stringify(form));
    },
    closeDialog() {
      this.isQuestionDetail = false;
    },
  },
};
</script>

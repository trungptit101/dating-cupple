<template>
  <div class="app-container">
    <el-row class="flex items-center" style="margin-bottom: 10px">
      <el-col :span="12">
        <h2>List Survey Questions</h2>
      </el-col>
      <el-col :span="12" class="text-right">
        <el-button type="primary" size="medium" @click="addQuestion"
          >Add</el-button
        >
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
      <el-table-column label="Question">
        <template slot-scope="scope">
          {{ scope.row.question }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="Type" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.type | statusFilter }}</span>
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="Options">
        <template slot-scope="scope">
          <div
            v-for="(option, index) in getListOptions(scope.row.options)"
            :key="index"
          >
            {{ option.text }}
          </div>
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

    <el-dialog
      :title="itemId == null ? 'Add Question' : 'Edit Question'"
      :visible.sync="isQuestionDetail"
    >
      <QuestionDetail
        v-if="isQuestionDetail"
        @closeCreateDialog="closeCreateDialog"
        @closeDialog="closeDialog"
        :formData="formData"
        :id="itemId"
      />
    </el-dialog>
  </div>
</template>

<script>
import { getListQuestion, deleteQuestion } from "@/api/question";
import QuestionDetail from "./QuestionDetail.vue";
import { Message } from "element-ui";

export default {
  components: { QuestionDetail },
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
      getListQuestion().then((response) => {
        this.list = response.data;
        this.loading = false;
      });
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

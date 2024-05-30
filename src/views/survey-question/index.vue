<template>
  <div class="app-container">
    <el-row class="flex items-center" style="margin-bottom: 10px">
      <el-col :span="12">
        <h2>List Survey Questions</h2>
      </el-col>
      <el-col :span="12" class="text-right">
        <el-button
          type="danger"
          size="small"
          icon="el-icon-s-tools"
          @click="settingsFilter"
          >Settings Filter</el-button
        >
        <el-button
          type="primary"
          icon="el-icon-plus"
          size="small"
          @click="addQuestion"
          >Add Question</el-button
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
          {{ scope.$index + 1 + (page - 1) * perPage }}
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
            v-if="
              ![QuestionType.BreakScreen, QuestionType.InputAnswer].includes(
                scope.row.type
              )
            "
          >
            <div
              v-for="(option, index) in getListOptions(scope.row.options)"
              :key="index"
            >
              {{ option.text }}
            </div>
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
    <div class="text-center" style="padding: 20px 0">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="page"
        :page-sizes="[10, 20, 30, 40, 50]"
        :page-size="perPage"
        layout="total, sizes, prev, pager, next"
        :total="totalCount"
      >
      </el-pagination>
    </div>

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

    <el-dialog title="Settings Filter" :visible.sync="isSettingsFilter">
      <el-select
        class="setting-filter"
        v-model="filterSelected"
        multiple
        filterable
        placeholder="Settings Filter"
      >
        <el-option
          v-for="item in optionsQuestionFilter"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <div class="text-right" style="padding-top: 20px">
        <el-button
          type="warning"
          size="medium"
          @click="isSettingsFilter = false"
          >Cancel</el-button
        >
        <el-button type="primary" size="medium" @click="saveSettings"
          >Save</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  getListQuestion,
  deleteQuestion,
  settingsFilter,
  updateSettingsFilter,
} from "@/api/question";
import QuestionDetail from "./QuestionDetail.vue";
import { QuestionType } from "@/define/index";
import { Message } from "element-ui";

export default {
  components: { QuestionDetail },
  filters: {
    statusFilter(status) {
      const statusMap = {
        1: "only 1 answer",
        2: "mutiple answers",
        3: "Break screen",
        4: "Input answer",
      };
      return statusMap[status];
    },
  },
  data() {
    return {
      QuestionType,
      list: null,
      loading: false,
      isQuestionDetail: false,
      isSettingsFilter: false,
      filterSelected: [],
      itemId: null,
      formData: {},
      idSettings: null,
      optionsQuestionFilter: [],
      totalCount: 0,
      page: 1,
      perPage: 10,
    };
  },
  created() {
    this.getList();
    this.getSettings();
  },
  methods: {
    handleCurrentChange(val) {
      this.page = val;
      this.getList();
    },
    handleSizeChange(val) {
      this.perPage = val;
      this.getList();
    },
    saveSettings() {
      updateSettingsFilter({
        id: this.idSettings,
        questionIds: this.filterSelected,
      })
        .then(() => {
          this.isSettingsFilter = false;
          Message({
            message: "Update settings filter successfully!",
            type: "success",
            duration: 1000,
          });
        })
        .catch(() => {
          this.isSettingsFilter = false;
          Message({
            message: "Update settings filter failed!",
            type: "error",
            duration: 1000,
          });
        });
    },
    getSettings() {
      settingsFilter().then((res) => {
        if (res.data) {
          this.filterSelected = JSON.parse(res.data.questions_id);
          this.idSettings = res.data.id;
        }
      });
    },
    getListOptions(answerStr) {
      if (!answerStr) return [];
      return JSON.parse(answerStr) || [];
    },
    settingsFilter() {
      this.isSettingsFilter = true;
    },
    getList() {
      this.loading = true;
      const params = {
        page: this.page,
        perPage: this.perPage,
      };
      getListQuestion(params).then((response) => {
        this.loading = false;
        this.list = response.data.data;
        this.totalCount = response.data.total;
        this.optionsQuestionFilter = this.list
          .filter((q) => q.type != QuestionType.BreakScreen)
          .map((q) => {
            return {
              value: q.id,
              label: q.question,
            };
          });
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
<style lang="scss" scoped>
.setting-filter {
  width: 100%;
}
</style>

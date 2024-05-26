<template>
  <div class="app-container manager-candidate">
    <div class="filter-search">
      <el-row :gutter="20">
        <el-col
          :span="12"
          v-for="(question, index) in questionsSettings"
          :key="index"
          class="question-item-filter"
        >
          <div class="label">{{ question.question }}</div>
          <el-select
            class="setting-filter"
            v-if="
              [QuestionType.OnlyOption, QuestionType.MultipleOption].includes(
                question.type
              )
            "
            clearable
            v-model="filterSearch[question.id]"
            :multiple="question.type == QuestionType.MultipleOption"
            :placeholder="question.question"
          >
            <el-option
              v-for="option in question.options"
              :key="option.key"
              :label="option.text"
              :value="option.key"
            >
            </el-option>
          </el-select>
          <el-input
            v-else
            clearable
            :placeholder="question.question"
            v-model="filterSearch[question.id]"
          ></el-input>
        </el-col>
      </el-row>
    </div>
    <el-row class="flex items-center">
      <el-col :span="12">
        <h2>List Candidates</h2>
      </el-col>
      <el-col :span="12" class="text-right">
        <el-button
          type="primary"
          icon="el-icon-search"
          size="medium"
          @click="search"
          >Search</el-button
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
          <span :class="scope.row.gender">{{ scope.row.gender }}</span>
        </template>
      </el-table-column>
      <el-table-column
        class-name="status-col"
        label="Looking Gender"
        align="center"
      >
        <template slot-scope="scope">
          <span :class="scope.row.lookingGender">{{
            scope.row.lookingGender
          }}</span>
        </template>
      </el-table-column>
      <el-table-column
        class-name="status-col"
        label="Status Dating"
        align="center"
      >
        <template slot-scope="scope">
          <el-tag
            effect="dark"
            v-if="scope.row.dating"
            :type="scope.row.dating.isComplete ? 'success' : 'warning'"
          >
            {{
              scope.row.dating.isComplete
                ? "InProgress Dating"
                : "Complete Dating"
            }}
          </el-tag>
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
import { questionsSettings } from "@/api/question";
import { Message } from "element-ui";
import { QuestionType } from "@/define/index";

export default {
  components: {},
  data() {
    return {
      QuestionType,
      list: null,
      loading: false,
      itemId: null,
      formData: {},
      totalCount: 0,
      page: 1,
      perPage: 20,
      questionsSettings: [],
      filterSearch: {},
    };
  },
  created() {
    this.getList();
    this.getQuestionsSettings();
  },
  methods: {
    search() {
      this.getList();
    },
    formatFilter() {
      const filter = {};
      Object.keys(this.filterSearch).forEach((key) => {
        if (
          this.filterSearch[key] &&
          typeof this.filterSearch[key] == "string" &&
          this.filterSearch[key]
        )
          filter[key] = [this.filterSearch[key]];
        if (
          this.filterSearch[key] &&
          typeof this.filterSearch[key] == "object" &&
          this.filterSearch[key].length
        )
          filter[key] = this.filterSearch[key];
        filter[key] = JSON.stringify(filter[key]);
      });
      return filter;
    },
    getQuestionsSettings() {
      questionsSettings().then((res) => {
        this.questionsSettings = res.questions;
        this.questionsSettings.forEach((question) => {
          if (question.type == QuestionType.MultipleOption)
            this.$set(this.filterSearch, question.id, []);
          else this.$set(this.filterSearch, question.id, null);
        });
      });
    },
    getList() {
      const filter = this.formatFilter();
      this.loading = true;
      const params = {
        page: this.page,
        perPage: this.perPage,
      };
      if (Object.keys(filter).length > 0) params.filter = filter;
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
<style lang="scss" scoped>
.manager-candidate {
  .filter-search {
    padding-bottom: 10px;
    .question-item-filter {
      padding: 10px 0;
      .label {
        padding: 5px 0;
        font-weight: 500;
        font-size: 15px;
      }
      .setting-filter {
        width: 100%;
      }
    }
  }
  .male {
    font-weight: 600;
    color: #67c23a;
  }
  .female {
    font-weight: 600;
    color: #f56c6c;
  }
}
</style>

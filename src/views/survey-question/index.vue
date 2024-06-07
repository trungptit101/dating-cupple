<template>
  <div class="app-container">
    <el-row class="flex items-center" style="margin-bottom: 10px">
      <el-col :span="12">
        <h2>{{ $t("List Survey Questions") }}</h2>
      </el-col>
      <el-col :span="12" class="text-right">
        <el-button
          type="danger"
          size="small"
          icon="el-icon-s-tools"
          @click="settingsFilter"
          >{{ $t("Settings Filter") }}</el-button
        >
        <el-button
          type="primary"
          icon="el-icon-plus"
          size="small"
          @click="addQuestion"
          >{{ $t("Add Question") }}</el-button
        >
      </el-col>
    </el-row>
    <table class="design-table" v-if="list.length > 0">
      <thead>
        <th class="header-table-design" style="width: 60px; text-align: center">
          {{ $t("No") }}
        </th>
        <th class="header-table-design" style="width: 30%">
          {{ $t("Question") }}
        </th>
        <th
          class="header-table-design"
          style="width: 150px; text-align: center"
        >
          {{ $t("Type") }}
        </th>
        <th class="header-table-design">{{ $t("Options") }}</th>
        <th
          class="header-table-design"
          style="width: 100px; text-align: center"
        >
          {{ $t("Action") }}
        </th>
      </thead>

      <draggable
        v-model="list"
        tag="tbody"
        @start="drag = true"
        @end="endDragAction"
      >
        <tr v-for="(item, index) in list" :key="index" class="body-row-table">
          <td style="width: 60px; text-align: center">
            <div class="value-column" style="padding-left: 0">
              {{ index + 1 }}
            </div>
          </td>
          <td style="width: 30%">
            <div class="value-column">{{ item.question }}</div>
          </td>
          <td>
            <div class="value-column" style="width: 150px; text-align: center">
              {{ statusFilter(item.type) }}
            </div>
          </td>
          <td>
            <div
              v-if="
                ![QuestionType.BreakScreen, QuestionType.InputAnswer].includes(
                  item.type
                )
              "
              class="value-column"
            >
              <ul>
                <li
                  v-for="(option, index) in getListOptions(item.options)"
                  :key="index"
                >
                  {{ option.text }}
                </li>
              </ul>
            </div>
          </td>
          <td style="width: 100px; text-align: center">
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
                @click="editQuestion(item, item.id)"
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
                @click="deleteItem(item.id)"
              ></el-button>
            </el-tooltip>
          </td>
        </tr>
      </draggable>
    </table>

    <el-dialog
      :title="itemId == null ? $t('Add Question') : $t('Edit Question')"
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

    <el-dialog :title="$t('Settings Filter')" :visible.sync="isSettingsFilter">
      <el-select
        class="setting-filter"
        v-model="filterSelected"
        multiple
        filterable
        :placeholder="$t('Settings Filter')"
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
          >{{ $t("Cancel") }}</el-button
        >
        <el-button type="primary" size="medium" @click="saveSettings">{{
          $t("Save")
        }}</el-button>
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
  updateOrderQuestion,
} from "@/api/question";
import QuestionDetail from "./QuestionDetail.vue";
import { QuestionType } from "@/define/index";
import { Message } from "element-ui";
import Draggable from "vuedraggable";

export default {
  components: { QuestionDetail, Draggable },
  data() {
    return {
      QuestionType,
      list: [],
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
    statusFilter(status) {
      const statusMap = {
        1: this.$t("Only 1 answer"),
        2: this.$t("Mutiple answers"),
        3: this.$t("Break Screen"),
        4: this.$t("Input answer"),
      };
      return statusMap[status];
    },
    endDragAction() {
      const questionIds = this.list.map((e) => e.id);
      updateOrderQuestion({ questionIds: questionIds });
    },
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
        this.list = response.data;
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
.app-container {
  .setting-filter {
    width: 100%;
  }
  .design-table {
    border-collapse: collapse;
    background: #ffff;
    border: 1px solid #ebeef5;
    border-right: none;
    border-bottom: none;
    td {
      padding: 12px 0;
      border-right: 1px solid #ebeef5;
      border-bottom: 1px solid #ebeef5;
    }
    th {
      padding: 12px 0;
      border-right: 1px solid #ebeef5;
      border-bottom: 1px solid #ebeef5;
    }
    tr:hover {
      background-color: #f5f7fa;
    }
    .header-table-design {
      padding: 10px 0;
      background: #304156;
      color: #ffff;
    }
    .value-column {
      padding-left: 10px;
    }
    .body-row-table {
      padding: 10px 0;
    }
    ul {
      padding-left: 24px;
      margin: 0;
      li {
        padding: 3px 0;
      }
    }
  }
}
</style>

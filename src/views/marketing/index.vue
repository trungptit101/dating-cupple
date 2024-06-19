<template>
  <div class="contacts-container app-container">
    <el-row class="flex items-center" style="margin-bottom: 10px">
      <el-col :span="12">
        <h2>{{ $t("Discount strategy") }}</h2>
      </el-col>
      <el-col :span="12" class="text-right">
        <el-button
          type="primary"
          icon="el-icon-plus"
          size="medium"
          @click="addItem"
          >{{ $t("Add") }}</el-button
        >
      </el-col>
    </el-row>
    <el-table v-loading="loading" :data="list" border fit highlight-current-row>
      <el-table-column
        class-name="bold"
        align="center"
        :label="$t('No')"
        width="95"
      >
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column class-name="bold" :label="$t('Discount')">
        <template slot-scope="scope"> {{ scope.row.discount }}% </template>
      </el-table-column>
      <el-table-column class-name="bold" :label="$t('Gender')">
        <template slot-scope="scope">
          <span :class="scope.row.gender">{{ $t(scope.row.gender) }}</span>
        </template>
      </el-table-column>
      <el-table-column class-name="bold" :label="$t('Start')">
        <template slot-scope="scope">
          {{ scope.row.start }}
        </template>
      </el-table-column>
      <el-table-column class-name="bold" :label="$t('End')">
        <template slot-scope="scope">
          {{ scope.row.end }}
        </template>
      </el-table-column>
      <el-table-column
        class-name="status-col"
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
      :title="
        strategyId == null
          ? $t('Add Discount Strategy')
          : $t('Edit Discount Strategy')
      "
      :visible.sync="isStrategyDetail"
    >
      <StrategyDetail
        :id="strategyId"
        @closeCreateDialog="closeCreateDialog"
        :formData="formData"
        v-if="isStrategyDetail"
      />
    </el-dialog>
  </div>
</template>

<script>
import { getListStrategies, deleteStrategy } from "@/api/discount-strategy";
import StrategyDetail from "./StrategyDetail.vue";
import { Message } from "element-ui";

export default {
  components: { StrategyDetail },
  data() {
    return {
      loading: false,
      list: [],
      isStrategyDetail: false,
      strategyId: null,
      formData: {},
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.loading = true;
      getListStrategies().then((response) => {
        this.loading = false;
        this.list = response.data;
      });
    },
    closeCreateDialog() {
      this.isStrategyDetail = false;
      this.getList();
    },
    addItem() {
      this.strategyId = null;
      this.formData = {};
      this.isStrategyDetail = true;
    },
    editItem(row, id) {
      this.strategyId = id;
      this.formData = row;
      this.isStrategyDetail = true;
    },
    deleteItem(id) {
      this.$confirm(this.$t("Are you sure to delete this discount strategy?"))
        .then((_) => {
          deleteStrategy(id).then((res) => {
            Message({
              message: this.$t("Delete this discount strategy successfully!"),
              type: "success",
              duration: 2000,
            });
            this.getList();
          });
        })
        .catch((_) => {});
    },
  },
};
</script>
<style lang="scss" scoped>
.male {
  font-weight: 600;
  color: #67c23a;
}
.female {
  font-weight: 600;
  color: #f56c6c;
}
</style>

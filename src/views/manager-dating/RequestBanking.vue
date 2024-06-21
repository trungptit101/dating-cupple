<template>
  <div class="app-container">
    <el-row class="flex items-center">
      <el-col :span="12">
        <h2>
          Requests Banking
          <span
            class="badge-request"
            v-if="listRequestsBankingPending.length"
            >{{ listRequestsBankingPending.length }}</span
          >
        </h2>
      </el-col>
    </el-row>
    <el-table
      v-loading="loading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
      style="font-weight: bold"
    >
      <el-table-column align="center" :label="$t('No')" width="95">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column align="center" :label="$t('Candidate')">
        <template slot-scope="scope">
          {{ scope.row.user && scope.row.user.name }}
        </template>
      </el-table-column>
      <el-table-column align="center" :label="$t('Months')">
        <template slot-scope="scope">
          {{ scope.row.months }}
        </template>
      </el-table-column>
      <el-table-column align="center" :label="$t('Amount')">
        <template slot-scope="scope">
          {{
            Number(scope.row.price).toLocaleString("it-IT", {
              style: "currency",
              currency: scope.row.lang == "en" ? "USD" : "VND",
            })
          }}
        </template>
      </el-table-column>
      <el-table-column align="center" :label="$t('Content')">
        <template slot-scope="scope">
          {{ scope.row.content }}
        </template>
      </el-table-column>
      <el-table-column
        class-name="status-col"
        :label="$t('Created date')"
        align="center"
      >
        <template slot-scope="scope">
          <span>{{ convertDatetimeFormat(scope.row.created_at) }}</span>
        </template>
      </el-table-column>
      <el-table-column
        class-name="status-col"
        :label="$t('Status')"
        align="center"
      >
        <template slot-scope="scope">
          <div v-if="scope.row.payment_status != 1">
            <el-tag
              type="danger"
              effect="dark"
              v-if="scope.row.payment_status == 2"
            >
              {{ $t("Cancel") }}
            </el-tag>
            <el-tag type="success" effect="dark" v-else>
              {{ $t("Complete") }}
            </el-tag>
          </div>
          <el-tag
            effect="dark"
            v-else
            style="cursor: pointer"
            @click="confirmOrder(scope.row)"
          >
            {{ $t("InProgress") }}
          </el-tag>
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
      :close-on-click-modal="false"
      :title="$t('Order verification')"
      :visible.sync="isDisplayConfirmOrder"
    >
      <div style="font-size: 20px; font-weight: 500">
        {{
          $t(
            "Have you received the money with the correct payment information?"
          )
        }}
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button
          type="warning"
          size="medium"
          @click="finishProcessOrder(2)"
          >{{ $t("No, not received") }}</el-button
        >
        <el-button
          type="primary"
          size="medium"
          @click="finishProcessOrder(3)"
          >{{ $t("Yes, received") }}</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { listRequestsBanking, finishOrder } from "@/api/order";
import { Message } from "element-ui";
import { convertDatetimeFormat } from "@/utils/common";

export default {
  data() {
    return {
      list: [],
      loading: false,
      isDisplayConfirmOrder: false,
      itemId: null,
      totalCount: 0,
      page: 1,
      perPage: 10,
      convertDatetimeFormat,
      data: {},
      datingId: null,
    };
  },
  created() {
    this.getList();
  },
  computed: {
    listRequestsBankingPending() {
      return this.list.filter((e) => e.payment_status == 1);
    },
  },
  methods: {
    confirmOrder(data) {
      this.isDisplayConfirmOrder = true;
      this.data = data;
    },
    finishProcessOrder(status) {
      finishOrder({
        id: this.data.id,
        status: status,
      }).then((res) => {
        this.isDisplayConfirmOrder = false;
        Message({
          message: this.$t("Verify order successfully!"),
          type: "success",
          duration: 1000,
        });
        this.getList();
      });
    },
    getList() {
      this.loading = true;
      const params = {
        page: this.page,
        perPage: this.perPage,
      };
      listRequestsBanking(params)
        .then((response) => {
          this.list = response.data.data;
          this.loading = false;
        })
        .catch(() => {
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
  },
};
</script>
<style lang="scss" scoped>
.badge-request {
  color: #ffff;
  background: red;
  padding: 5px 8px;
  border-radius: 10px;
  font-size: 12px;
  position: absolute;
  top: 5px;
  margin-left: 4px;
}
</style>

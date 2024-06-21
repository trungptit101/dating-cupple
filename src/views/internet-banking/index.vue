<template>
  <div class="contacts-container app-container">
    <el-row class="flex items-center" style="margin-bottom: 10px">
      <el-col :span="12">
        <h2>{{ $t("Internet Banking") }}</h2>
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
      <el-table-column class-name="bold" :label="$t('Country')">
        <template slot-scope="scope">
          {{ scope.row.country == "en" ? "Singapor" : "Viet Nam" }}
        </template>
      </el-table-column>
      <el-table-column class-name="bold" :label="$t('Account name')">
        <template slot-scope="scope">
          {{ scope.row.account_name }}
        </template>
      </el-table-column>
      <el-table-column class-name="bold" :label="$t('Account number')">
        <template slot-scope="scope">
          {{ scope.row.account_number }}
        </template>
      </el-table-column>
      <el-table-column class-name="bold" :label="$t('Bank')">
        <template slot-scope="scope">
          {{ scope.row.bank }}
        </template>
      </el-table-column>
      <el-table-column class-name="bold" label="QRCode">
        <template slot-scope="scope">
          <img
            :src="scope.row.qrcode"
            style="max-height: 250px; max-width: 100%; object-fit: cover"
          />
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
          ? $t('Add Internet Banking')
          : $t('Edit Internet Banking')
      "
      :visible.sync="isDisplayDetail"
    >
      <InternetBankingDetail
        :id="strategyId"
        @closeCreateDialog="closeCreateDialog"
        :formData="formData"
        v-if="isDisplayDetail"
      />
    </el-dialog>
  </div>
</template>

<script>
import { getList, deleteInternetBanking } from "@/api/internet-banking";
import InternetBankingDetail from "./InternetBankingDetail.vue";
import { Message } from "element-ui";

export default {
  components: { InternetBankingDetail },
  data() {
    return {
      loading: false,
      list: [],
      isDisplayDetail: false,
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
      getList().then((response) => {
        this.loading = false;
        this.list = response.data;
      });
    },
    closeCreateDialog() {
      this.isDisplayDetail = false;
      this.getList();
    },
    addItem() {
      this.strategyId = null;
      this.formData = {};
      this.isDisplayDetail = true;
    },
    editItem(row, id) {
      this.strategyId = id;
      this.formData = row;
      this.isDisplayDetail = true;
    },
    deleteItem(id) {
      this.$confirm(this.$t("Are you sure to delete this internet banking?"))
        .then((_) => {
          deleteInternetBanking(id).then((res) => {
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

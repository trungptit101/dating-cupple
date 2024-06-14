<template>
  <div class="contacts-container app-container">
    <el-row class="flex items-center" style="margin-bottom: 10px">
      <el-col :span="12">
        <h2>{{ $t("List Contacts") }}</h2>
      </el-col>
    </el-row>
    <el-table v-loading="loading" :data="list" border fit highlight-current-row>
      <el-table-column align="center" :label="$t('No')" width="95">
        <template slot-scope="scope">
          {{ scope.$index + 1 + (page - 1) * perPage }}
        </template>
      </el-table-column>
      <el-table-column :label="$t('Email')">
        <template slot-scope="scope">
          {{ scope.row.email }}
        </template>
      </el-table-column>
      <el-table-column :label="$t('Contact')">
        <template slot-scope="scope">
          {{ scope.row.contact }}
        </template>
      </el-table-column>
      <el-table-column :label="$t('Issue')">
        <template slot-scope="scope">
          {{ scope.row.issue }}
        </template>
      </el-table-column>
      <el-table-column :label="$t('Description')">
        <template slot-scope="scope">
          {{ scope.row.description }}
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
  </div>
</template>

<script>
import { getListContacts, deleteContact } from "@/api/contact";
import { Message } from "element-ui";

export default {
  data() {
    return {
      loading: false,
      totalCount: 0,
      page: 1,
      list: [],
      perPage: 10,
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
      getListContacts(params).then((response) => {
        this.loading = false;
        this.list = response.data.data;
        this.totalCount = response.data.total;
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
      this.$confirm(this.$t("Are you sure to delete this contact?"))
        .then((_) => {
          deleteContact(id).then((res) => {
            Message({
              message: res.message,
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
.contacts-container {
}
</style>

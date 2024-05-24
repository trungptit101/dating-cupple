<template>
  <div class="app-container">
    <el-row class="flex items-center">
      <el-col :span="12">
        <h2>
          Requests Dating
          <span class="badge-request" v-if="listRequestPending.length">{{
            listRequestPending.length
          }}</span>
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
    >
      <el-table-column align="center" label="No" width="95">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column label="Name Candidate">
        <template slot-scope="scope">
          <div class="flex items-center">
            <Avatar
              :size="40"
              :user="scope.row.user"
              :url="scope.row.user.avatar"
            />
            <div style="margin-left: 8px; font-weight: 400">
              <div class="font-bold">{{ scope.row.user.name }}</div>
              <div>{{ scope.row.user.email }}</div>
              <div>{{ scope.row.user.phone }}</div>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="Partners">
        <template slot-scope="scope">
          <div
            class="flex items-center"
            v-for="(partner, index) in scope.row.partners"
            :key="index"
          >
            <Avatar :size="40" :user="partner" :url="partner.avatar" />
            <div style="margin-left: 8px; font-weight: 400">
              <div class="font-bold">{{ partner.name }}</div>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        class-name="status-col"
        label="Request Date"
        align="center"
      >
        <template slot-scope="scope">
          <span>{{ convertDatetimeFormat(scope.row.created_at) }}</span>
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="Status" align="center">
        <template slot-scope="scope">
          <el-tag type="warning" effect="dark" v-if="scope.row.isComplete == 0">
            InProgress
          </el-tag>
          <el-tag type="success" effect="dark" v-else> Complete </el-tag>
        </template>
      </el-table-column>
      <el-table-column
        class-name="status-col"
        label="Action"
        width="110"
        align="center"
      >
        <template slot-scope="scope">
          <el-tooltip class="item" effect="dark" content="View" placement="top">
            <el-button
              type="primary"
              icon="el-icon-view"
              size="mini"
              circle
              @click="viewItem(scope.row, scope.row.id)"
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
    <el-dialog title="Dating Detail" :visible.sync="isDatingDetail">
      <DatingDetail
        v-if="isDatingDetail"
        :data="data"
        :id="datingId"
        @refresh="refresh"
        @closeDialog="isDatingDetail = false"
      />
    </el-dialog>
  </div>
</template>

<script>
import { getListRequestDating, deleteCandidate } from "@/api/user";
import { Message } from "element-ui";
import { convertDatetimeFormat } from "@/utils/common";
import Avatar from "@/components/Avatar.vue";
import DatingDetail from "./DatingDetail.vue";

export default {
  components: { Avatar, DatingDetail },
  data() {
    return {
      list: [],
      loading: false,
      isDatingDetail: false,
      itemId: null,
      convertDatetimeFormat,
      data: {},
      datingId: null,
    };
  },
  created() {
    this.getList();
  },
  computed: {
    listRequestPending() {
      return this.list.filter((e) => !e.isComplete);
    },
  },
  methods: {
    refresh() {
      this.isDatingDetail = false;
      this.getList();
    },
    getList() {
      this.loading = true;
      const params = {
        page: this.page,
        perPage: this.perPage,
      };
      getListRequestDating(params)
        .then((response) => {
          this.list = response.data;
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },
    viewItem(data, id) {
      this.isDatingDetail = true;
      this.data = {
        ...{ isComplete: data.isComplete },
        ...data.user,
        children: data.partners,
      };
      this.datingId = id;
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

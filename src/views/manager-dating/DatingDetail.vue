<template>
  <div class="dating-detail">
    <div class="container">
      <vue-tree
        style="width: 100%; height: 500px"
        :dataset="data"
        :config="treeConfig"
      >
        <template v-slot:node="{ node }">
          <div
            class="flex items-center user-layout justify-center"
            :class="
              'children' in node ? 'user-layout-parent' : 'user-layout-children'
            "
          >
            <Avatar :size="40" :user="node" :url="node.avatar" />
            <div style="margin-left: 8px; font-weight: 400">
              <div class="font-bold item-info">{{ node.name }}</div>
              <div class="item-info">{{ node.email }}</div>
              <div class="item-info">{{ node.phone }}</div>
            </div>
          </div>
        </template>
      </vue-tree>
    </div>
    <div class="text-right">
      <el-button type="warning" size="medium" @click="closeDialog"
        >Cancel</el-button
      >
      <el-button
        v-if="!data.isComplete"
        type="primary"
        size="medium"
        :loading="loading"
        @click="completeDating"
        >Complete</el-button
      >
    </div>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar.vue";
import VueTree from "@ssthouse/vue-tree-chart";
import { updateProcessDating } from "@/api/user";
import { Message } from "element-ui";
export default {
  components: { VueTree, Avatar },
  props: ["data", "id"],
  data() {
    return {
      loading: false,
      treeConfig: { nodeWidth: 300, nodeHeight: 150, levelHeight: 200 },
    };
  },
  methods: {
    closeDialog() {
      this.$emit("closeDialog");
    },
    completeDating() {
      this.loading = true;
      updateProcessDating(this.id)
        .then((res) => {
          this.loading = false;
          Message({
            message: res.message,
            type: "success",
            duration: 1000,
          });
          this.$emit("refresh");
        })
        .catch(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.user-layout {
  border: 1px solid #d5d5d5;
  padding: 20px;
  border-radius: 10px;
  .item-info {
    padding: 5px 0;
  }
}
.user-layout-parent {
  margin-bottom: 120px;
}
.user-layout-children {
  margin-top: 120px;
}

.rich-media-node {
  width: 80px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: white;
  background-color: #f7c616;
  border-radius: 4px;
}
</style>

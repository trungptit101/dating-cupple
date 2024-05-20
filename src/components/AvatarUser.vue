<template>
  <el-dropdown class="avatar-user" trigger="click">
    <div class="avatar-wrapper">
      <img slot="reference" :src="urlAvatar" :style="styles" />
    </div>
    <el-dropdown-menu slot="dropdown" class="menu-user">
      <router-link to="/survey/list">
        <el-dropdown-item>Manager</el-dropdown-item>
      </router-link>
      <router-link to="/">
        <el-dropdown-item>Settings</el-dropdown-item>
      </router-link>
      <el-dropdown-item divided @click.native="logout">
        <span style="display: block">Log Out</span>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { GenderUser } from "@/define/index";
import store from "@/store";
export default {
  props: ["size", "user"],
  data() {
    return {};
  },
  computed: {
    user() {
      return store.getters.user;
    },
    styles() {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`,
        "object-fit": "contain",
        "border-radius": "50%",
      };
    },
    urlAvatar() {
      if (this.user.avatar) return this.user.avatar;
      if (this.user.gender == GenderUser.Male)
        return require("@/assets/images/avatar-male.png");
      return require("@/assets/images/avatar-female.svg");
    },
  },
  methods: {
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    },
  },
};
</script>
<style lang="scss">
.avatar-user {
  img {
    cursor: pointer;
  }
}
.menu-user {
  padding: 10px 0;
  width: 120px;
}
</style>

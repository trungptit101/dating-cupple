<template>
  <el-dropdown class="avatar-user" trigger="click">
    <div class="avatar-wrapper">
      <img slot="reference" :src="urlAvatar" :style="styles" />
    </div>
    <el-dropdown-menu slot="dropdown" class="menu-user">
      <router-link
        to="/survey-question"
        v-if="user.role == UserRole.Candidate && !user.is_complete_survey"
      >
        <el-dropdown-item>{{ $t("Survey Question") }}</el-dropdown-item>
      </router-link>
      <router-link
        to="/payment/upgrade"
        v-if="user.role == UserRole.Candidate && user.is_complete_survey"
      >
        <el-dropdown-item>{{ $t("Process Dating") }}</el-dropdown-item>
      </router-link>
      <router-link to="/analysic" v-if="user.role == UserRole.Admin">
        <el-dropdown-item>{{ $t("Manager") }}</el-dropdown-item>
      </router-link>
      <el-dropdown-item @click.native="settingProfile">{{
        $t("Settings")
      }}</el-dropdown-item>
      <el-dropdown-item divided @click.native="logout">
        <span style="display: block">{{ $t("Log Out") }}</span>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { GenderUser, UserRole } from "@/define/index";
import store from "@/store";
export default {
  props: ["size"],
  data() {
    return { UserRole };
  },
  computed: {
    user() {
      return store.getters.user;
    },
    styles() {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`,
        "object-fit": "cover",
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
    settingProfile() {
      this.$emit("settingProfile");
    },
  },
};
</script>
<style lang="scss">
.avatar-user {
  img {
    cursor: pointer;
    max-width: 100%;
  }
}
.menu-user {
  padding: 10px 0;
  width: 150px;
}
</style>

<template>
  <div class="navbar">
    <hamburger
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    />

    <!-- <breadcrumb class="breadcrumb-container" /> -->

    <div class="right-menu flex">
      <MultipleLanguage style="margin-right: 15px" />
      <AvatarUser :size="40" @settingProfile="settingProfile" />
      <!-- <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img :src="urlAvatar" class="user-avatar" />
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <el-dropdown-item divided @click.native="logout">
            <span style="display: block">Log Out</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown> -->
    </div>
    <el-dialog
      :close-on-click-modal="false"
      :title="$t('Settings Profile')"
      :visible.sync="isDisplaySettingsProfile"
      top="5vh"
    >
      <SettingsProfile
        v-if="isDisplaySettingsProfile"
        @closeDialog="isDisplaySettingsProfile = false"
      />
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Breadcrumb from "@/components/Breadcrumb";
import Hamburger from "@/components/Hamburger";
import { GenderUser } from "@/define/index";
import AvatarUser from "@/components/AvatarUser.vue";
import store from "@/store";
import SettingsProfile from "@/components/SettingsProfile.vue";
import MultipleLanguage from "@/layout/components/MultipleLanguage.vue";

export default {
  components: {
    Breadcrumb,
    Hamburger,
    AvatarUser,
    SettingsProfile,
    MultipleLanguage,
  },
  data() {
    return {
      isDisplaySettingsProfile: false,
    };
  },
  computed: {
    ...mapGetters(["sidebar", "avatar"]),
    user() {
      return store.getters.user;
    },
    urlAvatar() {
      if (this.user.avatar) return this.user.avatar;
      if (this.user.gender == GenderUser.Male)
        return require("@/assets/images/avatar-male.png");
      return require("@/assets/images/avatar-female.svg");
    },
  },
  methods: {
    settingProfile() {
      this.isDisplaySettingsProfile = true;
    },
    toggleSideBar() {
      this.$store.dispatch("app/toggleSideBar");
    },
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;
    padding-right: 15px;
    padding-top: 5px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>

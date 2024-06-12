<template>
  <div>
    <div
      class="flex justify-between items-center absolute top-0 left-0 col-12 z2"
    >
      <img
        src="@/assets/images/logo-text-white.png"
        style="
          cursor: pointer;
          height: 90px;
          object-fit: contain;
          margin-left: 1rem;
        "
        @click="$router.push({ path: '/' })"
      />

      <div class="flex items-center">
        <MultipleLanguage style="margin-right: -10px" />
        <a
          class="btn-bg btn-color block py1 px2 button relative overflow-hidden rounded shadow ms3 my3"
          title="Login"
          @click="$router.push({ name: 'login' })"
          v-if="!user.email"
        >
          {{ $t("Login") }}
        </a>
        <AvatarUser
          class="py1 ms2 px2"
          :size="45"
          v-else
          @settingProfile="isDisplaySettingsProfile = true"
        />
      </div>
    </div>
    <div
      class="section-top flex relative"
      :class="{
        'section-top-others': otherHome,
      }"
    >
      <div
        class="flex items-center justify-center height-97"
        style="width: 100%"
        :class="{
          'height-top-other': otherHome,
        }"
      >
        <div class="p0 intro">
          <div class="intro-text center reveal">
            <h1 class="h1 white relative m0 mb1 line-height-3">
              {{ $t("Welcome to Visicupid.com!") }}
            </h1>
            <h2 class="h2 white relative my2 line-height-4 mx-auto">
              {{ $t("Visicupid’s Mission is to connect singles who are seeking true love and happiness.") }}
            </h2>
            <h2 class="h2 white relative my2 line-height-4 mx-auto">
              {{ $t("Connect with singles who sharing your values and interests.") }}
            </h2>
            <h2 class="h2 white relative my2 line-height-4 mx-auto">
              {{ $t("Sign up for your Ideal Type’s") }}
            </h2>
            <div
              class="intro-join mt1 center flex items-start justify-center col-12 mx-auto reveal"
              v-if="!user.email"
            >
              <a class="header-color" @click="isDisplayRegisterServey = true">
                <h3
                  class="btn-bg btn-color block py1 px2 button relative overflow-hidden rounded shadow"
                >
                  <i class="el-icon-user" style="margin-right: 10px" />{{ $t("Sign up") }}
                </h3>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="landing-benefits absolute left-0 bottom-0 col-12">
        <div class="flex items-center justify-center my2">
          <div class="flex-auto mx2 flex items-center justify-center">
            <div class="flex-none m1 dot dot-highlight circle" />
            {{ $t("Superior Matching Algorithms") }}
          </div>
          <div class="flex-auto mx2 flex items-center justify-center">
            <div class="flex-none m1 dot dot-highlight circle" />
            {{ $t("In-depth Profiling") }}
          </div>
          <div class="flex-auto mx2 flex items-center justify-center">
            <div class="flex-none m1 dot dot-highlight circle" />
            {{ $t("Trusted site backed by Visicupid Media") }}
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      top="5vh"
      :close-on-click-modal="false"
      :visible.sync="isDisplayRegisterServey"
    >
      <RegisterServey @finish="finishRegister" />
    </el-dialog>
    <el-dialog
      :close-on-click-modal="false"
      title="Settings Profile"
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
import AvatarUser from "@/components/AvatarUser.vue";
import RegisterServey from "@/components/RegisterServey.vue";
import MultipleLanguage from "./MultipleLanguage.vue";
import SettingsProfile from "@/components/SettingsProfile.vue";
export default {
  components: { AvatarUser, MultipleLanguage, RegisterServey, SettingsProfile },
  props: ["otherHome"],
  data() {
    return {
      isDisplayRegisterServey: false,
      isDisplaySettingsProfile: false,
    };
  },
  computed: {
    user() {
      return this.$store.state.user.user;
    },
  },
  methods: {
    finishRegister() {
      this.isDisplayRegisterServey = false;
    },
  },
};
</script>
<style lang="scss" scoped>
</style>

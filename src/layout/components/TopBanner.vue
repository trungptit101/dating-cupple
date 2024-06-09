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
          @settingProfile="$emit('settingProfile')"
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
        :class="{
          'height-top-other': otherHome,
        }"
      >
        <div class="p0 intro">
          <div class="intro-text center reveal">
            <h1 class="h1 white relative m0 mb1 line-height-3 max-width-3">
              {{ $t("We protect your profile as privacy and confidential.") }}
            </h1>
            <h2 class="h2 white relative my2 line-height-4 max-width-2 mx-auto">
              {{ $t("Your Journey let our professional matchmaker behalf’s.") }}
            </h2>
            <div
              class="intro-join mt1 center flex items-start justify-center col-12 mx-auto reveal"
              v-if="!user.email"
            >
              <a class="header-color" @click="$emit('openFormRegister')">
                <h3
                  class="btn-bg btn-color block py1 px2 button relative overflow-hidden rounded shadow"
                >
                  {{ $t("Find Your Beloved") }}
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
  </div>
</template>

<script>
import AvatarUser from "@/components/AvatarUser.vue";
import MultipleLanguage from "./MultipleLanguage.vue";
export default {
  components: { AvatarUser, MultipleLanguage },
  props: ["otherHome"],
  data() {
    return {};
  },
  computed: {
    user() {
      return this.$store.state.user.user;
    },
  },
};
</script>
<style lang="scss" scoped>
</style>

<template>
  <div class="svelte-header" style="position: sticky; top: 0; z-index: 2">
    <div
      class="flex items-center justify-between bg-[#232E4D] lg:p-4 p-2"
      style="padding: 12.5px; height: 79px"
    >
      <img
        src="@/assets/images/logo-text.png"
        style="cursor: pointer; object-fit: contain; height: 100%"
        @click="$router.push({ path: '/' })"
      />
      <div class="nav-header py1 px2">
        <AvatarUser :size="40" />
      </div>
    </div>
  </div>
</template>

<script>
import AvatarUser from "@/components/AvatarUser.vue";
export default {
  components: { AvatarUser },
  data() {
    return {};
  },
  computed: {
    user() {
      return this.$store.state.user.user;
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
<style lang="scss" scoped>
.svelte-header {
  position: sticky;
  top: 0;
  z-index: 2;
  .bg-\[\#232E4D\] {
    --tw-bg-opacity: 1;
    background-color: rgb(35 46 77 / var(--tw-bg-opacity));
  }
}
</style>

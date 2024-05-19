<template>
  <div class="svelte-header" style="position: sticky; top: 0; z-index: 2">
    <div
      class="flex items-center justify-between bg-[#232E4D] lg:p-4 p-2"
      style="padding: 12.5px; height: 79px"
    >
      <img
        src="@/assets/images/logo.png"
        style="cursor: pointer; height: 50px; object-fit: contain"
        @click="$router.push({ path: '/' })"
      />
      <div class="nav-header">
        <a
          class="btn-bg btn-color block py1 px2 button relative overflow-hidden rounded shadow ms3 my3"
          title="Login"
          v-if="!user.email"
          @click="$router.push({ name: 'login' })"
        >
          Login
        </a>
        <a
          class="btn-bg btn-color block py1 px2 button relative overflow-hidden rounded shadow ms3 my3"
          title="Logout"
          v-else
          @click="logout"
        >
          Logout
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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

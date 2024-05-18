<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import store from "./store";
export default {
  name: "App",
  mounted() {
    if (store.getters.user.id) {
      this.$store.dispatch("user/getInfo", store.getters.user.id);
    }
  },
};
</script>

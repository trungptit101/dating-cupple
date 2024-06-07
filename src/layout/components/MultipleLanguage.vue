<template>
  <div class="membernav">
    {{ currentLanguage }} ==
    <img
      src="@/assets/images/logo-vietnamese.png"
      width="30.5"
      style="cursor: pointer; margin-right: 15px"
      @click="changeLanguage('vi')"
    />
    <img
      src="@/assets/images/logo-american.png"
      width="30"
      style="cursor: pointer"
      @click="changeLanguage('en')"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentLanguage: localStorage.getItem("language") || "en",
    };
  },
  methods: {
    changeLanguage(language) {
      localStorage.setItem("language", language);
      window.location.reload();
    },
  },
};
</script>
<style lang="scss" scoped>
</style>

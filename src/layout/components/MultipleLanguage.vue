<template>
  <div class="membernav" style="cursor: pointer">
    {{ currentLanguage }} ==
    <img
      src="@/assets/images/logo-vietnamese.png"
      width="35.5"
      style="margin-right: 15px"
      @click="changeLanguage('vi')"
    />
    <img
      src="@/assets/images/logo-american.png"
      width="35"
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

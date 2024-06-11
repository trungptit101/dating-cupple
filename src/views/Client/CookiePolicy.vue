<template>
  <div class="cookie-policy">
    <TopBanner @openFormRegister="openFormRegister" :otherHome="true" />
    <div class="content"></div>
    <Footer />
  </div>
</template>

<script>
import TopBanner from "@/layout/components/TopBanner.vue";
import Footer from "@/layout/components/Footer.vue";
export default {
  components: { TopBanner, Footer },
  data() {
    return {};
  },
  methods: {
    openFormRegister() {
      this.isDisplayRegisterServey = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.cookie-policy {
  .content {
    padding: 2vh 5vw;
    line-height: 25px;
    font-size: 18px;
    ol li {
      padding: 5px 0;
    }
  }
}
</style>

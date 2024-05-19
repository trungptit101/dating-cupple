<template>
  <div class="partner-suggestion">
    <LoadingComponent
      v-if="isLoading"
      message="Processing now, please wait ..."
    />
    <div v-else>
      <Header />
      <div class="container-partner-suggestion payment-content-max-width"></div>
      <div class="trademark p1 center">
        <h5>
          Cupid Media, the Cupid Media Logo are registered trademarks of Ecom
          Holdings Pty Ltd and used with permission by Cupid Media Pty Ltd.
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/layout/components/Header.vue";
import LoadingComponent from "@/layout/components/LoadingComponent.vue";
import { getPartnerSuggestion } from "@/api/partner";
export default {
  components: { Header, LoadingComponent },
  data() {
    return {
      isLoading: false,
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      getPartnerSuggestion().then((res) => {
        console.log("@@@@@@@@@@@", res);
      });
    },
  },
};
</script>


<style lang="scss" scoped>
.partner-suggestion {
  .container-partner-suggestion {
    min-height: calc(100vh - 80px - 65px);
    background: #fff;
  }
}
</style>

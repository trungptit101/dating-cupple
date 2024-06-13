<template>
  <div class="upgrade-payment">
    <Header />
    <div class="content">
      <ChooseMemberShip />
    </div>
  </div>
</template>

<script>
import ChooseMemberShip from "./payment/ChooseMemberShip.vue";
import Header from "@/layout/components/Header.vue";
export default {
  components: { ChooseMemberShip, Header },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
};
</script>


<style lang="scss">
.upgrade-payment {
  min-height: 100vh;
  background: #fff;
  .content {
    height: calc(100vh - 80px);
    overflow: auto;
  }
  .payment-content-max-width {
    max-width: 980px;
    margin: 0px auto;
  }
  .selected {
    opacity: 1;
  }
}
</style>

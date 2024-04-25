<template>
  <WelcomeUpgrade v-if="upgradeComponent == 'WelcomeUpgrade'" />
  <Payment v-else-if="upgradeComponent == 'Payment'" />
</template>

<script>
import Payment from "./Payment.vue";
import WelcomeUpgrade from "./WelcomeUpgrade.vue";
export default {
  components: { Payment, WelcomeUpgrade },
  data() {
    return {};
  },
  computed: {
    upgradeComponent() {
      const query = this.$route.query;
      if (query.paywall && query.paywall == "1") return "WelcomeUpgrade";
      return "Payment";
    },
  },
  watch: {},
  methods: {},
};
</script>


<style lang="scss">
</style>

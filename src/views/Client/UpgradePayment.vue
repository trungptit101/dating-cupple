<template>
  <WelcomeUpgrade v-if="upgradeComponent == 'WelcomeUpgrade'" />
  <Payment v-else-if="upgradeComponent == 'Payment'" />
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import Payment from './Payment.vue'
import WelcomeUpgrade from './WelcomeUpgrade.vue'

const route = useRoute()
const upgradeComponent = computed(() => {
  const query = route.query
  if (query.paywall && query.paywall == '1') return 'WelcomeUpgrade'
  return 'Payment'
})
</script>
<style lang="scss">
</style>
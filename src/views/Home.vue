<template>
  <div></div>
</template>

<script lang="ts" setup>
import { onBeforeMount } from 'vue'
import { UseDmsRouter } from '@/composables'

const router = UseDmsRouter()
onBeforeMount(async () => {
  return await router.replaceByPath('/dashboard')
})
</script>

<style scoped></style>

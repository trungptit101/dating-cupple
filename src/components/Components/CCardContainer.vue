<template>
  <div class="card-container" :style="style">
    <div class="card-container__title" v-if="props.title">
      {{ props.title }}
    </div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

type PropType = {
  padding?: string
  title?: string
}
const props = withDefaults(defineProps<PropType>(), {
  padding: '24px',
  title: '',
})
const style = computed(() => ({
  padding: props.padding,
}))
</script>

<style scoped lang="scss">
.card-container {
  background-color: var(--background-primary);
  border-radius: 6px;
  &__title {
    font-weight: 600;
    font-size: 20px;
    color: var(--text-primary);
    margin-bottom: 16px;
    line-height: 120%;
  }
}
</style>

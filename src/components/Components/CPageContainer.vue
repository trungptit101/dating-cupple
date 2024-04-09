<template>
  <div class="page-container pt-27 pb-27 pl-46 pr-46">
    <div v-if="props.title" class="page-container__title mb-16">
      {{ props.title }}
    </div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
type PropType = {
  title?: string
}
const props = withDefaults(defineProps<PropType>(), {
  title: '',
})
</script>

<style scoped lang="scss">
.page-container {
  &__title {
    font-size: 18px;
    font-weight: 700;
    color: var(--text-primary);
  }
}
</style>

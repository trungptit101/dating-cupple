<template>
  <div class="brc d-flex flex-col align-items-start justify-center">
    <h1 class="brc__title mb-8">{{ currentExactRouter?.label }}</h1>
    <ul class="brc__list d-flex align-items-center justify-start">
      <li class="d-flex align-items-center justify-start">
        <i class="icon-home-21 mr-6" />
        <span>Trang chủ</span>
        <i class="icon-Arrow-Right mr-8 ml-8"></i>
      </li>
      <li
        class="d-flex align-items-center justify-start"
        v-for="(item, index) in currentExactRouter?.parentLabel"
        :key="index"
      >
        <span>{{ item }}</span>
        <i class="icon-Arrow-Right mr-6 ml-6"></i>
      </li>
      <li class="d-flex align-items-center justify-start brc__exact">
        <span>{{ currentExactRouter?.label }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { UseLayout } from '@/composables'

const useLayout = UseLayout()
const { currentExactRouter } = useLayout
</script>

<style scoped lang="scss">
.brc {
  &__title {
    font-size: 24px;
    line-height: 120%;
    color: var(--text-primary);
  }
  &__list {
    padding: 0;
  }
  &__exact {
    span {
      color: var(--primary);
    }
  }
  li {
    color: var(--text-secondary);
    font-size: 14px;
  }
}
</style>

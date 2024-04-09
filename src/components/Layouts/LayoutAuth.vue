<template>
  <div class="auth d-flex align-items-center justify-center">
    <div class="auth__card rounded-3xl">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.auth {
  background-image: url('@/assets/images/auth-background-2.png');
  min-height: 100vh;
  padding: 40px 0;
  &__card {
    background: var(--background-primary);
    width: 546px;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0px 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  &__brand {
    font-weight: 600;
    font-size: 18px;
    color: var(--primary);
  }
}
</style>

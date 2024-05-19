

<template>
  <div id="headerouter" class="overlay-7 col-12 absolute top-0 min-height-12">
    <div
      class="absolute top-0 left-0 col-12 z2 flex items-center justify-between"
    >
      <a href="/" class="flex items-center white text-decoration-none m3">
        <img
          src="@/assets/images/logo.png"
          style="cursor: pointer; height: 50px; object-fit: contain"
        />
      </a>

      <div class="mx3 flex items-center">
        <div class="membernav">
          <ul dir="ltr">
            <li class="py1 px2 rounded">
              <a class="flex items-center border-none">
                <div class="flex-none flex item-center" />
                English
                <div class="arrow inline-block" />
              </a>
              <ul class="p0 pt1"></ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="relative white flex">
      <div
        class="min-height-12 col-12 relative white flex flex-column items-center justify-center overlay"
      >
        <div class="sitelogo-autologin p1">
          <img
            src="@/assets/images/logo.png"
            style="width: 120px"
            class="spinner"
          />
        </div>
        <div class="text-white" style="font-size: 22px">{{ message }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["message"],
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
</style>

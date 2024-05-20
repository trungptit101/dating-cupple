<template>
  <div class="avatar">
    <img :src="urlAvatar" :style="styles" />
  </div>
</template>

<script>
import { GenderUser } from "@/define/index";
export default {
  props: ["size", "url", "user"],
  data() {
    return {};
  },
  computed: {
    styles() {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`,
        "object-fit": "contain",
        "border-radius": "50%",
      };
    },
    urlAvatar() {
      if (this.url) return this.url;
      if (this.user.gender == GenderUser.Male)
        return require("@/assets/images/avatar-male.png");
      return require("@/assets/images/avatar-female.svg");
    },
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
</style>

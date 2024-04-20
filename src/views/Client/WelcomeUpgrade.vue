<template>
  <div
    id="svelte-questionnaire-header"
    style="position: sticky; top: 0; z-index: 2"
  >
    <div
      class="calc-header flex items-center justify-center lg:justify-start bg-upgrade"
    >
    </div>
  </div>
  <div id="svelte-questionnaire">
    <div class="relative" style="">
      <div
        class="w-full h-full absolute left-0 top-0 bg-black bg-opacity-60"
      ></div>
      <picture
        ><source
          media="(orientation: landscape)"
          srcset="
            /images/bg-upgrade.jpeg  640w,
            /images/bg-upgrade.jpeg 1920w,
            /images/bg-upgrade.jpeg 2560w
          "
        />
        <source
          media="(orientation: portrait)"
          srcset="
            /images/bg-upgrade.jpeg  480w,
            /images/bg-upgrade.jpeg  768w,
            /images/bg-upgrade.jpeg 1563w
          "
        />
        <img
          style="height: calc(100vh - 64px - 122px)"
          class="w-full object-cover"
          alt="Pleasure to meet you!"
        />
        <div
          class="absolute text-center intro-upgrade"
        >
          <div class="lg:px-0 px-6">
            <h2
              class="lg:text-7xl text-3xl lg:font-normal mb-6 text-[#D6AD60] font-semibold text-center"
            >
              Pleasure to meet you!
            </h2>
            <p class="lg:text-2xl text-sm font-normal text-white">
              Welcome to your Compatibility Questionnaire. Your responses to the
              next three sets of multiple-choice questions will shape the very
              best matches for you and will be seamlessly integrated into your
              profile. Please choose the most appropriate response(s) from the
              options provided.
            </p>
          </div>
        </div>
      </picture>
    </div>
    <footer class="calc-footer sticky bottom-0 w-full z-30 bg-white">
      <div aria-hidden="true">
        <div class="overflow-hidden bg-[#C5CBDC4D]">
          <div
            class="transition-all lg:h-3 h-1 bg-[#D6AD60]"
            style="width: 0%"
          ></div>
        </div>
      </div>
      <div class="flex justify-center items-center p-6">
        <div class="grid grid-cols-1">
          <button
            type="submit"
            class="flex justify-center items-center lg:py-4 py-3 px-8 text-[16px] lg:text-[20px] font-medium rounded-[4px] transition text-white bg-[#D6AD60] opacity-95"
          >
            Start
          </button>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
</script>
<style lang="scss">
</style>
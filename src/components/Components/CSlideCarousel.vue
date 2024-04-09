<template>
  <template v-if="props.images">
    <template v-if="props.images?.length > 0">
      <Carousel
        id="gallery"
        :items-to-show="1"
        :wrap-around="false"
        v-model="currentSlide"
      >
        <Slide v-for="(slide, i) in props.images" :key="i">
          <div class="carousel__item">
            <e-img
              :src="slide"
              class="mr-8 ml-8 rounded-xs"
              style="max-height: 300px; object-fit: contain"
            />
          </div>
        </Slide>
      </Carousel>

      <div style="padding: 0 30px" v-if="props.images?.length > 1">
        <Carousel
          id="thumbnails"
          :items-to-show="3"
          :wrap-around="true"
          v-model="currentSlide"
          ref="carousel"
        >
          <Slide v-for="(slide, i) in props.images" :key="i">
            <div
              class="carousel__item carousel__item__height"
              @click="slideTo(i)"
            >
              <e-img
                style="object-fit: contain"
                :src="slide"
                class="w-full carousel__item__img rounded-xs"
              />
            </div>
          </Slide>
          <template #addons>
            <navigation />
          </template>
        </Carousel>
      </div>
    </template>
    <template v-else>
      <e-img
        class="box-images__image form__ecommerce__logo"
        src="/src/assets/svgs/img-default.svg"
        alt=""
      />
    </template>
  </template>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import EImg from '@/components/Elements/EImg.vue'
type PropType = {
  images: Array<string | null>
}
const props = withDefaults(defineProps<PropType>(), {
  images: () => [],
})

/*<=========slide==========>*/

const currentSlide = ref<number>()
const slideTo = (val: number) => {
  currentSlide.value = val
}

/*<=========end slide==========>*/
</script>

<style scoped lang="scss">
.carousel {
  &__item {
    width: 100%;
    max-height: 300px;
    color: white;
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    &__height {
      img {
        max-height: 120px !important;
        //width: fit-content !important;
      }
    }
    &__img {
      object-fit: cover;
      cursor: pointer;
    }
  }

  &__slide {
    padding: 10px;
  }
}
</style>

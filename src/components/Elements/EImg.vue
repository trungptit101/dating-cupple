<template>
  <div class="box-images d-flex" v-if="props.showRemove">
    <img
      class="box-images__image"
      :src="props.src"
      :alt="props.alt"
      :style="style"
      @click="onClick"
    />
    <img
      src="@/assets/svgs/remove.svg"
      class="box-images__icon"
      @click="onRemove"
    />
  </div>
  <img
    v-else
    class="box-images__image"
    :src="props.src"
    :alt="props.alt"
    :style="style"
    @click="onClick"
    @error="replaceByDefault"
  />
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { EObjectFit } from '@/constants'
import ImgDefault from '@/assets/svgs/img-default.svg'

type PropType = {
  src: string
  alt?: string
  size?: string
  radius?: string
  index?: number | string | undefined
  showRemove?: boolean
  objectFit?: EObjectFit
  border?: boolean
}
const props = withDefaults(defineProps<PropType>(), {
  src: '',
  alt: '',
  size: '',
  radius: '',
  index: undefined,
  showRemove: false,
  objectFit: EObjectFit.cover,
  border: false,
})

const style = computed(() => ({
  width: props.size || '100%',
  height: props.size || 'auto',
  borderRadius: props.radius,
  objectFit: props.objectFit,
  border: props.border ? '1px solid var(--line-primary)' : 'none',
}))

const emit = defineEmits<{
  (e: 'click', value: number): void
  (e: 'remove', value: string | number | null): void
}>()

const onClick = (e: number) => {
  emit('click', e)
}
const onRemove = () => {
  emit('remove', props.index || null)
}
const replaceByDefault = (event: Event) => {
  if (!event) return
  const target = event.target as HTMLInputElement
  target.src = ImgDefault
}
</script>

<style scoped lang="scss">
.box-images {
  position: relative;
  &__icon {
    position: absolute;
    top: -10px;
    right: -10px;
    cursor: pointer;
  }
}
</style>

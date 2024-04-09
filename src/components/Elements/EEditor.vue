<template>
  <div class="quill">
    <quill-editor
      :options="options"
      :toolbar="[
        'bold',
        'italic',
        'underline',
        'blockquote',
        { header: [1, 2, 3, 4, 5, 6, false] },
        { color: [] },
        { background: [] },
        { font: [] },
        { align: [] },
        'image',
      ]"
      :content="props.modelValue"
      :content-type="QuillContentType"
      @update:content="onChange"
    />
  </div>
</template>

<script lang="ts" setup>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import { QuillContentType, QuillEmptyContent, QuillTheme } from '@/constants'

type PropType = {
  modelValue: string
  placeholder?: string
  readOnly?: boolean
}
const props = withDefaults(defineProps<PropType>(), {
  modelValue: '',
  placeholder: '',
  readOnly: false,
})
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
const options = {
  placeholder: props.placeholder,
  readOnly: props.readOnly,
  theme: QuillTheme,
}
const onChange = (e: string) => {
  emit('update:modelValue', e === QuillEmptyContent ? '' : e)
}
</script>

<style scoped lang="scss">
.quill {
  width: 100%;
  border-radius: 8px;
  border: 1px solid var(--line-primary);
  overflow: hidden;
  :deep(.ql-snow) {
    border: none;
  }
  :deep(.ql-toolbar) {
    border-bottom: 1px solid var(--line-primary);
    .ql-active {
      background-color: var(--primary-8);
      color: var(--primary);
      .ql-stroke {
        stroke: var(--primary);
      }
      .ql-fill {
        fill: var(--primary);
      }
    }
  }
  :deep(.ql-editor) {
    min-height: 150px;
  }
}
</style>

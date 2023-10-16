<script setup lang='ts'>
import {ref} from "vue";
import {useEmit} from '../../composables/useEmit'

const {emitCustom} = useEmit()
const component = ref(null)

interface Props {
  key: string
  active?: boolean
  count?: string | number
  showCount?: boolean
  label: string
  facet?: string
}

const props = withDefaults(defineProps<Props>(), {
  active: false,
  count: 0,
  showCount: false,
})

// Workaround since VUE "key" attribute is a reserved keyword.
const facetKey = (props.label as string).toLowerCase()

const submit = () => {
  emitCustom("facet-change", component, {
    key: facetKey,
    active: !props.active,
    reset: false,
  })
}
</script>

<template>
  <div ref="component" class="flex items-center mb-4" @click="submit">
    <input :checked="props.active" id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
    <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ props.label }} <span v-if="props.showCount">{{ count }}</span></label>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
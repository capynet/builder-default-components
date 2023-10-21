<script setup lang='ts'>
import {ref, watch} from "vue";
import {useEmit} from '../../composables/useEmit'

const {emitCustom} = useEmit()
const component = ref(null)

interface Props {
  initialValue?: string
  dataPlaceholder?: string
}

const props = withDefaults(defineProps<Props>(), {
  initialValue: '',
  dataPlaceholder: 'Search',
})


const currentValue = ref(props.initialValue)

watch(currentValue, () => {
  emitCustom('input-change', component, {value: currentValue.value})
})
</script>

<template>
  <div ref="component" class="relative mb-4">
    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
      </svg>
    </div>
    <input
      v-model="currentValue"
      type="search"
      id="default-search"
      class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      :placeholder="props.dataPlaceholder"
    >
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
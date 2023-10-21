<script setup lang='ts'>
import {ref} from "vue";
import {useEmit} from '../../../composables/useEmit'

const {emitCustom} = useEmit()
const component = ref(null)

const props = defineProps<{
  conf: object
}>()


const submit = (e: Event, key: string, active: boolean) => {
  const el = e.currentTarget as HTMLDivElement
  console.log(el);
  emitCustom("facet-change", el, {
    key: key,
    active: !active,
    reset: false,
  })
}
</script>

<template>

<ul>
  <li>
    <div class="flex items-center mb-4" @click="submit($event, conf.key, conf.active)">
      <input :checked="conf.active" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
      <label  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ conf.label }} <span v-if="conf.showCount">{{ conf.count }}</span></label>
    </div>
  </li>

  <li v-if="conf.results.length">
    <ul class="pl-5 mt-2">
      <li v-for="result in conf.results">
        <div class="flex items-center mb-4" @click="submit($event, result.key, result.active)">
          <input :checked="result.active"  type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
          <label class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ result.label }} <span v-if="result.showCount">{{ result.count }}</span></label>
        </div>
      </li>
    </ul>
  </li>
</ul>


</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
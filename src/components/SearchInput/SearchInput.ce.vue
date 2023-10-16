<script setup lang='ts'>
// import closeImg from "./assets/close.svg";
// import searchImg from "./assets/search.svg";
import {onMounted, ref} from "vue";
import {useEmit} from '../../composables/useEmit'

const {emitCustom} = useEmit()
const component = ref(null)

interface Props {
  initialValue?: string
  placeholder?: string
}

const props = withDefaults(defineProps<Props>(), {
  initialValue: '',
  placeholder: '',
})

const currentValue = ref(props.initialValue)

const send = (e: Event) => {
  emitCustom('input-change', component, currentValue.value)
};


const onInputChange = (e: Event) => {
  if (currentValue.value === "") {
    onReset();
  }

  emitCustom('input-change', component, {value: currentValue.value})
};

const onReset = () => {
  emitCustom("input-reset", component, {})
};

const onSubmit = () => {
  emitCustom("input-submit", component, {})
};
const onKeyUp = (e: KeyboardEvent) => {
  if (e.key === "Enter") {
    onSubmit();
  }
};

</script>

<template>
  <div ref="component" class="relative mb-4">
    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
      </svg>
    </div>
    <input v-model="currentValue" @input="onInputChange" @keyup="onKeyUp" type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :placeholder="props.placeholder" required>
    <button @click="onReset" v-if="currentValue" type="button" class="text-white absolute right-[90px] bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">X</button>
    <button @click="onSubmit" type="button" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
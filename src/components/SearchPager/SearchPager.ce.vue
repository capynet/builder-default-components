<script setup lang='ts'>
import {ref} from "vue";
import {useEmit} from '../../composables/useEmit'

const {emitCustom} = useEmit()
const component = ref(null)

interface Props {
  currentPage: number
  pages?: number
}

const props = withDefaults(defineProps<Props>(), {
  pages: 1,
})

const _pages = ref(Number(props.pages))
const _currentPage = ref(Number(props.currentPage))

const onPageClick = (page: number) => {
  emitCustom("page-change", component, page)
};

const onPrev = () => {
  onPageClick(_currentPage.value - 1);
};

const onNext = () => {
  onPageClick(_currentPage.value + 1);
};

</script>

<template>
  <div ref="component" class="flex flex-col space-y-4 items-center justify-center">
    <nav>
      <ul class="flex items-center -space-x-px h-10 text-base">
        <li>

          <button
            @click="onPrev"
            :disabled="_currentPage === 1"
            class="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200"
          >
            <svg class="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
            </svg>
          </button>

        </li>

        <li v-for="index in _pages">
          <button
            @click="onPageClick(index)"
            v-if="index === _currentPage"
            class="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
          >{{ index }}
          </button>

          <button
            @click="onPageClick(index)"
            v-if="index !== _currentPage"
            class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            {{ index }}
          </button>
        </li>

        <li>
          <button
            @click="onNext"
            :disabled="_currentPage === _pages"
            class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200"
          >
            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
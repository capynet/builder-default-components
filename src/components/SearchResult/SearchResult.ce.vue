<script setup lang='ts'>
import dayjs from 'dayjs';

interface Props {
  category?: string
  date?: string
  title: string
  text: string
  url: string
  preview_image: string
  mode: string
}

const props = withDefaults(defineProps<Props>(), {})

let formattedDate: boolean | string = false

if (props.date) {
  formattedDate = dayjs.unix(props.date).format('DD/MM/YYYY HH:mm')
}

const modeList = props.mode === 'list'
</script>

<template>

  <a v-if="modeList" :href="props.url" target="_blank" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" :src="props.preview_image" alt="">
    <div class="flex flex-col justify-between p-4 leading-normal">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ props.title }}</h5>
      <span v-if="props.category" class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{{ props.category }}</span>
      <span v-if="props.date" class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
        {{ formattedDate }}
      </span>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" v-html="props.text"></p>
    </div>
  </a>

  <div v-if="!modeList" class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4">
    <a :href="props.url" target="_blank">
      <img class="rounded-t-lg" :src="props.preview_image" alt=""/>
    </a>
    <div class="p-5">
      <a :href="props.url" target="_blank">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ props.title }}</h5>
      </a>

      <span v-if="props.category" class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{{ props.category }}</span>
      <span v-if="props.date" class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
        {{ formattedDate }}
      </span>

      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" v-html="props.text"></p>
    </div>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
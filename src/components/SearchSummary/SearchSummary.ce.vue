<script setup lang='ts'>
interface Props {
  timeTaken?: number
  numberOfResults?: number
}

const props = withDefaults(defineProps<Props>(), {
  timeTaken: 0,
  numberOfResults: 0,
})

const formattedTimeTaken = (Number(props.timeTaken) / 1000).toPrecision(8)
</script>

<template>
  <p class="mb-4 text-gray-500 dark:text-gray-400">
    Found <strong>{{ numberOfResults }}</strong> results In <strong>{{ formattedTimeTaken }}s</strong>
  </p>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
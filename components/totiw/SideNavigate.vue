<template>
  <div class="bg-secondary/80 rounded-full w-48 h-48 flex flex-col items-center justify-center">
    <Icon name="i-ic:round-arrow-outward" class="text-white w-10 h-10" />
    <div class="text-center px-4">
      <a :href="`${to ? to : '/'}`" target="_blank" class="text-white underline text-xl">
        {{ title }}
      </a>
      <p class="text-xs text-primary">{{ subTitle }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subTitle: string
  to?: string
}>()
</script>

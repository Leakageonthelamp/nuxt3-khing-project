<template>
  <div class="bg-totiw-blue rounded-full size-48 flex flex-col items-center justify-center">
    <Icon name="i-ic:round-arrow-outward" class="text-light size-10" />
    <div class="text-center px-11">
      <a :to="to" target="_blank" class="text-light cursor-pointer underline">
        {{ title }}
      </a>
      <p class="text-xs text-light">{{ subTitle }}</p>
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

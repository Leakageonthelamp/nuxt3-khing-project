<template>
  <div class="bg-hra-secondary rounded-full size-48 flex flex-col items-center justify-center">
    <Icon name="i-ic:round-arrow-outward" class="text-light size-10" />
    <div class="text-center px-11">
      <p class="text-light cursor-pointer underline">
        {{ title }}
      </p>
      <p class="text-xs text-light">{{ subTitle }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subTitle: string
  to: string
}>()
</script>

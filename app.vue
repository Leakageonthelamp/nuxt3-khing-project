<template>
  <div>
    <SpeedInsights />
    <NuxtLoadingIndicator color="#C397F9" />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/nuxt'
</script>

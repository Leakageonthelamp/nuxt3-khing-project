<template>
  <div>
    <NuxtLoadingIndicator color="#C397F9" :height="4" />
    <NuxtPage />

    <SpeedInsights />
    <Analytics />
  </div>
</template>

<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/nuxt'
import { Analytics } from '@vercel/analytics/nuxt'
</script>

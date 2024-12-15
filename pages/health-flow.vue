<template>
  <NuxtLayout name="main"> Health Flow </NuxtLayout>
</template>

<script setup lang="ts">
import { useApp } from '~/hooks/useApp'

const app = useApp()

app.updatePageMeta({ title: 'health-flow' })
app.updateDocMeta({
  title: 'HealthFlow',
  description: 'Streamlining Your Health Care Journey',
})
</script>

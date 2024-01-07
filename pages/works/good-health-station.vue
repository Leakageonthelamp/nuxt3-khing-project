<template>
  <NuxtLayout name="main"> good health </NuxtLayout>
</template>

<script setup lang="ts">
import { useApp } from '~/hooks/useApp'

const app = useApp()

app.updatePageMeta({ title: 'good-health' })
app.updateDocMeta({
  title: 'Good Health Station',
  description: 'Health check service station',
})
</script>

<template>
  <NuxtLayout name="main">
    <CoBackyard />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useApp } from '~/hooks/useApp'

import CoBackyard from '~/features/CoBackyard/index.vue'

const app = useApp()

app.updatePageMeta({ title: 'co-backyard' })
app.updateDocMeta({
  title: 'สวนผักบ้านพฤกษา',
  description: 'Pruksa CO-backyard',
})
</script>

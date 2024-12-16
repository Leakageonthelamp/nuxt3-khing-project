<template>
  <NuxtLayout name="main">
    <HRA />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useApp } from '~/hooks/useApp'
import HRA from '~/features/HRA/index.vue'

const app = useApp()

app.updatePageMeta({ title: 'health-risk-assessment' })
app.updateDocMeta({
  title: 'Health Risk Assessment',
  description: 'A health screening application for Thai citizens',
})
</script>

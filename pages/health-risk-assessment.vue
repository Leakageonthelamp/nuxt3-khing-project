<template>
  <NuxtLayout name="main"> Health Risk Assessment </NuxtLayout>
</template>

<script setup lang="ts">
import { useApp } from '~/hooks/useApp'

const app = useApp()

app.updatePageMeta({ title: 'health-risk-assessment' })
app.updateDocMeta({
  title: 'Health Risk Assessment',
  description: 'A health screening application for Thai citizens',
})
</script>

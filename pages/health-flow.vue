<template>
  <div>
    <NuxtLayout name="main">
      <HealthFlow />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { useApp } from '~/hooks/useApp'
import HealthFlow from '~/features/HealthFlow/index.vue'
const app = useApp()

app.updatePageMeta({ title: 'health-flow' })
app.updateDocMeta({
  title: 'HealthFlow',
  description: 'Streamlining Your Health Care Journey',
})
</script>

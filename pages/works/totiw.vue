<template>
  <NuxtLayout name="main">
    <Totiw />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useApp } from '~/hooks/useApp'
import Totiw from '~/features/Totiw/index.vue'

const app = useApp()

app.updatePageMeta({ title: 'totiw' })
app.updateDocMeta({
  title: 'โต๊ะติว (Totiw)',
  description: 'Knowledge sharing for student',
})
</script>

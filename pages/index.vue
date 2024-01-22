<template>
  <NuxtLayout name="main">
    <HomePage />
  </NuxtLayout>
</template>

<script setup lang="tsx">
import HomePage from '~/features/Homepage/index.vue'
import { useApp } from '~/hooks/useApp'

const app = useApp()

app.updatePageMeta({ title: 'main' })
</script>

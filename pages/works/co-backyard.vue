<template>
  <NuxtLayout name="main"> co backyard </NuxtLayout>
</template>

<script setup lang="ts">
import { useApp } from '~/hooks/useApp'

const app = useApp()

app.updatePageMeta({ title: 'co-backyard' })
app.updateDocMeta({
  title: 'CO Backyard',
  description: 'Urban vegetable garden for condominium life',
})
</script>

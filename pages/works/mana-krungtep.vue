<template>
  <NuxtLayout name="main"> mana </NuxtLayout>
</template>

<script setup lang="ts">
import { useApp } from '~/hooks/useApp'

const app = useApp()

app.updatePageMeta({ title: 'mana' })
app.updateDocMeta({
  title: 'MANA Krungtep',
  description: 'เพื่อนคู่ใจ ทุกการเดินทางของคนกรุงเทพ',
})
</script>

<template>
  <NuxtLayout name="main"> cnvr </NuxtLayout>
</template>

<script setup lang="ts">
import { useApp } from '~/hooks/useApp'

const app = useApp()

app.updatePageMeta({ title: 'cnvr' })
app.updateDocMeta({
  title: 'พาเพื่อนหมา ไปทำหมัน',
  description: 'CNVR for stayed dog freind',
})
</script>

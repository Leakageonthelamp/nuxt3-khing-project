<template>
  <div>
    <NuxtLayout name="main">
      <Cnvr />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { useApp } from '~/hooks/useApp'
import Cnvr from '~/features/CNVR/index.vue'

const app = useApp()

app.updatePageMeta({ title: 'cnvr' })
app.updateDocMeta({
  title: 'พาเพื่อนหมา ไปทำหมัน',
  description: 'Taking Our Friends',
})
</script>

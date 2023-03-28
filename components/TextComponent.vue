<template>
  <div>{{ textDisplay }}</div>
  <component :is="test" />
</template>

<script setup lang="tsx">
import { ref, defineComponent } from '#imports'

const textDisplay = ref<string>('Hello World')
const test = defineComponent(() => () => <div>Test</div>)
</script>

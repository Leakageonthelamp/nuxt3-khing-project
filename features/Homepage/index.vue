<template>
  <div class="homepage">
    <div class="header">
      <div class="h-screen w-full bg-primary flex flex-col p-9">
        <div class="flex flex-col items-center justify-center flex-grow leading-none">
          <em class="ic ic-flower size-[132px] text-light animate-spin-slow mb-10" />
          <h1 class="text-[220px] text-light min-h-[220px]">{{ displayText }}</h1>
          <h1 class="text-[240px]">Kotchagorn</h1>
        </div>
        <div class="flex items-center justify-between">
          <h5 class="font-noto text-light text-4xl">UXUI Designer</h5>
          <h5 class="font-noto text-4xl">scroll to see more</h5>
        </div>
      </div>
    </div>

    <div class="homepage-body">
      <div class="body-section pb-20">
        <section class="px-10">
          <HomeIntroduction />
        </section>

        <section class="px-10">
          <HomeSelectedWork />
        </section>

        <section>
          <HomeProfile />
        </section>

        <section>
          <HomeContact />
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="tsx" setup>
const nameSet = ref(['ginger', 'ขิง'])
const displayText = ref(nameSet.value[0])

onMounted(() => {
  setInterval(() => {
    eraseText(100)
    setTimeout(() => {
      typeText(nameSet.value[1], 100)
      nameSet.value.push(nameSet.value.shift()!)
    }, 1000)
  }, 3000)
})

const typeText = (text: string, duration: number) => {
  const textLength = text.length
  for (let i = 0; i < textLength; i++) {
    setTimeout(() => {
      displayText.value += text[i]
    }, duration * i)
  }
}

const eraseText = (duration: number) => {
  const textLength = displayText.value.length
  for (let i = 0; i < textLength; i++) {
    setTimeout(() => {
      displayText.value = displayText.value.slice(0, -1)
    }, duration * i)
  }
}
</script>

<style lang="scss" scoped>
.homepage {
  * {
    @apply font-mogent;
  }
  .header {
    @apply relative;
  }
}
</style>

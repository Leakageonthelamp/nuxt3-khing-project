<template>
  <div class="homepage" id="home">
    <div class="header">
      <div class="h-screen w-full bg-primary flex flex-col p-9">
        <div class="flex flex-col items-center justify-center flex-grow leading-none">
          <em class="ic ic-flower size-[132px] text-light animate-spin-slow mb-10" />
          <h1 class="text-[180px] text-light min-h-[180px]">{{ displayText }}</h1>
          <h1 class="text-[180px]">Kotchagorn</h1>
        </div>
        <div class="flex items-center justify-between">
          <h5 class="font-poppins text-light text-2xl">UXUI Designer</h5>
          <h5 class="font-poppins text-2xl">scroll to see more</h5>
        </div>
      </div>
    </div>

    <div class="homepage-body">
      <div class="body-section pb-16">
        <section class="px-10">
          <HomeIntroduction />
        </section>

        <section class="px-10" id="works">
          <HomeSelectedWork />
        </section>

        <section id="about">
          <HomeProfile />
        </section>

        <section id="contact">
          <HomeContact />
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="tsx" setup>
import VueScrollTo from 'vue-scrollto'

const route = useRoute()

const nameSet = ref(['ginger', 'ขิง'])
const displayText = ref(nameSet.value[0])

const slug = computed(() => route.query.slug || 'home')

onMounted(() => {
  setInterval(() => {
    eraseText(100)
    setTimeout(() => {
      typeText(nameSet.value[1], 100)
      nameSet.value.push(nameSet.value.shift()!)
    }, 1000)
  }, 3000)

  setTimeout(() => {
    handleScrollTo(slug.value as string)
  }, 500)
})

const handleScrollTo = (slug: string) => {
  VueScrollTo.scrollTo(`#${slug}`, 500, { offset: 0 })
}

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

watch(slug, (newSlug) => {
  handleScrollTo(newSlug as string)
})
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

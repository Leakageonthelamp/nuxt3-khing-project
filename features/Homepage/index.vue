<template>
  <div class="homepage">
    <div class="header">
      <nuxt-img
        class="w-full h-screen object-cover"
        src="/images/homepage/header.png"
        alt="homepage-header"
        loading="lazy"
        placeholder
      />
      <div class="absolute inset-0 flex flex-col pt-40 2xl:pt-52 px-20 2xl:px-40 pb-14 2xl:pb-24">
        <h1 class="text-secondary text-[72px] 2xl:text-[96px] font-medium">Hey There !</h1>
        <h4 class="text-[72px] 2xl:text-[96px] font-thin leading-relaxed mt-10">
          i’m Kotchagorn Angchuan, <br />
          <span class="text-secondary">UX/UI Designer</span>
        </h4>
        <h2 class="text-[72px] 2xl:text-[96px] text-secondary font-thin">
          you can call me
          <span class="text-black font-normal">{{ displayText }}</span>
        </h2>
        <div class="absolute right-10 bottom-10 flex items-center space-x-4">
          <a
            v-scroll-to="'#works'"
            :class="[
              'w-40 aspect-square cursor-pointer text-xl font-thin',
              'bg-secondary/80 rounded-full text-white',
              'flex flex-col items-center justify-center',
            ]"
          >
            <p class="text-center">
              Next Stop: <br />
              My Work
            </p>
            <Icon name="i-ic:sharp-arrow-downward" class="w-8 h-8 mt-2" />
          </a>
          <div class="font-thin">
            low on time ? <br />
            <a href="#" class="text-secondary underline">read my resume</a>
          </div>
        </div>
      </div>
    </div>
    <div
      class="homepage-body bg-cover bg-no-repeat bg-center"
      style="background-image: url(/images/homepage/main-bg.png)"
    >
      <div class="body-section">
        <section class="py-40">
          <HomeProjectSelection id="works" />
        </section>
        <section class="py-60">
          <HomeAboutMe id="about" />
        </section>
        <HomeContactMe id="contact" />
      </div>
    </div>
  </div>
</template>

<script lang="tsx" setup>
const nameSet = ref(['ขิง', 'Khing', 'Ginger'])
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
  .header {
    @apply relative;
  }
}
</style>

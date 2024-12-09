<template>
  <div class="pt-10 flex flex-col items-center overflow-hidden">
    <h2 ref="scrollText" class="text-[120px] text-secondary whitespace-nowrap -ml-40">
      Let's contact-Let's contact-Let's contact-Let's contact-Let's contact-Let's contact-Let's
      contact-Let's contact-Let's contact-Let's contact-Let's contact-Let's contact-Let's
    </h2>

    <div class="w-full relative [&:hover_.outer-card]:opacity-0 [&:hover_.inter-text]:z-10">
      <div class="px-10 z-10 outer-card transition-opacity duration-500">
        <nuxt-img class="size-full" src="/images/homepage/envelope.png" alt="envelope" />
      </div>

      <div class="absolute inset-0 px-10 z-[-1]">
        <nuxt-img class="size-full" src="/images/homepage/envelope-open.png" alt="envelope-open" />
      </div>

      <div class="flex items-end justify-between z-20 px-20 pb-10">
        <div class="text-light text-xl tracking-wide">
          <p class="font-poppins font-extralight">097-2965927</p>
          <p class="font-poppins font-extralight">kotchagorn.angchuan@gmail.com</p>
        </div>
        <nuxt-link to="https://www.linkedin.com/in/ginger-kotchagorn/" target="_blank">
          <p class="text-light text-[64px] font-poppins leading-none">linkedin</p>
        </nuxt-link>
      </div>

      <div class="absolute z-[-1] top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 inter-text">
        <nuxt-link to="/resume" class="flex flex-col items-center -rotate-[2deg]">
          <h1 class="text-[8vw] 2xl:text-[128px] whitespace-nowrap">
            read my <span class="text-primary">resume</span>
          </h1>
          <em class="ic ic-arrow-up-right size-[4vw] 2xl:size-[56px]" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="tsx" setup>
const scrollText = ref<HTMLElement | null>(null)
let scrollPosition = 0

const handleScroll = () => {
  const currentScroll = window.scrollY
  const scrollDirection = currentScroll > scrollPosition ? 1 : -1

  if (scrollText.value) {
    const currentTranslate = parseFloat(
      scrollText.value.style.transform?.match(/-?\d+/)?.[0] || '0'
    )
    scrollText.value.style.transform = `translateX(${currentTranslate + scrollDirection * 4}px)`
  }

  scrollPosition = currentScroll
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

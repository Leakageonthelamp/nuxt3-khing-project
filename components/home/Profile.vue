<template>
  <div class="flex gap-20 justify-between py-20 px-10 overflow-hidden">
    <div id="profile" class="w-full flex gap-10">
      <div class="flex justify-center w-full max-w-[368px]">
        <div
          id="profile1"
          class="flex items-center w-full max-w-[368px] min-w-[240px] relative transition-all duration-500 opacity-0 animate__animated"
        >
          <nuxt-img
            :class="['w-full object-contain transition-opacity duration-500', 'hover:opacity-0']"
            src="/images/homepage/profile1.png"
            alt="profile1"
          />
          <nuxt-img
            :class="['w-full object-contain absolute duration-500 z-[-1]']"
            src="/images/homepage/profile1-alt.png"
            alt="profile1-alt"
          />
        </div>
      </div>
      <div class="flex flex-col gap-10 justify-center w-full min-w-[260px]">
        <div
          id="profile2"
          class="max-w-[368px] relative transition-all duration-500 opacity-0 animate__animated"
        >
          <nuxt-img
            :class="['w-full object-contain transition-opacity duration-500', 'hover:opacity-0']"
            src="/images/homepage/profile2.png"
            alt="profile2"
          />
          <nuxt-img
            :class="['w-full object-contain absolute inset-0 duration-500 z-[-1]']"
            src="/images/homepage/profile2-alt.png"
            alt="profile2-alt"
          />
        </div>
        <div
          id="profile3"
          class="max-w-[518px] relative transition-all duration-500 opacity-0 animate__animated"
        >
          <nuxt-img
            :class="['w-full object-contain transition-opacity duration-500', 'hover:opacity-0']"
            src="/images/homepage/profile3.png"
            alt="profile3"
          />
          <nuxt-img
            :class="['w-full object-contain absolute inset-0 duration-500 z-[-1]']"
            src="/images/homepage/profile3-alt.png"
            alt="profile3-alt"
          />
        </div>
      </div>
    </div>

    <div class="w-[600px] mt-4">
      <h2 class="text-[128px] leading-[0.72]">
        Kotchagorn
        <div class="flex items-center justify-between">
          <span><em class="ic ic-flower size-[70px]" /></span>
          <h2 class="mr-[7.6px]">angchuan</h2>
        </div>
      </h2>
      <div class="text-xl text-secondary font-light font-poppins text-right mt-10">
        A designer who loves reading, doodling, collecting stickers — and yes, playing games. These
        passions inspire me to explore new ideas, build meaningful connections with people, and
        craft UX designs that bring joy through the thoughtful little details I put into every
        project.

        <div class="size-[400px] relative mt-20">
          <em
            ref="rotateFlower"
            class="ic ic-flower size-[400px] text-primary absolute -right-[25rem]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="tsx" setup>
const isHoverProfile1 = ref(false)
const rotateFlower = ref<HTMLElement | null>(null)
let lastScrollY = ref(0)

onMounted(() => {
  // Initial rotation
  if (rotateFlower.value) {
    rotateFlower.value.style.transform = 'rotate(0deg)'
  }

  // Add scroll event listener
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  // Clean up event listener
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  if (!rotateFlower.value) return

  const currentScrollY = window.scrollY
  const scrollDiff = currentScrollY - lastScrollY.value

  // Get current rotation or default to 0
  const currentRotation =
    parseFloat(rotateFlower.value.style.transform.replace(/[^0-9.-]/g, '')) || 0
  // Add rotation based on scroll direction (adjust multiplier for speed)
  const newRotation = currentRotation + scrollDiff * 0.1

  rotateFlower.value.style.transform = `rotate(${newRotation}deg)`
  lastScrollY.value = currentScrollY
}

const activeIntersection = () => {
  const profile1 = document.querySelector('#profile1')
  const profile2 = document.querySelector('#profile2')
  const profile3 = document.querySelector('#profile3')

  if (profile1) {
    profile1.classList.add('opacity-100')
    profile1.classList.add('animate__fadeInUp')
  }

  if (profile2) {
    profile2.classList.add('opacity-100')
    profile2.classList.add('animate__fadeInUp')
  }

  if (profile3) {
    profile3.classList.add('opacity-100')
    profile3.classList.add('animate__fadeInUp')
  }
}

defineExpose({
  activeIntersection,
})
</script>

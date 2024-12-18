<template>
  <div class="homepage scroll-container" id="home">
    <div class="header">
      <div class="h-screen w-full bg-primary flex flex-col p-9">
        <div class="flex flex-col items-center justify-center flex-grow leading-none h-screen">
          <div class="animate__animated animate__fadeInUp">
            <em class="ic ic-flower size-[132px] text-light animate-spin-slow mb-10" />
          </div>

          <div class="animate__animated animate__fadeInUp animate__delay-0.5s">
            <h1 class="text-[180px] text-light min-h-[180px]">
              {{ displayText }}
            </h1>
          </div>

          <div class="animate__animated animate__fadeInUp animate__delay-1s">
            <h1 class="text-[180px]">Kotchagorn</h1>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <h5 class="font-poppins text-light text-2xl">UXUI Designer</h5>
          <h5 class="font-poppins text-2xl">scroll to see more</h5>
        </div>
      </div>
    </div>

    <div class="homepage-body">
      <section id="bodySection" class="body-section pb-16">
        <section class="px-10" id="introduction">
          <HomeIntroduction />
        </section>

        <section class="transition-all duration-1000" id="works">
          <transition name="slide-up" mode="out-in">
            <HomeSelectedWork v-if="isActiveWorks" class="px-10" :is-active-works="isActiveWorks" />
            <div v-else class="w-full h-[200vh] bg-light" />
          </transition>
        </section>

        <section id="about">
          <HomeProfile ref="profileRef" />
        </section>

        <section id="contact">
          <HomeContact />
        </section>
      </section>
    </div>
  </div>
</template>

<script lang="tsx" setup>
import VueScrollTo from 'vue-scrollto'

import HomeProfile from '@/components/home/Profile.vue'

const route = useRoute()

const nameSet = ref(['ginger', 'ขิง'])
const displayText = ref(nameSet.value[0])
const isActiveWorks = ref(false)

const showSection1 = ref(false)
const showSection2 = ref(false)
const showSection3 = ref(false)
const showSection4 = ref(false)

const currentIntersection = ref<string>('')
const profileRef = ref<InstanceType<typeof HomeProfile> | null>(null)

const slug = computed(() => route.query.slug || 'home')

onMounted(() => {
  activeIntersection()

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

  showSection1.value = true
  setTimeout(() => {
    showSection2.value = true
  }, 300)
  setTimeout(() => {
    showSection3.value = true
  }, 600)
  setTimeout(() => {
    showSection4.value = true
  }, 900)
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

const activeIntersection = () => {
  let lastScrollY = window.scrollY

  const callback = (entries: IntersectionObserverEntry[]) => {
    const scrollingDown = window.scrollY > lastScrollY
    lastScrollY = window.scrollY

    entries.forEach((entry: IntersectionObserverEntry) => {
      const { target, boundingClientRect } = entry
      const { id } = target as HTMLElement

      const viewportHeight = window.innerHeight
      const viewportMiddle = viewportHeight / 2

      const elementPosition = scrollingDown ? boundingClientRect.top : boundingClientRect.bottom

      const threshold = 100
      if (Math.abs(elementPosition - viewportMiddle) < threshold) {
        currentIntersection.value = id

        if (id === 'works') {
          isActiveWorks.value = true
          document.querySelector('#works')?.classList.add('bg-dark-night')
        }

        if (id === 'about') {
          profileRef.value?.activeIntersection()
        }
      }
    })
  }

  const observer = new IntersectionObserver(callback, {
    rootMargin: '-45% 0px -45% 0px',
    threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
  })

  const sections = document.querySelectorAll('#bodySection > section')
  sections.forEach((section) => {
    observer.observe(section)
  })
}

watch(slug, (newSlug) => {
  handleScrollTo(newSlug as string)
})
</script>

<style lang="scss" scoped>
.homepage {
  * {
    @apply font-mogent scroll-smooth;
  }
  .header {
    @apply relative;
  }

  .scroll-container {
    @apply overflow-y-auto;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch; // For iOS smooth scrolling
  }
}
</style>

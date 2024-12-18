<template>
  <div class="health-flow-page">
    <div class="header">
      <nuxt-img
        class="w-full object-cover"
        src="/images/works/healthflow/header.png"
        alt="health-flow-header"
        loading="lazy"
        placeholder="/images/homepage/work1-alt.png"
      />
    </div>

    <div class="homepage-body px-20 py-16">
      <div class="body-section grid grid-cols-12">
        <div class="col-start-1 col-end-3 hidden lg:block relative">
          <div class="w-full sticky top-24 inline-grid gap-2">
            <a
              v-for="(list, index) in navigationList"
              :key="index"
              class="hover:underline hover:text-bold transition-all duration-300 cursor-pointer whitespace-nowrap"
              :class="list.isActive ? ' font-bold text-2xl underline' : 'font-light'"
              @click="scrollToSection(list.id)"
            >
              {{ list.label }}
            </a>
          </div>
        </div>
        <div id="projectObserver" class="col-start-1 lg:col-start-4 col-end-13 flex flex-col">
          <section id="overview">
            <ProjectOverview />
          </section>

          <div class="divider my-16" />

          <section id="research">
            <Interview />
          </section>

          <div class="divider my-16" />

          <section id="define">
            <Define />
          </section>

          <div class="divider my-16" />

          <section id="solution">
            <Solution />
          </section>

          <div class="divider my-16" />

          <section id="wireframe">
            <Wireframe />
          </section>

          <div class="divider my-16" />

          <section id="final">
            <Final />
          </section>

          <div class="divider my-16" />

          <section id="projectOutcome">
            <Outcome />
          </section>
        </div>
      </div>

      <div class="w-full flex items-center justify-center mt-20 mb-10">
        <p class="text-sm">
          If you like this project,
          <nuxt-link to="/?slug=contact">
            <span class="text-healthflow-secondary text-xl underline cursor-pointer"
              >contact me!</span
            >
          </nuxt-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="tsx" setup>
import VueScrollTo from 'vue-scrollto'

import ProjectOverview from '~/components/health-flow/ProjectOverview.vue'
import Interview from '~/components/health-flow/Interview.vue'
import Define from '~/components/health-flow/Define.vue'
import Solution from '~/components/health-flow/Solution.vue'
import Wireframe from '~/components/health-flow/Wireframe.vue'
import Final from '~/components/health-flow/Final.vue'
import Outcome from '~/components/health-flow/Outcome.vue'

const navigationList = ref([
  {
    id: 'overview',
    label: 'Overview',
    isActive: false,
  },
  {
    id: 'research',
    label: 'Research',
    isActive: false,
  },
  {
    id: 'define',
    label: 'Define',
    isActive: false,
  },
  {
    id: 'solution',
    label: 'Solution',
    isActive: false,
  },
  {
    id: 'wireframe',
    label: 'Wireframe',
    isActive: false,
  },
  {
    id: 'final',
    label: 'Final product',
    isActive: false,
  },
  {
    id: 'projectOutcome',
    label: 'Project outcome',
    isActive: false,
  },
])

onMounted(() => {
  activeIntersection()
})

const currentIntersection = ref<string>('')

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

        navigationList.value.forEach((item) => {
          item.isActive = item.id === id
        })
      }
    })
  }

  const observer = new IntersectionObserver(callback, {
    rootMargin: '-45% 0px -45% 0px',
    threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
  })

  const sections = document.querySelectorAll('#projectObserver > section')
  sections.forEach((section) => {
    observer.observe(section)
  })
}

const scrollToSection = (id: string) => {
  VueScrollTo.scrollTo(`#${id}`, 500, { offset: -100 })

  setTimeout(() => {
    navigationList.value.forEach((item) => {
      item.isActive = item.id === id
    })
  }, 500)
}
</script>

<style lang="scss" scoped>
.health-flow-page {
  @apply bg-[#FFFEF8];
  .header {
    @apply relative;
  }
}
</style>

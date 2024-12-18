<template>
  <div class="co-backyard-page">
    <div class="header">
      <nuxt-img
        class="w-full object-cover"
        src="/images/works/co-backyard/header.png"
        alt="co-backyard-header"
        loading="lazy"
        placeholder=""
      />
    </div>

    <div class="homepage-body px-20 pt-14 pb-16">
      <div class="body-section grid grid-cols-12">
        <div class="col-start-1 col-end-3 hidden lg:block relative">
          <div class="w-full sticky top-24 inline-grid gap-2">
            <a
              v-for="(list, index) in navigationList"
              :key="index"
              v-scroll-to="`#${list.id}`"
              class="hover:underline hover:text-bold transition-all duration-300 cursor-pointer whitespace-nowrap"
              :class="list.isActive ? 'font-bold text-2xl underline' : 'font-light'"
            >
              {{ list.label }}
            </a>
          </div>
        </div>
        <div id="projectObserver" class="col-start-1 lg:col-start-4 col-end-13 flex flex-col">
          <section id="overview">
            <CoBackyardOverview />
          </section>

          <div class="divider my-16" />

          <section id="identify">
            <CoBackyardIdentity />
          </section>

          <div class="divider my-16" />

          <section id="research">
            <CoBackyardResearch />
          </section>

          <div class="divider my-16" />

          <section id="ideate">
            <CoBackyardIdeate />
          </section>

          <div class="divider my-16" />

          <section id="visualDesign">
            <CoBackyardDesign />
          </section>

          <div class="divider my-16" />

          <section id="wireframe">
            <CoBackyardWireframe />
          </section>

          <div class="divider my-16" />

          <section id="final">
            <CoBackyardFinal />
          </section>

          <div class="divider my-16" />

          <section id="outcome">
            <CoBackyardOutcome />
          </section>
        </div>
      </div>

      <div class="w-full flex items-center justify-center mt-20 mb-10">
        <p class="text-sm">
          If you like this project,
          <nuxt-link to="/?slug=contact">
            <span class="text-cby text-xl underline cursor-pointer">contact me!</span>
          </nuxt-link>
        </p>
      </div>
    </div>

    <div
      v-for="(list, index) in sideNavigateList"
      :key="`${list.id}-${index}`"
      class="fixed bottom-16 left-24"
    >
      <transition name="slide-down">
        <nuxt-link v-if="list.isActive" :to="list.to" target="_blank">
          <SideNavigate :title="list.title" :sub-title="list.subtitle" :to="list.to" />
        </nuxt-link>
      </transition>
    </div>
  </div>
</template>

<script lang="tsx" setup>
import CoBackyardOverview from '~/components/co-backyard/Overview.vue'
import CoBackyardIdentity from '~/components/co-backyard/Identity.vue'
import CoBackyardResearch from '~/components/co-backyard/Research.vue'
import CoBackyardIdeate from '~/components/co-backyard/Ideate.vue'
import CoBackyardDesign from '~/components/co-backyard/Design.vue'
import CoBackyardWireframe from '~/components/co-backyard/Wireframe.vue'
import CoBackyardFinal from '~/components/co-backyard/Final.vue'
import CoBackyardOutcome from '~/components/co-backyard/Outcome.vue'

import SideNavigate from '~/components/co-backyard/SideNavigate.vue'

const navigationList = ref([
  {
    id: 'overview',
    label: 'Overview',
    isActive: false,
  },
  {
    id: 'identify',
    label: 'Identify',
    isActive: false,
  },
  {
    id: 'research',
    label: 'Research',
    isActive: false,
  },
  {
    id: 'ideate',
    label: 'Ideate',
    isActive: false,
  },
  {
    id: 'visualDesign',
    label: 'Visual Design',
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
    id: 'outcome',
    label: 'Project Outcome',
    isActive: false,
  },
])

const sideNavigateList = ref([
  {
    id: 'flowchart',
    title: 'Flowchart & Wireframe',
    subtitle: 'figjam',
    to: '/file/co-backyard-flowchart.pdf',
    isActive: false,
  },
  {
    id: 'prototype',
    title: 'Application Prototype',
    subtitle: 'Adobe XD',
    to: 'https://xd.adobe.com/view/2490aefd-234c-4ae9-4c4b-9ce0d674b4f4-52a1/?fullscreen',
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

      if (currentIntersection.value !== 'ideate') {
        sideNavigateList.value.forEach((item) => {
          item.isActive = false
        })
      }

      if (currentIntersection.value === 'wireframe') {
        sideNavigateList.value.forEach((item) => {
          item.isActive = item.id === 'flowchart'
        })
      }

      if (currentIntersection.value === 'final') {
        sideNavigateList.value.forEach((item) => {
          item.isActive = item.id === 'prototype'
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
</script>

<style lang="scss" scoped>
.co-backyard-page {
  @apply bg-[#F7F4ED];
  .header {
    @apply relative;
  }
}
</style>

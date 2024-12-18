<template>
  <div class="hra-page">
    <div class="header">
      <nuxt-img
        class="w-full object-cover"
        src="/images/works/hra/header.png"
        alt="hra-header"
        format="webp"
        :preload="true"
        :placeholder="['100%', '100%', 50, 5]"
      />
    </div>

    <div class="homepage-body px-20 py-16">
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
            <Overview />
          </section>

          <div class="divider my-16" />

          <section id="research">
            <Research />
          </section>

          <div class="divider my-16" />

          <section id="define">
            <Define />
          </section>

          <div class="divider my-16" />

          <section id="ideate">
            <Ideate @active-section="handleIdeateActiveSection" />
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

          <section id="outcome">
            <Outcome />
          </section>
        </div>
      </div>

      <div class="w-full flex items-center justify-center mt-20 mb-10">
        <p class="text-sm">
          If you like this project,
          <nuxt-link to="/?slug=contact">
            <span class="text-hra-secondary text-xl underline cursor-pointer">contact me!</span>
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
import Overview from '~/components/hra/Overview.vue'
import Research from '~/components/hra/Research.vue'
import Define from '~/components/hra/Define.vue'
import Ideate from '~/components/hra/Ideate.vue'
import Wireframe from '~/components/hra/Wireframe.vue'
import Final from '~/components/hra/Final.vue'
import Outcome from '~/components/hra/Outcome.vue'

import SideNavigate from '~/components/hra/SideNavigate.vue'

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
    id: 'ideate',
    label: 'Ideate',
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
    label: 'Project outcome',
    isActive: false,
  },
])

const sideNavigateList = ref([
  {
    id: 'flowchart',
    title: 'Flowchart',
    subtitle: 'figjam',
    to: 'https://www.figma.com/file/9iTdNcXe9CjSBlqdkjFRnO/Untitled?node-id=0:1',
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

const handleIdeateActiveSection = (id: string) => {
  sideNavigateList.value.forEach((item) => {
    if (item.id === id) {
      item.isActive = true
    } else {
      item.isActive = false
    }
  })
}
</script>

<style lang="scss" scoped>
.hra-page {
  @apply bg-[#F2F5F3];
  .header {
    @apply relative;
  }
}
</style>

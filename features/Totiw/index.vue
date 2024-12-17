<template>
  <div class="totiw-page">
    <div class="header">
      <nuxt-img
        class="w-full object-cover"
        src="/images/works/totiw/header.png"
        alt="totiw-header"
        loading="lazy"
        placeholder=""
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
              :class="list.isActive ? 'font-bold text-2xl underline' : 'font-light'"
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

          <section id="prototypeAndTest">
            <Wireframe @active-section="handleIdeateActiveSection" />
          </section>

          <div class="divider my-16" />

          <section id="visualDesign">
            <Visual />
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
            <span class="text-totiw-blue text-xl underline cursor-pointer">contact me!</span>
          </nuxt-link>
        </p>
      </div>
    </div>

    <div
      v-for="(list, index) in sideNavigateList"
      :key="`${list.id}-${index}`"
      class="fixed bottom-16 left-20"
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
import VueScrollTo from 'vue-scrollto'

import ProjectOverview from '~/components/totiw/ProjectOverview.vue'
import Research from '~/components/totiw/Research.vue'
import Define from '~/components/totiw/Define.vue'
import Ideate from '~/components/totiw/Ideate.vue'
import Wireframe from '~/components/totiw/Wireframe.vue'
import Visual from '~/components/totiw/Visual.vue'
import Final from '~/components/totiw/Final.vue'
import Outcome from '~/components/totiw/Outcome.vue'

import SideNavigate from '~/components/totiw/SideNavigate.vue'

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
    id: 'prototypeAndTest',
    label: 'Prototype & Testing',
    isActive: false,
  },
  {
    id: 'visualDesign',
    label: 'Visual Design',
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

const sideNavigateList = ref([
  {
    id: 'main',
    title: 'Information Architecture',
    subtitle: 'figjam',
    to: 'https://www.figma.com/file/9iTdNcXe9CjSBlqdkjFRnO/Untitled?node-id=0:1',
    isActive: false,
  },
  {
    id: 'concept',
    title: 'Full Size Mood Board',
    subtitle: 'pdf',
    to: '/file/totiw-moodboard.pdf',
    isActive: false,
  },
  {
    id: 'wireframe',
    title: 'Wireframe',
    subtitle: 'figma',
    to: 'https://www.figma.com/design/5nI6uPuzHbRpZFp47fCeTL/Totiw-Wireframe-(5-pages)?node-id=0-1&p=f&t=gfyDDMUmVQ7PIoTX-0',
    isActive: false,
  },
  {
    id: 'appScreen',
    title: 'Application Screens',
    subtitle: 'figma',
    to: 'https://www.figma.com/design/mqJNhhsUThM9F7zlCCpCxN/Totiw-Application?node-id=172-5132',
    isActive: false,
  },
  {
    id: 'appPrototype',
    title: 'Application Prototype',
    subtitle: 'figma',
    to: 'https://www.figma.com/proto/mqJNhhsUThM9F7zlCCpCxN/Totiw-Application?node-id=1301-6502&p=f&scaling=scale-down&content-scaling=fixed&page-id=172%3A5132&starting-point-node-id=1301%3A6475&show-proto-sidebar=1',
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

      if (
        currentIntersection.value !== 'ideate' &&
        currentIntersection.value !== 'prototypeAndTest'
      ) {
        sideNavigateList.value.forEach((item) => {
          item.isActive = false
        })
      }

      if (currentIntersection.value === 'visualDesign') {
        sideNavigateList.value.forEach((item) => {
          item.isActive = item.id === 'appScreen'
        })
      }

      if (currentIntersection.value === 'final') {
        sideNavigateList.value.forEach((item) => {
          item.isActive = item.id === 'appPrototype'
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
.totiw-page {
  @apply bg-[#F7F4ED];
  .header {
    @apply relative;
  }
}
</style>

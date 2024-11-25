<template>
  <div class="totiw-page">
    <div class="header">
      <img
        class="w-full h-screen object-cover"
        src="/images/totiw/header.png"
        alt="totiw-header"
        loading="lazy"
        placeholder="blur"
      />
      <div
        class="absolute inset-0 flex flex-col-reverse lg:grid lg:grid-cols-2 gap-4 px-10 lg:px-40"
      >
        <div class="flex flex-col justify-center">
          <div class="mb-10">
            <h1 class="text-[48px] font-normal">โต๊ะติว (To-tiw)</h1>
            <p>Knowledge sharing application</p>
          </div>
          <p class="lg:max-w-[80%] text-lg lg:text-xl">
            The To-tiw application is my thesis project that solve problem faced by college
            students, as well as my friends in other faculties. This application aims to solve this
            problem by preventing the wastage of knowledge resources that are left behind when
            students graduate. By connecting both current and former students to use the rest of the
            knowledge resources for maximum benefits.
          </p>
        </div>
        <div class="flex items-center justify-center pt-30">
          <img
            class="w-full object-contain"
            src="/images/totiw/header-pic.png"
            alt="header-pic"
            loading="lazy"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
    <div
      class="homepage-body bg-cover bg-center"
      style="background-image: url(/images/totiw/totiw-bg.png)"
    >
      <div class="body-section grid grid-cols-12 px-10 lg:px-24 py-40">
        <div class="col-start-1 col-end-3 hidden lg:block relative">
          <div class="w-full sticky top-28 bg-white rounded-[32px] inline-grid gap-2 px-6 py-4">
            <a
              v-for="(list, index) in navigationList"
              :key="index"
              v-scroll-to="`#${list.id}`"
              class="font-normal hover:underline hover:text-primary cursor-pointer"
              :class="list.isActive ? 'text-primary underline' : ''"
            >
              {{ list.label }}
            </a>
          </div>
        </div>
        <div
          id="projectObserver"
          class="col-start-1 lg:col-start-4 col-end-13 flex flex-col space-y-4 lg:space-y-10"
        >
          <section id="projectOverview">
            <ProjectOverview />
          </section>

          <section id="research">
            <Research />
          </section>

          <section id="define">
            <Define />
          </section>

          <section id="ideate">
            <Ideate @active-section="handleIdeateActiveSection" />
          </section>

          <section id="wireframe">
            <Wireframe @active-section="handleIdeateActiveSection" />
          </section>

          <section id="final">
            <Final />
          </section>

          <section id="outcome">
            <Outcome />
          </section>
        </div>
      </div>

      <div class="w-full flex items-center justify-center pb-20">
        <p>If you like this project, <span class="text-2xl text-primary">contact me!</span></p>
      </div>
    </div>

    <div v-for="(list, index) in sideNavigateList" :key="index" class="fixed bottom-16 left-24">
      <div
        :id="list.id"
        :class="['transition duration-500', list.isActive ? 'opacity-100' : 'opacity-0']"
      >
        <SideNavigate :title="list.title" :sub-title="list.subtitle" :to="list.to" />
      </div>
    </div>
  </div>
</template>

<script lang="tsx" setup>
import ProjectOverview from '~/components/totiw/ProjectOverview.vue'
import Research from '~/components/totiw/Research.vue'
import Define from '~/components/totiw/Define.vue'
import Ideate from '~/components/totiw/Ideate.vue'
import Wireframe from '~/components/totiw/Wireframe.vue'
import Final from '~/components/totiw/Final.vue'
import Outcome from '~/components/totiw/Outcome.vue'

import SideNavigate from '~/components/totiw/SideNavigate.vue'

const navigationList = ref([
  {
    id: 'projectOverview',
    label: 'Project Overview',
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
    id: 'wireframesAndTesting',
    label: 'Wireframes and testing',
    isActive: false,
  },
  {
    id: 'visualDesign',
    label: 'Visual Design',
    isActive: false,
  },
  {
    id: 'finalProduct',
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
    id: 'flow',
    title: 'Full Size Flowchart',
    subtitle: 'pdf',
    to: '',
    isActive: false,
  },
  {
    id: 'concept',
    title: 'Full Size Mood Board',
    subtitle: 'pdf',
    to: '',
    isActive: false,
  },
  {
    id: 'wireframe',
    title: 'Wireframe',
    subtitle: 'figma',
    to: '',
    isActive: false,
  },
])

onMounted(() => {
  activeIntersection()
})

const currentIntersection = ref<string>('')

const activeIntersection = () => {
  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      const { target } = entry
      const { id } = target as HTMLElement
      if (entry.isIntersecting) {
        currentIntersection.value = id
      }

      if (currentIntersection.value) {
        navigationList.value.forEach((item) => {
          if (item.id === currentIntersection.value) {
            item.isActive = true
          } else {
            item.isActive = false
          }
        })
      }

      if (currentIntersection.value !== 'ideate' && currentIntersection.value !== 'wireframe') {
        resetIdeateActiveSection()
      }
    })
  }

  const observerShot = new IntersectionObserver(callback, {
    rootMargin: '0px',
    threshold: 0.75,
  })
  const observerLong = new IntersectionObserver(callback, {
    rootMargin: '0px',
    threshold: 0.2,
  })

  const sections = document.querySelectorAll('#projectObserver > section')
  sections.forEach((section) => {
    if (section.id === 'define' || section.id === 'ideate') {
      observerLong.observe(section)
    } else {
      observerShot.observe(section)
    }
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

const resetIdeateActiveSection = () => {
  sideNavigateList.value.forEach((item) => {
    item.isActive = false
  })
}
</script>

<style lang="scss" scoped>
.totiw-page {
  .header {
    @apply relative;
  }
}
</style>

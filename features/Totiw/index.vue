<template>
  <div class="totiw-page">
    <div class="header">
      <nuxt-img
        class="w-full h-screen object-cover"
        src="/images/totiw/header.png"
        alt="totiw-header"
        loading="lazy"
        placeholder
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
          <nuxt-img
            class="w-full object-contain"
            src="/images/totiw/header-pic.png"
            alt="header-pic"
            loading="lazy"
            placeholder
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
            <Ideate />
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="tsx" setup>
import ProjectOverview from '~/components/totiw/ProjectOverview.vue'
import Research from '~/components/totiw/Research.vue'
import Define from '~/components/totiw/Define.vue'
import Ideate from '~/components/totiw/Ideate.vue'

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
    })
  }

  const observerShot = new IntersectionObserver(callback, {
    rootMargin: '0px',
    threshold: 0.75,
  })
  const observerLong = new IntersectionObserver(callback, {
    rootMargin: '0px',
    threshold: 0.25,
  })

  const sections = document.querySelectorAll('#projectObserver > section')
  sections.forEach((section) => {
    if (section.id === 'define') {
      observerLong.observe(section)
    } else {
      observerShot.observe(section)
    }
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

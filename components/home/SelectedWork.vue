<template>
  <div class="py-20">
    <div class="flex flex-col items-center">
      <h2 class="text-[128px]">Selected Work</h2>
      <p class="text-2xl font-light text-center font-poppins">
        featured my ux/ui project <br />
        from 2020 to 2024
      </p>
    </div>

    <div class="grid grid-cols-1 gap-20 mt-10 px-32">
      <div
        v-for="(project, index) in projects"
        :key="project.title"
        class="relative"
        ref="target"
        :id="project.title"
      >
        <nuxt-img :src="project.path" class="w-full opacity-0" alt="project" />
        <div class="absolute inset-0">
          <transition name="slide-up">
            <div v-if="project.isShow">
              <div
                class="[&:hover_.img-second]:opacity-100 [&:hover_.img-first]:opacity-0 relative"
              >
                <nuxt-img
                  :src="project.path"
                  class="w-full opacity-100 img-first transition-opacity duration-500 absolute inset-0"
                  alt="project"
                />
                <nuxt-link
                  :to="project.to"
                  class="absolute inset-0 opacity-0 img-second transition-opacity duration-500 cursor-hover-work"
                >
                  <nuxt-img :src="project.pathHover" class="w-full" alt="project" />
                </nuxt-link>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="tsx" setup>
import { ref } from '#imports'
import { useIntersectionObserver } from '@vueuse/core'

const projects = ref([
  {
    title: 'Project 1',
    path: '/images/homepage/work1.png',
    pathHover: '/images/homepage/work1-alt.png',
    isShow: false,
    to: '/works/project1',
  },
  {
    title: 'Project 2',
    path: '/images/homepage/work2.png',
    pathHover: '/images/homepage/work2-alt.png',
    isShow: false,
    to: '/works/project2',
  },
  {
    title: 'Project 3',
    path: '/images/homepage/work3.png',
    pathHover: '/images/homepage/work3-alt.png',
    isShow: false,
    to: '/works/project3',
  },
  {
    title: 'Project 4',
    path: '/images/homepage/work4.png',
    pathHover: '/images/homepage/work4-alt.png',
    isShow: false,
    to: '/works/project4',
  },
  {
    title: 'Project 5',
    path: '/images/homepage/work5.png',
    pathHover: '/images/homepage/work5-alt.png',
    isShow: false,
    to: '/works/project5',
  },
])

const target = ref(null)
const { stop } = useIntersectionObserver(
  target,
  ([entry], observer) => {
    if (entry.isIntersecting) {
      const currentProject = projects.value.find((project) => project.title === entry.target.id)
      if (currentProject) {
        currentProject.isShow = true
      }
    }
  },
  { threshold: 0.5 }
)
</script>

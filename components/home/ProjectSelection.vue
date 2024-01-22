<template>
  <div class="project-selection">
    <div class="grid grid-cols-12 items-center">
      <div class="w-full h-full col-start-1 col-end-6 relative">
        <div class="w-full h-full absolute inset-0 flex items-center">
          <Transition name="slide-right" mode="out-in">
            <img
              :key="currentProjectImg"
              :src="currentProjectImg || '/images/homepage/none.png'"
              alt="preview"
              loading="lazy"
            />
          </Transition>
        </div>
        <div class="w-full h-full bg-transparent" />
      </div>
      <div class="col-start-7 col-end-12">
        <h1 class="text-5xl font-light border-b-2 border-dark py-4">Work</h1>
        <div>
          <nuxt-link
            v-for="(project, index) in projectInfo"
            :key="index"
            :to="project.to"
            :class="[
              'border-b-2 py-5 flex justify-between items-center',
              'cursor-pointer hover:text-secondary group',
            ]"
            @mouseenter="() => (currentProjectImg = project.image)"
            @mouseleave="() => (currentProjectImg = '/images/homepage/none.png')"
          >
            <div class="flex">
              <Icon
                name="i-ic:sharp-arrow-forward"
                class="w-0 h-8 group-hover:w-8 text-secondary transition-width duration-300"
              />
              <div>
                <h1 class="text-2xl">{{ project.title }}</h1>
                <p>{{ project.description }}</p>
              </div>
            </div>
            <p class="text-secondary">{{ project.type }}</p>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="tsx">
const currentProjectImg = ref<string>('/images/homepage/none.png')
const projectInfo = ref([
  {
    title: 'Good Health Station',
    description: 'Health check service station',
    type: 'service design, application',
    image: '/images/homepage/none.png',
    to: '/works/good-health-station',
  },
  {
    title: 'โต๊ะติว (Totiw)',
    description: 'Knowledge sharing for student',
    type: 'application',
    image: '/images/homepage/totiw.png',
    to: '/works/totiw',
  },
  {
    title: 'MANA Krungtep',
    description: 'เพื่อนคู่ใจ ทุกการเดินทางของคนกรุงเทพ',
    type: 'application',
    image: '/images/homepage/none.png',
    to: '/works/mana-krungtep',
  },
  {
    title: 'CO Backyard',
    description: 'Urban vegetable garden for condominium life',
    type: 'service design, application',
    image: '/images/homepage/co-backyard.png',
    to: '/works/co-backyard',
  },
  {
    title: 'พาเพื่อนหมา ไปทำหมัน',
    description: 'CNVR for stayed dog freind',
    type: 'service design',
    image: '/images/homepage/cnvr.png',
    to: '/works/cnvr',
  },
])
</script>

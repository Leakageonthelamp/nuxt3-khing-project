<template>
  <div class="project-selection">
    <div class="grid grid-cols-12 items-center">
      <div class="w-full h-full col-start-1 col-end-6 relative">
        <div class="w-full h-full absolute inset-0 flex items-center">
          <Transition name="slide-right" mode="out-in">
            <nuxt-img
              :key="currentProjectImg"
              :src="currentProjectImg || '/images/homepage/none.png'"
              alt="preview"
            />
          </Transition>
        </div>
        <div class="w-full h-full bg-transparent" />
      </div>
      <div class="col-start-7 col-end-12">
        <h1 class="text-5xl font-light border-b-2 border-dark py-4">Work</h1>
        <div>
          <div
            v-for="(project, index) in projectInfo"
            :key="index"
            :class="[
              'border-b-2 py-5 flex justify-between items-center',
              'cursor-pointer hover:text-secondary',
            ]"
            @mouseenter="() => (currentProjectImg = project.image)"
            @mouseleave="() => (currentProjectImg = '/images/homepage/none.png')"
          >
            <div>
              <h1 class="text-2xl">{{ project.title }}</h1>
              <p>{{ project.description }}</p>
            </div>
            <p class="text-secondary">{{ project.type }}</p>
          </div>
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
  },
  {
    title: 'โต๊ะติว (Totiw)',
    description: 'Knowledge sharing for student',
    type: 'application',
    image: '/images/homepage/totiw.png',
  },
  {
    title: 'MANA Krungtep',
    description: 'เพื่อนคู่ใจ ทุกการเดินทางของคนกรุงเทพ',
    type: 'application',
    image: '/images/homepage/none.png',
  },
  {
    title: 'CO Backyard',
    description: 'Urban vegetable garden for condominium life',
    type: 'service design, application',
    image: '/images/homepage/co-backyard.png',
  },
  {
    title: 'พาเพื่อนหมา ไปทำหมัน',
    description: 'CNVR for stayed dog freind',
    type: 'service design',
    image: '/images/homepage/cnvr.png',
  },
])
</script>

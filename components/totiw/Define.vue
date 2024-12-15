<template>
  <div>
    <h1 class="text-4xl text-totiw-blue">Define information</h1>
    <p class="mt-4">
      After summarizing interviews, I analyzed data using various methods, including competitor
      analysis.
    </p>

    <div class="mt-4">
      <ImageCarousel :items="slideItems" buttonColor="bg-totiw-blue" />
    </div>

    <p class="mt-6">
      From my analysis, I designed the app to include “givers” (sharing books, notes, and knowledge)
      and “receivers” (using them for exams or studying),and I captured in the framework “Who Shares
      What to Whom?” and Persona of these two roll
    </p>

    <div class="grid grid-cols-2 gap-10 px-14 mt-6">
      <img src="/images/works/totiw/define1.png" alt="define1" class="w-full col-span-2" />

      <img src="/images/works/totiw/define2.png" alt="define2" class="w-full" />
      <img src="/images/works/totiw/define3.png" alt="define3" class="w-full" />
    </div>
  </div>
</template>

<script lang="tsx" setup>
const slideItems = ref([
  {
    title: 'slide_1',
    image: '/images/totiw/define-slide-1.png',
  },
  {
    title: 'slide_2',
    image: '/images/totiw/define-slide-2.png',
  },
  {
    title: 'slide_3',
    image: '/images/totiw/define-slide-3.png',
  },
  {
    title: 'slide_4',
    image: '/images/totiw/define-slide-4.png',
  },
])
</script>

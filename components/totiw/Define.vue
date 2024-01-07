<template>
  <div>
    <div class="text-[48px] border-b border-dark pb-4">Define</div>
    <div class="my-10">
      <p class="text-xl">
        After summarizing interviews, I analyzed data using various methods, including competitor
        analysis. I identified pros and cons of other apps, organized on a Miro board (in Thai).
        This analysis provided valuable insights, guiding informed design decisions for
        user-centered experiences.
      </p>

      <div class="mt-10 mb-8">
        <ImageCarousel :items="slideItems" />
        <p class="text-secondary">Some section form my Miro board.</p>
      </div>
      <p class="text-xl">
        I found that users played different roles in sharing: "givers" (lending, sharing knowledge,
        tutoring) and "receivers." To address knowledge sharing challenges among students, To
        capture this, I created a framework titled "Who Shares What to Whom?"
      </p>
      <div class="my-16">
        <img class="w-full object-contain" src="/images/totiw/who-share-whom.png" alt="wsw-totiw" />
      </div>
      <div>
        <h1 class="text-[40px] text-primary mb-6">Create persona</h1>
        <p class="text-xl">
          Based on the above framework, it is evident that this app should have two roles: the tutor
          and the receiver. Therefore, I have summarized the data into two personas.
        </p>
        <div class="grid grid-cols-2 gap-6 mt-10">
          <img
            class="w-full object-contain"
            src="/images/totiw/persona-1.png"
            alt="persona-totiw-1"
          />
          <img
            class="w-full object-contain"
            src="/images/totiw/persona-2.png"
            alt="persona-totiw-2"
          />
        </div>
      </div>
      <div class="my-20">
        <h1 class="text-[40px] text-primary mb-6">Design Opportunity</h1>
        <p class="text-xl">
          I have categorized the problems and identified four main areas where we can find design
          opportunities. These opportunities will be used to brainstorm and create new features in
          the next design phase.
        </p>
        <div class="mt-20">
          <img
            class="w-full object-contain"
            src="/images/totiw/design-oppo.png"
            alt="design-oppo"
          />
        </div>
      </div>
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

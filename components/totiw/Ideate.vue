<template>
  <div id="ideateSection">
    <div class="text-[48px] border-b border-dark pb-4">Ideate</div>
    <section id="main" class="my-10">
      <p class="text-xl">
        I outline the key features for the app based on the idea of university students studying
        together at tables. The app's main page, called "To-tiw" (โต๊ะติว), will serve as a
        centralized community hub with categorized tables for different subjects. The app will
        include functions like a Directory to find tables, borrowing and exchanging books or notes,
        as well as features such as Search, Notification, Profile, Chat, and Feed to enhance the
        community experience.
      </p>
      <p class="text-xl mt-6">
        And I have matched personas with various features to highlight the importance of each
        feature. This helps in organizing the features for designing the information architecture.
      </p>

      <div class="mt-10">
        <img
          class="w-full object-contain"
          src="/images/totiw/ideate-pic-1.png"
          alt="ideate-pic-1"
        />
        <p class="text-secondary">I mapped the persona and features into a table.</p>
      </div>
    </section>

    <section id="flow" class="my-24">
      <div class="max-w-[300px]">
        <h2 class="text-primary text-[40px] mb-4">Simplified flow</h2>
        <p class="text-xl">
          for easy understanding. If you're interested in viewing the full version (in Thai),
        </p>
        <p class="text-secondary text-xl">see on the side!</p>
      </div>
      <div>
        <img
          class="w-full object-contain"
          src="/images/totiw/ideate-pic-2.png"
          alt="ideate-pic-2"
        />
      </div>
    </section>

    <section id="concept" class="my-24">
      <h2 class="text-primary text-[40px]">Concept & Visual Idea</h2>
      <div class="my-4">
        <p class="text-xl mb-4">
          For the design concept, the keywords used are "StudyBuddy," positioning the application as
          a "Networker" and "Companion" that connects students from different universities to share
          knowledge and act as helpful friends in academic learning.
        </p>
        <p class="text-xl">
          The art direction for this project is inspired by the playful and colorful aesthetics of
          the 90s, targeting today's university students who appreciate in Y2K style. I went in
          search of images from old magazines and divided them into elements, categorizing them
          based on two metrics: retro-modern and cool-cute.
        </p>
      </div>

      <div class="grid grid-cols-2 gap-5">
        <div>
          <img
            class="w-full object-contain"
            src="/images/totiw/ideate-pic-3.png"
            alt="ideate-pic-3"
          />
          <p class="text-secondary">Metric form images from old magazines</p>
        </div>
        <div>
          <img
            class="w-full object-contain"
            src="/images/totiw/ideate-pic-4.png"
            alt="ideate-pic-4"
          />
          <p class="text-secondary">My mood board that pick element form metic</p>
        </div>
      </div>
    </section>

    <section id="concept" class="my-24">
      <div>
        <h2 class="text-primary text-[40px] mb-4">Skecthing</h2>
        <p class="text-xl mb-10">
          I selected elements, sketching ideas, incorporated feedback, developed three art
          directions, and made choices based on voting and feedback from professors. This process
          led to the creation of a final concept.
        </p>
        <img
          class="w-full object-contain"
          src="/images/totiw/skecthing.png"
          alt="ideate-skecthing"
        />
      </div>
    </section>
  </div>
</template>

<script lang="tsx" setup>
const emits = defineEmits(['activeSection'])

onMounted(() => {
  activeIntersection()
})

const activeIntersection = () => {
  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      const { target } = entry
      const { id } = target as HTMLElement
      if (entry.isIntersecting) {
        emits('activeSection', id)
      }
    })
  }

  const observerShot = new IntersectionObserver(callback, {
    rootMargin: '0px',
    threshold: 0.5,
  })
  const observerLong = new IntersectionObserver(callback, {
    rootMargin: '0px',
    threshold: 0.25,
  })

  const sections = document.querySelectorAll('#ideateSection > section')
  sections.forEach((section) => {
    if (section.id === 'flow') {
      observerLong.observe(section)
    } else {
      observerShot.observe(section)
    }
  })
}
</script>

<template>
  <div id="ideateSection">
    <h1 class="text-4xl text-totiw-blue">Ideate</h1>

    <section id="main" class="mt-6">
      <p>
        I outline the key features for the app based on the idea of university students studying
        together at tables. The app's main page, called "To-tiw" (โต๊ะติว), will serve as a
        centralized community hub with categorized tables for different subjects. The app will
        include functions like a Directory to find tables, borrowing and exchanging books or notes,
        and tools like Search, Notifications, Profile, Chat, and Feed to enhance the community
        experience.
      </p>
      <p class="mt-6 text-totiw-blue">
        And I have matched personas with various features to highlight the importance of each
        feature. This helps in organizing the features for designing the information architecture.
      </p>
      <img class="w-full mt-4" src="/images/works/totiw/ideate1.png" alt="ideate-pic-1" />
    </section>

    <div class="divider my-10" />

    <section id="flow">
      <div class="flex flex-col md:flex-row">
        <div class="md:max-w-[240px]">
          <h2 class="text-totiw-blue text-4xl whitespace-nowrap">Simplified flow</h2>
          <p class="mt-6">
            for easy understanding. If you're interested in viewing the full version (in Thai),
          </p>
          <p class="text-totiw-yellow">see on the side!</p>
        </div>
        <div class="mt-20">
          <img
            class="w-full object-contain"
            src="/images/works/totiw/ideate2.png"
            alt="ideate-pic-2"
          />
        </div>
      </div>
    </section>

    <div class="divider my-10" />

    <section id="concept">
      <h2 class="text-totiw-blue text-4xl">Concept & Visual Idea</h2>
      <div class="mt-6">
        <p>
          For the design concept, the keywords used are "StudyBuddy," positioning the application as
          a "Networker" and "Companion" that connects students from different universities to share
          knowledge and act as helpful friends in academic learning.
        </p>
        <p class="mt-6">
          The art direction for this project is inspired by the playful and colorful aesthetics of
          the 90s, targeting today's university students who appreciate in Y2K style. I went in
          search of images from old magazines and divided them into elements, categorizing them
          based on two metrics: retro-modern and cool-cute.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 md:px-14">
        <div>
          <img class="w-full" src="/images/works/totiw/ideate3.png" alt="ideate-pic-3" />
          <p class="text-totiw-blue text-sm">Metric form images from old magazines</p>
        </div>
        <div>
          <img class="w-full" src="/images/works/totiw/ideate4.png" alt="ideate-pic-4" />
          <p class="text-totiw-blue text-sm">My mood board that pick element form metic</p>
        </div>
      </div>
    </section>

    <div class="divider my-10" />

    <section id="skecthing">
      <div>
        <h2 class="text-totiw-blue text-4xl">Skecthing</h2>
        <p class="mt-6">
          I selected elements, sketching ideas, incorporated feedback, developed three art
          directions, and made choices based on voting and feedback from professors. This process
          led to the creation of a final concept.
        </p>
        <img
          class="w-full md:px-14 mt-6"
          src="/images/works/totiw/ideate5.png"
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

        emits('activeSection', id)
      }
    })
  }

  const observer = new IntersectionObserver(callback, {
    rootMargin: '-45% 0px -45% 0px',
    threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
  })

  const sections = document.querySelectorAll('#ideateSection > section')
  sections.forEach((section) => {
    observer.observe(section)
  })
}
</script>

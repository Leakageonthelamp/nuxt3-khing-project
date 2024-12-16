<template>
  <div id="ideateSection">
    <section id="main">
      <h1 class="text-4xl text-hra">Ideate</h1>
      <h2 class="text-3xl text-hra-secondary">Let’s Do Workshop!</h2>

      <p class="mt-10">
        I led a brainstorming workshop with stakeholders and team members. I shared the user journey
        and pain points from the interviews, encouraging everyone to contribute ideas and discuss
        solutions. This session helped us refine existing concepts and uncover new ways to improve
        the screening process
      </p>

      <div class="mt-6 grid grid-cols-2 gap-4">
        <div>
          <img src="/images/works/hra/ideate1.png" alt="ideate-1" class="w-full" />
          <p class="text-hra text-sm">Brainstorming workshop in figjam</p>
        </div>
        <div>
          <img src="/images/works/hra/ideate2.png" alt="ideate-2" class="w-full" />
          <p class="text-hra text-sm">
            Ideas I grouped and selected as key takeaways for the project.
          </p>
        </div>
      </div>
    </section>

    <div class="divider my-10" />

    <section id="solution">
      <h1 class="text-4xl text-hra">Solution</h1>
      <img src="/images/works/hra/ideate3.png" alt="ideate-3" class="w-full mt-10" />

      <h2 class="text-3xl text-hra-secondary mt-10">The solution can be view as this journey</h2>
      <img src="/images/works/hra/ideate4.png" alt="ideate-4" class="w-full mt-6" />
    </section>

    <div class="divider my-10" />

    <section id="competitor">
      <h1 class="text-4xl text-hra">Competitor Analysis</h1>
      <img src="/images/works/hra/ideate5.png" alt="ideate-5" class="w-full mt-6" />

      <p class="mt-10">
        To refine our ideas, I analyzed platforms like Google Forms, Typeform, and health screening
        apps. From this analysis, we identified two main types of forms: multiple forms and single
        forms. This analysis showed that multiple forms work best for staff, while single forms are
        more suitable for patients, helping to address their unique needs effectively.
      </p>

      <div class="mt-10 grid grid-cols-2 gap-6">
        <img src="/images/works/hra/ideate6.png" alt="ideate-6" class="w-full" />
        <img src="/images/works/hra/ideate7.png" alt="ideate-7" class="w-full" />
      </div>
    </section>

    <div class="divider my-10" />

    <section id="flowchart">
      <h1 class="text-4xl text-hra">Key Features and flowchart</h1>
      <div class="flex flex-col gap-10 mt-6">
        <img src="/images/works/hra/ideate8.png" alt="ideate-8" class="w-full" />
        <img src="/images/works/hra/ideate9.png" alt="ideate-9" class="w-full" />
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

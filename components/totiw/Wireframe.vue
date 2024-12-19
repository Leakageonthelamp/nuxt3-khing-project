<template>
  <div id="wireframeSection">
    <section id="wireframe">
      <div class="text-4xl text-totiw-blue">Wireframe & Usability Test</div>
      <p class="mt-6">
        I designed and tested a navigator and wireframe, collecting feedback from university friends
        through usability tests. Observing their interactions with the prototype helped me identify
        areas for improvement and refine the design iteratively. This process was repeated over 2
        months with multiple rounds of usability testing, resulting in a refined and user-friendly
        design.
      </p>

      <div class="mt-10 md:px-14">
        <img
          class="w-full object-contain"
          src="/images/works/totiw/wireframe1.png"
          alt="wireframe"
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

  const sections = document.querySelectorAll('#wireframeSection > section')
  sections.forEach((section) => {
    observer.observe(section)
  })
}
</script>

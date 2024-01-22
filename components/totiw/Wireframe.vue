<template>
  <div id="wireframeSection">
    <section id="wireframe">
      <div class="text-[48px] border-b border-dark pb-4">Wireframe & Usability Test</div>
      <div class="my-10">
        <p class="text-xl">
          I designed and tested a navigator and wireframe, gathering feedback through usability
          tests with university friends. By observing their interactions with the prototype, I
          identified areas for improvement and made iterative adjustments based on the test results.
          This process was repeated over 2 months with multiple rounds of usability testing,
          resulting in a refined and user-friendly design.
        </p>

        <div class="my-16">
          <img class="w-full object-contain" src="/images/totiw/wireframe.png" alt="wireframe" />
        </div>
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

  const observer = new IntersectionObserver(callback, {
    rootMargin: '0px',
    threshold: 0.5,
  })

  const sections = document.querySelectorAll('#wireframeSection > section')
  sections.forEach((section) => {
    observer.observe(section)
  })
}
</script>
